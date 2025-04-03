document.querySelectorAll('.nav-bottom-project-list-item').forEach(item => {
    item.addEventListener('click', function(event) {
        const link = this.closest('a'); // Find the closest <a> tag
        if (link) {
            window.location.href = link.href; // Redirect to the link immediately
        }
    });
});