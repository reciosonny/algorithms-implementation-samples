var MyCircularQueue = function (k) {
  this.data = new Array(k);
  this.maxSize = k;
  this.head = 0;
  this.tail = -1;
};

MyCircularQueue.prototype.getLogs = function () {
  console.log('=====logs=====');
  console.log('data: ', this.data);
  console.log('max size: ', this.maxSize);
  console.log('head: ', this.head);
  console.log('tail: ', this.tail);
  console.log('==========');
}

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  
  console.log('enqueue');
  if (this.isFull()) {
    console.log('enqueue is already full. '+value+' cannot be inserted');
    return false;
  }

  this.tail = (this.tail+1) % this.maxSize; //just to ensure tail doesn't get beyond the maximum array size

  this.data[this.tail] = value;

  this.getLogs();
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {

  if(this.isEmpty()) return false;

  if (this.head === this.tail) (head = 0), (tail = -1);
  else this.head = (this.head + 1) % this.maxSize; // note: Modulo operator just ensures the value of tail won't exceed the value of maximum size.
  
  console.log('dequeue');
  this.getLogs();

  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;

  return this.data[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;

  return this.data[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.tail === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {

  // note: Modulo operator just ensures the value of tail won't exceed the value of maximum size. Additionally, we add tail+1 so that we can measure ahead if tail has equal value with head if we insert the new value. If it's equals then that means it's already full and we can't insert the new value
  const tailCount = (this.tail+1) % this.maxSize;

  console.log('===is full===');
  console.log('tail count: ', tailCount);
  console.log('head: ', this.head);
  console.log('==========');

  return !this.isEmpty() && tailCount === this.head;
};

const myQueue = new MyCircularQueue(3);

myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.enQueue(3);
myQueue.deQueue();
myQueue.deQueue();
myQueue.enQueue(55);
myQueue.enQueue(77);
myQueue.enQueue(88);