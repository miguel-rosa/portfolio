import overlayBackground from "./uploads/overlay-background.jpg";
import profilePicture from "./uploads/profile-picture.jpeg";
import goBeyond from "./uploads/go-beyond.jpeg";
import vtexHiringCoders from "./uploads/vtex-hiring-coders.png";
import frontShop from "./uploads/front-shop.png"
import { ContentType } from "./components/Posts/typings";
import { NavigationType } from "./components/Navigation/typings";
import { UserType } from "./components/Header/typings";

type Data = {
  user: UserType;
  content: ContentType[];
  navigation: NavigationType;
}

export const data:Data = {
  user: {
    name: "Miguel Rosa",

  },
  content: [
    {
      title: "Main Work",
      posts: [

        {
          background: "https://images.unsplash.com/photo-1656747528333-83c58c5eb4e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=70",
          title: "Shoulder",
          type: 'popup',
          popup:{
            description: `
            Design and develop a new modularized and scalable mobile architecture, that enables the project's core shared structure to grow as a product.<br>
            Work closely with the clients, designers, managers, product owners, and other developers, supporting decision-making by understanding the project's needs.<br>
            Structure the development workflow of the mobile team, using the best practices that fit our needs (code review, gitflow, semver, conventional commits, and more) increasing the code quality, and helping the juniors and mid-level developers to improve their deliveries and grow at the company.<br>
            Release applications to the Apple and Google Play stores, and when need ship over-the-air updates.<br>
            Implement tools to track metrics about performance, app usage, and crashes, aiming to solve problems before they happen, and improve the app experience.`,
            tagTitle: "Technologies",
            tags: ['React Native', 'Firebase', 'TypeScript', 'StyledComponents', 'Git Flow', 'Conventional Commits'],
            company: 'Shoulder',
            buttons: [
              {
              label: 'iOS App',
              link: 'https://apps.apple.com/br/app/shoulder-moda-feminina/id1453874871',
              },
              {
                label: 'Android App',
                link: 'https://play.google.com/store/apps/details?id=com.mobfiq.shoulder&hl=pt',
              },
            ],
          }
         
        },
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
            company: 'Época Cosméticos from Magazine Luiza',
            buttons: [
            {
              label: 'iOS App',
              link: 'https://apps.apple.com/br/app/%C3%A9poca-cosm%C3%A9ticos-loja-online/id1418608927',
            },
            {
              label: 'Android App',
              link: 'https://play.google.com/store/apps/details?id=com.mobfiq.epocacosmeticos&hl=pt_BR',
            },
          ],
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
            company: 'Motorola Global',
          }
         
        },
        // {
        //   background: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        //   title: "Upsites Digital",
        //   type: 'popup',
        //   popup:{
        //     description: `
        //     Development of digital products using WordPress;<br>
        //     Creation of UI components using HTML, CSS, and JavaScript;<br>
        //     Implementation of SEO on-page;<br>
        //     Support and maintenance of products developed at the SAAS platform of the company;<br>
        //     Build pages through the WordPress Headless API REST;<br>`,
        //     tagTitle: "Technologies",
        //     tags: ['CSS', 'JavaScript', 'SEO On-Page', 'PHP', 'WordPress'],
        //     company: 'Upsites Digital',
        //   }
         
        // },
        // {
        //   background: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=70",
        //   title: "GrowthMasters®",
        //   type: 'popup',
        //   popup:{
        //     description: `
        //     Creation of landing pages for events campaigns; <br>
        //     Maintenance of system developed using WordPress;Creation of landing pages for events campaigns; Maintenance of system developed using WordPress<br>
        //     `,
        //     tagTitle: "Technologies",
        //     tags: ['CSS', 'JavaScript', 'WordPress'],
        //     company: 'GrowthMasters®',
        //   }
         
        // },
      ]
    },
    {
      title: "Volunteer Work",
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
            company: 'Corebiz Global',
          }         
        },
        {
          background: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
          title: "VTEX Hiring Coders",
          type: 'popup',
          popup:{
            description: `Due to a recommendation from my tech lead and chapter lead, I was selected to be a mentor for 7 groups on VTEX Hiring Coders, teaching frontend and backend skills, and helping them to understand the AWS basics structure. I also helped them with VTEX IO and Admin<br><br>
            VTEX Hiring Coders is an educational project, and at the second edition where I've participated as a mentor, were more than 10000 students.
            `,
            tagTitle: "Teached",
            tags: ['Basic AWS', 'VTEX IO', 'VTEX Admin', 'React', 'Node'],
            company: 'VTEX',
          }
        },
      ]
    },
    {
      title: "Articles",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
          link: "https://jealous-pint-4b4.notion.site/Implementando-LiveScale-com-VTEX-IO-b275cf25ac214e88a7dced94bf391f30",
          title: "Implementing LiveScale with VTEX IO (PT-BR)",
        },
        {
          background: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
          link: "https://jealous-pint-4b4.notion.site/Otimizando-processos-com-c-digo-ou-n-o-af011d8338224796805397cefc20eb38",
          title: "Solving problems with code (or not) (PT-BR)",
        }
      ]
    },
    {
      title: "Code 4 fun",
      posts: [
        {
          background: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=60',
          title: "IMEI Generator",
          type: 'popup',
          popup:{
            description: `
            A basic IMEI generator based on Luhn algorithm
            `,
            buttons: [{
              label: 'Check the website',
              link: 'https://miguel-rosa.github.io/imei-generator/'
            }],
            tagTitle: "Used to pratice",
            tags: ['HTML', 'CSS', 'JavaScript', 'Algorithm', 'Github Pages', 'UI/UX'],
          }
        },
        {
          background: 'https://images.unsplash.com/photo-1518976024611-28bf4b48222e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80',
          title: "nótinha",
          type: 'popup',
          popup:{
            description: `
            Nótinha is a simple app, minded to be the simplest to-do list that you ever used.<br><br>
            Developed using Expo, it has a mobile and a frontend that consumes the firebase firestore. 
            You can create shared notes, with socket update based.
            `,
            buttons: [{
              label: 'Check the website',
              link: 'https://notinha-miguel-rosa.vercel.app/'
            }],
            tagTitle: "Used to pratice",
            tags: ['React Native', 'Firebase Firestore', 'Expo', 'Google SignIn', 'UI/UX'],
          }
        },
        {
          background: "https://images.unsplash.com/photo-1556742521-9713bf272865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          title: "Front Shop",
          type: 'popup',
          popup:{
            description: `
            A simple low-cost store, developed during the pandemic, minded to help small businesses  to sell products and services online through the WhatsApp
            `,
            buttons: [{
              label: 'Check the website',
              link: 'https://front-store-gamma.vercel.app/'
            }],
            tagTitle: "Used to pratice",
            tags: ['React.JS', 'Context API', 'Hosting', 'Digital Products', 'UI/UX'],
          }
        },
        
      ]
    }
  ],
  navigation: {
    whatsapp: "5511950465529",
    email: "miguelgoncvs@gmail.com",
    linkedin: "miguelgoncvs",
    github: "miguel-rosa"
  }
}