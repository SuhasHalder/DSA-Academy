/**
 * Extra beginner-friendly explanations, sub-topics, and SVG diagrams for DSA topics.
 * Loaded after data.js; merges into dsaTopics.
 */
const dsaTopicLearning = {
  arrays: {
    easyExplanation: 'An array is like a row of numbered boxes. Box number 0 holds the first item, box 1 the next, and so on. You can jump to any box quickly if you know its index.',
    subtopics: [
      { title: 'Index = position', body: 'We count from 0 in most languages: first element is at index 0, second at 1, etc.' },
      { title: 'Why arrays matter', body: 'Lists of scores, pixels in an image, or characters in a string are all stored as arrays under the hood.' },
      { title: 'Common tasks', body: 'Loop through all items, read or update one index, or use two indices from both ends (two pointers).' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216 56" aria-hidden="true"><text x="4" y="11" fill="var(--text-secondary)" font-size="8">contiguous memory · O(1) index</text><rect x="4" y="18" width="46" height="28" rx="4" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="27" y="36" fill="var(--text)" font-size="11" text-anchor="middle">10</text><text x="27" y="52" fill="var(--text-secondary)" font-size="7" text-anchor="middle">0</text><rect x="56" y="18" width="46" height="28" rx="4" fill="color-mix(in srgb, var(--accent) 18%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="79" y="36" fill="var(--text)" font-size="11" text-anchor="middle">20</text><text x="79" y="52" fill="var(--text-secondary)" font-size="7" text-anchor="middle">1</text><rect x="108" y="18" width="46" height="28" rx="4" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="131" y="36" fill="var(--text)" font-size="11" text-anchor="middle">30</text><text x="131" y="52" fill="var(--text-secondary)" font-size="7" text-anchor="middle">2</text><rect x="160" y="18" width="46" height="28" rx="4" fill="color-mix(in srgb, var(--accent) 18%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="183" y="36" fill="var(--text)" font-size="11" text-anchor="middle">40</text><text x="183" y="52" fill="var(--text-secondary)" font-size="7" text-anchor="middle">3</text></svg>`
  },
  'linked-list': {
    easyExplanation: 'A linked list is a chain of small blocks (nodes). Each block stores a value and the address of the next block. There is no need for one big continuous memory chunk like an array.',
    subtopics: [
      { title: 'Node = value + next', body: 'Think “this train car knows which car comes next.” The last car points to nothing (null).' },
      { title: 'Insert in the middle', body: 'You only relink a few pointers; you do not shift the whole list like in an array.' },
      { title: 'Finding an item', body: 'You often walk from the head one node at a time — that is why search is usually O(n).' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 228 44" aria-hidden="true"><defs><marker id="llarr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--text-secondary)"/></marker></defs><text x="2" y="10" fill="var(--text-secondary)" font-size="7">SLL: data + next ptr</text><text x="2" y="30" fill="var(--accent)" font-size="8" font-weight="700">head</text><rect x="28" y="14" width="44" height="24" rx="4" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="50" y="30" fill="var(--text)" font-size="10" text-anchor="middle">3</text><line x1="72" y1="26" x2="86" y2="26" stroke="var(--text-secondary)" stroke-width="1.2" marker-end="url(#llarr)"/><rect x="88" y="14" width="44" height="24" rx="4" fill="color-mix(in srgb, var(--accent) 15%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="110" y="30" fill="var(--text)" font-size="10" text-anchor="middle">7</text><line x1="132" y1="26" x2="146" y2="26" stroke="var(--text-secondary)" stroke-width="1.2" marker-end="url(#llarr)"/><rect x="148" y="14" width="44" height="24" rx="4" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="170" y="30" fill="var(--text)" font-size="10" text-anchor="middle">1</text><text x="198" y="30" fill="var(--text-secondary)" font-size="8">∅</text></svg>`
  },
  stacks: {
    easyExplanation: 'A stack is like a pile of plates: you add (push) on top and remove (pop) from the top only. Last item in is first item out — LIFO.',
    subtopics: [
      { title: 'Push', body: 'Put a new item on top of the stack.' },
      { title: 'Pop', body: 'Take the top item off. If the stack is empty, you must not pop.' },
      { title: 'Peek / Top', body: 'Look at the top value without removing it.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40" aria-hidden="true"><text x="4" y="10" fill="var(--text-secondary)" font-size="7">LIFO · push/pop at same end</text><text x="4" y="26" fill="var(--accent)" font-size="8" font-weight="700">top→</text><rect x="36" y="14" width="44" height="22" rx="4" fill="color-mix(in srgb, var(--accent) 22%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="58" y="29" fill="var(--text)" font-size="10" text-anchor="middle">C</text><rect x="86" y="14" width="44" height="22" rx="4" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="108" y="29" fill="var(--text)" font-size="10" text-anchor="middle">B</text><rect x="136" y="14" width="44" height="22" rx="4" fill="color-mix(in srgb, var(--accent) 22%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="158" y="29" fill="var(--text)" font-size="10" text-anchor="middle">A</text><text x="184" y="26" fill="var(--text-secondary)" font-size="7">bottom</text></svg>`
  },
  queues: {
    easyExplanation: 'A queue is like a line at a ticket counter: people join at the rear and leave from the front. First in, first out — FIFO.',
    subtopics: [
      { title: 'Enqueue', body: 'Add someone to the back of the line.' },
      { title: 'Dequeue', body: 'Serve the person at the front and move the line forward.' },
      { title: 'BFS uses a queue', body: 'In graphs, we explore layer by layer using a queue.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 44" aria-hidden="true"><defs><marker id="qarr" markerWidth="4" markerHeight="4" refX="3" refY="2" orient="auto"><path d="M0,0 L4,2 L0,4 Z" fill="var(--primary)"/></marker></defs><text x="4" y="10" fill="var(--text-secondary)" font-size="7">FIFO · dequeue ← · enqueue →</text><text x="4" y="30" fill="var(--primary)" font-size="7" font-weight="700">front</text><rect x="36" y="16" width="36" height="24" rx="4" fill="color-mix(in srgb, var(--primary) 20%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="54" y="32" fill="var(--text)" font-size="11" text-anchor="middle">1</text><rect x="78" y="16" width="36" height="24" rx="4" fill="color-mix(in srgb, var(--accent) 16%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="96" y="32" fill="var(--text)" font-size="11" text-anchor="middle">2</text><rect x="120" y="16" width="36" height="24" rx="4" fill="color-mix(in srgb, var(--primary) 20%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="138" y="32" fill="var(--text)" font-size="11" text-anchor="middle">3</text><text x="164" y="30" fill="var(--accent)" font-size="7" font-weight="700">rear</text><path d="M 8 28 L 32 28" stroke="var(--primary)" stroke-width="1.2" marker-end="url(#qarr)"/></svg>`
  },
  trees: {
    easyExplanation: 'A tree starts at one root node. Each node can have children below it. A binary tree means at most two children per node — left and right.',
    subtopics: [
      { title: 'Root, parent, child', body: 'The top is the root. Lines are edges. Nodes with no children are leaves.' },
      { title: 'Traversals', body: 'Preorder: node → left → right. Inorder: left → node → right. Postorder: left → right → node.' },
      { title: 'Binary search tree (BST)', body: 'Left subtree has smaller values, right subtree has larger values — makes search faster when balanced.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 72" aria-hidden="true"><text x="4" y="10" fill="var(--text-secondary)" font-size="7">BST: left &lt; node &lt; right</text><line x1="60" y1="22" x2="32" y2="42" stroke="var(--text-secondary)" stroke-width="1.2"/><line x1="60" y1="22" x2="88" y2="42" stroke="var(--text-secondary)" stroke-width="1.2"/><circle cx="60" cy="18" r="14" fill="color-mix(in srgb, var(--primary) 30%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="60" y="22" fill="var(--text)" font-size="10" text-anchor="middle">8</text><circle cx="32" cy="48" r="12" fill="color-mix(in srgb, var(--accent) 25%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="32" y="52" fill="var(--text)" font-size="9" text-anchor="middle">3</text><circle cx="88" cy="48" r="12" fill="color-mix(in srgb, var(--accent) 25%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="88" y="52" fill="var(--text)" font-size="9" text-anchor="middle">12</text><text x="4" y="68" fill="var(--text-secondary)" font-size="6">balanced height ≈ log n</text></svg>`
  },
  graphs: {
    easyExplanation: 'A graph is a set of dots (vertices) connected by lines (edges). It models “who is connected to whom” — roads, friends, or task dependencies.',
    subtopics: [
      { title: 'Directed vs undirected', body: 'Arrows mean one-way; plain lines mean both ways.' },
      { title: 'BFS vs DFS', body: 'BFS spreads in rings (uses a queue). DFS goes deep first (uses a stack or recursion).' },
      { title: 'Adjacency list', body: 'For each vertex, keep a list of neighbors — memory efficient for sparse graphs.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 76" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">V + E · BFS(queue) / DFS(stack)</text><line x1="24" y1="28" x2="54" y2="22" stroke="var(--text-secondary)" stroke-width="1"/><line x1="54" y1="22" x2="84" y2="28" stroke="var(--text-secondary)" stroke-width="1"/><line x1="24" y1="28" x2="42" y2="54" stroke="var(--text-secondary)" stroke-width="1"/><line x1="84" y1="28" x2="66" y2="54" stroke="var(--text-secondary)" stroke-width="1"/><line x1="42" y1="54" x2="66" y2="54" stroke="var(--primary)" stroke-width="1" stroke-dasharray="2 2"/><circle cx="24" cy="28" r="11" fill="color-mix(in srgb, var(--primary) 25%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="24" y="32" fill="var(--text)" font-size="8" text-anchor="middle">A</text><circle cx="54" cy="22" r="11" fill="color-mix(in srgb, var(--accent) 22%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="54" y="26" fill="var(--text)" font-size="8" text-anchor="middle">B</text><circle cx="84" cy="28" r="11" fill="color-mix(in srgb, var(--primary) 25%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="84" y="32" fill="var(--text)" font-size="8" text-anchor="middle">C</text><circle cx="42" cy="54" r="11" fill="color-mix(in srgb, var(--accent) 22%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="42" y="58" fill="var(--text)" font-size="8" text-anchor="middle">D</text><circle cx="66" cy="54" r="11" fill="color-mix(in srgb, var(--primary) 25%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="66" y="58" fill="var(--text)" font-size="8" text-anchor="middle">E</text></svg>`
  },
  sorting: {
    easyExplanation: 'Sorting puts items in order (smallest to largest, or the opposite). Once sorted, you can search faster (binary search) or merge lists easily.',
    subtopics: [
      { title: 'Comparison sorts', body: 'Algorithms compare pairs of elements; typical best average is O(n log n) for good algorithms.' },
      { title: 'Stable sort', body: 'Equal items keep their original relative order — useful when sorting by multiple keys.' },
      { title: 'Quick mental model', body: 'Divide the problem (merge sort / quick sort), or repeatedly fix one position (selection / bubble).' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">unordered → non-decreasing keys</text><rect x="6" y="14" width="16" height="22" fill="var(--accent)" rx="2"/><rect x="26" y="22" width="16" height="14" fill="var(--primary)" rx="2"/><rect x="46" y="18" width="16" height="18" fill="var(--accent)" rx="2"/><rect x="66" y="26" width="16" height="10" fill="var(--primary)" rx="2"/><text x="92" y="28" fill="var(--text-secondary)" font-size="14" font-weight="700">→</text><rect x="112" y="26" width="16" height="10" fill="var(--primary)" rx="2"/><rect x="132" y="22" width="16" height="14" fill="var(--primary)" rx="2"/><rect x="152" y="18" width="16" height="18" fill="var(--accent)" rx="2"/><rect x="172" y="14" width="16" height="22" fill="var(--accent)" rx="2"/><text x="4" y="44" fill="var(--text-secondary)" font-size="6">comparison sorts: O(n log n) typical</text></svg>`
  },
  searching: {
    easyExplanation: 'Searching finds whether a value exists in your data. Linear search checks one by one. Binary search cuts the search space in half each step — but only works on sorted data.',
    subtopics: [
      { title: 'Linear search', body: 'Walk from start to end — simple, O(n).' },
      { title: 'Binary search', body: 'Look at the middle; if target is smaller, search left half; else right half — O(log n).' },
      { title: 'Common trick', body: 'Binary search can also run on an answer range (not just arrays), called “binary search on answer.”' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 44" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">binary search · halve search space each step</text><rect x="4" y="14" width="28" height="22" rx="3" fill="color-mix(in srgb, var(--primary) 14%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="18" y="29" fill="var(--text)" font-size="9" text-anchor="middle">2</text><rect x="36" y="14" width="28" height="22" rx="3" fill="color-mix(in srgb, var(--primary) 14%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="50" y="29" fill="var(--text)" font-size="9" text-anchor="middle">5</text><rect x="68" y="14" width="28" height="22" rx="3" fill="color-mix(in srgb, var(--accent) 28%, transparent)" stroke="var(--accent)" stroke-width="1.3"/><text x="82" y="29" fill="var(--text)" font-size="9" text-anchor="middle">8</text><rect x="100" y="14" width="28" height="22" rx="3" fill="color-mix(in srgb, var(--primary) 14%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="114" y="29" fill="var(--text)" font-size="9" text-anchor="middle">12</text><rect x="132" y="14" width="28" height="22" rx="3" fill="color-mix(in srgb, var(--primary) 14%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="146" y="29" fill="var(--text)" font-size="9" text-anchor="middle">17</text><rect x="164" y="14" width="28" height="22" rx="3" fill="color-mix(in srgb, var(--primary) 14%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="178" y="29" fill="var(--text)" font-size="9" text-anchor="middle">21</text><text x="196" y="28" fill="var(--accent)" font-size="7" font-weight="700">mid</text><text x="4" y="42" fill="var(--text-secondary)" font-size="6">O(log n) comparisons</text></svg>`
  },
  recursion: {
    easyExplanation: 'Recursion means a function calls itself with a smaller problem until it hits a simple case (base case) it can answer directly.',
    subtopics: [
      { title: 'Base case', body: 'The stopping rule — without it, the program would call forever (stack overflow).' },
      { title: 'Recursive case', body: 'Break the problem into a smaller same-shaped problem.' },
      { title: 'Call stack', body: 'Each call waits until the deeper call returns — like nested boxes opening from the inside out.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 52" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">call stack grows until base case returns</text><rect x="58" y="14" width="44" height="18" rx="4" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="80" y="26" fill="var(--text)" font-size="8" text-anchor="middle">f(n)</text><rect x="48" y="34" width="44" height="18" rx="4" fill="color-mix(in srgb, var(--accent) 18%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="70" y="46" fill="var(--text)" font-size="8" text-anchor="middle">f(n-1)</text><path d="M 80 32 L 70 34" stroke="var(--text-secondary)" stroke-width="0.8"/><text x="100" y="30" fill="var(--text-secondary)" font-size="7">→ … → base</text></svg>`
  },
  hashing: {
    easyExplanation: 'A hash table stores key → value. A hash function maps a key to a bucket index so you can jump close to the right place in O(1) average time.',
    subtopics: [
      { title: 'Hash function', body: 'Turns a key (string, number) into an integer index.' },
      { title: 'Collision', body: 'Two keys can map to the same bucket — handled by chaining (list in bucket) or open addressing.' },
      { title: 'Set vs map', body: 'Set stores only keys; map stores key with a value.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 44" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">hash(key) → bucket · O(1) avg</text><rect x="4" y="14" width="52" height="22" rx="4" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="30" y="29" fill="var(--text)" font-size="8" text-anchor="middle">key</text><text x="62" y="28" fill="var(--text-secondary)" font-size="10">⇒</text><rect x="78" y="14" width="40" height="22" rx="4" fill="color-mix(in srgb, var(--accent) 14%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="98" y="29" fill="var(--text)" font-size="8" text-anchor="middle">h(k)</text><text x="124" y="28" fill="var(--text-secondary)" font-size="10">→</text><rect x="138" y="14" width="64" height="22" rx="4" fill="color-mix(in srgb, var(--primary) 12%, transparent)" stroke="var(--border)" stroke-width="1.2"/><text x="170" y="24" fill="var(--text)" font-size="7" text-anchor="middle">slot / chain</text><text x="170" y="33" fill="var(--text-secondary)" font-size="6" text-anchor="middle">(k,v)</text><text x="4" y="42" fill="var(--text-secondary)" font-size="6">collisions: chaining or probing</text></svg>`
  },
  'dynamic-programming': {
    easyExplanation: 'Dynamic programming saves answers to subproblems so you never compute the same thing twice. Think “smart memoization” or filling a table bottom-up.',
    subtopics: [
      { title: 'Overlapping subproblems', body: 'The same smaller problems appear many times — store results in an array or map.' },
      { title: 'Optimal substructure', body: 'Optimal solution builds from optimal solutions of smaller parts.' },
      { title: 'Top-down vs bottom-up', body: 'Top-down = recursion + memo; bottom-up = loops filling a table.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188 40" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">memo / tabulation · reuse subproblem answers</text><rect x="4" y="14" width="32" height="20" rx="3" fill="var(--card)" stroke="var(--border)" stroke-width="1"/><text x="20" y="28" fill="var(--text)" font-size="9" text-anchor="middle">0</text><rect x="40" y="14" width="32" height="20" rx="3" fill="var(--card)" stroke="var(--border)" stroke-width="1"/><text x="56" y="28" fill="var(--text)" font-size="9" text-anchor="middle">1</text><rect x="76" y="14" width="32" height="20" rx="3" fill="color-mix(in srgb, var(--accent) 25%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="92" y="28" fill="var(--text)" font-size="9" text-anchor="middle">1</text><rect x="112" y="14" width="32" height="20" rx="3" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="128" y="28" fill="var(--text)" font-size="9" text-anchor="middle">2</text><rect x="148" y="14" width="32" height="20" rx="3" fill="color-mix(in srgb, var(--accent) 25%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="164" y="28" fill="var(--text)" font-size="9" text-anchor="middle">3</text><text x="4" y="38" fill="var(--text-secondary)" font-size="6">dp[i] from dp[i-1], dp[i-2], …</text></svg>`
  },
  greedy: {
    easyExplanation: 'Greedy always picks the locally best choice now, hoping it leads to a global best solution. It only works when the problem has the right structure — not every problem is greedy-friendly.',
    subtopics: [
      { title: 'Local choice', body: 'At each step, take what looks best immediately.' },
      { title: 'Proof matters', body: 'In interviews, you should know why greedy works (or use a counterexample).' },
      { title: 'Classic pattern', body: 'Sort input first, then scan once picking feasible items (interval scheduling).' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 36" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">greedy: earliest finish (example pattern)</text><line x1="4" y1="24" x2="196" y2="24" stroke="var(--border)" stroke-width="1"/><rect x="12" y="14" width="48" height="10" rx="2" fill="color-mix(in srgb, var(--primary) 30%, transparent)" stroke="var(--primary)" stroke-width="1"/><rect x="68" y="17" width="32" height="7" rx="2" fill="color-mix(in srgb, var(--accent) 28%, transparent)" stroke="var(--accent)" stroke-width="1"/><rect x="108" y="12" width="56" height="12" rx="2" fill="color-mix(in srgb, var(--primary) 30%, transparent)" stroke="var(--primary)" stroke-width="1"/><rect x="172" y="18" width="22" height="6" rx="2" fill="color-mix(in srgb, var(--accent) 28%, transparent)" stroke="var(--accent)" stroke-width="1"/><text x="4" y="34" fill="var(--text-secondary)" font-size="6">sort by end, take compatible intervals</text></svg>`
  },
  'heap-priority-queue': {
    easyExplanation: 'A min-heap always keeps the smallest item at the top. Insert and remove-top take about log n steps. It is perfect for “always process the most urgent item next.”',
    subtopics: [
      { title: 'Complete binary tree shape', body: 'Heaps are stored as arrays using index math (parent/child formulas).' },
      { title: 'Heapify', body: 'Fix the heap property after insert or remove by bubbling up or down.' },
      { title: 'Priority queue', body: 'Abstract interface: push with priority, pop highest priority — heap is the usual implementation.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 64" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">min-heap · parent ≤ children</text><text x="42" y="11" fill="var(--accent)" font-size="6" font-weight="700">peek min</text><line x1="50" y1="18" x2="28" y2="34" stroke="var(--text-secondary)" stroke-width="1"/><line x1="50" y1="18" x2="72" y2="34" stroke="var(--text-secondary)" stroke-width="1"/><circle cx="50" cy="16" r="12" fill="color-mix(in srgb, var(--accent) 32%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="50" y="20" fill="var(--text)" font-size="9" text-anchor="middle">1</text><circle cx="28" cy="40" r="10" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="28" y="44" fill="var(--text)" font-size="8" text-anchor="middle">4</text><circle cx="72" cy="40" r="10" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="72" y="44" fill="var(--text)" font-size="8" text-anchor="middle">3</text><text x="4" y="60" fill="var(--text-secondary)" font-size="6">array: i → 2i+1, 2i+2</text></svg>`
  },
  'big-o': {
    easyExplanation: 'Big O is a short way to say “if n becomes huge, how fast does work or memory grow?” We ignore exact speed and focus on the shape: doubling n might double work, or quadruple it, or barely change it.',
    subtopics: [
      { title: 'O(1) — constant', body: 'Work does not grow with n (ideal for lookups in a hash map on average).' },
      { title: 'O(log n) — very gentle', body: 'Each step cuts the problem in half (binary search on sorted data).' },
      { title: 'O(n) — linear', body: 'One full pass over the input is usually O(n).' },
      { title: 'O(n²) — be careful', body: 'Nested loops over n often mean n×n steps — fine for small n, slow for large n.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 56" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">growth vs n (schematic)</text><line x1="28" y1="44" x2="160" y2="44" stroke="var(--border)" stroke-width="1"/><line x1="28" y1="44" x2="28" y2="12" stroke="var(--border)" stroke-width="1"/><path d="M 28 40 L 72 34 L 116 28 L 158 22" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round"/><path d="M 28 40 L 80 30 L 132 18 L 158 14" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round"/><path d="M 28 40 Q 90 14 158 12" fill="none" stroke="var(--hot)" stroke-width="1.5" stroke-linecap="round"/><text x="100" y="54" fill="var(--text-secondary)" font-size="6">n →</text><text x="4" y="28" fill="var(--text-secondary)" font-size="6" transform="rotate(-90 4 28)">work</text><text x="118" y="12" fill="var(--hot)" font-size="6">n²</text><text x="130" y="20" fill="var(--primary)" font-size="6">n</text><text x="132" y="26" fill="var(--accent)" font-size="6">log n</text></svg>`
  },
  'strings-basics': {
    easyExplanation: 'A string is written in quotes, but under the hood it is a sequence of characters in order — like an array of letters. Index 0 is the first character.',
    subtopics: [
      { title: 'Index each character', body: 'In "CODE", index 0 is C, 1 is O, 2 is D, 3 is E.' },
      { title: 'Substring / slice', body: 'A contiguous part of the string — useful for comparing or sliding a window.' },
      { title: 'Two pointers', body: 'Start from both ends and move inward — classic for palindromes.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 40" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">char array · index 0..n-1</text><rect x="6" y="14" width="22" height="22" rx="3" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="17" y="29" fill="var(--text)" font-size="11" text-anchor="middle">C</text><text x="17" y="38" fill="var(--text-secondary)" font-size="5.5" text-anchor="middle">0</text><rect x="32" y="14" width="22" height="22" rx="3" fill="color-mix(in srgb, var(--accent) 15%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="43" y="29" fill="var(--text)" font-size="11" text-anchor="middle">O</text><text x="43" y="38" fill="var(--text-secondary)" font-size="5.5" text-anchor="middle">1</text><rect x="58" y="14" width="22" height="22" rx="3" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="69" y="29" fill="var(--text)" font-size="11" text-anchor="middle">D</text><text x="69" y="38" fill="var(--text-secondary)" font-size="5.5" text-anchor="middle">2</text><rect x="84" y="14" width="22" height="22" rx="3" fill="color-mix(in srgb, var(--accent) 15%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="95" y="29" fill="var(--text)" font-size="11" text-anchor="middle">E</text><text x="95" y="38" fill="var(--text-secondary)" font-size="5.5" text-anchor="middle">3</text><text x="114" y="28" fill="var(--text-secondary)" font-size="6">two pointers · sliding window</text></svg>`
  },
  trie: {
    easyExplanation: 'A trie stores strings character by character along paths from the root. Sharing prefixes saves space and makes prefix search very natural.',
    subtopics: [
      { title: 'Root to leaf = word', body: 'Walking down spells letters; a terminal flag marks a complete word.' },
      { title: 'Prefix queries', body: 'Stop early if a path does not exist — great for autocomplete.' },
      { title: 'Trade-off', body: 'More memory per node than a flat hash set, but faster prefix operations.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 72" aria-hidden="true"><text x="4" y="9" fill="var(--text-secondary)" font-size="6.5">prefix tree · shared prefixes</text><circle cx="54" cy="16" r="10" fill="color-mix(in srgb, var(--primary) 28%, transparent)" stroke="var(--primary)" stroke-width="1.2"/><text x="54" y="19" fill="var(--text)" font-size="7" text-anchor="middle">root</text><line x1="54" y1="26" x2="32" y2="40" stroke="var(--text-secondary)" stroke-width="1"/><line x1="54" y1="26" x2="76" y2="40" stroke="var(--text-secondary)" stroke-width="1"/><text x="38" y="36" fill="var(--accent)" font-size="7">a</text><text x="68" y="36" fill="var(--accent)" font-size="7">c</text><circle cx="32" cy="46" r="9" fill="var(--card)" stroke="var(--border)" stroke-width="1.2"/><circle cx="76" cy="46" r="9" fill="var(--card)" stroke="var(--border)" stroke-width="1.2"/><line x1="32" y1="55" x2="32" y2="62" stroke="var(--text-secondary)" stroke-width="1"/><text x="26" y="60" fill="var(--accent)" font-size="6">t</text><circle cx="32" cy="66" r="7" fill="color-mix(in srgb, var(--accent) 28%, transparent)" stroke="var(--accent)" stroke-width="1.2"/><text x="32" y="69" fill="var(--text)" font-size="6" text-anchor="middle">$</text><text x="48" y="68" fill="var(--text-secondary)" font-size="6">end of word</text></svg>`
  }
};

if(typeof dsaTopics !== 'undefined') {
  dsaTopics.forEach(topic => {
    Object.assign(topic, dsaTopicLearning[topic.id] || {});
  });
}
