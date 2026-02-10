# Hadi Balaei | Interactive 3D Portfolio 🚀

[![Live Demo](https://img.shields.io/badge/Live-Demo-00b4d8?style=for-the-badge)](https://hadi-balaei-portfolio.pages.dev/)
[![Built with Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Welcome to my personal portfolio website! This isn't just another static portfolio—it's an immersive, interactive experience built with modern 3D web technologies. The site showcases my skills, projects, and professional journey through engaging animations and three-dimensional visuals.This 3D portfolio project is developed based on **JavaScript Mastery** comprehensive training.


## ✨ Live Demo

Experience the portfolio for yourself: **[https://hadi-balaei-portfolio.pages.dev/](https://hadi-balaei-portfolio.pages.dev/)**

## 🎯 Key Features

- **🖥️ Customizable 3D Hero Section:** Features an interactive 3D desktop model that can be tailored to specific themes.
- **⚡ Animated Content Sections:** "Experience" and "Work" sections brought to life with smooth animations powered by Framer Motion.
- **🎨 3D Skills Visualization:** Technical skills are displayed using interactive 3D geometries created with Three.js and React Three Fiber.
- **📱 Fully Responsive Design:** Optimized viewing experience across all devices, from mobile to desktop.
- **📬 Functional Contact Form:** Integrated with EmailJS for reliable message delivery, accompanied by a 3D Earth model.
- **✨ Dynamic 3D Background:** A starry backdrop generated with Three.js, featuring procedurally placed stars for a unique visual.
- **📂 Projects & Testimonials Gallery:** Animated showcases for my work and client feedback.

## 🛠️ Tech Stack

**Core Framework & Build Tool:**
- [React.js](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Next-generation build tool

**3D & Graphics:**
- [Three.js](https://threejs.org/) - 3D library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [React Three Drei](https://github.com/pmndrs/drei) - Useful helpers for React Three Fiber

**Styling & UI:**
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

**Services & Utilities:**
- [EmailJS](https://www.emailjs.com/) - Email service integration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mr0Hadi/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application will reload automatically when you make changes

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, models, and other media
│   ├── components/  # Reusable React components
│   │   ├── 3d/      # 3D-specific components (Computer, Earth, Stars)
│   │   ├── layout/  # Layout components (Navbar, Footer)
│   │   └── sections/# Page section components (Hero, Experience, Contact)
│   ├── styles/      # Global styles and Tailwind configuration
│   ├── App.jsx      # Main application component
│   └── main.jsx     # Application entry point
├── .env.example     # Environment variables template
├── index.html       # HTML entry point
└── package.json     # Dependencies and scripts
```

## 🧠 What I Learned & Highlights

Building this portfolio was an incredible journey into modern 3D web development. Key takeaways include:

- **3D Integration:** Successfully blending Three.js 3D objects with a traditional React UI for a seamless experience.
- **Performance Optimization:** Implementing techniques to maintain smooth animations and 3D rendering without compromising site performance.
- **Component Reusability:** Creating a modular architecture with reusable 3D and UI components.
- **Responsive 3D Design:** Ensuring 3D elements adapt gracefully across different screen sizes and devices.


---
**Thank you for visiting my portfolio repository!**

*Built with passion, creativity, and a lot of ☕*
