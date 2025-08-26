import apple from "../assets/images/products/apple.png";
import malta from "../assets/images/products/malta.png";
import cabbage from "../assets/images/products/cabbage.png";
import lettuce from "../assets/images/products/lettuce.png";
import eggplant from "../assets/images/products/eggplant.png";
import potatoes from "../assets/images/products/potatoes.png";
import corn from "../assets/images/products/corn.png";
import cauliflower from "../assets/images/products/cauliflower.png";
import capsicum from "../assets/images/products/capsicum.png";
import chilli from "../assets/images/products/chilli.png";

const products = [
  {
    id: "1",
    name: "Red Chili",
    price: 14.99,
    category: "vegetables",
    rating: 4,
    img: chilli,
    description: "Fresh and spicy red chili for vibrant flavor.",
    descriptionDetails: {
      main: "These red chilies are handpicked for their spice and freshness. Perfect for enhancing any dish with heat.",
      bullets: [
        "Naturally grown without pesticides.",
        "Rich in antioxidants and capsaicin.",
        "Adds intense flavor to meals.",
        "Ideal for sauces and pickles."
      ]
    }
  },
  {
    id: "2",
    name: "Big Potatos",
    price: 9.99,
    category: "vegetables",
    rating: 3,
    img: potatoes,
    description: "Large farm-fresh potatoes for everyday cooking.",
    descriptionDetails: {
      main: "These starchy potatoes are great for mashing, roasting, and frying. A versatile kitchen essential.",
      bullets: [
        "Rich in carbs and fiber.",
        "Ideal for fries and mash.",
        "Locally sourced.",
        "Stored in cool conditions to retain freshness."
      ]
    }
  },
  {
    id: "3",
    name: "Corn",
    price: 9.99,
    category: "vegetables",
    rating: 3,
    img: corn,
    description: "Sweet and juicy corn picked at peak ripeness.",
    descriptionDetails: {
      main: "Crunchy and sweet corn, perfect for boiling, grilling, or mixing into salads.",
      bullets: [
        "Non-GMO variety.",
        "Naturally sweet taste.",
        "High in fiber.",
        "Easy to cook."
      ]
    }
  },
  {
    id: "4",
    name: "Malta",
    price: 9.99,
    category: "fruits",
    rating: 3,
    img: malta,
    description: "Juicy and tangy malta packed with vitamin C.",
    descriptionDetails: {
      main: "Malta oranges are sweet, seedless, and full of refreshing citrus flavor. Great for juicing and snacking.",
      bullets: [
        "Excellent source of vitamin C.",
        "Boosts immunity.",
        "Freshly harvested.",
        "Ideal for juices or salads."
      ]
    }
  },
  {
    id: "5",
    name: "Apple",
    price: 9.99,
    category: "fruits",
    rating: 5,
    img: apple,
    description: "Crispy, sweet red apples from the mountains.",
    descriptionDetails: {
      main: "Enjoy crunchy apples grown with care. Packed with nutrients and antioxidants.",
      bullets: [
        "Low calorie, high fiber.",
        "Keeps you full longer.",
        "Good for heart health.",
        "No added preservatives."
      ]
    }
  },
  {
    id: "6",
    name: "Cabbage",
    price: 9.99,
    category: "vegetables",
    rating: 3,
    img: cabbage,
    description: "Leafy and fresh green cabbage, ready to cook.",
    descriptionDetails: {
      main: "Green cabbage perfect for salads, coleslaw, and stir fry dishes. Grown organically.",
      bullets: [
        "Rich in vitamins K and C.",
        "Supports digestion.",
        "Crunchy and clean leaves.",
        "Ideal for soup and wraps."
      ]
    }
  },
  {
    id: "7",
    name: "Capsicum",
    price: 9.99,
    category: "vegetables",
    rating: 5,
    img: capsicum,
    description: "Bright green capsicum for crisp and mild flavor.",
    descriptionDetails: {
      main: "Green capsicums are sweet and tangy, excellent in stir-fries and grilled dishes.",
      bullets: [
        "High in vitamin C.",
        "Great for sautéing.",
        "No chemical treatment.",
        "Perfect shape and color."
      ]
    }
  },
  {
    id: "8",
    name: "Cauliflower",
    price: 9.99,
    category: "vegetables",
    rating: 4,
    img: cauliflower,
    description: "Firm white cauliflower, perfect for curries.",
    descriptionDetails: {
      main: "Cauliflowers are rich in fiber and vitamins. Mild flavor makes them versatile.",
      bullets: [
        "Anti-inflammatory benefits.",
        "Used in keto-friendly diets.",
        "Great in stir-fries and roasts.",
        "Locally grown and fresh."
      ]
    }
  },
  {
    id: "9",
    name: "Eggplant",
    price: 9.99,
    category: "vegetables",
    rating: 4,
    img: eggplant,
    description: "Glossy purple eggplant with a soft, spongy texture.",
    descriptionDetails: {
      main: "Ideal for curries, grilling, or roasting. Eggplants are full of fiber and low in calories.",
      bullets: [
        "Rich in antioxidants.",
        "Absorbs flavors well.",
        "Smooth skin and firm flesh.",
        "Great meat substitute."
      ]
    }
  },
  {
    id: "10",
    name: "Lettuce",
    price: 9.99,
    category: "vegetables",
    rating: 5,
    img: lettuce,
    description: "Crispy green lettuce for salads and wraps.",
    descriptionDetails: {
      main: "Freshly picked lettuce leaves that stay crunchy in the fridge. Great for healthy meals.",
      bullets: [
        "Low calorie snack.",
        "Essential for salads.",
        "Hydrating and cooling.",
        "Naturally grown."
      ]
    }
  },
];

export default products;
