class Stack {
    constructor() {
      this.items = [];
    };
    // 添加一个新元素到栈顶
    push(value) {
      this.items.push(value);
    };
    // 移除栈顶的元素，同时返回该元素
    pop() {
      return this.items.pop();
    };
    // 获取栈顶的元素
    peek() {
      return this.items[this.items.length - 1];
    };
    // 判断栈是否为空。是返回true,否返回false
    isEmpty() {
      return this.items.length === 0;
    };
    // 清空栈里的元素
    clear() {
      return this.items = [];
    };
    // 获取栈里元素的个数
    size() {
      return this.items.length;
    }
}