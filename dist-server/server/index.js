import { randomUUID } from 'node:crypto';
import cors from 'cors';
import express from 'express';
import { DROP_META, products } from '../shared/products.js';
const inquiries = [];
const app = express();
const PORT = Number(process.env.PORT) || 3001;
app.use(cors());
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'candyco-api', timestamp: new Date().toISOString() });
});
app.get('/api/drop', (_req, res) => {
    res.json({ drop: DROP_META, products });
});
app.get('/api/products', (_req, res) => {
    res.json({ products });
});
app.get('/api/products/:slug', (req, res) => {
    const product = products.find((item) => item.slug === req.params.slug);
    if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
    }
    res.json({ product });
});
app.post('/api/wholesale', (req, res) => {
    const { businessName, contactName, email, phone, message } = req.body ?? {};
    if (!businessName || !contactName || !email || !message) {
        res.status(400).json({
            error: 'Missing required fields: businessName, contactName, email, message',
        });
        return;
    }
    const inquiry = {
        id: randomUUID(),
        businessName: String(businessName).trim(),
        contactName: String(contactName).trim(),
        email: String(email).trim(),
        phone: phone ? String(phone).trim() : undefined,
        message: String(message).trim(),
        createdAt: new Date().toISOString(),
    };
    inquiries.push(inquiry);
    res.status(201).json({
        success: true,
        inquiry: { id: inquiry.id, createdAt: inquiry.createdAt },
    });
});
app.get('/api/wholesale/inquiries', (_req, res) => {
    res.json({
        count: inquiries.length,
        inquiries: inquiries.map(({ id, businessName, contactName, email, createdAt }) => ({
            id,
            businessName,
            contactName,
            email,
            createdAt,
        })),
    });
});
app.listen(PORT, () => {
    console.log(`CandyCo API listening on http://localhost:${PORT}`);
});
