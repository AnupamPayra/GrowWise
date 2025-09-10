// Grade selection functionality
        const gradeBtns = document.querySelectorAll('.grade-btn');
        const subjectCards = document.querySelectorAll('.subject-card');

        gradeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                gradeBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const selectedGrade = btn.dataset.grade;

                // Update subjects based on grade
                updateSubjects(selectedGrade);
            });
        });

        function updateSubjects(grade) {
            const subjectsGrid = document.getElementById('subjectsGrid');

            if (grade === '12') {
                subjectsGrid.innerHTML = `
                    <div class="subject-card">
                        <h3>📐 Mathematics</h3>
                        <p>Calculus, Algebra, Statistics, Probability and advanced problem solving</p>
                    </div>
                    <div class="subject-card">
                        <h3>⚗ Chemistry</h3>
                        <p>Organic, Inorganic, Physical Chemistry with industrial applications</p>
                    </div>
                    <div class="subject-card">
                        <h3>⚡ Physics</h3>
                        <p>Mechanics, Thermodynamics, Optics, Modern Physics concepts</p>
                    </div>
                    <div class="subject-card">
                        <h3>🌱 Biology</h3>
                        <p>Botany, Zoology, Genetics, Evolution and Biotechnology</p>
                    </div>
                    <div class="subject-card">
                        <h3>📖 English</h3>
                        <p>Advanced literature, Poetry, Prose and communication skills</p>
                    </div>
                    <div class="subject-card">
                        <h3>💻 Computer Science</h3>
                        <p>Programming, Data Structures, Database and Web development</p>
                    </div>
                `;
            } else {
                subjectsGrid.innerHTML = `
                    <div class="subject-card">
                        <h3>📐 Mathematics</h3>
                        <p>Algebra, Geometry, Trigonometry, Statistics and comprehensive problem-solving</p>
                    </div>
                    <div class="subject-card">
                        <h3>🧬 Science</h3>
                        <p>Physics, Chemistry, Biology with practical applications and experiments</p>
                    </div>
                    <div class="subject-card">
                        <h3>📖 English</h3>
                        <p>Literature, Grammar, Writing skills and communication enhancement</p>
                    </div>
                    <div class="subject-card">
                        <h3>🏛 Social Science</h3>
                        <p>History, Geography, Political Science and Economics fundamentals</p>
                    </div>
                    <div class="subject-card">
                        <h3>🖥 Computer Science</h3>
                        <p>Programming basics, Data structures and digital literacy</p>
                    </div>
                    <div class="subject-card">
                        <h3>🎨 Additional Subjects</h3>
                        <p>Art, Music, Physical Education and skill development</p>
                    </div>
                `;
            }

            // Add hover animations to new cards
            addCardAnimations();
        }

        function addCardAnimations() {
            const cards = document.querySelectorAll('.subject-card');
            cards.forEach((card, index) => {
                card.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s both`;
            });
        }



        // Tab functionality for study materials
        const tabBtns = document.querySelectorAll('.tab-btn');
        const materialContents = document.querySelectorAll('.material-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all tabs
                tabBtns.forEach(b => b.classList.remove('active'));
                materialContents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab
                btn.classList.add('active');
                const tabId = btn.dataset.tab;
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Add click effects to material items
        document.querySelectorAll('.material-item').forEach(item => {
            item.addEventListener('click', () => {
                item.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    item.style.transform = 'translateX(10px)';
                }, 150);
            });
        });

        // Smooth scrolling for navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize animations on page load
        window.addEventListener('load', () => {
            addCardAnimations();
        });