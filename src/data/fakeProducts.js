// data/fakeProducts.js
const { v4: uuidv4 } = require('uuid');

const sample = [
  { id: uuidv4(), name: 'Áo thun', price: 120000, description: 'Áo cotton size M', createdAt: new Date() },
  { id: uuidv4(), name: 'Quần jean', price: 320000, description: 'Quần jean nam', createdAt: new Date() },
  // ... thêm vài product mẫu
];

module.exports = sample;
