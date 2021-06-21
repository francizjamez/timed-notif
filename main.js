const buttons = window.document.querySelectorAll("button");
const body = document.querySelector("div");

buttons.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    createTimedNotif(e.target.innerText);
  })
);

function createTimedNotif(message) {
  const container = document.createElement("div");
  container.className =
    "bg-white absolute top-0 p-4 rounded bg-gray-900 text-white mt-2";
  container.innerText = message;
  body.appendChild(container);

  let timer = setTimeout(() => container.remove(), 2000);
  container.addEventListener("mouseover", (e) => {
    clearTimeout(timer);
  });

  container.addEventListener("mouseout", (e) => {
    timer = setTimeout(() => container.remove(), 2000);
  });
}
