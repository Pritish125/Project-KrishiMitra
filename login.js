function validate() {
    let userID = document.getElementById('userid').value;
    let pass = document.getElementById('pass').value;

    const id = '8016398068';
    const passI = 'poiuyt';

    if (userID === id && pass === passI) {
        alert('Login Success');
        window.open('main.html');
        // clearfields();
        
    } else {
        alert('Login unsuccessful');
        clearfields();
    }
}

function clearfields() {
    const name = document.querySelector('#userid');
    name.value = '';
    const pass = document.querySelector('#pass');
    pass.value = '';
    
    
}