//创建一个Node辅助类，用来生成节点
function Node(value) {
    this.value = value;
    this.next = null;
}

//链表类
function LinkedList() {
    this.head = null;
    this.length = 0;
    //向链表尾部追加元素
    this.push = push;
    //从链表中查找某个元素
    this.find = find;
    //在链表中任意一个元素之后插入一个元素
    this.insertAfter = insertAfter;
    //从链表中查找任意元素节点的前一个节点
    this.findPrevious = findPrevious;
    //从链表中删除值为value的元素
    this.remove = remove;
    //返回当前链表的长度
    this.size = size;
    //查找某个元素在链表中的索引值
    this.indexof = indexof;
    //删除链表中第pos个元素
    this.removeAt = removeAt;
    //获取链表中第一个元素
    this.getHead = getHead;
    //打印当前的链表，供测试用
    this.print = print;
}
//向链表尾部追加元素
function push(value) {
    var node = new Node(value);
    if (this.head == null) {
        this.head = node;
    } else {
        var current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = node;
    }
    length++;
}
//在链表中任意一个元素之后插入一个元素
function insertAfter(value, item) {
    var node = new Node(value);
    var current = this.find(item);
    if (current == null) {
        return console.log('找不到元素');
    }
    node.next = current.next;
    current.next = node;
    length++;
}
//从链表中删除值为value的元素
function remove(value) {
    var previous = this.findPrevious(value);
    var current = this.find(value);
    if (previous == null) {
        return console.log('链表中找不到被删除的元素');
    }
    previous.next = current.next;
    length--;
}
//删除链表中第pos个元素
function removeAt(pos) {
    if (pos > -1 && pos < length) {
        var current = this.head;
        var index = 0;
        if (pos === 0) {
            this.head = current.next;
        } else {
            while (index < pos) {
                var previous = current;
                current = current.next;
                index++;
            }
            previous.next = current.next;
        }
        length--;
    } else {
        return null;
    }
}
//从链表中查找某个元素
function find(value) {
    var currentNode = this.head;
    if (currentNode == null) {
        console.log("这是一个空链表！！！");
        return null;
    }
    if (currentNode.value === value) {
        return currentNode;
    }
    while (currentNode.next) {
        currentNode = currentNode.next;
        if (currentNode.value === value) {
            return currentNode
        }
    }
    console.log("没有找到该元素！！！");
    return null;
}
//从链表中查找任意元素节点的前一个节点
function findPrevious(value) {
    var current = this.head;
    if (current == null) {
        console.log('这是一个空链表');
        return null;
    }
    while (current.next) {
        current = current.next;
        if (current.next.value === value) {
            return current;
        }
    }
    console.log('找不到该元素的前一个元素');
    return null;
}
//查找某个元素在链表中的索引值
function indexof(value) {
    var current = this.head;
    var index = 0;
    if (current == null) {
        return null;
    } else {
        while (current) {
            if (current.value === value) {
                return index;
            }
            index++;
            current = current.next;
        }
    }
    return -1;
}
//返回当前链表的长度
function size() {
    return length;
}
//获取链表中第一个元素
function getHead() {
    return this.head;
}
//打印当前的链表，供测试用
function print() {
    var current = this.head;
    while (current != null) {
        console.log(current.value);
        current = current.next;
    }
}
