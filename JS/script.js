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
    document.getElementById('userName').textContent = email;
    showSection('bemvindo');
});

function selectPet(petName) {
    document.getElementById('petName').textContent = petName;
    showSection('petDetails');
}

$(function () {
    $("#datepicker-banho, #datepicker-tosa, #datepicker-taxi").datepicker({
        onSelect: function (dateText, inst) {
            console.log(dateText);
        }
    });
});
