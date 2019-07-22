window.addEventListener("load", () => {
	const sounds = document.querySelectorAll(".sound");
	const pads = document.querySelectorAll(".pads div");
	const visual = document.querySelector(".visual");
	const colors = [ "#eb6464", "#e2a163", "#eceb8b", "#7ee27e", "#77abe6", "#eb77e5" ];

	//Adding the sounds
	pads.forEach((pad, index) => {
		pad.addEventListener("click", function() {
			sounds[index].currentTime = 0;
			sounds[index].play();

			createBubbles(index);
		});
	});

	// Create bubble function
	const createBubbles = (index) => {
		const bubble = document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = "jump 1s ease";
		bubble.addEventListener("animationend", function() {
			visual.removeChild(this);
		});
	};
});
