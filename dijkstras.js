//Dijstra's Algorithm: finds shortest path between two vertices on a graph
//GPS, network routing, biology, airline tickets

//pseudocode: each time we look to visit a new node, we pick the node with the smallest known distance to visit first
//once we've moved, we look at each of its neighbors
//for each neighboring node, we calculate the distance by summing the total edges that lead to 
//the node we're checking from the starting node
//if the new total distance to a node is less than the previous total, we store the new distance

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
}

var graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);

console.log(graph.adjacencyList);

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  }
  dequeue() {
    return this.values.shift()
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

var q = new PriorityQueue();

q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("D", 2);
q.enqueue("Q", 20);

console.log(q.values);