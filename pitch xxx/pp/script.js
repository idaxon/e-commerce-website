// Script File

// Home Section Starts
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends 

// Portfolio Section Starts
var $galleryContainer = $('.gallery').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
	$('.button-group .button').removeClass('active');
	$(this).addClass('active');

	var value = $(this).attr('data-filter');
	$galleryContainer.isotope({
		filter: value
	})
})

// magnific popup
$('.gallery').magnificPopup({
	delegate: '.overlay a',
	type: 'image',
	gallery:{
		enabled: true
	}
})
// Open the Sidebar
function openSidebar() {
	document.getElementById("sidebar").style.width = "250px"; // Width of the sidebar
	document.getElementById("overlay").style.display = "block"; // Show overlay
  }
  
  // Close the Sidebar
  function closeSidebar() {
	document.getElementById("sidebar").style.width = "0"; // Hide the sidebar
	document.getElementById("overlay").style.display = "none"; // Hide overlay
  }

  // Close the Sidebar when clicking the overlay
document.getElementById("overlay").onclick = function() {
	closeSidebar();
  };



// Testimonials Section Starts
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})
// Open the sidebar
function openSidebar() {
	document.getElementById("mySidebar").style.width = "250px";
	document.querySelector(".content").style.marginLeft = "250px";
  }
  
  // Close the sidebar
  function closeSidebar() {
	document.getElementById("mySidebar").style.width = "0";
	document.querySelector(".content").style.marginLeft = "0";
  }
  document.addEventListener("DOMContentLoaded", () => {
	const chatbot = document.getElementById("chatbot");
	const closeBtn = document.getElementById("close-btn");
	const chatForm = document.getElementById("chat-form");
	const userInput = document.getElementById("user-input");
	const messages = document.getElementById("messages");
  
	// Close chatbot
	closeBtn.addEventListener("click", () => {
	  chatbot.style.display = "none";
	});
  
	// Handle user message
	chatForm.addEventListener("submit", async (e) => {
	  e.preventDefault();
	  const userMessage = userInput.value.trim();
	  if (!userMessage) return;
  
	  // Display user message
	  appendMessage("You", userMessage);
  
	  // Send message to server
	  const botReply = await getBotReply(userMessage);
	  appendMessage("Bot", botReply);
  
	  userInput.value = "";
	});
  
	// Append a message to the chat
	function appendMessage(sender, message) {
	  const messageElement = document.createElement("div");
	  messageElement.textContent = `${sender}: ${message}`;
	  messages.appendChild(messageElement);
	  messages.scrollTop = messages.scrollHeight;
	}
  
	// Get bot reply from server
	async function getBotReply(message) {
	  try {
		const response = await fetch("/chat", {
		  method: "POST",
		  headers: { "Content-Type": "application/json" },
		  body: JSON.stringify({ message }),
		});
		const data = await response.json();
		return data.reply;
	  } catch (error) {
		return "Sorry, I couldn't connect to the server.";
	  }
	}
  });
  