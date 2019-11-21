class Queue {
    constructor() {
      this.items = [];
    }

    //进队，从队的尾部进入
    enqueue(value) {
      this.items.push(value);
    }

    //出队，从队的头部出
    dequeue() {
      return this.items.shift();
    }

    //获取队中的第一个元素
    front() {
      return this.items[0];
    }

    //判断队是否为空
    isEmpty() {
      return this.items.length === 0;
    }

    //获取队中元素的个数
    size() {
      return this.items.length;
    }
}
