import React from "react";
import { Route, Routes } from "react-router-dom";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolor
            ducimus cupiditate incidunt inventore veniam animi rem maxime dolore
            perferendis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laboriosam porro quibusdam soluta ipsum id veritatis nisi odio
            beatae ipsam fugit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            nesciunt, voluptates accusamus consectetur maiores eos assumenda at!
            Provident, dicta eos? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint accusamus excepturi eaque sit provident
            consequuntur quisquam vel magni quidem consectetur!
          </p>

          <b className="text-gray-800">OUR MISSION</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ducimus
            velit saepe, quo laboriosam quia maxime et repudiandae beatae
            exercitationem necessitatibus corrupti ipsam ea ipsum atque
            blanditiis in veniam perferendis esse? Fugit qui sed expedita!
          </p>
        </div>
      </div>
      <div className="text-3xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinence: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
            repellat laborum culpa praesentium totam nobis accusamus sed
            voluptatibus explicabo!
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
            repellat laborum culpa praesentium totam nobis accusamus sed
            voluptatibus explicabo!
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quae
            repellat laborum culpa praesentium totam nobis accusamus sed
            voluptatibus explicabo!
          </p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
