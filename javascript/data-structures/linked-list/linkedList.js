// Construct Single Node
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create/Get/Remove Nodes From Linked List
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node
  insertLast(data) {
    var node = new Node(data);
    var current;

    console.log("head: ", this.head);

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    //  If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    var node = new Node(data);
    var current, previous;

    // Set current to first
    current = this.head;
    var count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  // Get at index
  getAt(index) {
    var current = this.head;
    var count = 0;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }

    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    var current = this.head;
    var previous;
    var count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list data
  printListData() {
    var current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }

  }

  //#region my implementation
  
  getConcatenatedString() {
    var current = this.head;

    let concatDataLinkedList = '';
    while (current) {

      if (current) {
        concatDataLinkedList += current.data;        
      }

      current = current.next;
    }

    return concatDataLinkedList;
  }
  // note by Sonny: same as insertLast method
  insert(data) {
    const node = new Node(data);
    let current;

    if (!this.head) {
      //if the head is empty, then add a node to it
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        //while next node has value, keep looping till you reach the tail
        current = current.next;
      }

      current.next = node;
    }

    this.size += 1;

    return node;
  }

  // note: same as insertAt() function copied from traversey media
  insertNodeAt(index, data) {

    if(!this.head && index > this.size-1) {
      console.log('select an existing index');

      return;
    }

    let count = 0;
    let current = this.head;
    // let current = JSON.parse(JSON.stringify(this.head));
    let prevNode;

    let newNode = new Node(data);

    if (index > 0) {
      while (index > count) {      
        prevNode = current;
        current = current.next;
  
        count +=1;
      }

      newNode.next = current; //assign last looped node into the new node based on index value (see while loop)
      prevNode.next = newNode;  

    } else { //assign head to the new node created
      newNode.next = current;
      this.head = newNode;
    }


    this.size +=1;

    return newNode;
  }

  deleteNodeAt(index) {

    let count = 0;

    let current = this.head;
    let prevNode = undefined;

    if(index === 0) {
      this.head = current.next;
    } else {

      while (index >= count) {
  
        current = current.next;
  
        if (prevNode) { //we check if prevNode has value. If it has, then proceed with getting the next value for it
          prevNode = prevNode.next;
        }
        if (count > 0 && !prevNode) {
          prevNode = this.head;
        }
  
        count+=1;
      }
      prevNode.next = current;

    }

  }

  // tail = last node of linked list since head is the first chain in linked list
  getNodeTail() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    return current;
  }

  getHead() {
    return this.head;
  }

  getNodeAtIndex(index) {
    if (!this.head || this.size === 0) return this.head;

    if (index > 0 && index > this.size - 1) {
      return "node does not exist";
    }

    let count = 0;

    let current = this.head;
    while (current.next && index - 1 > count) {
      current = current.next;
      count += 1;
    }

    return current;
  }

  //#endregion
}

// class DoublyLinkedList {
//   constructor(params) {

//   }
// }

var ll = new LinkedList();

// note: solving the cracking the coding interview problem (2.5)
// ll.insert(6)
// ll.insert(1)
// ll.insert(7)

// ll.printListData();

module.exports = {
  LinkedList: LinkedList
};