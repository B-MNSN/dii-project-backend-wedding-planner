const express = require('express');
const router = express.Router();
const Organiz = require('../model/organiz');

router.get('/', async (req, res) => {
    const result = await Organiz.find({});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const organizId = (req.params.id);
    const organiz = await Organiz.find({ _id: organizId });
    res.json(organiz);
});

router.post('/', async (req, res) => {
    try{
        const { organiz_img, organiz_name, organiz_description,organiz_theme, organiz_food,organiz_location, organiz_dress, organiz_photo,organiz_card,organiz_gift} = req.body;
        if (!(organiz_img && organiz_name && organiz_description && organiz_theme && organiz_food && organiz_location && organiz_dress && organiz_photo && organiz_card && organiz_gift)) {
            res.status(404).send("All input is required");
        }

        const organiz = await Organiz.create({
            organiz_img,
            organiz_name,
            organiz_description,
            organiz_theme,
            organiz_food,
            organiz_location,
            organiz_dress,
            organiz_photo,
            organiz_card,
            organiz_gift
        })
        res.status(201).json(organiz);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;