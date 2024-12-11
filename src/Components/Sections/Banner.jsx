import React from "react";
import Button from "../Subsections/Button.jsx";

const Banner = () => {
  return (
    <>
      <section className="h-screen flex flex-col justify-center items-end">
        <div className="flex flex-col items-end bg-primary px-8 py-8 w-fit max-w-[calc(100vw/4)] rounded-bl-[4rem] gap-2">
          <p className="font-lexendDeca text-h5 text-gray-50">Ayo kenali lebih jauh tentang <span className="text-tertiary">ekspor</span> dan <span className="text-tertiary">hilirisasi</span> rempah-rempah!</p>
          <Button
          link={"/dashboard"}
          label={"Klik Untuk Memulai"} />
        </div>
        <div className="relative w-screen h-[calc(30vh)] text-gray-50 px-24 py-12">
          <div className="absolute inset-0 bg-spice1 bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-yellow-950 opacity-75"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;
