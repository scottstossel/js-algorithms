//data structure that consists of a finite (and possibly mutable) set of vertices or nodes or points,
//together with a set of unordered pairs of these vertices for an undirected graph
//or set of ordered pairs for a directed graph
//collection of nodes (vertices) and connections (edges)
//uses: social networks, location/mapping, routing, visual hierarchy
//also watches this video... also bought with.. etc.
//types: undirected (no direction/polarity to connections, {FaceBook}), 
//directed (has polarity/direction, only one direction you can take {Instagram})
//weighted: when you assign value to the edges (maps)
//unweighted: no value assigned to edges

//adjacency matrix: takes up more space (in sparse graphs), slower to iterate over all edges, faster to lookup specific edge
//adjacency list: connections stored as a hash table;
//can take up less space (in sparse graphs), faster to iterate over all edges, can be slower to look up specific edge

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Zaragoza');
g.addVertex('SF');
g.addVertex('Dallas');
g.addVertex('Houston');
g.addVertex('Miami');
g.addEdge('Tokyo', 'SF');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Miami');

console.log(g);