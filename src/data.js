import overlayBackground from "./uploads/overlay-background.jpg";
import profilePicture from "./uploads/profile-picture.jpg";

export const data = {
  user: {
    background: overlayBackground,
    picture: profilePicture,
    name: "Miguel Gonçalves",
    description: "Front-end Developer"
  },
  content: [
    {
      title: "Links Úteis",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "http://github.com/",
          title: "Github"
        },
       
        {
          background: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "/google.com",
          title: "Layout (Adobe XD)"
        },
        {
          background: "https://images.unsplash.com/photo-1614790871804-fe037bdc1214?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "https://vercel.com/",
          title: "Vercel (Hospedagem)"
        },
        {
          background: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "/google.com",
          title: "Test Post"
        }
      ]
    },
    {
      title: "Documentações",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=70",
          link: "https://github.com/facebook/create-react-app",
          title: "Create React App"
        },
        {
          background: "https://images.unsplash.com/photo-1570649236495-42fa5fe5c48b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=310&q=60",
          link: "https://pt-br.reactjs.org/docs/getting-started.html",
          title: "Documentação oficial do React"
        }
      ]
    },
    {
      title: "Trabalhos",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=310&q=60",
          link: "/google.com",
          title: "Test Post"
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