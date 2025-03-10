document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', (event) => {
      if (event.buttons === 1) { // Проверяем, нажата ли левая кнопка мыши
          const blurSpot = document.createElement('div');
          blurSpot.classList.add('blur-effect');
          blurSpot.style.left = `${event.clientX}px`;
          blurSpot.style.top = `${event.clientY}px`;
          document.body.appendChild(blurSpot);
      }
  });

// glitch
        const originalText = document.getElementById("glitchText").innerText;
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?/";
        let interval;

        function getRandomString(length) {
            let result = "";
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return result;
        }

        function startGlitchEffect() {
            let glitchText = document.getElementById("glitchText");
            let iterations = 0;
            interval = setInterval(() => {
                glitchText.innerText = getRandomString(originalText.length);
                iterations++;
                if (iterations > 10) {
                    clearInterval(interval);
                    glitchText.innerText = originalText;
                }
            }, 100);
        }

        setInterval(startGlitchEffect, 3000);
// glitch

});