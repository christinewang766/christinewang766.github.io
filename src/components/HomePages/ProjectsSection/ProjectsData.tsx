import colourlove from "./images/colourlove.gif";
import colourloveHover from "./images/colourlove-hover.gif";
import postthat from "./images/postthat.gif";
import postthatHover from "./images/postthat-hover.gif";
import website from "./images/website.gif";
import websiteHover from "./images/website-hover.gif";
import cutesy from "./images/cutesy.gif";
import cutesyHover from "./images/cutesy-hover.gif";

export const ProjectData: { id: string, title: string, details: string, gif: string, hoverGif: string }[] = [
  {
    id: "colour-love",
    title: "Colour Love",
    details:
      "A modern palette generator for every artist's needs. Login and register, run from dogs and be creative. Your palettes will always be there when you come back.",
    gif: `url(${colourlove})`,
    hoverGif: `url(${colourloveHover})`
  },
  {
    id: "post-that",
    title: "Post-That",
    details:
      "A rustic website where you can create, personalize, and send heartfelt postcards. View the messages you receive, and keep a time capsule of memories.",
    gif: `url(${postthat})`,
    hoverGif: `url(${postthatHover})`
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    details:
      "A website to experiment with design and represent who I am as a (prospective) computer scientist. Serves as a visual resume.",
    gif: `url(${website})`,
    hoverGif: `url(${websiteHover})`
  },
  {
    id: "cutesy-cards",
    title: "Cutesy Cards",
    details:
      "A Java-based flashcard application to help students study. The user can create, save, and edit card decks as well as study in a cute UI.",
    gif: `url(${cutesy})`,
    hoverGif: `url(${cutesyHover})`
  }
];

export default ProjectData;