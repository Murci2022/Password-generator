const btn = document.getElementById("btn")
const abc = ["a","b","c"]
const abcLength = abc.length


// make a func which 
btn.addEventListener("click",()=>{
    const randNumber = Math.floor(Math.random()*abcLength)
    console.log(randNumber)
})