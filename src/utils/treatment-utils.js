import { body, validationResult } from "express-validator";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailerSend = new MailerSend({
    apiKey: process.env.MAILERSEND_API_KEY,
});

export const patientResponseEmail = async (appointmentType, firstName, lastName, date, email, phoneNumber, notes) => {
    const sentFrom = new Sender('admin@dtpodiatry.co.uk', 'DT Podiatry');
    const recipient = [
        new Recipient(email, firstName)
    ];
    const htmlContent = `
        <p>This is an auto-generated email to relay the information entered</p>
        <p>Appointment Type: ${appointmentType}</p>
        <p>Full name: ${firstName} ${lastName}</p>
        <p>Requested appointment Date: ${date}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Comments to podiatrist: ${notes}</p>`;
    const textContent = `
        This is an auto-generated email to relay the information entered\n
        Appointment Type: ${appointmentType}\n
        Full name: ${firstName} ${lastName}\n
        Requested appointment date: ${date}\n
        Phone nummber: ${phoneNumber}\n
        Comments to podiatrist: ${notes}`;

    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipient)
        .setReplyTo(sentFrom)
        .setSubject('Test Email')
        .setHtml(htmlContent)
        .setText(textContent);

    await mailerSend.email.send(emailParams)
    .then(response => {
        console.log('Email sent successfully:', response);
    })
    .catch(error => {
        console.error('Error sending email:', error);
    })
}