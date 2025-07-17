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

        // Video section functionality
        document.getElementById('videoSection').addEventListener('click', function() {
            if (!this.classList.contains('clicked')) {
                const content = this.querySelector('.video-content');
                const title = this.querySelector('h2');
                const prompt = this.querySelector('.video-prompt');
                
                // Hide title pulse and prompt, show content
                title.classList.remove('clickable');
                prompt.style.display = 'none';
                content.classList.add('active');
                this.classList.add('clicked');
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
        // Spin-the-Wheel Functionality
class SpinWheel {
    constructor() {
        this.canvas = document.getElementById('wheelCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.spinButton = document.getElementById('spinButton');
        this.resultSection = document.getElementById('resultSection');
        this.resultText = document.getElementById('resultText');
        this.claimButton = document.getElementById('claimButton');
        this.spinAgainButton = document.getElementById('spinAgainButton');
        
        this.segments = [
            { text: "Hug me now", color: "#ff6b9d" },
            { text: "Let's dance together", color: "#c44596" },
            { text: "Claim a kiss", color: "#ff8fab" },
            { text: "One wish granted", color: "#d4b5ff" },
            { text: "Cuddle time", color: "#ffb6d9" },
            { text: "Sing me a song", color: "#b3d9ff" },
            { text: "Tell me you love me", color: "#ff6b9d" },
            { text: "Massage my shoulders", color: "#c44596" },
            { text: "Make me laugh", color: "#ff8fab" },
            { text: "Cook together", color: "#d4b5ff" },
            { text: "Movie night choice", color: "#ffb6d9" },
            { text: "Plan our next date", color: "#b3d9ff" }
        ];
        
        this.isSpinning = false;
        this.rotation = 0;
        this.spinDuration = 0;
        this.spinStartTime = 0;
        
        this.init();
    }
    
    init() {
        this.drawWheel();
        this.addEventListeners();
    }
    
    addEventListeners() {
        this.spinButton.addEventListener('click', () => this.spin());
        this.claimButton.addEventListener('click', () => this.claimPrize());
        this.spinAgainButton.addEventListener('click', () => this.resetWheel());
    }
    
    drawWheel() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = 180;
        const segmentAngle = (2 * Math.PI) / this.segments.length;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw segments
        this.segments.forEach((segment, index) => {
            const startAngle = index * segmentAngle + this.rotation;
            const endAngle = startAngle + segmentAngle;
            
            // Draw segment
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            this.ctx.lineTo(centerX, centerY);
            this.ctx.fillStyle = segment.color;
            this.ctx.fill();
            
            // Draw border
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            this.ctx.lineTo(centerX, centerY);
            this.ctx.strokeStyle = '#fff';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Draw text
            this.ctx.save();
            this.ctx.translate(centerX, centerY);
            this.ctx.rotate(startAngle + segmentAngle / 2);
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = '#fff';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textBaseline = 'middle';
            
            // Split text into multiple lines if too long
            const words = segment.text.split(' ');
            if (words.length > 2) {
                const midPoint = Math.ceil(words.length / 2);
                const line1 = words.slice(0, midPoint).join(' ');
                const line2 = words.slice(midPoint).join(' ');
                this.ctx.fillText(line1, radius * 0.7, -8);
                this.ctx.fillText(line2, radius * 0.7, 8);
            } else {
                this.ctx.fillText(segment.text, radius * 0.7, 0);
            }
            
            this.ctx.restore();
        });
        
        // Draw center circle
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, 50, 0, 2 * Math.PI);
        this.ctx.fillStyle = '#8b5a9f';
        this.ctx.fill();
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 4;
        this.ctx.stroke();
    }
    
    spin() {
        if (this.isSpinning) return;
        
        this.isSpinning = true;
        this.spinButton.disabled = true;
        this.resultSection.classList.remove('active');
        
        // Random spin duration and final rotation
        this.spinDuration = 3000 + Math.random() * 2000; // 3-5 seconds
        const finalRotation = this.rotation + (Math.random() * 4 + 6) * Math.PI; // 6-10 full rotations
        
        this.spinStartTime = Date.now();
        this.animateSpin(finalRotation);
    }
    
    animateSpin(finalRotation) {
        const currentTime = Date.now();
        const elapsed = currentTime - this.spinStartTime;
        const progress = Math.min(elapsed / this.spinDuration, 1);
        
        // Easing function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        this.rotation = this.rotation + (finalRotation - this.rotation) * easeOut;
        this.drawWheel();
        
        if (progress < 1) {
            requestAnimationFrame(() => this.animateSpin(finalRotation));
        } else {
            this.spinComplete();
        }
    }
    
    spinComplete() {
        this.isSpinning = false;
        this.spinButton.disabled = false;
        
        // Determine winning segment
        const segmentAngle = (2 * Math.PI) / this.segments.length;
        const normalizedRotation = ((2 * Math.PI) - (this.rotation % (2 * Math.PI))) % (2 * Math.PI);
        const winningIndex = Math.floor(normalizedRotation / segmentAngle);
        const winningSegment = this.segments[winningIndex];
        
        // Show result
        this.resultText.textContent = winningSegment.text;
        this.resultSection.classList.add('active');
        
        // Add celebration effect
        this.celebrate();
    }
    
    celebrate() {
        // Create floating hearts around the wheel
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '💕';
                heart.style.position = 'absolute';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '50%';
                heart.style.fontSize = '24px';
                heart.style.pointerEvents = 'none';
                heart.style.animation = 'float-heart 2s ease-out forwards';
                heart.style.zIndex = '1000';
                
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 2000);
            }, i * 100);
        }
    }
    
    claimPrize() {
        // Add fun claiming animation
        this.claimButton.style.transform = 'scale(1.2)';
        this.claimButton.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        this.claimButton.textContent = 'Claimed! 🎉';
        
        setTimeout(() => {
            this.claimButton.style.transform = 'scale(1)';
            this.claimButton.textContent = 'Claim Now! 💕';
            this.claimButton.style.background = 'linear-gradient(135deg, #ff6b9d, #c44596)';
        }, 1500);
    }
    
    resetWheel() {
        this.resultSection.classList.remove('active');
        this.rotation = 0;
        this.drawWheel();
    }
}

// Initialize the wheel when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing functionality first
    // ... (your existing DOMContentLoaded code)
    
    // Initialize the spin wheel
    new SpinWheel();
});

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