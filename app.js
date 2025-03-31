document.addEventListener('DOMContentLoaded', function() {
    // Verificar se há uma preferência salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateButtonText(savedTheme);
    }

    // Adicionar evento de clique ao botão
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        // Verificar o tema atual
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        // Alternar para o outro tema
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Aplicar o novo tema
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Salvar a preferência no localStorage
        localStorage.setItem('theme', newTheme);
        
        // Atualizar o texto do botão
        updateButtonText(newTheme);
    });
    
    // Função para atualizar o texto do botão
    function updateButtonText(theme) {
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.textContent = theme === 'dark' ? 'Modo Claro' : 'Modo Escuro';
    }
    
    // Inicializar o texto do botão
    updateButtonText(document.documentElement.getAttribute('data-theme') || 'dark');
});