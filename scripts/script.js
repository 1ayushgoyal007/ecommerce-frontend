function toggleNav() {
    const nav = document.querySelector('nav');
    nav.style.display = (nav.style.display === 'block' || nav.style.display === '') ? 'none' : 'block';
}