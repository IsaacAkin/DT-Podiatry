import 'dotenv/config.js';
import { patientResponseEmail } from "../utils/treatment-utils.js";

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

    // Response email to patient
    patientResponseEmail('Nail Surgery', firstName, lastName, date, email, phoneNumber, notes);

    // Podiatrist email response

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

    // Response email to patient
    patientResponseEmail('Biomechanics', firstName, lastName, date, email, phoneNumber, notes);

    // Podiatrist email notification

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

    // Response email to patient
    patientResponseEmail('Orthotics', firstName, lastName, date, email, phoneNumber, notes);

    // Podiatrist email notification

    // res.redirect('/treatments/orthotics');
    res.send();
}