document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    // Initial affichage
    content1.classList.add('active');

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            content1.classList.remove('active');
            content2.classList.add('active');
        } else {
            content2.classList.remove('active');
            content1.classList.add('active');
        }
    });
});
