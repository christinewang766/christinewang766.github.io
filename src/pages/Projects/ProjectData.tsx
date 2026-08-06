import postThat from './media/postit.png';
import portfolio from './media/portfolio.png';

export const ProjectData: {
  id: string;
  title: string;
  repo: string;
  languages: string;
  status: string;
  l1: string;
  l2: string;
  l3: string;
  extraMedia?: string;
  extraMediaDesc?: string;
  video?: string;
  videoText?: string;
  img?: string;
}[] = [
    {
      id: "stats-with-class",
      title: "Stats With Class!",
      repo: "gitfront.io/r/christinewang766/zH55ZjAevRfD/CPSC-310-Sections-Insight/",
      languages: "Typescript, JavaScript, HTML, CSS",
      status: "Complete",
      l1: "Wrote 150+ tests using the Mocha testing framework and Chai assertions to ensure robust and reliable functionality.",
      l2: "Engineered a robust file processing system enabling users to upload course databases in ZIP and HTML format, which are parsed, validated, and transformed into structured data models.",
      l3: "Designed and deployed interactive, customized graph visualizations, providing users with actionable insights into uploaded datasets.",
      video: "https://www.dropbox.com/scl/fi/9ezp3zm6b64w08hlmhqjg/CPSC310-Insight-UBC-Sections.mp4?rlkey=eqyqhfqw1z93wzne1it84hvhn&st=4czlqkcf&raw=1",
      videoText: "Please expand the video!",
    }, {
      id: "colour-love",
      title: "Colour Love",
      repo: "https://github.com/christinewang766/colour-love",
      languages: "Typescript, CSS, HTML",
      status: "incomplete",
      l1: "Designed a visually appealing and responsive CRUD application using Vite and React.",
      l2: "Implemented Redux to efficiently manage and centralize the application state, including user login state for enhanced authentication and personalization.",
      l3: "Successfully configured and administered MySQL database servers to facilitate a seamless login/registration system and to store palettes for future use, ensuring efficient data management and retrieval.",
      extraMedia:
        "https://www.dropbox.com/s/181wr4fbxukegff/responsiveColourLove.mp4?dl=0",
      extraMediaDesc: "[Video]",
      video: "https://www.dropbox.com/s/rslf9r4nkhfhmf2/colourLove.mp4?raw=1",
      videoText: "Please expand the video!",
    },
    {
      id: "post-that",
      title: "Post-That",
      repo: "https://github.com/stevenning203/nw-postcard",
      languages: "TypeScript, CSS, HTML",
      status: "complete",
      l1: "Developed as a team of 4 in a 24 hour hackathon, nwHacks 2023, to plan, code, and create a web app.",
      l2: "Utilized Figma to design the initial specifications, composition, and logistics for Post-That for a secure and attractive UI.",
      l3: "Assisted in implementing Next.js as a Front-End framework, Auth0 SSO to enable secure authentication, and the Google cloud suite to store and retrieve data.",
      img: postThat,
    },
    {
      id: "portfolio-website",
      title: "Portfolio Website",
      repo: "https://github.com/christinewang766/christinewang766.github.io",
      languages: "TypeScript, CSS, HTML",
      status: "complete",
      l1: "Created responsive and fuctional UI and implemented React Router DOM for easy and accessible user navigation.",
      l2: "Conceptualized and designed Front-End to be maximalist, memorable, and effective in portraying my experience.",
      l3: "Used Photoshop to enhance user experience and engagement through colourful visuals.",
      img: portfolio,
    },
    {
      id: "cutesy-cards",
      title: "Cutesy Cards",
      repo: "https://github.com/christinewang766/CuteFlashCards/",
      languages: "Java",
      status: "incomplete",
      l1: 'The idea behind the project: students tend to study more effectively when their notes "look nice"; with customizable flashcards in 3 different themes to choose from, students can work hard and focus better.',
      l2: "Developed an interactive app where users can create, view, edit, star, save, and load flashcards into a deck and practice material for memorization.",
      l3: "Utilized the Java Swing library and coded the app with model-view-controller architecture.",
      video: "https://www.dropbox.com/s/iqy43pumo6y7n4i/cuteDemo.mp4?raw=1",
    }
  ];
