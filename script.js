const blue = document.getElementById('blue')
const red = document.getElementById('red')
const blueShoe = document.getElementById('blue-shoe')
const redShoe = document.getElementById('red-shoe')
const upper = document.getElementsByClassName('upper')[0]
const btn = document.getElementsByClassName('price')[0]


red.addEventListener('click', () =>{
    redShoe.style.transform = 'translateX(0)'
    redShoe.style.opacity = '1'
    blueShoe.style.transform = 'translateX(-300px)'
    blueShoe.style.opacity = '0'
    upper.style.backgroundColor = 'rgb(231, 73, 33)'
    btn.style.backgroundColor = 'rgb(231, 73, 33)'
    btn.style.boxShadow = '2px 2px 2px 0 rgb(214, 81, 42)'
})

blue.addEventListener('click', () =>{
    redShoe.style.transform = 'translateX(300px)'
    redShoe.style.opacity = '0'
    blueShoe.style.transform = 'translateX(0)'
    blueShoe.style.opacity = '1'
    upper.style.backgroundColor = 'rgb(72, 72, 196)'
    btn.style.backgroundColor = 'rgb(72, 72, 196)'
    btn.style.boxShadow = '2px 2px 2px 0 rgb(72, 72, 196)'
})
