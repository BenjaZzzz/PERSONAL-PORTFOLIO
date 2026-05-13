import nodemailer from "nodemailer";

const info = {
  nickName: "Benjazzz",
};

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Todos los campos son obligatorios" }, { status: 400 });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Email inválido" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio ${info.nickName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `📩 Nuevo mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f1f5f9; border-radius: 12px; overflow: hidden;">
          
          <div style="background: #6366f1; padding: 24px 32px;">
            <h1 style="margin: 0; font-size: 20px; color: white;">📩 Nuevo mensaje desde ${info.nickName}</h1>
          </div>

          <div style="padding: 32px;">
            <div style="background: #1e293b; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Remitente</p>
              <p style="margin: 0; font-size: 16px; font-weight: bold; color: #f1f5f9;">${name}</p>
              <p style="margin: 4px 0 0 0; color: #818cf8;">${email}</p>
            </div>

            <div style="background: #1e293b; border-radius: 8px; padding: 20px;">
              <p style="margin: 0 0 12px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Mensaje</p>
              <p style="margin: 0; line-height: 1.7; color: #f1f5f9; white-space: pre-wrap;">${message}</p>
            </div>
          </div>

          <div style="padding: 16px 32px; border-top: 1px solid #1e293b; text-align: center;">
            <p style="margin: 0; color: #475569; font-size: 12px;">Este mensaje fue enviado desde tu portafolio ${info.nickName}</p>
          </div>

        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return Response.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}