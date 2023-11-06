var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause video");
	video.pause();
});

