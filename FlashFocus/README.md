# FlashFocus 

**FlashFocus** is a small, lightweight front-end web app designed to help you stay focused with short, timed sessions. It's built with plain HTML, CSS, and JavaScript so you can open it locally or deploy it as a static site.

---

##  Features

- Simple, distraction-free UI
- Configurable focus/short break cycles
- Minimal dependencies — pure HTML/CSS/JS

---

## 🚀 Quick Start

1. Clone or download this repository.
2. Open `index.html` in your browser to run the app locally.
     - VS Code: use the **Live Server** extension.

---

### Running locally 🔧

You can serve the app locally using several methods. Pick one that fits your workflow.

   VS Code: use the **Live Server** extension.
    http://127.0.0.1:5500/FlashFocus/index.html


- Vite (recommended for development — fast, modern tooling):
  - One-time setup (if you haven't already):
    - `npm init -y`
    - `npm install --save-dev vite`
  - Add scripts to `package.json` (or run with npx):
    - `"dev": "vite"`, `"build": "vite build"`, `"preview": "vite preview"`
  - Start dev server:
    - `npm run dev`
  - Open: http://localhost:5173


- Test on another device (phone) on the same network:
  - Python bind example: `py -m http.server 8000 --bind 0.0.0.0`
  - Find your PC IP (`ipconfig`) and open `http://<your-PC-IP>:8000` on the device.



## 🔧 Development

- Files:
  - `index.html` — main markup
  - `style.css` — styles
  - `script.js` — app logic

- To make changes, edit the files and refresh your browser.

---

## 🤝 Contributing

Contributions are welcome. Please open an issue or submit a pull request with a clear description of the change.

---

## 📌 Contact

If you'd like suggestions or help adding features , open an issue or message the repo owner.
