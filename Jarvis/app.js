let btn=document.querySelector('.talk');
let content=document.querySelector('.content');

function speak(text){

  const text_speak= new SpeechSynthesisUtterance(text);

  text_speak.rate=1;
  text_speak.volume=1;
  text_speak.pitch=1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day=new Date();
    var hour=day.getHours();

    if(hour>0 && hour<12){
        speak("Good Morning Boss");
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Sir");
    }

    else{
        speak("Good evening Master");
    }

    
}



window.addEventListener('load',()=>{
    speak("initializing Jarvis ..");
    wishMe();

})

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition= new SpeechRecognition();

recognition.onresult =(event)=>{
    const current = event.resultIndex;
    const transcript=event.results[current][0].transcript;
    content.textContent= transcript;
    takeCommand(transcript.toLowerCase());
   
}

btn.addEventListener('click',()=>{
    content.textContent="Listening..."
    recognition.start();
    // gn();
})

function takeCommand(message){

    if(message.includes('hey') || message.includes('hello')){
        speak("hello sir, how may i help you ?");
    }

    else if(message.includes('open google')){
        window.open("https://google.com","_blank");
        speak("opening google..");
    }
    else if(message.includes('open instagram')){
        window.open("https://instagram.com","_blank");
        speak("opening instagram..");
    }
    else if(message.includes('open youtube')){
        window.open("https://youtube.com","_blank");
        speak("opening youtube..");
    }
    else if(message.includes('open facebook')){
        window.open("https://facebook.com","_blank");
        speak("opening facebook..");
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('who was')){
        window.open(`https://www.google.com/search?q=${message.replace(" ","+")}`,"_blank");
        const finalText ="this is what i found on wikipedia regarding "+message;
        speak(finalText);
    }
    else if(message.includes('wikipedia')){
        window.open(`https://www.wikipedia.org/wiki/${message.replace("wikipedia"," ")}`,"_blank");
        speak("this is what i found on wikipedia"+message);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if(message.includes('vscode')) {
        window.open('vscode://')
        const finalText = "Opening Vscode";
        speak(finalText);
    }

    else if(message.includes('mother')){
        speak("your mother name is Yamuna")
    }
    else if(message.includes('sister')){
        speak("your sister name is sowmiya")
    }
   

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }

    



    
}