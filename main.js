const hamraheAval = document.getElementById("hamrahe-aval-button");
const iconContainer = document.getElementById("icon-container");
const detailsContainer = document.getElementById("details-container");
const detailsHtml = document.querySelector(".details-html");
const closeButton = document.getElementById("close-button");
const logos = document.querySelectorAll(".corporate-button");
let isPopUp = false;

const detailsData = {
  "hamrahe-aval-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7220406546650853376?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی اختصاصی برای آنبوردینگ</h2>`,
  },
  "irancell-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7220406546650853376?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>`,
  },
  "zarrino-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7219288258168451072?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از کارگاه-بازی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7217804885428203521?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از کارگاه-بازی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7215345343197048833?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>گزارش کارگاه-بازی بازخورد موثر</h2>`,
  },
};

logos.forEach((logo) => {
  logo.addEventListener("click", () => {
    isPopUp = true;
    let logoId = logo.id;
    let details = detailsData[logoId]["detail"];
    detailsHtml.innerHTML = details;
    iconContainer.style.filter = "blur(5px)";
    detailsContainer.style.visibility = "visible";
    detailsContainer.style.filter = "opacity(1)";
  });
});

closeButton.addEventListener("click", function () {
  isPopUp = false;
  iconContainer.style.filter = "blur(0px)";
  detailsContainer.style.visibility = "hidden";
  detailsContainer.style.filter = "opacity(0)";
});
