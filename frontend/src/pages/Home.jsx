import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";

import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Museum from "../assets/museum.webp";

const Home = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "messages", link: "/", icon: FiMessageSquare },

    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex">
      <div
        className={`bg-[#0e0e0e] min-h-screen absolute top-0 left-0 ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 z-20`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`flex-1 ml-${
          open ? "72" : "16"
        } transition-all duration-500`}
      >
        <img src={Museum} alt="Museum" className="w-full h-[700px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="bg-white bg-opacity-30 backdrop-blur-md p-8 rounded-lg text-center transition-all ease-in-out duration-300 shadow-lg hover:bg-white hover:bg-opacity-50">
            <h1 className="text-xl font-bold text-gray-600">
              Welcome to Our Museum
            </h1>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              sagittis dolor.
            </p>
          </div>
          <div className="mt-5">
            <table className="min-w-full bg-transparent rounded-md shadow-md">
              <thead className="bg-transparent border-b">
                <tr>
                  <th className="p-3 text-left text-gray-700">Day</th>
                  <th className="p-3 text-left text-gray-700">Opening Time</th>
                  <th className="p-3 text-left text-gray-700">Closing Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">Monday</td>
                  <td className="p-3 text-gray-600">9:00 AM</td>
                  <td className="p-3 text-gray-600">5:00 PM</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">Tuesday</td>
                  <td className="p-3 text-gray-600">9:00 AM</td>
                  <td className="p-3 text-gray-600">5:00 PM</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">Wednesday</td>
                  <td className="p-3 text-gray-600">9:00 AM</td>
                  <td className="p-3 text-gray-600">5:00 PM</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">Thursday</td>
                  <td className="p-3 text-gray-600">9:00 AM</td>
                  <td className="p-3 text-gray-600">5:00 PM</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">Friday</td>
                  <td className="p-3 text-gray-600">9:00 AM</td>
                  <td className="p-3 text-gray-600">5:00 PM</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 text-gray-600">Saturday</td>
                  <td className="p-3 text-gray-600">10:00 AM</td>
                  <td className="p-3 text-gray-600">6:00 PM</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-600">Sunday</td>
                  <td className="p-3 text-gray-600">Closed</td>
                  <td className="p-3 text-gray-600">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
