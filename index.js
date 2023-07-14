// create a random number generator
let num1 = parseInt(Math.random() * 10);
let num2 = parseInt(Math.random() * 10);

//update the question
let question = document.getElementById('question');
let input = document.getElementById('input');
let form = document.getElementById('form');

let score1= document.getElementById('score');

//score
let score =JSON.parse( localStorage.getItem('score'));

if(!score) {
  score =0}

  score1.innerText=`Score:${score}`

question.innerText = `What is ${num1} multiply by ${num2}`;

//getting the response
let correctAnswer = num1 * num2;

form.addEventListener("submit", () => {
  let userAns = +input.value;
  //+ add to get userAns in 'num' other wise we get in string
  if (userAns === correctAnswer) {
    score++;
   UpdatelocalStorage()
  }
  else {
    score--;
    UpdatelocalStorage()
  }
})

//create the local storage function to store the score

function UpdatelocalStorage(){
  localStorage.setItem("score",JSON.stringify(score));
  //json.stringnify to convert number to string
}