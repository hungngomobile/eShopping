Param(
    [parameter(Mandatory=$false)][string]$appName="eshopping"    
    )

Write-Host "Starting Helm Uninstallation" -ForegroundColor Green

# Uninstallation Process

$listOfReleases=$(helm ls --filter $appName -q)    
if ([string]::IsNullOrEmpty($listOfReleases)) {
    Write-Host "No previous installation found!!!" -ForegroundColor Green
}else{
    Write-Host "Found previous releases!!!" -ForegroundColor Green
    Write-Host "Removing previous helm releases..." -ForegroundColor Green
    helm uninstall $listOfReleases

    Write-Host "Removed previous releases" -ForegroundColor Green
}        


