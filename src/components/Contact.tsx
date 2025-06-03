// src/components/Contact.tsx
import { IoMailOutline, IoLogoLinkedin, IoLogoGithub, IoCallOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center px-4 py-12"
    >
      <h2 className="mb-6 text-3xl font-bold text-[#AFAFB0]">Get In Touch</h2>
      <p className="mb-8 text-lg text-[#AFAFB0]">
        I’m currently open to new opportunities and collaborations. Feel free to reach out via email or connect on LinkedIn.
      </p>

      <div className="mx-auto mb-8 flex max-w-md flex-col gap-4">
        {/* Email link */}
        <a
          //href="mailto:arthurnnguyen@gmail.com"
          className="flex items-center justify-center gap-3 rounded-lg bg-[#0E8AC3] px-6 py-3 text-white"
        >
          <IoMailOutline className="h-6 w-6" />
          <span className="font-medium">arthurnnguyen@gmail.com</span>
        </a>

        {/* Phone Number*/}
        <a
          className="flex items-center justify-center gap-3 rounded-lg bg-[#0E8AC3] px-6 py-3 text-white"
        >
          <IoCallOutline className="h-6 w-6" />
          <span className="font-medium">714-723-9681</span>
        </a> 

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/arthurnnguyen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg border border-slate-300 px-6 py-3 text-slate-800 hover:bg-slate-100 transition"
        >
          <IoLogoLinkedin className="h-6 w-6 text-[#0A66C2]" />
          <span className="font-medium text-[#AFAFB0]">LinkedIn</span>
        </a>

        {/* GitHub link */}
        <a
          href="https://github.com/arthurnnguyen"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg border border-slate-300 px-6 py-3 text-slate-800 hover:bg-slate-100 transition"
        >
          <IoLogoGithub className="h-6 w-6 text-[#AFAFB0]" />
          <span className="font-medium text-[#AFAFB0]">GitHub</span>
        </a>
      </div>

      {/* <p className="text-sm text-[#AFAFB0]">
        Or, if you prefer a quick form submission, fill out your info below:
      </p> */}

      {/* <form
        action="mailto:arthurnnguyen@gmail.com"
        method="POST"
        encType="text/plain"
        className="mx-auto mt-6 flex max-w-lg flex-col gap-4"
      >
        <input
          type="text"
          name="Name"
          placeholder="Your Name"
          required
          className="text-black rounded border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <input
          type="email"
          name="Email"
          placeholder="Your Email"
          required
          className="text-black rounded border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <textarea
          name="Message"
          placeholder="Your Message"
          rows={4}
          required
          className="text-black rounded border border-slate-300 bg-slate-50 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="mx-auto mt-2 w-full max-w-xs rounded bg-[#0E8AC3] px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          Send Message
        </button>
        </form> */}
    </section>
  );
}
