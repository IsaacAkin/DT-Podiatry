import express from "express";
// import { body, validationResult } from "express-validator";
import { handleNailSurgeryForm, handleBiomechanicsForm, handleOrthoticsForm } from "../controllers/treatment-controllers.js";

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

router.get('/', (req, res) => res.render('treatments', { navLinks, treatmentLinks }));
router.get('/nail-surgery', (req, res) => res.render('nail-surgery', { navLinks, treatmentLinks, formRoute: '/treatments/nail-surgery' }));
router.post('/nail-surgery', handleNailSurgeryForm);
router.get('/biomechanics', (req, res) => res.render('biomechanics', { navLinks, treatmentLinks, formRoute: '/treatments/biomechanics' }));
router.post('/biomechanics', handleBiomechanicsForm);
router.get('/orthotics', (req, res) => res.render('orthotics', { navLinks, treatmentLinks, formRoute: '/treatments/orthotics' }));
router.post('/orthotics', handleOrthoticsForm);

export default router;