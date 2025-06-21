// script.js - CashWin91 Game Interaction

document.addEventListener("DOMContentLoaded", () => { const enterButton = document.querySelector(".button");

enterButton.addEventListener("click", () => { // এখানে তুমি চাইলে গেম lobby বা অন্য পেইজে পাঠাতে পারো // window.location.href = 'game-lobby.html';

// আপাতত পপআপ বার্তা দেখানো হচ্ছে
const message = document.createElement("div");
message.innerText = "🌀 Game Lobby Coming Soon! Stay Tuned ✨";
message.style.position = "fixed";
message.style.top = "50%";
message.style.left = "50%";
message.style.transform = "translate(-50%, -50%)";
message.style.backgroundColor = "#111";
message.style.padding = "30px 40px";
message.style.borderRadius = "15px";
message.style.color = "gold";
message.style.fontSize = "20px";
message.style.boxShadow = "0 6px 20px rgba(0,0,0,0.5)";
message.style.zIndex = "9999";

document.body.appendChild(message);

setTimeout(() => {
  message.remove();
}, 2500);

}); });

