const typingText = document.querySelector(".typing-text p");
const input = document.querySelector(".input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistake span b");
const wpm = document.querySelector(".wpm span b");
const cpm = document.querySelector(".cpm span b");
const btn = document.querySelector("button");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
  const paragraph = [
    "Avul Pakir Jainulabdeen Abdul Kalam BR was an Indian aerospace scientist and statesman who served as the 11th president of India from 2002 to 2007.",
    "Born and raised in a Muslim family in Rameswaram, Tamil Nadu, he studied physics and aerospace engineering.",
    "Bhagat Singh was an Indian anti-colonial revolutionary, who participated in the mistaken murder of a junior British police officer in December 1928 in what was to be retaliation for the death of an Indian nationalist.",
    "Mangal Pandey was an Indian soldier who played a key role in the events taking place just before the outbreak of the Indian rebellion of 1857.",
    "Captain Vikram Batra, PVC was an Indian Army officer. He was posthumously awarded the Param Vir Chakra, the highest Indian military decoration.",
    "The soldiers of the Indian Army try to locate their patrol officers after they learn that Pakistani troops are crossing the Line of Control.",
    "Rabindranath Tagore FRAS was a Bengali polymath who was active as a poet, writer, playwright, composer, philosopher, social reformer, and painter during the age of Bengal Renaissance.",
    "Subhas Chandra Bose was an Indian nationalist whose defiance of British authority in India made him a hero among many Indians, but his wartime alliances with Nazi Germany and Imperial Japan left a legacy vexed by authoritarianism, anti-Semitism, and military failure.",
  ];

  const randomIndex = Math.floor(Math.random() * paragraph.length);
  typingText.innerHTML = "";
  for (const char of paragraph[randomIndex]) {
    console.log(char);
    typingText.innerHTML += `<span>${char}</span>`;
  }

  typingText.querySelectorAll("span")[0].classList.add("active");
}

function initTyping() {
  const char = typingText.querySelectorAll("span");
  const typedChar = input.value.charAt(charIndex);

  if (charIndex < char.length && timeLeft > 0) {
    if (char[charIndex].innerText === typedChar) {
      char[charIndex].classList.add("correct");
      console.log("correct");
    } else {
      mistake++;
      char[charIndex].classList.add("incorrect");
      console.log("incorrect");
    }
    charIndex++;
  } else {
  }
}

loadParagraph();
input.addEventListener("input", initTyping);
