const iconContainer = document.getElementById("icon-container");
const header = document.querySelector("header");
const detailsContainer = document.getElementById("details-container");
const popupContent = document.querySelector(".popup-content");
const detailsHtml = document.querySelector(".details-html");
const closeButton = document.getElementById("close-button");
const logos = document.querySelectorAll(".corporate-button");
const pageBody = document.querySelector("body");
// let isPopUp = false;

const detailsData = {
  "hamrahe-aval-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7220406546650853376?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی اختصاصی برای آنبوردینگ</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7157719827048992768?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی اختصاصی: شهاب‌سنگ</h2>`,
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
  "digiexpress-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7195365293085327360?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>رویداد نوروزی</h2>`,
  },
  "riseco-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7209172738261798912?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد SAP</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7126885410219175936?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی خلاقیت گروهی</h2>`,
  },
  "royan-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7197891900861759488?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی بازخورد موثر</h2>`,
  },
  "digikala-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7149394306301063168?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی اختصاصی برای ارزیابی منابع انسانی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7152965242795278336?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر منابع انسانی از بازی ارزیابی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7132293429878751232?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی برای غرفه در نمایشگاه کار</h2>`,
  },
  "snappfood-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7198279290109444097?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>گزارش رویداد روز جهانی PMO</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7200775715317764097?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر ارشد پروژه از روز جهانی PMO</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7173272758645051393?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد مدیر مرکز تعالی منابع انسانی از رویداد تیم‌سازی</h2>`,
  },
  "golrang-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7104443339537567744?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی دو روزه خلاقیت گروهی و ارتباط موثر</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7144281286306705408?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>بازخورد کارشناس منابع انسانی از کارگاه-بازی خلاقیت گروهی و ارتباط موثر</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7113854591112228864?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌سازی</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7137410889611190272?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌سازی</h2>`,
  },
  "esfehan-petroshimi-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7211674333964812288?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>کارگاه-بازی دوروزه خلاقیت و بازخورد موثر</h2>`,
  },
  "snapptrip-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7157424575885033472?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>طراحی بازی کارتی اختصاصی برای جشن یلدا</h2>`,
  },
  "cobel-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7172871797405659136?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>رویداد تیم‌سازی آخر سال در کیش</h2>
<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7140356077941952512?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
<h2>کارگاه-بازی تعامل و بازخورد موثر</h2>`,
  },
  "mapna-button": {
    detail: `<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7170054575620616192?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>کارگاه-بازی ورود به بازار کار، روز دوم</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7168226915726659585?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>کارگاه-بازی ورود به بازار کار، روز اول</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7142539060560007168?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>کارگاه-بازی خلاقیت گروهی</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7109447645030412288?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>رویداد تیک‌آف</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7109871729476284416?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>بازخورد مدیر آموزش و سرمایه‌انسانی گروه مپنا از رویداد تیک‌آف</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7201115972491968512?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>رویداد خانواده</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7210993415516270592?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>بازخورد مدیر آموزش و سرمایه‌انسانی گروه مپنا از رویداد خانواده</h2>

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7170719353544265731?compact=1" height="399" width="710" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<h2>بازخورد شرکت‌کنندگان جوان مپنایی از مجموعه کارگاه-بازی‌ها</h2>`,
  },
};

logos.forEach((logo) => {
  logo.addEventListener("click", () => {
    isPopUp = true;
    let logoId = logo.id;
    let details = detailsData[logoId]["detail"];
    detailsHtml.innerHTML = details;
    detailsContainer.style.visibility = "visible";
    detailsContainer.style.opacity = "1";
    iconContainer.style.filter = "blur(5px)";
    header.style.filter = "blur(5px)";
  });
});

closeButton.addEventListener("click", function () {
  detailsHtml.innerHTML = "";
  detailsContainer.style.visibility = "hidden";
  detailsContainer.style.opacity = "0";
  iconContainer.style.filter = "blur(0px)";
  header.style.filter = "blur(0px)";
  // isPopUp = false;
});

detailsContainer.addEventListener("click", function (event) {
  if (event.target !== popupContent && !popupContent.contains(event.target)) {
    detailsHtml.innerHTML = "";
    detailsContainer.style.visibility = "hidden";
    detailsContainer.style.opacity = "0";
    iconContainer.style.filter = "blur(0px)";
    header.style.filter = "blur(0px)";
  }
});
