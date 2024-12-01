document.addEventListener("DOMContentLoaded", () => {
    
  
    // Popup Animation
  const popup = document.getElementById("namePopup");
  const submitName = document.getElementById("submitName");
  setTimeout(() => popup.classList.add("show"), 2000);

  submitName.addEventListener("click", () => {
    const name = document.getElementById("username").value.trim();
    if (name) {
      popup.classList.remove("show");
      setGreeting(name);
    }
  });

  // Greeting
  const greeting = document.getElementById("greeting");
  function setGreeting(name) {
    const hour = new Date().getHours();
    let timeGreeting = "Good Evening";
    if (hour < 12) timeGreeting = "Good Morning";
    else if (hour < 18) timeGreeting = "Good Afternoon";
    greeting.textContent = `${timeGreeting}, ${name}!`;
  }

    // Current Time
    const currentTime = document.getElementById("current-time");
    setInterval(() => {
      const now = new Date();
      currentTime.textContent = now.toLocaleTimeString();
    }, 1000);
  
    // Search and Autocomplete
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const autoCompleteBox = document.getElementById("autoCompleteBox");
  
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim();
      if (query) {
        fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${query}`)
          .then(response => response.json())
          .then(data => {
            autoCompleteBox.innerHTML = data[1].map(suggestion => `<div>${suggestion}</div>`).join("");
            autoCompleteBox.style.display = "block";
          });
      } else {
        autoCompleteBox.style.display = "none";
      }
    });
  
    autoCompleteBox.addEventListener("click", (event) => {
      if (event.target.tagName === "DIV") {
        searchInput.value = event.target.textContent;
        autoCompleteBox.style.display = "none";
      }
    });
  
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim();
      if (query) {
        window.open(`https://www.google.com/search?q=${query}`, "_blank");
      }
    });

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
document.getElementById("voiceSearch").addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const speechResult = event.results[0][0].transcript;
  document.getElementById("searchInput").value = speechResult;
};

document.getElementById("randomFact").addEventListener("click", async () => {
    const response = await fetch("https://uselessfacts.jsph.pl/random.json?language=en");
    const data = await response.json();
    alert(data.text);
  });

  document.getElementById("feedbackButton").addEventListener("click", () => {
    alert("We'd love your feedback! Please email us at spess@gmail.com.");
  });

 
 
/* Game */



  
  
  
  

  });
  