/* ----- Part 2: Functions, Scope, Parameters, Return Values ----- */

// Global variable
let animationCount = 0;

// Function with parameter & return value
function doubleValue(num) {
  return num * 2;
}

// Function controlling animation
function toggleSpin(element, shouldSpin) {
  if (shouldSpin) {
    element.classList.add("spin");
  } else {
    element.classList.remove("spin");
  }
}

// Function demonstrating local vs global scope
function increaseAnimationCount() {
  let localMessage = "Animation triggered!";
  animationCount++; // modifies global
  console.log(localMessage, "Total:", animationCount);
}

// Reusable function to toggle modal visibility
function toggleModal(show) {
  const modal = document.getElementById("modal");
  if (show) {
    modal.classList.remove("hidden");
    modal.classList.add("show");
  } else {
    modal.classList.remove("show");
    setTimeout(() => modal.classList.add("hidden"), 500); // waits for fade-out
  }
}

/* ----- Part 3: Combining CSS + JS ----- */
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  const box = document.querySelector(".box");
  toggleSpin(box, !box.classList.contains("spin")); // toggle spin
  increaseAnimationCount();
});

document.getElementById("toggleModalBtn").addEventListener("click", () => {
  toggleModal(true);
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  toggleModal(false);
});

// Example of using return value
console.log("Double of 5:", doubleValue(5));
