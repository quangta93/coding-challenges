
// Bellman-Ford algo to find shortest path
const numOfNodes = 10;
const adjacents = [];

// Shortest path faster algo
const spfa = () => {
  const q = [0];
  const dist = new Array(numOfNodes).fill(Math.MAX_INT);

  dist[0] = 0;

  while (q.length) {
    const s = q.shift();

    for (let u of adjacents[s]) {
      const canBeShortened = dist[u] > dist[s] + weights(s, u);

      if (canBeShortened) {
        dist[u] = dist[s] + weights(s, u);
        q.push(u);
      }
    }
  }
}
