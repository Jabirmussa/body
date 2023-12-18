const Header = document.querySelector ("header")
window.addEventListener ("scroll", ()=>{
    console.log(window.scrollY)
    if(window.scrollY>0){
        Header.classList.add("headeractive")
    }
    else {
        Header.classList.remove("headeractive")
    }
})