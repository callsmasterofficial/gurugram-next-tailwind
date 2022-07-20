import React from "react";

export default function Author(props) {
  return (
    <>
      <figure className="md:flex bg-slate-100 p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={props.authorImage}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <figcaption className="text-xl mb-2">
              <div className="text-sky-500 dark:text-sky-400">Yash Hasani</div>
            </figcaption>
            <p className="text-lg font-medium">
              यश हासानी तेज़ तर्रार न्यूज़ में बतौर पत्रकार कार्य कर रहे है और
              इनका मानना है कि एक पत्रकार समाज के लोगो से बात कर उनकी बात को
              सबके सामने रखता है
            </p>
          </blockquote>
        </div>
      </figure>
    </>
  );
}
