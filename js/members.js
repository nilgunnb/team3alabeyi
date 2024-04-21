let buttons = document.querySelectorAll('.links button');
for(let btn of buttons){
    btn.onclick = function(){
        let x = document.querySelector('.active');
        x.classList.remove('active');
        this.classList.add('active');
        let id = this.getAttribute('id');
        let contents = document.querySelectorAll('.contents div');
        for(let div of contents){
            if(div.id === id){
                div.classList.remove('d-none');
            }
            else{
                div.classList.add('d-none');
            }
        }
        
    }
}

let sun = document.getElementById("sun");
sun.onclick = function(){
    sun.classList.toggle("night");
    document.body.classList.toggle("dark-theme");
}
