# ZFIZZ — Scroll-Driven Hero Experience

A sleek, interactive scroll-driven hero landing page built with modern Vanilla JavaScript, CSS3, and GSAP ScrollTrigger. Designed with smooth motion choreography where user scroll progress directly dictates the speed, rotation, scale, and trajectory of visual elements.

---

## ✨ Features

- **🎬 Choreographed Entrance Animation**: Smooth GSAP timeline on page load featuring staggered reveals for navbar, typography, stats counter badges, and the hero centerpiece.
- **📜 Scrubbed Scroll-Driven Interactions**:
  - **Dynamic Centerpiece Motion**: The 3D-styled hero emblem translates, rotates (`220deg`), and scales seamlessly as the user scrolls.
  - **Counter-Rotating Inner Emblem**: Dual-axis sensation with an inner symbol counter-rotating (`-360deg`).
  - **Ambient Glow Dynamics**: Background radial lighting tracks and expands in sync with scroll depth.
  - **Text Parallax & Smart Visibility**: Hero title stays anchored with subtle parallax while secondary text, stats, and scroll cues gently fade away.
- **🎨 Minimalist Editorial Aesthetic**: Clean modern typography powered by Google Fonts (*Inter*), refined color palette, and high-contrast section transitions.
- **⚡ Zero Build Overhead**: Pure HTML5, CSS3, and Vanilla JavaScript with CDN-loaded GSAP. No build tools, bundlers, or package installations required.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic document layout and accessible structure.
- **CSS3**: Custom layout, Flexbox, smooth scrolling, and responsive typography.
- **JavaScript (ES6+)**: DOM manipulation and lifecycle management.
- **GSAP (GreenSock Animation Platform v3.12.5)**: High-performance animation timelines.
- **GSAP ScrollTrigger**: Scroll synchronization and scrubbed animations.

---

## 📁 Project Structure

```text
scroll-view/
├── index.html       # Main HTML markup and CDN dependencies
├── style.css        # Core design styling, layout, and theme
├── script.js        # GSAP intro timeline & ScrollTrigger logic
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/mittal987-alt/scroll-view.git
cd scroll-view
```

### 2. Run the Project
Because this is a static project, you can run it in multiple easy ways:

- **Option A — Direct File**: Double-click [index.html](file:///c:/projects/project/index.html) to open directly in any modern browser.
- **Option B — VS Code Live Server**: Open the project folder in VS Code and click **"Go Live"** from the status bar.
- **Option C — Local HTTP Server**:
  ```bash
  # Using Node.js
  npx serve .

  # Or using Python 3
  python -m http.server 3000
  ```
  Then open `http://localhost:3000` in your browser.

---

## ⚙️ How the Animation Works

1. **Intro Timeline (`script.js`)**:
   - Initial states are initialized with `gsap.set()` with negative offsets and zero opacity.
   - A sequenced `gsap.timeline()` reveals elements in a balanced rhythm using `power3.out` easing.

2. **Scroll Synchronization (`ScrollTrigger`)**:
   - The hero section (`.hero`) acts as the trigger frame from `top top` to `bottom top`.
   - `scrub: 1` provides a 1-second smooth interpolation lag that eliminates jitter and creates fluid inertial motion.
   - Parallax layers move at differing velocity ratios to create visual depth.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
