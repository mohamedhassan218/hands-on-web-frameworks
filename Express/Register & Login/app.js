import express from 'express';
import bcrypt from 'bcrypt';

const app = express();

app.use(express.json());

const port = 4000;

const users = [];

// Register 
app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if the email is already exists.
        const foundEmail = users.find((u) => u.email === email);
        if (foundEmail) {
            res.status(400).send(`This email isn't valid :(`);
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ email, password: hashedPassword });
        res.status(201).send(`Registeration is done succesfully :)`);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Get all users.
app.get('/users', (req, res) => {
    res.send(users);
});

// Login.
app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body;
        // Check if the email is valid or not.
        const foundEmail = users.find((u) => u.email === email);
        if(!foundEmail){
            res.status(400).send(`This email isn't valid :(`);
            return;
        }
        const passwordMatch = await bcrypt.compare(password, foundEmail.password);
        if(passwordMatch){
            res.status(201).send('Loged in successfully :)');
        }
        else{
            res.status(400).send('Wrong email or password :(');
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});