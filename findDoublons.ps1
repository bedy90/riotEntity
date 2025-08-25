cd src/interface

Get-ChildItem -Recurse -Filter *.ts | 
  Select-String -Pattern 'export (interface|type) (\w+)' | 
  ForEach-Object { $_.Matches[0].Groups[2].Value } | 
  Group-Object | 
  Where-Object { $_.Count -gt 1 } | 
  Select-Object -ExpandProperty Name


cd ../..