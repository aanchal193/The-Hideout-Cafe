let foodContainer = document.querySelector('.food-container');

const fooditem = [
    {
        FoodName: "Pancakes",
        foodimg: "Image/Pancakes.jpg",
        price: "RS 50",
        type: "breakFast"
    },
    {
        FoodName: "French Toast",
        foodimg: "Image/French Toast.jpg",
        price: "RS 30",
        type: "breakFast"
    },
    {
        FoodName: "Croissant",
        foodimg: "Image/Croissant1.jpg",
        price: "RS 50",
        type: "breakFast"
    },
    {
        FoodName: "Cereal",
        foodimg: 'Image/Cereal.jpg',
        price: "RS 45",
        type: "breakFast"
    },
    {
        FoodName: "Bread Omlette",
        foodimg: "Image/Bread Omlette.jpg",
        price: "RS 55",
        type: "breakFast"
    },
    {
        FoodName: "Muffins",
        foodimg: 'Image/Muffins.jpg',
        price: "RS 30",
        type: "breakFast"
    },
    {
        FoodName: "Pasta",
        foodimg: 'Image/Pasta.jpg',
        price: "RS 65",
        type: "Lunch"
    },
    {
        FoodName: "Noodles",
        foodimg: 'Image/Noodles.jpg',
        price: "RS 45",
        type: "Lunch"
    },
    {
        FoodName: "Sandwich",
        foodimg: 'Image/Sandwich.jpg',
        price: "RS 120",
        type: "Lunch"
    },
    {
        FoodName: "Biryani",
        foodimg: 'Image/Biryani.jpg',
        price: "RS 120",
        type: "Lunch"
    },
    {
        FoodName: "Tacos",
        foodimg: 'Image/Tacos.jpg',
        price: "RS 150",
        type: "Lunch"
    },
    {
        FoodName: "Lemon Iced Tea",
        foodimg: 'Image/Lemon Iced Tea.jpg',
        price: "RS 40",
        type: "Beverages"
    },
    {
        FoodName: "Cold Coffee",
        foodimg: 'Image/Cold Coffee.jpg',
        price: "RS 50",
        type: "Beverages"
    },
    {
        FoodName: "Soft Drinks",
        foodimg: 'Image/Soft Drinks.jpg',
        price: "RS 40",
        type: "Beverages"
    },
    {
        FoodName: "Fruit Juice",
        foodimg: 'Image/Fruit Juice.jpg',
        price: "RS 20",
        type: "Beverages"
    },
    {
        FoodName: "Espresso",
        foodimg: 'Image/Espresso.jpg',
        price: "RS 45",
        type: "Beverages"
    },
    {
        FoodName: "Kadai Paneer",
        foodimg: 'Image/Kadai Paneer.jpg',
        price: "RS 90",
        type: "Dinner"
    },
    {
        FoodName: "Tandoori Chicken",
        foodimg: 'Image/Tandoori Chicken.jpg',
        price: "RS 110",
        type: "Dinner"
    },
    {
        FoodName: "Butter Naan",
        foodimg: 'Image/Butter Naan.jpg',
        price: "RS 35",
        type: "Dinner"
    },
    {
        FoodName: "Dal Makhani",
        foodimg: 'Image/Dal Makhani.jpg',
        price: "RS 75",
        type: "Dinner"
    }, 
    {
        FoodName: "Soup",
        foodimg: 'Image/Soup.jpg',
        price: "RS 60",
        type: "Dinner"
    },
    {
        FoodName: "Garlic Bread",
        foodimg: 'Image/Garlic Bread.jpg',
        price: "RS 100",
        type: "Dinner"
    },
    {
        FoodName: "Donuts",
        foodimg: 'Image/Donuts.jpg',
        price: "RS 50",
        type: "Desserts"
    },
    {
        FoodName: "Brownie",
        foodimg: 'Image/Brownie.jpg',
        price: "RS 50",
        type: "Desserts"
    },
    {
        FoodName: "Crumble Cookie",
        foodimg: 'Image/Crumble Cookie.jpg',
        price: "RS 65",
        type: "Desserts"
    },
    {
        FoodName: "Oreo Fudge",
        foodimg: 'Image/Oreo Fudge.jpg',
        price: "RS 60",
        type: "Desserts"
    }
]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
        </div>   
    </div>
</div>`;
    foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e => {
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if (e.target.innerHTML === 'All') {
                box.classList.remove('d-none')
            }
            else if (e.target.innerHTML === 'Breakfast') {
                if (box.classList.contains('breakFast')) {
                    box.classList.remove('d-none')
                }
            }
            else if (e.target.innerHTML === 'Lunch') {
                if (box.classList.contains('Lunch')) {
                    box.classList.remove('d-none')
                }
            }
            else if (e.target.innerHTML === 'Beverages') {
                if (box.classList.contains('Beverages')) {
                    box.classList.remove('d-none')
                }
            }
            else if (e.target.innerHTML === 'Dinner') {
                if (box.classList.contains('Dinner')) {
                    box.classList.remove('d-none')
                }
            }
            else if (e.target.innerHTML === 'Desserts') {
                if (box.classList.contains('Desserts')) {
                    box.classList.remove('d-none')
                }
            }
        })
    })
})