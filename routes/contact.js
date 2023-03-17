import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

// Ref for Mail https://lo-victoria.com/how-to-build-a-contact-form-with-javascript-and-nodemailer
router.post("/contact", async (req, res) => {
  try {
    let transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: `${process.env.FROM_EMAIL},${req.body.email}`,
      subject: `Contact us | from: ${req.body.fName}`,
      text: req.body.message,
      auth: {
        user: process.env.FROM_EMAIL,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
      },
    });

    res.status(200).json({ mailSent: true });
  } catch {
    res.status(200).json({ mailSent: false });
  }
});

router.get("/", (req, res) => {
  console.log("get request");
  res.status(200).json("success");
});

export default router;
