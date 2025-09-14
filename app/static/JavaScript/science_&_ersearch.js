 
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
                'software-developer': {
                    title: 'Software Developer',
                    description: 'Software developers create applications, websites, and systems that run on computers and mobile devices. They work with programming languages like JavaScript, Python, Java, and more.',
                    education: 'Bachelor\'s degree in Computer Science or related field, or equivalent experience',
                    prospects: 'Expected to grow 25% from 2021 to 2031, much faster than average'
                },
                'data-scientist': {
                    title: 'Data Scientist',
                    description: 'Data scientists analyze complex data to help organizations make strategic decisions. They use statistical analysis, machine learning, and data visualization.',
                    education: 'Bachelor\'s degree in Mathematics, Statistics, Computer Science, or related field',
                    prospects: 'Expected to grow 35% from 2021 to 2031, much faster than average'
                },
                'cybersecurity': {
                    title: 'Cybersecurity Specialist',
                    description: 'Cybersecurity specialists protect computer networks and systems from digital attacks, unauthorized access, and data breaches.',
                    education: 'Bachelor\'s degree in Cybersecurity, Computer Science, or related field',
                    prospects: 'Expected to grow 35% from 2021 to 2031, much faster than average'
                },
                'ux-designer': {
                    title: 'UX/UI Designer',
                    description: 'UX/UI designers create user-friendly interfaces and experiences for websites, apps, and digital products.',
                    education: 'Bachelor\'s degree in Design, Psychology, Computer Science, or related field',
                    prospects: 'Expected to grow 13% from 2021 to 2031, faster than average'
                },
                'cloud-engineer': {
                    title: 'Cloud Engineer',
                    description: 'Cloud engineers design, implement, and manage cloud computing systems for organizations moving to cloud-based solutions.',
                    education: 'Bachelor\'s degree in Computer Science, Information Technology, or related field',
                    prospects: 'Expected to grow 15% from 2021 to 2031, much faster than average'
                },
                'ai-engineer': {
                    title: 'AI/ML Engineer',
                    description: 'AI/ML engineers develop artificial intelligence and machine learning systems to solve complex problems and automate processes.',
                    education: 'Bachelor\'s or Master\'s degree in Computer Science, Mathematics, or Engineering',
                    prospects: 'Expected to grow 40% from 2021 to 2031, much faster than average'
                }
            };

            const info = careerInfo[career];

             alert(
            `${info.title}\n\n${info.description}\n\nEducation: ${info.education}\n\nJob Prospects: ${info.prospects}`
        );
            // alert(${info.title}\n\n${info.description}\n\nEducation: ${info.education}\n\nJob Prospects: ${info.prospects});
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
                'software-developer': '👨‍💻 Software Developer - You enjoy building and creating! You\'d thrive developing applications and websites.',
                'data-scientist': '📊 Data Scientist - You love patterns and insights! Data analysis and machine learning would be perfect for you.',
                'cybersecurity': '🔒 Cybersecurity Specialist - You\'re a protector! Keeping systems safe from threats is your calling.',
                'ux-designer': '🎨 UX/UI Designer - You\'re creative and user-focused! Designing amazing user experiences is your forte.',
                'cloud-engineer': '☁ Cloud Engineer - You like systems and infrastructure! Cloud technologies are your domain.',
                'ai-engineer': '🤖 AI/ML Engineer - You\'re innovative and research-oriented! Building intelligent systems is your future.'
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
    