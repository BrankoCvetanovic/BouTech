import fridgeIcon from "../assets/fridge.jpg";
import WMIcon from "../assets/washing-machine.jpg";
import vaccumIcon from "../assets/vaccum.jpg";
import toasterIcon from "../assets/toaster.jpg";
import stoveIcon from "../assets/stove.jpg";
import ironIcon from "../assets/iron.jpg";
import dectopIcon from "../assets/desktop.jpg";
import laptopIcon from "../assets/laptop.jpg";
import lgIcon from "../assets/lg.jpg";
import samsungIcon from "../assets/samsung.jpg";
import sonyIcon from "../assets/sony.jpg";
import samsungPhoneIcon from "../assets/samsung-phone.jpg";
import appleIcon from "../assets/apple-phone.jpg";
import xiaomiIcon from "../assets/xiaomi-phone.jpg";

export const appliances = [
  { name: "Fridges", img: fridgeIcon, id: "1", category: "fridge" },
  {
    name: "Washing Machines",
    img: WMIcon,
    id: "2",
    category: "washing-machine",
  },
  { name: "Stoves", img: stoveIcon, id: "3", category: "stove" },
  {
    name: "Vaccum Cleaners",
    img: vaccumIcon,
    id: "4",
    category: "vacuum-cleaner",
  },
  { name: "Toasters", img: toasterIcon, id: "5", category: "toaster" },
  { name: "Irons", img: ironIcon, id: "6", category: "iron" },
];
export const it = [
  { name: "Desktop Computers", img: dectopIcon, id: "7", category: "desktop" },
  { name: "Laptops", img: laptopIcon, id: "8", category: "laptop" },
];
export const TV = [
  { name: "LG", img: lgIcon, id: "9", category: "lg" },
  { name: "Samsung", img: samsungIcon, id: "10", category: "samsung" },
  { name: "Sony", img: sonyIcon, id: "11", category: "sony" },
];
export const phones = [
  { name: "Samsung", img: samsungPhoneIcon, id: "12", category: "samsung" },
  { name: "Apple", img: appleIcon, id: "13", category: "apple" },
  { name: "Xiaomi", img: xiaomiIcon, id: "14", category: "xiaomi" },
];
