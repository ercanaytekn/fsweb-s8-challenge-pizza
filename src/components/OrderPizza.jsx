import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { boyutlar, hamurlar, malzemeler } from '../data'

function OrderPizza({ setSiparis }) {
  const history = useHistory()

  const [formData, setFormData] = useState({
    isim: '',
    boyut: '',
    hamur: '',
    malzemeler: [],
    ozel: '',
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

  function handleSubmit(e) {
    e.preventDefault()
    if (!isValid) return

    axios
      .post('https://reqres.in/api/pizza', formData, {
        headers: { 'x-api-key': 'reqres_fc62cc3416064088aa12a0a9fd728f74' },
      })
      .then((res) => {
        console.log(res.data)
        setSiparis(res.data)
        history.push('/success')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <header>
        <img src="/images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler Logo" />
        <nav>
          <Link to="/">Anasayfa</Link> - <strong>Sipariş Oluştur</strong>
        </nav>
      </header>

      <main>
        <h2>Position Absolute Acı Pizza</h2>
        <p>85.50₺</p>
        <p>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="isim">İsim</label>
            <input
              type="text"
              id="isim"
              name="isim"
              data-cy="isim-input"
              value={formData.isim}
              onChange={handleChange}
            />
            {formErrors.isim && <p>{formErrors.isim}</p>}
          </div>

          <div>
            <h3>Boyut Seç</h3>
            {boyutlar.map((boyut) => (
              <div key={boyut}>
                <input
                  type="radio"
                  id={`boyut-${boyut}`}
                  name="boyut"
                  value={boyut}
                  checked={formData.boyut === boyut}
                  onChange={handleChange}
                  data-cy="boyut-radio"
                />
                <label htmlFor={`boyut-${boyut}`}>{boyut}</label>
              </div>
            ))}
            {formErrors.boyut && <p>{formErrors.boyut}</p>}
          </div>

          <div>
            <label htmlFor="hamur">Hamur Seç</label>
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
            {formErrors.hamur && <p>{formErrors.hamur}</p>}
          </div>

          <div>
            <h3>Ek Malzemeler</h3>
            <p>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</p>
            {malzemeler.map((malzeme) => (
              <div key={malzeme}>
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
            {formErrors.malzemeler && <p>{formErrors.malzemeler}</p>}
          </div>

          <div>
            <label htmlFor="ozel">Sipariş Notu</label>
            <textarea
              id="ozel"
              name="ozel"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              value={formData.ozel}
              onChange={handleChange}
            />
          </div>

          <button type="submit" data-cy="submit-button" disabled={!isValid}>
            SİPARİŞ VER
          </button>
        </form>
      </main>
    </>
  )
}

export default OrderPizza