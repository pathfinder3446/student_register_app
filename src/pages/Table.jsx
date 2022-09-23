import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";


function Table() {
  // const { state } = useLocation
  const [info, setInfo] = useState({});

useEffect(() => {
  const info = JSON.parse(localStorage.getItem('info'));
  if (info) {
   setInfo(info);
  }
}, []);
  console.log(info.adSoyad)
  return (
    <div>
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
          <tr>
            <td>{info.gorTarih}</td>
            <td>{info.adSoyad}</td>
            <td>{info.sehir}/{info.ilce}</td>
            <td>{info.anneAdi}</td>
            <td>{info.anneTel}</td>
            <td>{info.danisman}</td>
            <td>{info.randevuKaynak}</td>
            <td>Yeni Kayıt</td>
            <td>{info.yuzGor}</td>
            <td>Beklemede</td>
            <td>Yapılmadı</td>
            <td className="buttons">
              <button className="btn btn-success">Görüntüle</button>
              <button className="btn btn-warning">Güncelle</button>
              <button className="btn btn-danger">Sil</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
