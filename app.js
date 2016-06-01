$(".add-item-button").click(function() {
	var item = $(".add-item-input").val();
	$(".food-list").append('<li>' +item+ '</li>'); 
	//console.log("check");
	});

/*$(".add-item-button").click(function() {
	$(".add-item-input").val();
	$(".food-list").append(); 
	//console.log("check");
	});*/

