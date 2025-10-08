export async function handleContactForm(req, res) {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    const payload = {
        fname: firstName,
        lname: lastName,
        mail: email,
        numb: phoneNumber,
        extra: message,
    };

    console.log(payload);
    res.redirect('/contact-us');
}