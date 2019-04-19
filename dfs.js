
const numOfNodes = 3;
const adjacents = [];
const visited = new Array(numOfNodes).fill(false);

const dfs = (node) => {
  if (visited[node]) return;

  visited[node] = true;

  for (let _node of adjacents[node]) {
    dfs(_node);
  }
};

const bfs = () => {
  const q = [];

  visited[0] = true;
  distance[0] = 0;
  q.push(0);

  while (q.length) {
    const s = q.shift();

    for (let u of adjacents[s]) {
      if (!visited[u]) {
        q.push(u);
        visited[u] = true;
        distance[u] = distance[s] + 1;
      }
    }
  }
}
