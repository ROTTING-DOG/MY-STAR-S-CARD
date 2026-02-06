// Basic Information
const valentineName = "MYA";
const pageTitle = "Will You Be My Valentine? ♡";
document.title = pageTitle;

// Floating emojis
const floatingEmojis = ['❤︎', 'ꉂ(˵˃ ᗜ ˂˵)', '۶ৎ', '💗', '❀', '🧸', '🪼'];

const floatContainer = document.getElementById('floating-emojis');
for(let i=0;i<20;i++){
  const emoji = document.createElement('div');
  emoji.innerText = floatingEmojis[Math.floor(Math.random()*floatingEmojis.length)];
  emoji.className = 'floating';
  emoji.style.left = Math.random()*100 + 'vw';
  emoji.style.animationDuration = 10 + Math.random()*10 + 's';
  emoji.style.fontSize = 20 + Math.random()*30 + 'px';
  floatContainer.appendChild(emoji);
}

// Questions
const questions = [
  {
    text: "Do you love me?",
    yesBtn: "Yes",
    noBtn: "No..",
    secretAnswer: "One out of the many reasons I love you. You shine like the brightest star in the nightsky and help guide souls to need help or comfort."
  },
  {
    text: "How much do you love me?(๑>◡<๑)",
    yesBtn: "Very much!",
    noBtn: "as much as i love my big toe"
    secretAnswer: "You and your soul are calming like a beautiful field of flowers in srping."
  },
  {
    text: "Would maybe...possibly answer my next question for me?ꉂ(˵˃ ᗜ ˂˵)",
    yesBtn: "Yes ofc!",
    noBtn: "No..never you stinky person..ew",
    secretAnswer: "Another out of many of the reasons I love you. You're such a beautiful and radiant soul. I wish that we keep meeting in our different lifetimes."
  },
  {
    text: "Will you be my Valentine...?",
    yesBtn: "Yes!",
    noBtn: "No"
  }
];

let currentQuestion = 0;
const questionTitle = document.getElementById('question-title');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const hiddenMessage = document.getElementById('hidden-message');
const nextBtn = document.getElementById('next-btn');

function showQuestion(index){
  const q = questions[index];
  questionTitle.innerText = q.text;
  yesBtn.innerText = q.yesBtn;
  noBtn.innerText = q.noBtn;
  hiddenMessage.innerText = '';
  nextBtn.style.display = 'none';
}

function showHiddenMessage(message){
  hiddenMessage.innerText = message;
  // Wait 12 seconds before showing next button
  setTimeout(() => {
    nextBtn.style.display = 'inline-block';
  }, 20000);
}

yesBtn.addEventListener('click', () => {
  const q = questions[currentQuestion];
  if(q.secretAnswer){
    showHiddenMessage(q.secretAnswer);
  } else {
    nextBtn.style.display = 'inline-block';
  }
});

noBtn.addEventListener('click', () => {
  // Allow clicking "No" and just go to next question after 3 sec
  const q = questions[currentQuestion];
  if(q.secretAnswer){
    showHiddenMessage(q.secretAnswer);
  } else {
    nextBtn.style.display = 'inline-block';
  }
});

nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if(currentQuestion < questions.length){
    showQuestion(currentQuestion);
  } else {
    // Celebration
    questionTitle.innerText = "I'm the luckiest person in the world, thank you so much my star.";
    hiddenMessage.innerText = "Thank you so much for gracing my life with your presence and light. 💐🌸💞💗💋🫂";
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  }
});

// Music Controls
const music = document.getElementById('music');
const musicBtn = document.getElementById('music-btn');
musicBtn.addEventListener('click', () => {
  if(music.paused){
    music.play();
    music.volume = 0.5;
    musicBtn.innerText = "🔇 Stop Music";
  } else {
    music.pause();
    musicBtn.innerText = "🎵 Play Music";
  }
});

// Initialize first question
showQuestion(currentQuestion);
