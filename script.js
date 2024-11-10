// Array of love messages
const messages = [
  "My love for you grows everyday Maria!",
  "You’re my everything, Maria!",
  "Being with you is my favorite thing to do.",
  "You make my world brighter!",
  "I love you to the moon and back pookie.",
  "I’m so lucky to be able to call you mine forever and ever",
  "Forever and always, Maria.",
  "My love for you has no limits.",
  "You complete me, Maria.",
  "YOURE SO PERFECT MAZZYBOMB AAAAAA!."
];
// Function to create a heart and message on click
document.body.addEventListener("click", (event) => {
  createHeartWithMessage(event.clientX, event.clientY);
});

// Function to create an animated heart and tooltip message
function createHeartWithMessage(x, y) {
  // Create heart
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${x - 10}px`;
  heart.style.top = `${y - 10}px`;
  document.body.appendChild(heart);

  // Create tooltip message
  const message = document.createElement("div");
  message.classList.add("tooltip");
  message.style.left = `${x + 20}px`;  // Position it to the right of the heart
  message.style.top = `${y - 10}px`;
  message.textContent = messages[Math.floor(Math.random() * messages.length)];
  document.body.appendChild(message);

  // Remove the heart and message after animation
  setTimeout(() => {
    heart.remove();
    message.remove();
  }, 3000);
}

