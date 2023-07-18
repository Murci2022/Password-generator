const btn = document.getElementById("btn")
const displayPassword = document.getElementById("header-title")
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const checkBox3 = document.getElementById("checkbox3");
const checkBox4 = document.getElementById("checkbox4");
const nrConti = document.getElementById("nr")
const copyBtn = document.getElementById("header-icon")
const password = document.getElementById("header-title")
const svgTitle = document.getElementById("svg-title")
const resetBtn = document.getElementById("btn-reset")

const slider = document.getElementById("slider");

/* initial  */
let displayNr = 8;







/* abc LOWER*/
const lowercaseLetters = Array.from({length: 26}, (_, index) => String.fromCharCode(97 + index));


/* abc UPPER */
const uppercaseLetters = Array.from({ length: 26 }, (_, index) =>
String.fromCharCode(65 + index)
);

/* nr */
const allNr = [0,1,2,3,4,5,6,7,8,9];

/* symbols */
const allSymbols = [
    "!", "@", "#", "$", "%",  "&", "*","+",
  ];
  

/* length */
const abcLength = lowercaseLetters.length;
const allNrLength = allNr.length;


/* function slide */




//------------------------------------- generate random index function
function randIndex(array){
    return Math.floor(Math.random()*array.length)
};


/* funcTEst */


function testFunc(test){
    console.log(test,"test")
}



// -------------------------------------generate password function
function generatePassword(){

    
    let password = "";
    
    if(checkBox1.checked){
        const indexes = [
            randIndex(lowercaseLetters),
            randIndex(lowercaseLetters),
            randIndex(lowercaseLetters),
            randIndex(lowercaseLetters),
            randIndex(lowercaseLetters),
            randIndex(lowercaseLetters),
            randIndex(lowercaseLetters),
            randIndex(lowercaseLetters),
            randIndex(lowercaseLetters),
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
            randIndex(uppercaseLetters),
            randIndex(uppercaseLetters),
            randIndex(uppercaseLetters),
            randIndex(uppercaseLetters),
            randIndex(uppercaseLetters),
            randIndex(uppercaseLetters),
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
            randIndex(allNr),
            randIndex(allNr),
            randIndex(allNr),
            randIndex(allNr),
            randIndex(allNr),
            randIndex(allNr),
            randIndex(allNr),
            randIndex(allNr),
            randIndex(allNr),
        ];
        password += indexes.map((index)=>allNr[index]).join("")
        
    }
    if(checkBox4.checked){
        const indexes = [
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
            randIndex(allSymbols),
        ];
        password += indexes.map((index)=>allSymbols[index]).join("")
       
    }
    
    
    return password.slice();
    
    
    
    
}

/* -----------Fisher-Yates Shuffle---------------- */

function shuffleFunc(fullArr){
    const newDisplayNr = Number(displayNr);
    console.log(typeof newDisplayNr)
    
    console.log(fullArr,"fullArr")
    
    const shuffledArray = [...fullArr]
    console.log(shuffledArray,"shuffledArr")

    let temp = ""
    let i = fullArr.length
    
    while(--i>=0){
        const j = Math.floor(Math.random()*(shuffledArray.length))
   temp = shuffledArray[j]
   shuffledArray[j]=shuffledArray[i]
   shuffledArray[i]=temp;
   
}
return shuffledArray.join("").slice(0,newDisplayNr)
}








// click event on btn
btn.addEventListener("click",()=>{
    svgTitle.innerHTML = "copy to clipboard"
    if(checkBox1.checked || checkBox2 || checkBox3 || checkBox4){
        
          const endArr = shuffleFunc(generatePassword())
          
        const fullShaffledPassword = endArr ;
   

        displayPassword.innerHTML = fullShaffledPassword;
       
    }else{
        console.log("you have to check one of the boxes")
    }
})

/* slider change */

slider.addEventListener("change",(e)=>{
    displayNr = e.target.value;
    testFunc(displayNr)
    
    
    nrConti.innerHTML = displayNr;
    
    
})

/* function copyToClipboard */
function copyToClipboard(){
    console.log(password.innerText,"copyToClipboard")
    const copyText = password.innerText;
    navigator.clipboard.writeText(copyText).then(()=>{
        console.log(copyText,"copied")
    })
}

/*  copy button */

copyBtn.addEventListener("click",()=>{
    console.log("click")
    console.log(password.innerText)
    svgTitle.innerHTML ="copied!"

    setTimeout(()=>{
        svgTitle.innerHTML = "copy it again"
    },1000)
    
    copyToClipboard();
    

})

/* reset btn */

resetBtn.addEventListener("click",()=>{
    checkBox1.checked = true;
    checkBox2.checked = false;
    checkBox3.checked = false;
    checkBox4.checked = false;
    const isChecked = checkBox1.checked;
    console.log("click")
    console.log(nrConti.innerText)
    console.log(isChecked)
    console.log(checkBox2)
})


