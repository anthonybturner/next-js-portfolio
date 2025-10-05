# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, interactive navigation, and a clean design showcasing my professional experience and projects.

## 🚀 Live Demo

[View Live Portfolio](https://anthonybturner-next.vercel.app)

## ✨ Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Smooth Animations**: Framer Motion animations and transitions
- **Interactive Navigation**: Active section highlighting with intersection observer
- **Contact Form**: Direct email integration and form submission
- **Performance Optimized**: Server-side rendering and automatic code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.5.4 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Lucide, Font Awesome, etc.)

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint with Next.js config
- **Code Formatting**: Prettier
- **Build Tool**: Turbopack (Next.js 15)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── about.tsx           # About section
│       ├── contact.tsx         # Contact form
│       ├── experience.tsx      # Work experience
│       ├── header.tsx          # Navigation header
│       ├── intro.tsx           # Hero section
│       ├── projects.tsx        # Projects showcase
│       ├── skills.tsx          # Skills grid
│       └── section-heading.tsx # Reusable heading
├── context/
│   └── active-section-context.tsx  # Navigation state
├── lib/
│   └── data.ts                 # Portfolio data
├── public/                     # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

## 🎨 Customization

### Update Portfolio Data

Edit `lib/data.ts` to customize:

- Personal information
- Work experience
- Projects
- Skills
- Navigation links

### Styling

- Modify `src/app/globals.css` for global styles
- Update Tailwind classes in components
- Customize color scheme in `tailwind.config.js`

### Contact Form

The contact form in `components/contact.tsx` includes:

- Email validation
- Direct mailto integration
- Form submission handling _(add your preferred backend)_

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically with every push

### Other Platforms

- **Netlify**: Drag and drop `out` folder after `npm run build`
- **GitHub Pages**: Use `next export` for static export
- **Custom Server**: Use `npm run build && npm start`

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimized with automatic code splitting
- **Image Optimization**: Next.js built-in optimization

## 🛡️ SEO Features

- Meta tags and Open Graph data
- Semantic HTML structure
- Optimized images and fonts
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

**Anthony Turner**

- Email: anthonybturner@icloud.com
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/in/anthony-turner-0207b76b/)
- GitHub: [Your GitHub](https://github.com/anthonybturner)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

⭐ Star this repo if it helped you build your own portfolio!
