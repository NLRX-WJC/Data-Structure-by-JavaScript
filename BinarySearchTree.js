// 创建一个辅助节点类Node
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // 向树中插入一个节点值为value的节点。
    insert(value) {
        let node = new Node(value);
        if (this.root == null) {
            this.root = node;
        } else {
            insertNode(this.root, node);
        }
    }
    // 中序遍历
    midOrderTraverse(callback) {
        midOrderTraverseNode(this.root, callback);
    }

    // 先序遍历
    preOrderTraverse(callback) {
        preOrderTraverseNode(this.root, callback)
    }

    // 后序遍历
    lastOrderTraverse(callback) {
        lastOrderTraverseNode(this.root, callback)
    }
    // 查找树中节点值最小的节点
    minNodeInTree(node) {
        if (node) {
            while (node && node.left) {
                node = node.left;
            }
            return node.value;
        } else {
            return null;
        }
    }
    // 查找树中节点值最大的节点
    maxNodeInTree(node) {
        if (node) {
            while (node && node.right) {
                node = node.right;
            }
            return node.value;
        } else {
            return null;
        }
    }

    // 查找树中特定的节点值
    searchNodeInTree(value) {
        return searchNode(this.root, value);
    }
}
// 插入节点辅助函数
function insertNode(node, newNode) {
    if (node.value > newNode.value) {
        if (node.left == null) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode)
        }
    } else {
        if (node.right == null) {
            node.right = newNode;
        } else {
            insertNode(node.right, newNode);
        }
    }
}
// 中序遍历辅助函数
function midOrderTraverseNode(node, callback) {
    if (node !== null) {
        midOrderTraverseNode(node.left, callback);
        callback(node);
        midOrderTraverseNode(node.right, callback);
    }
}
// 先序遍历辅助函数
function preOrderTraverseNode(node, callback) {
    if (node !== null) {
        callback(node);
        preOrderTraverseNode(node.left, callback);
        preOrderTraverseNode(node.right, callback);
    }
}
// 后序遍历辅助函数
function lastOrderTraverseNode(node, callback) {
    if (node !== null) {
        lastOrderTraverseNode(node.left, callback);
        lastOrderTraverseNode(node.right, callback);
        callback(node);
    }
}

// 查找特定节点辅助函数
function searchNode(node, value) {
    if (node == null) {
        return null;
    }
    if (value < node.value) {
        return searchNode(node.left, value);
    } else if (value > node.value) {
        return searchNode(node.right, value);
    } else {
        return node;
    }
}

let bst = new BST();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

function printBST(node) {
    console.log(node.value);
}
console.log('----------中序-------------');
bst.midOrderTraverse(printBST)
console.log('----------先序-------------');
bst.preOrderTraverse(printBST)
console.log('----------后序-------------');
bst.lastOrderTraverse(printBST)
console.log(bst.minNodeInTree(bst.root));
console.log(bst.maxNodeInTree(bst.root));
