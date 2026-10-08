import { Link } from 'react-router-dom'
import Footer from './Footer'

function Success({ siparis }) {
  if (!siparis) {
    return (
      <>
        <main className="success">
          <p>Sipariş bulunamadı.</p>
          <Link to="/order">Sipariş oluştur</Link>
        </main>
        <Footer />
      </>
    )
  }

  const secimler = siparis.malzemeler.length * 5

  return (
    <>
      <main className="success">
        <img
          className="success-logo"
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler Logo"
        />
        <p className="success-slogan">lezzetin yolda</p>
        <h1>SİPARİŞ ALINDI</h1>
        <hr />

        <h3>Position Absolute Acı Pizza</h3>

        <div className="success-detay">
          <p>Boyut: <strong>{siparis.boyut}</strong></p>
          <p>Hamur: <strong>{siparis.hamur}</strong></p>
          <p>Ek Malzemeler: <strong>{siparis.malzemeler.join(', ')}</strong></p>
        </div>

        <div className="success-toplam">
          <h4>Sipariş Toplamı</h4>
          <p>
            <span>Seçimler</span>
            <span>{secimler}.00₺</span>
          </p>
          <p>
            <span>Toplam</span>
            <span>{85 + secimler}.50₺</span>
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Success