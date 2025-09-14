// Sample college data
const collegesData = [{
        name: "Budge Budge Institute Of Thechnology",
        location: "Budge Budge,West Bengal",
        url: "https://bbit.edu.in/", // MODIFICATION: Added url property
        type: "Private",
        ranking: "#2 National",
        tuition: "$56,169",
        acceptance: "4.3%",
        size: "17,249",
        rating: 4.8,
        reviews: 1247,
        features: ["Research University", "Need-Based Aid", "D1 Athletics"],
        reviewText: "Incredible research opportunities and brilliant professors. The campus is beautiful and the network is unmatched.",
        emoji: "🌟"
    },
    {
        name: "Jadavpur University",
        location: "kolkata,West Bengal",
        url: "http://www.jaduniv.edu.in/", // MODIFICATION: Added url property
        type: "Government",
        ranking: "#3 National",
        tuition: "$53,818",
        acceptance: "7.3%",
        size: "11,520",
        rating: 4.7,
        reviews: 892,
        features: ["STEM Focus", "Innovation Hub", "Research"],
        reviewText: "Challenging but incredibly rewarding. The collaborative culture and cutting-edge research are amazing.",
        emoji: "🔬"
    },
    {
        name: "Kolkata University",
        location: "Kolkata,West Bengal",
        url: "https://www.caluniv.ac.in/", // MODIFICATION: Added url property
        type: "Government",
        ranking: "#22 National",
        tuition: "$14,253",
        acceptance: "16.8%",
        size: "45,057",
        rating: 4.5,
        reviews: 2156,
        features: ["Public Ivy", "Diverse", "Strong Alumni"],
        reviewText: "Great value education with world-class faculty. The campus culture is vibrant and intellectually stimulating.",
        emoji: "🐻"
    },
    {
        name: "Harvard University",
        location: "Cambridge, MA",
        url: "https://www.harvard.edu/", // MODIFICATION: Added url property
        type: "Private",
        ranking: "#1 National",
        tuition: "$54,002",
        acceptance: "3.4%",
        size: "22,947",
        rating: 4.9,
        reviews: 1654,
        features: ["Ivy League", "Need-Blind", "Global Network"],
        reviewText: "The opportunities here are endless. Amazing professors and the most motivated student body I've encountered.",
        emoji: "🏛"
    },
    {
        name: "University of Texas at Austin",
        location: "Austin, TX",
        url: "https://www.utexas.edu/", // MODIFICATION: Added url property
        type: "Public",
        ranking: "#38 National",
        tuition: "$11,448",
        acceptance: "31.8%",
        size: "51,832",
        rating: 4.4,
        reviews: 3241,
        features: ["Large Campus", "Music Scene", "Tech Hub"],
        reviewText: "Fantastic school spirit and academic programs. Austin is such a fun college town with great food and music.",
        emoji: "🤘"
    },
    {
        name: "Northwestern University",
        location: "Evanston, IL",
        url: "https://www.northwestern.edu/", // MODIFICATION: Added url property
        type: "Private",
        ranking: "#9 National",
        tuition: "$58,701",
        acceptance: "9.2%",
        size: "22,603",
        rating: 4.6,
        reviews: 987,
        features: ["Quarter System", "Near Chicago", "Strong Alumni"],
        reviewText: "Perfect balance of academics and social life. The proximity to Chicago provides amazing internship opportunities.",
        emoji: "🏫"
    }
];

let currentColleges = [];
let displayedCount = 0;
const itemsPerLoad = 6;

function initializePage() {
    currentColleges = [...collegesData];
    displayedCount = 0;
    renderColleges();
}

function renderColleges() {
    const grid = document.getElementById('collegesGrid');
    const endIndex = Math.min(displayedCount + itemsPerLoad, currentColleges.length);

    for (let i = displayedCount; i < endIndex; i++) {
        const college = currentColleges[i];
        const collegeCard = createCollegeCard(college);
        grid.appendChild(collegeCard);
    }

    displayedCount = endIndex;
    updateResultsCount();
    updateLoadMoreButton();
}

function createCollegeCard(college) {
    const card = document.createElement('div');
    card.className = 'college-card';

    const stars = '★'.repeat(Math.floor(college.rating)) + '☆'.repeat(5 - Math.floor(college.rating));

    card.innerHTML = `
        <div class="college-image">
            <span>${college.emoji}</span>
            <div class="verification-status">Verified</div>
        </div>
        <div class="college-content">
            <div class="college-header">
                <div>
                    <div class="college-name">${college.name}</div>
                    <div class="college-location">${college.location}</div>
                </div>
                <div class="ranking-badge">${college.ranking}</div>
            </div>
            
            <div class="college-stats">
                <div class="stat-item">
                    <span class="stat-value">${college.tuition}</span>
                    <span class="stat-label">Tuition</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">${college.acceptance}</span>
                    <span class="stat-label">Accept Rate</span>
                </div>
            </div>
            
            <div class="college-features">
                ${college.features.map(feature => <span class="feature-tag">${feature}</span>).join('')}
            </div>
            
            <div class="reviews-preview">
                <div class="review-stars">
                    <span class="stars">${stars}</span>
                    <span class="review-count">${college.rating} (${college.reviews} reviews)</span>
                </div>
                <div class="review-text">"${college.reviewText}"</div>
            </div>
            
            <div class="college-actions">
                <a href="${college.url}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">View Details</a>
                <a href="#" class="btn btn-secondary">Compare</a>
            </div>
        </div>
    `;

    return card;
}

function updateResultsCount() {
    const count = document.getElementById('resultsCount');
    count.textContent = `Showing ${ displayedCount } of ${ currentColleges.length } verified colleges`;

}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (displayedCount >= currentColleges.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function filterColleges() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const locationFilter = document.getElementById('locationFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;
    const sizeFilter = document.getElementById('sizeFilter').value;

    currentColleges = collegesData.filter(college => {
        const matchesSearch = college.name.toLowerCase().includes(searchTerm) ||
            college.location.toLowerCase().includes(searchTerm);

        const matchesLocation = !locationFilter || college.location.includes(locationFilter);
        const matchesType = !typeFilter || college.type.toLowerCase() === typeFilter;

        let matchesSize = true;
        if (sizeFilter) {
            const size = parseInt(college.size.replace(',', ''));
            if (sizeFilter === 'Engineering');
            else if (sizeFilter === 'Medical');
            else if (sizeFilter === 'Management');
            else if (sizeFilter === 'Pharmacy');
            else if (sizeFilter === 'General');
            else if (sizeFilter === 'Agriculture');
        }

        return matchesSearch && matchesLocation && matchesType && matchesSize;
    });

    // Clear current display and reset
    document.getElementById('collegesGrid').innerHTML = '';
    displayedCount = 0;
    renderColleges();
}

// Event listeners
document.getElementById('searchBtn').addEventListener('click', filterColleges);
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        filterColleges();
    }
});

document.getElementById('locationFilter').addEventListener('change', filterColleges);
document.getElementById('typeFilter').addEventListener('change', filterColleges);
document.getElementById('sizeFilter').addEventListener('change', filterColleges);

document.getElementById('loadMoreBtn').addEventListener('click', function() {
    // Add loading animation
    const btn = this;
    const originalText = btn.textContent;
    btn.innerHTML = '<div class="spinner"></div>Loading...';
    btn.disabled = true;

    setTimeout(() => {
        renderColleges();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 800);
});

document.getElementById('sortSelect').addEventListener('change', function() {
    const sortBy = this.value;

    currentColleges.sort((a, b) => {
        switch (sortBy) {
            case 'ranking':
                return parseInt(a.ranking.match(/\d+/)[0]) - parseInt(b.ranking.match(/\d+/)[0]);
            case 'tuition-low':
                return parseInt(a.tuition.replace(/[$,]/g, '')) - parseInt(b.tuition.replace(/[$,]/g, ''));
            case 'tuition-high':
                return parseInt(b.tuition.replace(/[$,]/g, '')) - parseInt(a.tuition.replace(/[$,]/g, ''));
            case 'acceptance':
                return parseFloat(a.acceptance) - parseFloat(b.acceptance);
            default: // relevance
                return b.rating - a.rating;
        }
    });

    document.getElementById('collegesGrid').innerHTML = '';
    displayedCount = 0;
    renderColleges();
});

// Initialize page
initializePage();