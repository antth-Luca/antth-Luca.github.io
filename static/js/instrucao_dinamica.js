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