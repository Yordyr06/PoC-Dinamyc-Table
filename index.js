// const buttonSelector = document.querySelector('.action');
// const buttonEvent = addEventListener('click');

const rowContainer = document.querySelector('.table-container');

function displayInfo() {
    // <tr class="table-content">
    //             <td><input type="text" name="name" id="name"></td>
    //             <td><input type="text" name="lastname" id="lastname"></td>
    //         </tr>
    
    const newRow = document.createElement('tr');
    newRow.setAttribute('class', 'table-content');
    
    const nameTd = document.createElement('td');
    const nameInput = document.createElement('input');
    // nameInput.setAttribute('type', 'text', 'name', 'name', 'id', 'name');
    nameInput.setAttribute('type', 'text',);
    nameInput.setAttribute('name', 'name',);
    nameInput.setAttribute('id', 'name');

    const lastnameTd = document.createElement('td');
    const lastnameInput = document.createElement('input');
    // lastnameInput.setAttribute('type', 'text', 'name', 'name', 'id', 'name');
    lastnameInput.setAttribute('type', 'text');
    lastnameInput.setAttribute('name', 'name');
    lastnameInput.setAttribute('id', 'name');

    rowContainer.appendChild(newRow);
    newRow.appendChild(nameTd, lastnameTd);
    nameTd.appendChild(nameInput);
    lastnameTd.append(lastnameInput);
};

displayInfo();

