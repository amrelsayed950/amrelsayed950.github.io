window.onload = (function() {
    "use strict";

    let animation = document.getElementById("animation");
    let textArea = document.getElementById("text-area");
    let fontSize = document.getElementById("fontsize");
    let turbo = document.getElementById("turbo");

    let animationFrames = [];
    let framesCounter = 0;
    let timer;

    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");

    let isStarted = false;

    animation.onchange = function() {
        textArea.value = ANIMATIONS[animation.value];
    }

    /** start button event */
    startBtn.onclick = function() {
        if (animation.value != 'Blank') {
            animationFrames = textArea.value.split("=====\n");
            performAnimation();
            isStarted = true;
        }
    }

    /** stop button event */
    stopBtn.onclick = function() {
        textArea.value = ANIMATIONS[animation.value];
        animation.disabled = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(timer);
        isStarted = false;
    }


    function draw() {
        if (framesCounter < animationFrames.length) {
            textArea.value = animationFrames[framesCounter];
            framesCounter++;
        } else {
            textArea.value = animationFrames[0];
            framesCounter = 1;
        }
    }

    fontsize.onchange = function() {
        textArea.style.fontSize = fontSize.value;
    }


    turbo.onchange = function() {
        if (isStarted)
            if (animation.value != 'Blank')
                performAnimation()
    }

    /** Triggers animation(time) */
    function performAnimation() {
        clearTimeout(timer);
        if (turbo.checked) {
            startAnimation("50")
        } else {
            startAnimation("250")
        }
    }


    /**
     * performs animations
     * @param {String} time 
     */
    function startAnimation(time) {
        timer = setInterval(function() {
            draw();
        }, time)
        animation.disabled = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }


})