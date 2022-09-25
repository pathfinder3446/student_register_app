import { useState } from "react";
import Pagination from "../components/Pagination";

function Table({ infos, setInfos }) {
  const [filtered, setFiltered] = useState("");
  const [filtered1, setFiltered1] = useState("");
  console.log(infos);
  const handleSubmit = (e) => {
    setFiltered1(filtered)
    e.preventDefault();
      };

  const handleDelete = ((id) => {
    console.log(id)
    setInfos(infos.filter((item) => item.id !== id
    ));
  });

  return (
    <div>
      <div className="filter-box">
        <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Öğrenci ismine göre arama"
            aria-label="Search"
            value={filtered}
            onChange={(e) => setFiltered(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Filtrele
          </button>
        </form>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Tarih</th>
            <th scope="col">Ad Soyad</th>
            <th scope="col">İl / İlçe</th>
            <th scope="col">Anne Adı</th>
            <th scope="col">Anne Tel</th>
            <th scope="col">Eğitim Danışmanı</th>
            <th scope="col">Randevu Kaynağı</th>
            <th scope="col">Kayıt Tipi</th>
            <th scope="col">Görüşme Tipi</th>
            <th scope="col">Durumu</th>
            <th scope="col">Konfirme</th>
            <th scope="col">İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {infos?.map((i, index) => {
            return (
              <tr key={index}>
                {i.adSoyad.includes(filtered1) && (
                  <>
                    <td>{i.gorTarih}</td>
                    <td>{i.adSoyad}</td>
                    <td>
                      {i.sehir}/{i.ilce}
                    </td>
                    <td>{i.anneAdi}</td>
                    <td>{i.anneTel}</td>
                    <td>{i.danisman}</td>
                    <td>{i.randevuKaynak}</td>
                    <td>Yeni Kayıt</td>
                    <td>{i.yuzGor}</td>
                    <td>Beklemede</td>
                    <td>Yapılmadı</td>
                    <td className="buttons">
                      <button className="btn btn-success">Görüntüle</button>
                      <button className="btn btn-warning">Güncelle</button>
                      <button onClick={() => handleDelete(i.id)} className="btn btn-danger">Sil</button>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default Table;
