// Ques1. Build a Server Using Http Module NodejS with api endpoints for Getting Products Data
// const http = require("http")
import http from "http"      //using type:"module" in package.json

const PORT = 8000

const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.writeHead(200, "Everything is fine" , {
            "Content-Type" : "text/html"
        })
        res.end("<h1>Welcome to Men and Women Dummy Data</h1>")
    }
    else if(req.url == "/men"){
        res.writeHead(200, {
            "Content-Type":"application/json"
        })
        let menProducts = [
            {
              "id": 1,
              "name": "Slim Fit Jeans",
              "category": "Clothing",
              "price": 49.99,
              "color": "Dark Blue",
              "size": ["30", "32", "34", "36"],
              "brand": "Levi's",
              "inStock": true,
              "rating": 4.5,
              "description": "Classic slim fit jeans with a hint of stretch for added comfort."
            },
            {
              "id": 2,
              "name": "Leather Jacket",
              "category": "Clothing",
              "price": 199.99,
              "color": "Black",
              "size": ["M", "L", "XL"],
              "brand": "Wilson's",
              "inStock": false,
              "rating": 4.8,
              "description": "Genuine leather jacket with a modern design and sturdy zippers."
            },
            {
              "id": 3,
              "name": "Running Shoes",
              "category": "Footwear",
              "price": 89.99,
              "color": "Grey/Red",
              "size": ["8", "9", "10", "11"],
              "brand": "Nike",
              "inStock": true,
              "rating": 4.7,
              "description": "Lightweight running shoes with responsive cushioning and breathable mesh."
            },
            {
              "id": 4,
              "name": "Analog Watch",
              "category": "Accessories",
              "price": 149.99,
              "color": "Silver",
              "brand": "Fossil",
              "inStock": true,
              "rating": 4.6,
              "description": "Elegant stainless steel analog watch with a minimalist design."
            },
            {
              "id": 5,
              "name": "Crew Neck T-Shirt",
              "category": "Clothing",
              "price": 19.99,
              "color": "White",
              "size": ["S", "M", "L", "XL"],
              "brand": "Hanes",
              "inStock": true,
              "rating": 4.2,
              "description": "Soft cotton crew neck t-shirt, perfect for casual wear."
            },
            {
              "id": 6,
              "name": "Wool Scarf",
              "category": "Accessories",
              "price": 29.99,
              "color": "Charcoal",
              "brand": "Calvin Klein",
              "inStock": true,
              "rating": 4.3,
              "description": "Warm wool scarf with a classic design, ideal for winter."
            },
            {
              "id": 7,
              "name": "Formal Shoes",
              "category": "Footwear",
              "price": 119.99,
              "color": "Black",
              "size": ["9", "10", "11", "12"],
              "brand": "Clarks",
              "inStock": false,
              "rating": 4.4,
              "description": "Polished leather formal shoes with a comfortable fit and elegant style."
            },
            {
              "id": 8,
              "name": "Baseball Cap",
              "category": "Accessories",
              "price": 24.99,
              "color": "Navy Blue",
              "brand": "Adidas",
              "inStock": true,
              "rating": 4.1,
              "description": "Stylish baseball cap with an adjustable strap and embroidered logo."
            },
            {
              "id": 9,
              "name": "Graphic Hoodie",
              "category": "Clothing",
              "price": 59.99,
              "color": "Black",
              "size": ["M", "L", "XL", "XXL"],
              "brand": "Puma",
              "inStock": true,
              "rating": 4.5,
              "description": "Comfortable hoodie with a unique graphic print, perfect for everyday wear."
            },
            {
              "id": 10,
              "name": "Sports Sunglasses",
              "category": "Accessories",
              "price": 89.99,
              "color": "Black/Red",
              "brand": "Oakley",
              "inStock": true,
              "rating": 4.9,
              "description": "Durable sports sunglasses with polarized lenses and a secure fit."
            }
          ]
        res.end(JSON.stringify(menProducts))
    }
    else if(req.url == "/women"){
        res.writeHead(200, {
            "Content-Type":"application/json"
        })

        let womenProducts = [
            {
              "id": 1,
              "name": "Floral Print Dress",
              "category": "Clothing",
              "price": 79.99,
              "color": "Red/White",
              "size": ["S", "M", "L", "XL"],
              "brand": "Zara",
              "inStock": true,
              "rating": 4.6,
              "description": "Elegant floral print dress with a fitted waist and flowing skirt."
            },
            {
              "id": 2,
              "name": "High-Heel Sandals",
              "category": "Footwear",
              "price": 129.99,
              "color": "Nude",
              "size": ["6", "7", "8", "9"],
              "brand": "Steve Madden",
              "inStock": true,
              "rating": 4.7,
              "description": "Chic high-heel sandals with an open toe and adjustable ankle strap."
            },
            {
              "id": 3,
              "name": "Crossbody Bag",
              "category": "Accessories",
              "price": 149.99,
              "color": "Black",
              "brand": "Michael Kors",
              "inStock": false,
              "rating": 4.8,
              "description": "Stylish leather crossbody bag with gold-tone hardware and adjustable strap."
            },
            {
              "id": 4,
              "name": "Statement Necklace",
              "category": "Jewelry",
              "price": 39.99,
              "color": "Gold",
              "brand": "Kate Spade",
              "inStock": true,
              "rating": 4.5,
              "description": "Bold statement necklace featuring intricate design and a lobster clasp closure."
            },
            {
              "id": 5,
              "name": "Wool Blend Coat",
              "category": "Clothing",
              "price": 199.99,
              "color": "Camel",
              "size": ["M", "L", "XL"],
              "brand": "Banana Republic",
              "inStock": true,
              "rating": 4.7,
              "description": "Sophisticated wool blend coat with a tailored fit and classic notch collar."
            }
          ]
        
        res.end(JSON.stringify(womenProducts))
    }
    else if(req.url == "/other"){
        res.end("Page not found")
    }
})

server.listen(PORT, () => {
    console.log(`Server is running at ${PORT}.......`)
})


// Ques2. Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express
import express from "express"

const app = express()
const PORT2 = 8001

const counter = {
  "Counter":0
}

app.get("/", (req, res) => {
  res.send(JSON.stringify(counter))
})

app.get("/increment", (req,res) => {
  counter.Counter++
  res.send(JSON.stringify(counter))
})

app.get("/decrement", (req,res) => {
  counter.Counter--
  res.send(JSON.stringify(counter))
})

app.listen(PORT2, () => {
  console.log(`Counter is running at ${PORT2}`)
})

//Ques3. Create a Basic Server with Different Routes using Express
const app2 = express()
const PORT3 = 8002

app2.get("/", (req,res) => {
  let data = {
    "message": "I am homepage"
  }
  res.send(JSON.stringify(data))
})

app2.get("/about", (req,res) => {
  let data = {
    "message": "I am about page"
  }
  res.send(JSON.stringify(data))
})

app2.get("/contact", (req,res) => {
  let data = {
    "email": "support@pwskills"
  }
  res.send(data)
})

app2.listen(PORT3, () => {
  console.log(`Server3 is running at ${PORT3}`)
})

//Ques4 Create a Basic Server with Different Routes using Express
const app3 = express()
const PORT4 = 8003

app3.get("/random", (req,res) => {
  res.send({
    "random":Math.floor(Math.random() * 101)
  })
})

app3.listen(PORT4, () => {
  console.log(`Random number server is running at ${PORT4}`)
})
