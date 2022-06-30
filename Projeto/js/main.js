console.log("ola mundo")
const thumb = document.querySelectorAll('.imagem__thumb')
const imagem = document.querySelector('.imagem')

for(i=0; i < thumb.length; i++){
    thumb[i].addEventListener('click', function(){
        imagem.setAttribute('src', './images/image-product-2.jpg')
    })
}