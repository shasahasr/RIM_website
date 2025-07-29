/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	// Validate that variables exist
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			// We add the show-menu class to the div tag with the nav__menu class
			nav.classList.toggle('show-menu');
		});
	}
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
	const nav = document.getElementById('header');
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 200) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
	const scrollTop = document.getElementById('scroll-top');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
	else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? 'dark' : 'light');
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun');

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
	themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '30px',
	duration: 2000,
	reset: true
});

sr.reveal(
	`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,
	{
		interval: 200
	}
);

/*==================== EMAIL JS FORM HANDLING ====================*/
document.addEventListener('DOMContentLoaded', function () {
	// Initialize EmailJS with fallback configuration
	const config = window.EMAILJS_CONFIG || {
		serviceID: 'service_i02u47i',
		templateID: 'template_kt8d3fo',
		publicKey: '21k9-kywmfEfSN5HO'
	};

	// Initialize EmailJS
	if (typeof emailjs !== 'undefined') {
		emailjs.init(config.publicKey);
	}

	const contactForm = document.getElementById('contact-form');
	if (contactForm) {
		contactForm.addEventListener('submit', function (event) {
			event.preventDefault(); // Prevent the default form submission

			// Check if EmailJS is loaded
			if (typeof emailjs === 'undefined') {
				showPopup('Email service is not available. Please try again later.');
				return;
			}

			// Show loading state
			const submitButton = this.querySelector('button[type="submit"]');
			const originalText = submitButton.textContent;
			submitButton.textContent = 'Sending...';
			submitButton.disabled = true;

			emailjs
				.sendForm(config.serviceID, config.templateID, this)
				.then(
					() => {
						showPopup('Message sent successfully!');
						this.reset(); // Reset the form after submission
					},
					(error) => {
						showPopup('Failed to send message. Please try again later.');
						console.error('EmailJS Error:', error);
					}
				)
				.finally(() => {
					// Reset button state
					submitButton.textContent = originalText;
					submitButton.disabled = false;
				});
		});
	}
});

// Function to show the popup
function showPopup(message) {
	const popup = document.getElementById('popup-message');
	const popupText = document.getElementById('popup-text');
	popupText.textContent = message;
	popup.classList.remove('hidden');

	// Close the popup when the close button is clicked
	document.getElementById('popup-close').addEventListener('click', () => {
		popup.classList.add('hidden');
	});
}
