const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing home") },
    { path: "/animations", view: () => console.log("Viewing animations") },
    { path: "/other", view: () => console.log("Viewing other") },
  ];

  //Test each route for potential match
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

  console.log(match.route.view());
};

document.addEventListener("DOMContentLoaded", () => {
  //prevents page reload/redirect while navigating to a page from the navbar (prevents actually following the link, navigates to the link url instead; prevents making a new HTTP request?)
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
