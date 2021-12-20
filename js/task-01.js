const allItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${allItems.length}`);

const title = document.getElementById("categories");
allItems.forEach((item) => {
  console.log(
    `Категория : ${item.firstElementChild.textContent}` +
      "\n" +
      `Количество элементов : ${item.querySelectorAll("li").length}`
  );
});
