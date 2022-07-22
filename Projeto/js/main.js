// Mudança de imagens
const thumb = document.querySelectorAll('.imagem__thumb')
const imagem = document.querySelector('.imagem')


console.log('Teste ${imagem} correto')
let imgSrc = 1
// Mudar imagem através do clique na thumb

for(let i = 0; i < thumb.length; i++){
    thumb[i].addEventListener('click', function(){
        imgSrc = i + 1;
        mudarImagem(imagem, imgSrc);   
    })
}


function mudarImagem(element, indice){
    element.setAttribute('src', `./images/image-product-${indice}.jpg`)
}

// aumentar e diminuir número de itens a serem comprados
const aumentar = document.querySelector('.quantidade-aumentar');
const diminuir = document.querySelector('.quantidade-diminuir');
var quantidade = document.querySelector('.quantidade-numero');

aumentar.addEventListener('click', function(){
    quantidade.textContent = parseInt(quantidade.textContent) + 1;
    return quantidade.textContent;
})
diminuir.addEventListener('click', function(){
    if(quantidade.textContent > 0){
        quantidade.textContent = parseInt(quantidade.textContent) - 1;
    } else {
        quantidade.textContent = 0;
    }
})

//declaração alterações de carrinho
const carrinho = document.querySelector('.carrinho');
const cart = document.querySelector('.cart');
const iconeQuantidade = document.querySelector('.icone-quantidade')
//mostra ou esconde carrinho
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
    
        //adiciona div no carrinho
        var cartDiv = document.createElement('div');
        cartDiv.classList.add('cart-produtos1');
        cartDiv.id = 'cartProdutos'
        cartProdutos.appendChild(cartDiv);
    
        //adiciona imagem no carrinho
        var cartImagem = document.createElement('img');
        cartImagem.setAttribute('src', `./images/image-product-1-thumbnail.jpg`);
        cartImagem.classList.add('carrinho-imagem');
        cartDiv.appendChild(cartImagem);
        
        //adiciona descrição do item no carrinho
        var cartValor = document.createElement('p');
        cartValor.textContent = resumo.textContent;
        cartValor.classList.add('carrinho-descricao');
        cartDiv.appendChild(cartValor);
            
        //adiciona quantidade, preço e valor final no carrinho
        var cartQuantidade = document.createElement('p');
        cartQuantidade.textContent = preco.textContent + "x" + quantidade.textContent + ' ' + '$' + (125 * parseInt(quantidade.textContent));
        cartQuantidade.classList.add('carrinho-descricao1');
        cartDiv.appendChild(cartQuantidade);
    
        //adiciona ícone de deletar
        var cartDeletar = document.createElement('img');
        cartDeletar.setAttribute('src', `./images/icon-delete.svg`);
        cartDeletar.classList.add('carrinho-deletar');
        cartDiv.appendChild(cartDeletar);
    
        //adiciona botão de checkout
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
        //remove o botão
        const checkoutBtn = document.querySelector('.checkout');
        cart.removeChild(checkoutBtn);

        // checkoutBtn.classList.toggle('inativo');
        
        situacaoCart.classList.toggle('inativo');

        iconeQuantidade.textContent = 0;
        iconeQuantidade.classList.add('inativo');

        const cartProdutos1 = document.querySelector('.cart-produtos1')
        cartProdutos.removeChild(cartProdutos1)
    })

    quantidade.textContent = 0;

})

