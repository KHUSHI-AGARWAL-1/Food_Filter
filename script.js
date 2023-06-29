/* Problem Statement: 
Suppose you are the owner of the restaurant whose menu include both Veg as well as Non-well dishes. You need to filter out the dishes on the basis of Veg and Non-veg 
according to the customer's requirement.Also create Jian menu(i.e does not include garlic or onion) Write a JS program to accomplish your task */

// Program:
//Declare the menu of restaurant

const menu=['Pav Bhaji' ,'Dosa','Chicken Curry','Idli Sambhar' ,'Egg Curry','Fried Chicken','Pizza','Burger','Momos','Egg Maggie','Kadhai Paneer','Paneer Butter Masala',
            'Pearl Couscous with Chicken','Butter Chicken' ,'Stuffed Naan','Maggie','Chowmein','Hot Dog','Keto Burger','Grilled Chicken','Barbecue Chicken Bits',
            'Cutlets','Kadai Chicken ','Chicken tikka','Tandoori chicken','Afghani chicken','Grilled Sandwich','Dabeli','Mocktails','Chaap','Golggape','Chole Bhature',
            'Samosa','Chicken Biryani','Lemon Tandoori Chicken','Chicken Tikka Roll','Paneer Wrap','Garlic Bread','Chicken do Pyaza','Dal Rice','Paneer Malai Tikka',
            'Jeera Rice','Onion Rings','Malai Kofta','Matar Paneer','Shahi Paneer','Paneer Tikka','Chilly Paneer','Chilly Honey Potato','Fried chicken lolipop',
            'Egg Chat','Egg Bhurji','Fried Egg','Egg Biryani','Aaloo Parantha','Chocolate Oreo Shake'];

// write a function to check food item is veg or not
function isVeg(foodItem){
    if(foodItem.toLowerCase().indexOf('chicken')!==-1 || foodItem.toLowerCase().indexOf('egg')!==-1){
        return false;
    }
    return true;
}

function isJain(foodItem){
    if(foodItem.toLowerCase().indexOf('onion')!==-1 || foodItem.toLowerCase().indexOf('garlic')!==-1){
        return false;
    }
    return true;
}
// for veg menu
const vegMenu=menu.filter(isVeg);
// for jain menu
const jainMenu= menu.filter(isVeg).filter(isJain);
console.log("Here's your whole menu:\n"+menu);
console.log("Veg Menu:\n"+vegMenu);
console.log("Jain Menu:\n"+jainMenu);
