import { useHistory } from 'react-router-dom'
import Footer from './Footer'

function Home() {
  const history = useHistory()

  const handleButton = () => history.push("/order")

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
          <div><a href="#"><img src="/images/iteration-2-images/icons/1.svg" alt="" />YENİ! Kore</a></div>
          <div><a href="#"><img src="/images/iteration-2-images/icons/2.svg" alt="" />Pizza</a></div>
          <div><a href="#"><img src="/images/iteration-2-images/icons/3.svg" alt="" />Burger</a></div>
          <div><a href="#"><img src="/images/iteration-2-images/icons/4.svg" alt="" />Kızartmalar</a></div>
          <div><a href="#"><img src="/images/iteration-2-images/icons/5.svg" alt="" />Fast Food</a></div>
          <div><a href="#"><img src="/images/iteration-2-images/icons/6.svg" alt="" />Gazlı İçecek</a></div>
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
            <button><img src="/images/iteration-2-images/icons/1.svg" alt="" />Ramen</button>
            <button><img src="/images/iteration-2-images/icons/2.svg" alt="" />Pizza</button>
            <button><img src="/images/iteration-2-images/icons/3.svg" alt="" />Burger</button>
            <button><img src="/images/iteration-2-images/icons/4.svg" alt="" />French fries</button>
            <button><img src="/images/iteration-2-images/icons/5.svg" alt="" />Fast food</button>
            <button><img src="/images/iteration-2-images/icons/6.svg" alt="" />Soft drinks</button>
          </div>
          <div className="urun-listesi">
            <div className="urun-karti">
              <img src="/images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" />
              <h3>Terminal Pizza</h3>
              <div className="urun-bilgi">
                <span className="puan">4.9</span>
                <span className="yorum">(200)</span>
                <span className="fiyat">60₺</span>
              </div>
            </div>
            <div className="urun-karti">
              <img src="/images/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
              <h3>Position Absolute Acı Pizza</h3>
              <div className="urun-bilgi">
                <span className="puan">4.9</span>
                <span className="yorum">(200)</span>
                <span className="fiyat">60₺</span>
              </div>
            </div>
            <div className="urun-karti">
              <img src="/images/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
              <h3>useEffect Tavuklu Burger</h3>
              <div className="urun-bilgi">
                <span className="puan">4.9</span>
                <span className="yorum">(200)</span>
                <span className="fiyat">60₺</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default Home