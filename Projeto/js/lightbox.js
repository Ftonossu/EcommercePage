const lightbox = document.createElement('div');
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)


imagem.addEventListener('click', function(){
    lightbox.classList.add('active');
    console.log('clicou')
    const img = document.createElement('img')
    img.src = imagem.src
    img.classList.add('lightbox-img')
    while (lightbox.firstChild){
        lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
})

lightbox.addEventListener("click", e =>{
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})