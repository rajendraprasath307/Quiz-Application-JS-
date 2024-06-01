const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], correctAnswer: "Paris" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], correctAnswer: "H2O" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"], correctAnswer: "William Shakespeare" },
    { question: "What is the capital of Japan?", options: ["Tokyo", "Beijing", "Seoul", "Bangkok"], correctAnswer: "Tokyo" },
    { question: "What is the speed of light?", options: ["299,792,458 m/s", "150,000,000 m/s", "300,000,000 m/s", "250,000,000 m/s"], correctAnswer: "299,792,458 m/s" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correctAnswer: "Leonardo da Vinci" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Brisbane"], correctAnswer: "Canberra" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], correctAnswer: "Mitochondria" },
    { question: "Who is known as the Father of Computers?", options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"], correctAnswer: "Charles Babbage" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correctAnswer: "Ottawa" },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correctAnswer: "Blue Whale" },
    { question: "What is the smallest unit of life?", options: ["Atom", "Molecule", "Cell", "Organism"], correctAnswer: "Cell" },
    { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"], correctAnswer: "Alexander Graham Bell" },
    { question: "What is the capital of Italy?", options: ["Milan", "Rome", "Naples", "Venice"], correctAnswer: "Rome" },
    { question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], correctAnswer: "Diamond" },
    { question: "Who discovered penicillin?", options: ["Marie Curie", "Albert Einstein", "Alexander Fleming", "Isaac Newton"], correctAnswer: "Alexander Fleming" },
    { question: "What is the capital of Germany?", options: ["Berlin", "Munich", "Frankfurt", "Hamburg"], correctAnswer: "Berlin" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], correctAnswer: "Au" },
    { question: "Who was the first president of the United States?", options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], correctAnswer: "George Washington" }
  ];
  
  let currentQuestionIndex = 0;
let timer;
let timeLeft = 30;
let correctAnswers = 0;
let wrongAnswers = 0;
let totalTime = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const feedback = document.getElementById("feedback");
  if (selectedOption === currentQuestion.correctAnswer) {
    feedback.textContent = "Correct answer!";
    feedback.style.color = "green";
    correctAnswers++;
    nextQuestion();
  } else {
    feedback.textContent = "Wrong answer. Moving to next question!";
    feedback.style.color = "red";
    wrongAnswers++;
    nextQuestion(); // Move to next question immediately
  }
  clearInterval(timer);
  updateResult();
}

function updateResult() {
  document.getElementById("correct-answers").textContent = correctAnswers;
  document.getElementById("wrong-answers").textContent = wrongAnswers;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    totalTime += 30 - timeLeft;
    displayQuestion();
    document.getElementById("feedback").textContent = "";
  } else {
    clearInterval(timer);
    totalTime += 30 - timeLeft;
    updateResult();
    document.getElementById("total-time").textContent = totalTime;
    document.getElementById("result").style.display = "block";
  }
}

displayQuestion();