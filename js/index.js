let sun = document.getElementById("sun");
sun.onclick = function(){
    sun.classList.toggle("night");
    document.body.classList.toggle("dark-theme");
}
