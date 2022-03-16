const utterances = [ 
    ["how are you", "how is life", "how are things"],        //0
    ["hi", "hey", "hello", "good morning", "good afternoon"],      //1
    ["what are you doing", "what is going on", "what is up"],      //2
    ["how old are you"],					//3
    ["who are you", "are you human", "are you bot", "are you human or bot"]];

const answers = [
        ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],                                                                                  	//0
        [
         "Hello!im anfjhdcgdcbgjjgnjjng hoowwwwwwwww abbbbbbbbb youuuuuuuu iiiiiii neddddddd tooooo knoooooowwwwwwwwwwww ttttttthannnkkkkk youuuuuuuuuuuuuuuu"
       ],						//1
       [
         "Nothing much",
         "About to go to sleep",
         "Can you guess?",
         "I don't know actually"
       ],						//2
       ["I am infinite"],					//3
       ["I am just a bot", "I am a bot. What are you?"],	//4
       
      
     ];

const alternatives = [
        "Go on...",
        "Try again",
      ];


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
    let reply;
    let replyFound = false;
    for (let x = 0; x < utterancesArray.length; x++) {
      for (let y = 0; y < utterancesArray[x].length; y++) {
        if (utterancesArray[x][y] === string) {
          let replies = answersArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }
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
  