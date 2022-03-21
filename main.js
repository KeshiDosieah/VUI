window.onload = (event) =>{
  let replies = answers[0];
  reply = replies[Math.floor(Math.random() * replies.length)];
  addChatEntryBot(reply);
};

const utterances = [ 
    ["hi", "hey", "hello", "good morning", "good afternoon"],  
    ["goodbye", "bye", "good bye"],
    ["coding", "programming", "code", "programming languages"],
    ["java", "java programming", "java programming language","java coding", "java code","programming java","coding java","code java"],
    ["python", "python programming", "python programming language","python coding", "python code","programming python","coding python","code python"],
    ["js", "javascript", "javascript programming", "javascript programming language","javascript coding", "javascript code","programming javascript","coding javascript","code javascript"],
    ["c", "c programming", "c programming language","c coding", "c code","programming c","coding c","code c"],
    ["c++", "c++ programming", "c++ programming language","c++ coding", "c++ code","programming c++","coding c++","code c++"],
    ["sql", "database management", "sql commands", "structured query language"],
    ["quiz"]
    
  ];
    

const answers = [                                                                               
    ["Hello! I am here to guide you on your programming, academic writing and time management endevours. Find the information button on the right to get you started.", "Hey, how can I assist you? Look for the list of commands by clicking the information button on the right.", "Hi there! How may I be of assistance? Find the list of things I can help you with on the right."],						//1
    ["Bye. See you later.", "Goodbye. See you soon."],
    ["Please find the list of programming languages on the right. Get started by selecting one.", "Choose one of the programming languages on the right to get started."],
    ["You can find Java learning resources on the right. Select one to get started.", "Here are some amazing Java programming resources to get started.", "Learn Java programming by clicking on one of the following resources."],	
    ["You can find Python learning resources on the right. Select one to get started.", "Here are some amazing Python resources to get started.", "Learn Python by clicking on one of the following resources."],				
    ["You can find Javascript learning resources on the right. Select one to get started.", "Here are some amazing Javascript resources to get started.", "Learn Javascript by clicking on one of the following resources."],
    ["You can find C programming learning resources on the right. Select one to get started.", "Here are some amazing C programming resources to get started.", "Learn C programming by clicking on one of the following resources."],
    ["You can find C++ programming learning resources on the right. Select one to get started.", "Here are some amazing C++ programming resources to get started.", "Learn C++ programming by clicking on one of the following resources."],
    ["You can find Structured Query Language resources on the right. Select one to get started.", "Here are some amazing Structured Query Language resources to get started.", "Learn Structured Query Language programming by clicking on one of the following resources."],
    ["aila quiz"]

  ];

const alternatives = [
        "Unfortunately, I could not understand your command. See the list of commands using the information button on the right.",
        "Try again with the list of commands listed in the information button on the right",
      ];


const programming=[{"name": "Java", "image":"java.png", "name1":"Javatpoint","link1":"https://www.javatpoint.com/java-tutorial","name2":"W3Schools", "lin;k2":"https://www.w3schools.com/java/", "video":"https://www.youtube-nocookie.com/embed/hBh_CC5y8-s", "desc":"Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development. Java is fast, secure, and reliable, therefore. It is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc."},
                   {"name": "Python", "image":"python.png", "name1": "Tutorialspoint", "link1":"https://www.tutorialspoint.com/python/index.htm", "name2":"W3Schools", "link2":"https://www.w3schools.com/python/python_intro.asp", "video":"https://www.youtube-nocookie.com/embed/WGJJIrtnfpk","desc":"Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general purpose language, meaning it can be used to create a variety of different programs. This versatility, along with its beginner-friendliness, has made it one of the most-used programming languages today. Python is commonly used for developing websites and software, task automation, data analysis, and data visualization."},
                   {"name": "Javascript", "image":"javascript.png", "name1": "W3Schools", "link1":"https://www.w3schools.com/js/", "name2":"CodeAcademy", "link2":"https://www.codecademy.com/learn/introduction-to-javascript", "video":"https://www.youtube-nocookie.com/embed/jS4aFq5-91M", "desc":"JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)."},
                   {"name": "C", "image":"c.png", "name1": "LearnC", "link1":"https://www.learn-c.org/", "name2": "W3Schools", "link2":"https://www.w3schools.com/c/index.php", "video":"https://www.youtube-nocookie.com/embed/KJgsSFOSQv0", "desc":"C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions. It has found lasting use in applications previously coded in assembly language. Such applications include operating systems and various application software for computer architectures that range from supercomputers to PLCs and embedded systems."},
                   {"name": "C++", "image":"cplus.png", "name1": "Programiz", "link1":"https://www.programiz.com/cpp-programming", "name2":"LearnCpp", "link2": "https://www.learncpp.com/", "video":"https://www.youtube-nocookie.com/embed/8jLOx1hD3_o", "desc":"C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on. C++ supports different ways of programming like procedural, object-oriented, functional, and so on. This makes C++ powerful as well as flexible."},
                   {"name": "SQL", "image":"sql.png", "name1": "Tutorialspoint", "link1":"https://www.tutorialspoint.com/sql/index.htm", "name2":"W3Schools", "link2": "https://www.w3schools.com/sql/", "video":"https://www.youtube-nocookie.com/embed/HXV3zeQKqGY", "desc":"SQL (Structured Query Language) is a domain-specific language used in programming and designed for managing data held in a relational database management system (RDBMS), or for stream processing. It is particularly useful in handling structured data, i.e. data incorporating relations among entities and variables."}
                  ];

let speech = new SpeechSynthesisUtterance();
speech.volume=1;
speech.pitch=1;
speech.rate=1;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

let mic = document.getElementById("mic");
mic.addEventListener("click", function(){
  window.speechSynthesis.cancel();
    let icon = document.querySelector("#icon");
    icon.className = 'fa-solid fa-microphone-lines fa-2xl fa-bounce';
    mic.style.background = "rgb(142, 182, 202)";
    mic.style.color = "rgb(20,78,110)";
    recognition.start();
    console.log("Activated");
})

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    output(transcript);
    console.log(transcript);
}

recognition.onend=function(){
    mic.style.background="rgb(20,78,110)";
    icon.className = 'fa-solid fa-microphone fa-2xl fa-duotone';
    mic.style.color = "white";
}

const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    window.speechSynthesis.cancel();
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#input").addEventListener("keydown", function(e) {
      if (e.code === "Enter") {
          console.log("You pressed the enter button!")
      }
    });
  });



  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
      .replace(/ a /g, " ")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/i need help with/g, "")
      .replace(/help with/g, "")
      .replace(/help in/g, "")
      ;

    if (compare(utterances, answers, text)) {
      // Search for exact match in triggers
      product = compare(utterances, answers, text);
      
    } 
    else {
      product = alternatives[Math.floor(Math.random() * alternatives.length)];
    }
    speech.text = product;
    addChatEntry(input, product);
    window.speechSynthesis.speak(speech);
  }
  
  function compare(utterancesArray, answersArray, string) {
    let reply;
    let replyFound = false;
    let index = 0;
    for (let x = 0; x < utterancesArray.length; x++) {
      for (let y = 0; y < utterancesArray[x].length; y++) {
        if ((utterancesArray[x][y] == string) || utterancesArray[x][y].includes(string)){
          let replies = answersArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          index = x;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }
    displayInfo(index);
    return reply;
  }

  
  function addChatEntry(input, product) {
    const messagesContainer = document.getElementById("messages");
    const today = new Date();
    let usertime = today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0');
    let userDiv = document.createElement("div");
    let userIcon = document.createElement("img");
    let userText = document.createElement("span");
    let usertimetext = document.createElement('p');
    usertimetext.innerHTML = usertime;
    userIcon.id = "userIcon";
    userIcon.src = 'user.jpg';
    userDiv.id = "user";
    userDiv.className = "user response";
    userText.innerHTML = `${input}`;
    userDiv.appendChild(userIcon);
    userDiv.appendChild(userText);
    userDiv.appendChild(usertimetext);
    messagesContainer.appendChild(userDiv);

  
    let botDiv = document.createElement("div");
    let botIcon = document.createElement("img");
    let botText = document.createElement("span");
    let bottime = today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0');
    let bottimetext = document.createElement('p');
    bottimetext.innerHTML = bottime;
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botIcon.id = "botIcon";
    botIcon.src = 'avatar.jpg';
    botText.innerText = `${product}`;
    botDiv.appendChild(botIcon);
    botDiv.appendChild(botText);
    botDiv.appendChild(bottimetext);
    messagesContainer.appendChild(botDiv);
    //messagesContainer.appendChild(dateText);
  
    messagesContainer.scrollTop =
      messagesContainer.scrollHeight - messagesContainer.clientHeight;
  
  }

  function addChatEntryUser(input){
    const messagesContainer = document.getElementById("messages");
    const today = new Date();
    let usertime = today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0');
    let userDiv = document.createElement("div");
    let userIcon = document.createElement("img");
    let userText = document.createElement("span");
    let usertimetext = document.createElement('p');
    usertimetext.innerHTML = usertime;
    userIcon.id = "userIcon";
    userIcon.src = 'user.jpg';
    userDiv.id = "user";
    userDiv.className = "user response";
    userText.innerHTML = `${input}`;
    userDiv.appendChild(userIcon);
    userDiv.appendChild(userText);
    userDiv.appendChild(usertimetext);
    messagesContainer.appendChild(userDiv);
  }

  function addChatEntryBot(product){
    const messagesContainer = document.getElementById("messages");
    const today = new Date();
    let botDiv = document.createElement("div");
    let botIcon = document.createElement("img");
    let botText = document.createElement("span");
    let bottime = today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0');
    let bottimetext = document.createElement('p');
    bottimetext.innerHTML = bottime;
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botIcon.id = "botIcon";
    botIcon.src = 'avatar.jpg';
    botText.innerText = `${product}`;
    botDiv.appendChild(botIcon);
    botDiv.appendChild(botText);
    botDiv.appendChild(bottimetext);
    messagesContainer.appendChild(botDiv);
  }

  function displayInfo(x){
    const info = document.querySelector(".info");
    info.innerHTML ="";
    switch(x){
      case 2:
        displaybuttons(programming);
        break;
      case 3:
        displayLink(programming[0]);
        break;
      case 4:
        displayLink(programming[1]);
        break;
      case 5:
        displayLink(programming[2]);
        break;
      case 6:
        displayLink(programming[3]);
        break;
      case 7:
        displayLink(programming[4]);
        break;
      case 8:
        displayLink(programming[5]);
        break;
      case 9:
        const info = document.querySelector(".info");
        let quiz = document.createElement("div");
        quiz.id = "quiz";
        quiz.innerHTML = "";
        let quizbtn = document.createElement("button");
        quizbtn.id = "submit";
        quizbtn.innerHTML = "submit";
        let result = document.createElement("div");
        result.id = "results";
        info.appendChild(quiz);
        info.appendChild(quizbtn);
        info.appendChild(result);
        var quizContainer = document.getElementById('quiz');
        var resultsContainer = document.getElementById('results');
        var submitButton = document.getElementById('submit');
        generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
        break;
    }
  }
  
  function displaybuttons(buttonArray){
    const info = document.querySelector(".info");
    let container = document.createElement("div");
    container.className = "programButton";
    buttonArray.forEach(element => {
      let slot =  document.createElement("div");
      slot.className = "slot";
      let img = document.createElement("img");
      img.src = element.image;  
      let lang = document.createElement("div");
      lang.className = "langName";
      let name = document.createElement("button");
      name.innerHTML = element.name;
      name.onclick = function(){
        addChatEntryUser(element.name);
        displayLink(element);};
      lang.appendChild(name);
      slot.appendChild(img);
      slot.appendChild(lang);
      container.appendChild(slot);
    });
    info.appendChild(container);
  }


  
  function displayLink(elem){
    const info = document.querySelector(".info");
    info.innerHTML = "";
    let title = document.createElement("h1");
    title.innerHTML = elem.name;
    let displayDiv = document.createElement("div");
    displayDiv.className = "displayDiv";
    let img = document.createElement("img");
    img.src = elem.image; 
    let desc = document.createElement("p");
    desc.innerHTML = elem.desc;
    displayDiv.appendChild(img);
    displayDiv.appendChild(desc);
    let paralink = document.createElement("p");

    let table = document.createElement("table");
    let row1 = document.createElement("tr");
    let row2 = document.createElement("tr");
    let row3 = document.createElement("tr");
    let row1td = document.createElement("td");
    row1td.innerHTML = "Useful links to learn " + elem.name;
    let row1td2 = document.createElement("td");
    row1td2.rowSpan = "3";
    row1td2.innerHTML =  "<iframe width='300' height='180' src='"+ elem.video+"' title='YouTube video player' frameborder='0' allow='accelerometer'; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    row1.appendChild(row1td);
    row1.appendChild(row1td2);

    let row2td = document.createElement("td");
    let button1 = document.createElement("button");
    button1.innerHTML = elem.name1;
    button1.onclick = function(){
      redirect(elem.link1, elem.name1);};
    row2td.appendChild(button1);
    row2.appendChild(row2td);

    let row3td = document.createElement("td");
    let button2 = document.createElement("button");
    button2.innerHTML = elem.name2;
    button2.onclick = function(){
      redirect(elem.link2, elem.name2);};
    row3td.appendChild(button2);
    row3.appendChild(row3td);
    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);

    paralink.appendChild(table);
  
    info.appendChild(title);
    info.appendChild(displayDiv);
    info.appendChild(paralink);
  }

  function redirect(url, name){
    let product = "Redirecting to " + name;
    addChatEntryBot(product);
    speech.text = product;
    window.speechSynthesis.speak(speech);
    setTimeout(()=>{
      window.open(url);
    }, 2000);
    
  }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: 'c'
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' +(i+1) +'. ' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
		// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}