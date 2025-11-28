// backend/seedProducts.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/User');

dotenv.config();

// Sample products data
const products = [
  {
    name: "Classic White T-Shirt",
    description: "Premium quality cotton t-shirt. Comfortable and breathable fabric perfect for everyday wear.",
    price: 29.99,
    category: "Men",
    subcategory: "Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray"],
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400"],
    stock: 100,
    brand: "StyleWear",
    rating: 4.5,
    numReviews: 45,
    featured: true
  },
  {
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with stretch denim for ultimate comfort. Perfect fit and style.",
    price: 79.99,
    category: "Men",
    subcategory: "Pants",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Dark Gray"],
    images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=400"],
    stock: 75,
    brand: "DenimCo",
    rating: 4.7,
    numReviews: 89,
    featured: true
  },
  {
    name: "Floral Summer Dress",
    description: "Beautiful floral pattern summer dress. Light and airy fabric perfect for warm weather.",
    price: 59.99,
    category: "Women",
    subcategory: "Dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Pink", "Blue", "Yellow"],
    images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400"],
    stock: 60,
    brand: "FloralFashion",
    rating: 4.8,
    numReviews: 123,
    featured: true
  },
  {
    name: "Women's Blazer",
    description: "Professional tailored blazer perfect for office wear. Elegant and sophisticated design.",
    price: 129.99,
    category: "Women",
    subcategory: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    images: ["https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400"],
    stock: 45,
    brand: "Executive",
    rating: 4.6,
    numReviews: 67,
    featured: false
  },
  {
    name: "Casual Hoodie",
    description: "Comfortable cotton blend hoodie. Perfect for casual outings and cool weather.",
    price: 49.99,
    category: "Men",
    subcategory: "Jackets",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy", "Red"],
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400"],
    stock: 90,
    brand: "ComfortWear",
    rating: 4.4,
    numReviews: 78,
    featured: true
  },
  {
    name: "Leather Jacket",
    description: "Premium genuine leather jacket. Timeless style with modern fit.",
    price: 299.99,
    category: "Men",
    subcategory: "Jackets",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400"],
    stock: 30,
    brand: "LeatherLux",
    rating: 4.9,
    numReviews: 156,
    featured: true
  },
  {
    name: "Kids Cartoon T-Shirt",
    description: "Fun and colorful t-shirt with cartoon prints. Soft fabric safe for kids.",
    price: 19.99,
    category: "Kids",
    subcategory: "Shirts",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Red", "Yellow", "Green"],
    images: ["https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400"],
    stock: 120,
    brand: "KidsFun",
    rating: 4.7,
    numReviews: 92,
    featured: false
  },
  {
    name: "Yoga Pants",
    description: "High-waist yoga pants with moisture-wicking fabric. Perfect for workouts.",
    price: 44.99,
    category: "Women",
    subcategory: "Pants",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Purple", "Pink"],
    images: ["https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400"],
    stock: 85,
    brand: "ActiveFit",
    rating: 4.6,
    numReviews: 104,
    featured: false
  },
  {
    name: "Running Shoes",
    description: "Lightweight running shoes with excellent cushioning and support.",
    price: 89.99,
    category: "Men",
    subcategory: "Shoes",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Blue"],
    images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"],
    stock: 70,
    brand: "SportRun",
    rating: 4.8,
    numReviews: 178,
    featured: true
  },
  {
    name: "Leather Handbag",
    description: "Elegant leather handbag with multiple compartments. Perfect for daily use.",
    price: 149.99,
    category: "Accessories",
    subcategory: "Bags",
    sizes: ["M"],
    colors: ["Brown", "Black", "Tan"],
    images: ["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400"],
    stock: 40,
    brand: "LuxBags",
    rating: 4.7,
    numReviews: 67,
    featured: false
  },
  {
    name: "Striped Polo Shirt",
    description: "Classic polo shirt with modern stripes. Great for casual and semi-formal occasions.",
    price: 39.99,
    category: "Men",
    subcategory: "Shirts",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blue", "Green", "Red"],
    images: ["https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400"],
    stock: 95,
    brand: "PoloStyle",
    rating: 4.5,
    numReviews: 54,
    featured: false
  },
  {
    name: "Maxi Dress",
    description: "Elegant long maxi dress perfect for evening events and special occasions.",
    price: 89.99,
    category: "Women",
    subcategory: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black", "Navy", "Emerald"],
    images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400"],
    stock: 50,
    brand: "Elegance",
    rating: 4.9,
    numReviews: 134,
    featured: true
  },
  {
    name: "Denim Jacket",
    description: "Classic denim jacket never goes out of style. Perfect layering piece.",
    price: 69.99,
    category: "Women",
    subcategory: "Jackets",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    images: ["https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400"],
    stock: 65,
    brand: "DenimCo",
    rating: 4.6,
    numReviews: 88,
    featured: false
  },
  {
    name: "Sports Shorts",
    description: "Breathable athletic shorts with elastic waistband. Perfect for sports and workouts.",
    price: 29.99,
    category: "Men",
    subcategory: "Pants",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Navy", "Red"],
    images: ["https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400"],
    stock: 110,
    brand: "ActiveSport",
    rating: 4.4,
    numReviews: 71,
    featured: false
  },
  {
    name: "Kids Sneakers",
    description: "Comfortable and durable sneakers for active kids. Easy to wear and clean.",
    price: 39.99,
    category: "Kids",
    subcategory: "Shoes",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blue", "Pink", "Black", "White"],
    images: ["https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400"],
    stock: 80,
    brand: "KidsSport",
    rating: 4.7,
    numReviews: 95,
    featured: false
  },
  {
    name: "Sunglasses",
    description: "UV protection sunglasses with stylish frames. Perfect for sunny days.",
    price: 79.99,
    category: "Accessories",
    subcategory: "Other",
    sizes: ["M"],
    colors: ["Black", "Brown", "Silver"],
    images: ["https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"],
    stock: 100,
    brand: "SunShade",
    rating: 4.5,
    numReviews: 112,
    featured: false
  }
  
];

// Connect to MongoDB and seed products
const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Existing products deleted');

    // Insert new products
    await Product.insertMany(products);
    console.log('Products seeded successfully');

    console.log(`${products.length} products added to database`);
    process.exit();
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

// Run the seed function
seedProducts();