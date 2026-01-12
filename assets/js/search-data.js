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
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-presentations",
          title: "Presentations",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-iss2025-amp-nagasaki",
        
          title: "ISS2025 &amp; Nagasaki",
        
        description: "Attending the 38th International Symposium on Superconductivity, December 2025, Nagasaki, Japan",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/nagasaki/";
          
        },
      },{id: "post-python-figures-for-non-technical-presentations",
        
          title: "Python Figures for Non-technical Presentations",
        
        description: "How to use Python and Matplotlib to create high-quality but accessible figures for non-technical audiences",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/python-figures-for-presentations/";
          
        },
      },{id: "post-modern-physics-baroque-castle",
        
          title: "Modern Physics, Baroque Castle",
        
        description: "Attending the COST Action CA21144 SuperQumap Conference 2025 in Liblice, Czechia",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/chateau-liblice/";
          
        },
      },{id: "post-ten-days-in-japan",
        
          title: "Ten Days in Japan",
        
        description: "Attending the IBS2app 2025 conference in Miyazaki, Japan",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ten-days-in-japan/";
          
        },
      },{id: "post-2024-in-review-and-outlook-for-2025",
        
          title: "2024 In Review and Outlook for 2025",
        
        description: "A recap of 2024, and thoughts for the year ahead.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/outlook-for-2025/";
          
        },
      },{id: "post-python-for-publication-quality-figures-part-1",
        
          title: "Python for Publication Quality Figures - Part 1",
        
        description: "How to use Python, Matplotlib and SciencePlots to create high-quality scientific figures",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/python-for-publication-quality-figures/";
          
        },
      },{id: "news-our-new-preprint-magnetically-controlled-vortex-dynamics-in-a-ferromagnetic-superconductor-is-available-on-the-arxiv",
          title: 'Our new preprint “Magnetically-controlled Vortex Dynamics in a Ferromagnetic Superconductor” is available on...',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-at-ibs2app-2025-in-miyazaki-japan-in-february-2025",
          title: 'I will be presenting at IBS2app 2025 in Miyazaki, Japan in February 2025....',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-at-superconducting-nanodevices-and-quantum-materials-for-coherent-manipulation-topological-states-in-superconductors-and-magnetic-materials-held-at-liblice-chateau-czechia-in-may-2025",
          title: 'I will be presenting at Superconducting Nanodevices and Quantum Materials for Coherent Manipulation:...',
          description: "",
          section: "News",},{id: "news-i-am-very-happy-that-our-paper-magnetically-controlled-vortex-dynamics-in-a-ferromagnetic-superconductor-has-been-published-in-communications-materials",
          title: '🥳 I am very happy that our paper “Magnetically controlled vortex dynamics in...',
          description: "",
          section: "News",},{id: "news-our-new-preprint-breakdown-of-the-critical-state-in-the-ferromagnetic-superconductor-eufe-2-as-1-x-p-x-2-is-available-on-the-arxiv",
          title: 'Our new preprint “Breakdown of the critical state in the ferromagnetic superconductor EuFe\(_2\)(As\(_{1-x}\)P\(_x\))\(_2\)”...',
          description: "",
          section: "News",},{id: "news-i-am-on-my-way-to-nagasaki-where-i-will-be-attending-the-38th-international-symposium-on-superconductivity-iss2025-i-am-very-happy-to-have-been-invited-and-i-will-be-presenting-our-latest-work-on-eufe-2-as-1-x-p-x-2-pc5-03-inv",
          title: 'I am on my way to Nagasaki where I will be attending the...',
          description: "",
          section: "News",},{id: "news-i-am-very-happy-that-our-paper-breakdown-of-the-critical-state-in-the-ferromagnetic-superconductor-eufe2-as1-xpx-2-has-been-published-in-superconductor-science-and-technology-what-a-great-way-to-see-out-2025",
          title: '🥳 I am very happy that our paper “Breakdown of the critical state...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%77%37%33@%62%61%74%68.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/joeawilcox", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9336-3051", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=FWhEcocAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
