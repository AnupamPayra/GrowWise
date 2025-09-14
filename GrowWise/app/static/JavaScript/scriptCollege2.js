document.addEventListener('DOMContentLoaded', () => {
    
    // Scroll Progress Bar
    const progressFill = document.getElementById('progressFill');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressFill.style.width = scrollPercent + '%';
    });

    // Tab functionality for requirements section (if it exists)
    const tabsContainer = document.querySelector('.req-tabs');
    if (tabsContainer) {
        const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.req-content');

        tabsContainer.addEventListener('click', (e) => {
            const clicked = e.target.closest('.tab-btn');
            if (!clicked) return;

            // Remove active classes from all buttons and content
            tabButtons.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button
            clicked.classList.add('active');

            // Find and display the corresponding content
            const contentId = clicked.dataset.tab;
            document.getElementById(contentId).classList.add('active');
        });
    }
});