const fotosAnimais = document.querySelectorAll('.fotoAlbum');
const menu = document.querySelector('.menu');
const menu2 = document.querySelector('.menu2');
const modal = document.querySelector('.modal');
const imagemModal = document.querySelector('.imgModal');


const imagemLikeModal = document.querySelector('.likeModal');
const imagemLikeCard = document.querySelectorAll('.likeCard');


const imagemAbrirMenu = document.querySelector('.imagemAbrirMenu');
const imagemFecharMenu = document.querySelector('.imagemFecharMenu');
const imagemFecharModal = document.querySelector('.fecharModal ');
const fotoAnterior = document.querySelector('.fotoAnterior');
const fotoPosterior = document.querySelector('.fotoPosterior');

let index2;

function abrirModal(src, index) {

    if (index === 0) {
        fotoAnterior.style.display = 'none';
    } else if (index === fotosAnimais.length - 1) {
        fotoPosterior.style.display = 'none';
    }
    modal.style.display = 'flex';
    imagemModal.src = src;
    index2 = index;
}

fotosAnimais.forEach((leitorImagens, index) => {
    leitorImagens.addEventListener('click', function (evento) {
        abrirModal(evento.target.src, index)
    })

});
imagemFecharModal.addEventListener('click', function () {

    modal.style.display = 'none';
});
imagemAbrirMenu.addEventListener('click', function () {
    menu.style.display = 'none'
    menu2.style.display = 'flex'

})
imagemFecharMenu.addEventListener('click', function () {
    menu.style.display = 'flex'
    menu2.style.display = 'none'

})
fotoPosterior.addEventListener('click', function () {
    if (index2 === fotosAnimais.length - 1) {
        fotoPosterior.style.display = 'none';

    }
    else if (index2 >= 0 && index2 < fotosAnimais.length - 1) {
        index2++;
        if (index2 === fotosAnimais.length - 1) {
            fotoPosterior.style.display = 'none';
        }
        imagemModal.src = fotosAnimais[index2].src
        fotoAnterior.style.display = 'flex';
    }

    if (imagemLikeCard[index2].style.display === 'flex') {
        imagemLikeModal.style.display = 'flex'

    }
    else if (imagemLikeCard[index2].style.display === '' || imagemLikeCard[index2].style.display === 'none') {
        imagemLikeModal.style.display = 'none'
    }


});
fotoAnterior.addEventListener('click', function () {
    if (index2 === 0) {
        fotoAnterior.style.display = 'none';

    }
    else if (index2 <= fotosAnimais.length && index2 > 0) {
        index2--;
        if (index2 === 0) {
            fotoAnterior.style.display = 'none';
        }
        imagemModal.src = fotosAnimais[index2].src
        fotoPosterior.style.display = 'flex';
    }

    if (imagemLikeCard[index2].style.display === 'flex') {
        imagemLikeModal.style.display = 'flex'

    }
    else if (imagemLikeCard[index2].style.display === '' || imagemLikeCard[index2].style.display === 'none') {
        imagemLikeModal.style.display = 'none'
    }
})

imagemModal.addEventListener('dblclick', function () {

    console.log(imagemLikeCard[index2].style.display);
    if (imagemLikeCard[index2].style.display === 'flex') {
        imagemLikeCard[index2].style.display = 'none'
        imagemLikeModal.style.display = 'none'

    }
    else if (imagemLikeCard[index2].style.display === '' || imagemLikeCard[index2].style.display === 'none') {
        imagemLikeCard[index2].style.display = 'flex'
        imagemLikeModal.style.display = 'flex'

    }
});

