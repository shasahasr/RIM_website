import { useState, useEffect } from 'react';

export function useTheme() {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const selectedTheme = localStorage.getItem('selected-theme');
		if (selectedTheme) {
			setTheme(selectedTheme);
			document.documentElement.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark');
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.classList.toggle('dark');
		localStorage.setItem('selected-theme', newTheme);
		localStorage.setItem('selected-icon', newTheme === 'dark' ? 'bx-moon' : 'bx-sun');
	};

	return { theme, toggleTheme };
}
