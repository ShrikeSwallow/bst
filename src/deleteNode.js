import { getSuccessor } from "./helpers";

export const deleteNode = (root, value) => {
  if (root === null) {
    return root;
  }

  // traversing subtrees to find value
  if (root.data > value) {
    root.left = deleteNode(root.left, value);
  } else if (root.data < value) {
    root.right = deleteNode(root.right, value);
  } else {
    // if root matches the value

    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }

    // When both children are present
    let succ = getSuccessor(root);
    root.data = succ.data;
    root.right = deleteNode(root.right, succ.data);
  }
  return root;
};
