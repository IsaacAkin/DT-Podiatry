import express from "express";
import { handleContactForm } from "../controllers/index-controller.js";

const router = express.Router();

const navLinks = [
    { href: '/contact-us', text: 'Contact Us' },
    { href: '/about', text: 'About' },
]

const treatmentLinks = [
    { href: '/treatments/nail-surgery', text: 'Nail Surgery' },
    { href: '/treatments/biomechanics', text: 'Biomechanics' },
    { href: '/treatments/orthotics', text: 'Orthotics' },
]

const mapsApiKey = process.env.MAPS_API_KEY;

router.get('/', (req, res) => res.render('index', { navLinks, treatmentLinks }));
router.get('/about', (req, res) => res.render('about', { navLinks, treatmentLinks }));
router.get('/contact-us', (req, res) => res.render('contact-us', { navLinks, treatmentLinks, mapsApiKey }));
router.post('/contact-us', handleContactForm);

export default router;