// Global functions

function hidePanels(){
	$(".mv_panel").hide();
}

var confettiPlayers = [];

function makeItConfetti() {
	var confetti = document.querySelectorAll('.confetti');
	
	if (!confetti[0].animate) {
		return false;
	}

	for (var i = 0, len = confetti.length; i < len; ++i) {
		var snowball = confetti[i];
		snowball.innerHTML = '<div class="rotate"><div class="askew"></div></div>';
		var scale = Math.random() * .8 + .2;
		var player = snowball.animate([
			{ transform: 'translate3d(' + (i/len*100) + 'vw,0,0) scale(' + scale + ')', opacity: scale },
			{ transform: 'translate3d(' + (i/len*100 + 10) + 'vw,100vh,0) scale(' + scale + ')', opacity: 1 }
		], {
			duration: Math.random() * 3000 + 3000,
			iterations: Infinity,
			delay: -(Math.random() * 5000)
		});
		
		
		confettiPlayers.push(player);
	}
}


// Startup scripts
$( document ).ready(function() {
	
	$( "input" ).bind( "click", function() {
		$("#error").hide();
	});	
	
	$( "#mv_action_intro" ).bind( "click", function() {
		$(".mv_panel").hide();
		$("#panel_instructions").show();
	});

	$( "#mv_action_instructions" ).bind( "click", function() {
		$(".mv_panel").hide();
		$("#panel_1").show();
	});

	$( "#mv_action_instructions" ).bind( "click", function() {
		$(".mv_panel").hide();
		$("#panel_1").show();
	});

	$( "#mv_action_1" ).bind( "click", function() {
		if ($("#mv_answer_1").val().toLowerCase() == "bowling" ){
			$(".mv_panel").hide();
			$("#panel_2").show();
		} else {
			$("#error").show();
		}
	});

	$( "#mv_action_2" ).bind( "click", function() {
		if ($("#mv_answer_2").val().toLowerCase() == "sit" ){
			$(".mv_panel").hide();
			$("#panel_3").show();
		} else {
			$("#error").show();
		}
	});

	$( "#mv_action_3" ).bind( "click", function() {
		if ($("#mv_answer_3").val().toLowerCase() == "loom" ){
			$(".mv_panel").hide();
			$("#panel_4").show();
		} else {
			$("#error").show();
		}
	});

	$( "#mv_action_4" ).bind( "click", function() {
		if ($("#mv_answer_4").val().toLowerCase() == "fish" ){
			$(".mv_panel").hide();
			$("#panel_5").show();
		} else {
			$("#error").show();
		}
	});

	$( "#mv_action_5" ).bind( "click", function() {
		if ($("#mv_answer_5").val().toLowerCase() == "river" ){
			$(".mv_panel").hide();
			$("#panel_6").show();
		} else {
			$("#error").show();
		}
	});

	$( "#mv_action_6" ).bind( "click", function() {
		if ($("#mv_answer_6").val().toLowerCase() == "kitchen" ){
			$(".mv_panel").hide();
			$("#panel_7").show();
		} else {
			$("#error").show();
		}
	});

	$( "#mv_action_7" ).bind( "click", function() {
		if ($("#mv_answer_7").val().toLowerCase() == "lye" ){
			$(".mv_panel").hide();
			$("#panel_8").show();
		} else {
			$("#error").show();
		}
	});

	$( "#mv_action_8" ).bind( "click", function() {
		if ($("#mv_answer_8").val().toLowerCase() == "coach" ){
			$(".mv_panel").hide();
			$("#panel_9").show();
		} else {
			$("#error").show();
		}
	});

	$( "#mv_action_9" ).bind( "click", function() {
		if ($("#mv_answer_9").val().toLowerCase() == "haha" ){
			$(".mv_panel").hide();
			$("#panel_10").show();
		} else {
			$("#error").show();
		}
	});	

	$( "#mv_action_10" ).bind( "click", function() {
		if ($("#mv_answer_10a").val().toLowerCase() == "his" && $("#mv_answer_10b").val().toLowerCase() == "co" && $("#mv_answer_10c").val().toLowerCase() == "ntry"){
			$(".surpress").hide();
			$("#last_title").text("Huzzah! You Got it Right!");
			makeItConfetti();
		} else {
			$("#error").show();
		}
	});		
	


	
	
});


