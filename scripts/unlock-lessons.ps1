# PowerShell script to unlock lessons via Clerk API

$ErrorActionPreference = "Stop"

$CLERK_SECRET_KEY = "sk_test_OG7V2CceBFfxkdHLJxLczbvYeNX84SdIvoMtBD9aVb"
$USER_ID = "user_37W"
$USER_NAME = "Arul G"
$USER_EMAIL = "7a06arul@gmail.com"

# First 7 HTML lessons to unlock
$lessonIds = @(
    "html-1",
    "html-2", 
    "html-3",
    "html-4",
    "html-5",
    "html-6",
    "html-7"
)

Write-Host ""
Write-Host ("=" * 60)
Write-Host "🔓 UNLOCKING LESSONS VIA CLERK API" -ForegroundColor Cyan
Write-Host ("=" * 60)
Write-Host "User ID: $USER_ID"
Write-Host "User Name: $USER_NAME"
Write-Host "User Email: $USER_EMAIL"
Write-Host "Course: HTML"
Write-Host "Lessons to unlock: $($lessonIds.Count)"
Write-Host "Lesson IDs: $($lessonIds -join ', ')"
Write-Host ("=" * 60)

try {
    # Step 1: Get current user data
    Write-Host "`n📡 Step 1: Fetching current user data from Clerk..." -ForegroundColor Yellow
    
    $headers = @{
        "Authorization" = "Bearer $CLERK_SECRET_KEY"
        "Content-Type" = "application/json"
    }
    
    $getUserUrl = "https://api.clerk.com/v1/users/$USER_ID"
    
    try {
        $userData = Invoke-RestMethod -Uri $getUserUrl -Headers $headers -Method Get -ErrorAction Stop
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        if ($statusCode -eq 404) {
            Write-Host ""
            Write-Host "⚠️ User not found in Clerk database!" -ForegroundColor Yellow
            Write-Host ""
            Write-Host "The user with ID '$USER_ID' doesn't exist yet." -ForegroundColor Yellow
            Write-Host ""
            Write-Host "This could mean:"
            Write-Host "1. The user hasn't signed up yet"
            Write-Host "2. The user ID is incorrect"
            Write-Host ""
            Write-Host "To fix this:"
            Write-Host "1. Ask the user to sign up at: http://localhost:3000/sign-up"
            Write-Host "2. Or find the correct user ID from Clerk dashboard"
            Write-Host ""
            Write-Host "Let me try to search for the user by email instead..."
            Write-Host ""
            
            # Try to search by email
            $searchUrl = "https://api.clerk.com/v1/users?email_address=$USER_EMAIL"
            $searchResult = Invoke-RestMethod -Uri $searchUrl -Headers $headers -Method Get -ErrorAction Stop
            
            if ($searchResult -and $searchResult.Count -gt 0) {
                $userData = $searchResult[0]
                Write-Host "✅ Found user by email!" -ForegroundColor Green
                Write-Host "   Correct User ID: $($userData.id)"
                Write-Host ""
            } else {
                Write-Host "❌ User with email $USER_EMAIL not found in Clerk" -ForegroundColor Red
                Write-Host ""
                Write-Host "The user needs to sign up first at: http://localhost:3000/sign-up"
                exit 1
            }
        } else {
            throw
        }
    }
    
    Write-Host "✅ User found successfully!" -ForegroundColor Green
    $firstName = if ($userData.first_name) { $userData.first_name } else { "" }
    $lastName = if ($userData.last_name) { $userData.last_name } else { "" }
    $email = if ($userData.email_addresses -and $userData.email_addresses.Count -gt 0) { $userData.email_addresses[0].email_address } else { "N/A" }
    Write-Host "   User ID: $($userData.id)"
    Write-Host "   Name: $firstName $lastName"
    Write-Host "   Email: $email"
    
    $currentMetadata = if ($userData.public_metadata) { $userData.public_metadata } else { @{} }
    $currentCompletedLessons = if ($currentMetadata.completedLessons) { $currentMetadata.completedLessons } else { @() }
    Write-Host "   Current completed lessons: $($currentCompletedLessons.Count)"
    
    # Step 2: Merge new lessons with existing ones
    Write-Host "`n📝 Step 2: Merging lessons..." -ForegroundColor Yellow
    $allLessons = $currentCompletedLessons + $lessonIds | Select-Object -Unique
    $newLessonsAdded = $allLessons.Count - $currentCompletedLessons.Count
    Write-Host "   Previous count: $($currentCompletedLessons.Count)"
    Write-Host "   New lessons being added: $newLessonsAdded"
    Write-Host "   Total after update: $($allLessons.Count)"
    
    # Step 3: Update user metadata
    Write-Host "`n💾 Step 3: Updating user metadata in Clerk..." -ForegroundColor Yellow
    
    $actualUserId = $userData.id
    $updateUrl = "https://api.clerk.com/v1/users/$actualUserId/metadata"
    $updateBody = @{
        public_metadata = @{
            completedLessons = $allLessons
            lastUpdated = (Get-Date).ToUniversalTime().ToString("o")
        }
    } | ConvertTo-Json -Depth 10
    
    $updateResult = Invoke-RestMethod -Uri $updateUrl -Headers $headers -Method Patch -Body $updateBody
    Write-Host "✅ Metadata updated successfully!" -ForegroundColor Green
    
    # Success summary
    Write-Host ""
    Write-Host ("=" * 60)
    Write-Host "🎉 SUCCESS!" -ForegroundColor Green
    Write-Host ("=" * 60)
    Write-Host "✓ Unlocked $newLessonsAdded new lessons for $USER_NAME" -ForegroundColor Green
    Write-Host "✓ Total completed lessons: $($allLessons.Count)" -ForegroundColor Green
    Write-Host "`n📚 Unlocked HTML Lessons:"
    for ($i = 0; $i -lt $lessonIds.Count; $i++) {
        Write-Host "   $($i + 1). $($lessonIds[$i])"
    }
    Write-Host "`n📝 Next Steps:"
    Write-Host "   1. User should sign in at: http://localhost:3000/sign-in"
    Write-Host "   2. Navigate to the HTML course"
    Write-Host "   3. The first 7 lessons should now be marked as completed"
    Write-Host ("=" * 60)
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host ("=" * 60)
    Write-Host "❌ ERROR!" -ForegroundColor Red
    Write-Host ("=" * 60)
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    if ($_.ErrorDetails.Message) {
        Write-Host "Details: $($_.ErrorDetails.Message)" -ForegroundColor Red
    }
    Write-Host ("=" * 60)
    Write-Host ""
    exit 1
}
