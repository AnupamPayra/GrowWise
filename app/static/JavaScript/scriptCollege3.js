const scholarships = [
  { name: "Swami Vivekananda Merit Cum Means Scholarship (SVMCM)", level: "State", eligibility: "75% marks in last exam, family income < ₹2.5L", award: "Up to ₹8,000/month", deadline: "Nov-Jan", link: "https://svmcm.co.in/" },
  { name: "Kanyashree Prakalpa", level: "State", eligibility: "Unmarried girls 13-18 yrs, income < ₹1.2L", award: "₹1,000 yearly + ₹25,000 one-time", deadline: "Open", link: "https://wbkanyashree.gov.in/" },
  { name: "Nabanna Scholarship", level: "State", eligibility: "50%-59% marks in last exam, income ≤ ₹1.2L", award: "₹10,000 one-time grant", deadline: "Open all year", link: "https://wbnabannascholarship.in/" },
  { name: "National Scholarship Portal (NSP)", level: "National", eligibility: "Central Govt, UGC, AICTE schemes", award: "Varies widely", deadline: "Varies", link: "https://scholarships.gov.in/" },
  { name: "INSPIRE Scholarship", level: "National", eligibility: "Top 1% in 12th pursuing Science", award: "₹80,000/year", deadline: "Nov-Dec", link: "https://www.online-inspire.gov.in/" },
  { name: "AICTE Pragati Scholarship for Girls", level: "National", eligibility: "Girl students in technical UG/PG programs, income < ₹8L", award: "₹50,000/year", deadline: "Oct-Nov", link: "https://www.aicte-india.org/" },
  { name: "Fulbright-Nehru Master's Fellowship", level: "International", eligibility: "Indian graduates, admission to US universities", award: "Full tuition, stipend, travel", deadline: "June-July", link: "https://www.usief.org.in/" },
  { name: "Chevening Scholarships", level: "International", eligibility: "Graduates with 2+ yrs work experience, study in UK", award: "Full tuition, stipend, travel", deadline: "Nov", link: "https://www.chevening.org/" },
  { name: "DAAD Scholarships", level: "International", eligibility: "Master's/PhD in Germany", award: "Full tuition + stipend", deadline: "Varies", link: "https://www.daad.de/" },
  { name: "Australia Awards Scholarship", level: "International", eligibility: "Indian students applying to Australia", award: "Full tuition + stipend", deadline: "May", link: "https://www.dfat.gov.au/people-to-people/australia-awards" },
  { name: "National Fellowship and Scholarship for Higher Education of ST Students", level: "National", eligibility: "ST students, pursuing postgraduate / higher education (M.Phil / PhD)", award: "Fellowship / scholarship for higher studies", deadline: "Dec", link: "https://scholarships.gov.in" },
  { name: "Pre-Matric Scholarship Scheme for Minorities (India)", level: "National", eligibility: "Students from minority communities, classes 1-10, family income below threshold, passed previous exam", award: "Monthly stipend / maintenance + maybe tuition", deadline: "Yearly, check central scheme notification", link: "https://scholarships.gov.in" },
  { name: "National Means-cum-Merit Scholarship (NMMS)", level: "National", eligibility: "Students of Class 9, merit + income criteria, studying in Govt / aided schools", award: "₹ 12,000/year", deadline: "Annual notification via education department / NSP", link: "https://scholarships.gov.in" },
  { name: "Talent Support Stipend Programme, West Bengal", level: "State (West Bengal)", eligibility: "Minority community students, WB resident, from Class 11 → PhD, meritorious + financial need", award: "Stipend (varies depending on level)", deadline: "Annual WB Minority Dev. notifications", link: "https://wbmdfc.org" },
];

const grid = document.getElementById('scholarship-grid');
const searchBox = document.getElementById('search-box');
const filterBtnsContainer = document.getElementById('filter-buttons');
const noResultsDiv = document.getElementById('no-results');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const loadMoreBtn = document.getElementById('load-more');

let activeFilter = 'all';
let visibleCount = 6;

const highlightText = (text, term) => {
  if (!term) return text;
  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
};

const renderScholarships = (list, searchTerm = '') => {
  grid.innerHTML = '';
  const visibleItems = list.slice(0, visibleCount);
  if (visibleItems.length === 0) {
    noResultsDiv.classList.remove('hidden');
    loadMoreBtn.classList.add('hidden');
  } else {
    noResultsDiv.classList.add('hidden');
    visibleItems.forEach(s => {
      const card = document.createElement('div');
      card.className = `bg-white rounded-lg shadow-md p-6 card-hover-effect border-t-4 ${s.level === 'State' ? 'border-green-500' : s.level === 'National' ? 'border-blue-500' : 'border-purple-500'}`;
      card.innerHTML = `
        <span class="text-sm font-semibold ${s.level === 'State' ? 'text-green-600' : s.level === 'National' ? 'text-blue-600' : 'text-purple-600'} bg-gray-100 px-2 py-1 rounded-full">${s.level}</span>
        <h3 class="text-xl font-bold mt-4 mb-2 text-gray-900">${highlightText(s.name, searchTerm)}</h3>
        <p class="text-sm text-gray-600 mb-2"><strong>Eligibility:</strong> ${highlightText(s.eligibility, searchTerm)}</p>
        <p class="text-sm text-gray-600 mb-2"><strong>Award:</strong> ${s.award}</p>
        <p class="text-sm text-gray-600 mb-4"><strong>Deadline:</strong> ${s.deadline}</p>
        <a href="${s.link}" target="_blank" class="inline-block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Visit Website</a>
      `;
      grid.appendChild(card);
    });

    loadMoreBtn.classList.toggle('hidden', visibleCount >= list.length);
  }
};

const filterAndRender = () => {
  const searchTerm = searchBox.value.toLowerCase();
  const filtered = scholarships.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm) || s.eligibility.toLowerCase().includes(searchTerm);
    const matchesFilter = activeFilter === 'all' || s.level.toLowerCase() === activeFilter.toLowerCase();
    return matchesSearch && matchesFilter;
  });
  renderScholarships(filtered, searchTerm);
};

searchBox.addEventListener('input', () => {
  visibleCount = 6;
  filterAndRender();
});

filterBtnsContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    activeFilter = e.target.dataset.level;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
    e.target.classList.add('bg-blue-500', 'text-white');
    visibleCount = 6;
    filterAndRender();
  }
});

mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.addEventListener('click', (e) => { if (e.target.tagName === 'A') mobileMenu.classList.add('hidden'); });

loadMoreBtn.addEventListener('click', () => {
  visibleCount += 3;
  filterAndRender();
});

filterAndRender();
