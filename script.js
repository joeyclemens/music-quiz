document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.querySelector('.play-button');
    const cassette = document.querySelector('.cassetteSvg');
    const audio = document.getElementById('audio');
    let isPlaying = false;

    function resetPlayerState() {
        isPlaying = false;
        cassette.classList.remove('active');
        playButton.classList.remove('stop');
        playButton.classList.add('play');
    }

    playButton.addEventListener('click', function() {
        if (isPlaying) {
            // Stop music and animation
            audio.pause();
            resetPlayerState();
        } else {
            // Start music and animation
            audio.play().catch(e => console.error('Error playing audio:', e));
            cassette.classList.add('active');
            playButton.classList.remove('play');
            playButton.classList.add('stop');
            isPlaying = true;
        }
    });

    // Listen for the 'ended' event on the audio element
    audio.addEventListener('ended', function() {
        resetPlayerState();
    });
});
