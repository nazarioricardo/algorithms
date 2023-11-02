const Graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const breadthFirstPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    const key = queue.shift();
    console.log(key);
    const neighbors = graph[key];

    for (const neighbor of neighbors) {
      queue.push(neighbor);
    }
  }
};

breadthFirstPrint(Graph, "a");
