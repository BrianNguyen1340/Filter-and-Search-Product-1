let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: `https://elevennewyork.com/wp-content/uploads/2018/02/02_white-tee_back-scaled.jpg`,
    },
    {
      productName: "Begie Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: `https://bizweb.dktcdn.net/thumb/1024x1024/100/372/262/products/vay-den-1690185920820.jpg?v=1690185924883`,
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: `https://i5.walmartimages.com/seo/Smart-Watch-for-Android-and-iPhone-Ifanze-GTS5-IP68-Waterproof-Smartwatch-for-Women-Men-Smart-Watch-with-Bluetooth-Call-Answer-Make-Calls-Pink_fe11cf7b-c418-4efa-895a-f8802ff8eb0f.9c65571f793081b197ff1a869dd8c709.jpeg`,
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh330mgYWjBX9is5wcqHSsRHN8fdqFB_INAyJA3Y2APQ&s`,
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: `https://shangrilaheritage.it/wp-content/uploads/2022/08/shangri-la-heritage-cafe-racer-black-lambskin-women-jacket-still-life-front.jpg`,
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: `https://i5.walmartimages.com/seo/Tuphregyow-Women-s-Straight-Leg-Cargo-Pants-Clearance-Home-Classic-New-Style-High-Waist-Relaxed-Trousers-Solid-Breathable-Comfy-Leisure-Pockets-Butto_b4601241-ab6b-477d-abe3-f896eaf69c49.1f05cf1af3de42cb77964d3efc8274e1.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF`,
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: `https://cdn.shopify.com/s/files/1/0539/3317/9054/files/brown-leather-jacket-men-1.jpg?v=1650608777`,
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: `https://comfycopenhagen.com/cdn/shop/files/Comfy_Pants-Pants-CY2159-Dark_Grey_800x.jpg?v=1698670721`,
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};
