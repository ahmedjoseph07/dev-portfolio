import { MessageCircle } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
    const [result, setResult] = useState("");
    const formRef = useRef(null);

    const onSubmit = async (e) => {
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        e.preventDefault();
        setResult("Sending....");
        const formData = {
            name,
            email,
            message,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
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
        <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20">
            <motion.h4
                className="text-center mb-2 text-lg animate-bounce"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}>
                Reach Me
            </motion.h4>

            <motion.h2
                className="text-center text-4xl font-bold"
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}>
                Leave Me A Message
            </motion.h2>

            <motion.p
                className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}>
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                using the form below.
            </motion.p>

            <form
                ref={formRef}
                onSubmit={onSubmit}
                className="max-w-2xl mx-auto flex flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        required
                        name="name"
                        className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border border-gray-300 focus:outline-none transition"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border border-gray-300 focus:outline-none transition"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}>
                    <textarea
                        required
                        rows="5"
                        name="message"
                        placeholder="Your Message"
                        className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border border-gray-300 focus:outline-none transition"></textarea>
                </motion.div>

                <motion.button
                    type="submit"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-xl w-full md:w-1/3 cursor-pointer hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] duration-300 transition text-sm sm:text-base">
                    <MessageCircle /> Send Message
                </motion.button>

                <p className="my-4">{result}</p>
            </form>
        </div>
    );
};

export default Contact;
