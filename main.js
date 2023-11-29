function deposit () {
    let  userInput = parseInt(document.getElementById('input').value);
    let dval = parseInt(document.getElementById('deposit-val').innerText);
    let bval = parseInt(document.getElementById('balance-val').innerText);
    bval = bval + 0.3*userInput
    dval = dval + userInput;

    document.getElementById('deposit-val').innerHTML = dval;
    document.getElementById('balance-val').innerHTML = bval;
    clearfields();
}

function clearfields() {
    const name = document.querySelector('#input');
    name.value = '';
    
}

function withdraw () {
    let  userInput = parseInt(document.getElementById('input').value);
    let bval = parseInt(document.getElementById('balance-val').innerText);
    bval = bval - userInput;
    if (bval >= 0) {
        document.getElementById('balance-val').innerHTML = bval;
        clearfields();
    } else {
        window.alert('Withdraw value should not be greater than balance !')
        clearfields();
    }
    
}

function logout () {
    window.open('index.html');
}
