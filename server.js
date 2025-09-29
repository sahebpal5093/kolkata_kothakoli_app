const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Define routes
app.get('/api/photos', (req, res) => {
  // Sample data - in a real app, this would come from a database
  const photos = [
    {
      id: 1,
      title: 'Victoria Memorial',
      description: 'Iconic marble building in Kolkata',
      imageUrl: '/images/victoria-memorial.jpg',
      category: 'landmarks'
    },
    {
      id: 2,
      title: 'Howrah Bridge',
      description: 'Famous cantilever bridge over the Hooghly River',
      imageUrl: '/images/howrah-bridge.jpg',
      category: 'landmarks'
    },
    {
      id: 3,
      title: 'Street Food',
      description: 'Delicious street food from Kolkata',
      imageUrl: '/images/street-food.jpg',
      category: 'food'
    },
    {
      id: 4,
      title: 'Durga Puja',
      description: 'Celebration of Durga Puja festival',
      imageUrl: '/images/durga-puja.jpg',
      category: 'culture'
    }
  ];
  
  res.json(photos);
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));