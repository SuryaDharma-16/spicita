import React from "react";
import TestiCard from "../Subsections/TestiCard";
import Profil1 from "../../Assets/profil1.svg";
import Profil2 from "../../Assets/profil3.svg";
import Profil4 from "../../Assets/profil4.svg";

const Testi = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-lexendDeca text-h4 text-primary">Testimoni</h1>
        <p className="font-lexendDeca text-h2 font-bold">
          Apa kata para petani rempah?
        </p>
        <div className="flex flex-wrap justify-between items-start bg-accent px-24 py-12 mt-12 w-screen">
          <TestiCard
            photo={Profil1}
            comment={"Hasil panen jadi bagus dan diterima importir!"}
            name={"Juki Sumardi"}
          />
          <TestiCard
            photo={Profil2}
            comment={
              "Akhirnya jadi bisa memaksimalkan pendapatan dari hasil rempah!"
            }
            name={"Mona Febriani"}
          />
          <TestiCard
            photo={Profil4}
            comment={"Jadi siap ekspor di panen selanjutnya!"}
            name={"Anita Diah"}
          />
        </div>
      </section>
    </>
  );
};

export default Testi;
