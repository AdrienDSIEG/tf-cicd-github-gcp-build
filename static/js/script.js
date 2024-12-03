document.addEventListener('DOMContentLoaded', () => {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.textContent = 'Hello from JavaScript! ' + new Date().toLocaleString();
});