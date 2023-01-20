const validate = (req, res, next) => {
    const { name, description, released, rating, genres, platforms, favorites, background_image, created } = req.body

    if (!name) return res.status(400).json({ error: "The name field is required." });
    if (!description) return res.status(400).json({ error: "The description field is required." });
    if (description.length < 20) return res.status(400).json({ error: "This field requires more than 20 characters." });
    if (!released) return res.status(400).json({ error: "The released field is required." });
    if (!rating) return res.status(400).json({ error: "The rating field is required." });
    if (!isNaN(rating) === false) return res.status(400).json({ error: "A number is required in this field." });
    if (genres.length < 1) return res.status(400).json({ error: "You must choose at least one genre." });
    if (platforms.length < 1) return res.status(400).json({ error: "You must choose at least one platforms." });

    next();
};


module.exports = validate