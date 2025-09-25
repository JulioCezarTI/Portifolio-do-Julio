document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links de navegação que começam com '#'
    const linksInternos = document.querySelectorAll('nav a[href^="#"]');

    linksInternos.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o comportamento padrão de pular para a seção
            event.preventDefault();

            const href = this.getAttribute('href');
            const secao = document.querySelector(href);

            // Rola suavemente para a seção
            secao.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});