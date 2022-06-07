const play = (event) => {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

const removeTransition = (event) => {
  if (event.propertyName === "transform")
    event.target.classList.remove("playing");
};

const pianoKeys = document.querySelectorAll(".key");
pianoKeys.forEach((el) =>
  el.addEventListener("transitionend", removeTransition)
);

window.addEventListener("keydown", play);
