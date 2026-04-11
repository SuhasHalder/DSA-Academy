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
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" aria-hidden="true"><text x="8" y="18" fill="var(--text-secondary)" font-size="12">memory index</text><rect x="20" y="28" width="68" height="44" rx="8" fill="color-mix(in srgb, var(--primary) 25%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="42" y="56" fill="var(--text)" font-size="16" text-anchor="middle">10</text><text x="42" y="92" fill="var(--text-secondary)" font-size="11" text-anchor="middle">0</text><rect x="100" y="28" width="68" height="44" rx="8" fill="color-mix(in srgb, var(--accent) 22%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="134" y="56" fill="var(--text)" font-size="16" text-anchor="middle">20</text><text x="134" y="92" fill="var(--text-secondary)" font-size="11" text-anchor="middle">1</text><rect x="180" y="28" width="68" height="44" rx="8" fill="color-mix(in srgb, var(--primary) 25%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="214" y="56" fill="var(--text)" font-size="16" text-anchor="middle">30</text><text x="214" y="92" fill="var(--text-secondary)" font-size="11" text-anchor="middle">2</text><rect x="260" y="28" width="68" height="44" rx="8" fill="color-mix(in srgb, var(--accent) 22%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="294" y="56" fill="var(--text)" font-size="16" text-anchor="middle">40</text><text x="294" y="92" fill="var(--text-secondary)" font-size="11" text-anchor="middle">3</text></svg>`
  },
  'linked-list': {
    easyExplanation: 'A linked list is a chain of small blocks (nodes). Each block stores a value and the address of the next block. There is no need for one big continuous memory chunk like an array.',
    subtopics: [
      { title: 'Node = value + next', body: 'Think “this train car knows which car comes next.” The last car points to nothing (null).' },
      { title: 'Insert in the middle', body: 'You only relink a few pointers; you do not shift the whole list like in an array.' },
      { title: 'Finding an item', body: 'You often walk from the head one node at a time — that is why search is usually O(n).' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 90" aria-hidden="true"><defs><marker id="arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="var(--text-secondary)"/></marker></defs><text x="8" y="16" fill="var(--text-secondary)" font-size="12">head</text><rect x="20" y="28" width="72" height="40" rx="8" fill="color-mix(in srgb, var(--primary) 20%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="56" y="54" fill="var(--text)" font-size="14" text-anchor="middle">3</text><line x1="92" y1="48" x2="118" y2="48" stroke="var(--text-secondary)" stroke-width="2" marker-end="url(#arr)"/><rect x="120" y="28" width="72" height="40" rx="8" fill="color-mix(in srgb, var(--accent) 18%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="156" y="54" fill="var(--text)" font-size="14" text-anchor="middle">7</text><line x1="192" y1="48" x2="218" y2="48" stroke="var(--text-secondary)" stroke-width="2" marker-end="url(#arr)"/><rect x="220" y="28" width="72" height="40" rx="8" fill="color-mix(in srgb, var(--primary) 20%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="256" y="54" fill="var(--text)" font-size="14" text-anchor="middle">1</text><text x="310" y="54" fill="var(--text-secondary)" font-size="13">→ null</text></svg>`
  },
  stacks: {
    easyExplanation: 'A stack is like a pile of plates: you add (push) on top and remove (pop) from the top only. Last item in is first item out — LIFO.',
    subtopics: [
      { title: 'Push', body: 'Put a new item on top of the stack.' },
      { title: 'Pop', body: 'Take the top item off. If the stack is empty, you must not pop.' },
      { title: 'Peek / Top', body: 'Look at the top value without removing it.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" aria-hidden="true"><text x="70" y="22" fill="var(--text-secondary)" font-size="12">top →</text><rect x="40" y="30" width="120" height="36" rx="6" fill="color-mix(in srgb, var(--accent) 25%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="100" y="54" fill="var(--text)" font-size="14" text-anchor="middle">C</text><rect x="40" y="72" width="120" height="36" rx="6" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="100" y="96" fill="var(--text)" font-size="14" text-anchor="middle">B</text><rect x="40" y="114" width="120" height="36" rx="6" fill="color-mix(in srgb, var(--accent) 25%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="100" y="138" fill="var(--text)" font-size="14" text-anchor="middle">A</text><text x="55" y="188" fill="var(--text-secondary)" font-size="11" text-anchor="middle">bottom</text></svg>`
  },
  queues: {
    easyExplanation: 'A queue is like a line at a ticket counter: people join at the rear and leave from the front. First in, first out — FIFO.',
    subtopics: [
      { title: 'Enqueue', body: 'Add someone to the back of the line.' },
      { title: 'Dequeue', body: 'Serve the person at the front and move the line forward.' },
      { title: 'BFS uses a queue', body: 'In graphs, we explore layer by layer using a queue.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 100" aria-hidden="true"><text x="8" y="24" fill="var(--primary)" font-size="11" font-weight="700">FRONT (dequeue)</text><rect x="20" y="36" width="56" height="40" rx="6" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="48" y="62" fill="var(--text)" font-size="14" text-anchor="middle">1</text><rect x="88" y="36" width="56" height="40" rx="6" fill="color-mix(in srgb, var(--accent) 20%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="116" y="62" fill="var(--text)" font-size="14" text-anchor="middle">2</text><rect x="156" y="36" width="56" height="40" rx="6" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="184" y="62" fill="var(--text)" font-size="14" text-anchor="middle">3</text><text x="230" y="62" fill="var(--accent)" font-size="11" font-weight="700">← REAR (enqueue)</text></svg>`
  },
  trees: {
    easyExplanation: 'A tree starts at one root node. Each node can have children below it. A binary tree means at most two children per node — left and right.',
    subtopics: [
      { title: 'Root, parent, child', body: 'The top is the root. Lines are edges. Nodes with no children are leaves.' },
      { title: 'Traversals', body: 'Preorder: node → left → right. Inorder: left → node → right. Postorder: left → right → node.' },
      { title: 'Binary search tree (BST)', body: 'Left subtree has smaller values, right subtree has larger values — makes search faster when balanced.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" aria-hidden="true"><line x1="160" y1="40" x2="100" y2="88" stroke="var(--text-secondary)" stroke-width="2"/><line x1="160" y1="40" x2="220" y2="88" stroke="var(--text-secondary)" stroke-width="2"/><line x1="100" y1="120" x2="70" y2="168" stroke="var(--text-secondary)" stroke-width="2"/><line x1="100" y1="120" x2="130" y2="168" stroke="var(--text-secondary)" stroke-width="2"/><line x1="220" y1="120" x2="190" y2="168" stroke="var(--text-secondary)" stroke-width="2"/><line x1="220" y1="120" x2="250" y2="168" stroke="var(--text-secondary)" stroke-width="2"/><circle cx="160" cy="32" r="22" fill="color-mix(in srgb, var(--primary) 35%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="160" y="38" fill="var(--text)" font-size="14" text-anchor="middle">8</text><circle cx="100" cy="104" r="20" fill="color-mix(in srgb, var(--accent) 30%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="100" y="110" fill="var(--text)" font-size="13" text-anchor="middle">3</text><circle cx="220" cy="104" r="20" fill="color-mix(in srgb, var(--accent) 30%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="220" y="110" fill="var(--text)" font-size="13" text-anchor="middle">12</text><circle cx="70" cy="176" r="18" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><text x="70" y="182" fill="var(--text)" font-size="12" text-anchor="middle">1</text><circle cx="130" cy="176" r="18" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><text x="130" y="182" fill="var(--text)" font-size="12" text-anchor="middle">6</text><circle cx="190" cy="176" r="18" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><text x="190" y="182" fill="var(--text)" font-size="12" text-anchor="middle">9</text><circle cx="250" cy="176" r="18" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><text x="250" y="182" fill="var(--text)" font-size="12" text-anchor="middle">15</text></svg>`
  },
  graphs: {
    easyExplanation: 'A graph is a set of dots (vertices) connected by lines (edges). It models “who is connected to whom” — roads, friends, or task dependencies.',
    subtopics: [
      { title: 'Directed vs undirected', body: 'Arrows mean one-way; plain lines mean both ways.' },
      { title: 'BFS vs DFS', body: 'BFS spreads in rings (uses a queue). DFS goes deep first (uses a stack or recursion).' },
      { title: 'Adjacency list', body: 'For each vertex, keep a list of neighbors — memory efficient for sparse graphs.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-hidden="true"><line x1="60" y1="50" x2="140" y2="40" stroke="var(--text-secondary)" stroke-width="2"/><line x1="140" y1="40" x2="220" y2="70" stroke="var(--text-secondary)" stroke-width="2"/><line x1="60" y1="50" x2="80" y2="130" stroke="var(--text-secondary)" stroke-width="2"/><line x1="220" y1="70" x2="200" y2="150" stroke="var(--text-secondary)" stroke-width="2"/><line x1="80" y1="130" x2="200" y2="150" stroke="var(--text-secondary)" stroke-width="2"/><line x1="140" y1="40" x2="100" y2="140" stroke="var(--primary)" stroke-width="2" stroke-dasharray="4 3"/><circle cx="60" cy="50" r="20" fill="color-mix(in srgb, var(--primary) 30%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="60" y="56" fill="var(--text)" font-size="12" text-anchor="middle">A</text><circle cx="140" cy="40" r="20" fill="color-mix(in srgb, var(--accent) 28%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="140" y="46" fill="var(--text)" font-size="12" text-anchor="middle">B</text><circle cx="220" cy="70" r="20" fill="color-mix(in srgb, var(--primary) 30%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="220" y="76" fill="var(--text)" font-size="12" text-anchor="middle">C</text><circle cx="80" cy="130" r="20" fill="color-mix(in srgb, var(--accent) 28%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="80" y="136" fill="var(--text)" font-size="12" text-anchor="middle">D</text><circle cx="200" cy="150" r="20" fill="color-mix(in srgb, var(--primary) 30%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="200" y="156" fill="var(--text)" font-size="12" text-anchor="middle">E</text></svg>`
  },
  sorting: {
    easyExplanation: 'Sorting puts items in order (smallest to largest, or the opposite). Once sorted, you can search faster (binary search) or merge lists easily.',
    subtopics: [
      { title: 'Comparison sorts', body: 'Algorithms compare pairs of elements; typical best average is O(n log n) for good algorithms.' },
      { title: 'Stable sort', body: 'Equal items keep their original relative order — useful when sorting by multiple keys.' },
      { title: 'Quick mental model', body: 'Divide the problem (merge sort / quick sort), or repeatedly fix one position (selection / bubble).' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 120" aria-hidden="true"><text x="8" y="20" fill="var(--text-secondary)" font-size="11">before</text><rect x="20" y="28" width="28" height="50" fill="var(--accent)" rx="4"/><rect x="54" y="48" width="28" height="30" fill="var(--primary)" rx="4"/><rect x="88" y="38" width="28" height="40" fill="var(--accent)" rx="4"/><rect x="122" y="58" width="28" height="20" fill="var(--primary)" rx="4"/><text x="180" y="20" fill="var(--text-secondary)" font-size="11">after (sorted)</text><rect x="200" y="58" width="28" height="20" fill="var(--primary)" rx="4"/><rect x="234" y="48" width="28" height="30" fill="var(--primary)" rx="4"/><rect x="268" y="38" width="28" height="40" fill="var(--accent)" rx="4"/><rect x="302" y="28" width="28" height="50" fill="var(--accent)" rx="4"/></svg>`
  },
  searching: {
    easyExplanation: 'Searching finds whether a value exists in your data. Linear search checks one by one. Binary search cuts the search space in half each step — but only works on sorted data.',
    subtopics: [
      { title: 'Linear search', body: 'Walk from start to end — simple, O(n).' },
      { title: 'Binary search', body: 'Look at the middle; if target is smaller, search left half; else right half — O(log n).' },
      { title: 'Common trick', body: 'Binary search can also run on an answer range (not just arrays), called “binary search on answer.”' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" aria-hidden="true"><text x="8" y="18" fill="var(--text-secondary)" font-size="11">sorted array — find target</text><rect x="20" y="28" width="44" height="36" rx="6" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="42" y="50" fill="var(--text)" font-size="13" text-anchor="middle">2</text><rect x="72" y="28" width="44" height="36" rx="6" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="94" y="50" fill="var(--text)" font-size="13" text-anchor="middle">5</text><rect x="124" y="28" width="44" height="36" rx="6" fill="color-mix(in srgb, var(--accent) 35%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="146" y="50" fill="var(--text)" font-size="13" text-anchor="middle">8</text><text x="146" y="88" fill="var(--accent)" font-size="11" text-anchor="middle">mid</text><rect x="176" y="28" width="44" height="36" rx="6" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="198" y="50" fill="var(--text)" font-size="13" text-anchor="middle">12</text><rect x="228" y="28" width="44" height="36" rx="6" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="250" y="50" fill="var(--text)" font-size="13" text-anchor="middle">17</text><rect x="280" y="28" width="44" height="36" rx="6" fill="color-mix(in srgb, var(--primary) 18%, transparent)" stroke="var(--border)" stroke-width="1"/><text x="302" y="50" fill="var(--text)" font-size="13" text-anchor="middle">21</text></svg>`
  },
  recursion: {
    easyExplanation: 'Recursion means a function calls itself with a smaller problem until it hits a simple case (base case) it can answer directly.',
    subtopics: [
      { title: 'Base case', body: 'The stopping rule — without it, the program would call forever (stack overflow).' },
      { title: 'Recursive case', body: 'Break the problem into a smaller same-shaped problem.' },
      { title: 'Call stack', body: 'Each call waits until the deeper call returns — like nested boxes opening from the inside out.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 160" aria-hidden="true"><rect x="90" y="20" width="80" height="32" rx="8" fill="color-mix(in srgb, var(--primary) 25%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="130" y="40" fill="var(--text)" font-size="12" text-anchor="middle">f(3)</text><rect x="70" y="70" width="80" height="32" rx="8" fill="color-mix(in srgb, var(--accent) 22%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="110" y="90" fill="var(--text)" font-size="12" text-anchor="middle">f(2)</text><rect x="50" y="120" width="80" height="32" rx="8" fill="color-mix(in srgb, var(--primary) 25%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="90" y="140" fill="var(--text)" font-size="12" text-anchor="middle">f(1)</text><text x="200" y="100" fill="var(--text-secondary)" font-size="11">→ base case</text></svg>`
  },
  hashing: {
    easyExplanation: 'A hash table stores key → value. A hash function maps a key to a bucket index so you can jump close to the right place in O(1) average time.',
    subtopics: [
      { title: 'Hash function', body: 'Turns a key (string, number) into an integer index.' },
      { title: 'Collision', body: 'Two keys can map to the same bucket — handled by chaining (list in bucket) or open addressing.' },
      { title: 'Set vs map', body: 'Set stores only keys; map stores key with a value.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 130" aria-hidden="true"><text x="8" y="22" fill="var(--text-secondary)" font-size="11">key "apple"</text><rect x="20" y="32" width="100" height="36" rx="8" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="70" y="55" fill="var(--text)" font-size="13" text-anchor="middle">hash()</text><line x1="122" y1="50" x2="158" y2="50" stroke="var(--text-secondary)" stroke-width="2"/><text x="165" y="55" fill="var(--text)" font-size="13">index 4</text><rect x="240" y="32" width="100" height="70" rx="8" fill="color-mix(in srgb, var(--accent) 15%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="290" y="58" fill="var(--text)" font-size="12" text-anchor="middle">bucket 4</text><text x="290" y="82" fill="var(--text-secondary)" font-size="11" text-anchor="middle">apple → $2</text></svg>`
  },
  'dynamic-programming': {
    easyExplanation: 'Dynamic programming saves answers to subproblems so you never compute the same thing twice. Think “smart memoization” or filling a table bottom-up.',
    subtopics: [
      { title: 'Overlapping subproblems', body: 'The same smaller problems appear many times — store results in an array or map.' },
      { title: 'Optimal substructure', body: 'Optimal solution builds from optimal solutions of smaller parts.' },
      { title: 'Top-down vs bottom-up', body: 'Top-down = recursion + memo; bottom-up = loops filling a table.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120" aria-hidden="true"><text x="8" y="18" fill="var(--text-secondary)" font-size="11">dp table (example)</text><rect x="20" y="28" width="44" height="36" rx="4" fill="var(--card)" stroke="var(--border)"/><text x="42" y="50" fill="var(--text)" font-size="13" text-anchor="middle">0</text><rect x="70" y="28" width="44" height="36" rx="4" fill="var(--card)" stroke="var(--border)"/><text x="92" y="50" fill="var(--text)" font-size="13" text-anchor="middle">1</text><rect x="120" y="28" width="44" height="36" rx="4" fill="color-mix(in srgb, var(--accent) 30%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="142" y="50" fill="var(--text)" font-size="13" text-anchor="middle">1</text><rect x="170" y="28" width="44" height="36" rx="4" fill="color-mix(in srgb, var(--primary) 28%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="192" y="50" fill="var(--text)" font-size="13" text-anchor="middle">2</text><rect x="220" y="28" width="44" height="36" rx="4" fill="color-mix(in srgb, var(--accent) 30%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="242" y="50" fill="var(--text)" font-size="13" text-anchor="middle">3</text><text x="20" y="100" fill="var(--text-secondary)" font-size="11">each cell = answer for a smaller problem</text></svg>`
  },
  greedy: {
    easyExplanation: 'Greedy always picks the locally best choice now, hoping it leads to a global best solution. It only works when the problem has the right structure — not every problem is greedy-friendly.',
    subtopics: [
      { title: 'Local choice', body: 'At each step, take what looks best immediately.' },
      { title: 'Proof matters', body: 'In interviews, you should know why greedy works (or use a counterexample).' },
      { title: 'Classic pattern', body: 'Sort input first, then scan once picking feasible items (interval scheduling).' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 90" aria-hidden="true"><line x1="20" y1="60" x2="340" y2="60" stroke="var(--border)" stroke-width="2"/><rect x="40" y="40" width="70" height="24" rx="4" fill="color-mix(in srgb, var(--primary) 35%, transparent)" stroke="var(--primary)"/><rect x="120" y="48" width="50" height="16" rx="4" fill="color-mix(in srgb, var(--accent) 35%, transparent)" stroke="var(--accent)"/><rect x="190" y="36" width="90" height="28" rx="4" fill="color-mix(in srgb, var(--primary) 35%, transparent)" stroke="var(--primary)"/><rect x="290" y="50" width="40" height="14" rx="4" fill="color-mix(in srgb, var(--accent) 35%, transparent)" stroke="var(--accent)"/><text x="20" y="28" fill="var(--text-secondary)" font-size="11">time → pick non-overlapping intervals</text></svg>`
  },
  'heap-priority-queue': {
    easyExplanation: 'A min-heap always keeps the smallest item at the top. Insert and remove-top take about log n steps. It is perfect for “always process the most urgent item next.”',
    subtopics: [
      { title: 'Complete binary tree shape', body: 'Heaps are stored as arrays using index math (parent/child formulas).' },
      { title: 'Heapify', body: 'Fix the heap property after insert or remove by bubbling up or down.' },
      { title: 'Priority queue', body: 'Abstract interface: push with priority, pop highest priority — heap is the usual implementation.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" aria-hidden="true"><line x1="140" y1="40" x2="90" y2="90" stroke="var(--text-secondary)" stroke-width="2"/><line x1="140" y1="40" x2="190" y2="90" stroke="var(--text-secondary)" stroke-width="2"/><line x1="90" y1="110" x2="65" y2="160" stroke="var(--text-secondary)" stroke-width="2"/><line x1="90" y1="110" x2="115" y2="160" stroke="var(--text-secondary)" stroke-width="2"/><line x1="190" y1="110" x2="165" y2="160" stroke="var(--text-secondary)" stroke-width="2"/><line x1="190" y1="110" x2="215" y2="160" stroke="var(--text-secondary)" stroke-width="2"/><circle cx="140" cy="32" r="22" fill="color-mix(in srgb, var(--accent) 40%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="140" y="38" fill="var(--text)" font-size="13" text-anchor="middle">1</text><text x="140" y="12" fill="var(--text-secondary)" font-size="10" text-anchor="middle">min at root</text><circle cx="90" cy="100" r="20" fill="color-mix(in srgb, var(--primary) 30%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="90" y="106" fill="var(--text)" font-size="12" text-anchor="middle">4</text><circle cx="190" cy="100" r="20" fill="color-mix(in srgb, var(--primary) 30%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="190" y="106" fill="var(--text)" font-size="12" text-anchor="middle">3</text><circle cx="65" cy="170" r="16" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><text x="65" y="175" fill="var(--text)" font-size="11" text-anchor="middle">7</text><circle cx="115" cy="170" r="16" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><text x="115" y="175" fill="var(--text)" font-size="11" text-anchor="middle">8</text><circle cx="165" cy="170" r="16" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><text x="165" y="175" fill="var(--text)" font-size="11" text-anchor="middle">5</text><circle cx="215" cy="170" r="16" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><text x="215" y="175" fill="var(--text)" font-size="11" text-anchor="middle">6</text></svg>`
  },
  'big-o': {
    easyExplanation: 'Big O is a short way to say “if n becomes huge, how fast does work or memory grow?” We ignore exact speed and focus on the shape: doubling n might double work, or quadruple it, or barely change it.',
    subtopics: [
      { title: 'O(1) — constant', body: 'Work does not grow with n (ideal for lookups in a hash map on average).' },
      { title: 'O(log n) — very gentle', body: 'Each step cuts the problem in half (binary search on sorted data).' },
      { title: 'O(n) — linear', body: 'One full pass over the input is usually O(n).' },
      { title: 'O(n²) — be careful', body: 'Nested loops over n often mean n×n steps — fine for small n, slow for large n.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 160" aria-hidden="true"><line x1="40" y1="130" x2="320" y2="130" stroke="var(--border)" stroke-width="2"/><line x1="40" y1="130" x2="40" y2="30" stroke="var(--border)" stroke-width="2"/><text x="8" y="85" fill="var(--text-secondary)" font-size="10" transform="rotate(-90 8 85)">work grows</text><text x="150" y="148" fill="var(--text-secondary)" font-size="10">input size n →</text><path d="M 40 120 L 120 100 L 200 85 L 280 75" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round"/><text x="250" y="68" fill="var(--accent)" font-size="10">O(log n)</text><path d="M 40 120 L 120 95 L 200 70 L 280 40" fill="none" stroke="var(--primary)" stroke-width="3" stroke-linecap="round"/><text x="248" y="38" fill="var(--primary)" font-size="10">O(n)</text><path d="M 40 120 Q 180 40 300 35" fill="none" stroke="var(--hot)" stroke-width="3" stroke-linecap="round"/><text x="230" y="22" fill="var(--hot)" font-size="10">O(n²)</text></svg>`
  },
  'strings-basics': {
    easyExplanation: 'A string is written in quotes, but under the hood it is a sequence of characters in order — like an array of letters. Index 0 is the first character.',
    subtopics: [
      { title: 'Index each character', body: 'In "CODE", index 0 is C, 1 is O, 2 is D, 3 is E.' },
      { title: 'Substring / slice', body: 'A contiguous part of the string — useful for comparing or sliding a window.' },
      { title: 'Two pointers', body: 'Start from both ends and move inward — classic for palindromes.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 100" aria-hidden="true"><text x="8" y="22" fill="var(--text-secondary)" font-size="11">string: "CODE"</text><rect x="24" y="36" width="48" height="44" rx="6" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="48" y="64" fill="var(--text)" font-size="18" text-anchor="middle">C</text><text x="48" y="92" fill="var(--text-secondary)" font-size="10" text-anchor="middle">0</text><rect x="80" y="36" width="48" height="44" rx="6" fill="color-mix(in srgb, var(--accent) 20%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="104" y="64" fill="var(--text)" font-size="18" text-anchor="middle">O</text><text x="104" y="92" fill="var(--text-secondary)" font-size="10" text-anchor="middle">1</text><rect x="136" y="36" width="48" height="44" rx="6" fill="color-mix(in srgb, var(--primary) 22%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="160" y="64" fill="var(--text)" font-size="18" text-anchor="middle">D</text><text x="160" y="92" fill="var(--text-secondary)" font-size="10" text-anchor="middle">2</text><rect x="192" y="36" width="48" height="44" rx="6" fill="color-mix(in srgb, var(--accent) 20%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="216" y="64" fill="var(--text)" font-size="18" text-anchor="middle">E</text><text x="216" y="92" fill="var(--text-secondary)" font-size="10" text-anchor="middle">3</text></svg>`
  },
  trie: {
    easyExplanation: 'A trie stores strings character by character along paths from the root. Sharing prefixes saves space and makes prefix search very natural.',
    subtopics: [
      { title: 'Root to leaf = word', body: 'Walking down spells letters; a terminal flag marks a complete word.' },
      { title: 'Prefix queries', body: 'Stop early if a path does not exist — great for autocomplete.' },
      { title: 'Trade-off', body: 'More memory per node than a flat hash set, but faster prefix operations.' }
    ],
    diagramSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 200" aria-hidden="true"><circle cx="160" cy="28" r="16" fill="color-mix(in srgb, var(--primary) 35%, transparent)" stroke="var(--primary)" stroke-width="2"/><text x="160" y="33" fill="var(--text)" font-size="11" text-anchor="middle">∅</text><line x1="160" y1="44" x2="100" y2="88" stroke="var(--text-secondary)" stroke-width="2"/><line x1="160" y1="44" x2="220" y2="88" stroke="var(--text-secondary)" stroke-width="2"/><text x="120" y="78" fill="var(--accent)" font-size="11">c</text><text x="205" y="78" fill="var(--accent)" font-size="11">d</text><circle cx="100" cy="100" r="16" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><circle cx="220" cy="100" r="16" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><line x1="100" y1="116" x2="70" y2="160" stroke="var(--text-secondary)" stroke-width="2"/><line x1="100" y1="116" x2="130" y2="160" stroke="var(--text-secondary)" stroke-width="2"/><text x="78" y="148" fill="var(--accent)" font-size="11">a</text><text x="118" y="148" fill="var(--accent)" font-size="11">o</text><circle cx="70" cy="172" r="14" fill="color-mix(in srgb, var(--accent) 35%, transparent)" stroke="var(--accent)" stroke-width="2"/><text x="70" y="177" fill="var(--text)" font-size="9" text-anchor="middle">t</text><circle cx="130" cy="172" r="14" fill="var(--card)" stroke="var(--border)" stroke-width="2"/><text x="130" y="177" fill="var(--text)" font-size="9" text-anchor="middle">t</text></svg>`
  }
};

if(typeof dsaTopics !== 'undefined') {
  dsaTopics.forEach(topic => {
    Object.assign(topic, dsaTopicLearning[topic.id] || {});
  });
}
