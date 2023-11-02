const Graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// const depthFirstPrint = (graph, source) => {
//   const stack = [source];

//   while (stack.length > 0) {
//     const key = stack.pop();
//     console.log(key);

//     const children = graph[key];
//     for (const child of children) {
//       stack.push(child);
//     }
//   }
// };

// recursive
const depthFirstPrint = (graph, source) => {
  console.log(source);
  const neighbors = graph[source];
  for (const neighbor of neighbors) {
    depthFirstPrint(graph, neighbor);
  }
};

depthFirstPrint(Graph, "a");
