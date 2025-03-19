document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', (event) => {
      if (event.buttons === 1) { // Проверяем, нажата ли левая кнопка мыши
          const blurSpot = document.createElement('div');
          blurSpot.classList.add('blur-effect');
          blurSpot.style.left = `${event.pageX}px`;
          blurSpot.style.top = `${event.pageY}px`;
          document.body.appendChild(blurSpot);
      }});

  


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
                glitchText.style.transition = "opacity 1s ease-in-out";
                glitchText.style.userSelect = "none"
                iterations++;
                if (iterations > 10) {
                    clearInterval(interval);
                    glitchText.innerText = originalText;
                }
            }, 100);
        }

        setInterval(startGlitchEffect, 3000);
// glitch


// Показать popup
document.getElementById('showPopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'flex';
});

// Закрыть popup
document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// Отправить введенный текст
document.getElementById('submitInput').addEventListener('click', function() {
  const inputText = document.getElementById('popupInput').value;
  alert('Вы ввели: ' + inputText);
  document.getElementById('popup').style.display = 'none'; // Закрыть popup после отправки
});

});