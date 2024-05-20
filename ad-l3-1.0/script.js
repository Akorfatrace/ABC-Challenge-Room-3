// Function to apply a random color from the given set to an element
function applyRandomColor(element) {
    const colors = ['green', 'blue', 'red'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
}

// Attach event listeners to all h5 elements to change their color on click
document.querySelectorAll('h5').forEach(h5 => {
    h5.addEventListener('click', function() {
        applyRandomColor(h5);
    });
});
