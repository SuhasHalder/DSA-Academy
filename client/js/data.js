// DSA Topics Data
const dsaTopics = [
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Arrays are linear data structures that store elements in contiguous memory locations. They are fundamental to programming and form the basis for many other data structures.',
    complexity: 'O(1) access, O(n) search',
    languages: {
      cpp: `// C++ Array Declaration
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    
    // Accessing elements
    cout << arr[0] << endl; // Output: 1
    
    // Iterating through array
    for(int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
    return 0;
}`,
      java: `// Java Array Declaration
public class ArrayExample {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        
        // Accessing elements
        System.out.println(arr[0]); // Output: 1
        
        // Iterating through array
        for(int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}`,
      python: `# Python List (Array)
arr = [1, 2, 3, 4, 5]

# Accessing elements
print(arr[0])  # Output: 1

# Iterating through array
for element in arr:
    print(element, end=" ")

# List comprehension
squared = [x**2 for x in arr]`
    }
  },
  {
    id: 'linked-list',
    title: 'Linked Lists',
    description: 'A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node. Unlike arrays, linked lists don\'t require contiguous memory.',
    complexity: 'O(1) insert/delete, O(n) search',
    languages: {
      cpp: `// C++ Linked List
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void printList(Node* head) {
    while(head != nullptr) {
        cout << head->data << " ";
        head = head->next;
    }
}`,
      java: `// Java Linked List
class Node {
    int data;
    Node next;
    
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class LinkedList {
    Node head;
    
    void printList() {
        Node current = head;
        while(current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
    }
}`,
      python: `# Python Linked List
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def print_list(head):
    current = head
    while current:
        print(current.data, end=" ")
        current = current.next`
    }
  },
  {
    id: 'stacks',
    title: 'Stacks',
    description: 'A stack is a linear data structure that follows LIFO (Last In First Out) principle. Operations are performed at one end called the top.',
    complexity: 'O(1) push/pop',
    languages: {
      cpp: `// C++ Stack
#include <stack>
#include <iostream>
using namespace std;

int main() {
    stack<int> s;
    s.push(10);
    s.push(20);
    s.push(30);
    
    while(!s.empty()) {
        cout << s.top() << " ";
        s.pop();
    }
    return 0;
}`,
      java: `// Java Stack
import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        
        while(!stack.isEmpty()) {
            System.out.print(stack.pop() + " ");
        }
    }
}`,
      python: `# Python Stack
stack = []
stack.append(10)  # push
stack.append(20)
stack.append(30)

while stack:
    print(stack.pop(), end=" ")  # pop`
    }
  },
  {
    id: 'queues',
    title: 'Queues',
    description: 'A queue is a linear data structure that follows FIFO (First In First Out) principle. Elements are added at the rear and removed from the front.',
    complexity: 'O(1) enqueue/dequeue',
    languages: {
      cpp: `// C++ Queue
#include <queue>
#include <iostream>
using namespace std;

int main() {
    queue<int> q;
    q.push(10);
    q.push(20);
    q.push(30);
    
    while(!q.empty()) {
        cout << q.front() << " ";
        q.pop();
    }
    return 0;
}`,
      java: `// Java Queue
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(10);
        queue.offer(20);
        queue.offer(30);
        
        while(!queue.isEmpty()) {
            System.out.print(queue.poll() + " ");
        }
    }
}`,
      python: `# Python Queue
from collections import deque

queue = deque()
queue.append(10)  # enqueue
queue.append(20)
queue.append(30)

while queue:
    print(queue.popleft(), end=" ")  # dequeue`
    }
  },
  {
    id: 'trees',
    title: 'Trees',
    description: 'A tree is a hierarchical data structure with nodes connected by edges. The topmost node is called the root, and nodes with no children are leaves.',
    complexity: 'O(log n) average, O(n) worst case',
    languages: {
      cpp: `// C++ Binary Tree
#include <iostream>
using namespace std;

struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    
    TreeNode(int val) : data(val), left(nullptr), right(nullptr) {}
};

void inorder(TreeNode* root) {
    if(root) {
        inorder(root->left);
        cout << root->data << " ";
        inorder(root->right);
    }
}`,
      java: `// Java Binary Tree
class TreeNode {
    int data;
    TreeNode left, right;
    
    TreeNode(int data) {
        this.data = data;
        this.left = this.right = null;
    }
}

public class BinaryTree {
    void inorder(TreeNode root) {
        if(root != null) {
            inorder(root.left);
            System.out.print(root.data + " ");
            inorder(root.right);
        }
    }
}`,
      python: `# Python Binary Tree
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def inorder(root):
    if root:
        inorder(root.left)
        print(root.data, end=" ")
        inorder(root.right)`
    }
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'A graph is a non-linear data structure consisting of vertices (nodes) and edges. Graphs can be directed or undirected, weighted or unweighted.',
    complexity: 'O(V + E) for traversal',
    languages: {
      cpp: `// C++ Graph (Adjacency List)
#include <vector>
#include <iostream>
using namespace std;

class Graph {
    int V;
    vector<vector<int>> adj;
    
public:
    Graph(int V) : V(V), adj(V) {}
    
    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u); // Undirected
    }
    
    void printGraph() {
        for(int i = 0; i < V; i++) {
            cout << i << ": ";
            for(int v : adj[i]) {
                cout << v << " ";
            }
            cout << endl;
        }
    }
};`,
      java: `// Java Graph (Adjacency List)
import java.util.*;

class Graph {
    private int V;
    private List<List<Integer>> adj;
    
    Graph(int V) {
        this.V = V;
        adj = new ArrayList<>(V);
        for(int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
    }
    
    void addEdge(int u, int v) {
        adj.get(u).add(v);
        adj.get(v).add(u); // Undirected
    }
}`,
      python: `# Python Graph (Adjacency List)
from collections import defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    
    def add_edge(self, u, v):
        self.graph[u].append(v)
        self.graph[v].append(u)  # Undirected
    
    def print_graph(self):
        for vertex in self.graph:
            print(f"{vertex}: {self.graph[vertex]}")`
    }
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithms',
    description: 'Sorting algorithms arrange elements in a particular order. Common algorithms include Bubble Sort, Quick Sort, Merge Sort, and Heap Sort.',
    complexity: 'Varies by algorithm',
    languages: {
      cpp: `// C++ Quick Sort
#include <iostream>
#include <vector>
using namespace std;

int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for(int j = low; j < high; j++) {
        if(arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i+1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if(low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
      java: `// Java Quick Sort
public class QuickSort {
    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        
        for(int j = low; j < high; j++) {
            if(arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    
    static void quickSort(int[] arr, int low, int high) {
        if(low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
}`,
      python: `# Python Quick Sort
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i+1], arr[high] = arr[high], arr[i+1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)`
    }
  },
  {
    id: 'searching',
    title: 'Searching Algorithms',
    description: 'Searching algorithms find the location of a target value within a data structure. Common algorithms include Linear Search and Binary Search.',
    complexity: 'O(n) linear, O(log n) binary',
    languages: {
      cpp: `// C++ Binary Search
#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while(left <= right) {
        int mid = left + (right - left) / 2;
        
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
      java: `// Java Binary Search
public class BinarySearch {
    static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        
        while(left <= right) {
            int mid = left + (right - left) / 2;
            
            if(arr[mid] == target) return mid;
            else if(arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
}`,
      python: `# Python Binary Search
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1`
    }
  }
];

// Practice Problems Data
const practiceProblems = [
  {
    id: 'reverse-array',
    title: 'Reverse an Array',
    difficulty: 'easy',
    description: 'Given an array, reverse its elements in-place.',
    solution: {
      cpp: `void reverseArray(int arr[], int n) {
    int start = 0, end = n - 1;
    while(start < end) {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
}`,
      java: `public static void reverseArray(int[] arr) {
    int start = 0, end = arr.length - 1;
    while(start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}`,
      python: `def reverse_array(arr):
    start, end = 0, len(arr) - 1
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1`
    }
  },
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'easy',
    description: 'Given an array of integers and a target sum, find two numbers that add up to the target.',
    solution: {
      cpp: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    for(int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if(map.find(complement) != map.end()) {
            return {map[complement], i};
        }
        map[nums[i]] = i;
    }
    return {};
}`,
      java: `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for(int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if(map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        map.put(nums[i], i);
    }
    return new int[]{};
}`,
      python: `def two_sum(nums, target):
    map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in map:
            return [map[complement], i]
        map[num] = i
    return []`
    }
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    difficulty: 'easy',
    description: 'Implement binary search to find an element in a sorted array.',
    solution: {
      cpp: `int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    while(left <= right) {
        int mid = left + (right - left) / 2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
      java: `public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while(left <= right) {
        int mid = left + (right - left) / 2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
      python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`
    }
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'medium',
    description: 'Given a string containing parentheses, determine if they are valid.',
    solution: {
      cpp: `bool isValid(string s) {
    stack<char> st;
    for(char c : s) {
        if(c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if(st.empty()) return false;
            char top = st.top();
            if((c == ')' && top != '(') || 
               (c == '}' && top != '{') || 
               (c == ']' && top != '[')) {
                return false;
            }
            st.pop();
        }
    }
    return st.empty();
}`,
      java: `public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for(char c : s.toCharArray()) {
        if(c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if(stack.isEmpty()) return false;
            char top = stack.peek();
            if((c == ')' && top != '(') || 
               (c == '}' && top != '{') || 
               (c == ']' && top != '[')) {
                return false;
            }
            stack.pop();
        }
    }
    return stack.isEmpty();
}`,
      python: `def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    return not stack`
    }
  },
  {
    id: 'merge-intervals',
    title: 'Merge Intervals',
    difficulty: 'medium',
    description: 'Given a collection of intervals, merge all overlapping intervals.',
    solution: {
      cpp: `vector<vector<int>> merge(vector<vector<int>>& intervals) {
    if(intervals.empty()) return {};
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged;
    merged.push_back(intervals[0]);
    
    for(int i = 1; i < intervals.size(); i++) {
        if(merged.back()[1] >= intervals[i][0]) {
            merged.back()[1] = max(merged.back()[1], intervals[i][1]);
        } else {
            merged.push_back(intervals[i]);
        }
    }
    return merged;
}`,
      java: `public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
    List<int[]> merged = new ArrayList<>();
    merged.add(intervals[0]);
    
    for(int i = 1; i < intervals.length; i++) {
        if(merged.get(merged.size() - 1)[1] >= intervals[i][0]) {
            merged.get(merged.size() - 1)[1] = 
                Math.max(merged.get(merged.size() - 1)[1], intervals[i][1]);
        } else {
            merged.add(intervals[i]);
        }
    }
    return merged.toArray(new int[merged.size()][]);
}`,
      python: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for interval in intervals[1:]:
        if merged[-1][1] >= interval[0]:
            merged[-1][1] = max(merged[-1][1], interval[1])
        else:
            merged.append(interval)
    
    return merged`
    }
  },
  {
    id: 'longest-substring',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'medium',
    description: 'Find the length of the longest substring without repeating characters.',
    solution: {
      cpp: `int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> map;
    int maxLen = 0, start = 0;
    
    for(int end = 0; end < s.length(); end++) {
        if(map.find(s[end]) != map.end()) {
            start = max(start, map[s[end]] + 1);
        }
        map[s[end]] = end;
        maxLen = max(maxLen, end - start + 1);
    }
    return maxLen;
}`,
      java: `public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> map = new HashMap<>();
    int maxLen = 0, start = 0;
    
    for(int end = 0; end < s.length(); end++) {
        if(map.containsKey(s[end])) {
            start = Math.max(start, map.get(s[end]) + 1);
        }
        map.put(s[end], end);
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
}`,
      python: `def length_of_longest_substring(s):
    char_map = {}
    max_len = start = 0
    
    for end, char in enumerate(s):
        if char in char_map:
            start = max(start, char_map[char] + 1)
        char_map[char] = end
        max_len = max(max_len, end - start + 1)
    
    return max_len`
    }
  }
];

// Programming Languages Data
const languages = [
  {
    id: 'c',
    name: 'C Programming',
    description: 'Learn C from basics to advanced. Master pointers, memory management, and system programming.',
    level: 'Beginner to Advanced',
    features: ['Pointers & Memory', 'File Handling', 'Data Structures', 'System Programming']
  },
  {
    id: 'cpp',
    name: 'C++',
    description: 'C++ for DSA and Competitive Programming. Learn STL, templates, and advanced features.',
    level: 'Intermediate to Advanced',
    features: ['STL Containers', 'Templates', 'OOP Concepts', 'Competitive Programming']
  },
  {
    id: 'java',
    name: 'Java',
    description: 'Java for interviews and enterprise development. Master collections, multithreading, and JVM.',
    level: 'Beginner to Advanced',
    features: ['Collections Framework', 'Multithreading', 'JVM Internals', 'Design Patterns']
  },
  {
    id: 'python',
    name: 'Python',
    description: 'Python for beginners and DSA. Learn clean syntax, libraries, and problem-solving.',
    level: 'Beginner to Advanced',
    features: ['Clean Syntax', 'Rich Libraries', 'Data Science', 'Web Development']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'JavaScript for web development and logic building. Master ES6+, async programming, and frameworks.',
    level: 'Beginner to Advanced',
    features: ['ES6+ Features', 'Async/Await', 'DOM Manipulation', 'Modern Frameworks']
  }
];

// Roadmap Data
const roadmap = [
  {
    phase: 'Phase 1: Foundations',
    topics: [
      'Programming Basics',
      'Variables & Data Types',
      'Control Structures (if/else, loops)',
      'Functions & Recursion',
      'Basic I/O Operations'
    ]
  },
  {
    phase: 'Phase 2: Data Structures',
    topics: [
      'Arrays & Strings',
      'Linked Lists',
      'Stacks & Queues',
      'Trees (Binary, BST)',
      'Hash Tables'
    ]
  },
  {
    phase: 'Phase 3: Algorithms',
    topics: [
      'Sorting Algorithms',
      'Searching Algorithms',
      'Graph Algorithms (BFS, DFS)',
      'Dynamic Programming',
      'Greedy Algorithms'
    ]
  },
  {
    phase: 'Phase 4: Advanced Topics',
    topics: [
      'Advanced Trees (AVL, Red-Black)',
      'Graph Algorithms (Dijkstra, MST)',
      'String Algorithms',
      'Bit Manipulation',
      'System Design Basics'
    ]
  },
  {
    phase: 'Phase 5: Interview Prep',
    topics: [
      'Problem-Solving Patterns',
      'LeetCode Practice',
      'Mock Interviews',
      'Time & Space Complexity',
      'Code Optimization'
    ]
  }
];

// Learning Path Data
const dsaLearningPath = [
  {
    id: 'beginner',
    stage: 'Beginner',
    goal: 'Build coding confidence and learn core problem-solving basics.',
    topics: ['Arrays', 'Strings', 'Time Complexity Basics', 'Recursion Basics', 'Stacks and Queues']
  },
  {
    id: 'intermediate',
    stage: 'Intermediate',
    goal: 'Master foundational interview patterns and data structures.',
    topics: ['Linked Lists', 'Binary Search', 'Sorting', 'Hashing', 'Trees and BST']
  },
  {
    id: 'advanced',
    stage: 'Advanced',
    goal: 'Solve complex interview and contest-level challenges efficiently.',
    topics: ['Graphs', 'Dynamic Programming', 'Greedy', 'Advanced Trees', 'Sliding Window + Two Pointers']
  }
];

// In-browser Editor Challenges (JavaScript)
const editorChallenges = [
  {
    id: 'sum-array',
    title: 'Sum of Array',
    difficulty: 'easy',
    statement: 'Complete function sumArray(nums) that returns sum of all numbers in nums.',
    functionName: 'sumArray',
    starterCode: `function sumArray(nums) {
  // Write your code here
  return 0;
}`,
    tests: [
      { input: [[1, 2, 3]], expected: 6 },
      { input: [[5, -2, 7]], expected: 10 },
      { input: [[0]], expected: 0 }
    ]
  },
  {
    id: 'is-palindrome',
    title: 'Palindrome String',
    difficulty: 'easy',
    statement: 'Complete function isPalindrome(str) to return true if str reads same forward and backward (case-sensitive).',
    functionName: 'isPalindrome',
    starterCode: `function isPalindrome(str) {
  // Write your code here
  return false;
}`,
    tests: [
      { input: ['level'], expected: true },
      { input: ['hello'], expected: false },
      { input: ['a'], expected: true }
    ]
  },
  {
    id: 'max-subarray',
    title: 'Maximum Subarray Sum',
    difficulty: 'medium',
    statement: 'Complete function maxSubarray(nums) that returns maximum subarray sum.',
    functionName: 'maxSubarray',
    starterCode: `function maxSubarray(nums) {
  // Write your code here
  return 0;
}`,
    tests: [
      { input: [[-2,1,-3,4,-1,2,1,-5,4]], expected: 6 },
      { input: [[1]], expected: 1 },
      { input: [[5,4,-1,7,8]], expected: 23 }
    ]
  }
];

// DSA content enrichment
const dsaTopicEnhancements = {
  arrays: {
    level: 'beginner',
    overview: 'Arrays are usually the first data structure to learn because indexing is simple and direct.',
    keyPoints: ['Index-based access', 'Traversal patterns', 'Prefix sums basics'],
    applications: ['Frequency counting', 'Window-based problems', 'Input data storage']
  },
  'linked-list': {
    level: 'beginner',
    overview: 'Linked lists help you understand pointers/references and dynamic memory behavior.',
    keyPoints: ['Node structure', 'Insert/delete operations', 'Fast and slow pointer technique'],
    applications: ['LRU cache internals', 'Undo/redo flow', 'Memory-constrained structures']
  },
  stacks: {
    level: 'beginner',
    overview: 'Stacks are ideal when you need reverse order processing.',
    keyPoints: ['LIFO behavior', 'Monotonic stack', 'Expression evaluation'],
    applications: ['Browser history', 'Valid parentheses', 'Backtracking state']
  },
  queues: {
    level: 'beginner',
    overview: 'Queues model first-come-first-serve scheduling and BFS traversals.',
    keyPoints: ['FIFO behavior', 'Deque usage', 'Circular queue concept'],
    applications: ['Task scheduling', 'Breadth-first search', 'Streaming requests']
  },
  trees: {
    level: 'intermediate',
    overview: 'Tree structures represent hierarchical data and optimize many search tasks.',
    keyPoints: ['Traversal orders', 'BST properties', 'Recursive problem modeling'],
    applications: ['File systems', 'Hierarchical organization', 'Range queries']
  },
  graphs: {
    level: 'advanced',
    overview: 'Graphs model relationships in networks, maps, dependencies, and social connections.',
    keyPoints: ['Adjacency list/matrix', 'BFS/DFS', 'Shortest path basics'],
    applications: ['Route optimization', 'Dependency resolution', 'Network analysis']
  },
  sorting: {
    level: 'intermediate',
    overview: 'Sorting enables efficient searching, grouping, and interval processing.',
    keyPoints: ['Comparison-based sorting', 'Divide and conquer', 'Stability concept'],
    applications: ['Ranking data', 'Interval merging', 'Preprocessing pipelines']
  },
  searching: {
    level: 'beginner',
    overview: 'Searching techniques are core to finding values quickly in structured data.',
    keyPoints: ['Linear vs binary search', 'Search space reduction', 'Boundary finding'],
    applications: ['Query systems', 'Lookup problems', 'Optimization with binary search']
  }
};

dsaTopics.forEach(topic => {
  const enrichment = dsaTopicEnhancements[topic.id] || {};
  Object.assign(topic, enrichment);
});

dsaTopics.push(
  {
    id: 'recursion',
    title: 'Recursion',
    description: 'Recursion solves a problem by calling the same function on smaller inputs.',
    overview: 'A strong recursion foundation helps in trees, divide-and-conquer, and dynamic programming.',
    level: 'beginner',
    complexity: 'Varies by branching and depth',
    keyPoints: ['Base case', 'Recursive case', 'Call stack behavior'],
    applications: ['Tree traversal', 'Backtracking', 'Divide-and-conquer'],
    languages: {
      cpp: `int factorial(int n){ if(n<=1) return 1; return n*factorial(n-1); }`,
      java: `int factorial(int n){ if(n<=1) return 1; return n*factorial(n-1); }`,
      python: `def factorial(n):\n    if n <= 1: return 1\n    return n * factorial(n-1)`
    }
  },
  {
    id: 'hashing',
    title: 'Hashing and Hash Tables',
    description: 'Hashing maps keys to values for fast average-time lookups.',
    overview: 'Many interview problems become easier using hash maps/sets.',
    level: 'intermediate',
    complexity: 'O(1) average insert/search',
    keyPoints: ['Hash functions', 'Collision handling', 'Set vs map'],
    applications: ['Frequency maps', 'Duplicate checks', 'Caching'],
    languages: {
      cpp: `unordered_map<int,int> freq;\nfor(int x: nums) freq[x]++;`,
      java: `Map<Integer,Integer> freq = new HashMap<>();\nfor(int x: nums) freq.put(x, freq.getOrDefault(x,0)+1);`,
      python: `freq = {}\nfor x in nums:\n    freq[x] = freq.get(x, 0) + 1`
    }
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    description: 'DP stores repeated subproblem results to avoid recomputation.',
    overview: 'DP is essential for optimization problems with overlapping subproblems.',
    level: 'advanced',
    complexity: 'Depends on state definition and transitions',
    keyPoints: ['State definition', 'Transition relation', 'Memoization vs tabulation'],
    applications: ['Knapsack', 'Longest subsequence', 'Grid path counting'],
    languages: {
      cpp: `vector<int> dp(n+1, 0);\ndp[1] = 1;\nfor(int i=2;i<=n;i++) dp[i] = dp[i-1] + dp[i-2];`,
      java: `int[] dp = new int[n+1];\ndp[1] = 1;\nfor(int i=2;i<=n;i++) dp[i] = dp[i-1] + dp[i-2];`,
      python: `dp = [0] * (n + 1)\ndp[1] = 1\nfor i in range(2, n + 1):\n    dp[i] = dp[i - 1] + dp[i - 2]`
    }
  },
  {
    id: 'greedy',
    title: 'Greedy Algorithms',
    description: 'Greedy makes locally optimal choices to find global optimum for suitable problems.',
    overview: 'Greedy is powerful when an exchange argument or sorting strategy proves correctness.',
    level: 'advanced',
    complexity: 'Often O(n log n) due to sorting',
    keyPoints: ['Local optimal choice', 'Sorting as preprocessing', 'Proof of correctness'],
    applications: ['Interval scheduling', 'Minimum platforms', 'Huffman coding basics'],
    languages: {
      cpp: `sort(intervals.begin(), intervals.end());\n// choose greedily based on end time`,
      java: `Arrays.sort(intervals, (a,b) -> a[1]-b[1]);\n// choose greedily by earliest finish`,
      python: `intervals.sort(key=lambda x: x[1])\n# choose greedily by earliest finish`
    }
  },
  {
    id: 'heap-priority-queue',
    title: 'Heaps and Priority Queues',
    description: 'A heap is a complete binary tree based structure used to quickly access the min or max element.',
    overview: 'Heaps are essential for top-k problems, scheduling, and shortest path algorithms.',
    level: 'intermediate',
    complexity: 'O(log n) insert/delete, O(1) peek',
    keyPoints: ['Min heap vs max heap', 'Heapify operation', 'Top-k element strategy'],
    applications: ['Task scheduling', 'Median stream', 'Dijkstra priority processing'],
    languages: {
      cpp: `priority_queue<int> maxHeap;\npriority_queue<int, vector<int>, greater<int>> minHeap;\nminHeap.push(10); minHeap.push(4);`,
      java: `PriorityQueue<Integer> minHeap = new PriorityQueue<>();\nminHeap.offer(10); minHeap.offer(4);`,
      python: `import heapq\nheap = []\nheapq.heappush(heap, 10)\nheapq.heappush(heap, 4)`
    }
  },
  {
    id: 'trie',
    title: 'Trie (Prefix Tree)',
    description: 'Trie stores strings character-by-character and supports fast prefix-based queries.',
    overview: 'Useful when dictionary and autocomplete operations are frequent.',
    level: 'advanced',
    complexity: 'O(L) insert/search where L is word length',
    keyPoints: ['Node per character', 'Prefix matching', 'Memory trade-offs'],
    applications: ['Autocomplete', 'Spell-check systems', 'Prefix dictionary'],
    languages: {
      cpp: `struct TrieNode { TrieNode* next[26] = {}; bool end = false; };`,
      java: `class TrieNode { TrieNode[] next = new TrieNode[26]; boolean end; }`,
      python: `class TrieNode:\n    def __init__(self):\n        self.next = {}\n        self.end = False`
    }
  },
  {
    id: 'big-o',
    title: 'Big O Notation (Time & Space)',
    description: 'Big O describes how running time or memory grows when input size n grows — not exact seconds, but growth shape.',
    overview: 'It helps you compare algorithms: O(1) is constant, O(log n) grows slowly, O(n) linear, O(n²) can explode for large n.',
    level: 'beginner',
    complexity: 'Conceptual — compare growth rates',
    keyPoints: ['Worst vs average case', 'Drop constants and low terms', 'Input size n is the focus'],
    applications: ['Choosing data structures', 'Interview reasoning', 'Avoiding TLE in contests'],
    languages: {
      cpp: `// Example: single loop over n elements → O(n)\nfor(int i = 0; i < n; i++) { /* ... */ }`,
      java: `// Example: nested loops n × n → O(n²)\nfor(int i = 0; i < n; i++)\n  for(int j = 0; j < n; j++) { /* ... */ }`,
      python: `# Example: one pass → O(n)\nfor x in items:\n    pass`
    }
  },
  {
    id: 'strings-basics',
    title: 'Strings (Characters & Substrings)',
    description: 'A string is an ordered sequence of characters. Many array techniques apply: two pointers, sliding window, frequency counting.',
    overview: 'Think of a string as a read-only or mutable array of chars depending on language; practice indexing and slicing safely.',
    level: 'beginner',
    complexity: 'Often O(n) for one pass, O(n²) for naive substring checks',
    keyPoints: ['Indexing and slicing', 'Immutability in Java/Python vs char[] in C++', 'ASCII vs Unicode basics'],
    applications: ['Parsing', 'Pattern matching', 'Interview string problems'],
    languages: {
      cpp: `std::string s = "hello";\nchar c = s[0]; // 'h'\nsubstr = s.substr(1, 3); // "ell"`,
      java: `String s = "hello";\nchar c = s.charAt(0);\nString sub = s.substring(1, 4); // "ell"`,
      python: `s = "hello"\nc = s[0]\nsub = s[1:4]  # "ell"`
    }
  }
);

const dsaProfessionalDetails = {
  arrays: {
    interviewPatterns: ['Two pointers', 'Sliding window', 'Prefix sum and difference array'],
    commonPitfalls: ['Off-by-one indexing', 'Unnecessary nested loops', 'Mutating input unexpectedly'],
    developerTips: ['Keep helper functions for bounds checks', 'Use immutable patterns when debugging'],
    realWorldUseCases: ['Time-series metrics', 'Image pixel buffers', 'Tabular data pipelines']
  },
  'linked-list': {
    interviewPatterns: ['Fast and slow pointers', 'In-place reversal', 'Merge two sorted lists'],
    commonPitfalls: ['Losing head pointer', 'Forgetting null checks', 'Cycle handling errors'],
    developerTips: ['Draw node transitions before coding', 'Use dummy node to simplify edge cases'],
    realWorldUseCases: ['Streaming buffers', 'Browser navigation state']
  },
  stacks: {
    interviewPatterns: ['Monotonic stack', 'Expression parsing', 'Backtracking'],
    commonPitfalls: ['Popping empty stack', 'Mixing stack order logic'],
    developerTips: ['Store indices instead of values when range needed'],
    realWorldUseCases: ['Undo/redo features', 'Compiler expression evaluation']
  },
  queues: {
    interviewPatterns: ['BFS traversal', 'Multi-source BFS', 'Deque based optimization'],
    commonPitfalls: ['Wrong push/pop ends in deque', 'Forgetting visited set in BFS'],
    developerTips: ['Use queue size loops for level-order traversal'],
    realWorldUseCases: ['Message queues', 'Job workers', 'Request throttling']
  },
  trees: {
    interviewPatterns: ['DFS recursion', 'Level-order traversal', 'Lowest common ancestor'],
    commonPitfalls: ['Missing base cases', 'Confusing preorder/inorder/postorder'],
    developerTips: ['Return structured objects from recursion for clarity'],
    realWorldUseCases: ['DOM tree', 'File system hierarchy', 'Decision systems']
  },
  graphs: {
    interviewPatterns: ['BFS shortest path (unweighted)', 'DFS cycle detection', 'Topological sort'],
    commonPitfalls: ['Not handling disconnected components', 'Visited marking mistakes'],
    developerTips: ['Choose adjacency list by default for sparse graphs'],
    realWorldUseCases: ['Social graph analysis', 'Dependency management', 'Route planning']
  },
  sorting: {
    interviewPatterns: ['Sort + two pointers', 'Custom comparator sorting', 'K-way merge ideas'],
    commonPitfalls: ['Comparator overflow bugs', 'Assuming sort stability'],
    developerTips: ['Prefer built-in optimized sorting unless asked to implement manually'],
    realWorldUseCases: ['Report ranking', 'Data preparation', 'Search indexing']
  },
  searching: {
    interviewPatterns: ['Binary search on answer', 'Lower/upper bound', 'Rotated array search'],
    commonPitfalls: ['Wrong while condition', 'Mid overflow in low-level languages'],
    developerTips: ['Use `left + (right-left)/2` style for robust mid calculation'],
    realWorldUseCases: ['Database indexing', 'Configuration lookup']
  },
  recursion: {
    interviewPatterns: ['Backtracking template', 'Divide-and-conquer recursion'],
    commonPitfalls: ['Missing base case', 'Exponential blow-up without memoization'],
    developerTips: ['Track recursion depth in logs during debugging'],
    realWorldUseCases: ['Parser design', 'Directory traversal']
  },
  hashing: {
    interviewPatterns: ['Frequency map', 'Complement lookup', 'Visited state with set'],
    commonPitfalls: ['Hash collision assumptions', 'Incorrect key normalization'],
    developerTips: ['Normalize strings/keys before map operations'],
    realWorldUseCases: ['Caching layers', 'Session lookup', 'Deduplication services']
  },
  'dynamic-programming': {
    interviewPatterns: ['1D/2D tabulation', 'Memoized recursion', 'State compression'],
    commonPitfalls: ['Wrong state definition', 'Invalid transition dependencies'],
    developerTips: ['Write recurrence first, code after verifying transitions'],
    realWorldUseCases: ['Cost optimization', 'Route scoring', 'Recommendation ranking']
  },
  greedy: {
    interviewPatterns: ['Activity selection', 'Interval scheduling', 'Greedy after sorting'],
    commonPitfalls: ['Applying greedy without proof', 'Wrong sorting criteria'],
    developerTips: ['Validate approach with counterexamples before finalizing'],
    realWorldUseCases: ['Resource scheduling', 'Load balancing heuristics']
  },
  'heap-priority-queue': {
    interviewPatterns: ['Top K elements', 'Merge K sorted lists', 'Median maintenance'],
    commonPitfalls: ['Wrong heap type (min vs max)', 'Forgetting re-heapify after update'],
    developerTips: ['Store object tuples (priority, payload) for clarity'],
    realWorldUseCases: ['Task scheduler', 'Realtime ranking', 'Event simulation']
  },
  trie: {
    interviewPatterns: ['Prefix search', 'Word break optimization', 'Autocomplete'],
    commonPitfalls: ['Memory-heavy node design', 'Not marking terminal words correctly'],
    developerTips: ['Use map-based nodes for sparse alphabets'],
    realWorldUseCases: ['Search suggestions', 'Keyword filtering', 'Dictionary services']
  },
  'big-o': {
    interviewPatterns: ['Compare two approaches by complexity', 'Identify hidden O(n²) loops'],
    commonPitfalls: ['Ignoring space complexity', 'Confusing average vs worst case'],
    developerTips: ['State both time and space in interviews'],
    realWorldUseCases: ['API latency budgets', 'Choosing batch vs stream processing']
  },
  'strings-basics': {
    interviewPatterns: ['Sliding window', 'Expand around center (palindrome)', 'Rabin-Karp / KMP (advanced)'],
    commonPitfalls: ['Off-by-one in slices', 'Modifying string while iterating'],
    developerTips: ['Convert to list/array when language strings are immutable'],
    realWorldUseCases: ['Search engines', 'Compilers', 'Bioinformatics']
  }
};

dsaTopics.forEach(topic => {
  Object.assign(topic, dsaProfessionalDetails[topic.id] || {});
});

