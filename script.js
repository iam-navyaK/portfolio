// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Highlight navigation links on scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar functionality
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Reset menu on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

// Typed.js for multiple text effect
const typed = new Typed('.multiple-text', {
    strings: ['ECE student in JNTUCEJ', 'MERN stack developer', 'Content Writer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Toggle chatbox visibility
function toggleChat() {
    const chatbox = document.getElementById("chatbox");
    chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
}

// Close the chatbox
function closeChat() {
    document.getElementById("chatbox").style.display = "none";
}

// Send message functionality
function sendMessage(event) {
    if (event.key === "Enter" && document.getElementById("user-input").value.trim() !== "") {
        const userMessage = document.getElementById("user-input").value;
        displayMessage(userMessage, "user");

        // Simulate a bot response
        const botResponse = generateResponse(userMessage);
        setTimeout(() => {
            displayMessage(botResponse, "bot");
        }, 1000);

        document.getElementById("user-input").value = "";
    }
}

// Display message in chatbox
function displayMessage(message, sender) {
    const messageContainer = document.createElement("div");
    messageContainer.classList.add(sender);
    messageContainer.textContent = message;
    document.getElementById("chatbox-messages").appendChild(messageContainer);
    document.getElementById("chatbox-messages").scrollTop = document.getElementById("chatbox-messages").scrollHeight;
}

// Generate bot response
function generateResponse(userMessage) {
    const responses = {
        "hello": "Hi there! How can I assist you?",
        "hi": "Hi there! How can I assist you?",
        "how are you?": "I'm doing great! How about you?",
        "who are you?": "I'm your friendly chatbot here to assist you!",
        "tell me about yourself?": "I am Koya Navya Keerthana, an ECE student at JNTUCEJ. I am a MERN stack developer and a content writer. I enjoy building projects and learning new technologies.",
        "what is your name?": "My name is Koya Navya Keerthana.",
        "where do you study?": "I study at JNTU College of Engineering Jagtial.",
        "what is your background?": "I am from an Electronics and Communication Engineering (ECE) background.",
        "what are your skills?": "I am skilled in MERN stack development, Python, Content Writing, and more.",
        "how are you": "I'm doing great! How about you?",
        "who are you": "I'm your friendly chatbot here to assist you!",
        "tell me about yourself": "I am Koya Navya Keerthana, an ECE student at JNTUCEJ. I am a MERN stack developer and a content writer. I enjoy building projects and learning new technologies.",
        "what is your name": "My name is Koya Navya Keerthana.",
        "where do you study": "I study at JNTU College of Engineering Jagtial.",
        "what is your background": "I am from an Electronics and Communication Engineering (ECE) background.",
        "what are your skills": "I am skilled in MERN stack development, Python, Content Writing, and more.",
            "what do you like to do": "I enjoy coding, building projects, and writing content. I also like to learn new technologies and solve problems.",
            "what is MERN stack" : "MERN stands for MongoDB, Express.js, React.js, and Node.js. It's a popular stack for building full-stack web applications.",
            "what is your favorite programming language": "I love working with JavaScript, especially when building projects with the MERN stack.",
            "do you write blogs": "Yes, I write technical blogs on Hashnode and personal blogs on WordPress.",
            "where are you from": "I am from Telangana, India.",
            "what is your hobby": "I love reading, exploring new technologies, and writing stories for kids.",
            "do you work as a developer": "I am currently an ECE student, but I work on developing web applications using the MERN stack as part of my learning journey.",
            "tell me about your projects": "I’ve worked on several projects like a Library Management System, User Management App, and I’m currently working on an Amazon clone using the MERN stack.",
            "what is your favorite book": "I enjoy reading books related to technology and self-development. One of my favorites is 'Clean Code' by Robert C. Martin.",
            "how can I contact you": "You can reach out to me through my email or connect with me on LinkedIn.",
            "what is your goal": "My goal is to become a skilled full-stack developer and contribute to open-source projects.",
            "how can I improve my coding skills": "Practice coding regularly, participate in coding challenges, and work on real-world projects. Learning from others and reading technical blogs also helps.",
            "are you available for internships": "Yes, I am open to internship opportunities, especially in the field of web development.",
            "do you like challenges": "Absolutely! I enjoy solving complex problems and tackling new challenges. It helps me grow as a developer.",
            "?":"for queries contact keerthanakoya10@gmail.com",
            "contact":"8639658401",
            "default": "Sorry, I didn't understand that. Can you please rephrase? And feel free to contact keerthanakoya10@gmail.com for any queries"
    };

    // Return the appropriate response or default message
    return responses[userMessage.toLowerCase()] || responses["default"];
}
