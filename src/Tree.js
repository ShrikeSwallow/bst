import Node from "./Node";
import { buildTree } from "./buildTree";
import { deleteNode } from "./deleteNode";

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
  find = (value) => {
    let curr = this.root;
    while (curr !== null) {
      if (curr.data === value) {
        return curr;
      } else if (curr.data > value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return null;
  };
  delete = (value) => {
    this.root = deleteNode(this.root, value);
  };
  levelOrder = (callback) => {
    if (this.root === null) {
      return;
    }
    const queueArr = [];
    queueArr.push(this.root);
    let curr;
    while (queueArr.length > 0) {
      curr = queueArr[0];

      // callback should go here
      // callback();
      console.log(curr.data);
      if (curr.left !== null) {
        queueArr.push(curr.left);
      }
      if (curr.right !== null) {
        queueArr.push(curr.right);
      }
      queueArr.splice(0, 1);
    }
  };
}
