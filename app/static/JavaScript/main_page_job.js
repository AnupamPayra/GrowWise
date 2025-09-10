         function searchByCategory(category) {
            showLoadingAnimation();
            
            console.log(`Searching for jobs in category: ${category}`);
            
  
            setTimeout(() => {
                hideLoadingAnimation();
                alert(`Redirecting to ${category.charAt(0).toUpperCase() + category.slice(1)} jobs...`);
            }, 1000);
        }

        function showLoadingAnimation() {
    
            const overlay = document.createElement('div');
            overlay.id = 'loading-overlay';
            overlay.innerHTML = `
                <div style="
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    color: white;
                    font-size: 1.2rem;
                ">
                    <div>
                        <div style="
                            width: 50px;
                            height: 50px;
                            border: 4px solid #f3f3f3;
                            border-top: 4px solid #667eea;
                            border-radius: 50%;
                            animation: spin 1s linear infinite;
                            margin: 0 auto 1rem;
                        "></div>
                        <div>Loading jobs...</div>
                    </div>
                </div>
                <style>
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                </style>
            `;
            document.body.appendChild(overlay);
        }
        
        function hideLoadingAnimation() {
            const overlay = document.getElementById('loading-overlay');
            if (overlay) {
                overlay.remove();
            }
        }
        
        async function fetchJobsByCategory(category) {
            try {
                // Example API call
                const response = await fetch(`/api/jobs?category=${category}`);
                const jobs = await response.json();
                
                // Handle the response
                console.log('Jobs found:', jobs);
                
                // Update UI with results
                // displayJobs(jobs);
                
            } catch (error) {
                console.error('Error fetching jobs:', error);
                alert('Sorry, there was an error loading jobs. Please try again.');
            }
        }
        
        // Add click animation to cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function(e) {
                // Don't trigger if clicking the button
                if (e.target.classList.contains('go-now-btn')) {
                    return;
                }
                
                // Get category from data attribute
                const category = this.dataset.category;
                if (category) {
                    searchByCategory(category);
                }
            });
        });
        
        // Prevent event bubbling on button clicks
        document.querySelectorAll('.go-now-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
        
        // Add some interactive effects on page load
        document.addEventListener('DOMContentLoaded', function() {
            // Animate cards on load
            const cards = document.querySelectorAll('.category-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        });
    