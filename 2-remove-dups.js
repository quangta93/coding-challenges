// Remove duplicates in unsorted linked list
const { LinkedList } = require('./single-linked-list');

const _removeDups = (head) => {
  const value = head.value;

  while ((head.next !== null) && (head.next.value === value)) {
    head.next = head.next.next;
  }

  let node = head.next;

  while ((node !== null) && (node.next !== null)) {
    if (node.next.value === value) {
      // remove node
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
};

const removeDups = (list) => {
  let node = list.head;

  if (node === null || node.next === null) {
    return list;
  }

  while (node !== null) {
    _removeDups(node);
    node = node.next;
  }

  return list;

  // Time O(N^2)
};

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(1);
linkedList.append(1);
linkedList.append(2);

removeDups(linkedList);
linkedList.print();
