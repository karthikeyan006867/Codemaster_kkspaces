#!/bin/bash
echo "🔍 Quick Lesson Count Verification"
echo "=================================="
echo ""

for file in /workspaces/FLAVER-TOWN-PROJECT/data/lessons/*.ts; do
    if [[ "$file" == *"Detailed.ts" ]] || [[ "$file" == *"integration"* ]] || [[ "$file" == *".gitignore"* ]]; then
        continue
    fi
    
    filename=$(basename "$file" .ts)
    count=$(grep -c "^\s*id:" "$file" 2>/dev/null || echo "0")
    
    if [ "$count" -ge 50 ]; then
        echo "✅ $filename: $count lessons"
    elif [ "$count" -ge 10 ]; then
        echo "⚠️  $filename: $count lessons (needs more)"
    else
        echo "❓ $filename: $count lessons (check manually)"
    fi
done

echo ""
echo "=================================="
echo "✅ Verification complete!"
