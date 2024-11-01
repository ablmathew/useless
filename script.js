// TOGGLE SIDE MENU
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// SHOW SPECIFIC SECTION
function showSection(sectionId) {
    const sections = document.getElementsByClassName('content-section');
    for (let section of sections) {
        section.classList.remove('active');
    }
    document.getElementById(sectionId).classList.add('active');
    toggleMenu(); // Close menu after selecting
}

// CHAT FUNCTIONALITY
function openChat(skillName) {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.style.display = 'block';
    document.getElementById('chat-messages').innerHTML = `<p>Chat opened for ${skillName}</p>`;
}

function sendMessage(event) {
    if (event.key === 'Enter' || event.type === 'click') {
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const message = chatInput.value.trim();
        if (message) {
            const newMessage = document.createElement('p');
            newMessage.textContent = message;
            chatMessages.appendChild(newMessage);
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll
        }
    }
}
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}