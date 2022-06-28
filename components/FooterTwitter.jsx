import React from "react";
import Twitter from "./icons/Twitter";

function FooterTwitter() {
  return (
    <>
      {FooterTwitterData.map((data) => {
        return (
          <div
            key={data.id}
            className="flex justify-start items-start m-6 ml-10"
          >
            <div>
              <div className="flex">
                < Twitter color="#1DA1F2" />

                <p className="ml-4">
                  {data.title}
                  <a className="text-blue-700" href="#">
                    {data.data}
                  </a>
                </p>
              </div>
              <h4 className=" text-gray-400 ml-8">{data.date}</h4>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default FooterTwitter;

const FooterTwitterData = [
  {
    id: "1",
    title:
      "Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project…nology",
    date: "June 24, 2022",
    data: "@Copa America: Luis Suarez from devastated US",
  },
  {
    id: "2",
    title: `Cyber Monday Sale, Save 33% on Jannah theme during our year-end Sale, Purchase a new license for your next project…`,
    date: "June 24, 2022",
    data: "@Nancy Zhang a Chinese busy woman and Dhaka",
  },
];
