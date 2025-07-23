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

// Replace the lantern JavaScript with this sticker logic

// Love messages for stickers (keep the same messages)
const loveMessages = [
    "You are my sunshine ☀️",
    "Forever and always 💕",
    "You make me complete 💫",
    "My heart belongs to you 💖",
    "You're my safe haven 🏠",
    "Love you to the moon 🌙",
    "You're my favorite person 😍",
    "You’re the song my heart sings. 🎶",
    "You're my happy place 😊",
    "My love for you is endless ♾️",
    "I see my future in your eyes. 👀",
    "You light up my world 🌟",
    "I choose you every day 💝",
    "You're my greatest adventure 🗺️",
    "My heart smiles for you 😄",
    "Being with you feels like home. 🏡",
     "I feel lucky every day because of you. 🍀"
];

// Array of sticker image paths (add your sticker images here)
const stickerImages = [
    'stickers/sticker1.png',
    'stickers/sticker2.png',
    'stickers/sticker3.png',
    'stickers/sticker4.png',
    'stickers/sticker5.png',
    'stickers/sticker6.png',
    'stickers/sticker7.png',
    'stickers/sticker8.png'
    // Add more sticker paths as needed
];

// Create a single sticker
function createSticker() {
    const sticker = document.createElement('div');
    sticker.className = 'sticker';
    
    // Random position
    const leftPosition = Math.random() * (window.innerWidth - 100);
    sticker.style.left = leftPosition + 'px';
    sticker.style.bottom = '-100px';
    
    // Random delay
    const delay = Math.random() * 2;
    sticker.style.animationDelay = delay + 's';
    
    // Random sticker image
    const randomSticker = stickerImages[Math.floor(Math.random() * stickerImages.length)];
    
    // Random message
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    
    sticker.innerHTML = `
        <img src="${randomSticker}" alt="Love Sticker">
        <div class="sticker-message">${randomMessage}</div>
    `;
    
    return sticker;
}

// Launch stickers function
function launchStickers() {
    const stickersContent = document.getElementById('stickersContent');
    
    // Create multiple stickers with staggered timing
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sticker = createSticker();
            stickersContent.appendChild(sticker);
            
            // Remove sticker after animation completes
            setTimeout(() => {
                if (sticker.parentNode) {
                    sticker.parentNode.removeChild(sticker);
                }
            }, 12000);
        }, i * 1500); // Stagger each sticker by 1.5 seconds
    }
}

// Continuous sticker creation
let stickerInterval;

function startContinuousStickers() {
    stickerInterval = setInterval(() => {
        const stickersContent = document.getElementById('stickersContent');
        if (stickersContent && stickersContent.classList.contains('active')) {
            const sticker = createSticker();
            stickersContent.appendChild(sticker);
            
            // Remove sticker after animation completes
            setTimeout(() => {
                if (sticker.parentNode) {
                    sticker.parentNode.removeChild(sticker);
                }
            }, 12000);
        }
    }, 2000); // New sticker every 2 seconds
}

// Stickers section click functionality
document.getElementById('stickersSection').addEventListener('click', function() {
    if (!this.classList.contains('clicked')) {
        const content = this.querySelector('.stickers-content');
        const title = this.querySelector('h2');
        const prompt = this.querySelector('.stickers-prompt');
        
        // Hide title pulse and prompt, show content
        title.classList.remove('clickable');
        prompt.style.display = 'none';
        content.classList.add('active');
        this.classList.add('clicked');
        
        // Start the sticker show
        setTimeout(() => {
            launchStickers();
        }, 500);
        
        // Start continuous stickers after initial batch
        setTimeout(() => {
            startContinuousStickers();
        }, 3000);
    }
});

// Clean up interval when page is unloaded
window.addEventListener('beforeunload', function() {
    if (stickerInterval) {
        clearInterval(stickerInterval);
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
