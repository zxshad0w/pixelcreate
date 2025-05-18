var IS_CLICKED = false 
let CURRENT_COLOR = "gray"
let all = document.querySelector('.zalivka')
let cont = document.querySelector(".grid")

for (let i = 0; i < 900; i++){
    let cell = document.createElement("div")
    cell.classList.add("cell")
    cont.appendChild(cell);
}

document.addEventListener("mousedown", function(){
    IS_CLICKED = true
})

document.addEventListener("mouseup", function(){
    IS_CLICKED = false
})



let cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
    cell.addEventListener("mouseover", function(){
        if(IS_CLICKED){
            anime({
                targets: cell,
                duration: 10,
                background: CURRENT_COLOR
            })
        }
    })
    all.addEventListener("click", function(){
        cell.style.backgroundColor = CURRENT_COLOR
    })

})
cells.forEach(cell => {
    cell.addEventListener("click", function(){
            anime({
                targets: cell,
                duration: 10,
                background: CURRENT_COLOR
            })
    })
})




let color_cells = document.querySelectorAll(".color-cell")
color_cells.forEach(color_cell =>{
    color_cell.addEventListener("click", function(){
        CURRENT_COLOR = getComputedStyle(color_cell).backgroundColor
        anime({
            targets: color_cell,
            scale: 1.2,
            boxShadow: ['0 2px 5px rgba(0, 0, 0, 0.2)', '0 4px 20px rgba(0, 0, 0, 0.3)'],
            duration: 300,
            easing: 'easeInOutQuad',
            complete: () => {
                // Возврат к исходному размеру
                anime({
                    targets: color_cell,
                    boxShadow: ['0 4px 20px rgba(0, 0, 0, 0.3)', '0 2px 5px rgba(0, 0, 0, 0.2)'],
                    scale: 1,
                    duration: 300,
                    easing: 'easeInOutQuad'
                });
            }
        });
    })
})




document.getElementById("dowload").addEventListener("click", function(){
    domtoimage.toJpeg(document.getElementById('my-node'), { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.PDF';
        link.href = dataUrl;
        link.click();
    });

})
