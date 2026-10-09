import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { boyutlar, hamurlar, malzemeler } from '../data'
import { fiyatYaz } from '../fiyat'
import Footer from './Footer'

function OrderPizza({ setSiparis }) {
  const history = useHistory()

  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    hamur: '',
    malzemeler: [],
    ozel: '',
    adet: 1,
  })

  const [formErrors, setFormErrors] = useState({
    isim: '',
    boyut: '',
    hamur: '',
    malzemeler: '',
  })

  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    if (
      formData.isim.length >= 3 &&
      formData.boyut !== '' &&
      formData.hamur !== '' &&
      formData.malzemeler.length >= 4 &&
      formData.malzemeler.length <= 10
    ) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [formData])

  function validate(name, value) {
    if (name === 'isim') {
      if (value.length < 3) {
        return 'İsim en az 3 karakter olmalı'
      }
    }

    if (name === 'boyut') {
      if (value === '') {
        return 'Boyut seçmelisin'
      }
    }

    if (name === 'hamur') {
      if (value === '') {
        return 'Hamur seçmelisin'
      }
    }

    if (name === 'malzemeler') {
      if (value.length < 4 || value.length > 10) {
        return 'En az 4, en fazla 10 malzeme seçmelisin'
      }
    }

    return ''
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setFormErrors({ ...formErrors, [name]: validate(name, value) })
  }

  function handleCheckbox(e) {
    const { value, checked } = e.target
    let yeniMalzemeler

    if (checked) {
      yeniMalzemeler = [...formData.malzemeler, value]
    } else {
      yeniMalzemeler = formData.malzemeler.filter((m) => m !== value)
    }

    setFormData({ ...formData, malzemeler: yeniMalzemeler })
    setFormErrors({
      ...formErrors,
      malzemeler: validate('malzemeler', yeniMalzemeler),
    })
  }

  function adetArtir() {
    setFormData({ ...formData, adet: formData.adet + 1 })
  }

  function adetAzalt() {
    if (formData.adet > 1) {
      setFormData({ ...formData, adet: formData.adet - 1 })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!isValid) return

    axios
      .post('https://reqres.in/api/pizza', formData, {
        headers: { 'x-api-key': import.meta.env.VITE_REQRES_KEY },
      })
      .then((res) => {
        console.log(res.data)
        setSiparis(res.data)
        history.push('/success')
      })
      .catch((err) => console.log(err))
  }

  const secimler = formData.malzemeler.length * 5 * formData.adet
  const toplam = 85.5 * formData.adet + secimler

  return (
    <div className="order-page">
      <header>
        <img
          className="order-logo"
          src="/images/iteration-1-images/logo.svg"
          alt="Teknolojik Yemekler Logo"
        />
      </header>

      <main>
        <section className="pizza-bolumu">
          <img
            className="order-banner"
            src="/images/iteration-2-images/pictures/form-banner.png"
            alt="Position Absolute Acı Pizza"
          />

          <div className="sutun">
            <nav>
              <Link to="/">Anasayfa</Link> - <strong>Sipariş Oluştur</strong>
            </nav>

            <h2 className="pizza-adi">Position Absolute Acı Pizza</h2>

            <div className="fiyat-satiri">
              <span className="pizza-fiyat">85.50₺</span>
              <span className="pizza-puan">4.9</span>
              <span className="pizza-yorum">(200)</span>
            </div>

            <p className="aciklama">
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
              Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra
              geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
              yemektir.. Küçük bir pizzaya bazen pizzetta denir.
            </p>
          </div>
        </section>

        <section className="form-bolumu">
          <form className="sutun" onSubmit={handleSubmit}>
            <div className="secim-satiri">
              <div className="boyut-alani">
                <h3>
                  Boyut Seç <span className="zorunlu">*</span>
                </h3>
                <div className="boyut-secenekleri">
                  {boyutlar.map((boyut, i) => (
                    <div className="radyo" key={boyut}>
                      <input
                        type="radio"
                        id={`boyut-${boyut}`}
                        name="boyut"
                        value={boyut}
                        data-harf={['S', 'M', 'L'][i]}
                        checked={formData.boyut === boyut}
                        onChange={handleChange}
                        data-cy="boyut-radio"
                      />
                      <label htmlFor={`boyut-${boyut}`}>{boyut}</label>
                    </div>
                  ))}
                </div>
                {formErrors.boyut && <p className="hata">{formErrors.boyut}</p>}
              </div>

              <div className="hamur-alani">
                <label htmlFor="hamur" className="baslik">
                  Hamur Seç <span className="zorunlu">*</span>
                </label>
                <select
                  id="hamur"
                  name="hamur"
                  value={formData.hamur}
                  onChange={handleChange}
                  data-cy="hamur-select"
                >
                  <option value="">Hamur Kalınlığı</option>
                  {hamurlar.map((hamur) => (
                    <option key={hamur} value={hamur}>{hamur}</option>
                  ))}
                </select>
                {formErrors.hamur && <p className="hata">{formErrors.hamur}</p>}
              </div>
            </div>

            <div className="malzeme-alani">
              <h3>Ek Malzemeler</h3>
              <p className="alt-yazi">En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>
              <div className="malzeme-listesi">
                {malzemeler.map((malzeme) => (
                  <div className="malzeme" key={malzeme}>
                    <input
                      type="checkbox"
                      id={`malzeme-${malzeme}`}
                      name="malzemeler"
                      value={malzeme}
                      checked={formData.malzemeler.includes(malzeme)}
                      onChange={handleCheckbox}
                      data-cy="malzeme-checkbox"
                    />
                    <label htmlFor={`malzeme-${malzeme}`}>{malzeme}</label>
                  </div>
                ))}
              </div>
              {formErrors.malzemeler && <p className="hata">{formErrors.malzemeler}</p>}
            </div>

            <div className="alan">
              <label htmlFor="isim" className="baslik">İsim</label>
              <input
                type="text"
                id="isim"
                name="isim"
                placeholder="Adınızı yazın"
                data-cy="isim-input"
                value={formData.isim}
                onChange={handleChange}
              />
              {formErrors.isim && <p className="hata">{formErrors.isim}</p>}
            </div>

            <div className="alan">
              <label htmlFor="ozel" className="baslik">Sipariş Notu</label>
              <textarea
                id="ozel"
                name="ozel"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                value={formData.ozel}
                onChange={handleChange}
              />
            </div>

            <hr />

            <div className="alt-satir">
              <div className="sayac">
                <button type="button" onClick={adetAzalt} aria-label="Adedi azalt">-</button>
                <span>{formData.adet}</span>
                <button type="button" onClick={adetArtir} aria-label="Adedi artır">+</button>
              </div>

              <div className="toplam-karti">
                <div className="toplam-icerik">
                  <h3>Sipariş Toplamı</h3>
                  <div className="toplam-satir">
                    <span>Seçimler</span>
                    <span>{fiyatYaz(secimler)}₺</span>
                  </div>
                  <div className="toplam-satir toplam">
                    <span>Toplam</span>
                    <span>{fiyatYaz(toplam)}₺</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="siparis-butonu"
                  data-cy="submit-button"
                  disabled={!isValid}
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default OrderPizza