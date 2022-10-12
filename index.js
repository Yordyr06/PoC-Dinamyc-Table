const infoContainer = document.querySelector('.info-container');
const buttom = document.querySelector('#buttom');

function info (value1, value2) {
  this.value1 = value1;
  this.value2 = value2;
}

const whatClassIs = () => {
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
}

const timeToShow = () => {
  let value = document.querySelector('#info').value;
  info.value2 = value;

  let td = document.createElement('td');
  td.innerText = `${info.value1} - ${info.value2}`;
  infoContainer.appendChild(td);

  buttom.classList.remove('show');
  buttom.classList.add('save');
}

const clickMe = () => {
  let result = whatClassIs();

  if (result) {
    timeToSave();
  } else {
    timeToShow();
  }
}