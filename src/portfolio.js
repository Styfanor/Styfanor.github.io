/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Stefan Helm",
  title: "Hi all, I'm Stefan",
  subTitle: emoji(
    "I am a business informatics student at the Technical University of Vienna with a background in biomedical engineering. I have some experience in Data Science and Machine Learning as well as in Web Development."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Styfanor",
  linkedin: "https://www.linkedin.com/in/stefan-helm-07a879170/",
  gmail: "stefan.helm.99@icloud.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [  
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Technical University of Vienna",
      logo: require("./assets/images/TULogo.png"),
      subHeader: "Bachelor of Science in Business Informatics",
      duration: "March 2020 - Present",
      desc: "",
      descBullets: [
      ]
    },
    {
      schoolName: "San Diego State Universtiy",
      logo: require("./assets/images/SDSULogo.png"),
      subHeader: "Semester abroad during Bachelor",
      duration: "July 2021 - January 2022",
      desc: "In this semester I tried to focus to gain a deeper knowledge in data science and machine learning.",
      descBullets: ["BDA 594 Big Data Science and Analytics Platforms",
                    "CS 550 Artificial Intelligence",
                    "CS 549 Machine Learning",
                    "CS 440 Social, Legal and Ethical Issues in Computing"]
    },
    {
      schoolName: "Higher Federal Technical College Mistelbach",
      logo: require("./assets/images/HTLLogo.png"),
      subHeader: "Matura and Diploma Certicate",
      duration: "September 2014 - June 2019",
      desc: "Biomedical and Healthcare Engineering",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Internship at the Unit 'Real Estate & Logistics Austria'",
      company: "UniCredit Bank Austria AG",
      companylogo: require("./assets/images/bankaustria.png"),
      date: "August 2018 – September 2018",
      desc: "",
      descBullets: []
    },
    {
      role: "Internship at the Unit 'Technology'",
      company: "A1 Telecom Austria AG",
      companylogo: require("./assets/images/A1.jpeg"),
      date: "August 2016 – September 2016",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Here are some projects that I like to highlight",
  projects: [
    {
      image: require("./assets/images/mylogo.png"),
      projectName: "BinDabei!",
      projectDesc: "This was my diploma thesis during my time at the HTL Mistelbach. For more information pleas visit the links below:",
      footerLink: [
        {
          name: "Thesis",
          url: "https://drive.google.com/file/d/1Cr1PHhV7_muWhrI615GeXmHxugYtWVTI/view?usp=sharing"
        },
        {
          name: "Presentation",
          url: "https://docs.google.com/presentation/d/1mealgSyd3VHHWzXKGFHqZciB11xBFqBO/edit?usp=sharing&ouid=101304807015336607072&rtpof=true&sd=true"
        }
      ]
    },
    {
      image: require("./assets/images/Artmart.png"),
      projectName: "Artmart",
      projectDesc: "This was a project during my bachelor at TU Wien. In groups of two we needed to delop this website using Vue.js and some APIs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://styfanor.github.io/Artmart"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Smart Engineering Award 2019",
      subtitle:
        "Achieved the third place out of 350 participants with our diploma thesis 'BinDabei!'.",
      image: require("./assets/images/fhpoelten.svg"),
      footerLink: [
        {
          name: "Article",
          url: "https://www.fhstp.ac.at/de/newsroom/news/award-fuer-smarte-abschlussarbeiten"
        }
      ]
    },
    {
      title: "Sponsorship by WKNÖ",
      subtitle:
        "For our diploma thesis 'BinDabei!' we got a 52.000€ by the Wirtschaftskammer Niederösterreich",
      image: require("./assets/images/mylogo.png"),
      footerLink: [
        {
          name: "Article",
          url: "https://www.meinbezirk.at/mistelbach/c-lokales/robobuddy-eroeffnet-neue-chancen-fuer-menschen-mit-unterstuetzungsbedarf_a2654207"
        },
        {
          name: "Article",
          url: "http://wko.at/wknoe/Presse/nowi/2018/Folge_23_24/Folge_23_24/19/"
        }
      ]
    },
    {
      title: "Software Package for Social Welfare Association Mistelbach",
      subtitle: "We developed an accounting tool to automate the monthly billing system.",
      image: require("./assets/images/sozimiba.jpeg"),
      footerLink: [
        {
          name: "Article",
          url: "https://www.meinbezirk.at/mistelbach/c-lokales/htl-schueler-entwickelten-software-fuer-sozialhilfeverein_a2608403"
        },
        {
          name: "Article",
          url: "https://www.mistelbach.at/politik-buergerservice/presse/news/news-detail/artikel/htl-schueler-entwickelten-softwareprogramm-fuer-sozi/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "stefan.helm.99@icloud.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
