
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(102, 126, 234, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
                header.style.backdropFilter = 'blur(10px)';
            }
        });

        // Career card details
        function showCareerDetails(career) {
            const careerInfo = {
                'school-teacher': {
                    title: 'School Teacher',
                    description: 'School teachers educate students from primary to higher secondary levels, helping them develop knowledge and skills in various subjects.',
                    education: 'Bachelor\'s degree in Education (B.Ed) or subject-specific degree with teaching certification',
                    prospects: 'Stable career with government and private opportunities, pension benefits in government schools'
                },
                'professor': {
                    title: 'College/University Professor',
                    description: 'Professors teach at higher education level, conduct research, publish academic papers, and guide graduate students.',
                    education: 'Master\'s degree minimum, PhD preferred, NET/SET qualification for assistant professor',
                    prospects: 'Excellent growth potential, research opportunities, sabbaticals, and academic prestige'
                },
                'education-counselor': {
                    title: 'Education Counselor',
                    description: 'Education counselors help students make informed decisions about their academic and career paths.',
                    education: 'Bachelor\'s in Psychology/Education, certification in career counseling preferred',
                    prospects: 'Growing demand with increasing awareness of career guidance importance'
                },
                'edtech-specialist': {
                    title: 'EdTech Specialist',
                    description: 'EdTech specialists work with educational technology, developing digital learning solutions and online courses.',
                    education: 'Bachelor\'s degree in Education, Technology, or related field with digital skills',
                    prospects: 'Rapidly growing field with high demand, especially post-pandemic'
                },
                'administrator': {
                    title: 'School/College Administrator',
                    description: 'Administrators manage educational institutions, overseeing operations, staff, budgets, and strategic planning.',
                    education: 'Master\'s in Education Administration or MBA with education experience',
                    prospects: 'Leadership roles with significant responsibility and competitive compensation'
                },
                'education-researcher': {
                    title: 'Education Researcher',
                    description: 'Education researchers study teaching methods, learning outcomes, and educational policies to improve education systems.',
                    education: 'Master\'s or PhD in Education, Research Methods, or related field',
                    prospects: 'Opportunities in universities, think tanks, government agencies, and NGOs'
                }
            };

            const info = careerInfo[career];
            alert(`${info.title}\n\n${info.description}\n\nEducation: ${info.education}\n\nJob Prospects: ${info.prospects}`);
        }

        // Quiz functionality
        let quizAnswers = [];

        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                // Remove selected class from siblings
                this.parentNode.querySelectorAll('.quiz-option').forEach(sibling => {
                    sibling.classList.remove('selected');
                });
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Store the answer
                const questionIndex = Array.from(document.querySelectorAll('.question')).indexOf(this.closest('.question'));
                quizAnswers[questionIndex] = this.dataset.career;
            });
        });

        function calculateQuizResult() {
            if (quizAnswers.length < 2) {
                alert('Please answer all questions before getting your results!');
                return;
            }

            // Count career preferences
            const careerCounts = {};
            quizAnswers.forEach(career => {
                careerCounts[career] = (careerCounts[career] || 0) + 1;
            });

            // Find the most recommended career
            const recommendedCareer = Object.keys(careerCounts).reduce((a, b) => 
                careerCounts[a] > careerCounts[b] ? a : b
            );

            const careerDescriptions = {
                'school-teacher': '👨‍💻 School Teacher - You enjoy working with young minds! Teaching and nurturing students would be perfect for you.',
                'professor': '📊 College/University Professor - You love research and higher education! Academic life and mentoring would suit you well.',
                'education-counselor': '🔒 Education Counselor - You\'re great at guidance! Helping students navigate their futures is your calling.',
                'edtech-specialist': '🎨 EdTech Specialist - You\'re tech-savvy and innovative! Combining education with technology is your forte.',
                'administrator': '☁ School/College Administrator - You\'re a natural leader! Managing educational institutions is your domain.',
                'education-researcher': '🤖 Education Researcher - You\'re analytical and curious! Researching education systems and policies is your future.'
            };

            document.getElementById('resultContent').innerHTML = careerDescriptions[recommendedCareer];
            document.getElementById('quizResult').style.display = 'block';
            document.getElementById('quizResult').scrollIntoView({ behavior: 'smooth' });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe career cards and resource cards
        document.querySelectorAll('.career-card, .resource-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(card);
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '1';
        });

        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
    