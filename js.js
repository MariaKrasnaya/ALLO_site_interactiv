document.addEventListener('DOMContentLoaded', () => {

const originalTextContent = 'Сайт изучает методы шифрования центра профессиональной консультации через века «Алло, Гораций?». Помоги наладить связь с философами древности.';
const popupTextElement = document.querySelector('.popup_i-content p');
const informationElement = document.querySelector('.information');
const popupElement = document.getElementById('popup_info');
  // Первый экран 

// Добавляем обработчик события клика на элемент с классом "information"
informationElement.addEventListener('click', function () {
    // Показываем всплывающее окно
    popupElement.style.display = 'flex';
});



// Добавляем обработчик события клика по всей области окна
window.addEventListener('click', function (event) {
    // Если пользователь кликнул вне содержимого окна, оно закроется
    if (event.target === popupElement) {
        popupElement.style.display = 'none';
    }
});


// Эффект печатания текста
// Функция для печати текста по одной букве
function printTextLetterByLetter(targetElement, fullText, typingSpeed = 25) {
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(function () {
        currentText += fullText[currentIndex];
        currentIndex++;

        targetElement.textContent = currentText;

        if (currentIndex >= fullText.length) {
            clearInterval(typingInterval);
        }
    }, typingSpeed);
}

// Открываем всплывающее окно и запускаем печать текста при клике на элемент с классом "information"
informationElement.addEventListener('click', function () {
    popupElement.style.display = 'flex';
    popupTextElement.textContent = '';// Очищаем текст перед началом печати
    printTextLetterByLetter(popupTextElement, originalTextContent);
});

// Закрываем окно при клике за его пределами
window.addEventListener('click', function (event) {
    if (event.target === popupElement) {
        popupElement.style.display = 'none';
    }
});






// второй экран

// Основной текст, который будет показываться после глитча
const glitchText = `-Ах, юноша, ты, конечно,<br>
понимаешь, что эта твоя <br> виртуальная реальность – <br>
лишь бледная тень идеального мира форм?<br>
-Я живу в бочке, <br> а ты в квартире <br>с кондиционером. Кто из нас ближе к природе, интересно?`;

// Получаем элемент, в который будет вставлен текст
const textElement = document.getElementById("glitchText");

// Функция, которая запускает глитч-эффект с волной и плавным исчезновением текста
function startLongWaveGlitchEffect() {
    const textArray = glitchText.split(""); // Превращаем текст в массив символов
    let currentPosition = 0; // Текущая позиция волны
    const glitchSpeed = 50; // Скорость глитча в миллисекундах
    const waveWidth = 12; // Ширина волны глитча

    // Функция, которая выбирает случайный символ для глитча
    function getRandomGlitchSymbol() {
        const glitchSymbols = ["■", "▓", "█", "0", "1"];
        const randomIndex = Math.floor(Math.random() * glitchSymbols.length);
        return glitchSymbols[randomIndex];
    }

    // Запускаем анимацию глитча
    const glitchInterval = setInterval(() => {
        let glitchedText = ""; // Создаем пустую строку для нового текста

        // Проходим по каждому символу текста
        for (let i = 0; i < textArray.length; i++) {
            // Если символ попадает в область волны, заменяем его случайным символом
            if (i >= currentPosition && i < currentPosition + waveWidth && textArray[i] !== "<" && textArray[i] !== ">") {
                glitchedText += getRandomGlitchSymbol();
            } else {
                glitchedText += textArray[i]; // Если нет — оставляем оригинальный символ
            }
        }

        // Обновляем текст на странице
        textElement.innerHTML = glitchedText;
        currentPosition++; // Сдвигаем волну вправо

        // Останавливаем анимацию, когда волна проходит весь текст
        if (currentPosition > textArray.length) {
            clearInterval(glitchInterval);
        }
    }, glitchSpeed);
}
// Запускаем глитч каждые 4 секунды
setInterval(startLongWaveGlitchEffect, 4000);



// Эффект пиксельной кисти на втором экране
// Получаем элемент экрана с классом .section2
const sectionElement = document.querySelector('.section2');

// Создаем холст для рисования пикселей
const canvasElement = document.createElement('canvas');
const canvasContext = canvasElement.getContext('2d');
sectionElement.appendChild(canvasElement);

// Устанавливаем размеры холста равными размеру секции
canvasElement.width = sectionElement.clientWidth;
canvasElement.height = sectionElement.clientHeight;
canvasElement.style.position = 'absolute';
canvasElement.style.top = '0';
canvasElement.style.left = '0';

// Переменная, отвечающая за активность рисования
let isDrawingActive = false;

// Параметры кисти для пиксельного эффекта
const brushSize = 70; // Размер кисти
const pixelSize = 10; // Размер отдельного пикселя
const brushColor = '#0051FF'; // Цвет пикселей

// Функция, которая рисует пиксельную кисть
function drawPixelBrush(mouseX, mouseY) {
    canvasContext.fillStyle = brushColor;
    for (let offsetX = 0; offsetX < brushSize; offsetX += pixelSize) {
        for (let offsetY = 0; offsetY < brushSize; offsetY += pixelSize) {
            canvasContext.fillRect(
                mouseX + offsetX - brushSize / 2,
                mouseY + offsetY - brushSize / 2,
                pixelSize,
                pixelSize
            );
        }
    }
}

// Слушаем нажатие левой кнопки мыши и активируем рисование
sectionElement.addEventListener('mousedown', (event) => {
    if (event.button === 0) { // 0 — это левая кнопка
        isDrawingActive = true;
    }
});

// Слушаем отпускание кнопки мыши и отключаем рисование
document.addEventListener('mouseup', () => {
    isDrawingActive = false;
});

// Слушаем движение мыши и рисуем пикселями, если кнопка зажата
sectionElement.addEventListener('mousemove', (event) => {
    if (isDrawingActive) {
        drawPixelBrush(event.offsetX, event.offsetY);
    }
});

// Сбрасываем рисование, если мышь уходит с экрана
sectionElement.addEventListener('mouseleave', () => {
    isDrawingActive = false;
});

 



















});