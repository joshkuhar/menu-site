$(".add-item-button").click(function() {
	$(".food-list").append('<li>' +$(".add-item-input").val()+ '</li>'); 
	$(".add-item-input").empty();
	//console.log("check");
	});

/*$(".remove-item-btn").click(function() {
	$("li").empty().parent();
	console.log("check");
});*/

$(".remove-item-btn").click(function() {
	$("li").remove()/*.parent(".remove-item-btn")*/;
	console.log("check");
});

/*$('food-list').on('click', 'li', function(event){
	$("li").val().remove();
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
});*/