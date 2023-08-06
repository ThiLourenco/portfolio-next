import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_MAIL!,
    pass: process.env.EMAIL_PASSWORD!,
  },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    if (req.method !== 'POST') {
      res.status(405).json({ message: 'Method Not Allowed' })
      return
    }

    const { name, subject, email, message } = req.body
    if (!name || !subject || !email || !message) {
      res.status(400).json({ message: 'Missing fields' })
      return
    }

    const mailData = {
      from: process.env.EMAIL_MAIL!,
      to: process.env.EMAIL_MAIL!,
      subject: `Nova Mensagem de ${name}`,
      text: `Mensagem: ${message} | Enviado por: ${email}`,
      html: `
        <div>
        <h2>Enviado por:</h2> <span> ${email} </span>
        <h2>Assunto:</h2> <span> ${subject} </span>
        <h2>Mensagem:</h2> <p>${message}</p>
        </div>
      `,
    }

    await transporter.sendMail(mailData)
    console.log('Message sent with success !')

    res.status(200).json({ message: 'Email sent' })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ message: 'Error sending email' })
  }
}
