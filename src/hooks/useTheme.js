import { useState, useEffect } from 'react';

export function useTheme() {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('selected-theme');
			return saved || 'dark';
		}
		return 'dark';
	});

	// Ensure the document has the correct class on mount
	useEffect(() => {
		document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		// Add transition class for smooth animation
		document.documentElement.classList.add('theme-transitioning');
		setTheme(newTheme);
		document.documentElement.classList.toggle('dark');
		localStorage.setItem('selected-theme', newTheme);
		localStorage.setItem('selected-icon', newTheme === 'dark' ? 'bx-moon' : 'bx-sun');
		// Remove transition class after animation completes
		setTimeout(() => {
			document.documentElement.classList.remove('theme-transitioning');
		}, 600);
	};

	return { theme, toggleTheme };
}
