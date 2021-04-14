$(".search_card-front").click((event) =>
  rotateCard(event.currentTarget.offsetParent)
);
$(".search_card-btnClose").click((event) =>
  rotateCard(event.target.offsetParent.offsetParent)
);

function rotateCard(element) {
  $(element).toggleClass("search_show-back");
}

$(".search_cardVertical-front").click((event) =>
  rotateCardVertical(event.currentTarget.offsetParent)
);
$(".search_cardVertical-btnClose").click((event) =>
  rotateCardVertical(event.target.offsetParent.offsetParent)
);

function rotateCardVertical(element) {
  $(element).toggleClass("search_showVertical-back");
}

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  $("#search_filter-alphabet").append(
    `<a href="?letter=${String.fromCharCode(i)}">${String.fromCharCode(
      i
    ).toUpperCase()}</a>`
  );
}
