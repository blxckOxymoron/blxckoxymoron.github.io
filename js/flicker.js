const flickering = document.querySelectorAll("*[flicker]");
console.log(flickering)
for (const el of flickering) {
  setInterval(() => {
    el.innerHTML = el.textContent.split("").map(char => Math.random() <
      Number.parseFloat(el.getAttribute("flicker")) ? `<span class="flicker-code">${char}</span>` : char).join("");
    // setTimeout(() => el.innerHTML = el.textContent, Math.random * 400 + 400)
  }, 300)
}