import './App.css'
import CarteiraDeIdentidade from './components/identidade/carteira-de-identidade'
import IdPhoto from './assets/mugshot.jpg'

function App() {
  const infos = [
    {photo: IdPhoto,  Id: "Lindsay Lohan", data:" 11/05/1994", nat: "Cearense", nac: "Brasileira"},
  ]

  return (
    <>
      
        {infos.map((item) => {
          return(
            <CarteiraDeIdentidade 
              img = {item.photo}
              Id = {item.Id}
              Data = {item.data}
              Nac = {item.nac}
              Nat = {item.nat}
            />
          );
        })}

    </>
  )
}

export default App
