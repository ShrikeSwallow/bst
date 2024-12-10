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
  print = (node) => {
    console.log(node.data);
  };
  errorThrower = () => {
    throw new Error("Callback is required!");
  };
  levelOrder = (callback) => {
    if (!callback) {
      this.errorThrower();
    }
    if (this.root === null) {
      return;
    }
    const queueArr = [];
    queueArr.push(this.root);
    let curr;
    while (queueArr.length > 0) {
      curr = queueArr[0];

      // callback should go here
      callback(curr);
      //console.log(curr.data);
      if (curr.left !== null) {
        queueArr.push(curr.left);
      }
      if (curr.right !== null) {
        queueArr.push(curr.right);
      }
      queueArr.splice(0, 1);
    }
  };

  #levelRec = (node, level, arr, callback) => {
    if (!node) {
      return;
    }

    if (arr[level]) {
      arr[level].push(node.data);
    } else {
      arr[level] = [node.data];
    }
    // callback goes here
    // callback(node);
    this.#levelRec(node.left, level + 1, arr, callback);
    this.#levelRec(node.right, level + 1, arr, callback);
  };

  levelOrderRec = (callback) => {
    const result = [];
    this.#levelRec(this.root, 0, result, callback);
    return result;
  };

  #preOrderRec = (root, callback) => {
    if (root === null) {
      return;
    }
    callback(root);
    this.#preOrderRec(root.left, callback);
    this.#preOrderRec(root.right, callback);
  };
  preOrder = (callback) => {
    this.#preOrderRec(this.root, callback);
  };

  #inOrderRec = (root, callback) => {
    if (root === null) {
      return;
    }
    this.#inOrderRec(root.left, callback);
    callback(root);
    this.#inOrderRec(root.right, callback);
  };
  inOrder = (callback) => {
    this.#inOrderRec(this.root, callback);
  };

  #postOrderRec = (root, callback) => {
    if (root === null) {
      return;
    }
    this.#postOrderRec(root.left, callback);
    this.#postOrderRec(root.right, callback);
    callback(root);
  };
  postOrder = (callback) => {
    this.#postOrderRec(this.root, callback);
  };
  height = (node) => {
    // look for searched node's value, if none, return null; if found,
    // call levelOrderRec(node), table length is the height, return it
    let subArr = [];
    this.#levelRec(node, 0, subArr);
    return subArr.length - 1;
  };
  depth = (node) => {
    // create a counter variable, traverse tree searching for node value,
    // after every check increase counter, return it
  };
}
