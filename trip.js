const cities = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"];

const tickets = {
  Paris: "Skopje",
  Zurich: "Amsterdam",
  Prague: "Zurich",
  Barcelona: "Berlin",
  Kiev: "Prague",
  Skopje: "Paris",
  Amsterdam: "Barcelona",
  Berlin: "Kiev",
  Berlin: "Amsterdam",
};

const visited = ["Kiev"];
let ans = "";

while (visited.length < cities.length) {
  const present = visited[visited.length - 1];
  const dest = tickets[present];

  if (visited.includes(dest)) {
    // If the destination has already been visited, break to avoid an infinite loop.
    break;
  }

  visited.push(dest);
}

ans = visited.join(" -> ");

console.log(ans);
