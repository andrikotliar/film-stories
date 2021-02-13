// active menu link 

function activeMenuLink() {
	const links = document.querySelectorAll('.header__menu-link');
	links.forEach(link => {
		if(location.pathname === link.getAttribute('href')) {
			link.classList.add('active');
		}
	});
}

activeMenuLink();