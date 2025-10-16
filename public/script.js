// Interactive Moving Visual Banners
class MovingBanner {
    constructor() {
        this.canvas = document.getElementById('bannerCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.waves = [];
        this.mouse = { x: 0, y: 0 };
        this.init();
        this.animate();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY - rect.top;
        });

        // Create particles
        for (let i = 0; i < 80; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2
            });
        }

        // Create waves
        for (let i = 0; i < 3; i++) {
            this.waves.push({
                y: this.canvas.height * (0.3 + i * 0.2),
                amplitude: 30 + i * 15,
                frequency: 0.01 - i * 0.002,
                speed: 0.02 + i * 0.01,
                offset: 0,
                color: `rgba(239, 68, 68, ${0.1 - i * 0.02})`
            });
        }
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    drawParticles() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.x -= dx * force * 0.01;
                particle.y -= dy * force * 0.01;
            }

            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(239, 68, 68, ${particle.opacity})`;
            this.ctx.fill();

            // Draw connections
            this.particles.forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(otherParticle.x, otherParticle.y);
                    this.ctx.strokeStyle = `rgba(239, 68, 68, ${0.1 * (1 - distance / 120)})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            });
        });
    }

    drawWaves() {
        this.waves.forEach(wave => {
            this.ctx.beginPath();
            
            for (let x = 0; x < this.canvas.width; x += 5) {
                const y = wave.y + Math.sin(x * wave.frequency + wave.offset) * wave.amplitude;
                
                if (x === 0) {
                    this.ctx.moveTo(x, y);
                } else {
                    this.ctx.lineTo(x, y);
                }
            }
            
            this.ctx.strokeStyle = wave.color;
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            wave.offset += wave.speed;
        });
    }

    drawGradientOrbs() {
        const time = Date.now() * 0.001;
        
        // Floating gradient orbs
        for (let i = 0; i < 3; i++) {
            const x = this.canvas.width * (0.2 + i * 0.3) + Math.sin(time + i) * 50;
            const y = this.canvas.height * 0.5 + Math.cos(time * 0.7 + i) * 40;
            const radius = 80 + Math.sin(time + i) * 20;
            
            const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
            gradient.addColorStop(0, `rgba(239, 68, 68, ${0.15})`);
            gradient.addColorStop(0.5, `rgba(153, 27, 27, ${0.08})`);
            gradient.addColorStop(1, 'rgba(153, 27, 27, 0)');
            
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawGradientOrbs();
        this.drawWaves();
        this.drawParticles();
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MovingBanner();
    
    // Add smooth scroll behavior for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${0.8 + index * 0.1}s`;
    });
    
    // Add parallax effect to profile section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const profileSection = document.querySelector('.profile-section');
        if (profileSection) {
            profileSection.style.transform = `translateY(${scrolled * 0.3}px)`;
            profileSection.style.opacity = 1 - scrolled / 500;
        }
    });
});

