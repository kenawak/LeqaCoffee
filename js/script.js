// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'
import coffee12 from '../assets/coffee-12.png'
import coffee11 from '../assets/coffee-11.png'
import coffee10 from '../assets/coffee-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingcoffees = [
    'Make coffee',
    'Nigiri coffee',
    'Oshizushi',
    'Temaki coffee',
    'Uramaki coffee',
    'Inari coffee'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: coffee12,
        alt: "coffee-12",
        title: "Chezu coffee",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: coffee11,
        alt: "coffee-11",
        title: "Originale coffee",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: coffee10,
        alt: "coffee-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];