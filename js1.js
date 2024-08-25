
let none1=document.getElementById("none")
let block1=document.getElementById("block")
let btn=document.getElementById("btn")
console.log(none1)
console.log(block1)
  function block(){

btn.style.display='none'
none1.style.display='block'
block1.style.display='none'

}

const btns = document.querySelector('.btn'); // Use the correct class or ID
btns.onclick = () => {
    document.querySelector('.con3').scrollIntoView({ behavior: 'smooth' });
};