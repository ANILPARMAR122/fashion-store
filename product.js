// FULL 60-ITEM DATABASE
const products = [
    // --- JACKETS & OUTERWEAR ---
    { id: 101, name: "Matte Black Bomber", price: 2999, category: "Jackets", img: "https://loremflickr.com/500/600/bomberjacket,black/all", rating: 5, tag: "Bestseller" },
    { id: 102, name: "Desert Suede Jacket", price: 4500, category: "Jackets", img: "https://loremflickr.com/500/600/suedejacket/all", rating: 4, tag: "New" },
    { id: 103, name: "Leather Biker Jacket", price: 5999, category: "Jackets", img: "https://loremflickr.com/500/600/leatherjacket/all", rating: 5, tag: "Premium" },
    { id: 104, name: "Urban Windbreaker", price: 2200, category: "Jackets", img: "https://loremflickr.com/500/600/windbreaker/all", rating: 4, tag: "" },
    { id: 105, name: "Vintage Denim Jacket", price: 2799, category: "Jackets", img: "https://loremflickr.com/500/600/denimjacket/all", rating: 5, tag: "Trending" },
    { id: 106, name: "Quilted Puffer Jacket", price: 3499, category: "Jackets", img: "https://loremflickr.com/500/600/pufferjacket/all", rating: 4, tag: "Winter" },
    { id: 107, name: "Classic Trench Coat", price: 6500, category: "Jackets", img: "https://loremflickr.com/500/600/trenchcoat/all", rating: 5, tag: "Premium" },
    { id: 108, name: "Navy Harrington", price: 3100, category: "Jackets", img: "https://loremflickr.com/500/600/harringtonjacket/all", rating: 4, tag: "" },
    { id: 109, name: "Wool Varsity Jacket", price: 4200, category: "Jackets", img: "https://loremflickr.com/500/600/varsityjacket/all", rating: 5, tag: "Hot" },
    { id: 110, name: "Fleece Zip-Up", price: 1899, category: "Jackets", img: "https://loremflickr.com/500/600/fleecejacket/all", rating: 4, tag: "" },

    // --- SHIRTS & TOPS ---
    { id: 201, name: "Oxford Fit White", price: 1499, category: "Shirts", img: "https://loremflickr.com/500/600/whiteshirt,mens/all", rating: 5, tag: "Classic" },
    { id: 202, name: "Dark Denim Button-Down", price: 1899, category: "Shirts", img: "https://loremflickr.com/500/600/denimshirt,mens/all", rating: 4, tag: "" },
    { id: 203, name: "Flannel Checkered", price: 1299, category: "Shirts", img: "https://loremflickr.com/500/600/flannelshirt/all", rating: 4, tag: "Winter" },
    { id: 204, name: "Black Graphic Tee", price: 899, category: "Shirts", img: "https://loremflickr.com/500/600/blacktshirt/all", rating: 5, tag: "Trending" },
    { id: 205, name: "Navy Premium Polo", price: 1199, category: "Shirts", img: "https://loremflickr.com/500/600/poloshirt,navy/all", rating: 5, tag: "Bestseller" },
    { id: 206, name: "Breathable Linen", price: 1699, category: "Shirts", img: "https://loremflickr.com/500/600/linenshirt/all", rating: 4, tag: "Summer" },
    { id: 207, name: "Striped Dress Shirt", price: 1999, category: "Shirts", img: "https://loremflickr.com/500/600/stripedshirt/all", rating: 5, tag: "Formal" },
    { id: 208, name: "Waffle Knit Henley", price: 1099, category: "Shirts", img: "https://loremflickr.com/500/600/henleyshirt/all", rating: 4, tag: "" },
    { id: 209, name: "Light Blue Chambray", price: 1599, category: "Shirts", img: "https://loremflickr.com/500/600/chambrayshirt/all", rating: 4, tag: "" },
    { id: 210, name: "Solid V-Neck Tee", price: 699, category: "Shirts", img: "https://loremflickr.com/500/600/vneckshirt/all", rating: 3, tag: "Pack of 2" },

    // --- BOTTOMS ---
    { id: 301, name: "Raw Denim Jeans", price: 3200, category: "Bottoms", img: "https://loremflickr.com/500/600/mensjeans,dark/all", rating: 5, tag: "Premium" },
    { id: 302, name: "Urban Cargo Pants", price: 2800, category: "Bottoms", img: "https://loremflickr.com/500/600/cargopants/all", rating: 4, tag: "Trending" },
    { id: 303, name: "Slim Beige Chinos", price: 1899, category: "Bottoms", img: "https://loremflickr.com/500/600/chinopants/all", rating: 5, tag: "Classic" },
    { id: 304, name: "Tailored Trousers", price: 2499, category: "Bottoms", img: "https://loremflickr.com/500/600/dresstrousers/all", rating: 5, tag: "Formal" },
    { id: 305, name: "Distressed Black Jeans", price: 2199, category: "Bottoms", img: "https://loremflickr.com/500/600/blackjeans,mens/all", rating: 4, tag: "Hot" },
    { id: 306, name: "Everyday Joggers", price: 1499, category: "Bottoms", img: "https://loremflickr.com/500/600/joggerpants/all", rating: 4, tag: "" },
    { id: 307, name: "Khaki Summer Shorts", price: 999, category: "Bottoms", img: "https://loremflickr.com/500/600/mensshorts/all", rating: 4, tag: "Summer" },
    { id: 308, name: "Corduroy Straight Pants", price: 2600, category: "Bottoms", img: "https://loremflickr.com/500/600/corduroypants/all", rating: 4, tag: "Winter" },
    { id: 309, name: "Relaxed Linen Trousers", price: 1999, category: "Bottoms", img: "https://loremflickr.com/500/600/linentrousers/all", rating: 5, tag: "" },
    { id: 310, name: "Pleated Wool Pants", price: 3100, category: "Bottoms", img: "https://loremflickr.com/500/600/pleatedpants/all", rating: 5, tag: "Premium" },

    // --- FOOTWEAR ---
    { id: 401, name: "Midnight Sneakers", price: 3999, category: "Footwear", img: "https://loremflickr.com/500/600/blacksneakers/all", rating: 5, tag: "Hot" },
    { id: 402, name: "Chelsea Leather Boots", price: 5499, category: "Footwear", img: "https://loremflickr.com/500/600/chelseaboots/all", rating: 5, tag: "Premium" },
    { id: 403, name: "White Canvas Lows", price: 1599, category: "Footwear", img: "https://loremflickr.com/500/600/whitesneakers/all", rating: 4, tag: "Classic" },
    { id: 404, name: "Retro High Tops", price: 4200, category: "Footwear", img: "https://loremflickr.com/500/600/hightops/all", rating: 5, tag: "Limited" },
    { id: 405, name: "Suede Penny Loafers", price: 3500, category: "Footwear", img: "https://loremflickr.com/500/600/mensloafers/all", rating: 4, tag: "" },
    { id: 406, name: "Classic Desert Boots", price: 4100, category: "Footwear", img: "https://loremflickr.com/500/600/desertboots/all", rating: 4, tag: "" },
    { id: 407, name: "Formal Leather Oxfords", price: 5999, category: "Footwear", img: "https://loremflickr.com/500/600/oxfordshoes/all", rating: 5, tag: "Formal" },
    { id: 408, name: "Performance Runners", price: 4800, category: "Footwear", img: "https://loremflickr.com/500/600/runningshoes/all", rating: 5, tag: "Sport" },
    { id: 409, name: "Casual Slip-ons", price: 1899, category: "Footwear", img: "https://loremflickr.com/500/600/sliponsneakers/all", rating: 4, tag: "" },
    { id: 410, name: "Double Monk Straps", price: 6200, category: "Footwear", img: "https://loremflickr.com/500/600/monkstrapshoes/all", rating: 5, tag: "Premium" },

    // --- ACTIVEWEAR ---
    { id: 501, name: "Tech Performance Hoodie", price: 2500, category: "Activewear", img: "https://loremflickr.com/500/600/menshoodie,sport/all", rating: 5, tag: "Bestseller" },
    { id: 502, name: "Tapered Gym Joggers", price: 1800, category: "Activewear", img: "https://loremflickr.com/500/600/gymjoggers/all", rating: 4, tag: "" },
    { id: 503, name: "Pro Compression Tights", price: 1200, category: "Activewear", img: "https://loremflickr.com/500/600/compressionpants/all", rating: 4, tag: "" },
    { id: 504, name: "Dry-Fit Sports Tee", price: 899, category: "Activewear", img: "https://loremflickr.com/500/600/sportstshirt/all", rating: 5, tag: "Hot" },
    { id: 505, name: "Lightweight Track Jacket", price: 2100, category: "Activewear", img: "https://loremflickr.com/500/600/trackjacket/all", rating: 4, tag: "" },
    { id: 506, name: "Mesh Training Shorts", price: 799, category: "Activewear", img: "https://loremflickr.com/500/600/gymshorts/all", rating: 4, tag: "" },
    { id: 507, name: "Muscle Tank", price: 699, category: "Activewear", img: "https://loremflickr.com/500/600/muscletee/all", rating: 3, tag: "" },
    { id: 508, name: "Quarter-Zip Pullover", price: 1999, category: "Activewear", img: "https://loremflickr.com/500/600/sportspullover/all", rating: 5, tag: "Winter" },
    { id: 509, name: "Reflective Running Jacket", price: 2600, category: "Activewear", img: "https://loremflickr.com/500/600/runningjacket/all", rating: 4, tag: "" },
    { id: 510, name: "Stretch Yoga Pants", price: 1500, category: "Activewear", img: "https://loremflickr.com/500/600/mensyogapants/all", rating: 4, tag: "" },

    // --- ACCESSORIES ---
    { id: 601, name: "Stealth Chronograph", price: 4999, category: "Accessories", img: "https://loremflickr.com/500/600/menswatch/all", rating: 5, tag: "Premium" },
    { id: 602, name: "Matte Aviator Shades", price: 1999, category: "Accessories", img: "https://loremflickr.com/500/600/aviatorsunglasses/all", rating: 4, tag: "Summer" },
    { id: 603, name: "Genuine Leather Wallet", price: 1499, category: "Accessories", img: "https://loremflickr.com/500/600/leatherwallet/all", rating: 5, tag: "Bestseller" },
    { id: 604, name: "Minimalist Leather Belt", price: 1200, category: "Accessories", img: "https://loremflickr.com/500/600/leatherbelt/all", rating: 5, tag: "" },
    { id: 605, name: "Woven Silk Tie", price: 899, category: "Accessories", img: "https://loremflickr.com/500/600/menssilktie/all", rating: 4, tag: "Formal" },
    { id: 606, name: "Patterned Pocket Square", price: 499, category: "Accessories", img: "https://loremflickr.com/500/600/pocketsquare/all", rating: 4, tag: "" },
    { id: 607, name: "Canvas Weekender Bag", price: 3200, category: "Accessories", img: "https://loremflickr.com/500/600/duffelbag/all", rating: 5, tag: "Travel" },
    { id: 608, name: "Twill Baseball Cap", price: 599, category: "Accessories", img: "https://loremflickr.com/500/600/baseballcap/all", rating: 4, tag: "" },
    { id: 609, name: "Knit Winter Beanie", price: 450, category: "Accessories", img: "https://loremflickr.com/500/600/mensbeanie/all", rating: 4, tag: "Winter" },
    { id: 610, name: "Silver Cufflinks", price: 1299, category: "Accessories", img: "https://loremflickr.com/500/600/cufflinks/all", rating: 5, tag: "Premium" }
];