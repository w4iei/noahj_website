// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Experience, education, publications, and technical focus.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications and works in progress.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-concerts",
          title: "Concerts",
          description: "Concerts and initiatives that I have organized and produced, including artistic planning and production.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/productions/";
          },
        },];
