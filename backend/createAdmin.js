// backend/createAdmin.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

// Create admin user
const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    // Check if admin already exists
    const adminExists = await User.findOne({ email: 'admin@clothesstore.com' });
    
    if (adminExists) {
      console.log('Admin user already exists');
      process.exit();
    }

    // Create admin user
    const admin = await User.create({
      name: 'Admin User',
      email: 'admin@clothesstore.com',
      password: 'admin123', // Will be hashed by the User model
      isAdmin: true
    });

    console.log('Admin user created successfully');
    console.log('Email: admin@clothesstore.com');
    console.log('Password: admin123');
    console.log('⚠️  IMPORTANT: Change this password after first login!');
    
    process.exit();
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
};

// Run the function
createAdmin();