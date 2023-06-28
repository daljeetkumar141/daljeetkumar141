
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 20) {
		header.style.backgroundColor = '#060606';
		header.style.opacity = '0.95';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
