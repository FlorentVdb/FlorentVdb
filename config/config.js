
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Florent",
  links: [
    {
      title: "A propos",
      link: "#about",
    },
    {
      title: "Projets",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Liens",
      link: "/links",
    },
  ],
}
export const intro = {
  title: "Florent Vandenbilcke",
  description: "Je suis Data Engineer et je construis des pipelines de données fiables et optimisées",
  image: profile.src,
  buttons: [
    {
      title: "Contactez Moi",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Mes compétences",
      link: "https://drive.google.com/file/d/1vNnut_JoOetE9e4bESTEmBfkfe9TOi9U/view?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Qui je suis",
  description: [
    "Diplômé de l'Institut Mines Telecom Nord Europe (issu de la fusion entre l'école des Mines de Douai et Telecom Lille). J'ai commencé ma carrière professionnelle en tant que Data Engineer à la Mutuelle GSMC, où j'ai pu développer un entrepôt de données en partant de zéro. Durant cette expérience j'ai pu travailler sur des technos modernes telles que DBT, Snowflake, Azure DevOps et Python. Je suis passionné par l'univers de la Data et j'aime construire des pipelines de données fiables et optimisées tout en ayant à coeur de répondre aux mieux aux besoins des utilisateurs finaux.",
  ],
}

export const work = {
  title: "Ce que je fais",
  cards: [
    {
      title: "Data Engineering",
      description: "je construis des pipelines de données fiables et optimisées, analyse vos besoins et propose des solutions adaptées.",
      icons: null,
    },
    {
      title: "DevOps",
      description: "J'automatise les processus de déploiement et d'intégration continue, je mets en place des environnements de développement et de production efficaces.",
      icons: null,
    },
    {
      title: "Data Analytics",
      description: "j'analyse les données pour en extraire des chiffres-clés, je crée des tableaux de bord et des rapports pour aider à la prise de décision.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projets",
  cards: [
    {
      title: "SQL SRS",
      description: "Application Streamlit construite dans le cadre de la formation Data-Upskilling permettant de revoir vos notions SQL.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/FlorentVdb/sql_srs",
        },
      ]
    }
  ],
}

export const contact = {
  title: "Prenons contact",
  description: "N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question via mon lien Calendly ci-dessous ou par email à cette adresse : vandenbilckeflorent@gmail.com",
  buttons: [
    {
      title: "Envoyer un email",
      link: "mailto:vandenbilckeflorent@gmail.com",
      isPrimary: true,
    },
    {
      title: "Organiser un rendez-vous",
      link: "https://calendly.com/vandenbilckeflorent/presentation-florent",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Florent Vandenbilcke | Data Engineer | DevOps | Data Analyst",
  description: "Data Engineer confirmé, je construis des pipelines de données fiables et optimisées. Diplômé de l'Institut Mines Telecom Nord Europe.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@florentvandenbilcke",
  description: "Data Engineer | DevOps | Data Analyst",
  cards: [
    {
      title: "Mon GitHub",
      link: "https://github.com/FlorentVdb",
    },
    {
      title: "Mon LinkedIn",
      link: "https://www.linkedin.com/in/florent-vandenbilcke-data/",
    },
  ]
}