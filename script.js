
// CONFIG
const SECRET_ANSWER = "Chai place!";

// ELEMENTS
const loginOverlay = document.getElementById("login-overlay");
const unlockBtn = document.getElementById("unlock-btn");
const errorMsg = document.getElementById("error-msg");
const passwordInput = document.getElementById("password-input");

const hero = document.getElementById("hero");
const timeline = document.getElementById("timeline");
const giftSection = document.getElementById("gift-section");
const musicPlayer = document.getElementById("music-player");

const audio = document.getElementById("bg-music");
const playBtn = document.getElementById("play-pause-btn");
const icon = playBtn.querySelector("i");

const giftBox = document.getElementById("gift-box");

const celebrateBtn = document.getElementById("celebrate-btn");

// PASSWORD CHECK
unlockBtn.addEventListener("click", checkPassword);

function checkPassword() {
    const input = passwordInput.value.toLowerCase().trim();

    if (input === SECRET_ANSWER) {

    // ✅ START MUSIC IMMEDIATELY (NO DELAY)
    if (audio.paused) {
        audio.play().catch(() => {});
        icon.classList.remove('fa-volume-mute');
        icon.classList.add('fa-volume-up');
    }
}


    // Fade out login overlay
    loginOverlay.style.opacity = '0';
    loginOverlay.style.transition = 'opacity 0.8s';

    setTimeout(() => {
        loginOverlay.style.display = 'none';
        revealContent();
    }, 800);
}


// REVEAL CONTENT
function revealContent() {
    hero.classList.remove("hidden");
    timeline.classList.remove("hidden");
    giftSection.classList.remove("hidden");
    musicPlayer.classList.remove("hidden");

    AOS.init({ duration: 1000, once: true });
    AOS.refresh();


    initParticles();
   
}

// MUSIC
playBtn.addEventListener("click", toggleMusic);

function toggleMusic() {
    if (audio.paused) {
        audio.play().catch(() => {});
        icon.classList.remove("fa-volume-mute");
        icon.classList.add("fa-volume-up");
    } else {
        audio.pause();
        icon.classList.remove("fa-volume-up");
        icon.classList.add("fa-volume-mute");
    }
}

// PARTICLES
function initParticles() {
    tsParticles.load("tsparticles", {
        particles: {
            number: { value: 30 },
            shape: {
                type: "image",
                image: {
                    src: "https://cdn-icons-png.flaticon.com/512/833/833472.png"
                }
            },
            size: { value: 15 },
            move: { enable: true, speed: 2, direction: "top" }
        }
    });
}

// Envelope 


const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {
    if (envelope.classList.contains("open")) return;

    envelope.classList.add("open");

    setTimeout(() => {
        letter.classList.add("visible");
        letter.scrollIntoView({ behavior: "smooth", block: "center" });
        confettiExplosion();
    }, 700);
});

// CONFETTI
function confettiExplosion() {
    confetti({
        particleCount: 200,
        spread: 360,
        origin: { y: 0.6 }
    });
}

// SHAKE ANIMATION
function shake(element) {
    element.style.animation = "shake 0.5s";
    setTimeout(() => element.style.animation = "", 500);
}

// Inject shake keyframes
const style = document.createElement("style");
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(style);
