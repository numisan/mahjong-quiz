// 難易度別の問題
const easyQuestions = [
  { image: "images/q1.png", question: "40符3翻 子 ツモ の点数は？", choices: ["1000点", "1300点", "2000点", "満貫"], correct: "1300点", explanation: "40符3翻は子のツモで1300点になります。" },
  { image: "images/q3.png", question: "20符2翻 子 ロン の点数は？", choices: ["1300点", "2000点", "1000点", "満貫"], correct: "1300点", explanation: "20符2翻は子のロンで1300点です。" },
  { image: "images/q6.png", question: "30符1翻 子 ロン の点数は？", choices: ["1000点", "1300点", "1500点", "2000点"], correct: "1000点", explanation: "30符1翻は子のロンで1000点です。" }
];

const mediumQuestions = [
  { image: "images/q2.png", question: "30符4翻 親 ロン の点数は？", choices: ["7700点", "8000点", "12000点", "満貫"], correct: "満貫", explanation: "30符4翻は親のロンで満貫となります。" },
  { image: "images/q4.png", question: "50符2翻 親 ツモ の点数は？", choices: ["2400点オール", "2000点オール", "3000点オール", "満貫"], correct: "2400点オール", explanation: "50符2翻の親ツモは2400点オールです。" },
  { image: "images/q5.png", question: "60符3翻 子 ツモ の点数は？", choices: ["2000点", "3900点", "満貫", "1300点"], correct: "3900点", explanation: "60符3翻は子のツモで3900点になります。" }
];

const hardQuestions = [
  { image: "images/q7.png", question: "40符4翻 親 ツモ の点数は？", choices: ["満貫", "4000点オール", "12000点", "3900点"], correct: "満貫", explanation: "40符4翻は満貫扱いで12000点。" },
  { image: "images/q8.png", question: "25符2翻 子 ロン の点数は？", choices: ["1600点", "2000点", "1300点", "1800点"], correct: "1600点", explanation: "25符2翻 子のロンは1600点です。" },
  { image: "images/q9.png", question: "40符1翻 親 ツモ の点数は？", choices: ["1300点オール", "1500点オール", "1000点オール", "2000点オール"], correct: "1300点オール", explanation: "翻が少ないため満貫には届かず、1300点オール。" },
  { image: "images/q10.png", question: "20符3翻 子 ロン の点数は？", choices: ["2000点", "2600点", "1300点", "満貫"], correct: "2000点", explanation: "翻が3あれば、符が少なくても高めの点数になります。" }
];

let quiz = [], index = 0, score = 0, timer, timeLimit = 20, currentDifficulty = "";

function startQuiz(difficulty) {
  currentDifficulty = difficulty;
  quiz = [...(difficulty === 'easy' ? easyQuestions :
              difficulty === 'medium' ? mediumQuestions : hardQuestions)];
  timeLimit = difficulty === 'easy' ? 30 : 20;
  index = 0; score = 0;
  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const q = quiz[index];
  document.getElementById("question").innerText = q.question;
  document.getElementById("questionImage").src = q.image;
  document.getElementById("explanation").innerText = "";
  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";
  q.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.onclick = () => checkAnswer(choice);
    choicesDiv.appendChild(btn);
  });

  let timeLeft = timeLimit;
  document.getElementById("timer").innerText = `残り時間: ${timeLeft}秒`;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `残り時間: ${timeLeft}秒`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(null);
    }
  }, 1000);
}

function checkAnswer(selectedChoice) {
  clearInterval(timer);
  const q = quiz[index];
  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(btn => {
    btn.disabled = true;
    const isCorrect = btn.innerText === q.correct;
    if (isCorrect) {
      btn.innerText += " ✓";
      btn.style.backgroundColor = "#c8e6c9";
    } else if (btn.innerText === selectedChoice) {
      btn.innerText += " ✗";
      btn.style.backgroundColor = "#ffcdd2";
    }
  });
  if (selectedChoice && selectedChoice === q.correct) score++;
  document.getElementById("explanation").innerText = q.explanation;
}

function nextQuestion() {
  index++;
  if (index >= quiz.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.remove("hidden");
  const levelText = { easy: "初心者", medium: "中級者", hard: "上級者" }[currentDifficulty];
  document.getElementById("result").innerText = `難易度: ${levelText} ／ スコア: ${score} / ${quiz.length}`;
  saveScore(levelText, score, quiz.length);
  showScoreHistory();
}

function retryQuiz() {
  startQuiz(currentDifficulty);
}

function returnToStart() {
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("endScreen").classList.add("hidden");
  document.getElementById("startScreen").classList.remove("hidden");
}

function saveScore(difficulty, score, total) {
  const timestamp = new Date().toLocaleString();
  const result = { difficulty, score, total, timestamp };
  const history = JSON.parse(localStorage.getItem("scoreHistory") || "[]");
  history.push(result);
  localStorage.setItem("scoreHistory", JSON.stringify(history));
}

function showScoreHistory() {
  const container = document.getElementById("scoreHistory");
  container.innerHTML = "<h3>過去のスコア履歴</h3>";
  const history = JSON.parse(localStorage.getItem("scoreHistory") || "[]");
  if (history.length === 0) {
    container.innerHTML += "<p>履歴はまだありません。</p>";
    return;
  }
  const list = document.createElement("ul");
  history.slice(-10).reverse().forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.timestamp} - ${item.difficulty} - ${item.score}/${item.total}`;
    list.appendChild(li);
  });
  container.appendChild(list);
}
