// UTF-8

/*******************************
*
*　object drag
*
*******************************/

(function($){
	$.fn.draggable = function(option){
		
		var defaults = {
			wrapperObj : '.drag-wrapper-obj',
			objX : 0,
			objY : 0,
			cursor: 'move'
		};
		
		return this.each(function(){
			
			$self = $(this);
			var config = $.extend(defaults, option);
			
			$self.css({
				'position': 'relative',
				'z-index' : 200,
				'left': config.objX,
				'top': config.objY
			});
			
			
			var currentX;
			var currentY;
			var moveX = 0;
			var moveY = 0;
			var left;
			var top;
			var posX = config.objX;
			var posY = config.objY;
			var wrapperWidth = $(config.wrapperObj).width();
			var wrapperHeight = $(config.wrapperObj).height();
			var dragObjWidth = $self.width();
			var dragObjHeight = $self.height();
			

			$self.mousedown(function(e){
				var imgLeft;
				
				$(this).css('cursor', config.cursor);

				currentX = e.pageX;
				currentY = e.pageY;
				// console.log('currentX: ' + currentX);
				// console.log('currentY: ' + currentY);
				
				$(document).on('mousemove.move',function(e){
					
					moveX = currentX - e.pageX;
					moveY = currentY - e.pageY;
					
					posX = posX - moveX;
					posY = posY - moveY;
					// console.log('posX: ' + posX);
					// console.log('posY: ' + posY);
					
					if(posX < 0){
						posX = 0;
					}else if(posX > (wrapperWidth - dragObjWidth)) {
						posX = wrapperWidth - dragObjWidth;
					}
					
					if(posY < 0){
						posY = 0;
					}else if(posY > (wrapperHeight - dragObjHeight)) {
						posY = wrapperHeight - dragObjHeight;
					}

					currentX = e.pageX;
					currentY = e.pageY;

					if(parseInt($self.css('left')) >= 0){
						imgLeft = 0;
					}else{
						imgLeft = left - moveX;
					}
					$self.css({
						'left': posX,
						'top': posY
					});
										
					return false;
				}).one('mouseup',function(){
					//alert('up')
					$self.css('cursor', 'auto');
					$(document).off('mousemove.move');
				});
				return false;	
			});
		});
	};
	
})(jQuery);

$(function(){
	
	$(document).on('click','.btnChange',function(){
		var $tbWindow = $('#TB_window');
		var thWidth = $('#TB_window').width();
		var thHeight = $('#TB_window').height();
		//TB_ImageOffの縦横を取得してその値をセット
		
		$tbWindow.css({
			'width': thWidth + 'px',
			'height': thHeight + 'px',
			'overflow': 'hidden',
			'position': 'relative'
		});
		
		var id = $(this).attr('id');
		$('.btnChange').css('display','block');
		$('#' + id).css('display','none');
		
		$('.imgChange').css('display','none');
		$('a[rel =' + id + ']').css('display','block');
		
		w = ($('.drag').width() - $('.drag > span').width()) / 2;
		h = ($('.drag').height() - $('.drag > span').height()) / 2;

		//draggableを発火
		$('.drag').draggable({
			wrapperObj : $tbWindow,
			objX : w,
			objY : h
		});
	});
	
});



