# PowerShell script to unlock HTML lessons for Arul G via Clerk API
$ErrorActionPreference = "Stop"

# Configuration
$apiKey = "sk_test_OG7V2CceBFfxkdHLJxLczbvYeNX84SdIvoMtBD9aVb"
$userId = "user_37W"
$userEmail = "7a06arul@gmail.com"

# HTML lessons to unlock
$lessons = @("html-1", "html-2", "html-3", "html-4", "html-5", "html-6", "html-7")

Write-Host "`n============================================================" -ForegroundColor Cyan
Write-Host "UNLOCKING LESSONS FOR ARUL G" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "User ID: $userId"
Write-Host "Email: $userEmail"
Write-Host "Lessons: $($lessons -join ', ')"
Write-Host "============================================================`n" -ForegroundColor Cyan

try {
    # Setup headers
    $headers = @{
        "Authorization" = "Bearer $apiKey"
        "Content-Type" = "application/json"
    }
    
    # Get user
    Write-Host "[1/3] Fetching user data..." -ForegroundColor Yellow
    $url = "https://api.clerk.com/v1/users/$userId"
    
    try {
        $user = Invoke-RestMethod -Uri $url -Headers $headers -Method Get
        Write-Host "      Found: $($user.first_name) $($user.last_name)" -ForegroundColor Green
    }
    catch {
        if ($_.Exception.Response.StatusCode.value__ -eq 404) {
            Write-Host "      User not found, searching by email..." -ForegroundColor Yellow
            $searchUrl = "https://api.clerk.com/v1/users?email_address[]=$userEmail"
            $results = Invoke-RestMethod -Uri $searchUrl -Headers $headers -Method Get
            
            if ($results -and $results.Count -gt 0) {
                $user = $results[0]
                $userId = $user.id
                Write-Host "      Found user ID: $userId" -ForegroundColor Green
            }
            else {
                Write-Host "`n      ERROR: User not found. They need to sign up first!" -ForegroundColor Red
                exit 1
            }
        }
        else {
            throw
        }
    }
    
    # Get current metadata
    Write-Host "[2/3] Reading current progress..." -ForegroundColor Yellow
    $metadata = $user.public_metadata
    if (-not $metadata) { $metadata = @{} }
    
    $currentLessons = $metadata.completedLessons
    if (-not $currentLessons) { $currentLessons = @() }
    
    Write-Host "      Current lessons: $($currentLessons.Count)" -ForegroundColor Gray
    
    # Merge lessons
    $allLessons = $currentLessons + $lessons | Select-Object -Unique
    $newCount = $allLessons.Count - $currentLessons.Count
    Write-Host "      Adding: $newCount new lessons" -ForegroundColor Gray
    
    # Update metadata
    Write-Host "[3/3] Updating user metadata..." -ForegroundColor Yellow
    $updateUrl = "https://api.clerk.com/v1/users/$userId/metadata"
    $body = @{
        public_metadata = @{
            completedLessons = $allLessons
            lastUpdated = (Get-Date).ToUniversalTime().ToString("o")
        }
    } | ConvertTo-Json -Depth 10
    
    $result = Invoke-RestMethod -Uri $updateUrl -Headers $headers -Method Patch -Body $body
    
    Write-Host "`n============================================================" -ForegroundColor Green
    Write-Host "SUCCESS!" -ForegroundColor Green
    Write-Host "============================================================" -ForegroundColor Green
    Write-Host "Unlocked $newCount new HTML lessons"
    Write-Host "Total completed: $($allLessons.Count) lessons"
    Write-Host "`nUnlocked lessons:"
    $lessons | ForEach-Object { Write-Host "  - $_" -ForegroundColor Gray }
    Write-Host "`nNext steps:"
    Write-Host "1. User signs in at http://localhost:3000"
    Write-Host "2. Navigate to HTML course"
    Write-Host "3. First 7 lessons will be marked complete"
    Write-Host "============================================================`n" -ForegroundColor Green
}
catch {
    Write-Host "`n============================================================" -ForegroundColor Red
    Write-Host "ERROR!" -ForegroundColor Red
    Write-Host "============================================================" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    if ($_.ErrorDetails.Message) {
        Write-Host $_.ErrorDetails.Message -ForegroundColor Red
    }
    Write-Host "============================================================`n" -ForegroundColor Red
    exit 1
}
