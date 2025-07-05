# 🚀 Rangga Prasetya - Personal Portfolio

Welcome to my personal portfolio website! This site showcases my skills, projects, and background as a passionate web developer and student in computer science. Built with cutting-edge technologies like **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, the portfolio is fast, responsive, and designed to reflect both aesthetics and functionality.

---

## 🌐 Live Preview

You can explore the live version of the website at:

**🔗 [Visit Portfolio](https://your-deployment-url.vercel.app)**

---

## 🔥 Key Features

- **Responsive Design**: Seamlessly adapts across devices.
- **Dark Mode Support**: Modern UI with persistent theme preferences.
- **Dynamic Typewriter Introduction**: Engaging hero section with animated typing.
- **Modular Component Architecture**: Easy to scale and maintain.
- **Live Blog Feed**: Automatically fetches Medium articles.
- **Project Showcase**: Interactive portfolio with category filters.
- **Education & Skills Sections**: Highlighting academic journey and proficiencies.
- **Contact Section**: Reach out via form or social links.
- **Scroll-to-Top Button**: Enhances user navigation.
- **Visitor Counter**: View tracker via hits.sh
- **Deployed on Vercel**: Fast, reliable, and free hosting.

---

## 🛠️ Tech Stack

| Tech              | Description |
|------------------|-------------|
| **React.js**      | Component-based library for UI |
| **TypeScript**    | Static type checking for scalable development |
| **Tailwind CSS**  | Utility-first CSS framework |
| **Vite**          | Lightning-fast build tool |
| **Framer Motion** | For smooth UI animations |
| **Lucide-react**  | Lightweight icon library |
| **React Router**  | For scroll navigation |
| **Medium RSS**    | Fetch blog posts via RSS feed |
| **Vercel**        | Cloud platform for deployment |

---

## 🧱 Project Structure

```
portfolio/
├── public/
│   └── assets/         # Images, logo, favicon
├── src/
│   ├── components/     # Reusable components
│   ├── hooks/          # Custom hooks (e.g., useBlogs)
│   ├── App.tsx         # Main component
│   ├── main.tsx        # Entry point
│   └── index.css       # Tailwind + base styles
├── README.md
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
```

---

## ⚙️ Local Development

To run this project locally:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

---

## 🚀 Deployment

This project is deployed using **Vercel**.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel login
vercel
```

---

## 📈 Notable Sections

### 🎯 Hero Section
- Typewriter role animation
- Social links and CTA buttons
- Profile picture with 3D styling and responsiveness

### 📄 Blogs Section
- Fetched dynamically from Medium RSS
- Stripped HTML content
- Card layout with thumbnails and view more button

### 🧑‍💻 Projects Section
- Filter by category (All, Web, Game)
- Displays tools used and links

### 🏫 Education Section
- Academic background including school and university
- Styled consistently with other sections

### 📬 Contact Section
- Interactive form
- GitHub, LinkedIn, and email links


---

## 🧪 Challenges & Fixes

- **HTML Tags in Blog Preview**: Solved by sanitizing content fetched from Medium.
- **Dark Mode Bugs in Sections**: Adjusted background colors and added conditional Tailwind classes.
- **Mobile Layout Fixes**: Arrow bounce indicator hidden on mobile view.
- **Favicon & Tab Logo**: Custom logo added via `index.html`.

---

## 🙌 Acknowledgments

- Icon Library: [Lucide.dev](https://lucide.dev)
- View Counter: [hits.sh](https://hits.sh)
- Inspiration: Clean and minimal dev portfolios from the community

---

## 📝 License

This project is open-source and free to use for learning purposes.

---

Made with ❤️ by **Rangga Prasetya**
