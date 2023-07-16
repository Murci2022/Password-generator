const btn = document.getElementById("btn")
const displayPassword = document.getElementById("header-title")
const checkBox1 = document.getElementById("checkbox1");



/* abc */
const lowercaseLetters = Array.from({length: 26}, (_, index) => String.fromCharCode(97 + index));

const abcLength = lowercaseLetters.length


//function to generate number
function generateNr(){
    const randomNr = Math.floor(Math.random()*abcLength)
    return randomNr
}

 console.log( generateNr())
//function to generate a letter 
function generateLetter(p1){
    console.log(p1)
    const randLetter = lowercaseLetters[p1]
    return randLetter
  
}
const randNr = generateNr();
const randLetter = generateLetter(randNr);
console.log(randLetter)

//function to generate letter+letter+letter

// eventl for button - inside if(checkbox is checked = generate password)































// make a func which generates 3 letters rand
/* btn.addEventListener("click",(password)=>{
    console.log(password)
    
   
 
    displayPassword.innerHTML = password;


}) */

// is checkBox is checked?

/* checkBox1.addEventListener("change",()=>{
  console.log(checkBox1.checked)

  if(checkBox1.checked){
    const randNumber1 = Math.floor(Math.random()*abcLength)
    const randNumber2 = Math.floor(Math.random()*abcLength)
    const randNumber3 = Math.floor(Math.random()*abcLength)
    const password = lowercaseLetters[randNumber1]+lowercaseLetters[randNumber2]+lowercaseLetters[randNumber3]
    console.log(typeof password)
  }
}) */


