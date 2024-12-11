import React from "react";
import Benefit from "./Benefit";

const Benefits = () => {
  return (
    <>
      <div className="relative h-fit text-gray-50 px-24 py-12">
        <div className="absolute inset-0 bg-spice1 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-yellow-950 opacity-75"></div>
        <div className="relative z-10 flex flex-wrap justify-between">
          <Benefit
            title={"Meningkatkan Kualitas dan Nilai Jual Rempah"}
            details={
              "Dapatkan panduan lengkap untuk mengolah rempah agar sesuai dengna standar kualitas pasar internasional"
            }
          />
          <Benefit
            title={"Akses ke Pasar Ekspor yang Lebih Luas"}
            details={
              "Tingkatkan peluang penjualan dengan produk rempah yang siap bersaing di pasar global."
            }
          />
          <Benefit
            title={"Dukungan Penuh dari Ahli Agronomi"}
            details={
              "Belajar langsung dari para ahli tentang teknik pengolahan dan pengemasan yang optimal untuk produk berkualitas tinggi."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Benefits;
