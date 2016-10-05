$(window).ready(function(){
	
   // var audio = $("#audio1");
    var audio = document.getElementById('audio1');
   // audio.play();
    var ctx = new AudioContext();
    var analyser = ctx.createAnalyser();
    console.log("audio: " + audio.currentSrc + " ready state: " + audio.readyState);
    var audioSource = ctx.createMediaElementSource(audio);
    audioSource.connect(analyser);
    audioSource.connect(ctx.destination);
    
    var frequencyData = new Uint8Array(analyser.frequencyBinCount);
    /* I did not know what a "Uint8Array" was. It's actually an array of 8-bit integers
    Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
    */
    
    function renderFrame() {
        requestAnimationFrame(renderFrame);
        analyser.getByteFrequencyData(frequencyData);
        console.log(frequencyData); // now you can read the frequency data!
    }
    
    audio.play();
    renderFrame();
});

