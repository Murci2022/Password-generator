const btn = document.getElementById('btn');
const displayPassword = document.getElementById('header-title');
const checkBox1 = document.getElementById('checkbox1');
const checkBox2 = document.getElementById('checkbox2');
const checkBox3 = document.getElementById('checkbox3');
const checkBox4 = document.getElementById('checkbox4');
const nrConti = document.getElementById('nr');
const copyBtn = document.getElementById('header-icon');
const password = document.getElementById('header-title');
const svgTitle = document.getElementById('svg-title');
const resetBtn = document.getElementById('btn-reset');
const msg = document.getElementById('msg');
const msgReset = document.getElementById('msg-reset');

const slider = document.getElementById('slider');

let displayNr = 8;

const lowercaseLetters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(97 + index)
);

const uppercaseLetters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);

const allNr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const allSymbols = ['!', '@', '#', '$', '%', '&', '*', '+'];

const abcLength = lowercaseLetters.length;
const allNrLength = allNr.length;

function randIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generatePassword() {
  let password = '';

  if (checkBox1.checked) {
    const indexes = [
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
      randIndex(lowercaseLetters),
    ];
    password += indexes.map((index) => lowercaseLetters[index]).join('');
  }

  if (checkBox2.checked) {
    const indexes = [
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
      randIndex(uppercaseLetters),
    ];
    password += indexes.map((index) => uppercaseLetters[index]).join('');
  }
  if (checkBox3.checked) {
    const indexes = [
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
      randIndex(allNr),
    ];
    password += indexes.map((index) => allNr[index]).join('');
  }
  if (checkBox4.checked) {
    const indexes = [
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
      randIndex(allSymbols),
    ];
    password += indexes.map((index) => allSymbols[index]).join('');
  }

  return password.slice();
}

function shuffleFunc(fullArr) {
  const newDisplayNr = Number(displayNr);

  const shuffledArray = [...fullArr];
  console.log(shuffledArray, 'shuffledArr');

  let temp = '';
  let i = fullArr.length;

  while (--i >= 0) {
    const j = Math.floor(Math.random() * shuffledArray.length);
    temp = shuffledArray[j];
    shuffledArray[j] = shuffledArray[i];
    shuffledArray[i] = temp;
  }
  return shuffledArray.join('').slice(0, newDisplayNr);
}

// click event on btn
btn.addEventListener('click', () => {
  svgTitle.innerHTML = 'copy to clipboard';
  password.style.visibility = 'visible';
  if (
    checkBox1.checked ||
    checkBox2.checked ||
    checkBox3.checked ||
    checkBox4.checked
  ) {
    const endArr = shuffleFunc(generatePassword());

    const fullShaffledPassword = endArr;

    displayPassword.innerHTML = fullShaffledPassword;
  } else {
    displayPassword.innerHTML = 'Please select an option';
  }
});

/* slider change */

function testFunc(test) {
  console.log(test, 'test');
}

slider.addEventListener('change', (e) => {
  console.log(e.target.value, 'posi');
  displayNr = e.target.value;
  testFunc(displayNr);

  nrConti.innerHTML = displayNr;
});

/* function copyToClipboard */

function copyToClipboard() {
  console.log(password.innerText, 'copyToClipboard');
  const copyText = password.innerText;
  navigator.clipboard.writeText(copyText).then(() => {
    console.log(copyText, 'copied');

    setTimeout(() => {
      svgTitle.innerHTML = 'copy to clipboard';
    }, 4400);
  });
}

/*  copy button */

copyBtn.addEventListener('click', () => {
  // display msg
  msg.style.opacity = '1';

  setTimeout(() => {
    msg.style.opacity = '0';
  }, 1800);

  copyToClipboard();
});

/* reset btn */

resetBtn.addEventListener('click', () => {
  //checkbox reset
  checkBox1.checked = true;
  checkBox2.checked = false;
  checkBox3.checked = false;
  checkBox4.checked = false;

  // number reset
  displayNr = 8;
  nrConti.innerHTML = displayNr;

  //slider reset
  console.log(slider.value, 'sliderValue');
  slider.value = displayNr;

  //reseted@
  password.style.visibility = 'hidden';

  msgReset.style.opacity = '1';
  console.log(msgReset);

  setTimeout(() => {
    msgReset.style.opacity = '0';
  }, 2000);

  console.log(nrConti.innerText);

  console.log(checkBox2);
});
