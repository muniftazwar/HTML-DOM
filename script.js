//EXTERNAL JS FILE
function my Function(){
    var a = 4;
    document.getElementById("demo").innerHTML = a * a;
} 

//VALIDATION ACTIVITY
function validate(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');

   
    let message = '';

    if (email === '') {
        message = 'Please enter an email.';
        msgBox.style.color = 'red';
    } else if (pass === '') {
        message = 'Password must be at least 8 characters.';
        msgBox.style.color='red';
    }

    else{
        message ='Login sucessful!';
        msgBox.style.color = 'green';
    }
}

msgBox.innerText = message;
}