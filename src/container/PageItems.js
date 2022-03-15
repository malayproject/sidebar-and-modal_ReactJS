import { FaHome, FaFolderOpen } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { IoCalendarSharp, IoDocument } from "react-icons/io5";

const PageItems = [
  {
    id: 1,
    url: "/",
    text: "Home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    icon: <MdGroup />,
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/products",
    text: "Products",
    icon: <IoCalendarSharp />,
  },
  {
    id: 5,
    url: "/career",
    text: "Career",
    icon: <IoDocument />,
  },
];

export default PageItems;
