window.addEventListener('scroll', function() {
    const capa = document.getElementById('capa-rolante');
    const instruc = document.getElementById('instrucao');
    const name = document.getElementById('name');
    const anuncio = document.getElementById('anuncio');
    const resumo = document.getElementById('resumo');

    if (window.scrollY > 0) {
        capa.style.height = '64px';
        instruc.classList.add('hidden');
        name.classList.remove('hidden');
        name.classList.add('text-name');
        setTimeout(()=>{
            anuncio.classList.remove('hidden');
            anuncio.classList.add('text-anuncio');

            setTimeout(()=>{
                resumo.classList.remove('hidden');
            }, 1800);
        }, 1500);
    } else {
        capa.style.height = '100%';
        instruc.classList.remove('hidden');
        name.classList.add('hidden');
        name.classList.remove('text-name');
        resumo.classList.add('hidden');
        anuncio.classList.remove('text-anuncio');
    }
});