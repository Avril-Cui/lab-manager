const nodemailer = require("nodemailer");
import type { NextApiRequest, NextApiResponse } from "next";

async function sendEmail(data: any) {
  console.log(data)
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sglabsandtutoring@gmail.com", // horton center email
        pass: "ildc xlqx kayd ahmt", // password
      },
    });

    const mailOptions = {
      from: "sglabsandtutoring@gmail.com",
      to: data.teacher_email,
      subject: `${data.subject} Tutoring Feedback from ${data.name}`,
      text: `
      Hi ${data.teacher},

          Your student, ${data.name}, received help from ${data.subject} lab today.
          They worked with tutor ${data.tutor} on: ${data.support}.

      Best wishes,
      Horton Center `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error occurred:", error);
  }
}
export default function email_sender(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = JSON.parse(req.body);
    sendEmail(data);
    console.log("email submitted");
    return res.status(200).json({ message: `email submitted` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `Couldn't submit email`, err });
  }
}
