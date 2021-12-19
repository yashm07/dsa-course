class Graph {
  constructor() {
    this.numberOfNodes = 0;
    // using object
    this.adjacentList = {};
  }

  addVertex(node) {
    // simply create key, ta-da
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    // push to array for both nodes
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    // loop through object
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      // loop through array 
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "->" + connections);
    }
  }
}