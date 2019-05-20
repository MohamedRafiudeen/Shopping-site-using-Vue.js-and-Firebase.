Shopping-site-using-Vue.js-and-Firebase.


Objective: 
          This project is to implement a shopping website for a hotel organisation.
          
          
          
          
          
TOOLS USED:

1. Vue.js Framework., ES6, AJAX, JSON.

2. Bootstrap CSS.

3. Firebase.


          

Requirements: (Accomplished so far):

1. The website is supposed to have navigable pages for each of the shopping processes(viewing menu items, adding to cart, placing order).



The 'ADD MENU' page:

   This page contains a set of forms, that take in a TITLE, a product IMAGE, product DESCRIPTION, and the PRICE of the product.
 
 The form data is then stored in an array of OBJECTS, which, upon a click of the SUBMIT BUTTON, POSTS the array to a Firebase Database.




THE 'MENU' PAGE:

1.The data from Firebase database, posted from 'ADD MENU' page, is retrieved to this page, by a 'GET REQUEST', which returns a PROMISE.

2. The 'Menu' page is supposed to contain a list of cards, each describing the available menu; and their price. The user should be able to select his menu item from among the cards provides; and add it to his/her cart.

3. Each CARD in the 'Menu' Section contains an IMAGE of the food item describes, a SHORT DESCRIPTION of the same; and an BUTTON to enable it to be added to the user's cart page.

4. The end-user should be able to SEARCH his/her food item from among the Menu cards; by the use of a 'SEARCHBAR' provided atop the Menu section, which contains a 'SEARCH FILTER'.


5. The 'ADD TO CART' BUTTON sends the selected menu card data to a seperate array of objects, which are then posted to a FIREBASE       DATABASE, by a POST request.





The 'MY CART' Page: (To be completed):

1. The page retrieves data from Firebase, through a GET request that returns a PROMISE.

2. The retrieved data is then posted in the ARTICLES, which enlist the items that the user has added to his cart.

3. The enlisted items' price is then retrieved; and calculated based on the quantity of each product and its price. The total cost is then displayed at the bottom of the cart.

4. The user will be able to delete or modify the items he/she has added, by the use of 'DELETE' button; and 'QUANTITY' option available in each of the product article.

5. After the above processes, there can proceed to checkout, by the use of a 'CHECKOUT' button at the bottom of the page, that posts the whole array of objects in the cart, to a FIREBASE database.




'USER LOGIN' page: (to be completed):

1. The user login page keeps a memory of the registered users; data, which includes the username, email IDs and the PASSWORDS of each user, by the usage of a FIREBSE USER MANAGEMENT DATABASE.

2. The 'MY CART' page; and the 'ADD TO CART' button in the 'MENU' page, will display a prompt showing a USER LOGIN FORM, if the user is not signed in.



















## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
