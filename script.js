// 難易度別の問題
const easyQuestions = [
  { image: "images/q1.png", question: "問1.東場の場合、この手をあがったら点数は？", choices: ["32000点", "役無し", "48000点", "16000点"], correct: "48000点", explanation: "1と9と字牌が1枚ずつあるので国士無双という役満です。\n役満は48000点です。" },//こくし1

  { image: "images/q2.png", question: "問2.東場の場合、この手をあがったら点数は？", choices: ["役無し", "2000点", "3000点", "4800点"], correct: "3000点", explanation: "副底で20符で白が３枚（暗刻）あるので8符になり、ツモが2符なので合計で30符になる。\n門前自摸と白で2飜になって1000点オールで答えは3000点" },//ツモ白2
  
  { image: "images/q3.png", question: "問3.東場の場合、この手をあがったら点数は？", choices: ["役無し", "32000点", "48000点", "96000点"], correct: "96000点", explanation: "国士無双13面待ちになるのでダブル役満です。" },//国士１３面3
  
  { image: "images/q4.png", question: "問4.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["役無し", "2000点", "3000点", "4800点"], correct: "2000点", explanation: "副底で20符で3萬が3枚（暗刻）あって4符、単騎待ちで2符門前ロンなので10符合計で36符だけど繰り上がって40符になる。\nリーチしていてロンあがりの為、2飜になるので答えは2000点" },//リーチロン単騎4
  
  { image: "images/q5.png", question: "問5.東場の場合、この手をあがったら点数は？", choices: ["48000点", "96000点", "32000点", "役無し"], correct: "96000点", explanation: "東と南と西と北のうち、3種類を3枚揃えるとできる大四喜というダブル役満です。\n（役満の場合もある）" },//大四喜5
  
  { image: "images/q6.png", question: "問6.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["4800点", "2000点", "3900点", "1000点"], correct: "3900点", explanation: "副底で20符で風牌の東が2枚（雀頭）あるので4符になって、西が3枚（暗刻）あるので8符で合計40符になる。\nリーチと門前自摸だけなので2飜になって1300点オールになるので答えは3900点" },//リーチツモ西6
  
  { image: "images/q7.png", question: "問7.東場の場合、この手をあがったら点数は？", choices: ["1000点", "2000点", "2400点", "役無し"], correct: "役無し", explanation: "副底で20符で1筒が3枚（暗刻）あるので8符でペンチャン待ち（123の3や789の7など）なので2符、門前ロンで10符になり合計40符になる。\nこの問題はロンなので答えは役無し" },//役無し7
  
  { image: "images/q8.png", question: "問8.東場の場合、この手をあがったら点数は？", choices: ["1000点", "2000点", "3900点", "役無し"], correct: "3900点", explanation: "副底で20符で単騎待ちで2符、東が3枚（暗刻）あるので8符の門前ロンで10符になるので合計40符になる。\nこのサイトは親固定なので自風場で1飜になり、東場で1飜となり合わせて2飜になるので答えは3900点" },//ダブ東ロン8
  
  { image: "images/q9.png", question: "問9.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["3000点", "3900点", "1000点", "2000点"], correct: "2000点", explanation: "副底で20符でペンチャン待ち（123の3や789の7など）なので2符に門前ロンが10符で32符が繰り上がり合符40符になる。\nリーチで1飜だけなので答えは2000点" },//リーチロン9
  
  { image: "images/q10.png", question: "問10.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["9600点", "7700点", "3900点", "5800点"], correct: "7700点", explanation: "副底で20符、単騎待ちで2符に東が3枚（暗刻）で8符、門前ロンなので10符がつき合計で40符になります。\nこのサイトでは親固定なので、自風が東、場風も東（東場）ということで自風と場風が一致し、2翻分の役になります。そこにリーチをかけてアガったとすると、さらに1翻加わり、合計3翻になって答えは7700点" },//リーチ東ロン10
];

const mediumQuestions = [
  { image: "images/qm1.png", question: "問1.東場の場合、この手をあがったら点数は？", choices: ["7700点", "4000点", "役無し", "3900点"], correct: "7700点", explanation: "20符＋2萬が暗刻で4符、中単騎待ちで2符、門前ロン10符の38符で繰り上がり40符になる。\n萬子筒子索子にそれぞれ345があるので三色同順という役になり2飜、更に5萬の赤ドラで1飜で3飜になるので40符3飜\n答えは7700点となる" },//三色同順赤１ロン 1

  { image: "images/qm2.png", question: "問2.南場の場合、この手をあがったら点数は？", choices: ["12000点", "4000点", "8000点", "16000点"], correct: "12000点", explanation: "20符＋東と南が暗刻16符になり自摸で2符、単騎待ちで2符の合計40符になる。\nリーチ自摸で2飜、親なので自風の東で1飜、場風の南で1飜、ドラが3筒で5飜となり40符5飜\n答えは4000オールの12000点（満貫）となる" },//リー自摸東南ドラ1 2

  { image: "images/qm3.png", question: "問3.東場の場合、この手をあがったら点数は？", choices: ["7700点", "8000点", "12000点", "満貫"], correct: "満貫", explanation: "30符4翻は親のロンで満貫となります。" },
  { image: "images/q4.png", question: "この手をあがったら 点数は？", choices: ["2400点オール", "2000点オール", "3000点オール", "満貫"], correct: "2400点オール", explanation: "50符2翻の親ツモは2400点オールです。" },
  { image: "images/q5.png", question: "この手をあがったら 点数は？", choices: ["2000点", "3900点", "満貫", "1300点"], correct: "3900点", explanation: "60符3翻は子のツモで3900点になります。" }
];

const hardQuestions = [
  { image: "images/q7.png", question: "この手をあがったら 点数は？", choices: ["満貫", "4000点オール", "12000点", "3900点"], correct: "満貫", explanation: "40符4翻は満貫扱いで12000点。" },
  { image: "images/q8.png", question: "この手をあがったら 点数は？", choices: ["1600点", "2000点", "1300点", "1800点"], correct: "1600点", explanation: "25符2翻 子のロンは1600点です。" },
  { image: "images/q9.png", question: "この手をあがったら 点数は？", choices: ["1300点オール", "1500点オール", "1000点オール", "2000点オール"], correct: "1300点オール", explanation: "翻が少ないため満貫には届かず、1300点オール。" },
  { image: "images/q10.png", question: "この手をあがったら 点数は？", choices: ["2000点", "2600点", "1300点", "満貫"], correct: "2000点", explanation: "翻が3あれば、符が少なくても高めの点数になります。" }
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
  const timerElement = document.getElementById("timer");
  
  function updateTimerColor(seconds) {
    timerElement.classList.remove("timer-normal", "timer-warning", "timer-danger");
    if (seconds > 10) {
      timerElement.classList.add("timer-normal");
    } else if (seconds > 5) {
      timerElement.classList.add("timer-warning");
    } else {
      timerElement.classList.add("timer-danger");
    }
  }
  
  updateTimerColor(timeLeft);
  timerElement.innerText = `残り時間: ${timeLeft}秒`;
  
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateTimerColor(timeLeft);
    timerElement.innerText = `残り時間: ${timeLeft}秒`;
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
