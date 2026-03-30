// Petit effet d'apparition au scroll
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = 1;
			entry.target.style.transform = 'translateY(0)';
		}
	});
});

// Appliquer l'animation à toutes les sections
document.querySelectorAll('section').forEach((section) => {
	section.style.opacity = 0;
	section.style.transform = 'translateY(20px)';
	section.style.transition = 'all 0.6s ease-in-out';
	observer.observe(section);
});