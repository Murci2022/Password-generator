const btn = document.getElementById("btn")
const displayPassword = document.getElementById("header-title")
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const checkBox3 = document.getElementById("checkbox3");
/* initial password */







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



// generate random index function
function randIndex(array){
    return Math.floor(Math.random()*array.length)
}

;

console.log(randIndex(allNr))




// generate password function
function generatePassword(){
    let password = "";
    
    const indexes = [
        randIndex(lowercaseLetters),
        randIndex(lowercaseLetters),
        randIndex(lowercaseLetters),
    ]
    password += indexes.map((index)=>lowercaseLetters[index])
    
    
    return password
    
    
}

/* -----------Fisher-Yates Shuffle---------------- */



// click event on btn
btn.addEventListener("click",()=>{
    if(checkBox1.checked){
       console.log(generatePassword()) 
    }else{
        console.log("not checked")
    }
    
})