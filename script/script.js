let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

//console.log(`canvas.width = ${canvas.width}`)
//console.log(canvas.width)



function animate() {

    //requestAnimationFrame(animate)

    ctx.clearRect(0, 0, innerWidth, innerHeight )

    let x = Math.floor(Math.random() * 100);
    let y = Math.floor(Math.random() * 100);
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    //Math.random * 100;

    ctx.beginPath();
    ctx.moveTo(x, y); //x, y
    ctx.lineTo(x * 100, y * 100); //x, y
    ctx.lineWidth = 20; //value
    ctx.strokeStyle = `rgb(${r}, ${g}, ${b} )` // r, g,
    ctx.stroke();
}

//animate();

window.setInterval(animate, 100)


