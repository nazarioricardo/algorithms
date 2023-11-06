const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const generateGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    if (!graph[edge[0]]) {
      graph[edge[0]] = [edge[1]];
    } else {
      graph[edge[0]].push(edge[1]);
    }

    if (!graph[edge[1]]) {
      graph[edge[1]] = [edge[0]];
    } else {
      graph[edge[1]].push(edge[0]);
    }
  }

  return graph;
};

const hasPath = (graph, src, dst, visited) => {
  visited.push(src);
  if (src === dst) {
    return true;
  }

  const neighbors = graph[src];
  for (const neighbor of neighbors) {
    if (!visited.includes(neighbor)) {
      if (hasPath(graph, neighbor, dst, visited)) {
        return true;
      }
    }
  }

  return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = generateGraph(edges);
  return hasPath(graph, nodeA, nodeB, []);
};

console.log(
  undirectedPath(edges, "j", "m"), // -> true
  undirectedPath(edges, "m", "j"), // -> true
  undirectedPath(edges, "l", "j"), // -> true
  undirectedPath(edges, "k", "o"), // -> false
  undirectedPath(edges, "i", "o") // -> false
);

const newEdges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

console.log(undirectedPath(newEdges, "a", "b")); // -> true
