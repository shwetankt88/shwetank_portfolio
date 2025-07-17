document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'typewriter'
    const typewriterElements = document.querySelectorAll('.typewriter');

    // Function to animate a single element
    function typeAnimate(element) {
        const text = element.getAttribute('data-text');
        element.textContent = ''; // Clear the element's text content
        let i = 0;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 30); // Adjust typing speed here (milliseconds)
            } else {
                // When typing is done, ensure the cursor remains
                // The CSS animation handles the blinking
            }
        }
        type();
    }

    // Store original text in a data attribute and then start the animation
    typewriterElements.forEach(el => {
        // We store the original text in a data attribute to avoid issues
        const originalText = el.textContent;
        el.setAttribute('data-text', originalText);
        el.textContent = ''; // Clear it initially

        // Start the animation for each element
        typeAnimate(el);
    });
});
