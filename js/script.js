// Global functions

function hidePanels(){
	$(".mv_panel").hide();
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
});
