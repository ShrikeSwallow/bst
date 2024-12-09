export const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

export const curateArray = (array) => {
  const setTemp = new Set(array);
  const sortedArray = [...setTemp];
  return sortedArray.toSorted((a, b) => a - b);
};

export const getSuccessor = (curr) => {
  curr = curr.right;
  while (curr !== null && curr.left !== null) {
    curr = curr.left;
  }
  return curr;
};
