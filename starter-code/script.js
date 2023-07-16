const btn = document.getElementById("btn")


/* abc */
const lowercaseLetters = Array.from({length: 26}, (_, index) => String.fromCharCode(97 + index));
console.log(typeof lowercaseLetters)
const abcLength = lowercaseLetters.length
console.log(abcLength)



// make a func which 
btn.addEventListener("click",()=>{
    const randNumber1 = Math.floor(Math.random()*abcLength)
    const randNumber2 = Math.floor(Math.random()*abcLength)
    const randNumber3 = Math.floor(Math.random()*abcLength)
    const password = lowercaseLetters[randNumber1]+lowercaseLetters[randNumber2]+lowercaseLetters[randNumber3]
    console.log(password)

})