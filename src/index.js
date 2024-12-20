import "./styles.css";
import Tree from "./Tree";
import { prettyPrint, curateArray } from "./helpers";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedArray = curateArray(array);
const tree = new Tree(sortedArray);
prettyPrint(tree.root);
//console.log(tree.find(1));
//console.log(tree.find(8));
//tree.levelOrder(tree.print);

//console.log(tree.levelOrderRec());
//tree.postOrder(tree.print);
//console.log(tree.depth(tree.root.left.left));
console.log(tree.isBalanced());
tree.insert(6969);
tree.insert(696969);
tree.insert(69696969);
prettyPrint(tree.root);
console.log(tree.isBalanced());
tree.rebalance();
prettyPrint(tree.root);
console.log(tree.isBalanced());

tree.preOrder(tree.print);
tree.postOrder(tree.print);
tree.inOrder(tree.print);
