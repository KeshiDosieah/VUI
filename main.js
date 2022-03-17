const utterances = [ 
    ["hi", "hey", "hello", "good morning", "good afternoon"],  
    ["goodbye", "bye", "good bye"],
    ["coding", "programming", "code", "programming languages"]
  ];
    

const answers = [                                                                               
    ["Hello! I am here to guide you on your programming, academic writing and time management endevours. Find the information button on the right to get you started.", "Hey, how can I assist you? Look for the list of commands by clicking the information button on the right.", "Hi there! How may I be of assistance? Find the list of things I can help you with on the right."],						//1
    ["Bye. See you later.", "Goodbye. See you soon."],
    ["Please find the list of programming languages on the right. Get started by selecting one.", "Choose one of the programming languages on the right to get started."]					
  ];

const alternatives = [
        "Unfortunately, I could not understand your command. See the list of commands using the information button on the right.",
        "Try again with the list of commands listed in the information button on the right",
      ];


const programming=[{"name": "Java", "image":"java.png"},
                   {"name": "Python", "image":"python.png"},
                   {"name": "Javascript", "image":"javascript.png"}];

let speech = new SpeechSynthesisUtterance();
speech.volume=1;
speech.pitch=1;
speech.rate=1;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

let mic = document.getElementById("mic");
mic.addEventListener("click", function(){
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
      .replace(/r u/g, "are you");
  
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
    console.log("compare");
    let reply;
    let replyFound = false;
    let index = 0;
    for (let x = 0; x < utterancesArray.length; x++) {
      for (let y = 0; y < utterancesArray[x].length; y++) {
        if ((utterancesArray[x][y] === string) || string.includes(utterancesArray[x][y])){
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

  function displayInfo(x){
    const info = document.querySelector(".info");
    info.innerHTML ="";
    switch(x){
      case 2:
        displaybuttons(programming);
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
    info.innerHTML =elem.name;
  }