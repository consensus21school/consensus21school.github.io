Add-Type -AssemblyName System.Drawing

$files = @(
    "public\c21logo.png",
    "public\logo-198x213.png",
    "public\donations.png",
    "public\index-meta.png"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        try {
            $path = Resolve-Path $file
            $img = [System.Drawing.Image]::FromFile($path)
            Write-Host "$file : $($img.Width) x $($img.Height)"
            $img.Dispose()
        } catch {
            Write-Host "Error reading $file"
        }
    } else {
        Write-Host "$file not found"
    }
}
