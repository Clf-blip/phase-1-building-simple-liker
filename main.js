const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

window.onload = () => {  // Waits for entire page to load
  const errorModal = document.getElementById("modal");

  if (!errorModal) {
    console.error("Modal element not found in the DOM.");
    return;
  }

  errorModal.classList.add("hidden");

  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          errorModal.classList.remove("hidden");
          errorModal.querySelector("#modal-message").textContent = error;

          setTimeout(() => errorModal.classList.add("hidden"), 3000);
        });
    });
  });
};
