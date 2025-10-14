import 'dotenv/config.js';
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function handleNailSurgeryForm(req, res) {
    const { firstName, lastName, date, email, phoneNumber, notes } = req.body;

    const payload = {
        firstName,
        lastName,
        date,
        email,
        phoneNumber,
        notes,
    };
    console.log(payload);

    const mailoptions = {
        from: `"DT Podiatry" <contact-us@dtpodiatry.co.uk>`,
        to: email,
        subject: 'Test Email.',
        text: `
        This is an auto-generated email to relay the information entered\n
        Full name: ${firstName} ${lastName}\n
        Requested appointment date: ${date}\n
        Phone nummber: ${phoneNumber}\n
        Comments to podiatrist: ${notes}`,
        html: `
        <p>This is an auto-generated email to relay the information entered</p>
        <p>Full name: ${firstName} ${lastName}</p>
        <p>Requested appointment Date: ${date}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Comments to podiatrist: ${notes}</p>`,
    };

    transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
    });

    // res.redirect('/treatments/nail-surgery');
    res.send();
}

export async function handleBiomechanicsForm(req, res) {
    const { firstName, lastName, date, email, phoneNumber, notes } = req.body;

    const payload = {
        firstName,
        lastName,
        date,
        email,
        phoneNumber,
        notes,
    };
    console.log(payload);

    const mailoptions = {
        from: `"DT Podiatry" <contact-us@dtpodiatry.co.uk>`,
        to: email,
        subject: 'Test Email.',
        text: `
        This is an auto-generated email to relay the information entered\n
        Full name: ${firstName} ${lastName}\n
        Requested appointment date: ${date}\n
        Phone nummber: ${phoneNumber}\n
        Comments to podiatrist: ${notes}`,
        html: `
        <p>This is an auto-generated email to relay the information entered</p>
        <p>Full name: ${firstName} ${lastName}</p>
        <p>Requested appointment Date: ${date}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Comments to podiatrist: ${notes}</p>`,
    };

    transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
    });

    // res.redirect('/treatments/biomechanics');
    res.send();
}

export async function handleOrthoticsForm(req, res) {
    const { firstName, lastName, date, email, phoneNumber, notes } = req.body;

    const payload = {
        firstName,
        lastName,
        date,
        email,
        phoneNumber,
        notes,
    };
    console.log(payload);

    const mailoptions = {
        from: `"DT Podiatry" <contact-us@dtpodiatry.co.uk>`,
        to: email,
        subject: 'Test Email.',
        text: `
        This is an auto-generated email to relay the information entered\n
        Full name: ${firstName} ${lastName}\n
        Requested appointment date: ${date}\n
        Phone nummber: ${phoneNumber}\n
        Comments to podiatrist: ${notes}`,
        html: `
        <p>This is an auto-generated email to relay the information entered</p>
        <p>Full name: ${firstName} ${lastName}</p>
        <p>Requested appointment Date: ${date}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Comments to podiatrist: ${notes}</p>`,
    };

    transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
    });

    // res.redirect('/treatments/orthotics');
    res.send();
}