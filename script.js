// Show deployment time
document.getElementById('deploy-time').textContent = new Date().toLocaleString();

// Dark mode toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save preference
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Add a fun animation to the welcome message
const welcome = document.getElementById('welcome');
welcome.style.opacity = '0';
setTimeout(() => {
    welcome.style.transition = 'opacity 1s';
    welcome.style.opacity = '1';
}, 100);

console.log('Portfolio site loaded successfully!');
console.log('Deployment automated with GitHub Actions');