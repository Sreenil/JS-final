const quiz = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"],
      answer: "Mars"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
    question: "Which city is the capital of India?",
        options: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
        correctAnswer: "Delhi"

    },
    {
        question: "Who was the first cricketer to score a double century in One Day Internationals (ODIs)?",
        options: ["Sachin Tendulkar", "Chris Gayle", "Virender Sehwag", "Rohit Sharma"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "Who is the highest wicket-taker in Test cricket?",
        options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
        correctAnswer: "Muttiah Muralitharan"
    },
    {
      question: "Who painted the 'Mona Lisa'?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
  }, 
  {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correctAnswer: "H2O"
  },
  {
      question: "Which country is known as the 'Land of the Rising Sun'?",
      options: ["Japan", "China", "South Korea", "Vietnam"],
      correctAnswer: "Japan"
  }

  ];
  
  let score = 0;
  
  function startQuiz() {
    for (let i = 0; i < quiz.length; i++) {
      const answer = prompt(quiz[i].question + "\n" + quiz[i].options.join("\n"));
      if (answer === quiz[i].answer) {
        score++;
        alert("Correct!");
      } else {
        alert("Incorrect. The correct answer is: " + quiz[i].answer);
      }
    }
    alert("Quiz complete! Your score is: " + score + "/" + quiz.length);
    score = 0; 
  }
  