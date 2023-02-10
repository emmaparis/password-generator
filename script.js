// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword()
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  


  //passwordText.value = password;
  
  //Dom elements
  const resultEl = document.getElementById('uppercase');
  const lengthEl = document.getElementById('lowecase');
  const uppercaseEl = document.getElementById('uppercase');
  const lowercaseEl = document.getElementById('lowercase');
  const numbersEl = document.getElementById('numbers');
  const symbolsEl = document.getElementById('symbols');
  const generateEl = document.getElementById('generate');
  const clipboardEl = document.getElementById('clipboard');
 
  
  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  };

  clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password) { return; }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password copied to clipboard');

  });
  //Generate Event listen
  generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    
      resultEl.innerText = generatePassword(hasLower, hasUpper, hasUpper, hasSymbol, length);
    });
    
    function generatePassword(lower, upper, number, symbol, length) {
  let generatedpassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => 
  Object.values(item)[0]);
  
  //Doesn't have a selected type
  if(typesCount === 0) {
    return '';
  }
  } 
  //create loop
  for(let i=0; i<length; i+typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword +=randomFunc [funcName]();
    });
  }
  
  const finalPassword = generatedPassword.slice(0, length);
  
  return finalPassword;
    //const typesCount = lower + upper + number + symbol;
  
    console.log('typesCount:', typesCount);
  
   
  
    console.log('typesArr: ', typesArr)
  
  //Generate password function
  //function generatePassword(lower, upper, number, symbol, length) {
  
    //Generator Functions
    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    function getRandomSymbol() {
      const symbols = '!@#$%^&*(){}[]=<>/,.?';
      return symbols[Math.floor(Math.random() * symbols.length)];
    }
    
    const floating_btn = document.querySelector('.floating-btn');
    const close_btn = document.querySelector('.close-btn');
    const social_panel_conatiner = document.querySelector('.social-panel-container');
  
    floating_btn.addEventListener('click', () => {
      social_panel_conatiner.classList.toggle('visible')
    });
  
    close_btn.addEventListener('click', () => {
      social_panel_conatiner.classList.remove('visible')
    });
  
  // Add event listener to generate button
  //generateBtn.addEventListener("click", writePassword);
  
  