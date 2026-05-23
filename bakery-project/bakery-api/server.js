const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/images', express.static('public/images'));

const products = [
  {
    id: 1,
    name: "ფისტის ტორტი",
    short_description: "ფისტის კრემით მომზადებული ტორტი",
    image_url: "http://localhost:3000/images/pistachio-cake.jpg"
  },
  {
    id: 2,
    name: "ორეოს ტორტი",
    short_description: "შოკოლადის ბისკვიტითა და ორეოს კრემით მომზადებული ტორტი",
    image_url: "http://localhost:3000/images/oreo-cake.jpg"
  },
  {
    id: 3,
    name: "ჟოლოს ტორტი",
    short_description: "ჟოლოს კრემითა და ბისკვიტით მომზადებული ტორტი",
    image_url: "http://localhost:3000/images/raspberry-cake.jpg"
  },
  {
    id: 4,
    name: "ჟოლოს ჩიზქეიქი",
    short_description: "ნაზი ჩიზქეიქი ჟოლოს სოუსით",
    image_url: "http://localhost:3000/images/raspberry-cheesecake.jpg"
  },
  {
    id: 5,
    name: "წითელი ხავერდი",
    short_description: "კლასიკური Red Velvet ტორტი კრემ-ყველის კრემით",
    image_url: "http://localhost:3000/images/red-velvet.jpg"
  },
  {
    id: 6,
    name: "შოკოლადის ტორტი",
    short_description: "შოკოლადის ბისკვიტითა და შოკოლადის კრემით მომზადებული ტორტი",
    image_url: "http://localhost:3000/images/chocolate-cake.jpg"
  },
  {
    id: 7,
    name: "რაფაელოს ტორტი",
    short_description: "ქოქოსისა და ნაზი კრემის კომბინაციით მომზადებული ტორტი",
    image_url: "http://localhost:3000/images/rafaello-cake.jpg"
  }
];

app.get('/api/products', (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
});

app.get('/api/products/:id', (req, res) => {
  const productId = Number(req.params.id);
  const product = products.find(item => item.id === productId);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
});

app.listen(PORT, () => {
  console.log(`Bakery API is running on http://localhost:${PORT}`);
});