import "./styles.css";
import Tree from "./Tree";
import { prettyPrint, curateArray } from "./helpers";

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedArray = curateArray(array);
const tree = new Tree(sortedArray);
prettyPrint(tree.root);
tree.delete(69);

prettyPrint(tree.root);
