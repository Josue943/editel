"use server";
import nodemailer from "nodemailer";
import { Inputs } from "@/interfaces/inputs";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: "pagina.editel@gmail.com",
    pass: process.env.gmailServices,
  },
});

export const sentEmail = async ({ name, email, message }: Inputs) => {
  try {
    await transporter.sendMail({
      from: name,
      to: "Editel_07@hotmail.com",
      subject: `consulta editel ${email}`,
      text: message,
    });
  } catch (error) {
    console.log(error);
  }
};
