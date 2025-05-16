# Verificar si NSSM está instalado
if (Get-Command nssm -ErrorAction SilentlyContinue) {
    Write-Output "NSSM ya está instalado."
} else {
    Write-Output "NSSM no está instalado. Procediendo con la instalación..."
    
    # Descargar NSSM
    $nssmUrl = "https://nssm.cc/release/nssm-2.24.zip"
    $zipPath = "$env:TEMP\nssm.zip"
    $extractPath = "$env:ProgramFiles\nssm"
    Invoke-WebRequest -Uri $nssmUrl -OutFile $zipPath
    
    # Extraer NSSM
    Expand-Archive -Path $zipPath -DestinationPath $extractPath -force
    
    # Agregar NSSM al PATH
    $env:Path += ";$extractPath\nssm-2.24\win64"
    [System.Environment]::SetEnvironmentVariable("Path", $env:Path, [System.EnvironmentVariableTarget]::Machine)
    
    # Verificar la instalación
    if (Get-Command nssm -ErrorAction SilentlyContinue) {
        Write-Output "NSSM v2.24 se ha instalado correctamente."
    } else {
        Write-Output "Hubo un problema al instalar NSSM."
    }
    
    # Eliminar el archivo ZIP
    Remove-Item $zipPath
}