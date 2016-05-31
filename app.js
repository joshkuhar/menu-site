$(".add-item-button").click(function() {
	var item = $(".add-item-input").val();
	$(".food-list").append(item);
	console.log("check");
	});