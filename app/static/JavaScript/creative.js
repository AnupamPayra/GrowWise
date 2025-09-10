 
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
                'graphic-designer': {
                    title: 'Graphic Designer',
                    description: 'Graphic designers create visual concepts to communicate ideas that inspire, inform, and captivate consumers through digital and print media.',
                    education: 'Bachelor\'s degree in Graphic Design, Visual Arts, or related field',
                    prospects: 'Expected to grow 3% from 2021 to 2031, with strong demand in digital media'
                },
                'animator': {
                    title: 'Animator / Multimedia Artist',
                    description: 'Animators create visual effects and animations for movies, TV shows, video games, and other media using computer software.',
                    education: 'Bachelor\'s degree in Animation, Fine Arts, Computer Graphics, or related field',
                    prospects: 'Expected to grow 16% from 2021 to 2031, much faster than average'
                },
                'writer': {
                    title: 'Writer / Content Creator',
                    description: 'Writers create content for various media including books, magazines, websites, scripts, and marketing materials.',
                    education: 'Bachelor\'s degree in English, Journalism, Communications, or related field',
                    prospects: 'Expected to grow 9% from 2021 to 2031, with strong digital content demand'
                },
                'fashion-designer': {
                    title: 'Fashion Designer',
                    description: 'Fashion designers create original clothing, accessories, and footwear. They sketch designs, select fabrics, and give direction on production.',
                    education: 'Bachelor\'s degree in Fashion Design, Fashion Merchandising, or related field',
                    prospects: 'Expected to grow 0% from 2021 to 2031, with competition from global markets'
                },
                'musician': {
                    title: 'Musician / Music Producer',
                    description: 'Musicians and music producers create, perform, and record music across various genres and platforms.',
                    education: 'Formal training in music, though many are self-taught. Music degrees can be beneficial',
                    prospects: 'Expected to grow 11% from 2021 to 2031, driven by streaming and digital platforms'
                },
                'actor': {
                    title: 'Actor / Performer',
                    description: 'Actors portray characters in theater, film, television, and other performing arts. They interpret scripts and bring characters to life.',
                    education: 'Formal training through acting schools, workshops, or theater programs',
                    prospects: 'Expected to grow 32% from 2021 to 2031, much faster than average due to streaming content'
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
                'graphic-designer': '🎨 Graphic Designer - You have a keen eye for visual design! Creating stunning graphics and digital art is your calling.',
                'animator': '🎬 Animator - You love bringing stories to life! Animation and multimedia creation would be perfect for you.',
                'writer': '✍️ Writer/Content Creator - You have a way with words! Writing and storytelling are your natural talents.',
                'fashion-designer': '👗 Fashion Designer - You have great style sense! Fashion and design trends are your passion.',
                'musician': '🎵 Musician/Producer - You feel music in your soul! Creating and performing music is your destiny.',
                'actor': '🎭 Actor/Performer - You love the spotlight! Acting and performance arts are where you truly shine.'
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
    