// ✏️ EDIT THIS FILE to change the text on your site.

export const profile = {
  name: "Rio Villasana",                 // 👈 your real name
  github: "rihou23",                 // projects load from this account automatically
  email: "rihouvillasana@gmail.com",          // 👈 your real email
  location: "Himamaylan City, Negros Occidental, Philippines",
  tagline: "Recent IT Graduate | Aspiring Web Application Developer",
  resume: "",                        // e.g. "/resume.pdf" (put file in /public). "" hides the button
  linkedin: "",                      // e.g. "https://linkedin.com/in/yourname". "" hides it
  available: true,                   // shows the "Open to work" badge
};

export const hero = {
  headline: "I build web apps that are clean, fast and easy to use.",
  intro:
    "I'm an IT graduate who builds websites and apps that work well and look good doing it. I like turning messy ideas into clean, useful experiences — and I learn something new on every project.",
};

// Section numbers, labels and titles. Use "\n" style by splitting into lines.
export const sections = {
  about:      { n: "01", label: "About me",           title: ["Curious by nature,", "careful by habit."] },
  projects:   { n: "02", label: "Selected work",      title: ["Things I've built", "and actually finished."] },
  services:   { n: "03", label: "What I do",          title: ["What I can help", "you build."] },
  education:  { n: "04", label: "Education",          title: ["Where the learning", "started."] },
  experience: { n: "05", label: "Experience",         title: ["Where I picked up", "real-world skills."] },
  skills:     { n: "06", label: "Skills & strengths", title: ["What I'm good at", "(and getting better at)."],
    text: "Some of these I use every day; others I'm actively sharpening. Either way, they're all still growing." },
  toolkit:    { n: "07", label: "My toolkit",         title: ["The tools", "I reach for."],
    text: "Some I know well, some I'm still getting friendly with — honesty over false confidence." },
  next:       { n: "08", label: "What's next",        title: ["Still learning.", "Still building."],
    text: "My goal is simple: get sharper at the fundamentals, ship bigger projects, and design things that actually solve problems for real people." },
  contact:    { n: "09", label: "Contact",            title: ["Have a good idea?", "Let's talk."],
    text: "Whether you want to discuss a project, share an opportunity, or simply connect, feel free to send me a message." },
};

export const about = {
  paragraphs: [
    "I'm Rio C. Villasana, an Information Technology graduate from Carlos Hilado Memorial State University. I'm passionate about software development, problem-solving, and building applications that solve real-world problems. Through my experience developing web and mobile applications, integrating APIs, and handling user feedback, I've developed a strong desire to keep learning and exploring new technologies.",
    "I'm currently looking for freelance opportunities or junior developer roles where I can apply my skills, gain experience, contribute to meaningful projects, and continue growing as a software developer.",
  ],
  facts: [
    { label: "Based in", value: "Bacolod City, PH" },
    { label: "Looking for", value: "Junior web developer roles" },
    { label: "Focus", value: "Web applications" },
  ],
};

// Nicer title/description for a repo. Key = exact repo name in lowercase.
export const featured: Record<string, { title?: string; blurb?: string; pin?: boolean }> = {
  // "my-repo-name": { title: "Nice Title", blurb: "One clear sentence.", pin: true },
};
export const hiddenRepos: string[] = []; // lowercase repo names to hide

export const services = [
  { title: "Web Development", text: "Responsive, well-organized pages and apps with clean, maintainable code.", tags: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "UI & Layout Design", text: "Wireframes and layouts that feel clear, consistent and easy to follow.", tags: ["Figma", "Wireframes", "UI Design"] },
  { title: "App & Database Work", text: "Connecting interfaces to real data, from login to saving and loading records.", tags: ["Firebase", "Supabase", "MySQL", "PHP"] },
];

export const education = [
  { school: "Your University", what: "Bachelor of Science in Information Technology", when: "2022 – 2026" },
  { school: "Your Senior High School", what: "Senior High School", when: "2020 – 2022" },
];

export const experience = [
  { title: "Technical Support | Customer Service", place: "XBG Computers Inc.", when: "2026", text: "I have around five months of experience working with Piso WiFi systems, where I was involved in assembling and setting up the machines, doing basic troubleshooting, and checking their connectivity and functionality. I also interacted with customers and assisted them with common WiFi and technical concerns. Through this experience, I developed practical knowledge of computer hardware, basic networking, troubleshooting, and customer service.", tags: ["Computer Setup", "Hardware", "Troubleshooting","Networking","Customer Support","Data Encoding"] },
  { title: "App Development", place: "Carlos Hilado Memorial State University", when: "2025-2026", text: "During approximately 2–3 months of application development, I encountered and resolved various technical challenges, integrated multiple APIs, and continuously improved the system based on feedback from users, teachers, my adviser, and the OJT coordinator. I also worked to meet different requirements and expectations throughout the development process This experience gave me valuable insights into real-world software development, particularly in problem-solving, system improvement, API integration, and handling user requirements. It allowed me to discover new technologies, explore different approaches, and understand the challenges involved in building an actual application. Most importantly, it strengthened my passion for software development and motivated me to continue learning, improving my skills, and building more projects.", tags: ["Computer Setup", "Hardware", "Troubleshooting","Networking","Customer Support","Data Encoding"] },
];

export const skills = [
  "Responsive Web Design", "UI Layout Planning", "Wireframing", "Frontend Development",
  "Android UI Development", "Database Fundamentals", "Problem Solving", "Team Collaboration",
];

export const toolkit = [
  { name: "HTML", note: "Web structure" },
  { name: "CSS", note: "Styling and layouts" },
  { name: "JavaScript", note: "Web interactions" },
  { name: "TypeScript", note: "Typed JavaScript" },
  { name: "React", note: "UI development" },
  { name: "Next.js", note: "React framework" },
  { name: "Kotlin", note: "Android development" },
  { name: "PHP", note: "Backend development" },
  { name: "MySQL", note: "Database management" },
  { name: "Figma", note: "Design and wireframes" },
  { name: "Firebase Firestore", note: "Cloud database" },
  { name: "Supabase", note: "Backend and auth" },
  { name: "MongoDB", note: "Cloud database" },
];

export const nextUp = [
  { title: "Responsive Development", text: "Building interfaces for mobile, tablet and desktop." },
  { title: "Modern Web Technologies", text: "Strengthening my skills with contemporary web tools." },
  { title: "User-Centered Design", text: "Making interfaces more intuitive and accessible." },
];