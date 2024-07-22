const iconContainer = document.getElementById("icon-container");
const header = document.querySelector("header");
const detailsContainer = document.getElementById("details-container");
const detailsHtml = document.querySelector(".details-html");
const closeButton = document.getElementById("close-button");
const logos = document.querySelectorAll(".corporate-button");
const pageBody = document.querySelector("main");
// let isPopUp = false;

const detailsData = {
  "hamrahe-aval-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7220406546650853376?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی اختصاصی برای آنبوردینگ</h2>`,
  },
  "fanap-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7213469538376445952?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>گزارش کارگاه-بازی ارتباط موثر</h2>`,
  },
  "zarrino-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7219288258168451072?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از کارگاه-بازی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7217804885428203521?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از کارگاه-بازی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7215345343197048833?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>گزارش کارگاه-بازی بازخورد موثر</h2>`,
  },
  "snappfood-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7198279290109444097?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>گزارش رویداد روز جهانی PMO</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7200775715317764097?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر ارشد پروژه از روز جهانی PMO</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7173272758645051393?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر مرکز تعالی منابع انسانی از رویداد تیم‌سازی</h2>`,
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
    header.style.filter = "blur(5px)";
  });
});

closeButton.addEventListener("click", function () {
  iconContainer.style.filter = "blur(0px)";
  detailsContainer.style.visibility = "hidden";
  detailsContainer.style.filter = "opacity(0)";
  header.style.filter = "blur(0px)";
  // isPopUp = false;
});
