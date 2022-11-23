var aboutIsActive = false;
let url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {

        document.getElementById("quote").innerHTML = "&ldquo;" + item.content + "&rdquo;";

        document.getElementById("author").innerHTML = "- " + item.author;
      });

};
window.addEventListener("load", getQuote);

let reload = () => 
{
  location.reload();
}

let About = () => {
  if(!aboutIsActive){
    document.getElementById("Container").style.display = "none";
    document.getElementById("About").style.display= "flex" ;
    aboutIsActive = true;
  }
  else{
    document.getElementById("Container").style.display = "flex";
    document.getElementById("About").style.display = "none";
    aboutIsActive = false;
  }
}

function speak(){

  const quoteText = document.getElementById("quote");
  const authorName = document.getElementById("author");

  let utterance = new SpeechSynthesisUtterance(` ${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
}

function tweet(){

  const quoteText = document.getElementById("quote");

  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
}

function CopyText() {

  var copyText = document.getElementById("quote");

  copyText.select();

  navigator.clipboard.writeText(copyText.value);
  
  alert("Copied the text: " + copyText.innerHTML);
}


