function hearts() {
  const container = document.querySelector(".container");
  const creat = document.createElement("div");
  creat.classList.add("hearts");
  creat.innerHTML = `|`;
  
  creat.style.left = Math.random() * 100 + 'vw';
  creat.style.animationDuration = Math.random() * 2 + 1 + "s"; // < 3s
  container.appendChild(creat);
  setTimeout(() => {
    creat.remove();
  }, 5000)
}
// hearts();
setInterval(hearts, 100);


      window.onclick = function () {
        document.getElementById("vid").muted = false;
      };
