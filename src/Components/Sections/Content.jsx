const Content = ({ title, image, source }) => {
  return (
    <>
      <section className="flex flex-col">
        {/* TITILE */}
        <h1 className="text-h2 font-lexendDeca text-primary font-bold max-w-[75vw]">
          {title}
        </h1>
        <div className="flex flex-col">
          <img src={image} alt="" className="w-1/2 self-center" />
          <p className="font-lexendDeca text-tiny text-gray-500">{source}</p>
        </div>
        <div className="">
          <h5 className="font-lexenDeca text-h5 text-yellow-950 font-bold mb-4">Indonesia Siap Dominasi Pasar Rempah Dunia</h5>
          <p className="font-prociono text-p text-yellow-950 mb-4">
            Indonesia, yang telah lama dikenal sebagai penghasil rempah
            berkualitas tinggi, kini semakin menunjukkan keseriusannya untuk
            mendominasi pasar rempah global. Dengan dukungan pemerintah, pelaku
            usaha, dan komunitas petani lokal, upaya strategis terus dilakukan
            untuk meningkatkan ekspor rempah ke berbagai negara. Fokus utama
            dari inisiatif ini adalah memastikan produk rempah Indonesia
            memenuhi standar kualitas internasional, mencakup kebersihan,
            sertifikasi organik, dan pengemasan modern yang kompetitif. <br />
            Dalam sebuah konferensi di Jakarta pada Senin (16/12), Menteri
            Perdagangan memberikan kabar menggembirakan mengenai pertumbuhan
            sektor ini. “Rempah-rempah kita seperti pala, cengkeh, dan kayu
            manis memiliki potensi besar di pasar dunia. Dengan pengelolaan yang
            tepat, Indonesia bisa menjadi pemimpin dalam ekspor rempah global,”
            tegasnya. <br />
            Menurut data Badan Pusat Statistik (BPS), ekspor rempah Indonesia
            pada tahun 2023 mencatat kenaikan sebesar 12% dibandingkan tahun
            sebelumnya, dengan nilai mencapai USD 2,5 miliar. Produk seperti
            lada hitam, kayu manis, dan cengkeh menjadi primadona di pasar
            internasional, terutama di kawasan Amerika Serikat, Uni Eropa, dan
            Timur Tengah.
          </p>
          <h6 className="font-lexenDeca text-h5 text-yellow-950 font-bold mb-4">
            Kolaborasi dengan Petani Lokal
          </h6>
          <p className="font-prociono text-p text-yellow-950 mb-4">
            Salah satu fokus utama pemerintah adalah kolaborasi erat dengan
            petani lokal. Program kemitraan ini tidak hanya bertujuan untuk
            meningkatkan kualitas dan kuantitas produksi, tetapi juga
            memberdayakan petani untuk memahami kebutuhan pasar global. Beberapa
            inisiatif penting dalam program ini meliputi pelatihan ekspor,
            pemberian alat pengering modern, pendampingan untuk memperoleh
            sertifikasi organik, dan pengenalan teknologi pertanian terbaru.{" "}
            <br />
            Pak Sulaiman, seorang petani cengkeh asal Lombok, menjadi salah satu
            contoh sukses dari program ini. Setelah mengikuti pelatihan
            intensif, ia berhasil meningkatkan kualitas produknya hingga dapat
            menembus pasar internasional. <br />
            “Dulu, saya tidak tahu bahwa pasar internasional memiliki standar
            yang berbeda. Dengan pelatihan ini, saya belajar banyak tentang
            kualitas produk dan sekarang cengkeh saya mulai diekspor ke Timur
            Tengah,” ungkap Pak Sulaiman dengan penuh semangat. <br />
            Di sisi lain, petani pala dari Ambon, Ibu Nurhayati, juga berbagi
            pengalaman serupa. Ia menyebutkan bahwa sebelum mengikuti program
            ini, ia hanya menjual pala dalam bentuk mentah ke pasar lokal.
            Namun, setelah memahami cara pengolahan pascapanen dan mendapatkan
            akses ke pasar internasional, pendapatannya meningkat hingga tiga
            kali lipat. <br />
            “Sertifikasi organik benar-benar membantu saya. Pembeli dari Eropa
            lebih percaya dengan produk yang sudah bersertifikat, dan saya
            senang karena sekarang hasil kerja keras saya bisa dihargai lebih
            tinggi,” ujar Ibu Nurhayati.
          </p>
          <h6 className="font-lexenDeca text-h5 text-yellow-950 font-bold mb-4">
            Peran Teknologi dan Platform Digital dalam Ekspor
          </h6>
          <p className="font-prociono text-p text-yellow-950 mb-4">
            Kemajuan teknologi juga menjadi bagian tak terpisahkan dari strategi
            peningkatan ekspor rempah Indonesia. Platform digital seperti
            Spicita.id hadir untuk membantu petani mempersiapkan diri menghadapi
            tantangan ekspor. Spicita.id menyediakan berbagai fitur, mulai dari
            pelatihan online, panduan pengolahan rempah, hingga akses langsung
            ke pasar global. <br />
            Dengan menggunakan platform ini, petani dapat mengikuti pelatihan
            interaktif yang dirancang khusus untuk meningkatkan pemahaman mereka
            tentang proses ekspor. Selain itu, Spicita.id juga menyediakan
            kalkulator harga, yang membantu petani menentukan harga jual produk
            mereka berdasarkan standar pasar internasional. <br />
            CEO Spicita.id, Andini Pratiwi, menjelaskan visi platform ini. “Kami
            ingin memberdayakan petani rempah Indonesia melalui teknologi.
            Dengan memberikan akses informasi dan alat yang mereka butuhkan,
            kami percaya bahwa mereka dapat bersaing di pasar global.” <br />
            Seorang pengguna Spicita.id, Pak Herman dari Sumatera Utara,
            membagikan pengalamannya. “Melalui Spicita.id, saya mendapatkan
            panduan yang jelas tentang bagaimana menyiapkan produk saya untuk
            ekspor. Ini sangat membantu, terutama karena sebelumnya saya hanya
            mengandalkan informasi dari perantara lokal,” katanya.
          </p>
          <h6 className="font-lexenDeca text-h5 text-yellow-950 font-bold mb-4">
            Meningkatnya Permintaan Rempah di Pasar Global
          </h6>
          <p className="font-prociono text-p text-yellow-950 mb-4">
            Permintaan akan rempah-rempah terus meningkat seiring dengan tren
            global yang mengarah pada penggunaan bahan alami dalam berbagai
            industri. Rempah-rempah Indonesia, seperti lada hitam, kayu manis,
            dan cengkeh, tidak hanya digunakan sebagai bahan makanan, tetapi
            juga sebagai bahan baku dalam industri farmasi, kosmetik, dan
            aromaterapi. <br />
            Menurut laporan terbaru dari Organisasi Pangan Dunia (FAO),
            rempah-rempah menyumbang sekitar 1,5% dari total ekspor non-migas
            Indonesia, dan angka ini diproyeksikan akan terus meningkat.
          </p>
          <h6 className="font-lexenDeca text-h5 text-yellow-950 font-bold mb-4">
            Harapan untuk Masa Depan
          </h6>
          <p className="font-prociono text-p text-yellow-950 mb-4">
            Keberhasilan ekspor rempah Indonesia tidak hanya memberikan manfaat
            ekonomi bagi negara, tetapi juga membawa dampak positif langsung
            kepada petani lokal. Dengan adanya dukungan pemerintah, kolaborasi
            dengan komunitas petani, serta pemanfaatan teknologi digital, masa
            depan industri rempah Indonesia terlihat semakin cerah. <br />
            Pemerintah berharap bahwa dengan sinergi yang terus terjalin,
            Indonesia dapat memperluas pangsa pasar rempah di dunia sekaligus
            meningkatkan kesejahteraan petani. <br />
            “Kami yakin, dengan langkah-langkah yang telah diambil, Indonesia
            tidak hanya akan menjadi eksportir rempah terbesar, tetapi juga
            menjadi pusat inovasi dalam pengolahan rempah,” ujar Menteri
            Perdagangan menutup konferensi.
          </p>
        </div>
      </section>
    </>
  );
};

export default Content;
