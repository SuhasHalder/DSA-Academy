/**
 * Topic-wise interview theory & coding Q&A (FAANG-style patterns).
 * Merged into dsaTopics after dsa-visuals.js
 */
const dsaTopicInterview = {
  arrays: {
    interviewTheory: [
      { q: 'Why is random access O(1) for an array?', a: 'The address of element i is base_address + i × element_size. The CPU jumps directly — no traversal.' },
      { q: 'Array vs ArrayList (dynamic array)?', a: 'Static array has fixed size. Dynamic arrays grow by allocating a larger block and copying when full — amortized O(1) append.' },
      { q: 'What is cache locality and why do arrays help?', a: 'Contiguous memory improves CPU cache hits when scanning sequentially; linked lists jump pointers and hurt locality.' }
    ],
    interviewCoding: [
      { q: 'Two Sum (sorted) — approach?', a: 'Two pointers: left=0, right=n-1. If sum < target, left++; if sum > target, right--. O(n) time, O(1) space.' },
      { q: 'Rotate array by k — O(n) time O(1) space?', a: 'Reverse [0..n-1], then reverse [0..k-1] and [k..n-1] (or use three reverses pattern). Handle k %= n.' },
      { q: 'Find max subarray sum (Kadane)?', a: 'Track running sum; reset to 0 when negative; keep global max. O(n).' }
    ]
  },
  'linked-list': {
    interviewTheory: [
      { q: 'When do you choose a linked list over an array?', a: 'When you need frequent inserts/deletes in the middle and do not need index access; memory can grow without full copy.' },
      { q: 'How do you detect a cycle (Floyd)?', a: 'Slow moves 1 step, fast moves 2. If they meet, cycle exists. To find start: reset one to head, move both 1 step until they meet.' },
      { q: 'Dummy node trick — why?', a: 'Simplifies edge cases when head changes (e.g. reversing, merging) — avoids null head special cases.' }
    ],
    interviewCoding: [
      { q: 'Reverse linked list — iterative?', a: 'prev=null, curr=head; while curr: next=curr.next; curr.next=prev; prev=curr; curr=next. Return prev.' },
      { q: 'Merge two sorted lists?', a: 'Dummy head; compare heads of both lists, attach smaller, advance that pointer. O(n+m).' },
      { q: 'Middle of linked list?', a: 'Slow/fast pointers; when fast reaches end, slow is middle. For even length, pick second middle if needed.' }
    ]
  },
  stacks: {
    interviewTheory: [
      { q: 'What is LIFO and where is it used?', a: 'Last In First Out — function call stack, undo, DFS (implicit stack), expression evaluation.' },
      { q: 'Stack using two queues?', a: 'Make one queue “active”; for push, enqueue; for pop, rotate n-1 elements to back then dequeue front — expensive but possible.' },
      { q: 'Monotonic stack — intuition?', a: 'Keep stack increasing or decreasing so you can answer “next greater element” in one pass.' }
    ],
    interviewCoding: [
      { q: 'Valid parentheses string?', a: 'Stack of opening chars; on closing, pop and match. O(n).' },
      { q: 'Next Greater Element for each index?', a: 'Monotonic decreasing stack of indices; pop while current > stack top value.' },
      { q: 'Min stack supporting getMin O(1)?', a: 'Second stack storing min-so-far at each depth, or store pairs (val, min).' }
    ]
  },
  queues: {
    interviewTheory: [
      { q: 'Queue vs deque?', a: 'Queue: FIFO at one end. Deque: insert/remove at both ends in O(1) — used for sliding window max.' },
      { q: 'Why BFS uses a queue?', a: 'Process level by level: enqueue neighbors, dequeue current — explores shortest path in unweighted graphs.' },
      { q: 'Circular queue benefit?', a: 'Fixed-size buffer; reuse indices with front/rear pointers — O(1) enqueue/dequeue without shifting.' }
    ],
    interviewCoding: [
      { q: 'Sliding window maximum?', a: 'Deque storing indices of decreasing values in window; drop out-of-window from front. O(n).' },
      { q: 'Implement queue using stacks?', a: 'Two stacks: push to inbox; pop from outbox (transfer inbox to outbox when outbox empty).' },
      { q: 'Rotten oranges (multi-source BFS)?', a: 'Enqueue all rotten, BFS layer by time; count fresh left. Grid BFS pattern.' }
    ]
  },
  trees: {
    interviewTheory: [
      { q: 'BST invariant?', a: 'Left subtree keys < node < right subtree keys (for strict BST). Inorder traversal yields sorted order.' },
      { q: 'Balanced vs skewed tree complexity?', a: 'Balanced BST height O(log n) for search/insert; skewed chain is O(n) — same as linked list.' },
      { q: 'When use postorder vs preorder?', a: 'Postorder: delete tree, bottom-up DP on tree. Preorder: copy/serialize tree with structure first.' }
    ],
    interviewCoding: [
      { q: 'Height of binary tree?', a: 'max(depth(left), depth(right)) + 1; base case null returns -1 or 0 depending on definition.' },
      { q: 'Lowest Common Ancestor (BST)?', a: 'If both < root go left; both > root go right; else root is LCA. O(h).' },
      { q: 'Level order traversal?', a: 'Queue: enqueue root; while queue not empty, process level size, enqueue children.' }
    ]
  },
  graphs: {
    interviewTheory: [
      { q: 'Adjacency list vs matrix?', a: 'List: O(V+E) space, good sparse graphs. Matrix: O(V²), O(1) edge lookup, dense graphs.' },
      { q: 'BFS vs DFS use cases?', a: 'BFS: shortest path unweighted, layers. DFS: cycle detection, topological sort, connected components.' },
      { q: 'What is topological sort?', a: 'Linear ordering of DAG vertices where every edge u→v has u before v — used for task dependencies.' }
    ],
    interviewCoding: [
      { q: 'Number of islands (grid)?', a: 'DFS/BFS flood fill on 1s; mark visited; count starts. 4-direction or 8-direction as stated.' },
      { q: 'Clone graph (Node with neighbors)?', a: 'HashMap old→new; DFS/BFS create copy nodes and wire neighbors.' },
      { q: 'Course schedule (cycle in directed graph)?', a: 'Topological sort via Kahn (indegree) or DFS three-color cycle detection.' }
    ]
  },
  sorting: {
    interviewTheory: [
      { q: 'Stable sort — example?', a: 'Merge sort is stable; equal keys keep order. Quick sort typical implementation is not stable.' },
      { q: 'Best/worst quicksort?', a: 'Average O(n log n); worst O(n²) with bad pivot — mitigated by random pivot or median-of-three.' },
      { q: 'When is counting sort O(n)?', a: 'When key range k is small; O(n + k). Not comparison-based.' }
    ],
    interviewCoding: [
      { q: 'Merge two sorted arrays in-place (m, n space)?', a: 'Fill from end: compare A[i] and B[j], place larger at end of merged region.' },
      { q: 'Kth largest element?', a: 'Quickselect average O(n); or min-heap of size k streaming.' },
      { q: 'Sort colors (0,1,2) — Dutch flag?', a: 'Three pointers low/mid/high; mid scans; swap 0 to low, 2 to high. O(n) one pass.' }
    ]
  },
  searching: {
    interviewTheory: [
      { q: 'Binary search prerequisite?', a: 'Monotonic predicate or sorted array so you can discard half the search space each step.' },
      { q: 'lower_bound vs upper_bound?', a: 'First position ≥ x vs first position > x — boundary binary search templates differ by mid assignment.' },
      { q: 'Binary search on answer?', a: 'Search min/max feasible value; check(mid) is monotonic — used for min capacity, Koko eating bananas, etc.' }
    ],
    interviewCoding: [
      { q: 'Search in rotated sorted array?', a: 'Binary search: identify which half is sorted; check if target in range; shrink accordingly. O(log n).' },
      { q: 'Find peak element?', a: 'Binary search on indices: compare mid with mid+1; go uphill side. O(log n).' },
      { q: 'Sqrt(x) integer part?', a: 'Binary search on answer in [0, x]; mid*mid <= x.' }
    ]
  },
  'big-o': {
    interviewTheory: [
      { q: 'Why drop constants in Big O?', a: 'We care about growth as n→∞; constants and lower-order terms are dominated.' },
      { q: 'Amortized analysis example?', a: 'Dynamic array doubling: occasional O(n) copy but many O(1) appends → amortized O(1) append.' },
      { q: 'Space complexity of recursion?', a: 'Include call stack depth — can be O(n) for linear recursion even if auxiliary space is O(1).' }
    ],
    interviewCoding: [
      { q: 'Is nested loop always O(n²)?', a: 'Only if both run up to n independently; sometimes inner bound shrinks (e.g. two pointers) → O(n).' },
      { q: 'Compare O(n log n) vs O(n²) for n=10⁶?', a: 'n log n ~ 2×10⁷; n² ~ 10¹² — huge difference; choose right algorithm for constraints.' },
      { q: 'What is Θ (theta) vs O?', a: 'Θ tight bound (same growth upper and lower). O is upper bound only — O(n) includes O(1) in loose usage but formally O means ≤ that growth.' }
    ]
  },
  'strings-basics': {
    interviewTheory: [
      { q: 'String immutability in Java?', a: 'String objects are immutable; concatenation in loop creates many objects — use StringBuilder.' },
      { q: 'Rolling hash idea?', a: 'Update hash when window slides by subtracting leaving char and adding entering char — Rabin-Karp.' },
      { q: 'Why two pointers on palindrome?', a: 'Compare symmetric positions from ends inward — O(n) time O(1) space.' }
    ],
    interviewCoding: [
      { q: 'Valid palindrome (alphanumeric only)?', a: 'Two pointers skip non-alphanumeric; compare lowercased chars.' },
      { q: 'Longest substring without repeat?', a: 'Sliding window + hash set or last-index map; shrink left when duplicate.' },
      { q: 'Anagram check?', a: 'Sort both O(n log n) or frequency count O(n) with 26/256 array or map.' }
    ]
  },
  recursion: {
    interviewTheory: [
      { q: 'Stack overflow from recursion?', a: 'Too deep calls exceed stack limit — fix with iteration, tail recursion (if optimized), or increase stack (not in interviews).' },
      { q: 'Memoization vs tabulation?', a: 'Memo: top-down cache in recursion. Tabulation: bottom-up fill table — often saves stack space.' },
      { q: 'When recursion is natural?', a: 'Trees, divide & conquer, backtracking — problem structure mirrors recursive definition.' }
    ],
    interviewCoding: [
      { q: 'Fibonacci with memo?', a: 'fib(n) = fib(n-1)+fib(n-2) with map/array cache; O(n) time.' },
      { q: 'Subsets (power set)?', a: 'Backtrack: include/exclude each index; or bitmask 0..2^n-1.' },
      { q: 'Permutations?', a: 'Swap or used[] array; backtrack building path; O(n! × n).' }
    ]
  },
  hashing: {
    interviewTheory: [
      { q: 'Average O(1) — why not worst?', a: 'Rare worst case: many collisions degenerate to list — good hash + resizing keeps expected constant.' },
      { q: 'equals() and hashCode() contract (Java)?', a: 'Equal objects must have same hashCode; unequal may collide — bucket then equals check.' },
      { q: 'Open addressing vs chaining?', a: 'Chaining: list at bucket. Open addressing: probe sequence; cache-friendly but clustering issues.' }
    ],
    interviewCoding: [
      { q: 'First non-repeating character?', a: 'Two passes: count freq map; second pass find first count 1. O(n).' },
      { q: 'Group anagrams?', a: 'Key = sorted string or char count tuple; map key → list. O(n × k log k) or O(n × k).' },
      { q: 'Subarray sum equals K?', a: 'Prefix sum + map count of prefix sums; cur - K in map adds ways. O(n).' }
    ]
  },
  'dynamic-programming': {
    interviewTheory: [
      { q: 'DP vs divide and conquer?', a: 'DP subproblems overlap; D&C subproblems independent (merge sort halves).' },
      { q: 'How to recognize DP?', a: 'Optimal substructure + overlapping subproblems; try brute force recursion then memo.' },
      { q: 'State in DP?', a: 'Minimal description to solve subproblem — e.g. dp[i] = best using first i items.' }
    ],
    interviewCoding: [
      { q: 'Climbing stairs (1 or 2 steps)?', a: 'dp[i]=dp[i-1]+dp[i-2]; base dp[0]=1, dp[1]=1. Fibonacci pattern.' },
      { q: '0/1 Knapsack?', a: 'dp[i][w] max value using first i items with capacity w; take or skip item i-1.' },
      { q: 'Longest increasing subsequence?', a: 'dp[i] = 1 + max(dp[j]) for j<i and arr[j]<arr[i]; O(n²); or patience sorting O(n log n).' }
    ]
  },
  greedy: {
    interviewTheory: [
      { q: 'Prove greedy fails — example?', a: 'Coin change with {1,3,4} for amount 6: greedy picks 4+1+1 (3 coins) vs 3+3 (2 coins).' },
      { q: 'Exchange argument?', a: 'Show swapping any non-greedy choice with greedy does not worsen solution — proves optimality.' },
      { q: 'Greedy vs DP?', a: 'Greedy one local choice; DP explores combinations — use greedy only when proof holds.' }
    ],
    interviewCoding: [
      { q: 'Activity selection (max non-overlapping)?', a: 'Sort by end time; pick earliest ending compatible activity; greedy O(n log n).' },
      { q: 'Jump game (can reach end)?', a: 'Track farthest reachable; fail if index > farthest. O(n).' },
      { q: 'Minimum platforms for trains?', a: 'Sort arrivals/departures; sweep with two pointers counting concurrent. O(n log n).' }
    ]
  },
  'heap-priority-queue': {
    interviewTheory: [
      { q: 'Min-heap array indexing?', a: 'Parent i: (i-1)/2; children: 2i+1, 2i+2. Heapify compares with children.' },
      { q: 'Heap vs sorted array for min?', a: 'Heap: O(log n) insert/delete min; sorted array: O(n) insert, O(1) min — choose by workload.' },
      { q: 'Why Dijkstra uses min-heap?', a: 'Always expand closest unvisited node — priority by distance.' }
    ],
    interviewCoding: [
      { q: 'Kth largest in array?', a: 'Min-heap size k streaming; or quickselect O(n) average.' },
      { q: 'Merge K sorted lists?', a: 'Min-heap of list heads; pop min, push next from that list. O(N log k).' },
      { q: 'Median from data stream?', a: 'Two heaps: max-heap lower half, min-heap upper half; balance sizes.' }
    ]
  },
  trie: {
    interviewTheory: [
      { q: 'Trie vs hash map for dictionary?', a: 'Trie: prefix search, autocomplete, space for shared prefixes. Hash: O(1) exact word lookup.' },
      { q: 'Terminal flag?', a: 'Mark node where a word ends — path may pass through prefix nodes that are not words.' },
      { q: 'Compressed trie (radix)?', a: 'Merge chains of single-child nodes into edges with strings — saves memory.' }
    ],
    interviewCoding: [
      { q: 'Implement insert and search?', a: 'Walk/create nodes per char; set end=true at last. Search fails if missing child.' },
      { q: 'StartsWith prefix?', a: 'Walk trie following prefix; return true if path exists (not necessarily word end).' },
      { q: 'Word search II (grid + dictionary)?', a: 'Trie of words + backtrack on grid; prune if no trie prefix. O(rows×cols×4^L) with pruning.' }
    ]
  }
};

if(typeof dsaTopics !== 'undefined') {
  dsaTopics.forEach(topic => {
    Object.assign(topic, dsaTopicInterview[topic.id] || {});
  });
}
