import overlayBackground from "./uploads/overlay-background.jpg";
import profilePicture from "./uploads/profile-picture.jpeg";
import goBeyond from "./uploads/go-beyond.jpeg";
import vtexHiringCoders from "./uploads/vtex-hiring-coders.png";

export const data = {
  user: {
    background: overlayBackground,
    picture: profilePicture,
    name: "Miguel Gonçalves",
    description: "Software Engineer"
  },
  content: [
    {
      title: "Main Work",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=70",
          title: "Época Cosméticos",
          type: 'popup',
          popup:{
            description: `
            Maintenance of the React Native App, which has more than 60k daily users;<br>
            Development of new components using React Native, TypeScript and Styled Components;<br>
            Release of new app verions on AppStore and Google Play;<br>
            Continuous improvement of app performance;<br>
            Consume the REST API`,
            tagTitle: "Technologies",
            tags: ['React Native', 'TypeScript', 'StyledComponents', 'Git Flow', 'Conventional Commits'],
            company: 'Época Cosméticos from Magazine Luiza'
          }
         
        },
        {
          background: "https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=60",
          title: "Motorola Global",
          type: 'popup',
          popup:{
            description: `
            Development and maintenance of DTC and B2B for Motorola Europe and the Middle East And Africa, adding up to more than 25 country stores, like the United Kingdom, Spain, Germany, France Russia, and Poland;<br>
            Creation and maintenance of components, using ReactJS, TypeScript, and GraphQL;<br>
            Creation and maintenance of apps, services, and clients with NodeJS, KoaJS, TypeScript, and GraphQL;<br>
            Maintenance and improvements of VTEX legacy checkouts, using HTML, CSS, and JavaScript;<br>
            Creation, maintenance, and improvement of tags, triggers, and variables of Google Tag Manager`,
            tagTitle: "Technologies",
            tags: ['ReactJs', 'VTEX IO', 'StyledComponents', 'NodeJS', 'KoaJS', 'TypeScript', 'SSR', 'Git Flow', 'Conventional Commits'],
            company: 'Motorola Global'
          }
         
        },
        {
          background: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=70",
          title: "Upsites Digital",
          type: 'popup',
          popup:{
            description: `
            Development of digital products using WordPress;<br>
            Creation of UI components using HTML, CSS, and JavaScript;<br>
            Implementation of SEO on-page;<br>
            Support and maintenance of products developed at the SAAS platform of the company;<br>
            Build pages through the WordPress Headless API REST;<br>`,
            tagTitle: "Technologies",
            tags: ['CSS', 'JavaScript', 'SEO On-Page', 'PHP', 'WordPress'],
            company: 'Upsites Digital'
          }
         
        },
        {
          background: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=70",
          title: "GrowthMasters®",
          type: 'popup',
          popup:{
            description: `
            Creation of landing pages for events campaigns; <br>
            Maintenance of system developed using WordPress;Creation of landing pages for events campaigns; Maintenance of system developed using WordPress<br>
            `,
            tagTitle: "Technologies",
            tags: ['CSS', 'JavaScript', 'WordPress'],
            company: 'GrowthMasters®'
          }
         
        },
      ]
    },
    {
      title: "Company Projects",
      posts: [
        {
          background: goBeyond,
          title: "GoBeyond",
          type: 'popup',
          popup:{
            description: `
            GoBeyond is a project from Corebiz Global that aim to recruit new workers as trainees.<br><br>
            In the second edition, I've participated as a mentor, for three months I've taught a trainee, following him and teaching not only hard skills but soft skills too.<br><br>
            And at the third edition, I've participated as a teacher for the online Bootcamp, where I was responsible for the React trail. I prepared the content and presented it on a live code, where I showed the basics of React, including React props, hooks, jsx, by creating a real app. The student class were composed up to 30 developers
            `,
            tagTitle: "Teached",
            tags: ['React hooks', 'React Props', 'JSX', 'Create React App', 'npm, yarn'],
            company: 'Corebiz Global'
          }
         
        },
        {
          background: vtexHiringCoders,
          title: "VTEX Hiring Coders",
          type: 'popup',
          popup:{
            description: `Due to a recommendation from my tech lead and chapter lead, I was selected to be a mentor for 7 groups on VTEX Hiring Coders, teaching frontend and backend skills, and helping them to understand the AWS basics structure. I also helped them with VTEX IO and Admin<br><br>
            VTEX Hiring Coders is an educational project, and at the second edition where I've participated as a mentor, were more than 10000 students.
            `,
            tagTitle: "Teached",
            tags: ['Basic AWS', 'VTEX IO', 'VTEX Admin', 'React', 'Node'],
            company: 'VTEX'
          }
         
        },
      ]
    },
    {
      title: "Articles",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=60",
          link: "https://jealous-pint-4b4.notion.site/Implementando-LiveScale-com-VTEX-IO-b275cf25ac214e88a7dced94bf391f30",
          title: "Implementing LiveScale with VTEX IO (PT-BR)",
        },
        {
          background: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=60",
          link: "https://jealous-pint-4b4.notion.site/Otimizando-processos-com-c-digo-ou-n-o-af011d8338224796805397cefc20eb38",
          title: "Solving problems with code (or not) (PT-BR)",
        }
      ]
    }
  ],
  navigation: {
    whatsapp: "11950465529",
    phone: "11950465529",
    email: "miguelgoncvs@gmail.com",
    linkedin: "miguelgoncvs",
    github: "miguel-rosa"
  }
}