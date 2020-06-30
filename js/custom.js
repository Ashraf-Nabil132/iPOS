var status = 1;
myfunction = function() {
	if (status == 1) {
		status = 0;
		$('.overlay').show(200);
		$('.overlay').css('height', $(document).height());
		$('html, body').css({
			overflow: 'hidden',
			height: '100%'
		});
		$('#menu').animate(
			{ borderSpacing: 360 },
			{
				step: function(now, fx) {
					$('#menu').css('transform', 'rotate(' + now + 'deg)');
				},
				duration: 'slow'
			},
			'linear'
		);
		$('#menu').html(
			' height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="white"  d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>'
		);
		$('#menu').addClass('close');
		$('.navul').show();
		$('.menub').show();
		$('#menu path').css('fill', 'white');
	} else if (status == 0) {
		status = 1;
		$('.overlay').hide(200);
		$('html, body').css({
			overflow: 'initial',
			height: 'initial'
		});
		$('#menu')
			.animate(
				{ borderSpacing: 0 },
				{
					step: function(now, fx) {
						$('#menu').css('transform', 'rotate(' + now + 'deg)');
					},
					duration: 'slow'
				},
				'linear'
			)
			.animate({ width: 35 }, 0, function() {
				$('#menu').html(
					' id="menu" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path fill="#2d314d" d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path fill="#2d314d" d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path fill="#2d314d" d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/>'
				);
			});

		$('#menu').removeClass('close');
		$('.navul').hide();
		$('.menub').hide();
		$('#menu path').css('fill', '#E15B64');
	}
};

$(document).ready(function() {
	$('#menu,.overlay').on('click', function() {
		myfunction();
	});
	$('.navul a').on('click', function() {
		if ($(window).width() <= 992) {
			myfunction();
		}
		// $(this).parent().addClass("active").siblings().removeClass("active")
	});
	$(window).on('resize', function() {
		var exuted = false;
		if ($(window).width()> 992){$('.navul').show();}
		else if($(window).width()<=992 && status==1){$('.navul').hide();}
		if ($(window).width() > 992 && exuted == false && status == 0) {
			exuted = true;
			status = 1;
			$('.overlay').hide(200);
			$('html, body').css({
				overflow: 'initial',
				height: 'initial'
			});
			$('#menu')
				.animate(
					{ borderSpacing: 0 },
					{
						step: function(now, fx) {
							$('#menu').css('transform', 'rotate(' + now + 'deg)');
						},
						duration: 'slow'
					},
					'linear'
				)
				.animate({ width: 35 }, 0, function() {
					$('#menu').html(
						' id="menu" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path fill="#2d314d" d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path fill="#2d314d" d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path fill="#2d314d" d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/>'
					);
				});
			$('#menu').removeClass('close');
			$('.navul').show();
			$('.menub').hide();
		}
	});
});
