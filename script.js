const img = document.getElementById('img')
const hover = document.getElementById("hover")
img.addEventListener('mouseenter', ()=>{
    hover.classList.add("hoverVisible")
})
img.addEventListener('mouseleave', ()=>{
    if(hover.classList.contains("hoverVisible")){
        hover.classList.remove("hoverVisible")
    }
})