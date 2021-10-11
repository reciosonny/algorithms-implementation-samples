function bfs(edges, start) {
  let graph = {};

  // Build adjacency list (undirected)
  for (const [v, e] of edges) {
    if (graph[v]) {
      graph[v].push(e);
    } else {
      graph[v] = [e];
    }

    if (graph[e]) {
      graph[e].push(v);
    } else {
      graph[e] = [v];
    }
  }

  console.log("graph: ", graph);

  let queue = [start]; //set first value as the first queue

  const visited = new Set();

  visited.add(start);

  while (queue.length > 0) {
    const currentQueuedNode = queue.shift();
    const edges = graph[currentQueuedNode];

    console.log("current queued node: ", currentQueuedNode);

    console.log("=================================");
    console.log("ADJACENT NODES:");
    if (edges && edges.length > 0) {
      edges.forEach((e) => {
        console.log(e);
        if (!visited.has(e)) {
          //ensuring we only queue the value once
          queue.push(e);
          visited.add(e);
        }
      });
    }
    console.log("=================================");
  }

  
}

bfs(
  [
    [3, 0],
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 3],
    [2, 4],
  ],
  0
);
