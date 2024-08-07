import { faFacebookF, faGithub, faGooglePlusG, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const navData = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'Recipe',
        link: '/recipe'
    },
    {
        id: 3,
        title: 'Search',
        link: '/search'
    },
    {
        id: 4,
        title: 'Contact',
        link: '/contact'
    },
]

export const dataAccordion = [
    {
        id: 1,
        title: 'Dish Type',
        links: [
            'Appetizers & Snacks',
            'Bread Recipes',
            'Cake Recipes',
            'Candy and Fudge',
            'Casserole Recipes',
            'Christmas Cookies',
            'Cocktail Recipes',
            'Main Dishes',
            'Pasta Recipes',
            'Pie Recipes',
            'Sandwiches'
        ]
    },
    {
        id: 2,
        title: 'Meal Type',
        links: [
            'Breakfast and Brunch',
            'Desserts',
            'Dinners',
            'Lunch'
        ]
    },
    {
        id: 3,
        title: 'Diet and Health',
        links: [
            'Diabetic',
            'Gluten Free',
            'High Fiber Recipes',
            'Low Calorie'
        ]
    },
    {
        id: 4,
        title: 'World Cuisine',
        links: [
            'Chinese',
            'Indian',
            'Italian',
            'Mexican'
        ]
    },
    {
        id: 5,
        title: 'Seasonal',
        links: [
            'Baby Shower',
            'Birthday',
            'Christmas',
            'Halloween'
        ]
    }
]

export const socialData = [
  {
    title: "facebook",
    icon: faFacebookF,
    color: "#3b5998",
  },
  {
    title: "instagram",
    icon: faInstagram,
    color: "#DE487B",
  },
  {
    title: "google",
    icon: faGooglePlusG,
    color: "#CC3333",
  },
  {
    title: "twitter",
    icon: faTwitter,
    color: "#00acee",
  },
  { title: "vimeo", icon: "faVimeo", color: "#3b5998" },
  {
    title: "github",
    icon: faGithub,
    color: "#616161",
  },
  {
    title: "linkedIn",
    icon: faLinkedinIn,
    color: "#0e76a8",
  },
];

export const footerData = [
    {
      links: ["Presentations", "Professionals", "Stores"],
    },
    {
      links: ["Webinars", "Workshops", "Local Meetups"],
    },
    {
      links: ["Our Initiatives", "Giving Back", "Communities"],
    },
    {
      links: ["Contact Form", "Work With Us", "Visit Us"],
    },
];