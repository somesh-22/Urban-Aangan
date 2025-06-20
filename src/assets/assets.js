import logo from './logo.svg';
import logo_dark from './Aangan.svg'; // This is your Aangan logo
import cross_icon from './cross_icon.svg';
import menu_icon from './menu_icon.svg';
import star_icon from './star_icon.svg';
import left_arrow from './left_arrow.svg';
import right_arrow from './right_arrow.svg';
import header_img from './header_img.png';
import brand_img from './brand_img.png';
import project_img_1 from './project_img_1.jpg';
import project_img_2 from './project_img_2.jpg';
import project_img_3 from './project_img_3.jpg';
import project_img_4 from './project_img_4.jpg';
import project_img_5 from './project_img_5.jpg';
import project_img_6 from './project_img_6.jpg';
import profile_img_1 from './Manas.png.png';
import profile_img_2 from './sweta.png';
import profile_img_3 from './DP.jpg';

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  project_img_5,
  project_img_6,
  left_arrow,
  right_arrow,
  Aangan_logo: logo_dark, // ✅ Fix: assign logo_dark as Aangan_logo
};

export const projectsData = [
  {
    title: "Skyline Residency",
    price: "₹2,50,00,000",
    location: "Mumbai",
    image: project_img_1,
  },
  {
    title: "Green Meadows",
    price: "₹75,00,000",
    location: "Bhubaneswar",
    image: project_img_2,
  },
  {
    title: "Serene Heights",
    price: "₹1,20,00,000",
    location: "Hyderabad",
    image: project_img_3,
  },
  {
    title: "Central Park Homes",
    price: "₹3,10,00,000",
    location: "Delhi",
    image: project_img_4,
  },
  {
    title: "Palm Grove Villas",
    price: "₹2,80,00,000",
    location: "Chennai",
    image: project_img_5,
  },
  {
    title: "Lakeview Enclave",
    price: "₹2,25,00,000",
    location: "Pune",
    image: project_img_6,
  },
];

export const testimonialsData = [
  {
    name: "Debasish Panigrahi",
    title: "Senior Consultant",
    image: profile_img_3,
    alt: "Portrait of Debasish Panigrahi",
    rating: 5,
    text: "Finding a home in Bangalore seemed tough until I connected with this team. Their professionalism and dedication made all the difference!",
  },
  {
    name: "Sweta Sailaja Satapathy",
    title: "HR Executive",
    image: profile_img_2,
    alt: "Portrait of Sweta Sailaja Satapathy",
    rating: 4,
    text: "I purchased a villa in Bhubaneswar through them. Smooth process, genuine listings, and very cooperative staff!",
  },
  {
    name: "Manas Ranjan Biswal",
    title: "Developer",
    image: profile_img_1,
    alt: "Portrait of Manas Ranjan Biswal",
    rating: 5,
    text: "They helped me find the perfect apartment in Mumbai. Their support through every step was outstanding. Highly recommended!",
  },
];
