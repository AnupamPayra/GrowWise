
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
                'investment-banker': {
                    title: 'Investment Banker',
                    description: 'Investment bankers help companies and governments raise capital by underwriting and selling securities. They also provide advisory services for mergers, acquisitions, and other financial transactions.',
                    education: 'Bachelor\'s degree in Finance, Economics, Business, or related field. MBA preferred for senior roles.',
                    prospects: 'High growth potential with opportunities in global markets and emerging financial products.'
                },
                'financial-analyst': {
                    title: 'Financial Analyst',
                    description: 'Financial analysts research companies and economic conditions to provide investment recommendations and financial guidance to businesses and individuals.',
                    education: 'Bachelor\'s degree in Finance, Accounting, Economics, or Business Administration.',
                    prospects: 'Steady growth with opportunities to specialize in areas like equity research, credit analysis, or portfolio management.'
                },
                'bank-manager': {
                    title: 'Bank Manager',
                    description: 'Bank managers oversee daily operations of bank branches, manage staff, ensure compliance with regulations, and develop business relationships with customers.',
                    education: 'Bachelor\'s degree in Business, Finance, or related field. Banking certifications preferred.',
                    prospects: 'Stable career path with opportunities for regional and national leadership roles.'
                },
                'business-consultant': {
                    title: 'Business Consultant',
                    description: 'Business consultants analyze business practices and provide strategic advice to help organizations improve efficiency, solve problems, and increase profitability.',
                    education: 'Bachelor\'s degree in Business, Management, or relevant field. MBA highly valued.',
                    prospects: 'Excellent growth potential with opportunities to specialize in various industries and functions.'
                },
                'economist': {
                    title: 'Economist / Policy Analyst',
                    description: 'Economists study the production and distribution of goods and services. Policy analysts research and analyze policy issues and provide recommendations to government agencies and organizations.',
                    education: 'Master\'s degree in Economics, Public Policy, or related field. PhD preferred for research positions.',
                    prospects: 'Growing demand in government, think tanks, and private sector for economic analysis and policy development.'
                },
                'chartered-accountant': {
                    title: 'Chartered Accountant',
                    description: 'Chartered Accountants provide accounting, auditing, taxation, and advisory services to businesses and individuals. They ensure financial compliance and help with strategic financial planning.',
                    education: 'CA qualification through ICAI or equivalent professional accounting certification.',
                    prospects: 'Strong demand across all industries with opportunities for independent practice and corporate leadership roles.'
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
                'investment-banker': '🏦 Investment Banker - You thrive in high-stakes environments! Investment banking with its fast-paced deal-making would be perfect for you.',
                'financial-analyst': '📊 Financial Analyst - You love analyzing data and trends! Financial analysis and forecasting would be an excellent fit.',
                'bank-manager': '🏛️ Bank Manager - You\'re great with people and operations! Managing banking services and customer relationships is your calling.',
                'business-consultant': '💼 Business Consultant - You\'re a strategic thinker and problem solver! Helping businesses improve and grow is your forte.',
                'economist': '📈 Economist - You\'re research-oriented and love understanding economic patterns! Policy analysis and economic research would suit you well.',
                'chartered-accountant': '📋 Chartered Accountant - You\'re detail-oriented and love working with numbers! Accounting, auditing, and financial compliance is your domain.'
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
    