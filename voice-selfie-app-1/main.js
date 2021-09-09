
var SpeechRecognition = window.webkitSpeechRecognition ;

var Recognition = new SpeechRecognition() ;

function start() {
	
	document.getElementById("text-box") .innerHTML = "" ;

	Recognition.start() ;

}

Recognition.onresult = function run(event) {

	console.log(event) ;

	var content = event.results[0][0].transcript ;

	console.log(content) ;

	docuemnt.getElementById("text-box") .innerHTML=content ;

}
