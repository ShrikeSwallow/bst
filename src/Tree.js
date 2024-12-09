import Node from "./Node";
import { buildTree } from "./buildTree";

export default class Tree {
  constructor(array) {
    this.root = buildTree(array, 0, array.length - 1);
  }
  insert = (value) => {
    const temp = new Node(value);

    if (this.root === null) {
      return temp;
    }

    // Find the parent node for the new value node
    let parent = null;
    let curr = this.root;
    while (curr !== null) {
      parent = curr;
      if (curr.data > value) {
        curr = curr.left;
      } else if (curr.data < value) {
        curr = curr.right;
      } else {
        // new insert is a duplicate
        return;
      }
    }

    if (parent.data > value) {
      parent.left = temp;
    } else {
      parent.right = temp;
    }
  };
}
