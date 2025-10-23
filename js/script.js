
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const comments = document.getElementById('comments').value;
    
    if (name && email && country && comments) {
        alert(' DONE ✅ ');
        this.reset();
    } else {
        alert(' Please fill in all fields ⚠️');
    }
});