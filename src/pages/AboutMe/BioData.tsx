import short from "./images/short.png";
import medium from "./images/medium.png";
import long from "./images/long.png";

export const BioData: { title: string; bio: string; src: string }[] = [
  {
    title: "short",
    bio: `In 2017 I customized my Tumblr with HTML, which sparked a passion for programming. And now, I am a UBC CPSC new grad navigating a rapidly changing industry. I am dedicated to responsibly building a future where technology, people, and the environment collaborate...one compiler error at a time.`,
    src: `url(${short})`,
  },
  {
    title: "medium",
    bio: `Born in New Zealand and raised in a British Columbia fishing village, I thought my future lay in medicine or agriculture. Then came my 2017 Tumblr phase. Disliking clean preset templates, I discovered HTML and CSS. Changing my blog's background color sparked a broader passion for programming, leading to my first print("Hello, World!") before university. After four years studying Computer Science at UBC and 1.5 years interning at Workday and Samsung, I can proudly tell my teenage self we almost made it.
    
    As a new grad, the learning opportunities in AI and quantum computing are endless. Handled responsibly, communally, and with whimsy, technology can build a better future. I am dedicated to collaborating with technology, people, and the environment...one compiler error at a time.`,
    src: `url(${medium})`,
  },
  {
    title: "long",
    bio: `Born in New Zealand and raised in a fishing village in BBC (beautiful British Columbia), you could say I was born to navigate currents and hook new opportunities. Growing up, tech was rarely discussed, let alone taught, at my high school. I was certain my future lay in medicine, if not agriculture.

    Then came 2017 and my Tumblr phase. Aesthetic blogs and self-expression were all the trend, but as a lifelong maximalist, clean preset templates weren't my style. Enter: HTML and CSS. I never knew so much power could reside in a few lines of code. Overnight, my blog went from a #36465D blue to... well, a #8ba888 green, because greatness takes time. That line of code snowballed into a broader passion for programming, leading me to write my first print("Hello, World!") the summer before university.

    After four years studying Computer Science at the University of British Columbia and 1.5 years interning as a developer at companies like Workday and Samsung, I can proudly tell my teenage self we made it—almost.

    As a new grad, I've barely dipped my toes into the industry. With rapid advancements in agentic AI and quantum computing, the learning opportunities are endless. Despite valid anxieties about automation, these shifts hold immense potential if spearheaded ethically. Navigating change is rarely strife-free, but when handled responsibly, communally, and with a touch of whimsy, technology could build a better future. I am dedicated to creating a world where technology, people, and the environment collaborate... one compiler error at a time.`,
    src: `url(${long})`,
  },
];