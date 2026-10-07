import { useEffect, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [about, setAbout] = useState(null);
  const [experience, setExperience] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });

    fetch("http://localhost:8080/api/skills")
      .then((response) => response.json())
      .then((data) => {
        setSkills(data);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
      });

    fetch("http://localhost:8080/api/experience")
      .then((response) => response.json())
      .then((data) => {
        setExperience(data);
      })
      .catch((error) => {
        console.error("Error fetching experience:", error);
      });

    fetch("http://localhost:8080/api/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });

    fetch("http://localhost:8080/api/about")
      .then((response) => response.json())
      .then((data) => {
        setAbout(data);
      })
      .catch((error) => {
        console.error("Error fetching about:", error);
      });

    fetch("http://localhost:8080/api/testimonials")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });

    fetch("http://localhost:8080/api/blogs")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      console.log("Status:", response.status);

      const responseText = await response.text();
      console.log("Response:", responseText);

      if (response.ok) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
<nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-950/90 backdrop-blur">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <a
      href="#home"
      className="text-xl md:text-2xl font-bold tracking-tight"
    >
      Himmat<span className="text-blue-500">.</span>
    </a>

    <div className="hidden md:flex items-center gap-7 text-sm text-gray-300">
      <a href="#home" className="hover:text-blue-400 transition">
        Home
      </a>

      <a href="#about" className="hover:text-blue-400 transition">
        About
      </a>

      <a href="#projects" className="hover:text-blue-400 transition">
        Projects
      </a>

      <a href="#skills" className="hover:text-blue-400 transition">
        Skills
      </a>

      <a href="#testimonials" className="hover:text-blue-400 transition">
        Testimonials
      </a>

      <a href="#blog" className="hover:text-blue-400 transition">
        Blog
      </a>

      <a href="#contact" className="hover:text-blue-400 transition">
        Contact
      </a>
    </div>

    <a
      href="#contact"
      className="hidden sm:inline-block px-5 py-2.5 bg-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
    >
      Let's Talk
    </a>

  </div>
</nav>


{/* Hero Section */}
<section
  id="home"
  className="relative overflow-hidden min-h-[88vh] flex items-center px-6"
>
  <div className="max-w-6xl mx-auto w-full">

    <div className="max-w-3xl">

      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        Available for opportunities
      </div>

      <p className="text-blue-400 text-lg md:text-xl font-medium mb-4">
        Java Full Stack Developer
      </p>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
        Hi, I'm Himmat Singh Yadav
      </h1>

      <p className="max-w-2xl text-gray-400 text-lg md:text-xl leading-8 mb-8">
        BCA graduate and Java Full Stack Developer focused on building
        modern web applications using Java, Spring Boot, React and
        PostgreSQL.
      </p>

      <div className="flex flex-wrap gap-4">

        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Contact Me
        </a>

      </div>

      <div className="flex flex-wrap gap-8 mt-12 text-sm text-gray-500">
        <div>
          <span className="block text-white font-semibold">
            Java
          </span>
          Backend
        </div>

        <div>
          <span className="block text-white font-semibold">
            Spring Boot
          </span>
          APIs
        </div>

        <div>
          <span className="block text-white font-semibold">
            React
          </span>
          Frontend
        </div>

        <div>
          <span className="block text-white font-semibold">
            PostgreSQL
          </span>
          Database
        </div>
      </div>

    </div>

  </div>
</section>

      {/* About Section */}
<section
  id="about"
  className="py-24 px-6 bg-gray-900"
>
  <div className="max-w-6xl mx-auto">

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left */}
      <div>

        <p className="text-blue-400 text-lg font-medium mb-3">
          About Me
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {about?.[0]?.title}
        </h2>

        <div className="w-16 h-1 bg-blue-600 rounded-full mb-8"></div>

        <p className="text-gray-400 text-lg leading-8">
          {about?.[0]?.description}
        </p>

      </div>


      {/* Right */}
      <div className="grid grid-cols-2 gap-5">

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
          <p className="text-3xl font-bold text-blue-400 mb-2">
            BCA
          </p>
          <p className="text-gray-400">
            Computer Applications
          </p>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
          <p className="text-3xl font-bold text-blue-400 mb-2">
            Java
          </p>
          <p className="text-gray-400">
            Backend Development
          </p>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
          <p className="text-3xl font-bold text-blue-400 mb-2">
            React
          </p>
          <p className="text-gray-400">
            Frontend Development
          </p>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6">
          <p className="text-3xl font-bold text-blue-400 mb-2">
            PostgreSQL
          </p>
          <p className="text-gray-400">
            Database
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

      {/* Projects Section */}
<section
  id="projects"
  className="py-24 px-6 bg-gray-950"
>
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-blue-400 text-lg font-medium mb-3">
        My Work
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Featured Projects
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-7">
        A selection of applications I have built while developing my
        skills in Java, Spring Boot, React and PostgreSQL.
      </p>

    </div>


    <div className="grid md:grid-cols-2 gap-8">

      {projects.map((project) => (
        <article
          key={project.id}
          className="group bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition duration-300"
        >

          {/* Project Number */}
          <div className="flex items-center justify-between mb-6">

            <span className="text-sm text-gray-500">
              Project #{project.id}
            </span>

            <span className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
              ↗️
            </span>

          </div>


          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-400 transition">
            {project.title}
          </h3>


          {/* Description */}
          <p className="text-gray-400 leading-7 mb-6">
            {project.description}
          </p>


          {/* Technologies */}
          <div className="mb-7">

            <p className="text-sm text-gray-500 mb-3">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">

              {project.technologies
                ?.split(",")
                .map((technology, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-gray-950 border border-gray-700 text-sm text-gray-300"
                  >
                    {technology.trim()}
                  </span>
                ))}

            </div>

          </div>


          {/* GitHub */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              View on GitHub
              <span>↗️</span>
            </a>
          )}

        </article>
      ))}

    </div>

  </div>
</section>

    {/* Skills Section */}
<section
  id="skills"
  className="py-24 px-6 bg-gray-900"
>
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-blue-400 text-lg font-medium mb-3">
        My Skills
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Technologies I Work With
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-7">
        Technologies and tools I use to build modern full-stack
        applications.
      </p>

    </div>


    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {skills.map((skill) => (
        <div
          key={skill.id}
          className="bg-gray-950 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition duration-300"
        >

          <div className="flex items-start justify-between mb-5">

            <div>
              <h3 className="text-xl font-bold">
                {skill.name}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {skill.category}
              </p>
            </div>

            <span className="text-blue-400 font-semibold">
              {skill.percentage}%
            </span>

          </div>


          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-700"
              style={{
                width: `${skill.percentage}%`
              }}
            ></div>

          </div>


          <p className="text-sm text-gray-400 mt-4">
            {skill.level}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>
     
     {/* Experience Section */}
<section
  id="experience"
  className="py-24 px-6 bg-gray-950"
>
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-blue-400 text-lg font-medium mb-3">
        My Experience
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Experience & Learning
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-7">
        My practical experience, internship work and continuous learning
        in full-stack development.
      </p>

    </div>


    <div className="max-w-4xl mx-auto">

      {experience
        .filter((item) => item.company !== null)
        .map((item, index) => (
          <div
            key={item.id}
            className="relative pl-8 md:pl-12 pb-12 last:pb-0"
          >

            {/* Timeline Line */}
            {index !== experience.filter(
              (item) => item.company !== null
            ).length - 1 && (
              <div className="absolute left-[7px] md:left-[11px] top-4 bottom-0 w-px bg-gray-800"></div>
            )}

            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1 top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-gray-950"></div>


            {/* Experience Card */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-7 hover:border-blue-500/50 transition duration-300">

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">

                <div>
                  <h3 className="text-2xl font-bold">
                    {item.role}
                  </h3>

                  <p className="text-blue-400 mt-2 font-medium">
                    {item.company}
                  </p>
                </div>

                <span className="inline-block w-fit px-3 py-1 rounded-full bg-gray-950 border border-gray-700 text-sm text-gray-400">
                  {item.startDate} - {item.endDate}
                </span>

              </div>


              <p className="text-gray-400 leading-7 mb-6">
                {item.description}
              </p>


              {item.technologies && (
                <div className="flex flex-wrap gap-2">

                  {item.technologies
                    .split(",")
                    .map((technology, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm"
                      >
                        {technology.trim()}
                      </span>
                    ))}

                </div>
              )}

            </div>

          </div>
        ))}

    </div>

  </div>
</section>

     {/* Services Section */}
<section
  id="services"
  className="py-24 px-6 bg-gray-900"
>
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-blue-400 text-lg font-medium mb-3">
        My Services
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        What I Can Do
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-7">
        I build reliable and modern web solutions using a
        full-stack development approach.
      </p>

    </div>


    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

      {services.map((service) => (
        <div
          key={service.id}
          className="group bg-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 hover:-translate-y-1 transition duration-300"
        >

          {/* Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500/10 text-3xl mb-6">
            {service.icon}
          </div>


          {/* Title */}
          <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
            {service.title}
          </h3>


          {/* Description */}
          <p className="text-gray-400 leading-7">
            {service.description}
          </p>


          {/* Bottom Arrow */}
          <div className="mt-7 text-blue-400 text-xl">
            →
          </div>

        </div>
      ))}

    </div>

  </div>
</section>

     {/* Testimonials Section */}
<section
  id="testimonials"
  className="py-24 px-6 bg-gray-950"
>
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-blue-400 text-lg font-medium mb-3">
        Testimonials
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        What People Say
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-7">
        Feedback and experiences from people I have worked and learned with.
      </p>

    </div>


    <div className="grid md:grid-cols-2 gap-7">

      {testimonials.map((testimonial) => (
        <article
          key={testimonial.id}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition duration-300"
        >

          {/* Quote */}
          <div className="text-blue-500 text-4xl font-serif mb-4">
            “
          </div>


          <p className="text-gray-300 text-lg leading-8 mb-7">
            {testimonial.message}
          </p>


          <div className="flex items-center gap-4">

            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-bold text-lg">
              {testimonial.name?.charAt(0)?.toUpperCase()}
            </div>


            <div>
              <h3 className="font-bold text-lg">
                {testimonial.name}
              </h3>

              <p className="text-blue-400 text-sm mt-1">
                {testimonial.role}
              </p>
            </div>

          </div>

        </article>
      ))}

    </div>

  </div>
</section>

      {/* Blog Section */}
<section
  id="blog"
  className="py-24 px-6 bg-gray-900"
>
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-blue-400 text-lg font-medium mb-3">
        My Blog
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Latest Articles
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-7">
        Notes and articles about Java, Spring Boot, React,
        backend development and my learning journey.
      </p>

    </div>


    <div className="grid md:grid-cols-2 gap-7">

      {blogs.map((blog) => (
        <article
          key={blog.id}
          className="group bg-gray-950 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition duration-300"
        >

          <div className="flex items-center justify-between gap-4 mb-5">

            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
              {blog.category}
            </span>

            <span className="text-sm text-gray-500">
              {blog.publishedDate}
            </span>

          </div>


          <h3 className="text-2xl font-bold leading-tight mb-5 group-hover:text-blue-400 transition">
            {blog.title}
          </h3>


          <p className="text-gray-400 leading-7">
            {blog.content}
          </p>


          <div className="mt-7 text-blue-400 text-sm font-medium">
            Read article →
          </div>

        </article>
      ))}

    </div>

  </div>
</section>

     {/* Contact Section */}
<section
  id="contact"
  className="py-24 px-6 bg-gray-950"
>
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-14">

      <p className="text-blue-400 text-lg font-medium mb-3">
        Get In Touch
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Let's Work Together
      </h2>

      <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-7">
        Have a project, opportunity or just want to connect?
        Send me a message and I'll get back to you.
      </p>

    </div>


    <div className="grid md:grid-cols-2 gap-12 items-start">

      {/* Contact Information */}
      <div>

        <h3 className="text-2xl font-bold mb-6">
          Let's Connect
        </h3>

        <p className="text-gray-400 leading-7 mb-8">
          I'm interested in Java Full Stack development opportunities,
          internships and projects where I can learn, contribute and
          build useful software.
        </p>


        <div className="space-y-5">

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              ✉️
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Email
              </p>

              <p className="text-gray-200">
                Get in touch through the form
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              💻
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Focus
              </p>

              <p className="text-gray-200">
                Java Full Stack Development
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 border border-gray-800 rounded-2xl p-7 md:p-8 space-y-6"
      >

        {/* Name */}
        <div>
          <label className="block mb-2 text-gray-300">
            Name
          </label>

          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
            required
            className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />
        </div>


        {/* Email */}
        <div>
          <label className="block mb-2 text-gray-300">
            Email
          </label>

          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
            }
            required
            className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />
        </div>


        {/* Subject */}
        <div>
          <label className="block mb-2 text-gray-300">
            Subject
          </label>

          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({
                ...formData,
                subject: e.target.value
              })
            }
            required
            className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition"
          />
        </div>


        {/* Message */}
        <div>
          <label className="block mb-2 text-gray-300">
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value
              })
            }
            required
            className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition resize-none"
          ></textarea>
        </div>


        {/* Submit */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Send Message
        </button>

      </form>

    </div>

  </div>
</section>

{/* Footer */}
<footer className="border-t border-gray-800 bg-gray-950 px-6 py-10">

  <div className="max-w-6xl mx-auto">

    <div className="flex flex-col md:flex-row items-center justify-between gap-5">

      <div>
        <h3 className="text-xl font-bold">
          Himmat<span className="text-blue-500">.</span>
        </h3>

        <p className="text-gray-500 text-sm mt-2">
          Java Full Stack Developer
        </p>
      </div>


      <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">

        <a
          href="#home"
          className="hover:text-blue-400 transition"
        >
          Home
        </a>

        <a
          href="#about"
          className="hover:text-blue-400 transition"
        >
          About
        </a>

        <a
          href="#projects"
          className="hover:text-blue-400 transition"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="hover:text-blue-400 transition"
        >
          Contact
        </a>

      </div>

    </div>


    <div className="border-t border-gray-800 mt-8 pt-6 text-center">

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Himmat Singh Yadav. All rights reserved.
      </p>

    </div>

  </div>

</footer>

    </div>
  );
}

export default App;