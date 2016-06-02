$(".add-item-button").click(function() {
	$(".food-list").append('<li>' +$(".add-item-input").val()+ ' <button class="remove-item-btn">remove</button></li>'); 
	$(".add-item-input").val("");
	console.log("check");
	});

$('ul').on('click', '.remove-item-btn', function(event){
  $(this).parent().remove();
  console.log("remove clicked");
});

/*$('ul').on('click', '.trash', function(event){
	console.log('trash clicked');
	$(this).closest('li').remove();
}); */

/*$(".remove-item-btn").click(function() {
	$(this).parent().remove();
	console.log("check");
});*/

/*$('food-list').on('click', 'li', function(event){
	//$("li").val().remove();
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
});*/