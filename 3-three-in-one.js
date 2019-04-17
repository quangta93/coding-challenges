// Use a single array to represent 3 stacks

// Approach 1: separated by index. (i * 3, i * 3 + 1, i * 3 +2)
// Pros: can grow forever
// Cons: item distributed sparely, waste of space

// Approach 2: array with known length, separate equally into 3 segments.
// [0, len / 3], [len/3 + 1, 2 * len / 3], [2 * len / 3 + 1, len - 1]

// Approach 3: separate into 3 segments unequally
// Stack1{ start: 0, end: 0 }
// Stack2{ start: len - 1; end: len -1 }
// Stack3{ start: len / 3 }
// Pros: stack 2 & 3 can grow more than length of stack 1
// Cons: coordinate to make sure stacks cannot overlap

// Approach 4: if only string is inserted, use special leading characters to identify stacks
