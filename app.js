$(".add-item-button").click(function() {
	$(".food-list").append('<li>' +$(".add-item-input").val()+ ' <button class="remove-item-btn">remove</button></li>'); 
	$(".add-item-input").val("");
	console.log("check");
	});

// use enter to add list items
$('.add-item-input').keyup(function(event){
	if(event.keyCode == 13) {
		//event.preventDefault();
		$('.add-item-button').click();
	};
});	

$('ul').on('click', '.remove-item-btn', function(event){
  $(this).parent().remove();
  console.log("remove clicked");
});
