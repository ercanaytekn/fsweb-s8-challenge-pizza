function UrunKarti({ urun }) {
  return (
    <div className="urun-karti">
      <img src={`/images/iteration-2-images/pictures/${urun.resim}`} alt={urun.ad} />
      <h3>{urun.ad}</h3>
      <div className="urun-bilgi">
        <span className="puan">{urun.puan}</span>
        <span className="yorum">({urun.yorum})</span>
        <span className="fiyat">{urun.fiyat}₺</span>
      </div>
    </div>
  )
}

export default UrunKarti