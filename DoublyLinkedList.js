//创建一个Node辅助类，用来生成节点=
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * 向链表尾部追加一个新元素
     * @param {} element  要追加的新元素
     */
    append(value) {
        let node = new Node(value);
        let current = this.head;
        if (!this.head) { //如果链表为空
            this.head = node;
            this.tail = node;
        } else {
            current = this.tail;
            current.next = node;
            node.prev = current;
            this.tail = node;
        }
        this.length++;
    }
    /**
     * 根据元素值查找元素，并返回该元素
     * @param {*} value 
     */
    find(value) {
        let current = this.head;
        if (!this.head) { //如果链表为空
            console.log("这是一个空链表！！！");
            return null;
        }
        if (current.value == value) {
            return current;
        }
        while (current.next) {
            current = current.next;
            if (current.value === value) {
                return current
            }
        }
        console.log("没有找到该元素！！！");
        return null;
    }
    /**
     * 向链表的特定位置插入一个新的项
     * @param {Number} position 要插入的位置
     * @param {*} element  要插入的新元素值
     */
    insert(position, element) {
        if (position >= 0 && position <= this.length) {
            let node = new Node(element);
            let current = this.head;
            let previous = null;
            let index = 0;
            if (position === 0) { //如果在第一个位置插入
                if (!this.head) { //如果链表为空
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this.head = node;
                }
            } else if (position === this.length) { //如果在最后一个位置插入
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else { //如果在中间任意一个位置插入
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }
            this.length++;
            return true;
        } else {
            console.log('该位置不存在！');
            return false;
        }
    }
    /**
     * 根据元素值删除元素，并返回该元素
     * @param {*} value 
     */
    remove(value) {
        let current = this.find(value);
        if (current == null) {
            console.log("没有找到该元素！！！");
            return null;
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.length--;
        return current;
    }
    /**
     * 根据元素位置删除元素，并返回该元素
     * @param {Number} position  要删除元素的位置
     */
    removeAt(position) {
        if (position >= 0 && position <= this.length) {
            let current = this.head;
            let previous = null;
            let index = 0;
            if (position === 0) { //如果删除第一个位置
                head = current.next;
                head.prev = null;
                if (this.length === 1) { //如果链表中只有一个元素
                    this.tail = null;
                }
            } else if (position === this.length - 1) { //如果删除最后一个位置
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length--;
            return current;
        } else {
            console.log('该位置不存在！');
            return null;
        }
    }
    /**
     * 返回链表包含的元素个数
     */
    size() {
        return this.length
    }
    /**
     * 判断链表是否为空，是返回true，否返回false
     */
    isEmpty() {
        if (this.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * 顺序遍历打印该链表
     */
    nextPrint() {
        var current = this.head;
        while (current != null) {
            console.log(current.value);
            current = current.next;
        }
    }
    /**
     * 逆序遍历打印该链表
     */
    prevPrint() {
        var current = this.tail;
        while (current != null) {
            console.log(current.value);
            current = current.prev;
        }
    }
}