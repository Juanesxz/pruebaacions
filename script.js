const nodemailer = require("nodemailer");

async function enviarCorreo() {
    try {
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "juaneswilli@gmail.com", // Tomado de los secrets
                pass: "rvbr ctrp ivzl mzju"
            }
        });

        let info = await transporter.sendMail({
            from: `"Notificación" <${process.env.EMAIL_USER}>`,
            to: "juaneswilli@gmail.com", // Cambia esto por tu correo destino
            subject: "¡Hola! Este es un correo automático",
            text: "Este es un mensaje enviado automáticamente desde GitHub Actions."
        });

        console.log("Correo enviado: ", info.messageId);
    } catch (error) {
        console.error("Error enviando correo:", error);
    }
}

enviarCorreo();
