const firstColumn = document.querySelector('.first-column');
const secondColumn = document.querySelector('.second-column');
const buttom = document.querySelector('#buttom');

function info (value1, value2) {
  this.value1 = value1;
  this.value2 = value2;
}

const whatClassIsIt = () => {
  if (buttom.classList.contains('save')) {
    return true
  }  else {
    return false
  }
}

const timeToSave = () => {
  let value = document.querySelector('#info').value; 
  info.value1 = value;

  buttom.classList.remove('save');
  buttom.classList.add('show');

  document.querySelector('#info').value = '';
}

const timeToShow = () => {
  let value = document.querySelector('#info').value;
  info.value2 = value;

  let firstValue = document.createElement('div');
  let secondValue = document.createElement('div');
  firstValue.innerText = `${info.value1}`;
  secondValue.innerText = `${info.value2}`;
  firstColumn.appendChild(firstValue);
  secondColumn.appendChild(secondValue);

  buttom.classList.remove('show');
  buttom.classList.add('save');
  
  document.querySelector('#info').value = '';
}

const clickMe = () => {
  let result = whatClassIsIt();

  if (result) {
    timeToSave();
  } else {
    timeToShow();
  }
}