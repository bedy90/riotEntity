const fs = require('fs');
const { github, context, exec } = require('@actions/github');

async function commentOnPullRequest() {
    const { data } = await github.pulls.listFiles({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: context.payload.pull_request.number,
    });

    const outdated = await exec.exec('npm', ['outdated', '--json']);
    const result = JSON.parse(outdated.stdout);

    const criticalUpdates = result.filter(dep => dep.type === 'major');

    if (criticalUpdates.length > 0) {
        const templatePath = `${process.env.GITHUB_WORKSPACE}/.github/template/outdated.md`;
        let template = fs.readFileSync(templatePath, 'utf8');

        // Créer le contenu du tableau à insérer dans le modèle
        let tableContent = '';
        criticalUpdates.forEach(dep => {
            tableContent += `| ${dep.name} | ${dep.current} | ${dep.wanted} | ${dep.latest} |\n`;
        });

        // Remplacer {{#each dependencies}}...{{/each}} dans le modèle par le contenu du tableau
        template = template.replace('{{#each dependencies}}\n{{/each}}', tableContent);

        await github.issues.createComment({
            owner: context.repo.owner,
            repo: context.repo.repo,
            issue_number: context.payload.pull_request.number,
            body: template,
        });
    } else {
        console.log('No critical updates found.');
    }
}

commentOnPullRequest().catch(error => {
    console.error('Error commenting on pull request:', error);
    process.exit(1);
});
