document.addEventListener("DOMContentLoaded", () => {
  const originalTextContent =
    "Сайт изучает методы шифрования центра профессиональной консультации через века «Алло, Гораций?». Помоги наладить связь с философами древности.";
  const popupTextElement = document.querySelector(".popup_i-content p");
  const informationElement = document.querySelector(".information");
  const popupElement = document.getElementById("popup_info");
  // Первый экран
  // Получаем все элементы навигации
  const navigationElements = document.querySelectorAll(
    ".n1, .n2, .n3, .n4, .n5"
  );

  // Соответствие кнопок и секций
  const sectionMapping = {
    n1: ".section2",
    n2: ".section3",
    n3: ".section4",
    n4: ".section5",
    n5: ".section6",
  };

  // Добавляем обработчики событий для каждой навигационной кнопки
  navigationElements.forEach((navigationElement) => {
    navigationElement.addEventListener("click", function () {
      const sectionClass = sectionMapping[this.classList[1]]; // Получаем нужную секцию
      const targetSection = document.querySelector(sectionClass);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  // Добавляем обработчик события клика на элемент с классом "information"
  informationElement.addEventListener("click", function () {
    // Показываем всплывающее окно
    popupElement.style.display = "flex";
  });

  // Добавляем обработчик события клика по всей области окна
  window.addEventListener("click", function (event) {
    // Если пользователь кликнул вне содержимого окна, оно закроется
    if (event.target === popupElement) {
      popupElement.style.display = "none";
    }
  });

  // Эффект печатания текста
  // Функция для печати текста по одной букве
  function printTextLetterByLetter(targetElement, fullText, typingSpeed = 25) {
    let currentText = "";
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
  informationElement.addEventListener("click", function () {
    popupElement.style.display = "flex";
    popupTextElement.textContent = ""; // Очищаем текст перед началом печати
    printTextLetterByLetter(popupTextElement, originalTextContent);
  });

  // Закрываем окно при клике за его пределами
  window.addEventListener("click", function (event) {
    if (event.target === popupElement) {
      popupElement.style.display = "none";
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
        if (
          i >= currentPosition &&
          i < currentPosition + waveWidth &&
          textArray[i] !== "<" &&
          textArray[i] !== ">"
        ) {
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
  const sectionElement = document.querySelector(".section2");

  // Создаем холст для рисования пикселей
  const canvasElement = document.createElement("canvas");
  const canvasContext = canvasElement.getContext("2d");
  sectionElement.appendChild(canvasElement);

  // Устанавливаем размеры холста равными размеру секции
  canvasElement.width = sectionElement.clientWidth;
  canvasElement.height = sectionElement.clientHeight;
  canvasElement.style.position = "absolute";
  canvasElement.style.top = "0";
  canvasElement.style.left = "0";

  // Переменная, отвечающая за активность рисования
  let isDrawingActive = false;

  // Параметры кисти для пиксельного эффекта
  const brushSize = 70; // Размер кисти
  const pixelSize = 10; // Размер отдельного пикселя
  const brushColor = "#0051FF"; // Цвет пикселей

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
  sectionElement.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      // 0 — это левая кнопка
      isDrawingActive = true;
    }
  });

  // Слушаем отпускание кнопки мыши и отключаем рисование
  document.addEventListener("mouseup", () => {
    isDrawingActive = false;
  });

  // Слушаем движение мыши и рисуем пикселями, если кнопка зажата
  sectionElement.addEventListener("mousemove", (event) => {
    if (isDrawingActive) {
      drawPixelBrush(event.offsetX, event.offsetY);
    }
  });

  // Сбрасываем рисование, если мышь уходит с экрана
  sectionElement.addEventListener("mouseleave", () => {
    isDrawingActive = false;
  });

  // экран третий
  // Получаем элементы с экрана
  const sectionThree = document.querySelector(".section3");
  const bluePanel = document.querySelector(".blue-panel");
  const inputField = document.getElementById("userInput");
  const encryptButton = document.getElementById("encryptButton");

  // Функция для создания эффекта глитча
  function glitchEffect(text) {
    const glitchChars = ["#", "%", "&", "@", "£", "¥", "§", "¤", "▓", "█"];
    return text
      .split("")
      .map((char) =>
        Math.random() < 0.2
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : char
      )
      .join("");
  }

  // Нажатие на кнопку "ЗАШИФРОВАТЬ"
  encryptButton.addEventListener("click", function () {
    const userText = inputField.value.trim();

    // Проверяем, что поле не пустое
    if (userText !== "") {
      // Скрываем синюю плашку плавно
      bluePanel.style.transition = "opacity 0.5s ease";
      bluePanel.style.opacity = "0";

      setTimeout(() => {
        // Полностью скрываем плашку
        bluePanel.style.display = "none";

        // Создаем новый элемент с плывущим текстом
        const floatingTextElement = document.createElement("div");
        floatingTextElement.classList.add("floating-text");
        floatingTextElement.textContent = userText;

        // Добавляем текст в секцию section3
        sectionThree.appendChild(floatingTextElement);

        // Задаем начальную позицию текста
        floatingTextElement.style.position = "absolute";
        floatingTextElement.style.top = "50%";
        floatingTextElement.style.left = "-100%";
        floatingTextElement.style.transform = "translateY(-50%)";

        // Движение текста + эффект глитча
        let position = -floatingTextElement.clientWidth;
        const speed = 5; // Ускорим текст

        function moveText() {
          position += speed;
          floatingTextElement.style.left = `${position}px`;

          // Добавляем "глитч" по пути
          if (Math.random() < 0.1) {
            floatingTextElement.textContent = glitchEffect(userText);
          }

          // Когда текст ушел за экран
          if (position > sectionThree.clientWidth) {
            // Убираем текст плавно
            floatingTextElement.style.transition = "opacity 1s ease";
            floatingTextElement.style.opacity = "0";

            // Удаляем текст и возвращаем плашку через 2 секунды
            setTimeout(() => {
              floatingTextElement.remove();

              bluePanel.style.display = "block";
              bluePanel.style.transition = "opacity 0.5s ease";
              bluePanel.style.opacity = "1";

              // Очищаем поле ввода
              inputField.value = "";
            }, 2000);
          } else {
            requestAnimationFrame(moveText);
          }
        }

        moveText();

        // Плавно показываем текст
        setTimeout(() => {
          floatingTextElement.style.opacity = "1";
        }, 100);
      }, 500);
    } else {
      alert("Пожалуйста, введите текст перед шифрованием!");
    }
  });

  // четвертый экран
  // Получаем элемент секции с классом section4
  const section4 = document.querySelector(".section4");

  // Счётчик кликов
  let clickCount = 0;

  // Максимальное количество кликов для синего экрана и сброса
  const maxClicks = 8;

  // Функция для создания и добавления блока в секцию
  function createBlock(colorClass, isHorizontal = false) {
    const block = document.createElement("div");
    block.classList.add("block");

    // Добавляем класс цвета
    if (colorClass) block.classList.add(colorClass);

    // Генерируем случайные размеры и позицию
    const blockWidth = Math.random() * (7 - 0.3) + 0.3 + "vw";
    const blockHeight = section4.clientHeight + "px";
    const blockLeft = Math.random() * 100 + "vw";

    if (isHorizontal) {
      block.style.width = section4.clientWidth + "px";
      block.style.height = Math.random() * (3 - 1) + 1 + "vw";
      block.style.left = "0";
      block.style.top = Math.random() * 56 + "vw";
    } else {
      block.style.width = blockWidth;
      block.style.height = blockHeight;
      block.style.left = blockLeft;
      block.style.top = "0";
    }

    // Добавляем блок в секцию
    section4.appendChild(block);
  }

  // Функция для хаотичного движения блоков при "синем экране смерти"
  function createChaosBlock() {
    const chaosBlock = document.createElement("div");
    chaosBlock.classList.add("chaosBlock");

    // Рандомный размер и цвет блока
    chaosBlock.style.width = Math.random() * (4 - 1) + 1 + "vw";
    chaosBlock.style.height = Math.random() * (4 - 1) + 1 + "vw";
    chaosBlock.style.left = Math.random() * 100 + "vw";
    chaosBlock.style.top = Math.random() * 56 + "vw";

    section4.appendChild(chaosBlock);

    // Движение блока хаотично
    const moveInterval = setInterval(() => {
      chaosBlock.style.left = Math.random() * 100 + "vw";
      chaosBlock.style.top = Math.random() * 56 + "vw";
    }, 500);

    // Убираем блоки при сбросе
    if (clickCount >= maxClicks) clearInterval(moveInterval);
  }

  // Сброс всего к начальному состоянию с сохранением стилей
  function resetScreen() {
    clickCount = 0;

    // Очищаем блоки, но оставляем текстовый контейнер
    section4.innerHTML = `<div class="text-container"><p>О мудрый и взыскательный друг мой!...</p></div>`;
    section4.classList.remove("blueScreen");
  }

  // Добавляем слушатель событий на клик по секции
  section4.addEventListener("click", function () {
    clickCount++;

    // Синие и красные блоки до 7 кликов
    if (clickCount <= 7) {
      let newBlocks = clickCount * 5;
      for (let i = 0; i < newBlocks; i++) {
        createBlock("blue");
      }
      if (clickCount >= 2) {
        for (let i = 0; i < clickCount * 2; i++) {
          createBlock("red", true);
        }
      }
    }

    // Синий экран смерти на 7-й клик
    if (clickCount === 7) {
      section4.classList.add("blueScreen");
      for (let i = 0; i < 20; i++) {
        createChaosBlock();
      }
    }

    // Сброс на 10-й клик
    if (clickCount === 10) {
      resetScreen();
    }
  });

  // пятый экран
  // Получаем элементы
  const slots = document.querySelectorAll(".binary-slot");
  const binaryDisplay = document.querySelector(".binary-display");
  let originalText = binaryDisplay.innerHTML;

  const infoElement = document.querySelector(".info_sec5");
  const bubbleElement = document.querySelector(".info-bubble");
  const typingTextElement = document.querySelector(".typing-text");
  const textToType =
    "Нажми на элементы, чтобы дополнить двоичный код шифрования";
  let characterIndex = 0;

  function showBubbleWithTypingEffect() {
    bubbleElement.classList.remove("hidden");
    bubbleElement.style.visibility = "visible";
    bubbleElement.style.opacity = "1";
    typingTextElement.textContent = "";
    characterIndex = 0;

    function typeCharacter() {
      if (characterIndex < textToType.length) {
        typingTextElement.textContent += textToType[characterIndex];
        characterIndex++;
        setTimeout(typeCharacter, 50);
      }
    }

    typeCharacter();
  }

  function hideBubble() {
    bubbleElement.classList.add("hidden");
    bubbleElement.style.visibility = "hidden";
    bubbleElement.style.opacity = "0";
  }

  infoElement.addEventListener("click", function (event) {
    event.stopPropagation(); // Чтобы клик на info_sec5 не закрыл бабл сразу же
    if (bubbleElement.classList.contains("hidden")) {
      showBubbleWithTypingEffect();
    }
  });

  // Закрытие бабла при клике в любое место экрана, кроме info_sec5 и самого бабла
  document.addEventListener("click", function (event) {
    if (
      !bubbleElement.contains(event.target) &&
      !infoElement.contains(event.target)
    ) {
      hideBubble();
    }
  });

  // Функция для обработки клика по слотам
  slots.forEach((slot) => {
    slot.addEventListener("click", () => {
      // Добавляем текст слота к binary-display
      binaryDisplay.innerHTML += slot.innerText;
      // Скрываем слот
      slot.style.display = "none";

      // Проверяем, все ли слоты скрыты
      const allHidden = [...slots].every((s) => s.style.display === "none");
      if (allHidden) {
        startBinaryAnimation();
      }
    });
  });

  // Функция запуска анимации двоичного кода
  function startBinaryAnimation() {
    let letters = "Хорошая работа, юный гений! Гораций одобряет твою работу";
    let currentIndex = 0;
    binaryDisplay.innerHTML = "";

    const interval = setInterval(() => {
      binaryDisplay.innerHTML += letters[currentIndex];
      currentIndex++;

      if (currentIndex >= letters.length) {
        clearInterval(interval);
        setTimeout(resetDisplay, 2000); // Возвращаем всё обратно через 2 секунды
      }
    }, 70);
  }

  // Сброс текста и слотов к исходному состоянию
  function resetDisplay() {
    binaryDisplay.innerHTML = originalText;
    slots.forEach((slot) => {
      slot.style.display = "block";
    });
  }

  // Сброс текста при перезагрузке
  window.addEventListener("load", () => {
    binaryDisplay.innerHTML = originalText;
  });

  // шестой экран
  let clickCountSec6 = 0;

  const boardElements = document.querySelectorAll(".board1, .board2");
  const hiddenImages = [
    document.querySelector(".line1_sec6"),
    document.querySelector(".line2_sec6"),
    document.querySelector(".line3_sec6"),
  ];

  boardElements.forEach(function (board) {
    board.addEventListener("click", function () {
      if (clickCountSec6 < hiddenImages.length) {
        hiddenImages[clickCountSec6].classList.remove("hidden");
        clickCountSec6++;

        if (clickCountSec6 === hiddenImages.length) {
          startChessAnimation();
        }
      }
    });
  });

  function startChessAnimation() {
    const section6 = document.querySelector(".section6");
    section6.classList.add("chess-pattern");
  }
});
