import DBFire from './firebase.js'
import { collection, getDocs} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
const Participacion = {}

const Collection1 = "PNacional"
const Collection2 = 'PExtranjero'

Participacion.getNacional = async ()=>{
    const Coleccion = collection(DBFire,Collection1)
    const datosF = await getDocs(Coleccion)
    const Lista = datosF.docs.map((item)=>{
        return{
            ...item.data()
        }
    })
    console.log(Lista);
    return Lista
}
Participacion.getExtranjero = async ()=>{
    const Coleccion = collection(DBFire,Collection2)
    const datosF = await getDocs(Coleccion)
    const Lista = datosF.docs.map((item)=>{
        return{
            ...item.data()
        }
    })
    console.log(Lista);
    
    return Lista
}
Participacion.getExtranjero()
Participacion.getNacional()
export default Participacion
