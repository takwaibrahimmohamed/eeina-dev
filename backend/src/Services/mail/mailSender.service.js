import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from "../../constant.js";


const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true, // upgrade with STARTTLS
      auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
      },
});

export default transporter;