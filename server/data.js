import bcrypt from 'bcrypt';

const data = {
  users: [
    {
      name:'Ali',
      email:'admin@shopify.com',
      password: bcrypt.hashSync("512",8),
      isAdmin: true
    },
    {
      name:'Muhammad',
      email:'user@shopify.com',
      password: bcrypt.hashSync("512",8),
      isAdmin: false
    }
  ],
  products: [
    {
      name: "Apple Airpods Pro",
      category: "Apple",
      image: "/images/airpodspro.png",
      price: 249,
      brand: "Apple",
      rating: 4.5,
      countInStock : 12,
      numReviews: 42,
      description:
        "AirPods Pro. Active Noise Cancellation, Transparency mode, and a customizable fit — all in an incredibly light in-ear headphone.",
    },
    {
      name: "Apple Airpods (2nd Generation)",
      category: "Apple",
      image: "/images/airpods.jpg",
      price: 159,
      brand: "Apple",
      rating: 4.5,
      countInStock : 12,
      numReviews: 12,
      description:
        "AirPods will forever change the way you use headphones. Once out of the charging case, use them with all your devices. Buy now with free engraving at apple.com.",
    },
    {
      name: "Apple Pencil (2nd Generation)",
      category: "Apple",
      image: "/images/applepencil.jpg",
      price: 129,
      brand: "Apple",
      rating: 4.5,
      countInStock : 0,
      numReviews: 14,
      description:
        "Apple Pencil is the standard for drawing, note-taking, and marking up documents. Intuitive, precise, and magical.",
    },
    {
      name: "Apple Magic Keyboard",
      category: "Apple",
      image: "/images/magickeyboard.jpg",
      price: 179,
      brand: "Accessories",
      rating: 4.2,
      countInStock : 12,
      numReviews: 72,
      description:
        "Magic Keyboard with Touch ID and Numeric Keypad features a sleek design and a long lasting rechargeable battery and pairs automatically with your Mac.",
    },
    {
      name: "Apple Magic Mouse (2nd Generation)",
      category: "Accessories",
      image: "/images/magicmouse.jpg",
      price: 79,
      brand: "Apple",
      rating: 4.7,
      countInStock : 12,
      numReviews: 10,
      description:
        "Perform simple gestures on the smooth, seamless Apple Magic Mouse. Wireless and fully rechargeable.",
    },
  ],
};

export default data;