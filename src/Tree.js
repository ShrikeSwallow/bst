import buildTree from "./buildTree";

export default class Tree {
  constructor(array) {
    this.root = buildTree(array, 0, array.length - 1);
  }
}
