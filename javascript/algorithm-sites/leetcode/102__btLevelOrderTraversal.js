var levelOrder = function(root) {
    
  let arr = [];
  let queue = [];
  let count = 0;
  
  //#region BFS algorithm
  if(root) {
      queue.push({ node: root, lvl: 0 });        
  }
  
  
  while (queue.length > 0) {
      const currentNode = queue.shift();
      
      if(!arr[currentNode.lvl]) arr[currentNode.lvl] = [];
      
      arr[currentNode.lvl].push(currentNode.node.val);
      
      if(currentNode.node.left) queue.push({ node: currentNode.node.left, lvl: currentNode.lvl+1 });
      if(currentNode.node.right) queue.push({ node: currentNode.node.right, lvl: currentNode.lvl+1 });
  }
  //#endregion

  //#region Soon: DFS algorithm approach

  //#endregion
  
  return arr;  
  
};