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
const iconeQuantidade = document.querySelector('.icone-quantidade')
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
    
    if(quantidade.textContent != 0){

        if (iconeQuantidade.textContent == 0){
        iconeQuantidade.classList.remove('inativo');
        iconeQuantidade.textContent = quantidade.textContent;
        situacaoCart.classList.add('inativo');
    
    
        var cartDiv = document.createElement('div');
        cartDiv.classList.add('cart-produtos1');
        cartProdutos.appendChild(cartDiv);
    
        var cartImagem = document.createElement('img');
        cartImagem.setAttribute('src', `./images/image-product-1-thumbnail.jpg`);
        cartImagem.classList.add('carrinho-imagem');
        cartDiv.appendChild(cartImagem);
    
        var cartValor = document.createElement('p');
        cartValor.textContent = resumo.textContent;
        cartValor.classList.add('carrinho-descricao');
        cartDiv.appendChild(cartValor);
    
        var cartQuantidade = document.createElement('p');
        cartQuantidade.textContent = preco.textContent + "x" + quantidade.textContent + ' ' + '$' + (125 * parseInt(quantidade.textContent));
        cartQuantidade.classList.add('carrinho-descricao1');
        cartDiv.appendChild(cartQuantidade);
    
        var cartDeletar = document.createElement('img');
        cartDeletar.setAttribute('src', `./images/icon-delete.svg`);
        cartDeletar.classList.add('carrinho-deletar');
        cartDiv.appendChild(cartDeletar);
    
        const cart = document.querySelector('.cart')
        var cartBtn = document.createElement('button')
        cart.appendChild(cartBtn)
        cartBtn.textContent = "CHECKOUT"
        cartBtn.classList.add('checkout')  
        } else {
            const valorCompra = document.querySelector('.carrinho-descricao1')
            const quantidadeCart = parseInt(iconeQuantidade.textContent);
            console.log(quantidadeCart)
            let quantidadeAdicional = quantidadeCart + parseInt(quantidade.textContent);
            valorCompra.textContent = preco.textContent + "x" + quantidadeAdicional + ' ' + '$' + (125 * quantidadeAdicional);;
            iconeQuantidade.textContent = quantidadeAdicional;
        }
        
    } else {
        return;
    }


    const deletar = document.querySelector(".carrinho-deletar")
    
    deletar.addEventListener('click', function (){
        const cartProdutos = document.querySelector('.cart-produtos1');
        const checkoutBtn = document.querySelector('.checkout')
        situacaoCart.classList.toggle('inativo');
        checkoutBtn.classList.toggle('inativo')
        cartProdutos.classList.toggle('inativo')
        iconeQuantidade.textContent = 0;
        iconeQuantidade.classList.add('inativo')
        console.log(cartProdutos)
    })

    quantidade.textContent = 0;

})

