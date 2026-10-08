function Footer() {
  return (
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
  )
}

export default Footer;