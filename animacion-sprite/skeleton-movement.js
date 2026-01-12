const skeleton = document.getElementById("skeleton");

let xAxisPosition = 100;
const speed = 4;
let direction = 0; // -1 izquierda, 1 derecha, 0 quieto

window.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
        direction = 1;
        skeleton.classList.remove("left");
        skeleton.style.animationPlayState = "running";
    }

    if (e.key === "ArrowLeft") {
        direction = -1;
        skeleton.classList.add("left");
        skeleton.style.animationPlayState = "running";
    }
});

window.addEventListener("keyup", e => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        direction = 0;
        skeleton.style.animationPlayState = "paused";
    }
});

function loop() {
    if (direction !== 0) {
        xAxisPosition += speed * direction;
        skeleton.style.left = xAxisPosition + "px";
    }
    requestAnimationFrame(loop);
}

loop();


