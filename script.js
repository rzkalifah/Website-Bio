const toggleButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');

// Cek tema saat ini dari localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.className = currentTheme;

    // Jika saat ini dalam mode light, ganti ikon ke matahari
    if (currentTheme === 'light-mode') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// Event listener untuk toggle tema
toggleButton.addEventListener('click', () => {
    // Jika saat ini adalah mode gelap
    if (document.documentElement.classList.contains('light-mode')) {
        document.documentElement.classList.remove('light-mode');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');

        // Ganti ikon ke bulan (moon)
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        document.documentElement.classList.remove('dark-mode');
        document.documentElement.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');

        // Ganti ikon ke matahari (sun)
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});
