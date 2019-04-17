function LinkedList() {
  this.head = null;

  this.append = function(value) {
    let currentNode = this.head;

    if (currentNode === null) {
      this.head = { value, next: null };
      return this.head;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = { value, next: null };
    return this.head;
  }

  this.pop = function() {
    // remove last node
    if (this.head === null || this.head.next === null) {
      this.head = null;
      return this.head;
    }

    let currentNode = this.head;

    while (currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    return this.head;
  }

  this.print = function () {
    let node = this.head;
    const arr = [];

    while (node !== null) {
      arr.push(node.value);
      node = node.next;
    }

    console.log(arr);
  }
}

module.exports = {
  LinkedList,
};
