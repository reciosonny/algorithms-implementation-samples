

function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}


var head = new Node(777);

var current = head;

[1,2,3,4,5].forEach(val => {
  current.right = new Node(val)
  current = current.right;
});

console.log('looping current...');

var currentLoop = head;

while (currentLoop) {
  console.log(currentLoop.value);
  currentLoop = currentLoop.right;
}

