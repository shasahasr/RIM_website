import { useState, useEffect } from 'react';

export function useScrollActive() {
	const [activeSection, setActiveSection] = useState('home');
	const [isScrolled, setIsScrolled] = useState(false);
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const scrollY = window.scrollY;

					// Header shadow
					setIsScrolled(scrollY >= 200);

					// Scroll Top Button
					setShowScrollTop(scrollY >= 560);

					// Active Link
					const sections = document.querySelectorAll('section[id]');
					sections.forEach((current) => {
						const sectionHeight = current.offsetHeight;
						const sectionTop = current.offsetTop - 50;
						const sectionId = current.getAttribute('id');

						if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
							setActiveSection(sectionId);
						}
					});

					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return { activeSection, isScrolled, showScrollTop };
}
