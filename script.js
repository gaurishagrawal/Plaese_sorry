// Text content
const texts = {
    text1: "Aakansha... I don’t know how to say this perfectly, but I am really sorry for everything.",
    
    text2: "I know I made a mistake, and I really regret it. I didn’t mean to hurt you, and I’m truly sorry for that.",
    
    text3: "You are very special to me, Aakansha. Your happiness means everything to me.",
    
    text4: "I just hope we can talk again and make things better."
};

// Typing effect
function typeEffect(element, text) {
    let i = 0;

    let cursor = document.createElement("span");
    cursor.className = "cursor";
    element.appendChild(cursor);

    function typing() {
        if (i < text.length) {

            if (text.substring(i, i+8) === "Aakansha") {
                cursor.insertAdjacentHTML("beforebegin", "<span class='glow'>Aakansha</span>");
                i += 8;
            } else {
                cursor.insertAdjacentText("beforebegin", text[i]);
                i++;
            }

            let speed = (text[i] === "." || text[i] === ",") ? 200 : 35;

            setTimeout(typing, speed);
        }
    }

    typing();
}

// Run typing
window.onload = () => {
    for (let id in texts) {
        let el = document.getElementById(id);
        if (el) typeEffect(el, texts[id]);
    }

    createStars();
};

// Music
let played = false;
function playMusic() {
    if (!played) {
        let music = document.getElementById("bgMusic");
        if (music) music.play();
        played = true;
    }
}

// Stars
function createStars() {
    let starContainer = document.querySelector(".stars");
    if (!starContainer) return;

    for (let i = 0; i < 80; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        starContainer.appendChild(star);
    }
}

// Hearts
function createHeart() {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);

// Shooting stars
function createShootingStar() {
    let star = document.createElement("div");
    star.className = "shooting-star";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight / 2 + "px";

    document.body.appendChild(star);

    setTimeout(() => star.remove(), 2000);
}
setInterval(() => {
    if (Math.random() < 0.3) createShootingStar();
}, 2000);

// Popup
function showPopup() {
    let popup = document.getElementById("popup");
    if (popup) popup.style.visibility = "visible";
}

function closePopup() {
    let popup = document.getElementById("popup");
    if (popup) popup.style.visibility = "hidden";
}