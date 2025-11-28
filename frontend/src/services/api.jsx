// frontend/src/services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const token = JSON.parse(userInfo).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth APIs
export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (credentials) => api.post('/auth/login', credentials);
export const getUserProfile = () => api.get('/auth/profile');
export const updateUserProfile = (userData) => api.put('/auth/profile', userData);

// Product APIs
export const getProducts = (params) => api.get('/products', { params });
export const getProductById = (id) => api.get(`/products/${id}`);
export const getFeaturedProducts = () => api.get('/products/featured');
export const createProduct = (productData) => api.post('/products', productData);
export const updateProduct = (id, productData) => api.put(`/products/${id}`, productData);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// Order APIs
export const createOrder = (orderData) => api.post('/orders', orderData);
export const getOrderById = (id) => api.get(`/orders/${id}`);
export const getMyOrders = () => api.get('/orders/myorders');
export const getAllOrders = () => api.get('/orders');
export const updateOrderToPaid = (id, paymentResult) => api.put(`/orders/${id}/pay`, paymentResult);
export const updateOrderStatus = (id, status) => api.put(`/orders/${id}/status`, { status });

export default api;