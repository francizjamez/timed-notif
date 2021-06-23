const defaultNotifBtn = document.getElementById("default");
const dangerNotifBtn = document.getElementById("danger");
const body = document.querySelector("div");

let notifying = false;

defaultNotifBtn.addEventListener("click", (e) => {
  if (!notifying) {
    createTimedNotif(e.target.innerText, "default");
  }
});

dangerNotifBtn.addEventListener("click", (e) => {
  if (!notifying) {
    createTimedNotif(e.target.innerText, "danger");
  }
});

function createTimedNotif(message, color) {
  notifying = true;
  const container = document.createElement("div");
  container.className = `w-64 bg-white absolute top-0 p-4 rounded text-white mt-2 cursor-default text-center ${
    color === "danger" ? `bg-red-600` : `bg-gray-900`
  }`;
  container.innerText = message;
  body.appendChild(container);

  let timer = setTimeout(() => {
    notifying = false;
    container.remove();
  }, 2000);
  container.addEventListener("mouseover", (e) => {
    clearTimeout(timer);
  });

  container.addEventListener("mouseout", (e) => {
    timer = setTimeout(() => container.remove(), 2000);
  });
}
