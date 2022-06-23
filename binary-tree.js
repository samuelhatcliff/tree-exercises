/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    function minDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minDepthHelper(node.right) + 1;
      if (node.right === null) return minDepthHelper(node.left) + 1;
      return (
        Math.min(minDepthHelper(node.left), minDepthHelper(node.right)) + 1
      );
    }
    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    function maxDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthHelper(node.right) + 1;
      if (node.right === null) return maxDepthHelper(node.left) + 1;
      return (
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
      );
    }
    return maxDepthHelper(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    if (!this.root) return 0;
    function maxSumHelper(node) {
      if (node.left === null && node.right === null) return node.val;
      if (node.left === null) return maxSumHelper(node.right) + node.val;
      if (node.right === null) return maxSumHelper(node.left) + node.val;
      return (
        Math.max(maxSumHelper(node.left), maxSumHelper(node.right)) + node.val
      );
    }
    return maxSumHelper(this.root);
  }

  max() {
    if (!this.root) return 0;
    function maxSumHelper(node) {
      console.log("current node:", node)
      if (node.left === null && node.right === null) return node.val;
      if (node.left === null) return maxSumHelper(node.right);
      if (node.right === null) return maxSumHelper(node.left);
      return (
        Math.max(maxSumHelper(node.left), maxSumHelper(node.right))
      );
    }
    return maxSumHelper(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    const max = this.max()
    const root = this.root
    function nextLargerHelper(node, currentCand) {
      if (node === root) currentCand = max;
      if (node.val > lowerBound && node.val < currentCand) currentCand = node.val;
      if (node.left === null && node.right === null) return currentCand;
      if (!node.left) return nextLargerHelper(node.right, currentCand);
      if (!node.right) return nextLargerHelper(node.left, currentCand);
      return (
        Math.min(nextLargerHelper(node.left, currentCand), nextLargerHelper(node.right, currentCand))
      );
    }
    const result = nextLargerHelper(this.root);
    return result <= lowerBound ? null : result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

// const root = new BinaryTreeNode("F")
// const A = new BinaryTreeNode("A")
// const B = new BinaryTreeNode("B")
// const C = new BinaryTreeNode("C")
// const D = new BinaryTreeNode("D")
// const E = new BinaryTreeNode("E")
// const G = new BinaryTreeNode("G")
// const H = new BinaryTreeNode("H")
// const I = new BinaryTreeNode("I")
// const J = new BinaryTreeNode("J")
// const K = new BinaryTreeNode("K")
// const M = new BinaryTreeNode("M")

// root.left = C;
// root.right = K;
// C.left = B;
// C.right = E;
// K.left = I;
// K.right = M;
// B.left = A;
// E.left = D;
// I.left = H;
// H.left = G;
// I.right = J;
// const letterTree = new BinaryTree(root);


// return letterTree.minDepth()

const root = new BinaryTreeNode(6)
const A = new BinaryTreeNode(1)
const B = new BinaryTreeNode(2)
const C = new BinaryTreeNode(3)
const D = new BinaryTreeNode(4)
const E = new BinaryTreeNode(5)
const G = new BinaryTreeNode(7)
const H = new BinaryTreeNode(8)
const I = new BinaryTreeNode(9)
const J = new BinaryTreeNode(10)
const K = new BinaryTreeNode(11)
const M = new BinaryTreeNode(13)

root.left = C;
root.right = K;
C.left = B;
C.right = E;
K.left = I;
K.right = M;
B.left = A;
E.left = D;
I.left = H;
H.left = G;
I.right = J;

const numberTree = new BinaryTree(root)




console.log(numberTree.nextLarger(9));













module.exports = { BinaryTree, BinaryTreeNode };
