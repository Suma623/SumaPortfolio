import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaPaperPlane,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

export default function Contact() {
    const form = useRef();

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const sendEmail = (e) => {
  e.preventDefault();

  setLoading(true);

  emailjs
    .sendForm(
      "service_8h325j5",
      "template_6czf1o5",
      form.current,
      "PJy6EEd_UYttwKoKT"
    )
    .then(() => {
      setLoading(false);
      setSuccess(true);

      form.current.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      alert("Failed to send message.");
    });
};
  return (
    <section
  id="contact"
  className="
  relative
  overflow-hidden
  bg-[#050816]
  text-white
  pt-10
  pb-8
  "
>
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-48 top-10 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[180px]" />

        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#ffffff 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

         {/* LEFT SIDE */}

<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  {/* Badge */}

  <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-2 text-sm tracking-[4px] text-violet-300">

    🚀 LET'S CONNECT

  </span>

  {/* Heading */}

<h2 className="mt-6 text-6xl xl:text-7xl font-black leading-tight bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

    Let's Build

    <br />

    Something

    <br />

    <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

      Amazing.

    </span>

  </h2>

  {/* Description */}

  <p className="mt-8 text-xl leading-10 text-gray-300 max-w-xl">

    I'm always open to discussing internships,
    research opportunities, startup ideas,
    collaborations and innovative software projects.

  </p>

  <p className="mt-4 text-lg text-violet-400">

    Let's create the future together.

  </p>

 
  {/* Button */}

  <button
  className="group relative mt-14 overflow-hidden rounded-full p-[2px]"
>
  {/* Animated Border */}
  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500" />

  {/* Button */}
  <div className="relative flex items-center gap-4 rounded-full bg-[#050816] px-10 py-5 text-white transition-all duration-500 group-hover:bg-transparent">

    <span className="text-xl">🚀</span>

    <span className="text-lg font-semibold text-white">
      Get in touch
    </span>

    <span className="text-xl text-white transition-all duration-300 group-hover:translate-x-2">
      →
    </span>

  </div>
</button>

</motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(124,58,237,.18)]">

             <form
  ref={form}
  onSubmit={sendEmail}
  className="space-y-6"
>

  {/* Name */}

  <div className="relative">

    <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-violet-400 text-lg" />

    <input
       name="user_name"
  type="text"
  placeholder="Your Name"
      className="w-full rounded-2xl border border-white/10 bg-[#111827]/70 py-5 pl-14 pr-5 text-white outline-none transition focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,.4)]"
    />

  </div>

  {/* Email */}

  <div className="relative">

    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400 text-lg" />

    <input
      name="user_email"
  type="email"
      placeholder="Your Email"
      className="w-full rounded-2xl border border-white/10 bg-[#111827]/70 py-5 pl-14 pr-5 text-white outline-none transition focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,.4)]"
    />

  </div>

  {/* Message */}

  <div className="relative">

    <HiOutlineChatBubbleBottomCenterText className="absolute left-5 top-6 text-violet-400 text-xl" />

    <textarea
    name="message"
      rows="7"
      placeholder="Tell me about your project..."
      className="w-full rounded-2xl border border-white/10 bg-[#111827]/70 py-5 pl-14 pr-5 text-white outline-none resize-none transition focus:border-violet-500 focus:shadow-[0_0_20px_rgba(139,92,246,.4)]"
    />

  </div>

  {/* Button */}

  <button
  type="submit"
  disabled={loading}
  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 py-5 text-lg font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,.35)] transition-all duration-500 hover:scale-[1.02]"
>
  <span className="relative z-10 flex items-center justify-center gap-3">

    <FaPaperPlane />

    {loading ? "Sending..." : "Send Message"}

  </span>

</button>
{success && (
  <p className="mt-5 text-center text-green-400 font-medium">
    ✔ Message Sent Successfully!
  </p>
)}
</form>

<div className="mt-10 flex justify-center">

  <a
    href="https://x.com/home"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 text-lg text-gray-300 transition hover:text-blue-400"
  >

    <FaXTwitter className="text-2xl" />

    @Swan0931

  </a>

</div>


</div>

</motion.div>

</div>


{/* ================= FOOTER ================= */}


<motion.footer
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
viewport={{ once: true }}

className="
mt-1
pb-3
text-center
"
>


{/* Logo + Title */}

<div
className="
flex
justify-center
items-center
gap-3
mb-1
"
>

<img
src="/logo.png"
alt="logo"
className="
w-10
h-10
object-contain
hover:scale-110
transition
duration-300
"
/>


<h2
className="
text-2xl
font-bold
"
>

<span className="text-white">
Suma's
</span>


<span
className="
bg-gradient-to-r
from-violet-400
to-cyan-400
bg-clip-text
text-transparent
"
>

{" "}Portfolio

</span>


</h2>


</div>



{/* Copyright */}

<p
className="
text-sm
text-gray-500
"
>

© 2026 Ravooru Sumanaswi. All Rights Reserved.

</p>


</motion.footer>



</div>


</section>

);
}