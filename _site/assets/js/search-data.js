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
          description: "Electrical Engineer: RF test, validation, and embedded hardware.",
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
        },{id: "nav-projects",
          title: "Projects",
          description: "Hardware, software, and research I have built, with the code, papers, and demos where they are public.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "For research, engineering, and concert enquiries.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "projects-brick-breaker-stable-audio",
          title: 'Brick Breaker × Stable Audio',
          description: "A DJ&#39;s track, reshaped into a new mood with every hit, on the beat. Built at the ADE 2026 hackathon.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/brickbreak/";
            },},{id: "projects-early-music-concerts",
          title: 'Early Music Concerts',
          description: "Thousands of early music concerts in churches and halls in more than 40 countries, in one guide.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/early-music-concerts/";
            },},{id: "projects-computer-audition-hearing-organ-pipes-like-an-expert",
          title: 'Computer audition: hearing organ pipes like an expert',
          description: "A listening dashboard that tests which audio models hear organ pipes the way an expert does.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/marcussen/";
            },},{id: "projects-photon-micro",
          title: 'PHOTON Micro',
          description: "A deep-learning model, small enough for a microcontroller, that hears which keyboard instrument is playing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/photon-micro/";
            },},{id: "projects-photon",
          title: 'PHOTON',
          description: "Optical key-lever tracking for historical keyboard instruments. Peer-reviewed at NIME 2026; hardware and firmware are open source.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/photon/";
            },},];
