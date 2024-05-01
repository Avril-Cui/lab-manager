const nodemailer = require("nodemailer");
import type { NextApiRequest, NextApiResponse } from "next";

async function sendEmail(data: any) {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "Avril_Cui@stgeorges.edu",
        pass: "Aspect0717",
      },
    });

    const mailOptions = {
      from: "avril_cui@stgeorges.edu",
      to: "avrilcui17@gmail.com", //data.teacher_email
      subject: "HELLO",
      // `${data.subject} Tutoring Feedback from ${data.name}`,
      text: "HI"
      // `Hi ${data.teacher_name},\n\n
      //     Student ${data.name} received help from ${data.subject} lab today.
      //     They worked with tutor ${data.tutor} on ${data.support}.
          
      //     Best wishes,
      //     Horton Center `,
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
    console.log(req.body.data)
    sendEmail(req.body.data);
    // console.log("email submitted");
    return res.status(200).json({ message: `email submitted` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: `Couldn't submit email`, err });
  }
}
