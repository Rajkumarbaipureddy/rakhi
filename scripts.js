document.addEventListener('DOMContentLoaded', () => {
    // Surprise Box Functionality
    const surpriseBox = document.querySelector('.surprise-box');
    const surpriseMessage = document.getElementById('surprise-message');

    surpriseBox.addEventListener('click', function() {
        if (surpriseMessage.classList.contains('show')) {
            surpriseMessage.classList.remove('show');
        } else {
            surpriseMessage.classList.add('show');
        }
    });
});
