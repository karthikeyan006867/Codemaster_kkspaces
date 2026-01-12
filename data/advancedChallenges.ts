// Advanced Code Challenges across multiple languages
// These challenges test algorithmic thinking, data structures, and problem-solving

export interface CodeChallenge {
  id: string
  title: string
  description: string
  difficulty: 'Medium' | 'Hard' | 'Expert'
  category: string
  points: number
  estimatedTime: number
  tags: string[]
  languages: string[] // Languages this challenge supports
  testCases: TestCase[]
  starterCode: { [language: string]: string }
  solution: { [language: string]: string }
  hints: string[]
  learningObjectives: string[]
  realWorldApplication: string
}

export interface TestCase {
  input: string
  expectedOutput: string
  explanation: string
}

export const advancedChallenges: CodeChallenge[] = [
  // CHALLENGE 1: Two Sum Problem
  {
    id: 'challenge-1',
    title: 'Two Sum - Find Pair with Target Sum',
    description: `Given an array of integers and a target sum, find two numbers that add up to the target. Return their indices.

**Example:**
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9

**Constraints:**
- Each input has exactly one solution
- You cannot use the same element twice
- Return answer in any order`,
    difficulty: 'Medium',
    category: 'Arrays & Hashing',
    points: 50,
    estimatedTime: 20,
    tags: ['array', 'hash-table', 'leetcode-easy'],
    languages: ['python', 'javascript', 'java', 'csharp', 'go'],
    testCases: [
      {
        input: 'nums = [2, 7, 11, 15], target = 9',
        expectedOutput: '[0, 1]',
        explanation: '2 + 7 = 9, so indices 0 and 1'
      },
      {
        input: 'nums = [3, 2, 4], target = 6',
        expectedOutput: '[1, 2]',
        explanation: '2 + 4 = 6, so indices 1 and 2'
      },
      {
        input: 'nums = [3, 3], target = 6',
        expectedOutput: '[0, 1]',
        explanation: '3 + 3 = 6, so indices 0 and 1'
      }
    ],
    starterCode: {
      python: `def two_sum(nums, target):
    """
    Find two indices where nums[i] + nums[j] = target
    
    Args:
        nums: List of integers
        target: Target sum
    
    Returns:
        List of two indices
    """
    # TODO: Implement your solution here
    pass

# Test your function
print(two_sum([2, 7, 11, 15], 9))  # Should return [0, 1]`,
      javascript: `function twoSum(nums, target) {
    /**
     * Find two indices where nums[i] + nums[j] = target
     * @param {number[]} nums - Array of integers
     * @param {number} target - Target sum
     * @return {number[]} - Array of two indices
     */
    // TODO: Implement your solution here
}

// Test your function
console.log(twoSum([2, 7, 11, 15], 9));  // Should return [0, 1]`,
      java: `public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        // TODO: Implement your solution here
        return new int[]{};
    }
    
    public static void main(String[] args) {
        int[] result = twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println("[" + result[0] + ", " + result[1] + "]");
    }
}`,
      csharp: `using System;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // TODO: Implement your solution here
        return new int[]{};
    }
    
    static void Main() {
        var solution = new Solution();
        int[] result = solution.TwoSum(new int[]{2, 7, 11, 15}, 9);
        Console.WriteLine($"[{result[0]}, {result[1]}]");
    }
}`,
      go: `package main

import "fmt"

func twoSum(nums []int, target int) []int {
    // TODO: Implement your solution here
    return []int{}
}

func main() {
    result := twoSum([]int{2, 7, 11, 15}, 9)
    fmt.Println(result)  // Should print [0 1]
}`
    },
    solution: {
      python: `def two_sum(nums, target):
    """
    Optimal Solution using Hash Map
    Time Complexity: O(n)
    Space Complexity: O(n)
    """
    # Store numbers we've seen with their indices
    seen = {}
    
    for i, num in enumerate(nums):
        # Calculate what number we need to find
        complement = target - num
        
        # Check if we've seen the complement before
        if complement in seen:
            return [seen[complement], i]
        
        # Store current number and its index
        seen[num] = i
    
    return []  # No solution found

# Alternative: Brute Force O(n²)
def two_sum_brute_force(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []`,
      javascript: `function twoSum(nums, target) {
    // Optimal Solution using Map
    // Time: O(n), Space: O(n)
    
    const seen = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        
        seen.set(nums[i], i);
    }
    
    return [];
}

// Alternative: Object-based
function twoSumObject(nums, target) {
    const seen = {};
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in seen) {
            return [seen[complement], i];
        }
        
        seen[nums[i]] = i;
    }
    
    return [];
}`,
      java: `import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        // Optimal Solution using HashMap
        // Time: O(n), Space: O(n)
        
        Map<Integer, Integer> seen = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            
            seen.put(nums[i], i);
        }
        
        return new int[]{}; // No solution
    }
}`,
      csharp: `using System;
using System.Collections.Generic;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Optimal Solution using Dictionary
        // Time: O(n), Space: O(n)
        
        var seen = new Dictionary<int, int>();
        
        for (int i = 0; i < nums.Length; i++) {
            int complement = target - nums[i];
            
            if (seen.ContainsKey(complement)) {
                return new int[] { seen[complement], i };
            }
            
            seen[nums[i]] = i;
        }
        
        return new int[] {}; // No solution
    }
}`,
      go: `package main

func twoSum(nums []int, target int) []int {
    // Optimal Solution using map
    // Time: O(n), Space: O(n)
    
    seen := make(map[int]int)
    
    for i, num := range nums {
        complement := target - num
        
        if j, found := seen[complement]; found {
            return []int{j, i}
        }
        
        seen[num] = i
    }
    
    return []int{} // No solution
}`
    },
    hints: [
      'Think about what complement you need to find for each number',
      'Use a hash map/dictionary to store numbers you\'ve already seen',
      'For each number, check if (target - number) exists in your hash map'
    ],
    learningObjectives: [
      'Understand hash table/dictionary data structure',
      'Learn to optimize from O(n²) brute force to O(n) solution',
      'Practice complementary pair finding technique',
      'Understand space-time tradeoffs'
    ],
    realWorldApplication: 'Finding matching transactions in financial systems, pairing requests/responses in networking, matching inventory items in warehouses'
  },

  // CHALLENGE 2: Palindrome Checker
  {
    id: 'challenge-2',
    title: 'Valid Palindrome - String Validation',
    description: `Check if a string is a palindrome, considering only alphanumeric characters and ignoring case.

**Example:**
Input: "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome

Input: "race a car"
Output: false

**Constraints:**
- 1 <= s.length <= 200,000
- String contains only printable ASCII characters`,
    difficulty: 'Medium',
    category: 'Strings & Two Pointers',
    points: 40,
    estimatedTime: 15,
    tags: ['string', 'two-pointers', 'leetcode-easy'],
    languages: ['python', 'javascript', 'java', 'csharp'],
    testCases: [
      {
        input: '"A man, a plan, a canal: Panama"',
        expectedOutput: 'true',
        explanation: 'When cleaned: "amanaplanacanalpanama" reads same forwards/backwards'
      },
      {
        input: '"race a car"',
        expectedOutput: 'false',
        explanation: 'When cleaned: "raceacar" is not a palindrome'
      },
      {
        input: '" "',
        expectedOutput: 'true',
        explanation: 'Empty string after cleaning is considered palindrome'
      }
    ],
    starterCode: {
      python: `def is_palindrome(s):
    """
    Check if string is palindrome (alphanumeric only, case-insensitive)
    
    Args:
        s: Input string
    
    Returns:
        Boolean indicating if palindrome
    """
    # TODO: Implement your solution
    pass

print(is_palindrome("A man, a plan, a canal: Panama"))  # True`,
      javascript: `function isPalindrome(s) {
    /**
     * Check if string is palindrome
     * @param {string} s - Input string
     * @return {boolean}
     */
    // TODO: Implement your solution
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));`,
      java: `public class ValidPalindrome {
    public static boolean isPalindrome(String s) {
        // TODO: Implement your solution
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama"));
    }
}`,
      csharp: `using System;

public class Solution {
    public bool IsPalindrome(string s) {
        // TODO: Implement your solution
        return false;
    }
    
    static void Main() {
        var solution = new Solution();
        Console.WriteLine(solution.IsPalindrome("A man, a plan, a canal: Panama"));
    }
}`
    },
    solution: {
      python: `def is_palindrome(s):
    """
    Two-Pointer Approach
    Time: O(n), Space: O(1)
    """
    left, right = 0, len(s) - 1
    
    while left < right:
        # Skip non-alphanumeric from left
        while left < right and not s[left].isalnum():
            left += 1
        
        # Skip non-alphanumeric from right
        while left < right and not s[right].isalnum():
            right -= 1
        
        # Compare characters (case-insensitive)
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1
    
    return True

# Alternative: Clean then compare
def is_palindrome_clean(s):
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]`,
      javascript: `function isPalindrome(s) {
    // Two-Pointer Approach
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        // Skip non-alphanumeric
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;
        
        // Compare
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

function isAlphaNum(char) {
    return /[a-zA-Z0-9]/.test(char);
}

// Alternative: Regex clean
function isPalindromeRegex(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}`,
      java: `public class ValidPalindrome {
    public static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        
        while (left < right) {
            // Skip non-alphanumeric
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                left++;
            }
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                right--;
            }
            
            // Compare (case-insensitive)
            if (Character.toLowerCase(s.charAt(left)) != 
                Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
}`,
      csharp: `using System;

public class Solution {
    public bool IsPalindrome(string s) {
        int left = 0, right = s.Length - 1;
        
        while (left < right) {
            // Skip non-alphanumeric
            while (left < right && !char.IsLetterOrDigit(s[left])) {
                left++;
            }
            while (left < right && !char.IsLetterOrDigit(s[right])) {
                right--;
            }
            
            // Compare (case-insensitive)
            if (char.ToLower(s[left]) != char.ToLower(s[right])) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
}`
    },
    hints: [
      'Use two pointers: one at start, one at end',
      'Skip non-alphanumeric characters using isalnum() or similar',
      'Compare characters after converting to same case'
    ],
    learningObjectives: [
      'Master two-pointer technique for strings',
      'Learn character validation methods',
      'Understand in-place vs space-using algorithms',
      'Practice case-insensitive comparisons'
    ],
    realWorldApplication: 'DNA sequence analysis, data validation, compression algorithms, network packet verification'
  },

  // CHALLENGE 3: Binary Search
  {
    id: 'challenge-3',
    title: 'Binary Search - Efficient Array Search',
    description: `Implement binary search to find a target value in a sorted array. Return the index if found, -1 otherwise.

**Example:**
Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4
Explanation: 9 exists in nums at index 4

Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
Output: -1
Explanation: 2 does not exist in nums

**Constraints:**
- All values in nums are unique
- nums is sorted in ascending order
- Must run in O(log n) time`,
    difficulty: 'Medium',
    category: 'Binary Search & Algorithms',
    points: 60,
    estimatedTime: 25,
    tags: ['binary-search', 'algorithm', 'sorted-array'],
    languages: ['python', 'javascript', 'java', 'csharp', 'go'],
    testCases: [
      {
        input: 'nums = [-1, 0, 3, 5, 9, 12], target = 9',
        expectedOutput: '4',
        explanation: '9 is at index 4'
      },
      {
        input: 'nums = [-1, 0, 3, 5, 9, 12], target = 2',
        expectedOutput: '-1',
        explanation: '2 is not in array'
      },
      {
        input: 'nums = [5], target = 5',
        expectedOutput: '0',
        explanation: 'Single element match'
      }
    ],
    starterCode: {
      python: `def binary_search(nums, target):
    """
    Binary search in sorted array
    
    Args:
        nums: Sorted array of integers
        target: Value to find
    
    Returns:
        Index of target, or -1 if not found
    """
    # TODO: Implement binary search
    pass

print(binary_search([-1, 0, 3, 5, 9, 12], 9))  # Should return 4`,
      javascript: `function binarySearch(nums, target) {
    /**
     * Binary search in sorted array
     * @param {number[]} nums - Sorted array
     * @param {number} target - Value to find
     * @return {number} - Index or -1
     */
    // TODO: Implement binary search
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));`,
      java: `public class BinarySearch {
    public static int search(int[] nums, int target) {
        // TODO: Implement binary search
        return -1;
    }
    
    public static void main(String[] args) {
        int[] nums = {-1, 0, 3, 5, 9, 12};
        System.out.println(search(nums, 9));  // Should return 4
    }
}`,
      csharp: `using System;

public class Solution {
    public int Search(int[] nums, int target) {
        // TODO: Implement binary search
        return -1;
    }
    
    static void Main() {
        var solution = new Solution();
        int[] nums = {-1, 0, 3, 5, 9, 12};
        Console.WriteLine(solution.Search(nums, 9));
    }
}`,
      go: `package main

import "fmt"

func search(nums []int, target int) int {
    // TODO: Implement binary search
    return -1
}

func main() {
    nums := []int{-1, 0, 3, 5, 9, 12}
    fmt.Println(search(nums, 9))  // Should return 4
}`
    },
    solution: {
      python: `def binary_search(nums, target):
    """
    Iterative Binary Search
    Time: O(log n), Space: O(1)
    """
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = left + (right - left) // 2  # Avoid overflow
        
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half
    
    return -1  # Not found

# Recursive approach
def binary_search_recursive(nums, target, left=0, right=None):
    if right is None:
        right = len(nums) - 1
    
    if left > right:
        return -1
    
    mid = left + (right - left) // 2
    
    if nums[mid] == target:
        return mid
    elif nums[mid] < target:
        return binary_search_recursive(nums, target, mid + 1, right)
    else:
        return binary_search_recursive(nums, target, left, mid - 1)`,
      javascript: `function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Recursive
function binarySearchRecursive(nums, target, left = 0, right = nums.length - 1) {
    if (left > right) return -1;
    
    const mid = Math.floor(left + (right - left) / 2);
    
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) return binarySearchRecursive(nums, target, mid + 1, right);
    return binarySearchRecursive(nums, target, left, mid - 1);
}`,
      java: `public class BinarySearch {
    public static int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}`,
      csharp: `public class Solution {
    public int Search(int[] nums, int target) {
        int left = 0, right = nums.Length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}`,
      go: `func search(nums []int, target int) int {
    left, right := 0, len(nums)-1
    
    for left <= right {
        mid := left + (right-left)/2
        
        if nums[mid] == target {
            return mid
        } else if nums[mid] < target {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return -1
}`
    },
    hints: [
      'Start with left = 0, right = array.length - 1',
      'Find middle point: mid = left + (right - left) / 2',
      'If target > middle value, search right half (left = mid + 1)',
      'If target < middle value, search left half (right = mid - 1)'
    ],
    learningObjectives: [
      'Understand binary search algorithm',
      'Learn divide-and-conquer technique',
      'Master O(log n) time complexity',
      'Practice both iterative and recursive approaches'
    ],
    realWorldApplication: 'Database indexing, dictionary lookups, version control systems, finding in sorted logs, phone book search'
  }
]

export default advancedChallenges
