
        let currentQuestion = 1;
        let answers = {};
        const totalQuestions = 5;

        const questions = [
            {
                id: 1,
                question: "What energizes you most?",
                options: [
                    { text: "Solving complex problems", value: "problem-solving" },
                    { text: "Helping others succeed", value: "helping" },
                    { text: "Creating something new", value: "creating" },
                    { text: "Analyzing data and patterns", value: "analyzing" }
                ]
            },
            {
                id: 2,
                question: "In a group project, you naturally:",
                options: [
                    { text: "Take the leadership role", value: "leadership" },
                    { text: "Focus on research and analysis", value: "analyzing" },
                    { text: "Come up with creative solutions", value: "creating" },
                    { text: "Ensure everyone is heard", value: "helping" }
                ]
            },
            {
                id: 3,
                question: "Your ideal work environment is:",
                options: [
                    { text: "Fast-paced and dynamic", value: "problem-solving" },
                    { text: "Collaborative and people-focused", value: "helping" },
                    { text: "Quiet and detail-oriented", value: "analyzing" },
                    { text: "Flexible and creative", value: "creating" }
                ]
            },
            {
                id: 4,
                question: "You feel most accomplished when:",
                options: [
                    { text: "You've solved a difficult challenge", value: "problem-solving" },
                    { text: "You've helped someone reach their goals", value: "helping" },
                    { text: "You've created something beautiful or useful", value: "creating" },
                    { text: "You've discovered important insights", value: "analyzing" }
                ]
            },
            {
                id: 5,
                question: "In your free time, you enjoy:",
                options: [
                    { text: "Building or fixing things", value: "problem-solving" },
                    { text: "Volunteering or mentoring", value: "helping" },
                    { text: "Art, music, or writing", value: "creating" },
                    { text: "Reading research or learning facts", value: "analyzing" }
                ]
            }
        ];

        const careerFields = {
            technology: {
                title: "Technology Careers",
                careers: [
                    { title: "Software Developer", icon: "👨‍💻", desc: "Create applications and systems" },
                    { title: "Data Scientist", icon: "📊", desc: "Analyze data for insights" },
                    { title: "Cybersecurity Analyst", icon: "🔒", desc: "Protect digital assets" },
                    { title: "UX Designer", icon: "🎨", desc: "Design user experiences" },
                    { title: "AI Engineer", icon: "🤖", desc: "Build intelligent systems" },
                    { title: "Cloud Architect", icon: "☁", desc: "Design cloud solutions" }
                ]
            },
            healthcare: {
                title: "Healthcare Careers",
                careers: [
                    { title: "Physician", icon: "👩‍⚕️", desc: "Diagnose and treat patients" },
                    { title: "Nurse", icon: "👨‍⚕️", desc: "Provide patient care" },
                    { title: "Physical Therapist", icon: "🏃‍♂️", desc: "Help patients recover mobility" },
                    { title: "Medical Researcher", icon: "🔬", desc: "Advance medical knowledge" },
                    { title: "Healthcare Admin", icon: "📋", desc: "Manage healthcare operations" },
                    { title: "Pharmacist", icon: "💊", desc: "Dispense medications safely" }
                ]
            },
            business: {
                title: "Business & Finance Careers",
                careers: [
                    { title: "Marketing Manager", icon: "📱", desc: "Promote products and services" },
                    { title: "Financial Analyst", icon: "💰", desc: "Analyze financial data" },
                    { title: "Consultant", icon: "💼", desc: "Advise organizations" },
                    { title: "Entrepreneur", icon: "🚀", desc: "Start and run businesses" },
                    { title: "Sales Director", icon: "📈", desc: "Lead sales teams" },
                    { title: "Investment Banker", icon: "🏦", desc: "Manage financial transactions" }
                ]
            },
            creative: {
                title: "Creative Arts Careers",
                careers: [
                    { title: "Graphic Designer", icon: "🎨", desc: "Create visual communications" },
                    { title: "Video Producer", icon: "🎬", desc: "Create video content" },
                    { title: "Writer", icon: "✍️", desc: "Create written content" },
                    { title: "Photographer", icon: "📷", desc: "Capture visual stories" },
                    { title: "Game Designer", icon: "🎮", desc: "Design interactive experiences" },
                    { title: "Art Director", icon: "🎭", desc: "Lead creative projects" }
                ]
            },
            education: {
                title: "Education Careers",
                careers: [
                    { title: "Teacher", icon: "👩‍🏫", desc: "Educate and inspire students" },
                    { title: "Principal", icon: "🏫", desc: "Lead educational institutions" },
                    { title: "Counselor", icon: "💭", desc: "Guide student development" },
                    { title: "Curriculum Developer", icon: "📝", desc: "Design learning materials" },
                    { title: "Training Specialist", icon: "🎯", desc: "Develop professional training" },
                    { title: "Education Researcher", icon: "📚", desc: "Study learning methods" }
                ]
            },
            science: {
                title: "Science & Research Careers",
                careers: [
                    { title: "Research Scientist", icon: "🔬", desc: "Conduct scientific research" },
                    { title: "Engineer", icon: "⚙️", desc: "Design and build systems" },
                    { title: "Environmental Scientist", icon: "🌱", desc: "Study environmental issues" },
                    { title: "Lab Technician", icon: "🧪", desc: "Support laboratory work" },
                    { title: "Quality Analyst", icon: "✅", desc: "Ensure product quality" },
                    { title: "Field Researcher", icon: "🌍", desc: "Collect data in the field" }
                ]
            }
        };

        function exploreField(field) {
            const fieldData = careerFields[field];
            const container = document.getElementById('field-details');
            const title = document.getElementById('field-title');
            
            title.textContent = fieldData.title;
            
            container.innerHTML = `<h3 style="grid-column: 1/-1; text-align: center; margin-bottom: 20px; color: #667eea;">${fieldData.title}</h3>`;
            
            fieldData.careers.forEach(career => {
                const careerDiv = document.createElement('div');
                careerDiv.className = 'pathway';
                careerDiv.innerHTML = `
                    <span class="pathway-icon">${career.icon}</span>
                    <h3>${career.title}</h3>
                    <p>${career.desc}</p>
                `;
                container.appendChild(careerDiv);
            });
            
            container.style.display = 'grid';
            container.scrollIntoView({ behavior: 'smooth' });
        }

        function selectAnswer(questionNum, answer) {
            // Remove previous selections
            document.querySelectorAll(`#question-${questionNum} .quiz-option`).forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selection to clicked option
            event.target.classList.add('selected');
            
            answers[questionNum] = answer;
            
            setTimeout(() => {
                if (questionNum < totalQuestions) {
                    showNextQuestion(questionNum + 1);
                } else {
                    showResults();
                }
            }, 500);
        }

        function showNextQuestion(questionNum) {
            currentQuestion = questionNum;
            updateProgress();
            
            const container = document.getElementById('quiz-container');
            const question = questions[questionNum - 1];
            
            container.innerHTML = `
                <div class="quiz-question" id="question-${questionNum}">
                    <h3>${question.question}</h3>
                    <div class="quiz-options">
                        ${question.options.map(option => 
                            `<button class="quiz-option" onclick="selectAnswer(${questionNum}, '${option.value}')">${option.text}</button>`
                        ).join('')}
                    </div>
                </div>
            `;
        }

        function updateProgress() {
            const progress = (currentQuestion / totalQuestions) * 100;
            document.getElementById('progress').style.width = progress + '%';
        }

        function showResults() {
            updateProgress();
            
            // Analyze answers
            const strengthCounts = {};
            Object.values(answers).forEach(answer => {
                strengthCounts[answer] = (strengthCounts[answer] || 0) + 1;
            });
            
            const topStrengths = Object.entries(strengthCounts)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 2)
                .map(([strength]) => strength);
            
            const strengthLabels = {
                'problem-solving': 'Problem Solver',
                'helping': 'People Helper',
                'creating': 'Creative Thinker',
                'analyzing': 'Analytical Mind',
                'leadership': 'Natural Leader'
            };
            
            const careerRecommendations = {
                'problem-solving': ['Software Engineer', 'Consultant', 'Research Scientist'],
                'helping': ['Teacher', 'Counselor', 'Healthcare Professional'],
                'creating': ['Designer', 'Writer', 'Marketing Professional'],
                'analyzing': ['Data Scientist', 'Financial Analyst', 'Researcher'],
                'leadership': ['Manager', 'Entrepreneur', 'Project Manager']
            };
            
            const container = document.getElementById('quiz-container');
            container.innerHTML = '';
            
            const resultsDiv = document.getElementById('results-container');
            const strengthsDisplay = document.getElementById('strengths-display');
            const careerRecsDiv = document.getElementById('career-recommendations');
            
            strengthsDisplay.innerHTML = topStrengths.map(strength => 
                `<span class="strength-badge">${strengthLabels[strength]}</span>`
            ).join('');
            
            const allRecommendations = topStrengths.flatMap(strength => 
                careerRecommendations[strength] || []
            );
            const uniqueRecommendations = [...new Set(allRecommendations)];
            
            careerRecsDiv.innerHTML = `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 20px;">
                    ${uniqueRecommendations.slice(0, 6).map(career => 
                        `<div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 10px; text-align: center;">
                            <strong>${career}</strong>
                        </div>`
                    ).join('')}
                </div>
            `;
            
            resultsDiv.classList.remove('hidden');
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });