function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function insertNodeValue(current, val) {
      
  const treeVal = current.value;

  if (treeVal > val) {
    // basically if there's a node in left subtree then throw the function again so we can move to the deeper parts of node till we find an empty node after comparing the current value to deeper nodes
    if (current.left) insertNodeValue(current.left, val);
    else current.left = new Node(val);
  } else {
    // basically if there's a node in right subtree then throw the function again so we can move to the deeper parts of node till we find an empty node after comparing the current value to deeper nodes
    if (current.right) insertNodeValue(current.right, val);
    else current.right = new Node(val);
  }

  return true;
}


const arrToInsert = [7,20,5,15,10,4];

let head, current;
arrToInsert.forEach(val => {
  if (!head) {
    head = new Node(val);
    current = head;

    return;
  }

  insertNodeValue(head, val);
});

function displayNodes(current) {
  
  console.log(current);

  if (current.left) {
    displayNodes(current.left);
  }
  if (current.right) {
    displayNodes(current.right);
  }
}

// displayNodes(head);

function inOrderTraversal(node) {
  
  if(!node) return;

  inOrderTraversal(node.left);
  console.log('====================');
  // console.log('current node: ', node);
  console.log('current node value: ', node.value);
  console.log('====================');
  inOrderTraversal(node.right); 
}

function preOrderTraversal(node) {
  if(!node) return;

  console.log('====================');
  console.log('current node value: ', node.value);
  console.log('====================');

  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

function postOrderTraversal(node) {
  if(!node) return;

  postOrderTraversal(node.left);
  postOrderTraversal(node.right);

  console.log('====================');
  console.log('current node value: ', node.value);
  console.log('====================');
}

// inOrderTraversal(head);
// preOrderTraversal(head);
postOrderTraversal(head);