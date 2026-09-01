# Limpa cache Next.js corrompido (OneDrive) e reinicia dev com Turbopack
$ErrorActionPreference = "SilentlyContinue"
$root = Split-Path $PSScriptRoot -Parent

Write-Host "Encerrando processo na porta 3001..."
Get-NetTCPConnection -LocalPort 3001 | ForEach-Object {
  Stop-Process -Id $_.OwningProcess -Force
}

Start-Sleep -Seconds 2

$dirs = @(
  (Join-Path $root ".next"),
  (Join-Path $root "node_modules\.cache"),
  (Join-Path $env:LOCALAPPDATA "portfolio-next-cache")
)

foreach ($dir in $dirs) {
  if (Test-Path $dir) {
    Write-Host "Removendo: $dir"
    cmd /c "rmdir /s /q `"$dir`""
  }
}

Write-Host "Cache limpo. Iniciando npm run dev (Turbopack)..."
Set-Location $root
npm run dev
