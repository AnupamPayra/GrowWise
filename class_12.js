  const careerFields = {
            technology: {
                title: "Technology Careers - Detailed View",
                careers: [
                    { title: "Software Developer", icon: "👨‍💻", desc: "Create applications, websites, and systems that power our digital world", salary: "$70k - $150k+" },
                    { title: "Data Scientist", icon: "📊", desc: "Analyze complex data to extract insights and drive business decisions", salary: "$80k - $180k+" },
                    { title: "Cybersecurity Analyst", icon: "🔒", desc: "Protect organizations from digital threats and security breaches", salary: "$75k - $160k+" },
                    { title: "UX Designer", icon: "🎨", desc: "Design intuitive and engaging user experiences for digital products", salary: "$65k - $140k+" },
                    { title: "AI Engineer", icon: "🤖", desc: "Build intelligent systems and machine learning solutions", salary: "$90k - $200k+" },
                    { title: "Cloud Architect", icon: "☁", desc: "Design and implement scalable cloud infrastructure solutions", salary: "$100k - $220k+" }
                ]
            },
            healthcare: {
                title: "Healthcare Careers - Detailed View",
                careers: [
                    { title: "Physician", icon: "👩‍⚕", desc: "Diagnose, treat, and care for patients across various specialties", salary: "$200k - $400k+" },
                    { title: "Nurse", icon: "👨‍⚕", desc: "Provide direct patient care and support in various healthcare settings", salary: "$60k - $120k+" },
                    { title: "Physical Therapist", icon: "🏃‍♂", desc: "Help patients recover mobility and manage pain through therapeutic exercises", salary: "$75k - $95k" },
                    { title: "Medical Researcher", icon: "🔬", desc: "Conduct research to advance medical knowledge and develop new treatments", salary: "$65k - $130k+" },
                    { title: "Healthcare Admin", icon: "📋", desc: "Manage healthcare operations, policies, and organizational efficiency", salary: "$55k - $110k+" },
                    { title: "Pharmacist", icon: "💊", desc: "Dispense medications and provide pharmaceutical care to patients", salary: "$120k - $140k" }
                ]
            },
            business: {
                title: "Business & Finance Careers - Detailed View",
                careers: [
                    { title: "Marketing Manager", icon: "📱", desc: "Develop and execute marketing strategies to promote products and services", salary: "$60k - $130k+" },
                    { title: "Financial Analyst", icon: "💰", desc: "Analyze financial data and market trends to guide investment decisions", salary: "$65k - $120k+" },
                    { title: "Consultant", icon: "💼", desc: "Provide expert advice to organizations on strategy and operations", salary: "$80k - $180k+" },
                    { title: "Entrepreneur", icon: "🚀", desc: "Start and grow innovative businesses, creating value and employment", salary: "Variable - unlimited" },
                    { title: "Sales Director", icon: "📈", desc: "Lead sales teams and develop strategies to drive revenue growth", salary: "$90k - $200k+" },
                    { title: "Investment Banker", icon: "🏦", desc: "Manage complex financial transactions and provide advisory services", salary: "$100k - $300k+" }
                ]
            },
            creative: {
                title: "Creative Arts Careers - Detailed View",
                careers: [
                    { title: "Graphic Designer", icon: "🎨", desc: "Create visual communications for brands, products, and digital media", salary: "$40k - $85k+" },
                    { title: "Video Producer", icon: "🎬", desc: "Plan, create, and edit video content for various media platforms", salary: "$45k - $100k+" },
                    { title: "Writer", icon: "✍", desc: "Create compelling written content for books, articles, and digital media", salary: "$35k - $90k+" },
                    { title: "Photographer", icon: "📷", desc: "Capture visual stories through professional photography", salary: "$30k - $80k+" },
                    { title: "Game Designer", icon: "🎮", desc: "Design engaging interactive experiences and game mechanics", salary: "$55k - $120k+" },
                    { title: "Art Director", icon: "🎭", desc: "Lead creative teams and oversee visual direction of projects", salary: "$70k - $140k+" }
                ]
            },
            education: {
                title: "Education Careers - Detailed View",
                careers: [
                    { title: "Teacher", icon: "👩‍🏫", desc: "Educate and inspire students across various subjects and grade levels", salary: "$40k - $70k+" },
                    { title: "Principal", icon: "🏫", desc: "Lead educational institutions and manage academic programs", salary: "$75k - $120k+" },
                    { title: "Counselor", icon: "💭", desc: "Guide students in academic, career, and personal development", salary: "$45k - $75k+" },
                    { title: "Curriculum Developer", icon: "📝", desc: "Design educational materials and learning experiences", salary: "$55k - $85k+" },
                    { title: "Training Specialist", icon: "🎯", desc: "Develop and deliver professional training programs", salary: "$50k - $90k+" },
                    { title: "Education Researcher", icon: "📚", desc: "Study learning methods and educational effectiveness", salary: "$60k - $100k+" }
                ]
            },
            science: {
                title: "Science & Research Careers - Detailed View",
                careers: [
                    { title: "Research Scientist", icon: "🔬", desc: "Conduct scientific research to advance knowledge in various fields", salary: "$65k - $130k+" },
                    { title: "Engineer", icon: "⚙", desc: "Design and build systems, structures, and technological solutions", salary: "$70k - $140k+" },
                    { title: "Environmental Scientist", icon: "🌱", desc: "Study environmental issues and develop sustainability solutions", salary: "$55k - $95k+" },
                    { title: "Lab Technician", icon: "🧪", desc: "Support laboratory operations and conduct scientific experiments", salary: "$35k - $60k+" },
                    { title: "Quality Analyst", icon: "✅", desc: "Ensure products and processes meet quality standards", salary: "$45k - $80k+" },
                    { title: "Field Researcher", icon: "🌍", desc: "Collect data and conduct research in natural environments", salary: "$40k - $75k+" }
                ]
            }
        };

        function exploreField(field) {
            const fieldData = careerFields[field];
            const container = document.getElementById('field-details');
            const title = document.getElementById('field-title');
            const content = document.getElementById('career-details-content');
            
            title.textContent = fieldData.title;
            
            content.innerHTML = '';
            content.style.display = 'grid';
            content.style.gridTemplateColumns = 'repeat(auto-fit, minmax(350px, 1fr))';
            content.style.gap = '20px';
            
            fieldData.careers.forEach(career => {
                const careerDiv = document.createElement('div');
                careerDiv.style.background = 'linear-gradient(145deg, #f8fafc, #e2e8f0)';
                careerDiv.style.borderRadius = '15px';
                careerDiv.style.padding = '25px';
                careerDiv.style.textAlign = 'center';
                careerDiv.style.transition = 'all 0.3s ease';
                careerDiv.style.border = '2px solid #e2e8f0';
                careerDiv.style.cursor = 'pointer';
                
                careerDiv.innerHTML = `
                    <div style="font-size: 2.5rem; margin-bottom: 15px;">${career.icon}</div>
                    <h4 style="font-size: 1.3rem; margin-bottom: 10px; color: #2d3748;">${career.title}</h4>
                    <p style="color: #4a5568; margin-bottom: 10px; font-size: 0.95rem;">${career.desc}</p>
                    <div style="background: linear-gradient(45deg, #667eea, #764ba2); color: white; padding: 8px 12px; border-radius: 20px; font-size: 0.9rem; font-weight: 600; display: inline-block;">${career.salary}</div>
                `;
                
                careerDiv.addEventListener('mouseenter', () => {
                    careerDiv.style.transform = 'translateY(-2px)';
                    careerDiv.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    careerDiv.style.borderColor = '#3b82f6';
                });
                
                careerDiv.addEventListener('mouseleave', () => {
                    careerDiv.style.transform = 'translateY(0)';
                    careerDiv.style.boxShadow = 'none';
                    careerDiv.style.borderColor = '#e5e7eb';
                });
                
                content.appendChild(careerDiv);
            });
            
            container.style.display = 'block';
            container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add scroll animations
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

        // Observe all career sections
        document.querySelectorAll('.career-section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'all 0.6s ease';
            observer.observe(section);
        });