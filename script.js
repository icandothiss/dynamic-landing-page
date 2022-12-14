const countdown = document.getElementById("time");
const greeting = document.getElementById("greeting");
const myName = document.getElementById("name");
const myFocus = document.getElementById("focus");
countdown.style.display = "flex";
// Update every second
const intvl = setInterval(() => {
  const now = new Date();

  // Time calculations

  let hours = now.getHours();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();
  var pmAm = hours >= 12 ? "PM" : "AM";

  if (hours >= 12 && hours < 18) {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.innerHTML = "Good Afternoon";
  } else if (hours >= 18 && hours < 24) {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.innerHTML = "Good Evening";
  } else if (hours > 0 && hours < 12) {
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.innerHTML = "Good Morning";
  }
  hours = hours % 12 || 12;
  countdown.innerHTML = `
  <div>${addZero(hours)}<span>:</span></div>
  <div>${addZero(mins)}<span>:</span></div>
  <div>${addZero(seconds)}<span></span></div>
  <div>${pmAm}<span></span></div>
  `;
});

myName.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    myName.textContent = myName.textContent.replace(/(\r\n|\n|\r)/gm, "");

    myName.blur();
  }
});

myName.addEventListener("click", () => {
  if (myName.innerHTML === "[Enter Name]") {
    myName.innerHTML = "";
  }
});

myFocus.addEventListener("click", () => {
  if (myFocus.innerHTML === "[Enter Focus]") {
    myFocus.innerHTML = "";
  }
});

myName.addEventListener("input", function (e) {
  localStorage.setItem("names", JSON.stringify(myName.textContent));
  if (myName.innerHTML === "") {
    myName.innerHTML = "[Enter Name]";
  }
});

myFocus.addEventListener("input", function (e) {
  localStorage.setItem("focuses", JSON.stringify(myFocus.textContent));
  if (myFocus.innerHTML === "") {
    myFocus.innerHTML = "[Enter Focus]";
  }
});

window.addEventListener("load", () => {
  if (JSON.parse(localStorage.getItem("names")) === "") {
    myName.innerHTML = "[Enter Name]";
  } else {
    myName.innerHTML = JSON.parse(localStorage.getItem("names"));
  }

  if (JSON.parse(localStorage.getItem("focuses")) === "") {
    myFocus.innerHTML = "[Enter Focus]";
  } else {
    myFocus.innerHTML = JSON.parse(localStorage.getItem("focuses"));
  }
});

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
