<#
Script: push-to-fork.ps1
Purpose: Add (or set) a remote pointing to your fork and force-push the entire repository (all branches + tags), replacing files on the fork.
Usage: Run from repository root in PowerShell:
  .\scripts\push-to-fork.ps1 -ForkUrl "git@github.com:<your-username>/Portugol-Webstudio.git"
Or you can run without parameter and the script will prompt for the URL.

IMPORTANT: This will force-push and overwrite the fork's branches. Be sure you want to replace the fork contents.
#>
param(
    [string]$ForkUrl
)

function Confirm-Or-Exit($message) {
    $ok = Read-Host "$message (y/N)"
    if ($ok -ne 'y' -and $ok -ne 'Y') {
        Write-Host 'Aborted by user.' -ForegroundColor Yellow
        exit 1
    }
}

if (-not (Test-Path .git)) {
    Write-Host "This script must be run from the repository root (where .git exists)." -ForegroundColor Red
    exit 1
}

if (-not $ForkUrl) {
    $ForkUrl = Read-Host 'Paste your fork repo URL (HTTPS or SSH), e.g. git@github.com:youruser/Portugol-Webstudio.git or https://github.com/youruser/Portugol-Webstudio.git'
}

if (-not $ForkUrl) {
    Write-Host 'No URL provided, aborting.' -ForegroundColor Red
    exit 1
}

Write-Host "About to add/set remote 'myfork' -> $ForkUrl" -ForegroundColor Cyan
Confirm-Or-Exit "Continue and force-push all branches/tags to this remote (this WILL overwrite the fork)?"

# ensure working tree is clean
$st = git status --porcelain
if ($st) {
    Write-Host 'Your working tree has uncommitted changes. Please commit or stash them first.' -ForegroundColor Red
    exit 1
}

# add or update remote
$existing = git remote get-url myfork 2>$null
if ($LASTEXITCODE -eq 0) {
    git remote set-url myfork $ForkUrl
    Write-Host "Updated remote 'myfork' -> $ForkUrl"
} else {
    git remote add myfork $ForkUrl
    Write-Host "Added remote 'myfork' -> $ForkUrl"
}

# push all branches
Write-Host 'Pushing all branches (forced)...' -ForegroundColor Cyan
git push myfork --all --force
if ($LASTEXITCODE -ne 0) { Write-Host 'Failed pushing branches' -ForegroundColor Red; exit 1 }

# push tags
Write-Host 'Pushing tags (forced)...' -ForegroundColor Cyan
git push myfork --tags --force
if ($LASTEXITCODE -ne 0) { Write-Host 'Failed pushing tags' -ForegroundColor Red; exit 1 }

Write-Host 'All done. Your fork should now contain the repository content.' -ForegroundColor Green
Write-Host "Open: $ForkUrl" -ForegroundColor Green
