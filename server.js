const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const dbURI = 'mongodb://127.0.0.1:27017/purnata';
console.log('Attempting to connect to MongoDB at:', dbURI);

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB successfully');
    console.log('Database name:', mongoose.connection.db.databaseName);
    
    // List all collections
    mongoose.connection.db.listCollections().toArray((err, collections) => {
        if (err) {
            console.log('Error listing collections:', err);
        } else {
            console.log('Collections in database:', collections.map(c => c.name));
        }
    });
})
.catch(err => console.error('MongoDB connection error:', err));

// Import models
const User = require('./src/models/User');
const Victim = require('./src/models/Victim');
const Event = require('./src/models/Event');
const ReIntegration = require('./src/models/ReIntegration');

// Import routes
const victimRoutes = require('./src/routes/victims');
const eventRoutes = require('./src/routes/events');
const reintegrationRoutes = require('./src/routes/reintegration');

// Use routes
app.use('/api/victims', victimRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/reintegration', reintegrationRoutes);

// Routes
app.post('/api/signin', async (req, res) => {
    try {
        const { userId, password } = req.body;
        console.log('Attempting to find user:', userId);
        
        const user = await User.findOne({ userId });
        console.log('User found:', user ? 'Yes' : 'No');

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({ 
            message: 'Sign in successful',
            userId: user.userId,
            name: user.name
        });
    } catch (error) {
        console.error('Sign in error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Profile endpoint
app.get('/api/profile/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findOne({ userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Remove sensitive information
        const profile = {
            name: user.name,
            email: user.email,
            staffId: user.staffId,
            location: user.location,
            category: user.category,
            department: user.department,
            phone: user.phone,
            officeLocation: user.officeLocation,
            avatar: user.avatar,
            victimsCount: user.victimsCount,
            casesResolved: user.casesResolved,
            yearsOfService: user.yearsOfService,
            activeCases: user.activeCases,
            totalCases: user.totalCases
        };

        res.json(profile);
    } catch (error) {
        console.error('Profile fetch error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Create test user route
app.post('/api/create-test-user', async (req, res) => {
    try {
        console.log('Attempting to create test user...');
        
        const testUser = new User({
            userId: 'admin',
            password: 'admin123',
            name: 'John Doe',
            email: 'john.doe@purnata.org',
            staffId: 'STF001',
            location: 'Mumbai',
            category: 'Rescue',
            department: 'Field Operations',
            phone: '+91 98765 43210',
            officeLocation: 'Mumbai HQ',
            avatar: '/default-avatar.png',
            victimsCount: 15,
            casesResolved: 23,
            yearsOfService: 3,
            activeCases: 5,
            totalCases: 28
        });
        
        const savedUser = await testUser.save();
        console.log('Test user created successfully:', savedUser);
        
        res.json({ message: 'Test user created successfully' });
    } catch (error) {
        if (error.code === 11000) {
            console.log('Test user already exists (duplicate key error)');
            res.json({ message: 'Test user already exists' });
        } else {
            console.error('Error creating test user:', error);
            res.status(500).json({ message: 'Server error' });
        }
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 