window.addEventListener('scroll', function() {
    const capa = document.getElementById('capa-rolante');
    const instruc = document.getElementById('instrucao');
    const name = document.getElementById('name');

    if (window.scrollY > 0) {
        capa.style.height = '64px';
        instruc.classList.add('hidden');
        name.classList.remove('hidden');
        name.classList.add('text-name');
    } else {
        capa.style.height = '100vh';
        instruc.classList.remove('hidden');
        name.classList.add('hidden');
        name.classList.remove('text-name');
    }
});