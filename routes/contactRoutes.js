import express from 'express'

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: "Get all contact"})
})

router.post('/', (req, res) => {
    res.status(200).json({ message: "Create contact"})
})

router.get('/:id', (req, res) => {
    res.status(200).json({ message: `Get contact ${req.params.id}` })
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update contact ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete contact ${req.params.id}` })
})

export default router;