import Node from "./Node";

export default buildTree = (array, start, end) => {
  if (start > end) {
    return null;
  }

  let mid = start + Math.floor((end - start) / 2);

  let root = new Node(array[mid]);

  root.left = buildTree(arr, start, mid - 1);
  root.right = buildTree(arr, mid + 1, end);

  return root;
};
