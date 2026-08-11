import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { name: "Customer Service", level: 95, group: "Customer Service" },
  { name: "Technical Support", level: 93, group: "Customer Service" },
  { name: "Inbound Call Handling", level: 94, group: "Customer Service" },
  { name: "Billing & Payments", level: 92, group: "Financial Services" },
  { name: "Financial Account Support", level: 90, group: "Financial Services" },
  { name: "Transaction Processing", level: 91, group: "Financial Services" },
  { name: "Account Management", level: 90, group: "Administrative" },
  { name: "Troubleshooting", level: 93, group: "Technical Support" },
  { name: "Upselling", level: 88, group: "Sales" },
  { name: "CRM & Documentation", level: 89, group: "Administrative" },
  { name: "Communication", level: 95, group: "Professional Skills" },
  { name: "Attention to Detail", level: 94, group: "Professional Skills" },
];

const projects = [
  {
    title: "Financial Account Support",
    category: "Financial Services",
    description:
      "Supported investment banking clients through inbound calls, handling account inquiries, account updates, withdrawals, transfers, tax documents and statements.",
    tags: ["Investment Accounts", "ACH", "Wire Transfers", "Client Support"],
    icon: "💼",
  },
  {
    title: "Technical Support & Troubleshooting",
    category: "Technical Support",
    description:
      "Handled inbound technical support calls, diagnosed customer concerns and provided practical solutions while maintaining a high level of customer service.",
    tags: ["Technical Support", "Troubleshooting", "Inbound Calls", "Customer Service"],
    icon: "🛠️",
  },
  {
    title: "Billing & Payment Assistance",
    category: "Financial Services",
    description:
      "Assisted customers with billing inquiries, processed payments accurately and helped resolve account-related concerns across telecommunications support accounts.",
    tags: ["Billing", "Payments", "Account Support", "Accuracy"],
    icon: "💳",
  },
  {
    title: "Telecommunications Customer Support",
    category: "Customer Service",
    description:
      "Supported Straight Talk, TracFone, SafeLink and NET10 customers with mobile service concerns, billing questions, troubleshooting and product options.",
    tags: ["Straight Talk", "TracFone", "SafeLink", "NET10"],
    icon: "📱",
  },
  {
    title: "Customer Needs & Upselling",
    category: "Sales",
    description:
      "Identified customer needs and recommended appropriate mobile phones, products and services while maintaining a positive customer experience.",
    tags: ["Upselling", "Product Knowledge", "Customer Needs", "Sales"],
    icon: "📈",
  },
];

const timeline = [
  {
    year: "April 2025 — January 2026",
    role: "Transfer Agent",
    company: "EXL",
    location:
      "9th Floor, 2Quad Building, Cebu Business Park, Cardinal Rosales Avenue, Cebu City",
    text:
      "Handled inbound calls assisting clients with their investment banking accounts, including balance inquiries, account status and account information updates. Processed withdrawals via check, ACH and wire transfers. Guided clients in checking market status through online account access or consultation with financial advisors. Provided 1099-DIV forms, tax details and account statements upon request.",
  },
  {
    year: "August 2023 — July 2024",
    role: "Technical Support Representative",
    company: "RESULTS CX",
    location: "The Mactan Newtown, Lapu-Lapu City, Cebu",
    text:
      "Handled inbound technical support calls and resolved customer concerns. Upsold products and services based on customer needs. Processed customer payments accurately and efficiently.",
  },
  {
    year: "August 2020 — May 2023",
    role: "Technical Support Representative",
    company: "QUALFON INC. — TracFone, SafeLink, and NET10 Account",
    location: "Apas Lahug, Skyrise 3, Cebu IT Park",
    text:
      "Troubleshot and resolved mobile service concerns for customers. Upsold phone products and related services. Assisted with billing inquiries and processed billing transactions.",
  },
  {
    year: "July 2019 — February 2020",
    role: "Technical Support Representative",
    company: "QUALFON INC. — Straight Talk Account",
    location: "Apas Lahug, Skyrise 3, Cebu IT Park",
    text:
      "Managed inbound calls and addressed customer issues effectively. Provided appropriate solutions and offered the best service options. Upsold mobile phones, products and services. Handled billing inquiries and processed payments.",
  },
];

const trainings = [
  {
    year: "2019 — 2022",
    title: "Emergency Response Team",
    organization: "Red Cross Philippines",
    text: "Emergency Response Team training and participation.",
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeSkill, setActiveSkill] = useState("All");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);

    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const filteredProjects = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter]
  );

  const filteredSkills = useMemo(
    () =>
      activeSkill === "All"
        ? skills
        : skills.filter((skill) => skill.group === activeSkill),
    [activeSkill]
  );

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const email = "rosellosawiljun@gmail.com";
  const phone = "09931726305";

  return (
    <div className={dark ? "app dark" : "app light"}>
      <header>
        <button className="brand" onClick={() => goTo("home")}>
          <span>WR</span>
          Wiljun.
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "projects", "experience", "trainings", "contact"].map(
            (item) => (
              <button key={item} onClick={() => goTo(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            )
          )}

        
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="pulse"></span>
              Available for interviews and remote work opportunities.
            </div>

            <h1>
              I provide{" "}
              <span className="gradient-text">
                reliable support
              </span>
              <br />
              that keeps businesses moving.
            </h1>

            <p className="hero-sub">
              Customer service and technical support professional with experience
              in financial services, telecommunications, account support,
              billing, payments and inbound customer assistance.
            </p>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => goTo("projects")}
              >
                View my work <span>↗</span>
              </button>

              <button
                className="secondary-btn"
                onClick={() => goTo("contact")}
              >
                Let's connect
              </button>
            </div>

            <div className="mini-stats">
              <div>
                <strong>Customer Service</strong>
              </div>

              <div>
                <strong>Technical Support</strong>
              </div>

              <div>
                <strong>Financial Services</strong>
              </div>
            </div>
          </div>

    
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="section-heading reveal">
            <span className="section-number">01</span>

            <div>
              <p>ABOUT ME</p>
              <h2>
                Built to Support.
                <br />
                Driven to Deliver.
              </h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text reveal">
              <p>
                I'm a customer service and technical support professional with
                experience supporting clients in financial services,
                telecommunications and technical support environments.
              </p>

              <p>
                My experience includes handling inbound calls, account
                inquiries, transaction processing, billing and payments,
                troubleshooting, customer documentation and product
                recommendations.
              </p>

              <p>
                I focus on understanding the customer's concern, providing an
                accurate solution and delivering a professional experience
                from start to finish.
              </p>

              <div className="cert-card">
                <span className="cert-icon">✓</span>

                <div>
                  <strong>Training</strong>
                  <span>
                    Emergency Response Team — Red Cross Philippines (2019–2022)
                  </span>
                </div>
              </div>
            </div>

            <div className="principles reveal">
              {[
[
"01",
"Listen",
"Understand the customer's concern, ask the right questions, and identify what truly needs to be solved.",
],
[
"02",
"Solve",
"Provide clear, accurate, and practical solutions that address the customer's needs efficiently.",
],
[
"03",
"Support",
"Handle every interaction with patience, professionalism, and genuine commitment to delivering a positive experience.",
],
[
"04",
"Deliver",
"Go beyond resolving the issue by building trust, maintaining accuracy, and leaving every customer feeling valued.",
],
].map(([number, title, description]) => (
                <div className="principle" key={number}>
                  <span>{number}</span>

                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills">
          <div className="section-heading reveal">
            <span className="section-number">02</span>

            <div>
              <p>SKILLS</p>
              <h2>Proficiency.</h2>
            </div>
          </div>

          <div className="filter-row reveal">
            {[
              "All",
              "Customer Service",
              "Financial Services",
              "Technical Support",
              "Administrative",
              "Sales",
              "Professional Skills",
            ].map((group) => (
              <button
                className={
                  activeSkill === group
                    ? "filter active"
                    : "filter"
                }
                key={group}
                onClick={() => setActiveSkill(group)}
              >
                {group}
              </button>
            ))}
          </div>

          <div className="skills-grid reveal">
            {filteredSkills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-top">
                  <strong>{skill.name}</strong>
                  <span>{skill.level}%</span>
                </div>

                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <small>{skill.group}</small>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects">
          <div className="section-heading reveal">
            <span className="section-number">03</span>

            <div>
              <p>SELECTED WORK</p>
              <h2>My Expertise</h2>
            </div>
          </div>

          <div className="filter-row reveal">
            {[
              "All",
              "Customer Service",
              "Financial Services",
              "Technical Support",
              "Sales",
            ].map((item) => (
              <button
                className={
                  filter === item ? "filter active" : "filter"
                }
                key={item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article
                className="project-card reveal"
                key={project.title}
                style={{
                  "--delay": `${index * 60}ms`,
                }}
              >
                <div className="project-icon">
                  {project.icon}
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-arrow">↗</div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section experience">
          <div className="section-heading reveal">
            <span className="section-number">04</span>

            <div>
              <p>EXPERIENCE</p>
              <h2>My professional journey.</h2>
            </div>
          </div>

          <div className="timeline">
            {timeline.map((item) => (
              <div
                className="timeline-item reveal"
                key={item.year}
              >
                <div className="timeline-dot"></div>

                <div className="timeline-date">
                  {item.year}
                </div>

                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRAININGS */}
        <section id="trainings" className="section experience">
          <div className="section-heading reveal">
            <span className="section-number">05</span>

            <div>
              <p>TRAININGS</p>
              <h2>Training - Air Force Reserve.</h2>
            </div>
          </div>

          <div className="timeline">
            {trainings.map((item) => (
              <div
                className="timeline-item reveal"
                key={`${item.title}-${item.year}`}
              >
                <div className="timeline-dot"></div>

                <div className="timeline-date">{item.year}</div>

                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <strong>{item.organization}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="contact-card reveal">
            <div>
              <span className="section-number">06</span>

              <p className="contact-label">
                LET'S WORK TOGETHER
              </p>

              <h2>
                Looking for a
                <br />
                reliable support professional?
              </h2>

              <p className="contact-copy">
                Let's connect and discuss how I can support your
                customers, operations and day-to-day business needs.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="primary-btn"
                href={`mailto:${email}`}
              >
                Email me <span>↗</span>
              </a>

              <button
                className="secondary-btn"
                onClick={() =>
                  navigator.clipboard?.writeText(email)
                }
              >
                Copy email
              </button>

              <div className="contact-details">
                <a href={`mailto:${email}`}>
                  {email}
                </a>

                <a href={`tel:${phone}`}>
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>
          © {new Date().getFullYear()} Wiljun Rosellosa
        </span>

        <span>
          Customer Service · Technical Support · Virtual Assistance
        </span>

        <button onClick={() => goTo("home")}>
          Back to top ↑
        </button>
      </footer>

      {showTop && (
        <button
          className="floating-top"
          onClick={() => goTo("home")}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);