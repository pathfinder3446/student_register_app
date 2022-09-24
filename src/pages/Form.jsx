import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form({ infos, setInfos }) {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    adSoyad: "",
    sehir: "",
    ilce: "",
    sinif: "",
    anneAdi: "",
    anneTel: "",
    anneMeslek: "",
    babaAdi: "",
    babaTel: "",
    babaMeslek: "",
    adres: "",
    randevuKaynak: "",
    danisman: "",
    yuzGor: "",
    gorTarih: "",
    genelNot: "",
    yeniKayit: "",
  });

  const handleFormValues = (e) => {
    setInfo({...info, [e.target.name] : e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const newInfo = {
      id: id,
      adSoyad: info.adSoyad,
      sehir: info.sehir,
      ilce: info.ilce,
      sinif: info.sinif,
      anneAdi: info.anneAdi,
      anneTel: info.anneTel,
      anneMeslek: info.anneMeslek,
      babaAdi: info.babaAdi,
      babaTel: info.babaTel,
      babaMeslek: info.babaMeslek,
      adres: info.adres,
      randevuKaynak: info.randevuKaynak,
      danisman: info.danisman,
      yuzGor: info.yuzGor,
      gorTarih: info.gorTarih,
      genelNot: info.genelNot,
      yeniKayit: info.yeniKayit,
    };
    setInfos([...infos, newInfo]);
    setInfo({});
    navigate("/form/table")
  };

 
  console.log(infos);
  return (
    <div className="form-container border border-dark-2 ">
      <label className="form-header">
        <h5>Randevu Formu</h5>
      </label>
      <form className="form m-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Ad Soyad"
            name="adSoyad"
            value={info.adSoyad}
            onChange={handleFormValues}
            required
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="sehir"
            value={info.sehir}
            onChange={handleFormValues}
            required
          >
            <option value="#">Şehir seçin</option>
            <option value="Ankara">Ankara</option>
            <option value="İstanbul">İstanbul</option>
            <option value="İzmir">İzmir</option>
          </select>
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="ilce"
            value={info.ilce}
            onChange={handleFormValues}
            // required
          >
            {info.sehir === "Ankara" && (
              <>
                <option value="#">ilçe seçin</option>
                <option value="Altındağ">Altındağ</option>
                <option value="Çankaya">Çankaya</option>
                <option value="Etimesgut">Etimesgut</option>
                <option value="Gölbaşı">Gölbaşı</option>
                <option value="Keçiören">Keçiören</option>
                <option value="Yenimahalle">Yenimahalle</option>
                <option value="Diğer">Diğer</option>
              </>
            )}
            {info.sehir === "İstanbul" && (
              <>
                <option value="#">ilçe seçin</option>
                <option value="Adalar">Adalar</option>
                <option value="Ataşehir">Ataşehir</option>
                <option value="Bağcılar">Bağcılar</option>
                <option value="Başakşehir">Başakşehir</option>
                <option value="Esenyurt">Esenyurt</option>
                <option value="Fatih">Fatih</option>
                <option value="Kadıköy">Kadıköy</option>
                <option value="Maltepe">Maltepe</option>
                <option value="Pendik">Pendik</option>
                <option value="Diğer">Diğer</option>
              </>
            )}
            {info.sehir === "İzmir" && (
              <>
                <option value="#">ilçe seçin</option>
                <option value="Aliağa">Aliağa</option>
                <option value="Balçova">Balçova</option>
                <option value="Bornova">Bornova</option>
                <option value="Çeşme3">Çeşme</option>
                <option value="Dikili">Dikili</option>
                <option value="Gaziemir">Gaziemir</option>
                <option value="Karabağlar">Karabağlar</option>
                <option value="Konak">Konak</option>
                <option value="Seferihisar">Seferihisar</option>
                <option value="Torbalı">Torbalı</option>
                <option value="Urla">Urla</option>
                <option value="Diğer">Diğer</option>
              </>
            )}
          </select>
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="sinif"
            value={info.sinif}
            onChange={handleFormValues}
            required
          >
            <option value="#">Sınıf Seçin</option>
            <option value="1.Sınıf">1.Sınıf</option>
            <option value="2.Sınıf">2.Sınıf</option>
            <option value="3.Sınıf">3.Sınıf</option>
            <option value="4.Sınıf">4.Sınıf</option>
            <option value="5.Sınıf">5.Sınıf</option>
            <option value="6.Sınıf">6.Sınıf</option>
            <option value="7.Sınıf">7.Sınıf</option>
            <option value="8.Sınıf">8.Sınıf</option>
            <option value="9.Sınıf">9.Sınıf</option>
            <option value="10.Sınıf">10.Sınıf</option>
            <option value="11.Sınıf">11.Sınıf</option>
            <option value="11.Sınıf">12.Sınıf</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="anneAdi"
            name="anneAdi"
            value={info.anneAdi}
            onChange={handleFormValues}
            placeholder="Anne Adı"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="anneTel"
            name="anneTel"
            value={info.anneTel}
            onChange={handleFormValues}
            placeholder="Anne Tel"
            required
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="anneMeslek"
            value={info.anneMeslek}
            onChange={handleFormValues}
            required
          >
            <option value="#">Annenin Mesleği</option>
            <option value="Acentacı">Acentacı</option>
            <option value="Aşçı">Aşçı</option>
            <option value="Artist">Artist</option>
            <option value="Bankacı">Bankacı</option>
            <option value="Borsacı">Borsacı</option>
            <option value="Doktor">Doktor</option>
            <option value="Eczacı">Eczacı</option>
            <option value="Esnaf">Esnaf</option>
            <option value="Hakim">Hakim</option>
            <option value="Kuaför">Kuaför</option>
            <option value="Kasiyer">Kasiyer</option>
            <option value="Laborant">Laborant</option>
            <option value="Makinist">Makinist</option>
            <option value="Memur">Memur</option>
            <option value="Muhasebeci">Muhasebeci</option>
            <option value="Mühendis">Mühendis</option>
            <option value="Sanatçı">Sanatçı</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="babaAdi"
            name="babaAdi"
            value={info.babaAdi}
            onChange={handleFormValues}
            placeholder="Baba Adı"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="babaTel"
            name="babaTel"
            value={info.babaTel}
            onChange={handleFormValues}
            placeholder="Baba Tel"
            required
          />
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="babaMeslek"
            value={info.babaMeslek}
            onChange={handleFormValues}
            required
          >
            <option value="#">Babanın Mesleği</option>
            <option value="Acentacı">Acentacı</option>
            <option value="Aşçı">Aşçı</option>
            <option value="Artist">Artist</option>
            <option value="Bankacı">Bankacı</option>
            <option value="Borsacı">Borsacı</option>
            <option value="Doktor">Doktor</option>
            <option value="Eczacı">Eczacı</option>
            <option value="Esnaf">Esnaf</option>
            <option value="Hakim">Hakim</option>
            <option value="Kuaför">Kuaför</option>
            <option value="Kasiyer">Kasiyer</option>
            <option value="Laborant">Laborant</option>
            <option value="Makinist">Makinist</option>
            <option value="Memur">Memur</option>
            <option value="Muhasebeci">Muhasebeci</option>
            <option value="Mühendis">Mühendis</option>
            <option value="Sanatçı">Sanatçı</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="adres"
            name="adres"
            value={info.adres}
            onChange={handleFormValues}
            placeholder="Adres"
            required
          />
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="randevuKaynak"
            value={info.randevuKaynak}
            onChange={handleFormValues}
            required
          >
            <option value="#">Randevu Kaynağı</option>
            <option value="Data">Data</option>
            <option value="Referans">Referans</option>
            <option value="Pasif Öğrenci">Pasif Öğrenci</option>
            <option value="Kayıt Yenileme">Kayıt Yenileme</option>
          </select>
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="danisman"
            value={info.danisman}
            onChange={handleFormValues}
            required
          >
            <option value="#">Eğitim Danışmanını Seçin</option>
            <option value="Test">Test</option>
          </select>
        </div>

        <div className="mb-3">
          <select
            className="form-select"
            aria-label="Default select example"
            name="yuzGor"
            value={info.yuzGor}
            onChange={handleFormValues}
            required
          >
            <option value="#">Yüzyüze Görüşme</option>
            <option value="Online Görüşme">Online Görüşme</option>
            <option value="Yüzyüze Görüşme">Yüzyüze Görüşme</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            id="tarih"
            name="gorTarih"
            value={info.gorTarih}
            onChange={handleFormValues}
            placeholder="Görüşme Tarihi"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="notlar"
            name="genelNot"
            value={info.genelNot}
            onChange={handleFormValues}
            required
          />
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="yeniKayit"
            id="yeniKayit"
            value={info.yeniKayit}
            onChange={handleFormValues}
            required
          />
          <label>Yeni Kayıt</label>
        </div>
        <button type="submit" className="btn-submit btn btn-success">
          Kaydet
        </button>
      </form>
    </div>
  );
}

export default Form;

// adSoyad: "",
//     sehir: "",
//     ilce: "",
//     sinif: "",
//     anneAdi: "",
//     anneTel: "",
//     anneMeslek: "",
//     babaAdi: "",
//     babaTel: "",
//     babaMeslek: "",
//     adres: "",
//     randevuKaynak: "",
//     danısman: "",
//     yuzGor: "",
//     gorTarih: "",
//     genelNot: "",
