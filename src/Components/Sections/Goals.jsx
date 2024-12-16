import React from "react";
import Info from "./Info";
import Image from "../../Assets/spices-image-3.jpg";

const Goals = () => {
  return (
    <>
      <div className="flex justify-between px-24">
        <img src={Image} alt="visi-misi" className="max-w-[calc(100vw/4)] rounded-lg" />
        <div className="flex flex-row">
          <Info
            title={"Visi"}
            description={
              "Meningkatkan daya saing petani rempah Indonesia melalui edukasi, inovasi, dan pengembangan produk hasil panen yang berkelanjutan."
            }
            size={"max-w-[calc(100vw/3.5)]"}
            titleAlign={'item-start'}
            textAlign={'text-left'}
          />

          <div>
            <h1
              className="font-lexendDeca text-h3
         font-bold text-center text-primary"
            >
              Misi
            </h1>
            <ol>
              <li className="list-decimal font-prociono text-p text-yellow-950">
                Memberdayakan petani rempah dengan literasi pengolahan dan
                hilirisasi hasil panen sesuai standar internasional.{" "}
              </li>
              <li className="list-decimal font-prociono text-p text-yellow-950">
                Menyediakan platform digital terpadu untuk edukasi dan pelatihan
                agribisnis rempah.
              </li>
              <li className="list-decimal font-prociono text-p text-yellow-950">
                Mendukung keberlanjutan agrikultur rempah melalui solusi
                inovatif yang inklusif dan berorientasi pada peningkatan
                kualitas produk.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
