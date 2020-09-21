const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const portfolio = document.querySelector(".gallery");
console.log(portfolio);

for (let image of images)
  document
    .querySelector(".gallery")
    .insertAdjacentHTML(
      "afterbegin",
      `<li><img src="${image.url}" alt="${image.alt}" width = 340 ></li>`
    );

// const portfolioList = document.createElement("li");
// portfolioList.classList.add("gallery_list");
// console.log(portfolioList);

// const fullPortfolio = images.map((image) => {
//   const portfolioImages = document.createElement("img");
//   portfolioImages.classList.add("gallery_images");
//   portfolioImages.width = 340;
//   portfolioImages.src = image.url;

//   return portfolioImages;
// });

// console.log(fullPortfolio);
// portfolioList.appendChild(fullPortfolio[1]);
// portfolio.append(portfolioList);
