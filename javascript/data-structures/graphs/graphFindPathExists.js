


// Used this solution: https://leetcode.com/problems/find-if-path-exists-in-graph/discuss/1414967/JS-DFS-solution-O(E)-time-and-O(V%2BE)-space
var validPath = function(n, edges, start, end) {
    // Create a hashmap to be used as our adjacency list
    // const graph = new Map();
    const graph = {};
    
    // Create a set to store our visited nodes
    const visited = new Set();
    
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
            graph[e] = [v]
        }
    }

    console.log('built graph: ', graph);

    // Define a recursive DFS helper
    function dfs(v) {
        // Add to visited set
        visited.add(v);
        
        if(visited.has(end)) {
            return;
        }
        
        // Get adjacent vertices
        const edges = graph[v]; //graph.get(v);
        
        // For all adjacent vertices, run DFS
        if (edges && edges.length > 0) {
            for (const e of edges) {
                //needs to add this logic in order to prevent redundancies
                if (!visited.has(e)) {
                    // console.log('recursion node ', e)
                    dfs(e);
                }
            }
        }
        
        // return false; //returns false of no end in visited node
    }

    function bfs(node) {
        let queue = [node]; //set first value as the first queue

        visited.add(node);

        while (queue.length > 0) {
            // this is to prevent further visit to deeper nodes once we found the end node value
            if(visited.has(end)) return;

            const currentQueueVal = queue.shift();
            const edges = graph[currentQueueVal];
            
            // console.log('current queue value: ', currentQueueVal);
            if (edges && edges.length > 0) {
                
                edges.forEach(e => {
                    // console.log('edge val: ', e);
                    if(!visited.has(e)) {
                        queue.push(e);
                        visited.add(e);
                    }
                });

            }
        }
    }
        
    // DFS from starting input node
    // dfs(start);
    bfs(start);
        
    // Return true/false if our visited set has our end node
    return visited.has(end);
};

validPath(3, [[3,0], [0,1],[1,2],[2,0],[2,3],[2,4]], 0, 4);