$(function () {
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 150) {
			$('.navbar').addClass('nav-dark')
		} else {
			$('.navbar').removeClass('nav-dark')
		}
	})
})
