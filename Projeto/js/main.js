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
var quantidade = document.querySelector('.quantidade-numero');

aumentar.addEventListener('click', function(){
    quantidade.textContent = parseInt(quantidade.textContent) + 1
    return quantidade.textContent;
})
diminuir.addEventListener('click', function(){
    if(quantidade.textContent > 0){
        quantidade.textContent = parseInt(quantidade.textContent) - 1;
    } else {
        quantidade.textContent = 0;
    }
})

const carrinho = document.querySelector('.carrinho');
const cart = document.querySelector('.cart');
carrinho.addEventListener('click', function(){
    cart.classList.toggle('inativo');
})

const adicionar = document.querySelector('.adicionar')
const cartProdutos = document.querySelector('.cart-produtos')
const situacaoCart = document.querySelector('.cart-situacao')
let resumo = document.querySelector('.produto-descricao')
let preco = document.querySelector('.preco-final')

console.log(cartProdutos)
adicionar.addEventListener('click', function(){
    situacaoCart.classList.add('inativo');

    var cartDiv = document.createElement('div')
    cartDiv.classList.add('.cart-produtos')
    cartProdutos.appendChild(cartDiv)

    var cartImagem = document.createElement('img')
    cartImagem.setAttribute('src', `./images/image-product-1-thumbnail.jpg`)
    cartImagem.classList.add('carrinho-imagem')
    cartDiv.appendChild(cartImagem)

    var cartValor = document.createElement('p')
    cartValor.textContent = resumo.textContent
    cartValor.classList.add('carrinho-descricao')
    cartDiv.appendChild(cartValor)

    var cartQuantidade = document.createElement('p')
    cartQuantidade.textContent = preco.textContent + "x" + quantidade.textContent + '$' + (125 * parseInt(quantidade.textContent))
    cartQuantidade.classList.add('carrinho-descricao')
    cartDiv.appendChild(cartQuantidade)
    
    // var cartBtn = document.createElement('button')
    // cartProdutos.appendChild(cartBtn)
    // cartBtn.textContent = "CHECKOUT"
    // cartBtn.classList.add('checkout')
    console.log(quantidade.textContent)
    quantidade.textContent = 0;
})


console.log(teste.textContent)