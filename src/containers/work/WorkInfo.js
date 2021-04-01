/*
{
  id: unique id used to prefix ids in the html,
  type: type of work,
  image: {
    src: src path (relative to public folder),
    alt: alternative description when image isn't found
  },
  title: title in work row,
  subtitle: short description of the project/activity,
  timeline: when project/activity was completed,
  links: (optional) [
  // first link will go to the most right
    {
      type: "other" | "modal". other refers to link, modal refers to ModalCarousel,
      label: label for button. ex: "code" | "demo" | "pics" | "gifs",
      href: (only for other type) link to open
    },
    ...
  ],
  description: either `` or [] of description of project/activity description. ([] is for when you have to render jsx such as links),
  expandedDescription: (optional) for when description has multiple paragraphs, expandedDescription will be shown when user expands the row.
    must be array [], where each item is `` or [] like description. each item is rendered in a <p> tag,
  modalTitle: (optional) title of modal,
  modalCarouselItems: (optional) [
    {
      src: src path,
      alt: alternative description when image isn't found
    },
    ...
  ]
}
*/

export const FilterType = {
  ALL: "All",
  JOB: "Work Experience",
  PROJECT: "Projects"
};

export const WORK_INFO = [
  {
    id: "tesla-intern",
    type: FilterType.JOB,
    image: {
      src: "images/tesla/tesla-logo.png",
      alt: "tesla logo"
    },
    title: "Tesla Mobile Engineer Internship",
    subtitle: "Vehicle Software Team",
    timeline: "Sep 2020 - Mar 2021",
    description: `I decided to take the Fall quarter of my senior year off, as I wanted a more hands-on experience working on a different type of product/company. 
    I was lucky enough to have the opportunity to work on the mobile team at Tesla (another fully remote internship). Although I have worked on mobile before, 
    it was my first time working with Swift and React Native. This internship was definitely different than my previous ones at Facebook—while the Facebook 
    internships are more project-structured (you are given a project + timeline, and milestones to hit throughout), this internship was more task-based. Thus, I 
    got to work on various different areas/features of the app :) In addition, my team had a check-in meeting every morning, so we could talk about what we were 
    working on and any issues we were facing. I really enjoyed these meetings because I could give others visibility into what I was doing, as well as learn about what 
    other members of the team were working on. Another aspect that stood out to me about this internship was the fact that I was working on a user-facing product 
    (in my other internships I worked on internal/debugging tools). I was able to work cross-functionally with other members of the design and QA team. Overall, 
    I found this internship super enjoyable, so much so that I extended my internship and worked part-time while in school until March. I’m very grateful for my experience at Tesla!`,
  },
  {
    id: "fb-2020",
    image: {
      src: "images/facebook-2020/facebook-logo.png",
      alt: "facebook logo"
    },
    title: "Facebook Software Engineer Internship",
    subtitle: "FB App Metrics Team",
    timeline: "Jun - Sep 2020",
    description: `Back at it once again! For summer 2020, I interned on the FB App Metrics Team, which builds metrics frameworks that increase confidence 
    in the accuracy of metrics on the FB platform. During my internship, I built a feature for an internal debugging tool that allows engineers to understand 
    why ad conversions are not generated. I got to do a mixture of both backend (Hack/PHP) and frontend (JavaScript/React). I had never used PHP or React before, 
    so it was fun to be able to learn while doing. It was also interesting that it was my first fully-remote internship due to the pandemic, so I never met my team 
    in person. Despite the distance, I still felt fully supported by my manager and learned a lot!`,
  },
  {
    id: "fablix",
    type: FilterType.PROJECT,
    image: {
      src: "images/fablix/main_page.png",
      alt: "fablix"
    },
    title: "Fablix",
    subtitle: "Course Project",
    timeline: "Apr - Jun 2020",
    links: [
      {
        type: "modal",
        label: "demo",
      },
    ],
    description: `Although I have done web development in the past (see Planeater and ZotTrending), I thought it would be fun to take a project class on web applications.
              In this class, my groupmate and I worked on Fablix, which is a web application where users can search for movies by title/year/director/actor,
              browse movies by name or genres, and finally buy movies. We also implemented a dashboard so that the application owners can insert new actors and movies
              to the database.`,
    expandedDescription: [[`Working on Fablix throughout the quarter helped me learn so much about web application development, so I enjoyed it a lot!
    It helped me solidify concepts on RESTful API and microservice architecture, practice my HTML, CSS, and JavaScript/jQuery skills, as well as learn
    a lot about MySQL procedures and database optimizations. Overall, it was a great class and interesting project that made me appreciate all the
    work that goes into creating a full-stack web application. If you would like to see demos of Fablix that we submitted for class,
    see `, buildLinkTag("here", "https://www.youtube.com/watch?v=7Ki3OIvan5c&list=PLFhL8CKLdM0uDRM3G81TJ7mSNO1m72G9P"), "."]],
    modalTitle: "Fablix",
    modalCarouselItems: [
      {
        src: "images/fablix/login_browse_action.gif",
        alt: "login and browse by action"
      },
      {
        src: "images/fablix/single_movie_star.gif",
        alt: "view results, view single movie page and single star page"
      },
      {
        src: "images/fablix/add_movie.gif",
        alt: "add movie to cart"
      },
      {
        src: "images/fablix/place_order.gif",
        alt: "place order"
      }
    ]
  },
  {
    id: "stridon",
    type: FilterType.PROJECT,
    image: {
      src: "images/stridon/mascot.png",
      alt: "logo"
    },
    title: "Stridon",
    subtitle: "Course Project",
    timeline: "Jan - Mar 2020",
    links: [{
      type: "other",
      label: "code",
      href: "https://github.com/dsopi/stridon"
    }, {
      type: "modal",
      label: "demo"
    }],
    description: [
      `During the winter quarter of my junior year of college I took a project class that was called Next Generation Search Systems. We were tasked
      with building a personalized and contextual recommendation system, which simply meant a system that would recommend items to the user based on the
      user’s context (location, weather, time, etc), and personal model (individual profile and preferences). My group and I created Stridon, an
      Android app whose goal is to provide fresh walking/running Strides to the user each day. In Stridon, a Stride is a looping path that the user
      deliberately takes with the intent to run or walk for exercise. Stridon used the user’s context (schedule, weather, location, number of steps taken that day)
      and their personal model (preferred Stride type, average distance and duration of Stride, BMI) to recommend when and where users should take a Stride.
      Read more about our app in our `, buildLinkTag("final report", "https://docs.google.com/document/d/1lShVLVTfS64baToXSxRxhOSjPlcmZbexVEv6nftPKoQ/edit?usp=sharing"),
      "."
    ],
    expandedDescription: [`It was fun to delve into Android development once again and get a chance to apply what I learned in my last internship as well as learn new things.
      For our app, I worked on using with the Google Fit API to get step count and distance information. I also implemented the ability to read and write
      from the SQLite database (which stored Stride history information) and Android SharedPreferences (which stored personal model information).
      Finally, I designed the rule-based algorithm that we used to recommend the Strides to the users. Overall, this class was really interesting because
      I had never thought deeply about personalization and context before. Building Stridon helped me realize that there are so many factors that software
      developers can incorporate that can make an app more personalized to its users.`],
    modalTitle: "Stridon",
    modalCarouselItems: [{
      src: "images/stridon/ppt_signin.gif",
      alt: "sign in"
    }, {
      src: "images/stridon/ppt_settings.gif",
      alt: "settings"
    }, {
      src: "images/stridon/ppt_home.gif",
      alt: "home screen"
    }, {
      src: "images/stridon/ppt_stride.jpg",
      alt: "stride screen"
    }, {
      src: "images/stridon/ppt_stride_result.jpg",
      alt: "stride screen result"
    }]
  },
  {
    id: "WAdebuggingPayments",
    type: FilterType.JOB,
    image: {
      src: "images/whatsapp/WhatsApplogo.png",
      alt: "whatsapp"
    },
    title: "Facebook Software Engineer Internship",
    subtitle: "WhatsApp Android Payments Team",
    timeline: "Jun - Sept 2019",
    links: [
      {
        type: "modal",
        label: "pics",
      },
    ],
    description: `I once again interned at Facebook during summer 2019, this time as a Software Engineer Intern on the WhatsApp Payments Android team.
    I was excited to get this opportunity as it was my first time working on a project that had a direct impact on the company.
    In essence, my project was a feature in the debug WhatsApp builds that allows internal clients (product designers and other engineers)
    to more easily debug payments in different countries by allowing them to debug solely on one device.`,
    expandedDescription: [`Through working on this project, I learned more about app development in Android Studio, as well as how to work with Git. At first, it was a bit overwhelming because I had
    never worked in a big codebase before, but throughout the summer I was able to get the hang of reading and understanding other people’s code.
    I also got to experience what it was like to be a software engineer by interacting with other engineers and sitting in on team meetings.
    One thing that made my summer really enjoyable was the people—everyone I talked to was always willing to help me grow.
    I’m grateful to my manager and my team members for giving me a supportive environment for me to learn in, and I’m thankful that
    I had this opportunity to intern at Facebook!`],
    modalTitle: "WhatsApp Android Payments Internship",
    modalCarouselItems: [{
      src: "images/whatsapp/fb.jpg",
      alt: "picture at FB"
    }
    ]
  },
  {
    id: "appjam",
    type: FilterType.JOB,
    image: {
      src: "images/appjam/appjamlogo.png",
      alt: "appjam"
    },
    title: "AppJam+ Program Mentor",
    subtitle: "Dreams for Schools",
    timeline: "Mar - Jun 2019",
    links: [
      {
        type: "modal",
        label: "pics"
      },
    ],
    description: [`In the spring quarter of my sophomore year, I got a job as a mentor in a program called AppJam+, run by `, buildLinkTag("Dreams For Schools", "https://www.dreamsforschools.org/"), `. The goal of AppJam+ is promote STEM to middle school students by introducing coding concepts and
    app development to them. I got to work with a team of 4 students and help them create a mobile video game in `, buildLinkTag("Thunkable", "https://thunkable.com"), `. I wanted to take part in this program because I personally know the impact of programs like these
    (from my experience in Technovation) and I wanted to get the chance to give back. Overall, I had a great time working with the kids!`],
    modalTitle: "AppJam+",
    modalCarouselItems: [
      {
        src: "images/appjam/appjam.jpg",
        alt: "appjam"
      },
    ]
  },
  {
    id: "planeater",
    type: FilterType.PROJECT,
    image: {
      src: "images/planeater/planeater.png",
      alt: "planeater"
    },
    title: "Planeater",
    subtitle: "Personal Project",
    timeline: "Dec 2018 - Apr 2019",
    links: [
      {
        type: "other",
        label: "code",
        href: "https://github.com/jessicashu7/planeater"
      },
    ],
    description: `As part of the projects committee for ICS Student Council, my friend and I decided to make a web app that would allow
    students to make and save four year plans for their UCI courses. I came up with this idea because I myself had a personal
    spreadsheet with my four year plan. I thought it would be cool for there to be a web app that would be UCI specific and
    is easier to use than a spreadsheet. I also just wanted to learn more about web development and explore it by building a web app.`,
    expandedDescription: [[`As with many side projects, we started by looking up tutorials and documentation online to learn about web development
    with Flask. One struggle we had was deciding what type of database (SQL vs NoSQL). At first we implemented it with a
    MySQL database, but later found out about Google Firestore and switched to that because it seemed easier to integrate into Flask.
    In the end we were able to complete our MVP, which allows students to make a four-year plan that is connected to their Google account.
    One feature I worked on that made it UCI-specific was that each input field could autocomplete with a UCI course as
    the user is typing. I also wrote the `, buildLinkTag("Python script", "https://github.com/jessicashu7/uci-course-scrape"), ` using Beautiful Soup to scrape the courses from the UCI catalogue and
    store them into our database. Lastly, I also worked on implementing the interface for storing and retrieving user plans. Overall,
    it was a great experience to learn about Flask and the different aspects of web development!`]],
  },
  {
    id: "zottrending",
    type: FilterType.PROJECT,
    image: {
      src: "images/zothacks 2018/zothacks.png",
      alt: "zothacks"
    },
    title: "ZotTrending",
    subtitle: "ZotHacks Submission",
    timeline: "Nov 2018",
    links: [
      {
        type: "other",
        label: "code",
        href: "https://github.com/anthopark/ZotTrending"
      },
    ],
    description: `During fall quarter of my sophomore year of college, I attended my first hackathon, ZotHacks. It was a one-day hackathon geared
    towards beginners, which encouraged me because I had never been to a hackathon before. At ZotHacks I attended several workshops including
    one that taught how to create a web app with Flask, and another that taught me how to deploy the app on Google App Engine. These workshops
    were very helpful in my team's project, ZotTrending, which ended up to be a website that displayed the top topics from several social media 
    sites, including Reddit, Twitter, and Youtube.`,
    expandedDescription: [`The experience taught me a lot about how to connect frontend and backend to create a web application, using Flask. It was also cool
    to see our app deployed and accessible to the public! I mainly worked on retrieving information from Twitter and
    Reddit API, and displaying it in HTML using Jinja and Bootstrap. Overall, I had a good time
    collaborating with other UCI students, and I learned a lot about web applications!`]
  },
  {
    id: "eatin",
    type: FilterType.JOB,
    image: {
      src: "images/eatin/eatin.png",
      alt: "eatin logo"
    },
    title: "Eatin",
    subtitle: "Facebook University - Engineer Internship",
    timeline: "June - Aug 2018",
    links: [
      {
        type: "other",
        label: "code",
        href: "https://github.com/jessjessandtre/Feast-fbu"
      },
      {
        type: "modal",
        label: "pics",
      },
    ],
    description: `The summer after my freshman year of college, I got to take part of the Facebook University for Engineering program at Facebook.
    After 3 weeks of training of iOS app development in Objective-C, my team (total 3 interns) and I worked together to build our app, Eatin.
    In short, Eatin is an app that encourages people to cook meals at home by making home-cooking social. Users can find/search for recipes,
    post a photo of their cooking, and keep up with what others are cooking through a following system. Other features include saving recipes,
    a tagging system for recipes, as well as liking/commenting on posts.`,
    expandedDescription: [`My internship started out with a fast-paced course taught by Codepath, which consisted of of many labs and projects,
    including creating our own versions of Twitter (using Twitter API)  and Instagram (used Parse for backend).
    I hadn’t had experience in iOS before this internship, but thanks to the first 3 weeks of training, I felt confident that my team and
    I would be able to put out an app within 5 weeks. I first worked on implementing the API call to store recipes in our MongoDB database,
    which allowed us not to worry about having to constantly interact with our API. Other features I worked on include a swipe-to-save recipe feature,
    a tagging system for recipes, and state persistency across multiple screens. One key takeaway from this project was learning how to design
    the system—my team and I thought a lot about how to design our classes (such as Recipe, Post, Tag, Saved, to name a few),
    and what the relationship between them would be like (we had one-to-many and many-to-many relationships implemented).
    In the end, we were happy to have been able to finish the app that we planned out in the start.`, `Aside from improving my technical skills, 
    I learned a lot about what it’s like to be at a top tech company! It was awesome to be able to be surrounded by highly-motivated people who are passionate 
    about the work they do. Through constantly collaborating with my team, going to weekly team meetings and one-on-ones with my manager,
    I got first hand experience in working in a professional environment. I also attended weekly talks and Q&As from top executives and other
    workers within the company, which taught me about the different technical roles that are in software development.
    Finally, I really enjoyed going to Mark’s weekly Q&As, attending the company all-hands, and reading internal company posts on Workplace,
    where I got to learn about the vision of the company and where it planned on going with its products.`],
    modalTitle: "Eatin",
    modalCarouselItems: [
      {
        src: "images/eatin/fb-sign.jpg",
        alt: "fb sign"
      },
    ]
  },
  {
    id: "othello",
    type: FilterType.PROJECT,
    image: {
      src: "images/othello/othello.PNG",
      alt: "othello"
    },
    title: "Othello",
    subtitle: "Class Project",
    timeline: "Nov - Dec 2017",
    links: [
      {
        type: "modal",
        label: "gifs",
      },
    ],
    description: `I made Othello (also called Reversi) as the final project of my first programming class in college, taught in Python.
    In the game, there are two players with either white or black pieces. At each turn, a player can use one piece to jump over a line of one
    or more of the other player’s pieces, which “reverses” them to be the original player’s color.
    The goal of the game is to end up with the most of one’s color pieces on the board when there are no more moves available.
    My version of the game allowed the user to first choose the size of the board, the starting arrangement of the pieces, what “wintype” determines who wins
    (most pieces or least pieces at the end), and which player would go first.`,
    expandedDescription: [`Before starting this project, my professor gave us an overview of how to use the tkinter library,
    as well as how to properly implement the model-view-controller structure in a program, which helped me a lot throughout the entire process of making the game.
    All in all, I had a lot of fun with this project as I got to build a game that I find pretty entertaining and have a working version of it to play.`],
    modalTitle: "Othello",
    modalCarouselItems: [
      {
        src: "images/othello/othello1.gif",
        alt: "First slide"
      },
      {
        src: "images/othello/othello2.gif",
        alt: "Second slide"
      },
      {
        src: "images/othello/othello3.gif",
        alt: "Third slide"
      }
    ]
  },
  {
    id: "amity",
    type: FilterType.PROJECT,
    image: {
      src: "images/amity/amity.png",
      alt: "amity logo"
    },
    title: "Amity",
    subtitle: "Technovation",
    timeline: "Jan - Apr 2017",
    links: [
      {
        type: "other",
        label: "code",
        href: "https://github.com/superCodeTeam/Amity"
      },
      {
        type: "modal",
        label: "gifs",
      },
    ],
    description: `I decided to enter in Technovation once again in my senior year of high school—this time learning about Android app development in Android Studio.
    My team and I built Amity, a social media app whose mission is to promote cultural awareness by providing a platform for individuals to share
    their cultural experiences. Amity was born out of the idea that the divisiveness and misunderstanding in the world could be improved by
    constructing community based on cultural understanding and inclusivity. Users from across the world can post about their own culture as well as
    read about others to gain a deeper understanding of our diversity. One feature of the app is a world globe, in which users can click anywhere on the map
    and view posts about the culture of that country.`,
    expandedDescription: [`This experience presented quite a challenge for me and my teammates, as none of us had worked with Android Studio before,
    and had only basic Java knowledge. Aside from meeting weekly to discuss our ideas about our app,
    we spent several weeks learning about Android app development by using online resources such as courses and videos on Youtube (super helpful!).
    Even throughout the building process of the app, we were still watching videos to help us build the features we needed. For example,
    I learned from videos online how to use PHP and SQL to interact with our mySQL database, which was essential to our app.
    Overall, I am very glad I had this experience, as it taught me to how to solve problems independently as well as know how to find the right
    resources to push me forward. To top it off, my team was awarded 2017 Senior Division Semifinalist!`],
    modalTitle: "Amity",
    modalCarouselItems: [
      {
        src: "images/amity/amity1.gif",
        alt: "First slide"
      },
      {
        src: "images/amity/amity2.gif",
        alt: "Second slide"
      },
      {
        src: "images/amity/amity3.gif",
        alt: "Third slide"
      },
    ]
  },
  {
    id: "hp",
    type: FilterType.PROJECT,
    image: {
      src: "images/cosmos/hp.PNG",
      alt: "harry potter video game"
    },
    title: "Harry Potter Video Game",
    subtitle: "COSMOS Summer Camp Group Project",
    timeline: "Aug 2016",
    links: [
      {
        type: "other",
        label: "code",
        href: "https://github.com/synicalsyntax/DieForMe"
      },
      {
        type: "modal",
        label: "gifs",
      },
    ],
    description: `In the summer before my senior year of high school, I went to COSMOS to learn about video game development (we used Javascript in Unity).
      At the end, we worked in groups to create video games of our own. As a Potterhead, I half jokingly suggested a Harry Potter themed video game,
      and my group agreed to it. Our game ended up to be a 2D platform game in which the user acts as the villain in a quest to get 7 Horcruxes.
      In the villain’s way are obstacles such as dementors and Aurors, as well as bigger bosses that become Horcruxes.
      The game is complete with sound effects and Harry Potter music in the background.
      It’s riddikulusly good for any sirius Potterheads out there ;)`,
    modalTitle: "Harry Potter Video Game",
    modalCarouselItems: [
      {
        src: "images/cosmos/hptutorial.gif",
        alt: "First slide"
      },
      {
        src: "images/cosmos/hp1.gif",
        alt: "Second slide"
      },
      {
        src: "images/cosmos/hp2.gif",
        alt: "Third slide"
      },
      {
        src: "images/cosmos/hp3.gif",
        alt: "Fourth slide"
      },
      {
        src: "images/cosmos/hp4.gif",
        alt: "Fifth slide"
      },
      {
        src: "images/cosmos/hp5.gif",
        alt: "Sixth slide"
      },
      {
        src: "images/cosmos/hp6.gif",
        alt: "Seventh slide"
      },
      {
        src: "images/cosmos/hp7.gif",
        alt: "Eight slide"
      },
      {
        src: "images/cosmos/hp8.gif",
        alt: "Ninth slide"
      },
      {
        src: "images/cosmos/hp9.gif",
        alt: "Tenth slide"
      },
    ]
  },
  {
    id: "driving",
    type: FilterType.PROJECT,
    image: {
      src: "images/driving/crashcourse.PNG",
      alt: "driving simulator"
    },
    title: "Driving Simulator",
    subtitle: "AP Computer Science Group Project",
    timeline: "May 2016",
    links: [
      {
        type: "other",
        label: "code",
        href: "https://bitbucket.org/jessicashu7/crashcourse/src"
      },
      {
        type: "modal",
        label: "gifs",
      },
    ],
    description: `For the final project of my AP Computer Science class (taught in Java),
    my group and I created a driving simulator to help student drivers learn traffic rules.
    The simulation focuses on a 4-way stop sign intersection and gave helpful facts and advice if the user makes a mistake
    (not stopping at a stop sign, forgetting to do turn signals before making a turn, etc.).`,
    expandedDescription: [`My group and I were asked to build anything we choose as long as it implemented a data structure.
    As this was the first time that we worked on something from scratch and no guidance,
    we were naive and created a whole city of different traffic situations to put the user through,
    not fully understanding the difficulty of building it. Eventually, we came to our senses and settled for a smaller task:
    having the user go through a 4-way stop sign intersection, implemented with a queue.
    In hindsight, this experience taught me the importance of careful planning and setting accomplishable goals,
    something I remind myself of whenever I start a new project.`],
    modalTitle: "Driving Simulator",
    modalCarouselItems: [
      {
        src: "images/driving/ds-queue.gif",
        alt: "First slide"
      },
      {
        src: "images/driving/ds-nostop.gif",
        alt: "Second slide"
      },
      {
        src: "images/driving/ds-crash.gif",
        alt: "Third slide"
      },
    ]
  },
  {
    id: "technovation",
    type: FilterType.PROJECT,
    image: {
      src: "images/vech/vech.png",
      alt: "vech logo"
    },
    title: "Vech",
    subtitle: "Technovation",
    timeline: "Feb - May 2014",
    description: [`In my freshman year of high school, I was introduced to coding through a competition called the `, buildLinkTag("Technovation Challenge", "https://technovationchallenge.org/"), `,
    which is an international technology entrepreneurship program for girls to form teams to build mobile apps that solve problems.
    After learning the basics of programming in MIT App Inventor (taught by our team mentor and the resources Technovation provided),
    my team and I worked on our app, called Vech. Aimed at students who have trouble finding volunteer events and managing their time,
    Vech is an easy way for them to find and sign up for events, keep track of their volunteer hours,
    and manage their schedules with a calendar and to-do list.`],
    expandedDescription: [`It was through this experience of Technovation, and my amazing mentor, that propelled me to pursue computer science.
    Although it was difficult and intimidating at first, I really enjoyed going into the logical mindset that coding needed.
    I was also thrilled by the idea that I could build anything from mobile apps to websites with code.
    Overall I was excited by the possibilities and applications of computer science...and hence my coding journey began!`]
  }
];

function buildLinkTag(label, href) {
  return <a href={href} target="_blank">{label}</a>;
}