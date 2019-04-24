// List of projects & list of dependencies
// Return build order
// Return -1 if cannot build.

function buildOrder(projects = [], dependencies = []) {
  // Build all nodes that don't depend on any node
  // Remove dependency connections from those nodes
  // Repeat

  let dependsOn = {};
  const dependenciesOf = {};

  for (let edge of dependencies) {
    const [u, v] = edge;

    if (!dependsOn[u]) dependsOn[u] = 0;
    if (!dependenciesOf[v]) dependenciesOf[v] = [];

    dependsOn[u] += 1; // u depends on x nodes
    dependenciesOf[v].push(u);
  }

  const buildOrders = [];

  while (buildOrders.length < projects.length) {
    let canBuild = false;

    for (let p of projects) {
      if (!dependsOn[p] && (dependsOn[p] !== null)) { // null means processed
        canBuild = true;
        buildOrders.push(p);

        dependsOn[p] = null;
        for (let dep of (dependenciesOf[p] || [])) dependsOn[dep] -= 1;
      }
    }

    if (!canBuild) throw new Error('Cannot build');
  }

  return buildOrders;
};

const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [
  ['d', 'a'],
  ['b', 'f'],
  ['d', 'b'],
  ['a', 'f'],
  ['c', 'd'],
];

console.log(
  buildOrder(projects, dependencies)
);