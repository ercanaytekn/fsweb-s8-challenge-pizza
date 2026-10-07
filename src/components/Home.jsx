function Home() {
    return (
        <>
            <header>
                <img src="/images/iteration-1-images/logo.svg" className="header-logo" alt="Teknolojik Yemekler Logo" />
                <p>fırsatı kaçırma</p>
                <h1>KOD ACIKTIRIR <br />PIZZA, DOYURUR</h1>
                <button>ACIKTIM</button>
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
                        <button className="siparisVer">SİPARİŞ VER</button>
                    </div>
                    <div className="promo-2">
                        <div className="promo-2a">
                            <h2>Hackathlon<br />Burger Menü</h2>
                            <button className="siparisVer">SİPARİŞ VER</button>
                        </div>
                        <div className="promo-2b">
                            <h2><span className="renkli">Çoooook</span> hızlı<br />npm gibi kurye</h2>
                            <button className="siparisVer">SİPARİŞ VER</button>
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

            <footer>
                <div className="footer-ust">
                    <div className="iletisim">
                        <img src="/images/iteration-2-images/footer/logo-footer.svg" className="footer-logo" alt="Teknolojik Yemekler Logo" />
                        <ul>
                            <li><img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Teknolojik Yemekler Adres Bilgisi" />341 Londonderry Road,<br />Istanbul Türkiye</li>
                            <li><img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Teknolojik Yemekler Eposta Adresi" />aciktim@teknolojikyemekler.com</li>
                            <li><img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Teknolojik Yemekler Telefon Numarası" />+90 216 123 45 67</li>
                        </ul>
                    </div>
                    <div className="hotmenu">
                        <h3>Hot Menu</h3>
                        <ul>
                            <li>Terminal Pizza</li>
                            <li>5 Kişilik Hackathlon Pizza</li>
                            <li>useEffect Tavuklu Pizza</li>
                            <li>Beyaz Console Frosty</li>
                            <li>Testler Geçti Mutlu Burger</li>
                            <li>Position Absolute Acı Burger</li>
                        </ul>
                    </div>
                    <div className="instagram">
                        <h3>Instagram</h3>
                        <div className="instagram-grid">
                            <a href="#"><img src="/images/iteration-2-images/footer/insta/li-0.png" alt="Instagram gönderisi 1" /></a>
                            <a href="#"><img src="/images/iteration-2-images/footer/insta/li-1.png" alt="Instagram gönderisi 2" /></a>
                            <a href="#"><img src="/images/iteration-2-images/footer/insta/li-2.png" alt="Instagram gönderisi 3" /></a>
                            <a href="#"><img src="/images/iteration-2-images/footer/insta/li-3.png" alt="Instagram gönderisi 4" /></a>
                            <a href="#"><img src="/images/iteration-2-images/footer/insta/li-4.png" alt="Instagram gönderisi 5" /></a>
                            <a href="#"><img src="/images/iteration-2-images/footer/insta/li-5.png" alt="Instagram gönderisi 6" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-alt">
                    <div className="footer-alt-inner">
                        <p>© 2023 Teknolojik Yemekler.</p>
                        <a href="#"><img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/twitter.svg" alt="Twitter" className="twitter-icon" /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home