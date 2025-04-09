// Initialize Lucide icons
lucide.createIcons();

// Player state
let isPlaying = false;

// DOM Elements
const playButton = document.getElementById('playButton');
const volumeSlider = document.querySelector('.volume-slider');

// Toggle play/pause
playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    const icon = playButton.querySelector('i');
    
    if (isPlaying) {
        icon.setAttribute('data-lucide', 'pause');
    } else {
        icon.setAttribute('data-lucide', 'play');
    }
    
    lucide.createIcons();
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
    const volume = e.target.value;
    // In a real app, this would control audio volume
    console.log('Volume:', volume);
});

// Make playlist and song cards clickable
document.querySelectorAll('.playlist-card, .song-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        console.log('Selected:', title);
    });
});

// Make playlist items clickable
document.querySelectorAll('.playlist-item').forEach(item => {
    item.addEventListener('click', () => {
        console.log('Selected playlist:', item.textContent);
    });
});