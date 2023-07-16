const btn = document.getElementById("btn")
const displayPassword = document.getElementById("header-title")
const checkBox1 = document.getElementById("checkbox1");





/* abc LOWER*/
const lowercaseLetters = Array.from({length: 26}, (_, index) => String.fromCharCode(97 + index));

const abcLength = lowercaseLetters.length

/* abc UPPER */
const uppercaseLetters = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);

/* const password */



//function to generate number for LOWERCASE letters
function generateNrCheckbox1(){
    const randomNr1 = Math.floor(Math.random()*abcLength)
    const randomNr2 = Math.floor(Math.random()*abcLength)
    const randomNr3 = Math.floor(Math.random()*abcLength)
    return [randomNr1,randomNr2,randomNr3]
}

//function to generate number for UPPERCASE Letters
function generateNrCheckbox2(){
    const randomNr1 = Math.floor(Math.random()*abcLength)
    const randomNr2 = Math.floor(Math.random()*abcLength)
    const randomNr3 = Math.floor(Math.random()*abcLength)
    return [randomNr1,randomNr2,randomNr3]
   
}



//function to generate lowerCaseLetters based on numbers
function genLowerLetters(numbers){
    console.log("lower",numbers)
    const newPassword = numbers.map((nr)=> lowercaseLetters[nr])
    return newPassword.join("");
}


function genUpperLetters(numbers){
    console.log("Upper",numbers)
    const newPasswordUp = numbers.map((nr)=> uppercaseLetters[nr])
    return newPasswordUp.join("");
}

genLowerLetters(generateNrCheckbox1()); //initial password
genUpperLetters(generateNrCheckbox2()); //initial password

function shuffleFunc(array){
    
    const arrLenght = array.length;
    let temp = ""
    let i = array.length;
    while(--i>0){
        
       const j = Math.ceil(Math.random()*arrLenght) ;
       temp = array[j];
       array[j] = array[i]
       array[i] = temp;
       
    }
    return array;
}

btn.addEventListener("click",()=>{
    console.log("click")
    if(checkBox1.checked){
         const newNumbers1 = generateNrCheckbox1();
         const newNumbers2 = generateNrCheckbox2()
    console.log(newNumbers1)
    console.log(newNumbers2)
    const newPassword1 = genLowerLetters(newNumbers1);
    const newPassword2 = genUpperLetters(newNumbers2);
    const newArr = [...newPassword1,...newPassword2];
    const mixedNewArr = shuffleFunc(newArr).join("")
    displayPassword.innerHTML = mixedNewArr;
   
    }else{
        return;
    }
})










//function to generate a lette







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


