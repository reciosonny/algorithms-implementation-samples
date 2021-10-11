const root = {
  visited: false,
  val: 0,
  adjacent: [
    { val: 1, adjacent: [{ val: 4 }, { val: 7 }, { val: 9 }] },
    { val: 3, adjacent: [{ val: 11, adjacent: [{val:12}, {val: 17}, {val: 22}] }, { val: 13 }, { val: 15 }] },
    { val: 5 },
  ],
};


function search(root) {
  if (!root) return;

  root.visited = true;
  console.log("value: ", root.val);

  if(root.adjacent) {
    root.adjacent.forEach((n) => {
      if (!n.visited) {
        search(n);
      }
    });
  }


}

search(root);

