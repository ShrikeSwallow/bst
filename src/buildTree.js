import Node from "./Node";

export const buildTree = (array, start, end) => {
  if (start > end) {
    return null;
  }

  let mid = start + Math.floor((end - start) / 2);

  let root = new Node(array[mid]);

  root.left = buildTree(array, start, mid - 1);
  root.right = buildTree(array, mid + 1, end);

  return root;
};
