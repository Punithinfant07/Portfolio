# Punith Infant D - Enhanced Portfolio Website

A professional, modern, and highly interactive portfolio website showcasing my skills, projects, and experience as a Web Developer. This version is built with pure HTML, CSS, and JavaScript, making it easy to deploy anywhere and customize with VS Code.

## 🚀 How to Use with VS Code and Live Server

### Prerequisites
- [Visual Studio Code](https://code.visualstudio.com/)
- [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (by Ritwick Dey)

### Setup Instructions

1.  **Download the Files**
    -   Create a new folder for your portfolio (e.g., `punith-portfolio-enhanced`)
    -   Save all the provided files (`index.html`, `styles.css`, `script.js`) into this new folder.

2.  **Open in VS Code**
    -   Open Visual Studio Code.
    -   Go to `File > Open Folder...` (or `Cmd/Ctrl + K, Cmd/Ctrl + O`).
    -   Select your `punith-portfolio-enhanced` folder and click "Open".

3.  **Install Live Server Extension**
    -   If you haven't already, open the Extensions view in VS Code (Ctrl+Shift+X or click the Extensions icon on the sidebar).
    -   Search for "Live Server".
    -   Click "Install" on the extension by Ritwick Dey.

4.  **Run the Website**
    -   In the VS Code Explorer, right-click on the `index.html` file.
    -   Select "Open with Live Server".
    -   Your portfolio will automatically open in your default web browser.
    -   Any changes you make to `index.html`, `styles.css`, or `script.js` will instantly refresh in the browser, allowing for rapid development!

### 📁 File Structure
\`\`\`
punith-portfolio-enhanced/
├── index.html          # Main HTML structure of the portfolio
├── styles.css          # All CSS styles, including variables and dark mode
├── script.js           # JavaScript for interactivity, animations, and logic
└── README.md           # This file
\`\`\`

### 🎨 Customization

This portfolio is designed for easy customization. Here's how you can make it your own:

#### 1. Personal Information (`index.html`)
-   **Name & Title**: Updated to "Punith Infant D" and "Web Developer" throughout the site.
-   **Contact Details**: Updated phone, email, and location in the header, hero, and contact sections.
-   **Social Links**: Updated `href` attributes for GitHub, LinkedIn, Email, Phone, and WhatsApp links to your provided profiles.
-   **Profile Image**: The placeholder image is still used. You can change the `src` attribute of the `img` tag in the hero section (`id="profile-image"`) to your own headshot. For example, you can upload your image to a service like Imgur or use a local path (e.g., `src="images/my-photo.jpg"` if you create an `images` folder).

#### 2. About Section (`index.html`)
-   **Summary**: The paragraphs in the "About Me" section now reflect your professional summary.
-   **Achievement Stats**: "Years Experience" is updated to "1" (based on 2024 intern year), and "Projects Completed" is set to "15". "Satisfaction Rate" remains at "100".
-   **Service Cards**: The titles, descriptions, and tech tags in the four service cards are aligned with your specializations (Frontend, Backend, Responsive Design, E-commerce).

#### 3. Skills Section (`index.html` & `script.js`)
-   **Skill Categories**: Updated to "Languages", "Technologies", and "Tools & Specializations".
-   **Skill Lists**: The skills within each category (HTML5, CSS3, JavaScript, PHP, SQL, Node.js, MySQL, Bootstrap, React.js, Git/GitHub, VS Code, Chrome DevTools, Responsive Design, E-commerce, UI/UX) are updated based on your provided expertise.
-   **Skill Percentages**: Default percentages are used (e.g., 95% for HTML5, 80% for PHP). You can adjust the `data-width` attribute for each `.skill-progress` div to reflect your precise proficiency.
-   **Tech Icons**: The icons at the bottom of the skills section are updated to reflect your core technologies.

#### 4. Projects Section (`index.html` & `script.js`)
-   **Project Cards**: The "Personal Finance Management System" project details are updated with your description and technologies. The other projects remain as placeholders with generic details and GitHub links to your profile, ready for you to customize with your actual projects.
-   **Project Modal Data (`script.js`)**: The `projectData` object in `script.js` for the 'finance' project is updated with your detailed description and features. Remember to update the `githubLink` and `liveDemoLink` for all projects.
-   **GitHub Stats**: The `data-count` attributes for "Public Repositories", "Commits This Year", "Languages Used", and "Stars Earned" are set to reasonable placeholder values (15, 200, 8, 25). You should update these to reflect your actual GitHub activity.

#### 5. Experience Section (`index.html`)
-   **Timeline**: Your professional experience as a "Web Development Intern" at Fantasy Solution, your "Bachelor of Science in Computer Science" from St. Joseph's College, your "Full Stack Developer Course" at Besant Technologies, "Basic Full Stack Development" from Simplilearn, "Higher Secondary Certificate", and "Secondary School Certificate" are all detailed with their respective durations, companies/institutions, and key responsibilities/coursework.
-   **Core Competencies**: The "Core Competencies" grid is updated with your listed skills: Problem-Solving & Analysis, Rapid Technology Learning, Team Collaboration, Technical Communication, Agile Development, Quality Assurance, and Project Management.

#### 6. Contact Section (`index.html`)
-   **Contact Information**: Your email, phone number, and location are updated.
-   **Languages**: Your language proficiencies (Tamil - Native, English - Professional) are included.

#### 7. Styling Changes (`styles.css`)
-   The styling remains consistent with the previous enhanced version, providing a modern and polished look. You can further customize colors, fonts, and layout by editing the CSS variables and rules.

### 🔧 Features Included

-   ✅ **Modern & Responsive Design**: Adapts seamlessly to desktop, tablet, and mobile screens.
-   ✅ **Dark Mode Toggle**: User-friendly light/dark theme switching with `localStorage` persistence.
-   ✅ **Smooth Scrolling Navigation**: Enhanced navigation experience.
-   ✅ **Dynamic Typing Effect**: Engaging text animation in the hero section.
-   ✅ **Animated Skill Bars**: Visual representation of technical proficiencies.
-   ✅ **Interactive Project Showcase**: Filterable projects with hover effects, quick links, and detailed modals.
-   ✅ **GitHub Activity Stats**: Animated counters for repositories, commits, and more.
-   ✅ **Professional Timeline**: Clear display of experience and education.
-   ✅ **Functional Contact Form**: Includes client-side validation and a submission simulation with toast notifications.
-   ✅ **Ripple Button Effects**: Engaging visual feedback on button clicks.
-   ✅ **Scroll-to-Top Button**: Appears on scroll for easy navigation back to the top.
-   ✅ **Loading Screen**: A smooth pre-loader for a polished user experience.
-   ✅ **AOS (Animate On Scroll) Integration**: Adds subtle scroll-triggered animations to various sections.
-   ✅ **Lazy Loading for Images**: Improves initial page load performance by loading images only when they enter the viewport.
-   ✅ **Accessibility (A11y) Enhancements**: Semantic HTML, ARIA attributes, focus-visible styles, and reduced motion support.

### 💡 Tips for VS Code

1.  **Useful Extensions**:
    -   **Auto Rename Tag**: Automatically renames paired HTML/XML tags.
    -   **Prettier - Code formatter**: Formats your code consistently.
    -   **HTML CSS Support**: Provides autocompletion and hover information for HTML and CSS.
    -   **JavaScript (ES6) code snippets**: Speeds up JavaScript development.
    -   **Live Sass Compiler**: If you decide to use SCSS for your CSS.

2.  **Keyboard Shortcuts**:
    -   `Ctrl + /` (or `Cmd + /` on Mac) - Toggle line comment.
    -   `Alt + Shift + F` - Format document (requires a formatter like Prettier).
    -   `Ctrl + D` (or `Cmd + D` on Mac) - Select next occurrence of current selection.
    -   `Ctrl + P` (or `Cmd + P` on Mac) - Go to file.

3.  **Live Server Features**:
    -   Automatically refreshes your browser whenever you save changes to your HTML, CSS, or JavaScript files.
    -   Provides a local development server, allowing you to test your website on other devices on the same network.

### 🔄 Making Changes

1.  **Edit HTML**: Modify the content and structure in `index.html`.
2.  **Style Changes**: Update `styles.css` for visual adjustments.
3.  **Add Functionality**: Enhance `script.js` for new interactive features or modify existing ones.
4.  **Save Files**: Live Server will automatically refresh your browser to show the changes.

### 📞 Support

If you need further assistance with customization or have any questions, feel free to reach out:
-   Email: punithinfant5@gmail.com
-   LinkedIn: [linkedin.com/in/punith-infant-aa2928280](https://linkedin.com/in/punith-infant-aa2928280)

---

**Happy Coding! 🚀**
#   P o r t f o l i o 1  
 #   P o r t f o l i o 1  
 #   P o r t f o l i o  
 #   P o r t f o l i o  
 #   P o r t f o l i o  
 #   P o r t f o l i o  
 