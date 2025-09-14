const quizData = [
  {
    question: "1. Which class are you studying in right now?",
    options: [
      "Class 8 or below",
      "Class 9 - 10",
      "Class 11 - 12"
    ]
  },
  {
    question: "2. Which subject do you find easiest to understand?",
    options: [
      "Maths (solving sums, numbers)",
      "Science (plants, body, experiments)",
      "Drawing, acting, singing, writing",
      "Business (buying/selling, farming, shop work)"
    ]
  },
  {
    question: "3. What do you enjoy doing in your free time?",
    options: [
      "Repairing or fixing things (like cycle, mobile)",
      "Helping in farm or learning about health/animals",
      "Singing, drawing, telling stories",
      "Helping shop work, selling things, handling money"
    ]
  },
  {
    question: "4. What do you dream of becoming in future?",
    options: [
      "Engineer or working with machines",
      "Doctor, nurse, or science researcher",
      "Teacher, artist, or writer",
      "Business person or government officer",
      "Government service (police, army, civil service)"
    ]
  }
];

let currentQuestion = 0;
let answers = [];

function loadQuestion() {
  const quizBox = document.getElementById("quiz-box");
  const questionData = quizData[currentQuestion];

  quizBox.innerHTML = `
    <div class="question">${questionData.question}</div>
    <div class="options">
      ${questionData.options.map((opt, i) => `
        <label>
          <input type="radio" name="q${currentQuestion}" value="${opt}" 
            ${answers[currentQuestion] === opt ? "checked" : ""}>
          ${opt}
        </label>
      `).join("")}
    </div>
  `;

  document.getElementById("prevBtn").style.display = currentQuestion === 0 ? "none" : "inline-block";
  document.getElementById("nextBtn").style.display = currentQuestion === quizData.length - 1 ? "none" : "inline-block";
  document.getElementById("submitBtn").style.display = currentQuestion === quizData.length - 1 ? "inline-block" : "none";
}

function saveAnswer() {
  const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
  if (selected) {
    answers[currentQuestion] = selected.value;
  }
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function submitQuiz() {
  saveAnswer();

  // Simple logic for guidance
  let scienceCount = 0, commerceCount = 0, artsCount = 0;

  answers.forEach(ans => {
    if (
      ans.includes("Maths") || 
      ans.includes("Science") || 
      ans.includes("Engineer") || 
      ans.includes("Doctor")
    ) {
      scienceCount++;
    }
    if (
      ans.includes("Business") || 
      ans.includes("selling") || 
      ans.includes("money") || 
      ans.includes("government officer")
    ) {
      commerceCount++;
    }
    if (
      ans.includes("Drawing") || 
      ans.includes("Singing") || 
      ans.includes("Teacher") || 
      ans.includes("writer")
    ) {
      artsCount++;
    }
  });

  let result = "";
  if (scienceCount >= commerceCount && scienceCount >= artsCount) {
    result = "🔬 Best Stream: **Science**\nYou enjoy logic, problem-solving, or medical/engineering fields.";
  } else if (commerceCount >= scienceCount && commerceCount >= artsCount) {
    result = "💼 Best Stream: **Commerce**\nYou are good with money, business, or management-related skills.";
  } else {
    result = "🎨 Best Stream: **Arts/Humanities**\nYou are creative, expressive, and like teaching or storytelling.";
  }

  document.getElementById("quiz-box").innerHTML = `
    <h3>✅ Quiz Completed!</h3>
    <p><strong>Your Answers:</strong></p>
    <ul>${answers.map(a => `<li>${a}</li>`).join("")}</ul>
    <hr>
    <h3>${result}</h3>
  `;

  document.querySelector(".buttons").style.display = "none";
}

loadQuestion();
