import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">New Express Interest Submission</h2>
        <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Program:</strong> ${data.program}</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <p><strong>Message:</strong> ${data.message || 'No message provided'}</p>
          <p><strong>Submitted at:</strong> ${new Date(data.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
        </div>
        <p style="color: #6B7280; font-size: 12px; margin-top: 20px;">Reply to applicant: ${data.email}</p>
      </div>
    `;

    const emailText = `
New Express Interest Submission

Program: ${data.program}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Country: ${data.country}
Message: ${data.message || 'No message provided'}

Submitted at: ${new Date(data.submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST

Reply to: ${data.email}
    `;

    // TEMPORARY: Send to your own email for testing
    // TODO: Change to 'react@kct.ac.in' after domain verification
    const emailResponse = await resend.emails.send({
      from: 'REACT Fellowship <onboarding@resend.dev>',
      to: 'reactkumaraguru@gmail.com', // Your Resend account email
      subject: `[TEST] Express Interest: ${data.program}`,
      html: emailHtml,
      text: emailText,
    });

    if (emailResponse.error) {
      console.error('❌ Resend API error:', emailResponse.error);
      return NextResponse.json(
        { error: 'Failed to send email', details: emailResponse.error.message },
        { status: 422 }
      );
    }

    console.log('✅ Email sent successfully to reactkumaraguru@gmail.com');

    return NextResponse.json({ success: true, id: emailResponse.data?.id });
  } catch (error: any) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}