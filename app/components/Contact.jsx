import { MessageCircle } from "lucide-react";
import React, { useRef, useState } from "react";

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
                setTimeout(() => {});
                setResult("Message sent successfully");
                formRef.current.reset();
                setTimeout(() => {
                    setResult("");
                }, 3000);
            } else {
                console.log("Error", result);
                setResult(result.message || "Something went wrong");
                setTimeout(() => {
                    setResult("");
                }, 3000);
            }
        } catch (err) {
            console.error("Form Error", err);
            setResult("Failed to send message");
        }
    };
    return (
        <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20">
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
                <input
                    type="text"
                    placeholder="Your Name"
                    required
                    name="name"
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border border-gray-300 focus:outline-none transition"
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border border-gray-300 focus:outline-none transition"
                />
                <textarea
                    required
                    rows="5"
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg backdrop-blur-sm border border-gray-300 focus:outline-none transition"></textarea>
                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white rounded-xl w-full md:w-1/3  cursor-pointer hover:shadow-2xl shadow-indigo-500/30 hover:scale-[1.02] duration-300 transition text-sm sm:text-base">
                    <MessageCircle /> Send Message
                </button>
                <p className="my-4">{result}</p>
            </form>
        </div>
    );
};

export default Contact;
