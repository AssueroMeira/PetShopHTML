function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Inicialmente mostrar a primeira seção
document.getElementById('home').style.display = 'block';
document.getElementById('home-content').style.display = 'flex';

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário
    const email = document.getElementById('email').value;
    document.getElementById('nomeTutor').textContent = email.split('@')[0]; // Exibir o nome do tutor
    showSection('escolherPet');
});

function selectPet(petName) {
    document.getElementById('petName').textContent = petName;
    showSection('petDetails');
}

// Função para transição automática do carrossel
document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
        interval: 3000,
        ride: 'carousel'
    });
});
