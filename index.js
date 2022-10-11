const infoContainer = document.querySelector('.info-container');
const buttom = document.querySelector('#buttom');

function info (value1, value2) {
  this.value1 = value1;
  this.value2 = value2;
}

function buttomSave() {
  buttom.addEventListener('click',
    function save(value) {
      value = document.querySelector('#info').value; 
      info.value1 = value;
      buttom.classList.remove('save');
      buttom.classList.add('show');
      // buttom.classList.toggle('show')
      console.log('Todo bien con el save vro')
    }
  );
}

function buttomShow() {
  buttom.addEventListener('click',
    function show(value) {
      value = document.querySelector('#info').value;
      info.value2 = value;
      // console.log(info.value1, info.value2);
      buttom.classList.remove('show');
      buttom.classList.add('save');
      // buttom.classList.toggle('save')
      console.log('Todo bien con el show vro')
    }
  );
}

if (buttom.classList == 'save') {
  buttomSave();
} else if (buttom.classList == 'show') {
  buttomShow();
} else {
  console.log('Fuap!')
}