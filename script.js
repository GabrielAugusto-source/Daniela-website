
    window.onscroll = function() { // <--- AQUI ABRE A CHAVE
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('header-small');
        } else {
            header.classList.remove('header-small');
        }
    }; // <--- AQUI FECHA A CHAVE E COLOCA O PONTO E VÍRGULA

