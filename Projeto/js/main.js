console.log("ola mundo")
const thumb = document.querySelectorAll('.imagem__thumb')
const imagem = document.querySelector('.imagem')

const listaImagens = ['./images/image-product-1', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg']

console.log('Teste ${imagem} correto')


thumb[0].addEventListener('click', function(){
    imagem.setAttribute('src', `./images/image-product-1.jpg`)  
})
thumb[1].addEventListener('click', function(){
    imagem.setAttribute('src', `./images/image-product-2.jpg`)  
})
thumb[2].addEventListener('click', function(){
    imagem.setAttribute('src', `./images/image-product-3.jpg`)  
})
thumb[3].addEventListener('click', function(){
    imagem.setAttribute('src', `./images/image-product-4.jpg`)  
})

const aumentar = document.querySelector('.quantidade-aumentar');
const diminuir = document.querySelector('.quantidade-diminuir');
const quantidade = document.querySelector('.quantidade-numero');

aumentar.addEventListener('click', function(){
    quantidade.textContent = parseInt(quantidade.textContent) + 1;
})
diminuir.addEventListener('click', function(){
    if(quantidade.textContent > 0){
        quantidade.textContent = parseInt(quantidade.textContent) - 1;
    } else {
        quantidade.textContent = 0;
    }
})

const avatar = document.querySelector('.avatar');
const cart = document.querySelector('.cart');
avatar.addEventListener('click', function(){
    cart.classList.toggle('inativo');
})

const adicionar = document.querySelector('.adicionar')
const situacaoCart = document.querySelector('.cart-situacao')

adicionar.addEventListener('click', function(){
    console.log('ola')
    quantidade.textContent = 0;
    situacaoCart.classList.add('inativo');
    var cartQuantidade = document.createElement('p')
    var cartImagem = document.createElement('img')
    var cartBtn = document.createElement('button')
    cartQuantidade.textContent = "OI"
    cart.appendChild(cartQuantidade)
})