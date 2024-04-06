import fridgeIcon from "../assets/fridge.jpg";
import WMIcon from "../assets/washing-machine.jpg";
import vaccumIcon from "../assets/vaccum.jpg";
import toasterIcon from "../assets/toaster.jpg";
import stoveIcon from "../assets/stove.jpg";
import ironIcon from "../assets/iron.jpg";

const appliances = [
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

export default appliances;
