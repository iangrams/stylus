$(document).ready(function() {
	$('.add').on('click', function(event){
		var numcards = $('.card').length - 1;
		var cardcopy = $('div[index="0"]').clone().attr('index',numcards);
		cardcopy.insertBefore('.add');
		setupEdit();
	});
});

function setupEdit(){
	$('.edit, .save').off('click');
	$('.edit').on('click', function(event){
		event.preventDefault();
		var content = $(this).parent().siblings('.content');
		var text = content.text();
		content.css('display', 'none');
		$(this).parent().siblings('.editcontent').val(text).css('display', 'block');
		$(this).text('Save').addClass('save').removeClass('edit');
		setupEdit();
	});
	$('.save').on('click', function(event) {
		event.preventDefault();
		var content = $(this).parent().siblings('.content');
		content.text($(this).parent().siblings('.editcontent').val()).css('display', 'block');
		$('.editcontent').css('display', 'none');
		$(this).text('Edit').addClass('edit').removeClass('save');
		setupEdit();
	});
}