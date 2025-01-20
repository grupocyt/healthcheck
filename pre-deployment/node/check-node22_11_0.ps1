# Verificar si Node.js está instalado
if (Get-Command node -ErrorAction SilentlyContinue) {
    Write-Output "Node.js ya está instalado."
} else {
    Write-Output "Node.js no está instalado. Procediendo con la instalación..."
    
    # Descargar el instalador de Node.js
    $nodeInstaller = "https://nodejs.org/dist/v22.11.0/node-v22.11.0-x64.msi"
    $installerPath = "$env:TEMP\nodejs_installer.msi"
    Invoke-WebRequest -Uri $nodeInstaller -OutFile $installerPath
    
    # Ejecutar el instalador
    Start-Process msiexec.exe -ArgumentList "/i $installerPath /quiet /norestart" -Wait
    
    # Verificar la instalación
    if (Get-Command node -ErrorAction SilentlyContinue) {
        Write-Output "Node.js v22.11.0 se ha instalado correctamente."
    } else {
        Write-Output "Hubo un problema al instalar Node.js."
    }
    
    # Eliminar el instalador
    Remove-Item $installerPath
}
