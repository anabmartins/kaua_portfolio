let trimestre = ''
tri1 = document.getElementById('tri1')
tri2 = document.getElementById('tri2')
tri3 = document.getElementById('tri3')

function setTrimestre(tri) {
    trimestre = tri;

    // Verifica o valor de `trimestre` e redireciona para a página correspondente
    if (trimestre === 'tri1') {
        window.location.href = 'curriculo.html';
    } else if (trimestre === 'tri2') {
        window.location.href = 'pagina_trimestre2.html';
    } else if (trimestre === 'tri3') {
        window.location.href = 'pagina_trimestre3.html';
    }
}