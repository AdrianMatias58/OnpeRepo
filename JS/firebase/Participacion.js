import DBFire from './firebase.js'
import { collection, getDocs,query, where,} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
const Participacion = {}

const Collection1 = "PNacional"
const Collection2 = 'PExtranjero'
const Collection3 = 'Participacion_N_Provincia'
const Collection4 = 'Participacion_Provincia'
const Collection5 = 'DistritosNacionales'
const Collection6 = 'Distritos_Extranjeros'
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
Participacion.get_P_Nacioanl=async(provincia)=>{
    const sql = query(
        collection(DBFire,Collection3), 
        where("nombreDepartamento", "==",provincia )
    )
    const datosF = await getDocs(sql)
    const Lista = datosF.docs.map((item)=>{
        return{
            ...item.data()
        }
    })
    console.log(Lista);
    return Lista
}
Participacion.get_E_Nacioanl=async(provincia)=>{
    const sql = query(
        collection(DBFire,Collection4), 
        where("nombreDepartamento", "==",provincia )
    )
    const datosF = await getDocs(sql)
    const Lista = datosF.docs.map((item)=>{
        return{
            ...item.data()
        }
    })
    console.log(Lista);
    
    return Lista
}
Participacion.get_D_Nacioanl=async(provincia)=>{
    const sql = query(
        collection(DBFire,Collection5), 
        where("nombreProvincia", "==",provincia )
    )
    const datosF = await getDocs(sql)
    const Lista = datosF.docs.map((item)=>{
        return{
            ...item.data()
        }
    })
    console.log(Lista);
    
    return Lista
}
Participacion.get_D_Extranjero=async(nombrepais)=>{
    const sql = query(
        collection(DBFire,Collection6), 
        where("pais", "==",nombrepais)
    )
    const datosF = await getDocs(sql)
    const Lista = datosF.docs.map((item)=>{
        return{
            ...item.data()
        }
    })
    console.log(Lista);
    
    return Lista
}
Participacion.get_D_Extranjero('SUDAFRICA')
Participacion.get_D_Nacioanl('AIJA')

export default Participacion
