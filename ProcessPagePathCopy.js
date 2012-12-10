$(function(){

	$('.PageListActionCopyPath a').live('click', function(e){

			// Prevent default behaviour
	        e.preventDefault();
	        
	        // Hide if item has been copied
	        $(".copy-path-copied").hide();				
	        
	        
			// Add class open
	        $(this).parent().addClass("open");

			// Get copy action
			$parentHtml = $(this).parent().html();

	        // Add an input to copy paste
	        $(this).parent().html("<input type='text' value='" + $(this).attr("href") + "' />");
	        
	        // Put focus on input
	        $(".open").find("input").focus();

			// Bind copy event to fadeout and add the action
			$(".open input").bind({
				copy : function() {
					$(this).fadeOut('slow', function() {
										
						// Append the action	
						$(this).parent().html($parentHtml + " <span class='copy-path-copied'>copied</span>");
												
					});
				}
			});

	});

});