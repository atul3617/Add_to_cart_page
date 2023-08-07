const div1 = document.querySelector('#one')
const div2 = document.querySelector('#two')
const div3 = document.querySelector('#three')

const hiddenDiv1 = document.querySelector('#one__hidden')
const hiddenDiv2 = document.querySelector('#two__hidden')
const hiddenDiv3 = document.querySelector('#three__hidden')

div1.addEventListener("click",(e)=>{
    e.stopPropagation()
    hiddenDiv1.style.display = "block"
    hiddenDiv2.style.display = "none"
    hiddenDiv3.style.display = "none"
    div1.style.border = "2px solid rgb(2, 100, 78)"
    div2.style.border = "2px solid gray"
    div3.style.border = "2px solid gray"
})

div2.addEventListener("click",(e)=>{
    e.stopPropagation()
    hiddenDiv1.style.display = "none"
    hiddenDiv2.style.display = "block"
    hiddenDiv3.style.display = "none"
    div1.style.border = "2px solid gray"
    div2.style.border = "2px solid rgb(2, 100, 78)"
    div3.style.border = "2px solid gray"
})

div3.addEventListener("click",(e)=>{
    e.stopPropagation()
    hiddenDiv1.style.display = "none"
    hiddenDiv2.style.display = "none"
    hiddenDiv3.style.display = "block"
    div1.style.border = "2px solid gray"
    div2.style.border = "2px solid gray"
    div3.style.border = "2px solid rgb(2, 100, 78)"
})

function handleClick(e){
console.log(e);
}
