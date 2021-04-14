// ====================================
// search_filter
// ====================================
const OPTIONS_ITEMS = document.getElementsByClassName("search_options-item");
const OPTIONS_BTN = document.getElementsByClassName("search_option-btn");
const FILTER_CLEAR = document.getElementById("searchFilter_clearBtn");

FILTER_CLEAR.addEventListener("click", () => {
  Array.prototype.map.call(OPTIONS_BTN, clear);
});

Array.prototype.map.call(OPTIONS_ITEMS, (item) => {
  item.addEventListener("click", searchOptions_selectOption);
});

Array.prototype.map.call(OPTIONS_BTN, (btn) => {
  btn.addEventListener("focus", ({ target: { nextElementSibling } }) => {
    searchOptions_classManager(nextElementSibling);
  });
  btn.addEventListener("blur", ({ target: { nextElementSibling } }) => {
    setTimeout(() => {
      searchOptions_classManager(nextElementSibling, "close");
    }, 100);
  });
});

function searchOptions_selectOption({ target }) {
  let text = target.innerText;
  let [input, span, button, list] = target.parentElement.parentElement.children;
  input.value = text;
  button.innerText = text;
  searchOptions_classManager(list, "close");
}

function searchOptions_classManager(list, type) {
  let class_show = "show_list";
  if (type === "close") {
    list.classList.remove(class_show);
  } else {
    list.classList.add(class_show);
  }
}

function clear(btn) {
  let [input, span, button] = btn.parentElement.children;
  input.value = "all";
  button.innerText = span.innerText;
}

// ====================================
// Cards horizontal
// ====================================
$(".search_card-front").click((event) =>
  rotateCard(event.currentTarget.offsetParent)
);
$(".search_card-btnClose").click((event) =>
  rotateCard(event.target.offsetParent.offsetParent)
);

function rotateCard(element) {
  $(element).toggleClass("search_show-back");
}

// ====================================
// Cards vertical
// ====================================
$(".search_cardVertical-front").click((event) =>
  rotateCardVertical(event.currentTarget.offsetParent)
);
$(".search_cardVertical-btnClose").click((event) =>
  rotateCardVertical(event.target.offsetParent.offsetParent)
);

function rotateCardVertical(element) {
  $(element).toggleClass("search_showVertical-back");
}
