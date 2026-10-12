import { useHistory } from 'react-router-dom'
import Footer from './Footer'
import UrunKarti from './UrunKarti'

const kategoriler = [
  { ikon: 1, ad: 'YENİ! Kore' },
  { ikon: 2, ad: 'Pizza' },
  { ikon: 3, ad: 'Burger' },
  { ikon: 4, ad: 'Kızartmalar' },
  { ikon: 5, ad: 'Fast Food' },
  { ikon: 6, ad: 'Gazlı İçecek' },
]

const menuFiltreleri = [
  { ikon: 1, ad: 'Ramen' },
  { ikon: 2, ad: 'Pizza' },
  { ikon: 3, ad: 'Burger' },
  { ikon: 4, ad: 'French fries' },
  { ikon: 5, ad: 'Fast food' },
  { ikon: 6, ad: 'Soft drinks' },
]

const urunler = [
  { resim: 'food-1.png', ad: 'Terminal Pizza', puan: 4.9, yorum: 200, fiyat: 60 },
  { resim: 'food-2.png', ad: 'Position Absolute Acı Pizza', puan: 4.9, yorum: 200, fiyat: 60 },
  { resim: 'food-3.png', ad: 'useEffect Tavuklu Burger', puan: 4.9, yorum: 200, fiyat: 60 },
]

function Home() {
  const history = useHistory()

  const handleButton = () => history.push('/order')

  return (
    <>
      <header>
        <img src="/images/iteration-1-images/logo.svg" className="header-logo" alt="Teknolojik Yemekler Logo" />
        <p>fırsatı kaçırma</p>
        <h1>KOD ACIKTIRIR <br />PIZZA, DOYURUR</h1>
        <button onClick={handleButton} data-cy="aciktim-button">ACIKTIM</button>
        <img src="/images/iteration-2-images/pictures/form-banner.png" alt="" className="header-pizza-mobil" />
      </header>

      <main>
        <nav>
          {kategoriler.map((kategori) => (
            <div key={kategori.ad}>
              <a href="#">
                <img src={`/images/iteration-2-images/icons/${kategori.ikon}.svg`} alt="" />
                {kategori.ad}
              </a>
            </div>
          ))}
        </nav>

        <section className="ozel-lezzetler-section">
          <div className="promo-1">
            <h2>Özel<br />Lezzetus</h2>
            <p>Position: Absolute Acı Burger</p>
            <button className="siparisVer" onClick={handleButton}>SİPARİŞ VER</button>
          </div>
          <div className="promo-2">
            <div className="promo-2a">
              <h2>Hackathlon<br />Burger Menü</h2>
              <button className="siparisVer" onClick={handleButton}>SİPARİŞ VER</button>
            </div>
            <div className="promo-2b">
              <h2><span className="renkli">Çoooook</span> hızlı<br />npm gibi kurye</h2>
              <button className="siparisVer" onClick={handleButton}>SİPARİŞ VER</button>
            </div>
          </div>
        </section>

        <section className="menu">
          <p>en çok paketlenen menüler</p>
          <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
          <div className="menu-filtre">
            {menuFiltreleri.map((filtre) => (
              <button key={filtre.ad}>
                <img src={`/images/iteration-2-images/icons/${filtre.ikon}.svg`} alt="" />
                {filtre.ad}
              </button>
            ))}
          </div>
          <div className="urun-listesi">
            {urunler.map((urun) => (
              <UrunKarti key={urun.ad} urun={urun} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home