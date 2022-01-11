const quizData = [
  {
    question : 'What does HTML stand for?',
    a : 'Hyper Tag Markup Language',
    b : 'Hyper Text Markup Language',
    c : 'Hyperlinks Text Mark Language',
    d : 'Hyperlinking Text Marking Language',
    correct : 'b'
  },{
    question : 'What is the correct format for a div?',
    a : 'Div-id=example',
    b : 'Div id="example"',
    c : 'Div="example"',
    d : 'Div.example',
    correct : 'b'
  },{
    question : 'What does CSS stand for?',
    a : 'Creative Style Sheets',
    b : 'Compact Style Sheets',
    c : 'Cascading Style Sheets',
    d : 'Creative Simple Sheets',
    correct : 'c'
  },{
    question : 'JavaScript File Has An Extension of:',
    a : 'java',
    b : '.Js',
    c : 'javascript',
    d : 'xml',
    correct : 'b'
  },{
    question : 'The Tag is used To Give Heading To The Table.',
    a : 'Head',
    b : 'Td',
    c : 'Th',
    d : 'Caption',
    correct : 'c'
  }
];
const quiz = document.getElementById('quiz');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');

let currentQuiz = 0;
let score = 0;
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");

loadQuiz();

function loadQuiz(){
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected(){

  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if(answerEl.checked){
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers(){
  answerEls.forEach((answerEl) => {
     answerEl.checked = false;
  });
}

submitBtn.addEventListener('click',()=>{
  //check to see the answer

  const answer = getSelected();

  //console.log(answer);
  if(answer){
    if(answer === quizData[currentQuiz].correct){
      score++;
    }
    currentQuiz++;
  if(currentQuiz < quizData.length){
     loadQuiz();
  }else{
    quiz.innerHTML = `<h2>You answered correctly at ${score} / ${quizData.length} questions</h2>
    <button onclick="location.reload()">Reload</button>`;
  }
}

});
