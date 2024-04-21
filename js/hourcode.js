let buttons = document.querySelectorAll('.links button');
for(let btn of buttons){
    btn.onclick = function(){
        let x = document.querySelector('.active');
        x.classList.remove('active');
        this.classList.add('active');
        let id = this.getAttribute('id');
        let contents = document.querySelectorAll('.content');
        for(let div of contents){
            if(div.id === id){
                div.classList.remove('d-none');
                if(div.id === '1'){
                    let buttons2 = document.querySelectorAll('.links2 button');
                    for(let btn2 of buttons2){
                        btn2.onclick = function(){
                            let y = document.querySelector('.active2');
                            y.classList.remove('active2');
                            this.classList.add('active2'); 
                            let id2 = this.getAttribute('id');
                            let contents2 = document.querySelectorAll('.content2');
                            for(let div2 of contents2){
                                if(div2.id === id2){
                                    div2.classList.remove('d-none');
                                }
                                else{
                                    div2.classList.add('d-none');
                                }
                            }
                        }
                    }
                }
                if(div.id === '2'){
                    let img = document.querySelector('.slider img');
                    let next = document.querySelector('.next');
                    let prev = document.querySelector('.prev');
                    let index = 0;
                    const slideImages = [
                        'media/photo1.jpg',
                        'media/photo2.jpg',
                        'media/photo3.jpg',
                        'media/photo4.jpg',
                        'media/photo5.jpg',
                        'media/photo6.jpg',
                        'media/photo7.jpg',
                        'media/photo8.jpg',
                        'media/photo9.jpg'
                    ]; 
                    img.src = slideImages[index];
                    function AutoPLay(){
                        index++;
                        if(index > slideImages.length-1){
                            index = 0;
                        }
                        img.src = slideImages[index];
                    }
                    next.onclick = function(){
                        AutoPLay();
                    }
                    prev.onclick = function(){
                        index--;
                        if(index === -1){
                            index = slideImages.length-1;
                        }
                        img.src = slideImages[index];
                    }
                    setInterval(() => {
                        AutoPLay();
                    }, 3000);
                }
            }
            else{
                div.classList.add('d-none');
            }
        }
        
    }
}
let buttons2 = document.querySelectorAll('.links2 button');
for(let btn2 of buttons2){
    btn2.onclick = function(){
            let y = document.querySelector('.active2');
        y.classList.remove('active2');
        this.classList.add('active2'); 
        let id2 = this.getAttribute('id');
        let contents2 = document.querySelectorAll('.content2');
        for(let div2 of contents2){
            if(div2.id === id2){
                div2.classList.remove('d-none');
            }
            else{
                div2.classList.add('d-none');
            }
        }
    }
}
let sun = document.getElementById("sun");
sun.onclick = function(){
    sun.classList.toggle("night");
    document.body.classList.toggle("dark-theme");
}
