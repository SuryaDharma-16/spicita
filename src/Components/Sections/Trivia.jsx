import React from "react";
import ProductCard from "../Subsections/ProductCard";
import Kunyit from "../../Assets/kunyit.png";
import Jahe from "../../Assets/jahe.png";
import Kapulaga from "../../Assets/kapulaga.png";

const Trivia = () => {
  return (
    <>
      <section className="flex flex-wrap justify-between items-center px-24 min-h-screen">
        <div className="flex flex-col max-w-[calc(100vw/3.5)]">
          <h1 className="font-lexendDeca text-h2 font-bold">
            Bagaimana potensi{" "}
            <span className="text-primary">rempah-rempah</span> di Indonesia?
          </h1>
          <p className="font-prociono text-yellow-950 text-p">
            Rempah-rempah Indonesia kembali mendapat sorotan di pasar
            internasional. Permintaan global terhadap rempah organik seperti
            pala, lada, dan cengkeh semakin meningkat seiring tren gaya hidup
            sehat. <br />
            Negara-negara Eropa dan Amerika Utara menjadi konsumen utama
            rempah-rempah Nusantara, yang dikenal karena kualitas dan cita rasa
            khasnya.
          </p>
        </div>
        <div className="flex flex-row">
          <ProductCard
            image={Kunyit}
            name={"Kunyit"}
            description={
              "Memberi warna kuning pada masakan, memiliki sifat anti-inflamasi, dan sering digunakan dalam pengobatan tradisional."
            }
          />
          <ProductCard
            image={Jahe}
            name={"Jahe"}
            description={
              "Menambahkan rasa pedas dan hangat pada makanan atau minuman, baik untuk pencernaan, mengurangi mual, dan meningkatkan imunitas."
            }
          />
          <ProductCard
            image={Kapulaga}
            name={"Kapulaga"}
            description={
              "Menambah rasa aromatik pada kari dan teh, serta membantu pencernaan dan meredakan masalah pernapasan."
            }
          />
        </div>
      </section>
    </>
  );
};

export default Trivia;
