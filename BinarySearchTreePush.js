// Note that left nodes will store values less than AND equal to their parents' values in this problem.

// #The Data Structure Binary Search Trees (BSTs) are data structures that provide for fast lookup, addition, and removal.

// At each Node in the tree, there are three values, the value stored at that node, the left child, and the right child. Each node has a left subchild and right child that are also nodes. Each left child's value is less than the value of it's parent's value and the right child's value is greater than the value of it's parent. Because of this, when traversing the tree from the root node to a specific node, the nodes required to search reduce in half -- thereby performing binary search.

// BSTs have the advantage of not needing to reserve more memory than necessary, as would be the case for hashtables or arrays.

// ##Run Time Analysis Average:

// Space: O(n)
// Insert: O(log n)
// Delete: O(log n)
// ##Strengths

// Store in sorted order
// Efficiently support range queries
// Efficiently support nearest-neighbor queries
// Better worst-case guarantees


function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

BST.prototype.push = function (val) {
  if (this.root === null) return this.root = new Node(val);

  let node = this.root;

  while (true) {
    const child = val > node.val ? 'right' : 'left';

    if (node[child] === null) return node[child] = new Node(val);

    node = node[child];
  }
};