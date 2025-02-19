# E-commerce-webiste (Als Toy Barn)

## Requirements / Purpose


## MVP:
- Home Page
  - This will contain:
    - A Grid of products
    - Carousel of featured (or favourited) products
- Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
  - All products should be stored in Firestore:
  - You should store the following information:
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
    - new or not (boolean)
      All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application
- Cart
  - A list of all products added to the user's cart and a total price
  - You should not be able to add more items than are in stock to the cart
  - You may want to adjust quantity of products from the Cart page
  - You should be able to remove products from the cart

Instructions:

- You should first be taken to the Home Page which has a carousel, featured products and a button to see more products.
- The Product Page list all the products to the user. The grid should be responsive on different screen sizes
- Each product card can be clicked on to take the user to a Details Page. There they can switch the colour of the product.
- Products can be "add to cart". They will then be added to the cart page with a total price for all the products that are on the cart page.

---

## Purpose of project:

First Full-Stack Nology project, combing frontend using React and a bacnkend using Firestore/Firebase.
Primary concepts are Fetching Data, dynamically changing the db with user actions, and using react-router.
Using JSX, JavaScript and SCSS/Sass.

---

## Build Steps

- Made basic framework of the Home, Product and Cart Page.
- Worked on the NavBar and styling.
- Implemented react-router and have the NavBar showing on each page.
- Feteched the data from the db, got all fields showing on the page.
- Made the carousel component using db data.
- Made a card component to display 1 product.
- Used the card to span all products onto the Products page.
- Made a simple footer that displays on all pages.
- Worked on error handling and states like loading, error and success.
- Made a Loader component to put in place of the loading text.
- Made each card clickable, this takes the user to a details page with more information on that product.
- Styled the card and details page to fit the styling direction.
- Added sub-class into each document title 'variants'.
- Added button on the details page to change the products colour.
- Made the add to cart button work, dealt with the logic to add/remove quantity from the db.
- Showed the total price of all products on the cart page, also added a toast notification when a toy is added.
- Added gh-pages to the app to allow it to deploy to Github Pages.

---

## Design Goals / Approach

- Took inspiration from other toy websites, when for brigth colours of Blue and Yellow that complemented each other.
- It should have a fun and engaging feel that draws the users eye to the site.
- Wanted it to look and work well on any device.

---

## Features

- Has a Carousel, that shows 3 different toys. Arrows on either side can be clicked to rotate the toy being show to the next/previous toy.
- Each Toy has a id, name, price, quantity, image, description and variants
- The colour of the stock on each card changes to visually show the user if there is lots of stock, or no stock.
- Shows "New" toys which are displayed by a red tag in their card.
- Loader shows the sire is fetching data using the same style colours
- A product can be clicked and it will take the user to a details page, this will display the varaint buttons, with colours that dynamically match the 'colour' string in the db.
- Every card has a 'add to cart' button which will add the product to the cart page, lower the stock of that product by 1, and a toast noficication will give feedback to the user that it has been added.
- Cart Page displays all products that have been added, this shows the amount that has been added as well. A total price is displayed at the bottom for the combined price of all the products.

---

## Known issues

- N/A

---

## Future Goals

- To convert this app into TypeScript
- Add more context to the code, this will help make the components less big
- Implement Vitesting.
- 
---

## Change logs

- N/A

---

## What did you struggle with?

- Working with a database directly was different to API's so took some adjusting to make everything work as l wanted it to.
- Carousel functionality and styling wasn't working properly for a while. Got it working but still not that happiest with it.
- I wanted to refactor the code to break it down more but l still have more MVP work to do so l ran out of time for that.
- Getting the quantity field to change properly when adding/removing products from cart wasn't working for a while. Took a few different approaches until l found a way to make it work.
- A lot of manual work to add in all to documents, fields and sub-collections into the database.

---

## Further details, related projects, reimplementations

- N/A
