let details = [
  {
    name: "Michal",
    words:
      "Working with Waapsol was a refreshing experience. They not only delivered robust software but also guided us with valuable insights to scale effectively.",
  },
  {
    name: "Emily",
    words:
      "Waapsol transformed our vision into reality with a seamless digital platform. Their commitment to quality and timelines is truly impressive.",
  },
  {
    name: "Ana Johnson",
    words:
      "The mobile app developed by Waapsol has received overwhelming feedback from our customers. Their attention to detail and user experience design stood out.",
  },
  {
    name: "Jim Robinson",
    words:
      "Waapsol's cloud and DevOps expertise helped us cut infrastructure costs by 35% while improving performance. A reliable partner for digital transformation.",
  },
];
let a = 0;
let names = document.querySelector("#names");
names.innerText = details[0].name;
let textDiv = document.querySelector("#italic-text");
textDiv.innerText = details[0].words;
let increment = document.querySelector("#inc").addEventListener("click", () => {
  if (a >= 0 && a < details.length) {
    a = a + 1;
    names.innerText = details[a].name;
    textDiv.innerText = details[a].words;
  }
});

let decrement = document.querySelector("#decr").addEventListener("click", () => {
  if (a <=details.length && a>0) {
    a = a - 1;
    names.innerText = details[a].name;
    textDiv.innerText = details[a].words;
  }
});