const lightbox = document.createElement('div');
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

imagem.addEventListener('click', function(){
    //ativa ligthbox
    lightbox.classList.add('active');

    //cria objeto de imagem
    const img = document.createElement('img')
    img.src = imagem.src
    img.classList.add('lightbox-img')

    //ícone para fechar o lightbox
    const fechar = document.createElement('img')
    fechar.classList.add('fechar')
    fechar.setAttribute('src', `./images/icon-close.svg`)
    
    //ícone para próxima foto
    const proximaImagem = document.createElement('img')
    proximaImagem.classList.add('proxima-imagem')
    proximaImagem.setAttribute('src', `./images/icon-next.svg`)

    //ícone para foto anterior
    const anteriorImagem = document.createElement('img')
    anteriorImagem.classList.add('anterior-imagem')
    anteriorImagem.setAttribute('src', `./images/icon-previous.svg`)

    //criaçao e estilo thumb1
    const thumb1 = document.createElement('img')
    thumb1.src = thumb[0].src
    thumb1.classList.add('thumb-imagem')
    thumb1.addEventListener("click", function(){
        imgSrc = 1;
        imgLightBox.setAttribute('src', `./images/image-product-1.jpg`);
    })

    //criaçao e estilo thumb2
    const thumb2 = document.createElement('img')
    thumb2.src = thumb[1].src
    thumb2.classList.add('thumb-imagem')
    thumb2.addEventListener("click", function(){
        imgSrc = 2;
        imgLightBox.setAttribute('src', `./images/image-product-2.jpg`);
    })

    //criaçao e estilo thumb3
    const thumb3 = document.createElement('img')
    thumb3.src = thumb[2].src
    thumb3.classList.add('thumb-imagem')
    thumb3.addEventListener("click", function(){
        imgSrc = 3;
        imgLightBox.setAttribute('src', `./images/image-product-3.jpg`);
    })
    
    //criaçao e estilo thumb4
    const thumb4 = document.createElement('img')
    thumb4.src = thumb[3].src
    thumb4.classList.add('thumb-imagem')
    thumb4.addEventListener("click", function(){
        imgSrc = 4;
        imgLightBox.setAttribute('src', `./images/image-product-4.jpg`);
    })

    const thumbs = document.createElement('div')
    thumbs.classList.add('thumbs-lightbox')
    thumbs.appendChild(thumb1)
    thumbs.appendChild(thumb2)
    thumbs.appendChild(thumb3)
    thumbs.appendChild(thumb4)

    //impede repetição
    while (lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild)
    }

    lightbox.appendChild(img)
    let imgLightBox = document.querySelector('.lightbox-img');
    lightbox.appendChild(fechar)
    lightbox.appendChild(proximaImagem)
    lightbox.appendChild(anteriorImagem)
    lightbox.appendChild(thumbs)

    //funcionalidade botao fechar
    const btnFechar = document.querySelector('.fechar')
    btnFechar.addEventListener('click', function(){
    lightbox.classList.remove('active')
    
    })

    //funcionalidade botao próximo
    const btnProximo = document.querySelector('.proxima-imagem')
    
    btnProximo.addEventListener('click', function(){
        let imgLightBox = document.querySelector('.lightbox-img');
        if (imgSrc < 4){
            imgSrc = imgSrc + 1
            imgLightBox.setAttribute('src', `./images/image-product-${imgSrc}.jpg`);
            console.log(imgSrc)
        } else {
            imgSrc = 1
            imgLightBox.setAttribute('src', `./images/image-product-${imgSrc}.jpg`);
            console.log(imgSrc) 
        } 
    })

    //funcionalidade botao anterior
    const btnAnterior = document.querySelector('.anterior-imagem')
    
    btnAnterior.addEventListener('click', function(){
        let imgLightBox = document.querySelector('.lightbox-img');
        if (imgSrc > 1){
            imgSrc = imgSrc - 1
            imgLightBox.setAttribute('src', `./images/image-product-${imgSrc}.jpg`);
            console.log(imgSrc)
        } else {
            imgSrc = 4
            imgLightBox.setAttribute('src', `./images/image-product-${imgSrc}.jpg`);
            console.log(imgSrc) 
        } 
    })

})

lightbox.addEventListener("click", e =>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})