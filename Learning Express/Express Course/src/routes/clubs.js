const { Router } = require('express');

const router = Router();

// Protect this path. You can't access it until you've logged in.
router.use((req, res, next) => {
    if (req.session.user)
        next();
    else
        res.status(401).send('You have not logged in!');
});

const clubs = [
    {
        id: 1,
        club: "Zamalek",
        date: 1911
    },
    {
        id: 2,
        club: "AlAhly",
        date: 1907
    },
    {
        id: 3,
        club: "Elmasry",
        date: 1920
    }
];

router.get('/', (req, res) => { res.status(200).send(clubs) });

// Query Parameters would be like: https://www.google.com/?q=yourQueryParameter
// Get all clubs with date that is older than or equal the specified date.
router.get('/date/', (req, res) => {
    //console.log(req.query);
    const { date } = req.query;
    const parsedDate = parseInt(date);
    if (!isNaN(parsedDate)) {
        const filteredClubs = clubs.filter((d) => d.date <= parsedDate);
        res.send(filteredClubs);
    } else {
        res.send('You must specify date');
    }
});

module.exports = router;