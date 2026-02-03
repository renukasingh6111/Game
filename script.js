const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.querySelector(".card");

// Function to move the "No" button randomly within the card
function randomMove() {
    // Calculate bounds so button doesn't go outside the white card
    const maxX = card.clientWidth - noBtn.offsetWidth;
    const maxY = card.clientHeight - noBtn.offsetHeight;

    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// Move the button every 700ms
setInterval(randomMove, 700);

// Logic for when they finally click "Yes"
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="success-container">
            <h1>Yayyy! I knew you'd say yes! ❤️</h1>
            <img 
                src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif" 
                alt="Happy Dance" 
                style="width:250px; margin-top:20px; border-radius:20px; box-shadow: 0 5px 15px rgba(0,0,0,0.3);"
            >
        </div>
    `;
});