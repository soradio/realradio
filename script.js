$(document).ready(function(){
		//Your Script Goes Here
		$(".spinner-wrap").click(function(){
			var $this = $(this),
					audio = $this.siblings('audio')[0],
					bpm = Number($this.siblings('audio').data('bpm'));

					console.log(bpm);
					

					if(audio.paused ==  false) {
						audio.pause();
						audio.currentTime = 0;
						$this.removeClass('playing');
					} else {
						audio.play();
						$this.addClass('playing');
					}
		});
	});