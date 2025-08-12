import { MessageCircle } from "lucide-react";
import React, { useRef, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const [result, setResult] = useState("");
    const formRef = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        setResult("Sending....");
        const formData = { name, email, message };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log(result);

            if (result.success) {
                setResult("Message sent successfully");
                formRef.current.reset();
                setTimeout(() => setResult(""), 3000);
            } else {
                console.log("Error", result);
                setResult(result.message || "Something went wrong");
                setTimeout(() => setResult(""), 3000);
            }
        } catch (err) {
            console.error("Form Error", err);
            setResult("Failed to send message");
            setTimeout(() => setResult(""), 3000);
        }
    };

    return (
        <div id="contact" className="w-full px-[12%] py-20">
            <h4 className="text-center mb-2 text-lg animate-bounce">
                Reach Me
            </h4>

            <h2 className="text-center text-4xl font-bold">
                Leave Me A Message
            </h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-500">
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                using the form below.
            </p>

            <form
                ref={formRef}
                onSubmit={onSubmit}
                className="max-w-2xl mx-auto flex flex-col gap-6">
                <div>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        name="name"
                        className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border border-gray-300 focus:outline-none transition"
                    />
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border border-gray-300 focus:outline-none transition"
                    />
                </div>

                <div>
                    <textarea
                        required
                        rows="5"
                        name="message"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border border-gray-300 focus:outline-none transition"></textarea>
                </div>

                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-xl w-full md:w-1/3 cursor-pointer hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] duration-300 transition text-sm sm:text-base">
                    <MessageCircle /> Send Message
                </button>

                <hr className="w-full border-gray-300" />
                <div className="flex flex-wrap gap-4 justify-center">
                    <a
                        href="https://linkedin.com/in/ahmedjoseph07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl cursor-pointer hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] duration-300 transition text-sm sm:text-base">
                        <FaLinkedin /> LinkedIn
                    </a>
                  
                    <a
                        href="https://wa.me/8801752025146"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl cursor-pointer hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] duration-300 transition text-sm sm:text-base">
                        <FaWhatsapp /> WhatsApp
                    </a>
                   
                </div>
                <p className="my-4">{result}</p>
            </form>
        </div>
    );
};

export default Contact;
