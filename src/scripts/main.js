// active menu link 

function activeMenuLink() {
	const links = document.querySelectorAll('.header__menu-link');
	links.forEach(link => {
		if(location.pathname === link.getAttribute('href')) {
			link.classList.add('active');
		}
	});
}

function currentYear() {
	const yearElem = document.querySelector('.year');
	const year = new Date().getFullYear();
	yearElem.textContent = year;
}

activeMenuLink();
currentYear();