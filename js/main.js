// Numbers Of Users
let counterContainer = document.getElementById("counter");
let number = "400120350";
let arr = [];

if (number.length <= 3) arr = [number];
else
  for (let i = 0; i < number.length; i += 3) arr.push(number.slice(i, i + 3));

for (let i = 0; i < arr.length; i++) {
  if (arr.length == 1)
    counterContainer.innerHTML = `<div class="p-0.5 rounded-xl text-shadow">${arr[i]}</div>`;
  else {
    if (i == 0)
      counterContainer.innerHTML += `<div class="border-r-[2px] border-r-main p-0.5 rounded-xl text-shadow">${arr[i]}</div>`;
    else if (i == arr.length - 1)
      counterContainer.innerHTML += `<div class="border-l-[2px] border-l-main p-0.5 rounded-xl text-shadow">${arr[i]}</div>`;
    else
      counterContainer.innerHTML += `<div class="border-x-[2px] border-x-main p-0.5 rounded-xl text-shadow">${arr[i]}</div>`;
  }
}

let startBtns = document.querySelectorAll(".startBtn");
let startIcons = document.querySelectorAll(".startIcon");

for (let i = 0; i < startBtns.length; i++) {
  startBtns[i].addEventListener("click", () =>
    startIcons.forEach((e) => e.classList.toggle("fa-stop"))
  );
}
