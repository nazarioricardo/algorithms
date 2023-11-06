const GraphA = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const GraphB = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const hasPath = (graph, source, destination) => {
  // let didFind = false;
  if (source === destination) {
    return true;
  }

  const neighbors = graph[source];
  for (const neighbor of neighbors) {
    if (hasPath(graph, neighbor, destination) === true) {
      return true;
    }
  }

  return false;
};

console.log(hasPath(GraphB, "f", "k")); // true
