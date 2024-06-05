function whatsapp(){
    window.open('https://wa.me/5511947384020?text=Ol%C3%A1%21+Eu+gostaria+de+agendar+uma+reuni%C3%A3o+para+conhecer+os+meios+de+alavancar+as+minhas+vendas+por+meio+de+an%C3%BAncios%21')
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