// generate pin section 

function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
document.getElementById('pin-btn').addEventListener('click', function(){
    const pinField =document.getElementById('pin-field');
    pinField.value = getPin();
})

// calculator section 

document.getElementById('calculator').addEventListener('click', function(event){
    const char = event.target.innerText;
    const charField = document.getElementById('calc-field');
    const characters = charField.value;
    if(isNaN(char)){
       if(char === 'C'){
        charField.value = '';
       }
       else if(char === '<'){
        const charSplit = characters.split('');
        charSplit.pop();
       charField.value = charSplit.join('');
       }
    }
    else{
       const displayChar = characters + char;
       charField.value = displayChar;
    }
})
document.getElementById('calc-submit').addEventListener('click', function(){
    const pinField =document.getElementById('pin-field');
    const pins = pinField.value;

    const charField = document.getElementById('calc-field');
    const characters = charField.value;

    const displaySuccess = document.getElementById('text-success');
    const displayFailure = document.getElementById('text-failure');

    if(pins === characters){
       displaySuccess.style.display = 'block';
       displayFailure.style.display = 'none';
    }
    else{
        displaySuccess.style.display = 'none';
       displayFailure.style.display = 'block';
    }
})