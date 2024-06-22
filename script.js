function whatsapp(){
    window.open('https://wa.me/5511990138393?text=Ol%C3%A1%21+Eu+gostaria+de+agendar+uma+reuni%C3%A3o+%21')
    gtag('event', 'conversion', {'send_to': 'AW-16617908255/laqzCNOSxLwZEJ_QhPQ9'});
}

document.addEventListener('DOMContentLoaded', function() {
    var video = document.querySelector('video');
    var playPromise = video.play();
    
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Automatic playback started!
        }).catch(error => {
            // Auto-play was prevented
            // Show a UI element to let the user manually start playback
            video.muted = true;
            video.play();
        });
    }
});

function goToBtn(){
    window.scrollTo({
        top: 155,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
        function showNextSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }
        console.log(currentIndex)
        setInterval(showNextSlide, 5000);
        slides[currentIndex].classList.add('active');
});

