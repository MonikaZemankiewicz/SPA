import Home from "./views/Home.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    //{ path: "/animations", view: () => console.log("Viewing animations") },
    //{ path: "/other", view: () => console.log("Viewing other") },
  ];

  //Test each route for a potential match
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  //new instance of the view at the match route
  const view = new match.route.view();

  //inject the HTML from the getHtml method into the inner HTML of the app element (element with id="app")
  document.querySelector("#app").innerHTML = await view.getHtml();

  //console.log(match.route.view());
};

//re-run the routes during history navigation
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  //prevents page reload/redirect while navigating to a page (view) from the navbar (prevents actually following the link, navigates to the link url instead; prevents making a new HTTP request?)
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
