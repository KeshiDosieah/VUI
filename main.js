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
    ["quiz", "test", "assessment"],
    ["quiz java, test java, assessment java", "java quiz", "java test", "java assessment"],
    ["quiz sql, test sql, assessment sql", "sql quiz", "sql test", "sql assessment"],
    ["submit"],
    ["referencing", "reference", "references", "citation", "cite"],
    ["book", "book reference", "book references", "reference book", "cite book", "citation book", "book citation"],
    ["webpage", "webpage reference", "webpage references", "reference webpage", "cite webpage", "citation webpage", "webpage citation"],
    ["journal", "journal reference", "journal references", "reference journal", "cite journal", "citation journal", "journal citation"],
    ["help", "guide", "assist", "assistance", "commands", "commands available", "help me", "assist me"],
    ["quiz python, test python, assessment python", "python quiz", "python test", "python assessment"],
    ["monday"]
    
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
    ["Test your knowledge on the topics displayed on the right. Select one to get started.", "Attempt a quiz and find your level of understanding on the selected topics on the right."],
    ["Here you go. Answer all java related questions and submit your answers using the mic, chat or submit button.", "You can find a list of java questions on the right. Use the mic, chat or submit button to submit your answer."],
    ["Here you go. Answer all SQL related questions and submit your answers using the mic, chat or submit button.", "You can find a list of SQL questions on the right. Use the mic, chat or submit button to submit your answer."],
    ["You have successfully submitted your quiz"],
    ["Select the type of source you need help referencing.", "Which source type do you wish to reference? Select one on the right."],
    ["Here you go. Apply the following to cite your book", "The following can help you to reference a book", "You can cite your book as per the following"],
    ["Here you go. Apply the following to cite your webpage", "The following can help you to reference a webpage", "You can cite your webpage as per the following"],
    ["Here you go. Apply the following to cite your journal", "The following can help you to reference a journal", "You can cite your journal as per the following"],
    ["Here's what I can do.", "You can see the available commands I can understand", "Here are the areas I can help you with."],
    ["Here you go. Answer all python related questions and submit your answers using the mic, chat or submit button.", "You can find a list of SQL questions on the right. Use the mic, chat or submit button to submit your answer."],
    ["Here's your schedule for monday"]

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
const referencing = [
  {"name":"Book", "image":"book.png", "order":'Author/editor<br>Year of publication (in round brackets)<br>Title (in italics)<br>Edition (edition number if not the first edn and/or rev. edn)<br>Place of publication: Publisher<br> Series and volume number (where relevant)', "infoimg":"bookinfo.png", "link":"https://www.citethemrightonline.com/books/printed-books"},
  {"name":"Web page", "image":"webpage.png", "order":'Organisation <br>Year that the site was published/last updated (in round brackets)<br>Title of web page (in italics)<br>Available at: URL (Accessed: date)', "infoimg":"webpageinfo.png","link":"https://www.citethemrightonline.com/digital-internet/the-internet/web-pages-with-organisations-as-authors"},
  {"name":"Journal", "image":"journal.png", "order":'Author (surname followed by initials)<br>Year of publication (in round brackets)<br>Title of article (in single quotation marks)<br>Title of journal (in italics – capitalise first letter of each word in title, except for linking words such as and, of, the, for)<br>Issue information: volume (unbracketed) and, where applicable, part number, month or season (all in round brackets)<br>Page reference (if available) or article number', "infoimg":"journalinfo.png", "link":"https://www.citethemrightonline.com/journals/journal-articles"}

];
const quizbuttons = [
  {"name": "Java", "image":"java.png", "array": "javaQuiz"},
  {"name": "SQL", "image":"sql.png", "array": "sqlQuiz"},
  {"name": "Python", "image":"python.png", "array": "pyQuiz"}
];

const schedule = [{"day": "Monday","class":"CST3140 at 11:30"},
                  {"day": "Tuesday"},{"day": "Wednesday"},{"day": "Thursday"},{"day": "Friday"}];

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
    var audio = new Audio('start.mp3');
    audio.play();
})

recognition.onresult=function(e){
  mic.style.background="rgb(20,78,110)";
  icon.className = 'fa-solid fa-microphone fa-2xl fa-duotone';
  mic.style.color = "white";
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    output(transcript);
    console.log(transcript);
}

recognition.onend=function(){
  console.log("ends....");
  let icon = document.querySelector("#icon");
    mic.style.background="rgb(20,78,110)";
    icon.className = 'fa-solid fa-microphone fa-2xl fa-duotone';
    mic.style.color = "white";
    var audio = new Audio('start.mp3');
    audio.play();
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
      .replace(/i want to try /g, "")
      .replace(/how to /g,"")
      .replace(/attempt/g,"")
      .replace(/try/g,"")
      .replace(/how can you/g, "")
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
    displayInfo(index(utterances, answers, text));
    window.speechSynthesis.speak(speech);
  }
  
  function compare(utterancesArray, answersArray, string) {
    //     const info = document.querySelector(".info");
    // info.innerHTML ="";
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
    // displayInfo(index);
    return reply;
  }

  function index(utterancesArray, answersArray, string) {
    //     const info = document.querySelector(".info");
    // info.innerHTML ="";
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
    // displayInfo(index);
    return index;
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
    speech.text = product;
    window.speechSynthesis.speak(speech);
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
        displayquizbuttons(quizbuttons);
        break;
      case 10:
        displayQuiz(javaQuiz);
        break;
      case 11:
        displayQuiz(sqlQuiz);
        break;
      case 13:
        displayrefbuttons(referencing);
        break;
      case 14:
        displayref(referencing[0]);
        break;
      case 15:
        displayref(referencing[1]);
        break; 
      case 16:
        displayref(referencing[2]);
        break;
      case 17:
        modal.style.display = "block";
        break;
      case 18:
        displayQuiz(pyQuiz);
        break;
      case 19:
        setTimeout(function(){
          if (schedule[0].class != ""){
          //speech.text = "You have" + schedule[0].class;
          addChatEntryBot("You have " + schedule[0].class);
          }else{
          addChatEntryBot("You have no class on Monday");
          }
        }, 2000); 

        //window.speechSynthesis.speak(speech);
        //displayschedule(schedule[0]);
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

  function displayrefbuttons(buttonArray){
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
        displayref(element);
      };
      lang.appendChild(name);
      slot.appendChild(img);
      slot.appendChild(lang);
      container.appendChild(slot);
    });
    info.appendChild(container);
    
  }

  function displayquizbuttons(buttonArray){
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
        if (element.array == "javaQuiz"){
          addChatEntryUser(element.name);
          displayQuiz(javaQuiz);
        }else if (element.array == "sqlQuiz"){
          addChatEntryUser(element.name);
          displayQuiz(sqlQuiz);
        }else if (element.array == "pyQuiz"){
          addChatEntryUser(element.name);
          displayQuiz(pyQuiz);
        }
      };
      lang.appendChild(name);
      slot.appendChild(img);
      slot.appendChild(lang);
      container.appendChild(slot);
    });
    info.appendChild(container);
  }

  function displayref(elem){
    const info = document.querySelector(".info");
    info.innerHTML = "";
    let img = document.createElement("img");
    img.src = elem.image;
    let infoimg = document.createElement("img");
    infoimg.src = elem.infoimg;
    infoimg.className = "infoimg";
    let displayDiv = document.createElement("div");
    displayDiv.className = "displayDiv";
    let title = document.createElement("h1");
    title.innerHTML = 'Reference a '+ elem.name;
    let desc = document.createElement("p");
    desc.innerHTML = '<span> Citation Order: </span><br>' + elem.order;
    let button1 = document.createElement("button");
    button1.innerHTML = "Click for more";
    button1.className ="refbutton";
    button1.onclick = function(){
      redirect(elem.link, "Citethemright");};
    displayDiv.appendChild(img);
    displayDiv.appendChild(desc);
    info.appendChild(title);
    info.appendChild(displayDiv);
    info.appendChild(infoimg);
    info.appendChild(button1);
  }
  
  function displayLink(elem){
     const info = document.querySelector(".info");
    // info.innerHTML = "";
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
function displayschedule(elem){
  addChatEntryBot(elem.class);
    // speech.text = elem.class;
    // window.speechSynthesis.speak(speech);
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


var javaQuiz = [
	{
		question: "What is inheritance?",
		answers: {
			A: 'It is the process where one object acquires the properties of another.',
			B: 'Inheritance is the ability of an object to take on many forms.',
			C: 'Inheritance is a technique to define different methods of same type'
		},
		correctAnswer: 'A'
	},
	{
		question: "Can be constructor be made final?",
		answers: {
			A: 'True',
			B: 'False'
		},
		correctAnswer: 'B'
	},
  {
		question: "Which method can be used to find the length of a string?",
		answers: {
			A: 'len()',
			B: 'getSize()',
			C: 'getLength()',
      D: 'length()'
		},
		correctAnswer: 'D'
	},
  {
		question: "Which will legally declare, construct, and initialize an array?",
		answers: {
			A: 'int [] myList = {"1", "2", "3"};',
			B: 'int [] myList = (5, 8, 2)',
			C: 'int myList [] [] = {4,9,7,0};',
      D: 'int myList [] = {4, 3, 7};'
		},
		correctAnswer: 'D'
	},
  {
		question: "Which one is a valid declaration of a boolean?",
		answers: {
			A: 'boolean b1 = 0;',
			B: 'boolean b5 = no;',
			C: 'boolean b3 = false;',
      D: 'boolean b4 = Boolean.false();'
		},
		correctAnswer: 'C'
	}
];

var sqlQuiz = [
	{
		question: "Which of the following is not true about modifying rows in a table?",
		answers: {
			A: 'Existing rows in a table are modified using the UPDATE statement.',
			B: 'You can update more than one row at a time.',
			C: 'All the rows in a table are modified if you omit the WHERE clause.',
      D: 'None of the above'
		},
		correctAnswer: 'D'
	},
	{
		question: "Which of the following code will successfully delete the table LOCATIONS from the database?",
		answers: {
			A: 'DROP TABLE locations;',
			B: 'DELETE TABLE locations;',
      c: 'TRUNCATE TABLE locations;',
      D: 'None of the above.'
		},
		correctAnswer: 'A'
	},
  {
		question: "The SQL WHERE clause:",
		answers: {
			A: 'limits the column data that are returned.',
			B: 'limits the row data are returned.',
			C: 'Both A and B are correct.',
      D: 'Neither A nor B are correct.'
		},
		correctAnswer: 'B'
	},
  {
		question: "	Which one of the following sorts rows in SQL?",
		answers: {
			A: 'SORT BY',
			B: 'ALIGN BY',
			C: 'ORDER BY',
      D: 'GROUP BY'
		},
		correctAnswer: 'C'
	},
  {
		question: "Which of the following is the correct order of keywords for SQL SELECT statements?",
		answers: {
			A: 'SELECT, FROM, WHERE',
			B: 'FROM, WHERE, SELECT',
			C: 'WHERE, FROM, SELECT',
      D: 'SELECT, WHERE, FROM'
		},
		correctAnswer: 'A'
	}
];

var pyQuiz = [
	{
		question: "What will be the value of the following Python expression? 4 + 3 % 5",
		answers: {
			A: '7',
			B: '2',
			C: '4',
      D: '1'
		},
		correctAnswer: 'A'
	},
	{
		question: "Which keyword is used for function in Python language?",
		answers: {
			A: 'Function',
			B: 'Def',
      c: 'Fun',
      D: 'Define'
		},
		correctAnswer: 'B'
	},
  {
		question: "To add a new element to a list we use which Python command?",
		answers: {
			A: 'list1.addEnd(5)',
			B: 'list1.addLast(5)',
			C: 'list1.append(5)',
      D: 'list1.add(5)'
		},
		correctAnswer: 'C'
	},
  {
		question: " What will be the output of the following code snippet? a = [1,2] print(a*3)",
		answers: {
			A: 'Error',
			B: '[1,2]',
			C: '[1,2,1,2]',
      D: '[1,2,1,2,1,2]'
		},
		correctAnswer: 'D'
	},
  {
		question: "What keyword is used in Python to raise exceptions?",
		answers: {
			A: 'raise',
			B: 'try',
			C: 'goto',
      D: 'except'
		},
		correctAnswer: 'A'
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
        `<label>
        <input type="radio" name="question${i}" value="${letter}">
        ${letter}.
        ${questions[i].answers[letter]}
      </label>`
        //'<input type="radio" name="question'+i+'" value="'+ letter +'"><label for="'+letter+'">'+ letter + ' : ' + questions[i].answers[letter] +'</label>'
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
      answerContainers[i].style.background = 'rgb(77, 214, 127)';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.background = 'rgb(219, 66, 66)';
		}
	}

  if (numCorrect >3){
    let msg = "Congratulations. You got " + numCorrect + ' out of ' + questions.length + ". Try learning another language.";
    addChatEntryBot(msg);
    speech.text = msg;
    
    window.speechSynthesis.speak(speech);
    displaybuttons(programming);
  }else{
    let msg = "Oh no. You got only " + numCorrect + ' out of ' + questions.length + ". Learn the language again.";
    addChatEntryBot(msg);
    speech.text = msg;
    window.speechSynthesis.speak(speech);
    if (questions === javaQuiz){
      displayLink(programming[0]);
    }else if (questions === sqlQuiz){
      displayLink(programming[5]);
    }else if (questions === pyQuiz){
      displayLink(programming[1]);
    }
    
  }
	// // show number of correct answers out of total
	// resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
    addChatEntryUser("submit");
    addChatEntryBot("You have successfully submitted the quiz");
		showResults(questions, quizContainer, resultsContainer);
	}

  recognition.onresult=function(e){
    mic.style.background="rgb(20,78,110)";
    icon.className = 'fa-solid fa-microphone fa-2xl fa-duotone';
    mic.style.color = "white";
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    if (transcript == "submit"){
      addChatEntryUser("submit");
      addChatEntryBot("You have successfully submitted the quiz");
      showResults(questions, quizContainer, resultsContainer);
    }
}
const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
  if ((e.code === "Enter") && (inputField.value == "submit")){
    window.speechSynthesis.cancel();
    let input = inputField.value;
      inputField.value = "";
      showResults(questions, quizContainer, resultsContainer);
  }
});
}

function displayQuiz(questions){
  const info = document.querySelector(".info");
  info.innerHTML = "";
        let quiz = document.createElement("div");
        quiz.id = "quiz";
        quiz.innerHTML = "";
        let quizbtn = document.createElement("button");
        quizbtn.id = "submit";
        quizbtn.innerHTML = "Submit";
        let result = document.createElement("div");
        result.id = "results";
        info.appendChild(quiz);
        info.appendChild(quizbtn);
        info.appendChild(result);
        var quizContainer = document.getElementById('quiz');
        var resultsContainer = document.getElementById('results');
        var submitButton = document.getElementById('submit');
        generateQuiz(questions, quizContainer, resultsContainer, submitButton);
}

