// Koya Navya Keerthana - Terminal Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
   
    
    // Window controls functionality
    const closeBtn = document.querySelector('.close');
    const minimizeBtn = document.querySelector('.minimize');
    const maximizeBtn = document.querySelector('.maximize');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to close this terminal?')) {
                window.close();
            }
        });
    }
    
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => {
            const terminal = document.querySelector('.terminal-wrapper');
            if (terminal) {
                terminal.style.transform = 'scale(0.8)';
                terminal.style.opacity = '0.5';
                setTimeout(() => {
                    terminal.style.transform = 'scale(1)';
                    terminal.style.opacity = '1';
                }, 1000);
            }
        });
    }
    
    if (maximizeBtn) {
        maximizeBtn.addEventListener('click', () => {
            const terminal = document.querySelector('.terminal-wrapper');
            if (terminal) {
                terminal.classList.toggle('maximized');
                if (terminal.classList.contains('maximized')) {
                    terminal.style.position = 'fixed';
                    terminal.style.top = '10px';
                    terminal.style.left = '10px';
                    terminal.style.right = '10px';
                    terminal.style.bottom = '10px';
                    terminal.style.zIndex = '1000';
                    terminal.style.maxWidth = 'none';
                } else {
                    terminal.style.position = '';
                    terminal.style.top = '';
                    terminal.style.left = '';
                    terminal.style.right = '';
                    terminal.style.bottom = '';
                    terminal.style.zIndex = '';
                    terminal.style.maxWidth = '';
                }
            }
        });
    }
    
    // Terminal input functionality
    const terminalInput = document.querySelector('.terminal-input');
    const terminal = document.querySelector('.terminal');
    
    if (terminalInput) {
        terminalInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const command = this.value.trim();
                if (command) {
                    executeCommand(command);
                    this.value = '';
                }
            }
        });
    }
    
    // Command execution
    function executeCommand(command) {
        const outputDiv = document.createElement('div');
        outputDiv.className = 'command-output';
        
        // Add command to terminal
        const commandLine = document.createElement('div');
        commandLine.innerHTML = `<span class="prompt">navya-keerthana-koya@portfolio:~$</span> <span class="command-text">${command}</span>`;
        outputDiv.appendChild(commandLine);
        
        // Process command
        const response = processCommand(command.toLowerCase());
        if (response !== 'CLEAR_TERMINAL') {
            const responseLine = document.createElement('div');
            responseLine.className = 'output-line';
            responseLine.innerHTML = response;
            outputDiv.appendChild(responseLine);
        }
        
        // Add to terminal
        if (terminal && response !== 'CLEAR_TERMINAL') {
            terminal.appendChild(outputDiv);
            terminal.scrollTop = terminal.scrollHeight;
        }
    }
    
    // Command processor
    function processCommand(command) {
        const commands = {
            'help': `
                <div class="success-text">📋 Available commands:</div>
                <div class="content-point">about - Learn about Navya</div>
                <div class="content-point">education - View educational background</div>
                <div class="content-point">skills - Technical skills and expertise</div>
                <div class="content-point">experience - Professional experience</div>
                <div class="content-point">projects - Featured projects</div>
                <div class="content-point">achievements - Coding achievements</div>
                <div class="content-point">certifications - Professional certifications</div>
                <div class="content-point">contact - Get contact information</div>
                <div class="content-point">all - Display complete portfolio</div>
                <div class="content-point">clear - Clear the terminal</div>
                
            `,
            'about': `
                <div class="highlight">👋 About Koya Navya Keerthana</div>
                <div class="content-point">B.Tech student in Electronics and Communication Engineering</div>
                <div class="content-point">Passionate full-stack developer with expertise in modern web technologies</div>
                <div class="content-point">IoT enthusiast with hands-on experience in wireless communication systems</div>
                <div class="content-point">Active competitive programmer with 1700+ CodeChef rating</div>
                <div class="content-point">Experienced in secure networking and VPN implementations</div>
            `,
            'education': `
                <div class="highlight">🎓 Educational Background</div>
                <div class="project-card">
                    <div class="project-title">B.Tech in Electronics and Communication</div>
                    <div class="content-point"><span class="accent-text">Institution:</span> JNTUH College of Engineering Jagtial</div>
                    <div class="content-point"><span class="accent-text">Expected:</span> 2025</div>
                    <div class="content-point"><span class="accent-text">CGPA:</span> 7.0/10.0</div>
                </div>
                <div class="project-card">
                    <div class="project-title">Intermediate Education</div>
                    <div class="content-point"><span class="accent-text">Institution:</span> New Vision College (2019-2021)</div>
                    <div class="content-point"><span class="accent-text">Score:</span> 95% (TS IPE)</div>
                </div>
                <div class="project-card">
                    <div class="project-title">Secondary Education</div>
                    <div class="content-point"><span class="accent-text">Institution:</span> New Vision School (2019)</div>
                    <div class="content-point"><span class="accent-text">Score:</span> 10 CGPA (State Boards)</div>
                </div>
            `,
            'skills': `
                <div class="highlight">💻 Technical Skills</div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-value">Programming</div>
                        <div class="stat-label">Python, JavaScript (ES6+), Java</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">Web Tech</div>
                        <div class="stat-label">HTML5, CSS3, Bootstrap, React.js</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">Backend</div>
                        <div class="stat-label">Node.js, Express.js, REST APIs</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">Database</div>
                        <div class="stat-label">MongoDB, SQL</div>
                    </div>
                </div>
                <div class="content-point"><span class="accent-text">IoT & Communication:</span> LoRa (SX1278), Sensor Integration, Serial Communication</div>
                <div class="content-point"><span class="accent-text">Tools & Others:</span> Git, GitHub, Linux, VPN & Networking, OOPS</div>
                <div class="content-point"><span class="accent-text">Security:</span> Systems and Usable Security, JWT Authentication</div>
            `,
            'experience': `
                <div class="highlight">💼 Professional Experience</div>
                <div class="project-card">
                    <div class="project-title">🏢 Top Trove Foundation - Head Of Content</div>
                    <div class="content-point"><span class="accent-text">Duration:</span> April 2024 - September 2024</div>
                    <div class="content-point">Coordinated with 6+ leadership members and 10+ interns</div>
                    <div class="content-point">Drove fundraising initiatives, raising ₹8,000 for underprivileged communities</div>
                    <div class="content-point">Increased NGO visibility by 40% through enhanced content strategies</div>
                    <div class="content-point">Led content creation and strategic planning initiatives</div>
                </div>
            `,
   'projects': `
    <div class="highlight">🚀 Featured Projects</div>

    <div class="project-card">
        <div class="project-title">
            👥 UserVerse - User Management System
            <a href="https://github.com/iam-navyaK/user-management-app" target="_blank" class="link-icon">↗</a>
        </div>
        <div class="content-point">Fully responsive system using React and Bootstrap</div>
        <div class="content-point">Enhanced user engagement across 5 different device types</div>
        <div class="content-point">JWT-based authentication for secure access</div>
        <div class="content-point">MongoDB integration for efficient CRUD operations</div>
        <div>
            <span class="tech-stack">React</span><span class="tech-stack">Bootstrap</span><span class="tech-stack">Node.js</span><span class="tech-stack">Express</span><span class="tech-stack">MongoDB</span><span class="tech-stack">JWT</span>
        </div>
    </div>

    <div class="project-card">
        <div class="project-title">
            🔒 Private Network with WireGuard VPN
            <!-- Add redirect icon only if you have a live link -->
            <!-- Example:
            <a href="https://github.com/your-username/wireguard-project" target="_blank" class="link-icon">↗</a>
            -->
        </div>
        <div class="content-point">Configured WireGuard VPN server for secure networking</div>
        <div class="content-point">Implemented IP forwarding and NAT for subnet communication</div>
        <div class="content-point">Conducted network traffic analysis for debugging</div>
        <div>
            <span class="tech-stack">WireGuard</span><span class="tech-stack">VPN</span><span class="tech-stack">Network Security</span><span class="tech-stack">Linux</span>
        </div>
    </div>

    <div class="project-card">
        <div class="project-title">
            🌦️ LoRa-based Wireless Weather Station
            <a href="https://lora-based-wireless-weather-station.vercel.app/" target="_blank" class="link-icon">↗</a>
        </div>
        <div class="content-point">IoT system using ESP32 and Arduino Nano</div>
        <div class="content-point">Real-time monitoring: temperature, humidity, pressure, light, rainfall</div>
        <div class="content-point">Long-range, low-power LoRa communication (RA-02 SX1278)</div>
        <div class="content-point">Optimized for remote environmental monitoring and agriculture</div>
        <div>
            <span class="tech-stack">ESP32</span><span class="tech-stack">Arduino</span><span class="tech-stack">LoRa</span><span class="tech-stack">IoT</span><span class="tech-stack">Sensors</span>
        </div>
    </div>
`

,
            'achievements': `
                <div class="highlight">🏆 Achievements</div>
                <div class="project-card">
                    <div class="project-title">🥇 CodeChef Excellence</div>
                    <div class="content-point">Peak rating: <span class="success-text">1700</span></div>
                    <div class="content-point">Participated in <span class="accent-text">23+ rated contests</span></div>
                    <div class="content-point">Consistent competitive programming performance</div>
                </div>
                <div class="project-card">
                    <div class="project-title">⭐ HackerRank Python</div>
                    <div class="content-point">Achieved <span class="success-text">4-star rating</span> in Python</div>
                    <div class="content-point">Demonstrated strong algorithmic problem-solving skills</div>
                </div>
            `,
            'certifications': `
                <div class="highlight">📜 Professional Certifications</div>
                <div class="content-point">🔐 <span class="accent-text">NPTEL - Systems and Usable Security (Elite)</span></div>
                <div class="content-point">🐍 <span class="accent-text">Python course powered by IBM Developer Skills Network</span></div>
                <div class="content-point">💼 <span class="accent-text">TCS - ion Career Edge - Young Professionals course</span></div>
                <div class="content-point">🌐 <span class="accent-text">Networking Basics - Cisco Networking Academy</span></div>
            `,
            'contact': `
                <div class="highlight">📞 Contact Information</div>
                <div class="content-point">📧 Email: <a href="mailto:keerthanakoya10@gmail.com" class="link">keerthanakoya10@gmail.com</a></div>
                <div class="content-point">📱 Phone: <a href="tel:+918639658401" class="link">+91 8639658401</a></div>
                <div class="content-point">💼 LinkedIn: <a href="https://linkedin.com/in/koya-navya-keerthana" class="link" target="_blank">linkedin.com/in/koya-navya-keerthana</a></div>
                <div class="content-point">🌍 Location: India</div>
                <div class="muted-text">Feel free to reach out for opportunities, collaborations, or just to connect!</div>
            `,
            'all': `
                <div class="highlight">📋 Complete Portfolio - Koya Navya Keerthana</div>
                
                <div class="section-header">
                    <span class="section-icon">👋</span> About
                </div>
                <div class="content-point">B.Tech student in Electronics and Communication Engineering</div>
                <div class="content-point">Full-stack developer with expertise in modern web technologies</div>
                <div class="content-point">IoT enthusiast with hands-on experience in wireless systems</div>
                
                <div class="section-header">
                    <span class="section-icon">🎓</span> Education
                </div>
                <div class="content-point"><span class="accent-text">B.Tech ECE</span> - JNTUH College of Engineering Jagtial (Expected 2025) - CGPA: 7.0/10.0</div>
                <div class="content-point"><span class="accent-text">Intermediate</span> - New Vision College (2019-2021) - 95% (TS IPE)</div>
                <div class="content-point"><span class="accent-text">10th</span> - New Vision School (2019) - 10 CGPA</div>
                
                <div class="section-header">
                    <span class="section-icon">💻</span> Technical Skills
                </div>
                <div class="content-point"><span class="accent-text">Programming:</span> Python, JavaScript (ES6+), Java</div>
                <div class="content-point"><span class="accent-text">Web Tech:</span> HTML5, CSS3, Bootstrap, React.js, Node.js, Express.js</div>
                <div class="content-point"><span class="accent-text">Database:</span> MongoDB, SQL</div>
                <div class="content-point"><span class="accent-text">IoT:</span> LoRa Communication (SX1278), Sensor Integration</div>
                <div class="content-point"><span class="accent-text">Tools:</span> Git, GitHub, Linux, VPN & Networking</div>
                
                <div class="section-header">
                    <span class="section-icon">💼</span> Experience
                </div>
                <div class="content-point"><span class="accent-text">Top Trove Foundation</span> - Head Of Content (Apr 2024 - Sep 2024)</div>
                <div class="content-point">Raised ₹8,000 for communities, increased visibility by 40%</div>
                
                <div class="section-header">
                    <span class="section-icon">🚀</span> Key Projects
                </div>
                <div class="content-point"><span class="accent-text">UserVerse:</span> Full-stack User Management System with React, Node.js, MongoDB</div>
                <div class="content-point"><span class="accent-text">WireGuard VPN:</span> Private network implementation with traffic analysis</div>
                <div class="content-point"><span class="accent-text">Weather Station:</span> LoRa-based IoT system for environmental monitoring</div>
                
                <div class="section-header">
                    <span class="section-icon">🏆</span> Achievements
                </div>
                <div class="content-point">CodeChef rating: <span class="success-text">1700</span> (23+ contests)</div>
                <div class="content-point">HackerRank Python: <span class="success-text">4-star rating</span></div>
                
                <div class="section-header">
                    <span class="section-icon">📜</span> Certifications
                </div>
                <div class="content-point">NPTEL - Systems and Usable Security (Elite)</div>
                <div class="content-point">Python (IBM Developer Skills Network)</div>
                <div class="content-point">TCS ion Career Edge & Cisco Networking Basics</div>
                
                <div class="section-header">
                    <span class="section-icon">📞</span> Contact
                </div>
                <div class="content-point">📧 <a href="mailto:keerthanakoya10@gmail.com" class="link">keerthanakoya10@gmail.com</a></div>
                <div class="content-point">📱 <a href="tel:+918639658401" class="link">+91 8639658401</a></div>
                <div class="content-point">💼 <a href="https://linkedin.com/in/koya-navya-keerthana" class="link" target="_blank">LinkedIn Profile</a></div>
            `,
            'clear': 'CLEAR_TERMINAL',
            'cls': 'CLEAR_TERMINAL',
            'theme': 'TOGGLE_THEME',
            'whoami': '<div class="accent-text">Koya Navya Keerthana</div>',
            'pwd': '<div class="accent-text">/home/navya/portfolio</div>',
            'ls': `
                <div class="success-text">Education/</div>
                <div class="success-text">Skills/</div>
                <div class="success-text">Experience/</div>
                <div class="success-text">Projects/</div>
                <div class="success-text">Achievements/</div>
                <div class="success-text">Certifications/</div>
                <div class="success-text">Contact/</div>
                <div class="muted-text">README.md</div>
                <div class="muted-text">portfolio.json</div>
            `,
            'date': `<div class="accent-text">${new Date().toLocaleString()}</div>`,
            'cd': '<div class="muted-text">Use specific commands like "education", "skills", "projects" to navigate sections</div>',
            'portfolio': 'Use command "all" to see complete portfolio',
            'resume': 'Use command "all" to see complete resume'
        };
        
        if (command === 'clear' || command === 'cls') {
            if (terminal) {
                const outputs = terminal.querySelectorAll('.command-output');
                outputs.forEach(output => output.remove());
            }
            return '';
        }
        
        if (command === 'theme') {
            if (themeToggle) {
                themeToggle.click();
            }
            return '<div class="success-text">Theme toggled successfully!</div>';
        }
        
        return commands[command] || `<div class="error-text">Command not found: ${command}</div><div class="muted-text">Type 'help' for available commands.</div>`;
    }
    
    // Auto-focus terminal input
    if (terminalInput) {
        terminalInput.focus();
        
        // Keep focus on terminal input
        document.addEventListener('click', () => {
            terminalInput.focus();
        });
    }
    
    // Easter egg commands
    const easterEggs = {
        'sudo rm -rf /': '<div class="error-text">Nice try! 😄 This portfolio is protected.</div>',
        'hack': '<div class="success-text">Hacking detected! 🔐</div><div class="muted-text">Just kidding! Check out my cybersecurity skills instead.</div>',
        'python': '<div class="success-text">🐍 Python is awesome! 4-star HackerRank rating achieved!</div>',
        'codechef': '<div class="success-text">🏆 CodeChef rating: 1700! 23+ contests completed!</div>',
        'iot': '<div class="highlight">🌐 IoT enthusiast! Check out my LoRa Weather Station project!</div>',
        'react': '<div class="success-text">⚛️ React developer! Built UserVerse with modern React practices!</div>',
        'mongodb': '<div class="success-text">🍃 MongoDB expert! Efficient CRUD operations in UserVerse!</div>',
        'lora': '<div class="highlight">📡 LoRa communication specialist! SX1278 module expertise!</div>',
        'vpn': '<div class="success-text">🔒 VPN expert! WireGuard implementation specialist!</div>',
        'coffee': '<div class="highlight">☕ Coffee + Code = Perfect combo for late-night programming!</div>',
        'github': '<div class="success-text">🐙 Git enthusiast! Version control is life!</div>'
    };
    
    // Add easter eggs to command processor
    const originalProcessCommand = processCommand;
    processCommand = function(command) {
        if (easterEggs[command]) {
            return easterEggs[command];
        }
        return originalProcessCommand(command);
    };
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl+L to clear terminal
        if (e.ctrlKey && e.key === 'l') {
            e.preventDefault();
            executeCommand('clear');
        }
        
        // Ctrl+T to toggle theme
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            if (themeToggle) themeToggle.click();
        }
        
        // Ctrl+A to show all
        if (e.ctrlKey && e.key === 'a') {
            e.preventDefault();
            executeCommand('all');
        }
    });
    
    // Add welcome message with delay
    setTimeout(() => {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'command-output';
        
        ;
        
        if (terminal) {
            terminal.appendChild(welcomeMessage);
            if (terminal.scrollTop !== undefined) {
                terminal.scrollTop = terminal.scrollHeight;
            }
        }
    }, 1500);
    
    console.log('🚀 Koya Navya Keerthana Portfolio initialized successfully!');
    console.log('📧 Contact: keerthanakoya10@gmail.com');
    console.log('🏆 CodeChef Rating: 1700 | HackerRank Python: 4-star');
});