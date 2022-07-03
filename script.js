let bg = document.querySelector('body')
const click = document.querySelector('.click')
const save = document.querySelector('.save')
const savedColor =document.querySelector('.savedColor')
let bgcolor = document.querySelector('.bgColor')
let grayCheck = document.querySelector('#graycheck')
let saveColor = []
let rgbColor = 'rgb(255,0,0)'
let gameover = false
bgcolor.innerText = rgbColor

click.addEventListener('click',function(){
    console.log('clicked')
    let colorValueR = Math.floor(Math.random()*256)
    let colorValueG = Math.floor(Math.random()*256)
    let colorValueB = Math.floor(Math.random()*256)
if (!(grayCheck.checked)){
    setTimeout(() => {
         bg.style.backgroundColor = rgbColor
         bgcolor.innerText = rgbColor
         gameover = false
    }, 1);
   return (rgbColor = `rgb(${colorValueR}, ${colorValueG}, ${colorValueB})`)
}else{
    let gValue = Math.floor((colorValueR + colorValueG + colorValueB)/3)

    setTimeout(() => {
        bg.style.backgroundColor = rgbColor
        bgcolor.innerText = rgbColor
        gameover = false
   }, 1);
  return (rgbColor = `rgb(${gValue},${gValue},${gValue})`)
}
})

save.addEventListener('click',function(){
  while(!gameover) {
saveColor.push(rgbColor)
let btn = document.createElement('input')
btn.type = 'button'
document.body.appendChild(btn)

    for (let color of saveColor) {
    rgbColor = color

btn.style.backgroundColor = rgbColor
console.log(`saved ${color}`)
btn.addEventListener('click',function(){
    rgbColor = color
    bg.style.backgroundColor = color
    console.log( 'save clicked')
    console.dir(color)
    bgcolor.innerText = color
    
    if (bgcolor.innerText = color){gameover = true}
})
}

console.log(saveColor)
gameover = true
}})


