import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Confirmation: ${subject}`, // Include the subject here
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1A73E8;">Hello ${name},</h2>
          <p>Thank you for reaching out to us. We have received your message and will get back to you shortly. Below is a summary of your message:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;"><strong>Name:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;"><strong>Email:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;"><strong>Subject:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #ccc;"><strong>Message:</strong></td>
              <td style="padding: 8px; border: 1px solid #ccc;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px;">Best regards,</p>
          <p style="color: #1A73E8; font-weight: bold;">Tripswitglory</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
