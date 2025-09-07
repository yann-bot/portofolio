import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: true, // ✅ Gmail avec port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Configurer le transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true pour port 465, false pour 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify().then(() => {
  console.log("✅ SMTP prêt à envoyer des mails");
}).catch(err => {
  console.error("❌ Erreur SMTP :", err);
});
    // Envoyer l’email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_FROM, // tu peux mettre une autre adresse ici
      subject: `[Portfolio Contact] ${subject}`,
      text: `
        Nom: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email envoyé ✅" });
  } catch (error) {
    console.error("Erreur Nodemailer:", error);
    return NextResponse.json(
      { success: false, message: "Échec de l'envoi de l'email ❌" },
      { status: 500 }
    );
  }
}
