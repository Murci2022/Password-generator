const btn = document.getElementById("btn")
const abc = ["a","b","c"]
const abcLength = abc.length

/* abc */
const lowercaseLetters = Array.from({length: 26}, (_, index) => String.fromCharCode(97 + index));
console.log(lowercaseLetters);



// make a func which 
btn.addEventListener("click",()=>{
    const randNumber = Math.floor(Math.random()*abcLength)
    console.log(randNumber)
    console.log(abc[randNumber])
})