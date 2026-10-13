function onPageReady() {
  console.log(`🚀 ~  HTML is ready`);
  // load nav Component
  $("#nav-container").load("app/components/nav.html");

  // load home Component;
  $("#main-container").load("app/components/home.html");
}

// function handleProfileClick(event)  {
//   $('#main-container').load('app/components/profile.html');
// }

$(onPageReady);

// var element2 = $('#nav-container');
// console.log(element2)

// // #navbarSupportedContent > ul > li:nth-child(1) > a
// var element = $('#navbarSupportedContent > ul > li:nth-child(1) > a');
// console.log(element);
// element.addEventListener('click',handleProfileClick);

$(document).on("click", ".nav-link", function (e) {
  e.preventDefault();

  $(".nav-link").removeClass("active");
  $(e.target).addClass("active");

  const page = $(e.target).attr("href").substring(1);

  $("#main-container").load(`app/components/${page}.html`);
});
