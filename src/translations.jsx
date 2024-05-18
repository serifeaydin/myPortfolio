 import project1 from "./assets/image2.png";
 import project2 from "./assets/image2.png";
 import project3 from "./assets/image2.png";
 
 
 const translations = {
    en: {
      title:"I am a Frontend Developer",
      description:"...who likes to craft solid and scalable frontend products with great user experiences.",
      skills:"Skills",
      profile:"Profile",
      projects:"Projects",
      
      informationSection:{
        basicInformation:"Basic Information",
        dateOfBirth:"Date of Birth",
        birthday:"02.01.1993",
        city:"City",
        myCity:"Izmir",
        education:"Education",
        myEducation:{
            university:"Namık Kemal University",
            degree:"Electronic and Communication Engineering",
            year:"2016"},

        preferredRole:"Preferred Role",
        role:"Frontend Developer",
      },
     aboutMe:"About Me",
     aboutSection:"Hi,my name is Serife. I am 31,married and have 2-years-old son.I enjoy cooking, growing flowers, and traveling and learning about different cultures.I have always been interested in software. I had the opportunity to improve myself with Workintech.",
     
     
  
    
    projectsData: [
      {
        
          id: 1,
          image: project1,
          projectTitle: "Witflix",
          introduction:
            "This project, which is being developed using Html on the front-end, was designed to be created using Css",
          techStack: ["Html", "Css"],
          github: "https://github.com/serifeaydin/witflix",
          website:"" ,
        },
      
        {
          id: 2,
          image: project2,
          projectTitle: "Pizza Challenge",
          introduction:
            "This pizza ordering site, created using react, consists of three pages: home page, order form and order placed.",
          techStack: ["React", "JavaScript", "Css"],
          github: "https://github.com/serifeaydin/fsweb-s7-challenge-pizza",
          website: "",
        },
        
        {
          id: 3,
          image: project1,
          projectTitle: "myPortfolio",
          introduction:
            "Portfolio web page developed with React and enriched in design with Tailwind. It was developed to be responsive.",
          techStack: ["React", "Redux", "JavaScript", "Tailwind"],
          github: "https://github.com/serifeaydin/myPortfolio",
          website:"" ,
        }
      ],
      
      footerSection:{
        first:"Send me a message!",
        second:"Got a question or proposal,or just want to say hello?Go ahead!"
      }
    },

    tr: {
        title:"Ben bir Frontend Developer'ım",
        description:"...Harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir frontend ürünleri oluşturmayı seven.",
        skills:"Beceriler",
        profile:"Profil",
        projects:"Projeler",
        
        informationSection:{
          basicInformation:"Temel Bilgiler",
          dateOfBirth:"Doğum Tarihi",
          birthday:"02.01.1993",
          city:"Şehir",
          myCity:"İzmir",
          education:"Eğitim",
          myEducation:{
              university:"Namık Kemal Üniversitesi",
              degree:"Elektronik ve Haberleşme Mühendisliği",
              year:"2016"},
  
          preferredRole:"Tercih Ettiği Rol",
          role:"Frontend Developer",
  },
       aboutMe:"Hakkımda",
       aboutSection:"Merhaba adım Şerife. 31 yaşındayım, evliyim ve 2 yaşında bir oğlum var. Yemek yapmayı, çiçek yetiştirmeyi, seyahat etmeyi ve farklı kültürleri öğrenmeyi seviyorum. Yazılıma her zaman ilgi duydum. Workintech ile kendimi geliştirme fırsatı buldum.",
       
       
       
      projectsData:
     [
          {
            id: 1,
            image: project1,
            projectTitle: "Witflix",
            introduction:
              "Frontend'de Html kullanılarak geliştirilen bu proje, Css kullanılarak tasarlandı.",
            techStack: ["Html", "Css"],
            github: "https://github.com/serifeaydin/witflix",
            website:"www.youtube.com" ,
          },
         
          {
            id: 2,
            image:project2,
            projectTitle: "Pizza Challenge",
            introduction:
              "React kullanılarak oluşturulan bu pizza sipariş sitesi üç sayfadan oluşuyor: ana sayfa, sipariş formu ve sipariş alındı sayfası.",
            techStack: ["React", "JavaScript", "Css"],
            github: "https://github.com/serifeaydin/fsweb-s7-challenge-pizza",
            website: "www.youtube.com",
          },
          
          {
            id: 3,
            image: project3,
            projectTitle: "myPortfolio",
            introduction:
              "Portföy web sayfası React ile geliştirildi ve Tailwind ile tasarımı zenginleştirildi. Responsive olacak şekilde tasarlandı.",
            techStack: ["React", "Redux", "JavaScript", "Tailwind"],
            github: "https://github.com/serifeaydin/myPortfolio",
            website:"www.youtube.com" ,
          }
      ],
        
        footerSection:{
          first:"Bana mesaj gönder!",
          second:"Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Devam edin!"
        }
      },
    }
   
  export default translations;