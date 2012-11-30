$(function(){
	$('.PageListActionCopyPath a').live('click', function(e){
	        e.preventDefault();                
	        copyToClipboard($(this).attr('href'));
	});
});


function copyToClipboard(text) {
	window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}