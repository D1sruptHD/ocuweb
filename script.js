// Function to generate a random gradient
function randomGradient() {
    const colors = [
        ['#ff7e5f', '#feb47b'],
        ['#6a11cb', '#2575fc'],
        ['#ff9a8b', '#ff6a88', '#ff5f7e'],
        ['#00c6ff', '#0072ff'],
        ['#ffafbd', '#ffc3a0'],
        ['#ff6a00', '#ee0979'],
        ['#4facfe', '#00f2fe']
    ];

    // Choose a random gradient
    const randomIndex = Math.floor(Math.random() * colors.length);
    const chosenGradient = colors[randomIndex];

    // Apply the gradient to the body
    document.body.style.background = `linear-gradient(to bottom, ${chosenGradient.join(', ')})`;
}

// Apply the random gradient when the page loads
window.onload = randomGradient;
