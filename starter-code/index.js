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



//------------------------------------- generate random index function
function randIndex(array){
    return Math.floor(Math.random()*array.length)
};




// -------------------------------------generate password function
function generatePassword(){
    let password = "";
    
    if(checkBox1.checked){
        const indexes = [
        randIndex(lowercaseLetters),
        randIndex(lowercaseLetters),
        randIndex(lowercaseLetters),
    ];
       password += indexes.map((index)=>lowercaseLetters[index]).join("")
      
    }
    
    if(checkBox2.checked){
        const indexes = [
            randIndex(uppercaseLetters),
            randIndex(uppercaseLetters),
            randIndex(uppercaseLetters),
        ];
        password += indexes.map((index)=>uppercaseLetters[index]).join("")
       
      }
    if(checkBox3.checked){
        const indexes = [
            randIndex(allNr),
            randIndex(allNr),
            randIndex(allNr),
        ];
        password += indexes.map((index)=>allNr[index]).join("")
       
      }

    
    return password;
    
   
    
    
}

/* -----------Fisher-Yates Shuffle---------------- */

function shuffleFunc(fullArr){
   
    console.log(fullArr,"fullArr")

    const shuffledArray = [...fullArr]
    console.log(shuffledArray,"shuffledArr")

   let temp = ""
   let i = fullArr.length

   while(--i>0){
    const j = Math.floor(Math.random()*(shuffledArray.length))
   temp = shuffledArray[j]
   shuffledArray[j]=shuffledArray[i]
   shuffledArray[i]=temp;
   
   return shuffledArray
   }
}








// click event on btn
btn.addEventListener("click",()=>{
    if(checkBox1.checked){
        
   
        const fullShaffledPassword = shuffleFunc(generatePassword());
   

        displayPassword.innerHTML = fullShaffledPassword;
       
    }else{
        console.log("you have to check one of the boxes")
    }
})