// Global functions

function hidePanels(){
	$(".mv_panel").hide();
}


// Startup scripts
$( document ).ready(function() {
	
	$( "#mv_action_intro" ).bind( "click", function() {
		$(".mv_panel").hide();
		$("#panel_instructions").show();
	});

	$( "#mv_action_instructions" ).bind( "click", function() {
		$(".mv_panel").hide();
		$("#panel_1").show();
	});

});