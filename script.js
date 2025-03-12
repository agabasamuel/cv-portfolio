// JavaScript to toggle dark/light mode and save the state in localStorage
const toggleSwitch = document.getElementById('mode-toggle');

// Check if dark mode is enabled from localStorage on page load
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.container').classList.add('dark-mode');
    toggleSwitch.checked = true;  // Set the toggle to 'on'
} else {
    document.body.classList.remove('dark-mode');
    document.querySelector('.container').classList.remove('dark-mode');
    toggleSwitch.checked = false; // Set the toggle to 'off'
}

toggleSwitch.addEventListener('change', () => {
    // Toggle dark mode classes
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');

    // Save the state in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});
