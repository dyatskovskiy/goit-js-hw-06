const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

//=======================================

categories.forEach((category) => {
  const categoryName = category.firstElementChild;
  console.log(`Category: ${categoryName.textContent}`);

  const categoryListOfItems = category.lastElementChild.children;
  console.log(`Elements: ${categoryListOfItems.length}`);
});
