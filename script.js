 // Letter content
        const letterParagraphs = [
            "On this special day, I want you to know how incredibly blessed I feel to have you in my life. You walked into my life so unexpectedly, and before I knew it, you became my favorite person. You brought with you a warmth and chaos that I never knew I needed—but now, I can’t imagine life without it. You are not just my fiancé, but my best friend, my confidant, and my greatest source of joy.",
            "You’ve been my constant in every shade of life—whether we’re being silly or serious, playful or quiet. With you, there’s always space to be fully myself. You’ve seen me at my weirdest and still chose to stay, which, honestly, deserves an award. Loving you feels natural, like I was always meant to find you, even if I had no idea when or how.",
            "As we celebrate another year of your wonderful existence, I promise to love you more deeply, support you more strongly, and cherish every moment we share together. You deserve all the happiness in the world, and I'm honored to be the one trying to give it to you.",
            "So today, we’re not just celebrating your birthday—we’re celebrating you. Everything you are, everything you bring into my life. Thank you for being the amazing person you are, for choosing to love me, and for making every day an adventure worth living. I can't wait to spend many more birthdays with you, creating beautiful memories and building our future together.",
            "Happy Birthday, my darling! Here's to another year of love, laughter, and endless possibilities. I love you more..........! 💕✨"
        ];

        const signature = "Forever yours, with all my love 💕";

        // Typewriter effect function
        function typeWriter(element, text, speed = 300) {
            return new Promise((resolve) => {
                element.innerHTML = '';
                element.classList.add('typewriter-text');
                let i = 0;
                
                function type() {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    } else {
                        element.classList.remove('typewriter-text');
                        resolve();
                    }
                }
                type();
            });
        }

        // Letter opening function
        async function openLetter() {
            const birthdayWish = document.getElementById('birthdayWish');
            const letterPrompt = document.getElementById('letterPrompt');
            const letterContent = document.getElementById('letterContent');
            
            // Hide prompt and show letter content
            letterPrompt.style.display = 'none';
            letterContent.classList.add('active');
            birthdayWish.classList.add('clicked');
            
            // Type each paragraph with delays
            for (let i = 0; i < letterParagraphs.length; i++) {
                const paragraph = document.getElementById(`paragraph${i + 1}`);
                await typeWriter(paragraph, letterParagraphs[i], 30);
                await new Promise(resolve => setTimeout(resolve, 500)); // Pause between paragraphs
            }
            
            // Type signature
            await new Promise(resolve => setTimeout(resolve, 1000));
            const signatureElement = document.getElementById('signature');
            await typeWriter(signatureElement, signature, 40);
        }

        // Add click event to birthday wish section
        document.getElementById('birthdayWish').addEventListener('click', function() {
            if (!this.classList.contains('clicked')) {
                openLetter();
            }
        });

        // Memory cards functionality
        document.querySelectorAll('.memory-card').forEach(card => {
            card.addEventListener('click', function() {
                if (!this.classList.contains('clicked')) {
                    const content = this.querySelector('.memory-content');
                    const title = this.querySelector('h3');
                    
                    // Hide title pulse and show content
                    title.classList.remove('clickable');
                    content.classList.add('active');
                    this.classList.add('clicked');
                    
                    // Trigger image aspect ratio detection
                    const img = this.querySelector('.month-photo img');
                    if (img) {
                        setTimeout(() => {
                            if (img.complete) {
                                const aspectRatio = img.naturalWidth / img.naturalHeight;
                                const photoContainer = img.parentElement;
                                
                                photoContainer.classList.remove('landscape', 'portrait', 'square');
                                
                                if (aspectRatio > 1.3) {
                                    photoContainer.classList.add('landscape');
                                } else if (aspectRatio < 0.8) {
                                    photoContainer.classList.add('portrait');
                                } else {
                                    photoContainer.classList.add('square');
                                }
                            }
                        }, 100);
                    }
                }
            });
        });

// Enhanced lanterns functionality with messaging options

// Your phone number (replace with your actual number)
const YOUR_PHONE_NUMBER = "+918000898664"; // Replace with your number in international format

// Love messages for lanterns (keeping your existing messages)
const loveMessages = [
    "You are my sunshine ☀️",
    "Forever and always 💕",
    "You make me complete 💫",
    "My heart belongs to you 💖",
    "You're my safe haven 🏠",
    "Love you to the moon 🌙",
    "You're my favorite person 😍",
    "Together we're unstoppable 💪",
    "You're my happy place 😊",
    "My love for you is endless ♾️",
    "You're my best friend 👫",
    "You light up my world 🌟",
    "I choose you every day 💝",
    "You're my greatest adventure 🗺️",
    "My heart smiles for you 😄"
];

// Lantern colors
const lanternColors = [
    'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
    'linear-gradient(135deg, #ffd93d, #ffed4a)',
    'linear-gradient(135deg, #6bcf7f, #84e0a3)',
    'linear-gradient(135deg, #4ecdc4, #67d4ce)',
    'linear-gradient(135deg, #45b7d1, #64c5ea)',
    'linear-gradient(135deg, #96ceb4, #b3dac7)',
    'linear-gradient(135deg, #feca57, #ffd35a)',
    'linear-gradient(135deg, #ff9ff3, #f68de3)',
    'linear-gradient(135deg, #a8e6cf, #c4f0d2)',
    'linear-gradient(135deg, #ffd3a5, #ffeaa7)'
];

// Function to send message via SMS
function sendSMS(message) {
    const smsBody = encodeURIComponent(`Birthday Love Message: ${message}`);
    const smsUrl = `sms:${YOUR_PHONE_NUMBER}?body=${smsBody}`;
    window.open(smsUrl, '_blank');
}

// Function to send message via WhatsApp
function sendWhatsApp(message) {
    const whatsappMessage = encodeURIComponent(`🎂 Birthday Love Message: ${message}`);
    const whatsappUrl = `https://wa.me/${YOUR_PHONE_NUMBER.replace('+', '')}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Function to copy message to clipboard
function copyToClipboard(message) {
    navigator.clipboard.writeText(message).then(() => {
        // Show a temporary notification
        showNotification('Message copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy message: ', err);
    });
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #4ecdc4, #67d4ce);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1000;
        font-family: Georgia, serif;
        font-size: 14px;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Enhanced lantern creation with messaging options
function createLantern() {
    const lantern = document.createElement('div');
    lantern.className = 'lantern';
    
    // Random position
    const leftPosition = Math.random() * (window.innerWidth - 100);
    lantern.style.left = leftPosition + 'px';
    lantern.style.bottom = '-100px';
    
    // Random delay
    const delay = Math.random() * 2;
    lantern.style.animationDelay = delay + 's';
    
    // Random color
    const randomColor = lanternColors[Math.floor(Math.random() * lanternColors.length)];
    
    // Random message
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    
    lantern.innerHTML = `
        <div class="lantern-string"></div>
        <div class="lantern-body" style="background: ${randomColor};">
            <div class="lantern-light"></div>
        </div>
        <div class="lantern-message">${randomMessage}</div>
        <div class="lantern-actions">
            <button class="message-btn whatsapp-btn" onclick="sendWhatsApp('${randomMessage}')">
                📱 WhatsApp
            </button>
            <button class="message-btn sms-btn" onclick="sendSMS('${randomMessage}')">
                💬 SMS
            </button>
            <button class="message-btn copy-btn" onclick="copyToClipboard('${randomMessage}')">
                📋 Copy
            </button>
        </div>
    `;
    
    // Add click event to show actions
    lantern.addEventListener('click', function(e) {
        e.stopPropagation();
        const actions = this.querySelector('.lantern-actions');
        actions.style.display = actions.style.display === 'flex' ? 'none' : 'flex';
    });
    
    return lantern;
}

// Launch lanterns function (keeping your existing logic)
function launchLanterns() {
    const lanternsContent = document.getElementById('lanternsContent');
    
    // Create multiple lanterns with staggered timing
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const lantern = createLantern();
            lanternsContent.appendChild(lantern);
            
            // Remove lantern after animation completes
            setTimeout(() => {
                if (lantern.parentNode) {
                    lantern.parentNode.removeChild(lantern);
                }
            }, 12000);
        }, i * 1500);
    }
}

// Continuous lantern creation
let lanternInterval;

function startContinuousLanterns() {
    lanternInterval = setInterval(() => {
        const lanternsContent = document.getElementById('lanternsContent');
        if (lanternsContent && lanternsContent.classList.contains('active')) {
            const lantern = createLantern();
            lanternsContent.appendChild(lantern);
            
            // Remove lantern after animation completes
            setTimeout(() => {
                if (lantern.parentNode) {
                    lantern.parentNode.removeChild(lantern);
                }
            }, 12000);
        }
    }, 2000);
}

// Lanterns section click functionality
document.getElementById('lanternsSection').addEventListener('click', function() {
    if (!this.classList.contains('clicked')) {
        const content = this.querySelector('.lanterns-content');
        const title = this.querySelector('h2');
        const prompt = this.querySelector('.lanterns-prompt');
        
        // Hide title pulse and prompt, show content
        title.classList.remove('clickable');
        prompt.style.display = 'none';
        content.classList.add('active');
        this.classList.add('clicked');
        
        // Start the lantern show
        setTimeout(() => {
            launchLanterns();
        }, 500);
        
        // Start continuous lanterns after initial batch
        setTimeout(() => {
            startContinuousLanterns();
        }, 3000);
    }
});

// Clean up interval when page is unloaded
window.addEventListener('beforeunload', function() {
    if (lanternInterval) {
        clearInterval(lanternInterval);
    }
});

        // Create floating hearts animation
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💕';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
            heart.style.opacity = Math.random();
            document.getElementById('hearts').appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 8000);
        }

        // Create hearts periodically
        setInterval(createHeart, 2000);

        // Add some initial hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(createHeart, i * 1000);
        }

        // Detect image aspect ratio and apply appropriate class
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.month-photo img');
            
            images.forEach(img => {
                img.onload = function() {
                    const aspectRatio = this.naturalWidth / this.naturalHeight;
                    const photoContainer = this.parentElement;
                    
                    // Remove existing aspect ratio classes
                    photoContainer.classList.remove('landscape', 'portrait', 'square');
                    
                    // Add appropriate class based on aspect ratio
                    if (aspectRatio > 1.3) {
                        photoContainer.classList.add('landscape');
                    } else if (aspectRatio < 0.8) {
                        photoContainer.classList.add('portrait');
                    } else {
                        photoContainer.classList.add('square');
                    }
                };
                
                // If image is already loaded
                if (img.complete) {
                    img.onload();
                }
            });
        });

        // Smooth scrolling for better experience
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
