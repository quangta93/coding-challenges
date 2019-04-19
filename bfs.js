// Given a set of edges
// Check if grah is connected

const connected = (numOfNodes, edges) => {
  const nodes = [0];
  let nodeIndex = 0;

  const visited = new Array(numOfNodes).fill(false);
  visited[0] = true;

  while (nodeIndex < nodes.length) {
    for (let edge of edges) {
      const [from, to] = edge;

      if (from === nodes[nodeIndex] || to === nodes[nodeIndex]) {
        if (!visited[from]) {
          nodes.push(from);
          visited[from] = true;
        }

        if (!visited[to]) {
          nodes.push(to);
          visited[to] = true;
        }
      }
    }

    nodeIndex ++;
  }

  return nodes.length === numOfNodes;
};

const numOfNodes = 4;

const edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 3],
  [2, 3],
];

console.log(connected(numOfNodes, edges));
