const skeleton = document.getElementById("skeleton");

let xAxisPosition = 0;
const speed = 2;
let direction = 0; // -1 izquierda, 1 derecha, 0 quieto

function getMaxX() {
    return window.innerWidth - skeleton.offsetWidth;
}


window.addEventListener('resize', () => {
    xAxisPosition = Math.min(xAxisPosition, getMaxX());
    skeleton.style.left = xAxisPosition + "px";
});


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
        const maxX = getMaxX();

        if (xAxisPosition > maxX) {
            xAxisPosition = maxX;
        }
        if (xAxisPosition < 0) {
            xAxisPosition = 0;
        }
        skeleton.style.left = xAxisPosition + "px";
    }
    requestAnimationFrame(loop);
}

loop();


