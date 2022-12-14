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
            <option value="#">??ehir se??in</option>
            <option value="Ankara">Ankara</option>
            <option value="??stanbul">??stanbul</option>
            <option value="??zmir">??zmir</option>
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
                <option value="#">il??e se??in</option>
                <option value="Alt??nda??">Alt??nda??</option>
                <option value="??ankaya">??ankaya</option>
                <option value="Etimesgut">Etimesgut</option>
                <option value="G??lba????">G??lba????</option>
                <option value="Ke??i??ren">Ke??i??ren</option>
                <option value="Yenimahalle">Yenimahalle</option>
                <option value="Di??er">Di??er</option>
              </>
            )}
            {info.sehir === "??stanbul" && (
              <>
                <option value="#">il??e se??in</option>
                <option value="Adalar">Adalar</option>
                <option value="Ata??ehir">Ata??ehir</option>
                <option value="Ba??c??lar">Ba??c??lar</option>
                <option value="Ba??ak??ehir">Ba??ak??ehir</option>
                <option value="Esenyurt">Esenyurt</option>
                <option value="Fatih">Fatih</option>
                <option value="Kad??k??y">Kad??k??y</option>
                <option value="Maltepe">Maltepe</option>
                <option value="Pendik">Pendik</option>
                <option value="Di??er">Di??er</option>
              </>
            )}
            {info.sehir === "??zmir" && (
              <>
                <option value="#">il??e se??in</option>
                <option value="Alia??a">Alia??a</option>
                <option value="Bal??ova">Bal??ova</option>
                <option value="Bornova">Bornova</option>
                <option value="??e??me3">??e??me</option>
                <option value="Dikili">Dikili</option>
                <option value="Gaziemir">Gaziemir</option>
                <option value="Karaba??lar">Karaba??lar</option>
                <option value="Konak">Konak</option>
                <option value="Seferihisar">Seferihisar</option>
                <option value="Torbal??">Torbal??</option>
                <option value="Urla">Urla</option>
                <option value="Di??er">Di??er</option>
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
            <option value="#">S??n??f Se??in</option>
            <option value="1.S??n??f">1.S??n??f</option>
            <option value="2.S??n??f">2.S??n??f</option>
            <option value="3.S??n??f">3.S??n??f</option>
            <option value="4.S??n??f">4.S??n??f</option>
            <option value="5.S??n??f">5.S??n??f</option>
            <option value="6.S??n??f">6.S??n??f</option>
            <option value="7.S??n??f">7.S??n??f</option>
            <option value="8.S??n??f">8.S??n??f</option>
            <option value="9.S??n??f">9.S??n??f</option>
            <option value="10.S??n??f">10.S??n??f</option>
            <option value="11.S??n??f">11.S??n??f</option>
            <option value="11.S??n??f">12.S??n??f</option>
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
            placeholder="Anne Ad??"
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
            <option value="#">Annenin Mesle??i</option>
            <option value="Acentac??">Acentac??</option>
            <option value="A??????">A??????</option>
            <option value="Artist">Artist</option>
            <option value="Bankac??">Bankac??</option>
            <option value="Borsac??">Borsac??</option>
            <option value="Doktor">Doktor</option>
            <option value="Eczac??">Eczac??</option>
            <option value="Esnaf">Esnaf</option>
            <option value="Hakim">Hakim</option>
            <option value="Kuaf??r">Kuaf??r</option>
            <option value="Kasiyer">Kasiyer</option>
            <option value="Laborant">Laborant</option>
            <option value="Makinist">Makinist</option>
            <option value="Memur">Memur</option>
            <option value="Muhasebeci">Muhasebeci</option>
            <option value="M??hendis">M??hendis</option>
            <option value="Sanat????">Sanat????</option>
            <option value="Di??er">Di??er</option>
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
            placeholder="Baba Ad??"
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
            <option value="#">Baban??n Mesle??i</option>
            <option value="Acentac??">Acentac??</option>
            <option value="A??????">A??????</option>
            <option value="Artist">Artist</option>
            <option value="Bankac??">Bankac??</option>
            <option value="Borsac??">Borsac??</option>
            <option value="Doktor">Doktor</option>
            <option value="Eczac??">Eczac??</option>
            <option value="Esnaf">Esnaf</option>
            <option value="Hakim">Hakim</option>
            <option value="Kuaf??r">Kuaf??r</option>
            <option value="Kasiyer">Kasiyer</option>
            <option value="Laborant">Laborant</option>
            <option value="Makinist">Makinist</option>
            <option value="Memur">Memur</option>
            <option value="Muhasebeci">Muhasebeci</option>
            <option value="M??hendis">M??hendis</option>
            <option value="Sanat????">Sanat????</option>
            <option value="Di??er">Di??er</option>
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
            <option value="#">Randevu Kayna????</option>
            <option value="Data">Data</option>
            <option value="Referans">Referans</option>
            <option value="Pasif ????renci">Pasif ????renci</option>
            <option value="Kay??t Yenileme">Kay??t Yenileme</option>
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
            <option value="#">E??itim Dan????man??n?? Se??in</option>
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
            <option value="#">Y??zy??ze G??r????me</option>
            <option value="Online G??r????me">Online G??r????me</option>
            <option value="Y??zy??ze G??r????me">Y??zy??ze G??r????me</option>
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
            placeholder="G??r????me Tarihi"
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
          <label>Yeni Kay??t</label>
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
//     dan??sman: "",
//     yuzGor: "",
//     gorTarih: "",
//     genelNot: "",
