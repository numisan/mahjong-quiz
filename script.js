// 難易度別の問題
const easyQuestions = [
  { image: "images/q1.png", question: "問1.東場の場合、この手をあがったら点数は？", choices: ["32,000点", "役無し", "48,000点", "16,000点"], correct: "48,000点", explanation: "1と9と字牌が1枚ずつあるので国士無双という役満です。\n\n役満は48000点です。" },//こくし1

  { image: "images/q2.png", question: "問2.東場の場合、この手をあがったら点数は？", choices: ["役無し", "2,000点", "3,000点", "4,800点"], correct: "3,000点", explanation: "副底で20符で白が３枚（暗刻）あるので8符になり、ツモが2符なので合計で30符になります。\n\n門前自摸と白で2飜になって1000点オールで答えは3000点" },//ツモ白2
  
  { image: "images/q3.png", question: "問3.東場の場合、この手をあがったら点数は？", choices: ["役無し", "32,000点", "48,000点", "96,000点"], correct: "96,000点", explanation: "国士無双13面待ちになるのでダブル役満です。" },//国士１３面3
  
  { image: "images/q4.png", question: "問4.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["役無し", "2,000点", "3,000点", "4,800点"], correct: "2,000点", explanation: "副底で20符で3萬が3枚（暗刻）あって4符、単騎待ちで2符門前ロンなので10符合計で36符だけど繰り上がって40符になります。\n\nリーチしていてロンあがりの為、1飜になるので答えは2000点" },//リーチロン単騎4
  
  { image: "images/q5.png", question: "問5.東場の場合、この手をあがったら点数は？", choices: ["48,000点", "96,000点", "32,000点", "役無し"], correct: "96,000点", explanation: "東と南と西と北のうち、3種類を3枚揃えるとできる大四喜というダブル役満です。\n（役満の場合もある）" },//大四喜5
  
  { image: "images/q6.png", question: "問6.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["4,800点", "2,400点", "3,900点", "1,000点"], correct: "2,400点", explanation: "副底で20符で風牌の東が2枚（雀頭）あるので4符になって、西が3枚（暗刻）あるので8符で合計40符になります。\n\nリーチだけなので1飜になって1300点オールになるので答えは3900点" },//リーチツモ西6
  
  { image: "images/q7.png", question: "問7.東場の場合、この手をあがったら点数は？", choices: ["1,000点", "2,000点", "2,400点", "役無し"], correct: "役無し", explanation: "副底で20符で1筒が3枚（暗刻）あるので8符でペンチャン待ち（123の3や789の7など）なので2符、門前ロンで10符になり合計40符になります。\n\nただし、この問題はロンなので答えは役無し" },//役無し7
  
  { image: "images/q8.png", question: "問8.東場の場合、この手をあがったら点数は？", choices: ["1,000点", "2,000点", "3,900点", "役無し"], correct: "3,900点", explanation: "副底で20符で単騎待ちで2符、東が3枚（暗刻）あるので8符の門前ロンで10符になるので合計40符になります。\n\nこのサイトは親固定なので自風場で1飜になり、東場で1飜となり合わせて2飜になるので答えは3900点" },//ダブ東ロン8
  
  { image: "images/q9.png", question: "問9.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["3,000点", "3,900点", "1,000点", "2,000点"], correct: "2,000点", explanation: "副底で20符でペンチャン待ち（123の3や789の7など）なので2符に門前ロンが10符で32符が繰り上がり合符40符になります。\n\nリーチのみの1飜だけなので答えは2000点" },//リーチロン9
  
  { image: "images/q10.png", question: "問10.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["9,600点", "7,700点", "3,900点", "5,800点"], correct: "7,700点", explanation: "副底で20符、単騎待ちで2符に東が3枚（暗刻）で8符、門前ロンなので10符がつき合計で40符になります。\n\nこのサイトでは親固定なので、自風が東、場風も東（東場）ということで自風と場風が一致し、2翻分の役になります。\nそこにリーチをかけてアガったとすると、さらに1翻加わり、合計3翻になって答えは7700点" },//リーチ東ロン10
];

const mediumQuestions = [
  { image: "images/qm1.png", question: "問1.東場の場合、この手をあがったら点数は？", choices: ["7,700点", "4,000点", "役無し", "3,900点"], correct: "7,700点", explanation: "20符＋2萬が暗刻で4符、中単騎待ちで2符、門前ロン10符の38符で繰り上がり40符になります。\n\n萬子筒子索子にそれぞれ345があるので三色同順という役になり2飜、更に5萬の赤ドラで1飜で3飜になるので40符3飜\n答えは7700点となります。" },//三色同順赤１ロン 1

  { image: "images/qm2.png", question: "問2.南場の場合、この手をあがったら点数は？", choices: ["12,000点", "4,000点", "8,000点", "16,000点"], correct: "12,000点", explanation: "20符＋東と南が暗刻16符になり自摸で2符、単騎待ちで2符の合計40符になります。\n\nリーチ自摸で2飜、親なので自風の東で1飜、場風の南で1飜、ドラが3筒で5飜となり40符5飜\n答えは4000オールの12000点（満貫）となります。" },//リー自摸東南ドラ1 2

  { image: "images/qm3.png", question: "問3.東場の場合、この手をあがったら点数は？", choices: ["2,100点", "3,900点", "1,000点", "役無し"], correct: "2,100点", explanation: "9筒暗刻の4符、北が暗刻の8符のツモで2符34符が繰り上がり40符\n\nチャンタという1、9、字牌のみの役で1飜700点オールになります" },//チャンタポンツモ

  { image: "images/q4.png", question: "問4.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["9,000点", "12,000点", "8,000点", "16,000点"], correct: "12,000点", explanation: "3元牌が雀頭2符、ツモで2符、\n\nリーチが1飜、門前ツモが1飜、ホンイツが3飜になり、役が5飜あり。30符2翻の親ツモは4000点オールの12000点。" },//リーつもホンイツ
  
  { image: "images/qm5.png", question: "問5.東場の場合、この手をあがったら点数は？\nなお、リーチしてから１巡目以内とする。", choices: ["12,000点", "4,000点", "8,000点", "16,000点"], correct: "12,000点", explanation: "三元牌が雀頭で2符、ツモで2符の24符が繰り上がり30符\n\nリーチしてから1巡目なので一発がつき、筒子の123が2個ずつあるので一盃口、更にリーチしているので裏ドラが乗り5飜の4000オールになります" },//リー１発ツモ一盃口裏１
  
  { image: "images/qm6.png", question: "問6.東場の場合、この手をあがったら点数は？\nなお、リーチしてから１巡目以内とする。", choices: ["12,000点", "3,900点", "5,800点", "4,000点"], correct: "12,000点", explanation: "リーチ1翻、一発1飜、門前ツモ1飜、ピンフ1飜、赤ドラ1飜となり、\n\n20符5翻は親のツモで12000点になります。" },//リー１発ツモ平和赤１
  
  { image: "images/qm7.png", question: "問7.北場の場合、この手をあがったら点数は？", choices: ["8,000点", "12,000点", "16,000点", "18,000点"], correct: "12,000点", explanation: "1萬の暗刻で8符、東と白の明刻が4符と4符で計8符、5萬の中張牌明刻で2符で合計20符。\n\n対々和で2飜、親なので自風の東で1飜、白で1飜、さらに赤ドラで1飜となり20符5飜\n答えは親のロンで12000点となります" },//東白対々和赤1ロン
  
  { image: "images/qm8.png", question: "問8.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["12,000点", "14,000点", "30,000点", "24,000点"], correct: "24,000点", explanation: "8萬が暗刻で4符、1萬と南が暗刻で合わせて16符、ツモで2符\n\nリーチツモで2飜、場風で1、3暗刻で2、ドラ3、赤ドラ1で合計9飜で8000オールになります。" },//リーツモ南3暗刻ドラ３赤１
  
  { image: "images/qm9.png", question: "問9.東場の場合、この手をあがったら点数は？", choices: ["24,000点", "7,700点", "12,000点", "8,000点"], correct: "12,000点", explanation: "8萬暗刻で4符、8筒が暗刻で4符、8索がポンしているので2符、単騎待ちで2符、合計40符になる。\n\nタンヤオ（19字牌を使わない）で1、三色同刻（萬子筒子索子にそれぞれ8がある。）で2、6索がドラなので合計40符4飜の12000点" },//タンヤオ三色同刻ドラ1ロン
  
  { image: "images/qm10.png", question: "問10.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["12,000点", "7,700点", "10,000点", "24,000点"], correct: "12,000点", explanation: "リーチ1、門前ツモ1、一気通貫2、赤ドラ1で合計30符になります。\n\n嵌張待ちが2符で40符5飜で12000点になります。" },//リーツモ1通赤1

];

const hardQuestions = [
    { image: "images/qh1.png", question: "問1.南場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする。", choices: ["36,000点", "24,000点", "18,000点", "16,000点"], correct: "36,000点", explanation: "副底20符のみ。リーチ1、門前ツモ1、平和1、一盃口1、清一色6、赤ドラ1で、\n\n20符11飜の16000点オール（3倍満）。" },//リーツモ一盃口平和清一色赤1

    { image: "images/qh2.png", question: "問2.東場の場合、この手をあがったら点数は？", choices: ["12,000点", "役無し", "24,000点", "-8,000点"], correct: "24,000点", explanation: "2萬と7萬が暗刻なので合わせて8符の1萬が暗刻で8符、40符\n\n門前ツモ1飜、3暗刻2、清一色6、合計9飜で24000点8000オール" },//門前3暗刻清一色6

    { image: "images/qh3.png", question: "問3.東場の場合、この手をあがったら点数は？\nなお、リーチしてから３巡目以降とする", choices: ["32,000点", "-9,000点", "28,000点", "18,000点"], correct: "18,000点", explanation: "副底20符のみ。リーチ1、門前ツモ1、タンヤオ1、平和1、二盃口（一盃口が2つ）3で\n20符7飜の18000点6000オール "},//リーツモタンヤオ平和二盃口3

    { image: "images/qh4.png", question: "問4.東場の場合、この手をあがったら点数は？", choices: ["18,000点", "20,000点", "36,000点", "16,000点"], correct: "18,000点", explanation: "1萬が暗刻で8符、東と西の暗刻が8符と8符で計16符、\n\n門前ロン10符、9索をロンで上がってるので明刻で4、場風1、対々和1、三暗刻2、混老頭2で60符7飜の18000点6000オール" },//南対々三暗刻混老頭ロン

    { image: "images/qh5.png", question: "問5.東場の場合、この手をあがったら点数は？", choices: ["1,000点", "役無し", "700点", "1,500点"], correct: "1,500点", explanation: "3萬が暗刻なので4符、中が雀頭となっており2符、中の単騎待ちなので2符、ツモで2符の合計30符\n\n役は面前自摸しかないので30符1翻の1500点500オール" },//自摸5

    { image: "images/qh6.png", question: "問6.東場の場合、この手をあがったら点数は？", choices: ["98,000点", "役無し", "180,000点", "192,000点"], correct: "192,000点", explanation: "東南西北がそれぞれ暗槓しているので32×4で128符、白が雀頭かつ単騎待ちなので合わせて4符面前ロンで10符の170符\n\n四暗刻単騎（1翻）と字一色（1翻）と大四喜（1翻）、四槓子（1翻）の役満が揃っているのでクアドラプル役満になります。" },//４役満

    { image: "images/qh7.png", question: "問7.東場の場合、この手をあがったら点数は？", choices: ["4,000点", "-12,000点", "8,000点", "12,000点"], correct: "-12,000点", explanation: "イー、リャン、スーソウで清一色でしたが、サンソウで和了のためチョンボとなります。\n\n親がチョンボをした場合には子に4000点ずつ支払うため、-12000点です。" },//清一色フェイクのチョンボ

    { image: "images/qh8.png", question: "問8.東場の場合、この手をあがったら点数は？", choices: ["2,100点", "役無し", "1,200点", "3,600点"], correct: "2,100点", explanation: "1萬と2萬が暗刻なので合わせて12符、単騎待ちで2符、ツモ2符で\n\n合計40符1飜の2100点700オール" },//暗刻単騎待ちツモ2

    { image: "images/qh9.png", question: "問9.東場の場合、この手をあがったら点数は？", choices: ["3,900点", "1,2000点", "4,000点", "8,700点"], correct: "8,700点", explanation: "9萬を暗槓しているので32符、9筒と1索を明槓しているのでそれぞれ16符の32符、単騎待ちかつ、ツモで合計88符の90符\n\n槓を3つしているので3槓子という役で2翻で90符2翻の8700点2900オール" },//三槓子ツモ9

    { image: "images/qh10.png", question: "問10.東場の場合、この手をあがったら点数は？", choices: ["2,400点", "役無し", "4,800点", "3,400点"], correct: "3,400点", explanation: "リャンピンが中張牌明槓で8符、發の暗槓で32符、白の雀頭で2符、七萬の中張牌明刻で2符,副底20符合計64符\n\n發のみ一翻の3400点です。" },//暗槓發のみ
 

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
    document.getElementById("clearHistoryBtn").classList.add("hidden"); // ← 追加
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
    document.getElementById("clearHistoryBtn").classList.remove("hidden"); // ← 追加
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


function clearScoreHistory() {
    localStorage.removeItem("scoreHistory");
    showScoreHistory(); // 表示を更新
  }
  