function NodeLink(data) {
  this.data = data;
  this.next = {};
}

function initializeLinkedNodes(arr) {
  
  var nodeHead = null;
  var current;
  
  arr.forEach(val => {
  
    if (!nodeHead) { //initializing node head here...
      nodeHead = new NodeLink(val);
      current = nodeHead;
    } else {
      current.next = new NodeLink(val);
      current = current.next;
    }
  });

  return nodeHead;
}


var ll1 = initializeLinkedNodes([7,1,6]);
var ll2 = initializeLinkedNodes([5,9,2]);

// Solution 1
// note: Just remember how we add numbers in addition property. Implement them here in linked list
function addLists(l1, l2, carry) {
  
  if (!l1 && !l2 && carry === 0) {
    return null;
  }

  var result = new NodeLink();
  var value = carry;
  if (l1) {
    value += l1.data;
  }
  if (l2) {
    value += l2.data;
  }

  result.data = value % 10;

  if (l1 || l2) {
    var more = addLists(!l1 ? null : l1.next, !l2 ? null : l2.next, value >= 10 ? 1 : 0);

    result.next = more;
  }

  return result;
}

var result = addLists(ll1, ll2, 0);

var current = result;

while (current.next) {
  console.log(current.data);
  current = current.next;
}

