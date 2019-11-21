class Set {
  constructor() {
    this.items = {}
  }

  // 判断value是否存在于集合内，返回true或false
  has(value) {
    return this.items.hasOwnProperty(value)
  }

  // 向集合内添加一个数据，成功返回true，失败返回false
  add(value) {
    if (this.has(value)) {
      return false
    }
    this.items[value] = value
    return true
  }

  // 从集合内删除一个数据
  remove(value) {
    if (this.has(value)) {
      delete this.items[value]
    }
  }

  // 清空集合
  clear() {
    this.items = {}
  }

  // 集合的长度
  size() {
    return Object.keys(this.items).length
  }

  // 以数组形式返回集合内的所有元素
  values() {
    return Object.keys(this.items)
  }

  // 求并集
  union(otherSet) {
    let unionSet = new Set()     // 创建一个新的集合，用于存储两个集合的并集
    let values = this.values();  //获取第一个集合（当前的Set类实例）所有的值
    for (let i = 0; i < values.length; i++) {  // 遍历并全部添加到代表并集的集合中
      unionSet.add(values[i]);
    }
    values = otherSet.values(); // 第二个集合同理
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  }

  // 求交集
  intersection(otherSet) {
    let intersectionSet = new Set()      // 创建一个新的集合，用于存储两个集合的交集结果
    let values = this.values();
    for (let i = 0; i < values.length; i++) {  // 遍历当前的集合中的元素，如果这个元素也存在与otherSet，则将该元素存入intersectionSet
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }

    return intersectionSet
  }

  // 求差集
  difference(otherSet){
    let differenceSet = new Set()      // 创建一个新的集合，用于存储两个集合的交集结果
    let values = this.values();
    for (let i = 0; i < values.length; i++) {  // 遍历当前的集合中的元素，如果这个元素不存在于otherSet中，则将该元素存入differenceSet
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }

  // 判断当前集合是否为otherSet的子集
  isSubset(otherSet){
    //如果当前实例中的元素比otherSet实例更多，它就不是一个子集。
    // 子集的元素个数需要小于或等于要比较的集合。
    if (this.size() > otherSet.size()){
      return false
    }
    let values = this.values();
    for (let i = 0; i < values.length; i++) {  // 遍历当前的集合中的元素，判断这个元素是否存在于otherSet中，
                                               // 如果有一个元素不存在于otherSet中，则表明不是子集
      if (!otherSet.has(values[i])) {
        return false
      }
    }
    return true
  }
}

// let s = new Set()
// s.add(1)
// s.add(2)
// s.add(3)
// console.log(s.values());
// console.log(s.has(2));
// s.remove(2)
// console.log(s.has(2));
// console.log(s.values());
// s.clear()
// console.log(s.values());
//
//
// let setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// let setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
// let unionAB = setA.union(setB);
// console.log(unionAB.values());


// let setA = new Set();
// setA.add(1);
// setA.add(2);
// let setB = new Set();
// setB.add(1);
// setB.add(2);
// setB.add(3);
// let setC = new Set();
// setC.add(2);
// setC.add(3);
// setC.add(4);
// console.log(setA.isSubset(setB));
// console.log(setA.isSubset(setC));