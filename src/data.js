import overlayBackground from "./uploads/overlay-background.jpg";
import profilePicture from "./uploads/profile-picture.jpeg";

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
            Continuous improvement of app performance<br>;
            Consume the REST API`,
            tags: ['React Native', 'TypeScript', 'StyledComponents', 'PHP', 'WordPress'],
            company: 'Época Cosméticos from Magazine Luiza'
          }
         
        },
        {
          background: "https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=60",
          title: "Motorola Global",
          type: 'popup',
          popup:{
            description: `
            Development and maintenance of DTC and B2B for Motorola Europe and the Middle East And Africa, adding up to more than 25 country stores, like the United Kingdom, Spain, Germany, France Russia, and Poland.<br>
            Creation and maintenance of components, using ReactJS, TypeScript, and GraphQL;<br>
            Creation and maintenance of apps, services, and clients with NodeJS, KoaJS, TypeScript, and GraphQL;<br>
            Maintenance and improvements of VTEX legacy checkouts, using HTML, CSS, and JavaScript;<br>
            Creation, maintenance, and improvement of tags, triggers, and variables of Google Tag Manager`,
            tags: ['ReactJs', 'VTEX IO', 'StyledComponents', 'NodeJS', 'KoaJS', 'TypeScript', 'SSR'],
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
            tags: ['CSS', 'JavaScript', 'WordPress'],
            company: 'GrowthMasters®'
          }
         
        },
      ]
    },
    {
      title: "Education Projects",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1543285198-3af15c4592ce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm9kZWpzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          link: "https://nodejs.org/en/download/",
          title: "NodeJS/NPM"
        },
        {
          background: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
          link: "https://git-scm.com/downloads",
          title: "Git"
        },
        {
          background: "https://images.unsplash.com/photo-1627399270231-7d36245355a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=70",
          link: "https://code.visualstudio.com/",
          title: "Visual Studio Code"
        },
        {
          background: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=70",
          link: "https://github.com/facebook/create-react-app",
          title: "Create React App",
          description: "Descrição"
        }
      ]
    },
    {
      title: "Articles",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "https://xd.adobe.com/view/37061811-e3ad-4675-8ef5-d94bd7f2d4d6-6255/screen/e7c84a8a-2e81-45fd-91bd-1688c5be908b/",
          title: "Layout (Adobe XD)",
          description: "Descrição"
        },
        {
          background: "https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "https://vercel.com/",
          title: "Vercel (Hospedagem)",
          description: "Descrição"
        }
      ]
    }
  ],
  navigation: {
    whatsapp: "11950465529",
    phone: "11950465529",
    email: "miguel.goncalves@corebiz.ag"
  }
}