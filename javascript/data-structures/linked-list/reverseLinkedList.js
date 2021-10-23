function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr != null) {
    let nextTemp = curr.next; //before we "override" the value of "curr.next", we store its linkedList node so we can traverse the whole linkedList for reversal without changing the overall flow of the given linkedList
    curr.next = prev; //assign curr.next using prev value

    
    console.log('current prev: ', curr.next);

    prev = curr; //assign prev node using curr value
    curr = nextTemp; //assign curr 
  }

  return prev;
};

// recursive version of reversing linked list
const reverseListRecursive = (head) => {
  if (!head || !head.next) return head;

  const p = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;

  return p;
}

// recursive version of reversing linked list, using a bit of technique from iterative solution
const reverseListRecursiveV2 = (curr, prev) => {
  
  console.log('prev val: ', prev);
  if(curr) {
    const nextTemp = curr.next;
    curr.next = prev;

    prev = curr;

    return reverseListRecursive(nextTemp, prev);
  }

  return prev;
}

//#region Constructing linked list
let head = new ListNode(1);
let curr = head;

[2,3,4,5].forEach(val => {
  curr.next = new ListNode(val);
  curr = curr.next;
});

curr = head;
//#endregion

while(curr) {

  console.log(curr.val); //display it now.
  curr = curr.next;
}

// curr = reverseList(head);
curr = reverseListRecursive(head, null);

console.log('reversing linked list:');
while(curr) {

  console.log(curr.val); //display it now.

  curr = curr.next;
}
