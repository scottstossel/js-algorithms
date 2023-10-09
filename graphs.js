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
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      v => v !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      v => v !== v1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Zaragoza');
g.addVertex('Palma');
g.addVertex('SF');
g.addVertex('Dallas');
g.addVertex('Houston');
g.addVertex('Miami');
g.addVertex('Bogota');
g.addVertex('Havana');
g.addVertex('Managua');
g.addVertex('Madrid');
g.addEdge('Tokyo', 'SF');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Dallas', 'Miami');
g.addEdge('Miami', 'Bogota');
g.addEdge('Havana', 'Miami');
g.addEdge('Managua', 'Miami');
g.addEdge('Madrid', 'Miami');
g.addEdge('Dallas', 'Houston');
g.addEdge('Zaragoza', 'Palma');

// console.log(g);

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");
