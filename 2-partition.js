// Check if a linked list is a palindrome

// Solution 1:
// Convert linked list to array
// Check if array is palindrome
// Time: O(N)
// Space: O(N)

// Solution 2
// valueAtPosition(list, index) - O(N)
// linkedListLength(list) - O(N)
// while (index < length /2)
// Check valueAtPosition(list, index) === valueAtPosition(list, length - index - 1)

// Solution 3
// while (list.hasNode): check list.pop() === list.remove(0)
// Time: O(N^2)
