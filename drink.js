var drinkCount = 0;
var drinkSounds = ["alarm.mp3", 
					"brontosaurus.mp3", 
					"cheersIntro.mp3", 
					"dino.mp3",
					"DRINK!.mp3",
					"DrinkMotherfucker.mp3",
					"drinkup.mp3",
					"DrinkupMeHearties.mp3",
					"everybodyKnows.mp3",
					"yoho.mp3"];
var songCount = 10;

function start(el){
	$(el).hide();
	timer();
}

function timer() {
	if(drinkCount == 100){
		document.getElementById("drinkMessage").innerHTML = "Century Complete!";
	} else{
		$timer = $("#timer");
	    var myTime = $timer.html();
	    var ss = myTime.split(":");
	    var dt = new Date();
	    dt.setHours(ss[0]);
	    dt.setMinutes(ss[1]);
	    dt.setSeconds(ss[2]);
	    
	    if(ss[2] == 0){
	    	drinkCount++;
			document.getElementById("drinkCount").innerHTML = drinkCount;
			document.getElementById("drinkMessage").innerHTML = "DRINK!";

			var rand = Math.floor(Math.random() * songCount);
			document.getElementById("sound").innerHTML="<embed src='audio/"+drinkSounds[rand]+"' hidden=true autostart=true loop=false>";
	    }
	    if(ss[2] == 5) {
	    	document.getElementById("drinkMessage").innerHTML = " ";
	    }

	    var dt2 = new Date(dt.valueOf() + 1000);
	    var temp = dt2.toTimeString().split(" ");
	    var ts = temp[0].split(":");

	    $timer.html(ts[0]+":"+ts[1]+":"+ts[2]);
	    setTimeout(timer, 1000);
	}
}