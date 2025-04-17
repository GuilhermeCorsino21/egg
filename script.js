function revealMessage() {
  const container = document.querySelector(".egg-container");
  container.classList.add("clicked");

  // Estoura confete 🎉
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
}
const bunny = document.getElementById("bunny");
bunny.style.display = "block";
