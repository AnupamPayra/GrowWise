// GSAP animation
var tl = gsap.timeline();
tl.to("#full", {
  bottom: "50px",
  duration: 0.3,
});
tl.from("#full i", {
  opacity: 0,
});
tl.pause();

var menu = document.querySelector("#center i");
var cross = document.querySelector("#full i");

menu.addEventListener("click", function () {
  tl.play();
});
cross.addEventListener("click", function () {
  tl.reverse();
});

// Chat logic
function sendMessage() {
  let input = document.getElementById("userInput");
  let message = input.value.trim();
  if (message === "") return;

  let chatBody = document.getElementById("chatBody");

  // user message
  let userMsg = document.createElement("div");
  userMsg.className = "message user-message";
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  // bot reply
  setTimeout(() => {
    let botMsg = document.createElement("div");
    botMsg.className = "message bot-message";
    botMsg.textContent = "🤖 I’m still learning, but I understood: " + message;
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 800);

  input.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Enter key to send message
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
