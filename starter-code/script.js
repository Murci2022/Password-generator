const btn = document.getElementById("btn")
const displayPassword = document.getElementById("header-title")
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const checkBox3 = document.getElementById("checkbox3");





/* abc LOWER*/
const lowercaseLetters = Array.from({length: 26}, (_, index) => String.fromCharCode(97 + index));


/* abc UPPER */
const uppercaseLetters = Array.from({ length: 26 }, (_, index) =>
String.fromCharCode(65 + index)
);

/* nr */
const allNr = [0,1,2,3,4,5,6,7,8,9];

/* length */
const abcLength = lowercaseLetters.length;
const allNrLength = allNr.length;

/* ------------functions--------------------- */

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

//function to generate number for NUMBERS
function generateNrCheckbox3(){
    console.log("he")
    const randomNr1 = Math.floor(Math.random()*allNrLength)
    const randomNr2 = Math.floor(Math.random()*allNrLength)
    const randomNr3 = Math.floor(Math.random()*allNrLength)
    return [randomNr1,randomNr2,randomNr3]

}



//function to generate lowerCaseLetters based on numbers
function genLowerLetters(numbers){
    console.log("lower",numbers)
    const newPassword = numbers.map((nr)=> lowercaseLetters[nr])
    return newPassword.join("");
}

//function to generate upperCaseLetters based on numbers
function genUpperLetters(numbers){
    console.log("Upper",numbers)
    const newPasswordUp = numbers.map((nr)=> uppercaseLetters[nr])
    return newPasswordUp.join("");
}

// function to generate randomNumbers based on numbers
function genNumber(numbers){
    console.log(numbers,"numbers")
    const newPassworNr = numbers.map((nr)=>allNr[nr])
    
    return newPassworNr;
}



genLowerLetters(generateNrCheckbox1()); //initial password
genUpperLetters(generateNrCheckbox2()); //initial password
genNumber(generateNrCheckbox3());      // initial password



btn.addEventListener("click",()=>{
    console.log("click")
    if(checkBox1.checked){
         const newNumbers1 = generateNrCheckbox1();
         const newNumbers2 = generateNrCheckbox2()
         const newNubers3 = generateNrCheckbox3()

    console.log(newNumbers1)
    console.log(newNumbers2)
    console.log(newNubers3,"3")
    const newPassword1 = genLowerLetters(newNumbers1);
    const newPassword2 = genUpperLetters(newNumbers2);
    const newPassword3 = genNumber(newNubers3);
    const newArr = [...newPassword1,...newPassword2,...newPassword3];
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


