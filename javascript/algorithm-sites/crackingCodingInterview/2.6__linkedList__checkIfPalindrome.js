function Node(data) {
  this.data = data;
  this.next = {};
}

function isPalindrome(head) {
  const reversed = reverseAndClone(head);

  var current = reversed;

  while (current) {
    current = current.next;
  }

  return isEqual(head, reversed);
}

function reverseAndClone(node) {
  let head = null;

  while (node && node.data !== undefined) {
    let n = new Node(node.data);
    n.next = head;
    head = n;
    node = node.next;
  }

  
  return head;
}

function isEqual(one, two) {
  while (one && two) {
    console.log(two.data)
    if (one.data !== two.data) {
      return false;
    }
    one = one.next;
    two = two.next;
  }

  return true;
}


let l1 = [5,4,3,4,5].reduce((init, curr) => {

  if (!init) {
    init = { head: new Node(curr) };
    init.current = init.head;
  } else {
    init.current.next = new Node(curr);
    init.current = init.current.next;
  }

  return init;
}, null).head;



console.log(isPalindrome(l1));