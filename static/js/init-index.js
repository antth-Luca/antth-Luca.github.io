function describeCourse(key) {
    const curso = cursos[key];
    if (!curso) return;

    document.getElementById('nome-curso').textContent = curso.titulo;
    document.getElementById('dados-curso').textContent = `${curso.instituicao} - ${curso.modalidade} - ${curso.duracao} horas`;
    document.getElementById('periodo-curso').textContent = `Início ${curso.inicio} - Término ${curso.termino}`;
    document.getElementById('acesso-curso').href = curso.disponivel;

    const modal = new bootstrap.Modal(document.getElementById('genericModal'));
    modal.show();
}


// Instrução dinâmica do cartão de apresentação
function isTouchDevice() {
    // Método 1: Usar maxTouchPoints (mais moderno e confiável)
    const hasTouchPoints = 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;

    // Método 2: Verificar pointer coarse (entrada de toque mais imprecisa)
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    // Método 3: Verificar ontouchstart (método mais antigo, mas ainda válido em alguns casos)
    const hasTouchEvent = 'ontouchstart' in window;

    // Combinação de todos os métodos
    return hasTouchPoints || hasCoarsePointer || hasTouchEvent;
}

const pInstrucao = document.getElementById("instrucao-dinam");
if (!isTouchDevice()) {
    pInstrucao.textContent = "Hover me!";
}


// Soma de horas dos cursos
function somarDuracoes(cursos) {
    let total = 0;

    for (const key in cursos) {
        const duracao = parseFloat(cursos[key].duracao);
        if (!isNaN(duracao)) total += duracao;
    };

    return total;
}

let cursos = {};
fetch('https://antth-luca.github.io/static/js/dados_cursos.json')
    .then(res => res.json())
    .then(data => {
        cursos = data;
        const totalHoras = somarDuracoes(cursos);
        document.getElementById('soma-cursos').textContent = `Soma de horas dos cursos: ${totalHoras} horas`;
    });
