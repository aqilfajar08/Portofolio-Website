// h1
const videos = document.querySelectorAll('.hover-video');

videos.forEach(video => {
    video.parentElement.addEventListener('mouseover', () => {
        video.play();
    });
    
    video.parentElement.addEventListener('mouseout', () => {
        video.pause();
    });
});