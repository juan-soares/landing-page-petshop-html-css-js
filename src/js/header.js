function titleTipping() {
  let showingText = "";

  const textToShow =
    "Carinho, Cuidado e Higiene: O nosso compromisso com o bem-estar do seu melhor amigo!";

  const title = document.querySelector(".main-content__title");

  let i = 0;

  const increaseWord = () => {
    if (i < textToShow.length) {
      title.textContent += textToShow[i];
      i++;
    } else {
      i = 0;
      title.textContent = "";
    }
    setTimeout(increaseWord, 100);
  };

  increaseWord();
}

titleTipping();
