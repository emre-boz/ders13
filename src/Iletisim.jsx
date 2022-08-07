import { useState } from "react";

function Iletisim () {
    const [formalanlari, formalanlariniGuncelle] = useState({});

    const topluGuncelleme = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        formalanlariniGuncelle(values => ({...values, [name]: value}))
    }

    const formGonder = (olay) => {
        olay.preventDefault(); // formun tarayıcı tarafından gönderim işlemi durduruluyor

        if ( !formalanlari.isim || formalanlari.isim.length < 2 ) {
            alert("İsim uzunluğu 2'den küçük olamaz");

            return;
        }

        if ( formalanlari.isim?.length > 10 ) {
            alert("İsim uzunluğu 10'dan büyük olamaz");

            return;
        }

        if ( formalanlari.soyisim?.length > 10 ) {
            alert("Soyisim uzunluğu 10'dan büyük olamaz");
            return;
        }

        if ( formalanlari.telefon?.length > 10 ) {
            alert("Telefon uzunluğu 10'dan büyük olamaz");
            return;
        }

        if ( formalanlari.site?.length > 100 ) {
            alert("Site uzunluğu 100'dan büyük olamaz");
            return;
        }

        alert("Mesajınız gönderildi!");
    }

    return (
        <>
            <form onSubmit={formGonder}>
                <div>
                    <p>İsminiz: </p>
                    <input name="isim" onChange={topluGuncelleme} type="text" />
                    {formalanlari?.isim?.length}
                </div>

                <div>
                    <p>Soyisminiz: </p>
                    <input name="soyisim" onChange={topluGuncelleme} type="text" />
                    {formalanlari?.soyisim?.length}
                </div>

                <div>
                    <p>Telefon: </p>
                    <input name="telefon" onChange={topluGuncelleme} type="text" />
                    {formalanlari?.telefon?.length}
                </div>

                <div>
                    <p>Site Adresiniz: </p>
                    <input name="site" onChange={topluGuncelleme} type="text" />
                    {formalanlari?.site?.length}
                </div>
                
                <div>
                    <p>Bizi Nereden Duydunuz? </p>
                    <select name="neredenduyuldu" onChange={topluGuncelleme}>
                        <option value="Google">Google</option>
                        <option value="Arkadaşlar">Arkadaşlar</option>
                        <option value="İnstagram">İnstagram</option>
                    </select>
                </div>

                <div>
                    <p>Mesajınız: </p>
                    <textarea name="mesaj" onChange={topluGuncelleme} type="text" />
                    {formalanlari?.mesaj?.length}
                </div>



                <button type="submit">Gönder</button>
            </form>
        </>
    )
}

export default Iletisim;