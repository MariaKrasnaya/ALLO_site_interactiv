document.addEventListener("DOMContentLoaded", () => {
  const originalTextContent =
    "Сайт изучает методы шифрования центра профессиональной консультации через века «Алло, Гораций?». Помоги наладить связь с философами древности.";
  const popupTextElement = document.querySelector(".popup_i-content p");
  const informationElement = document.querySelector(".information");
  const popupElement = document.getElementById("popup_info");
  // Первый экран
  const navigationElements = document.querySelectorAll(
    ".n1, .n2, .n3, .n4, .n5"
  );

  const sectionMapping = {
    n1: ".section2",
    n2: ".section3",
    n3: ".section4",
    n4: ".section5",
    n5: ".section6",
  };

  navigationElements.forEach((navigationElement) => {
    navigationElement.addEventListener("click", function () {
      const sectionClass = sectionMapping[this.classList[1]]; // Получаем нужную секцию
      const targetSection = document.querySelector(sectionClass);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  informationElement.addEventListener("click", function () {
    popupElement.style.display = "flex";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popupElement) {
      popupElement.style.display = "none";
    }
  });

  // Эффект печатания текста
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

  informationElement.addEventListener("click", function () {
    popupElement.style.display = "flex";
    popupTextElement.textContent = "";
    printTextLetterByLetter(popupTextElement, originalTextContent);
  });

  window.addEventListener("click", function (event) {
    if (event.target === popupElement) {
      popupElement.style.display = "none";
    }
  });

  // второй экран
  const glitchText = `-Ах, юноша, ты, конечно,<br>
понимаешь, что эта твоя <br> виртуальная реальность – <br>
лишь бледная тень идеального мира форм?<br>
-Я живу в бочке, <br> а ты в квартире <br>с кондиционером. Кто из нас ближе к природе, интересно?`;

  const textElement = document.getElementById("glitchText");

  // Функция, которая запускает глитч-эффект с волной и плавным исчезновением текста
  function startLongWaveGlitchEffect() {
    const textArray = glitchText.split("");
    let currentPosition = 0;
    const glitchSpeed = 50;
    const waveWidth = 12;

    function getRandomGlitchSymbol() {
      const glitchSymbols = ["■", "▓", "█", "0", "1"];
      const randomIndex = Math.floor(Math.random() * glitchSymbols.length);
      return glitchSymbols[randomIndex];
    }

    const glitchInterval = setInterval(() => {
      let glitchedText = "";

      for (let i = 0; i < textArray.length; i++) {
        if (
          i >= currentPosition &&
          i < currentPosition + waveWidth &&
          textArray[i] !== "<" &&
          textArray[i] !== ">"
        ) {
          glitchedText += getRandomGlitchSymbol();
        } else {
          glitchedText += textArray[i];
        }
      }

      textElement.innerHTML = glitchedText;
      currentPosition++;

      if (currentPosition > textArray.length) {
        clearInterval(glitchInterval);
      }
    }, glitchSpeed);
  }

  setInterval(startLongWaveGlitchEffect, 4000);

  // Эффект пиксельной кисти на втором экране
  const sectionElement = document.querySelector(".section2");
  const canvasElement = document.createElement("canvas");
  const canvasContext = canvasElement.getContext("2d");
  sectionElement.appendChild(canvasElement);

  canvasElement.width = sectionElement.clientWidth;
  canvasElement.height = sectionElement.clientHeight;
  canvasElement.style.position = "absolute";
  canvasElement.style.top = "0";
  canvasElement.style.left = "0";

  let isDrawingActive = false;

  const brushSize = 70;
  const pixelSize = 10;
  const brushColor = "#0051FF";

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

  sectionElement.addEventListener("mousedown", (event) => {
    if (event.button === 0) {
      isDrawingActive = true;
    }
  });

  document.addEventListener("mouseup", () => {
    isDrawingActive = false;
  });

  sectionElement.addEventListener("mousemove", (event) => {
    if (isDrawingActive) {
      drawPixelBrush(event.offsetX, event.offsetY);
    }
  });

  sectionElement.addEventListener("mouseleave", () => {
    isDrawingActive = false;
  });

  // третий экран
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
  encryptButton.addEventListener("click", function () {
    const userText = inputField.value.trim();

    if (userText !== "") {
      bluePanel.style.transition = "opacity 0.5s ease";
      bluePanel.style.opacity = "0";

      setTimeout(() => {
        bluePanel.style.display = "none";

        const floatingTextElement = document.createElement("div");
        floatingTextElement.classList.add("floating-text");
        floatingTextElement.textContent = userText;

        sectionThree.appendChild(floatingTextElement);

        floatingTextElement.style.position = "absolute";
        floatingTextElement.style.top = "50%";
        floatingTextElement.style.left = "-100%";
        floatingTextElement.style.transform = "translateY(-50%)";

        // Движение текста + эффект глитча
        let position = -floatingTextElement.clientWidth;
        const speed = 5;

        function moveText() {
          position += speed;
          floatingTextElement.style.left = `${position}px`;

          if (Math.random() < 0.1) {
            floatingTextElement.textContent = glitchEffect(userText);
          }

          if (position > sectionThree.clientWidth) {
            floatingTextElement.style.transition = "opacity 1s ease";
            floatingTextElement.style.opacity = "0";

            setTimeout(() => {
              floatingTextElement.remove();

              bluePanel.style.display = "block";
              bluePanel.style.transition = "opacity 0.5s ease";
              bluePanel.style.opacity = "1";

              inputField.value = "";
            }, 2000);
          } else {
            requestAnimationFrame(moveText);
          }
        }

        moveText();

        setTimeout(() => {
          floatingTextElement.style.opacity = "1";
        }, 100);
      }, 500);
    } else {
      alert("Пожалуйста, введите текст перед шифрованием!");
    }
  });

  // четвертый экран
  const section4 = document.querySelector(".section4");

  let clickCount = 0;

  const maxClicks = 8;

  // Функция для создания и добавления блока в секцию
  function createBlock(colorClass, isHorizontal = false) {
    const block = document.createElement("div");
    block.classList.add("block");

    if (colorClass) block.classList.add(colorClass);

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

    section4.appendChild(block);
  }

  // Функция для хаотичного движения блоков при "синем экране смерти"
  function createChaosBlock() {
    const chaosBlock = document.createElement("div");
    chaosBlock.classList.add("chaosBlock");

    chaosBlock.style.width = Math.random() * (4 - 1) + 1 + "vw";
    chaosBlock.style.height = Math.random() * (4 - 1) + 1 + "vw";
    chaosBlock.style.left = Math.random() * 100 + "vw";
    chaosBlock.style.top = Math.random() * 56 + "vw";

    section4.appendChild(chaosBlock);

    const moveInterval = setInterval(() => {
      chaosBlock.style.left = Math.random() * 100 + "vw";
      chaosBlock.style.top = Math.random() * 56 + "vw";
    }, 500);

    if (clickCount >= maxClicks) clearInterval(moveInterval);
  }

  function resetScreen() {
    clickCount = 0;

    section4.innerHTML = `<div class="text-container"><p>О мудрый и взыскательный друг мой!...</p></div>`;
    section4.classList.remove("blueScreen");
  }

  section4.addEventListener("click", function () {
    clickCount++;

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

    if (clickCount === 10) {
      resetScreen();
    }
  });

  // пятый экран
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
    event.stopPropagation();
    if (bubbleElement.classList.contains("hidden")) {
      showBubbleWithTypingEffect();
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !bubbleElement.contains(event.target) &&
      !infoElement.contains(event.target)
    ) {
      hideBubble();
    }
  });

  slots.forEach((slot) => {
    slot.addEventListener("click", () => {
      binaryDisplay.innerHTML += slot.innerText;

      slot.style.display = "none";

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
        setTimeout(resetDisplay, 2000);
      }
    }, 70);
  }

  function resetDisplay() {
    binaryDisplay.innerHTML = originalText;
    slots.forEach((slot) => {
      slot.style.display = "block";
    });
  }

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
