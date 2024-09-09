const playButton = document.querySelector('.play-button');
const cassette = document.querySelector('.cassetteSvg');

playButton.addEventListener('click', function () {
    // Toggle play/stop button style
    playButton.classList.toggle('stop');

    // Toggle animation state for the cassette
    if (playButton.classList.contains('stop')) {
        // Start the animation
        cassette.classList.add('active');
    } else {
        // Stop the animation
        cassette.classList.remove('active');
    }
});
