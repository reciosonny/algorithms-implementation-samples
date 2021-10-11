const adj = [["1", "2", "3", "4", "5"], ["0"], ["0", "4"], ["0"], ["2"]];
const vertices = 3;

//Function to return a list containing the DFS traversal of the graph.
function dfsOfGraph(V, adj) {
  //using a boolean list to mark all the vertices as not visited.
  let vis = new Array(V);
  vis.fill(false);
  let res = new Array();

  console.log("adj: ", adj);
  console.log("V: ", V);
  // console.log('visited: ', vis);

  for (let i = 0; i < V; i++) {
    //if any vertex isn't visited then calling the function.
    if (vis[i] == false) {
      DFSUtil(i, adj, V, vis, res); //note: first value in graph array would always be 0 because i in for-loop is passed
    }
  }

  console.log('list to return: ', res);
  //returning the output list.
  return res;
}

function DFSUtil(i, adj, V, vis, res) {
  //marking vertex as visited and adding it to output list.
  if (vis[i]) return;
  vis[i] = true;

  res.push(i);

  console.log("current value to push: ", i);
  // console.log('visited: ', vis);

  //iterating over connected components of the vertex and if any
  //of them is not visited then calling the function recursively.
  const currAdjNodes = adj[i];
  console.log('current i value: ', i);
  console.log('current adj nodes: ', currAdjNodes);

  if (currAdjNodes) {
    for (let j = 0; j < currAdjNodes.length; j++) {
      
      if (!vis[adj[i][j]]) DFSUtil(adj[i][j], adj, V, vis, res);
    }    
  }
  

}


dfsOfGraph(vertices, adj);