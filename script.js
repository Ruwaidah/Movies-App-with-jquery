$("#movie-form").on("submit", function (event) {
  event.preventDefault();
  const movie = $("#title").val();
  const rate = $("#rate").val();
  if (movie != "" || rate !="" )
  $("ul").append(
    `<li><p>${movie}</p><p>${rate}</p><button>Remove</button></li>`
  );
});

$("ul").on("click", "button", function (e) {
  $(e.target).parent().remove();
});
