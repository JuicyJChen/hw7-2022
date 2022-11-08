var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1');
	video.loop = false;
	video.autoplay = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume = document.querySelector("#slider").value;
	video.volume = volume / 100;
	document.querySelector("#volume").textContent = volume + '%';
 });


 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});



document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
});




document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (10/9) * video.playbackRate;
	console.log("Speed up video");
	console.log("Video Sped Down to " + video.playbackRate);
});




document.querySelector("#skip").addEventListener("click", function() {
	newTime = video.currentTime + 10;
	console.log("Skip ahead");
	if(newTime >= video.duration) {
		video.currentTime = 0;
		console.log("Video current time is " + video.currentTime);
	} 
	else {
		video.currentTime = newTime;
		console.log("Video current time is " + video.currentTime);

	}
	
});


document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		video.muted = false;
		console.log("Unmute");
		document.querySelector("#mute").textContent = 'Mute';
	} 
	else {
		video.muted = true;
		console.log("Mute");
		document.querySelector("#mute").textContent = 'Unmute';
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	volume = document.querySelector("#slider").value;
	video.volume = volume / 100;
	document.querySelector("#volume").textContent = volume + '%';
	console.log("The current value is " + video.volume);
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.className = 'oldSchool';
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = 'video';
});