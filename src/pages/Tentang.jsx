import React from "react";
import Nav1 from "../Components/Nav1";
import Footer from "../components/footer";
import Info from "../Components/Sections/Info";
import Team from "../Components/Sections/Team";

const Tentang = () => {
  return (
    <>
      <Nav1 />
      <section className="py-12">
        <Info
        title={'Tentang Kami'}
        description={'Spicita menyediakan solusi akses edukasi ekspor dan hilirisasi hasil panen bagi petani rempah-rempah Nusantara.  Spicita.id menyediakan pembelajaran yang dikategorikan berdasarkan jenis rempah yang menjadi fokus utama masing-masing pengguna kami. Berkomitmen meningkatkan daya saing petani rempah-rempah Indonesia di pasar global, mendukung keberlanjutan lingkungan dan kesejahteraan petani.'}/>
        <Info
        title={''}
        description={''}
        />
        <Team />
        {/* <div className="about-us">
          <section className="about-header">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Vestibulum urna enim,
              rutrum sed venenatis vel, lobortis congue dolor.
            </p>
            <p>
            Integer commodo nibh nunc,
            blandit hendrerit enim dignissim ac.
            </p>
          </section>
          <hr className="divider" />
          <section className="about-content">
            <div className="image-container">
              <img
                src="/path/to/spices-image.jpg"
                alt="Spices"
                className="about-image"
              />
            </div>
            <div className="about-text">
              <h2>Visi Misi</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum urna enim,
                rutrum sed venenatis vel, lobortis congue dolor. Blandit hendrerit enim dignissim ac.
              </p>
              <p>
                Nullam blandit commodo risus, eget sodales turpis pharetra at. Fusce nisl faucibus,
                eleifend velit vitae, elementum tortor. Cras non tellus non lorem eleifend consequat eu sit amet eros.
              </p>
              <p>
                Curabitur eros eros, pellentesque ut massa sit amet, ultricies eleifend enim. Suspendisse id elit quam.
                Sed quis mauris vitae sem suscipit euismod.
              </p>
            </div>
          </section>
        </div> */}
      </section>
      <Footer />
    </>
  );
};

export default Tentang;
