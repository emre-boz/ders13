import { useState } from "react";

function App() {

  const [bilgi, bilgiGuncelle] = useState("");

  const fonksiyon1 = ()=>{
    console.log("Buton tıklandı!");
  }

  const fonksiyon2 = (e)=>{ 
    bilgiGuncelle(e.target.value);
  } 


  return (
    <>
      <input onChange={ fonksiyon2 } type="text" />
      <button onClick={ fonksiyon1 }>Uyarı</button>
      <p>{bilgi.length > 10 ? "10 karakteri geçemez" : ""}</p>
    </>
  );
}

export default App;

