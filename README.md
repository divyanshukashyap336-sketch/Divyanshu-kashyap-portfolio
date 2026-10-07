# Divyanshu Kashyap - Personal Portfolio Website

A modern, responsive, and high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🧭 Website Sections

1. **Home (`#home`)**: Name, role (*Computer Science student, web developer*), short tagline, academic level at JECRC University, and buttons for **“View My Projects”** and **“Contact Me”**.
2. **About (`#about`)**: Background as a first-year B.Tech CS Core student at JECRC University, Jaipur, technical interests, and career goals.
3. **Skills (`#skills`)**: Categorized technical toolkit (Web Development, Programming & Core CS, Tools & Workflow) with interactive category filters.
4. **Projects (`#projects`)**: Project cards with project name, description ("what it does"), technology tags, GitHub code repository links, and live demo links.
5. **Contact (`#contact`)**: Direct contact channel with email (`divyanshu.26@jecrcu.edu.in`), one-click copy, GitHub, LinkedIn, and an interactive message form.

---

## 💻 How to Preview the Site Locally

### Option 1: Quick Launcher (Windows)
Double-click the **`run-dev.bat`** file located in this directory.

### Option 2: Using the Terminal
1. Open PowerShell or Command Prompt in this folder.
2. Run the development command:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

To stop the development server, press `Ctrl + C` in the terminal.

---

## ✏️ Which Files to Edit to Update Your Information

You do **not** need to touch complex React code to update your content! All your personal details, text, links, and projects are centralized in one clean configuration file:

### 📁 `src/data/portfolioData.js`

Open [`src/data/portfolioData.js`](file:///c:/Users/divyanshu%20kashyap/OneDrive/Documents/Antigravity%20classwork/src/data/portfolioData.js) in your editor to modify:

| Section | Object in `portfolioData.js` | What You Can Edit |
| :--- | :--- | :--- |
| **Personal Info** | `personalInfo` | Name, title/role, tagline, location, bio, email, social links |
| **About Details** | `aboutData` | Background story, list of interests, and career goals |
| **Skills** | `skillsData` | Add/remove skills, change proficiency tags, icons, categories |
| **Projects** | `projectsData` | Add your new projects, change descriptions, add GitHub & demo URLs |

#### Example: How to Add a New Project
In `src/data/portfolioData.js`, add an item to the `projectsData` array:
```javascript
{
  id: "my-new-project",
  title: "My Awesome App",
  whatItDoes: "What the project does and the problem it solves.",
  technologies: ["React", "JavaScript", "Tailwind CSS"],
  category: "Web Development",
  githubUrl: "https://github.com/Divyanshu33/my-repo",
  liveUrl: "https://my-demo-link.com", // Or '#' if no live demo yet
  badge: "Featured Build"
}
```

---

## 🚀 How to Deploy to GitHub Pages

The repository is already configured with `base: './'` in `vite.config.js` and includes an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### Step-by-Step Deployment Guide:

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new public repository (for example: `portfolio` or `divyanshu-portfolio`).

2. **Push Your Code to GitHub**:
   In your terminal inside this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Divyanshu Kashyap Portfolio"
   git branch -M main
   git remote add origin https://github.com/Divyanshu33/YOUR_REPOSITORY_NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Open your repository on GitHub.
   - Go to **Settings** > **Pages** (on the left menu under *Code and automation*).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.

4. **Your Site is Live!**:
   - GitHub Actions will automatically run the build workflow.
   - Within 1–2 minutes, your website will be live at:
     ```
     https://Divyanshu33.github.io/YOUR_REPOSITORY_NAME/
     ```

Whenever you push any updates or commits to the `main` branch in the future, GitHub Actions will automatically rebuild and redeploy your website!

---

## 📦 Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── build.bat                   # 1-click production build launcher
├── run-dev.bat                 # 1-click local dev server launcher
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite config (configured with base: './')
├── tailwind.config.js          # Tailwind CSS styling configuration
├── index.html                  # HTML entry point with metadata & fonts
└── src/
    ├── main.jsx                # React app entry point
    ├── App.jsx                 # Top-level layout & theme controller
    ├── index.css               # Global styles, fonts, and scroll utilities
    ├── data/
    │   └── portfolioData.js    # ⭐ EDIT THIS FILE to update your info!
    └── components/
        ├── Navbar.jsx          # Responsive header & dark/light theme switch
        ├── Hero.jsx            # Section 1: Home (name, tagline, CTA buttons)
        ├── About.jsx           # Section 2: About (background, interests, goals)
        ├── Skills.jsx          # Section 3: Technical skills & category filters
        ├── Projects.jsx        # Section 4: Project cards with GitHub & live links
        ├── ProjectModal.jsx    # Project detail inspection modal
        ├── Contact.jsx         # Section 5: Email copy, social links & contact form
        └── Footer.jsx          # Footer with back-to-top button
```
