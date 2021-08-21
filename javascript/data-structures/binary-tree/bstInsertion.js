
function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
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

function insertNodeValue(current, val) {
      
  const treeVal = current.value;

  if (treeVal > val) {
    // basically if there's a node in left subtree then throw the function again so we can move to the deeper parts of node till we found an empty node after comparing the current value to deeper nodes
    if (current.left) insertNodeValue(current.left, val);
    else current.left = new Node(val);


  } else {
    // basically if there's a node in right subtree then throw the function again so we can move to the deeper parts of node till we found an empty node after comparing the current value to deeper nodes
    if (current.right) insertNodeValue(current.right, val);
    else current.right = new Node(val);
  }

  return true;
}

function removeEmptyNodes(current) {
        
  if(!current.left) delete current.left;
  if(!current.right) delete current.right;
  
  //if still has subtrees, search them out for possible empty nodes.
  if(current.left) removeEmptyNodes(current.left);
  if(current.right) removeEmptyNodes(current.right);
}

removeEmptyNodes(head);

function displayNodes(current) {
  
  console.log(current);

  if (current.left) {
    displayNodes(current.left);
  }
  if (current.right) {
    displayNodes(current.right);
  }
}


displayNodes(head);