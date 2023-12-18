const express = require('express');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.urlencoded());
app.use(express.json());

// Endpoint to download YouTube video
app.get('/download-video', async (req, res) => {
    try {
        const { videoUrl, videoName } = req.query;

        if (!videoUrl || !videoName) {
            return res.status(400).json({ error: 'Invalid request. Please provide videoUrl and videoName.' });
        }

        // Directory where videos will be saved
        const downloadDirectory = path.join(__dirname, 'downloads');

        // Ensure the directory exists
        if (!fs.existsSync(downloadDirectory)) {
            fs.mkdirSync(downloadDirectory);
        }

        // Create a write stream to save the video
        const videoPath = path.join(downloadDirectory, `${videoName}.mp4`);
        const videoWriteStream = fs.createWriteStream(videoPath);

        // Download the video and pipe it to the write stream
        await ytdl(videoUrl, { quality: 'highest' }).pipe(videoWriteStream);

        videoWriteStream.on('finish', () => {
            console.log(`Video downloaded successfully and saved to: ${videoPath}`);
            res.status(200).json({ message: 'Video downloaded successfully.' });
        });

        videoWriteStream.on('error', (err) => {
            console.error('Error downloading video:', err);
            res.status(500).json({ error: 'Internal server error.' });
        });
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});