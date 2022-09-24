import FilterBox from "../components/FilterBox";
import Pagination from "../components/Pagination";

function Table({ infos, setInfos }) {
  console.log(infos);

  return (
    <div>
      <FilterBox infos={infos} setInfos={setInfos} />
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
                  <button className="btn btn-danger">Sil</button>
                </td>
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
