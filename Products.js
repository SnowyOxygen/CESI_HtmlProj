//Script pour ajouter automatiquement des produits

//<li id="listel1"><a href="" id="listellink">Akvarium</a></li>
/* <div id="gridelement">
<a href="">
    <p id="producttitle">Akvarium</p>
    <img src="images\akvarium.png" alt="akvarium" id="prodImg">
    <p id="prix">kr 1.299</p>
</a>
</div> */

// JSON template:
// "fatkbike-el": {
//     "price" : 139,
//     "img" : "images/fatbike-el.png"
// }

import products from './products.json';

prodlist = JSON.parse(products);

var grid = document.getElementById('itemgrid');
var list1 = document.getElementById('listitems1');
var list2 = document.getElementById('listitems2');

for(const [key, value] of Object.entries(prodlist)){
    list1.append(`
    <li id="listel1"><a href="" id="listellink">${key}</a></li>
    `);
    list2.append(`
    <li id="listel1"><a href="" id="listellink">${key}</a></li>
    `);
    grid.append(`
    <div id="gridelement">
    <a href="">
    <p id="producttitle">${key}</p>
    <img src="./images/${key}.png" alt="${key}" id="prodImg">
    <p id="prix">kr ${value}</p>
    </a>
    </div>
    `)
}