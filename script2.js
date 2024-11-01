// TOGGLE SIDE MENU
function toggleMenu() {
    const menu = document.getElementById('side-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// SHOW SPECIFIC SECTION
function showSection(sectionId) {
    const sections = document.getElementsByClassName('content-section');
    for (let section of sections) {
        section.style.display = 'none'; // Hide all sections
    }
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
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
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function changeSlide(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
// Profile Photo Preview
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function(){
        const output = document.getElementById('profile-img');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

// User ID Update
function editUserId() {
    const newId = prompt("Enter your new User ID:");
    if (newId) {
        document.getElementById("user-id").textContent = newId;
    }
}
// script.js

// Open and close modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Handle Signup
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const skills = document.getElementById('signup-skills').value;

    // Store profile data in localStorage
    const userProfile = {
        name: name,
        email: email,
        password: password,
        skills: skills
    };
    localStorage.setItem('userProfile', JSON.stringify(userProfile));

    alert("Signup successful!");
    closeModal('signupModal');
}

// Handle Login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve profile data from localStorage
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (storedProfile && storedProfile.email === email && storedProfile.password === password) {
        alert("Login successful!");
        closeModal('loginModal');
        displayProfile(storedProfile);
    } else {
        document.getElementById('login-message').textContent = "Invalid email or password.";
    }
}

// Display Profile Information
function displayProfile(profile) {
    document.getElementById('profile').innerHTML = `
        <h2>Welcome, ${profile.name}</h2>
        <p>Email: ${profile.email}</p>
        <p>Skills: ${profile.skills}</p>
    `;
    showSection('profile');
}
