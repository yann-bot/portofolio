"use client";

import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// --- Définition du schéma de validation ---
const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  subject: z.string().min(3, "Le sujet doit contenir au moins 3 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const phoneNumber = "0023676094983";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSuccessMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        reset(); // vider le formulaire
        setSuccessMessage("✅ Your   message  was submit  !");
        setTimeout(() => setSuccessMessage(null), 3000); // disparaît après 3s
      }
    } catch (err) {
      console.error("Erreur:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full pl-30 pr-30 mt-30">
      <div className="flex items-center gap-30">
        <div className="flex items-center gap-2" id="contact">
          <h1 className="text-2xl font-bold">
            <span className="text-blue-500">#</span>contact me
          </h1>
          <div className="flex-1 h-1 w-100 bg-blue-500"></div>
        </div>
      </div>

      <div className="w-full flex p-10 justify-between">
        <div className="w-1/2">
          <p>
            Do you have a digital project idea 💡?<br />
            Do you want to enhance your online presence 🚀, optimize your
            processes 📈, or bring an innovative solution to life?<br />
            <br />
            I’m here to help you turn your ideas into simple, effective, and
            tailored digital products.<br />
            📩 Contact me today, and let’s bring your projects to life!<br />
          </p>
          <div className="flex flex-col mt-10 pt-2 pb-2 pl-3 pr-3 border w-fit gap-2">
            <h2>Message me here</h2>
            <Link href={`https://wa.me/${phoneNumber}`} className="flex gap-1">
              <FaWhatsapp className="w-6 h-6 text-green-400" />
              <span>Whatsapp</span>
            </Link>
          </div>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <label htmlFor="name" className="font-semibold">
              Name :
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              placeholder="Your name"
              className="p-3 rounded-md w-90 border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}

            <label htmlFor="email" className="font-semibold">
              Email :
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="yannouafete@gmail.com"
              className="p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}

            <label htmlFor="subject" className="font-semibold">
              Subject :
            </label>
            <input
              type="text"
              id="subject"
              {...register("subject")}
              placeholder="Subject of Message"
              className="p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.subject && (
              <span className="text-red-500 text-sm">{errors.subject.message}</span>
            )}

            <label htmlFor="message" className="font-semibold">
              Message :
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              placeholder="Your message"
              className="p-3 rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message.message}</span>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-2 font-semibold p-3 rounded-md transition-colors ${
                isSubmitting
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? "Submiting..." : "Submit"}
            </button>

            {successMessage && (
              <p className="text-green-500 text-sm mt-2">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
