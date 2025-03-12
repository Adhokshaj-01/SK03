import React from "react";
import EagleImg from "../Images/network/1.webp";
import GReImg from '../Images/network/2.png';
import HGImg from '../Images/network/3.jpg';
import RPIGmg from '../Images/network/5.jpg';
import RRImg from '../Images/network/4.jpeg';
import RollingNum from "./ui/animation/Roll";

const brandsData = [
  { imageSrc: EagleImg, altText: "Eagle" },
  { imageSrc: GReImg, altText: "GRIL" },
  { imageSrc: HGImg, altText: "HG Infra" },
  { imageSrc: RPIGmg, altText: "RPP" },
  { imageSrc: RRImg, altText: "RR" },
];

export default function Network() {
  return (
    <section className="bg-white pb-10 border-b border-gray-200 mx-8 lg:mx-16">
      <div className="text-center lg:mt-0 p-10">
        <span className="block text-lg font-semibold text-primary">
          Our Trusted Partners
        </span>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <StatCard />
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({ brand }) => {
  const { link, imageSrc, altText } = brand;
  return (
    <a href={link} className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
      <img src={imageSrc} alt={altText} className="h-[150px] w-full" />
    </a>
  );
};

const StatCard = () => {
  return (
    <div className="pb-5 mt-0">
      <div className="flex justify-center">
        <div className="max-w-4xl w-full px-4">
          <dl className="bg-white rounded-lg shadow-lg grid grid-cols-1 sm:grid-cols-3 text-center">
            <div className="flex flex-col p-6 border-b sm:border-0 sm:border-r border-gray-200">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Years Of Expertise</dt>
              <dd className="order-1 text-5xl font-extrabold leading-none text-orange-600">
                <RollingNum number={8} />
              </dd>
            </div>
            <div className="flex flex-col p-6 border-t border-b sm:border-0 sm:border-l sm:border-r border-gray-200">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Satisfied Customers</dt>
              <dd className="order-1 text-5xl font-extrabold leading-none text-orange-600">
                <RollingNum number={1000} />
              </dd>
            </div>
            <div className="flex flex-col p-6 border-t sm:border-0 sm:border-l border-gray-200">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">Projects Delivered</dt>
              <dd className="order-1 text-5xl font-extrabold leading-none text-orange-600">
                <RollingNum number={2500} />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
