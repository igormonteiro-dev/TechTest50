// Hi Fifty-fiver :) This is my code.

// Array to store IDs of products that have been viewed
let viewedProductIds = [];

// Function to check if a product is visible in the viewport
function isInViewport(product) {
  // Get product's position relative to the viewport
  const positionInfo = product.getBoundingClientRect();

  // Check if product is in viewport
  return (
    positionInfo.top >= 0 && // Top edge is inside viewport
    positionInfo.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) // Bottom edge is inside viewport
  );
}

// Event listener for 'scroll' event on the window
window.addEventListener("scroll", function () {
  // Get all product items on the page
  let productItems = document.querySelectorAll("[data-gtmproduct]");

  // Loop over each product item
  productItems.forEach((product) => {
    // If the product is in the viewport and hasn't been viewed yet
    if (isInViewport(product)) {
      // Parse product data from 'data-gtmproduct' attribute
      let productData = JSON.parse(product.getAttribute("data-gtmproduct"));

      // If this product's ID is not in the viewedProductIds array
      if (!viewedProductIds.includes(productData.id)) {
        // Log product name and price
        console.log(`${productData.name}, ${productData.discountPrice}`);

        // Add product's ID to viewedProductIds array
        viewedProductIds.push(productData.id);
      }
    }
  });
});
