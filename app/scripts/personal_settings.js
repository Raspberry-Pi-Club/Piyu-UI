$('.row input').prop('disabled',true);

$('#editButton').click(function(){
	$('.row input').prop('disabled',false);
});

$('#saveButton').click(function(){
	var pData = $('#PSForm').serialize();
	console.log(pData);
});