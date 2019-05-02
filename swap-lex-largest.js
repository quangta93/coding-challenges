// Given a string str and array of pairs that indicates which indices in the string can be swapped, return the lexicographically largest string that results from doing the allowed swaps. You can swap indices any number of times.


// Input "abdc"
// Output "dbca"

// Create a collection connected groups - O(n+p)
// Elements in each group can swap
// Sort elements in each group - O(nlogn)
// Assemble elements from group based on their position => largest

const buildLookup = (pairs) => {
  // Create hashmap of pairs for better lookup time.
  const lookup = {};

  for (let pair of pairs) {
    const [u, v] = pair;

    if (!lookup[u-1]) {
      lookup[u-1] = [];
    }

    lookup[u-1].push(v-1);

    if (!lookup[v-1]) {
      lookup[v-1] = [];
    }

    lookup[v-1].push(u-1);
  }

  return lookup;
}

const groupify = (str, pairs) => {
  const lookup = buildLookup(pairs);
  const groupNum = new Array(str.length).fill(null);
  const groups = [];

  // Visit all connected elements of index, assign them same groupNum as "index".
  const visit = (index) => {
    let top = 0;
    const q = [index];
    const group = [str[index]];

    while (top < q.length) {
      if (lookup[q[top]]) {
        for (let adj of lookup[q[top]]) {
          if (groupNum[adj] === null) {
            groupNum[adj] = groupNum[index];
            q.push(adj);
            group.push(str[adj]);
          }
        }
      }

      top += 1;
    }

    return group;
  }

  let groupCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (groupNum[i] === null) {
      groupNum[i] = groupCount;
      groups[groupCount] = visit(i);

      groupCount += 1;
    }
  }

  return [groupNum, groups];
};

const swapLexOrder = (str, pairs) => {
  const [groupNum, groups] = groupify(str, pairs); // [0 1 0 0]

  // sort each group by ascending order
  for (let group of groups) {
    group.sort();
  }

  let res = '';

  for (let i = 0; i < str.length; i++) {
    res += groups[groupNum[i]].pop();
  }

  return res;
};

console.assert(swapLexOrder('abdc', [[1, 4], [3, 4]]) === 'dbca', 'wrong answer');