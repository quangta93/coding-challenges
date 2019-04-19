// Given list of people with (birth, death)/
// Find the year with max number of people alive


const highestPopulation = (people) => {
  const diff = {};

  let minBirth = 3000;
  let maxDeath = 0;

  for (let years of people) {
    const [b, d] = years;

    if (minBirth > b) minBirth = b;
    if (maxDeath < d) maxDeath = d;

    if (!diff[b]) {
      diff[b] = 1;
    } else {
      diff[b] += 1;
    }

    if (!diff[d]) {
      diff[d] = -1;
    } else {
      diff[d] -= 1;
    }
  }

  let alive = 0;
  let highest = 0;
  let highestYear = -1;

  for (let year = minBirth; year <= maxDeath; year++) {
    alive += (diff[year] || 0);

    if (alive > highest) {
      highest = alive;
      highestYear = year;
    }
  }

  return [highestYear, highest];
}


const people = [
  [1960, 1990],
  [1920, 1939],
  [1911, 1944],
  [1920, 1955],
  [1938, 1939],
];

console.log(highestPopulation(people));
