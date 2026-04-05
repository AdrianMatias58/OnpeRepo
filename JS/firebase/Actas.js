import DBFirebase from "./firebase.js";
import { collection, getDocs,query, where,} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
const Actas = {}

Actas.getDepartamentos = async (ambito)=>{
    const nombreColeccion = ambito =="PERU" ? "PNacional":"PExtranjero"
    const  datos = await getDocs(collection(DBFirebase,nombreColeccion))
    const Lista = datos.docs.map((item)=>{
        return{nombreDepartamento : item.data().DPD}
    })
    console.log(Lista);
    return Lista
}
Actas.getPorvinciaByDepartamento = async (nombreDepartamento, ambito)=>{
    const nombreColeccion = ambito =="PERU" ? "Participacion_N_Provincia":"Participacion_Provincia"
    const sql = query(
        collection(DBFirebase,nombreColeccion),
        where("nombreDepartamento","==",nombreDepartamento)
    )
    const datos = await getDocs(sql)
    const Lista = datos.docs.map((item)=>{
        return{nombreProvincia : item.data().DPD}
    })
    console.log(Lista);
    return Lista
}
Actas.getDistritoByProvincia = async (nombreProvincia, ambito)=>{
    const nombreColeccion = ambito =="PERU" ? "DistritosNacionales":"Distritos_Extranjeros"
    const campoFiltrar = ambito =="PERU" ? "nombreProvincia":"pais"
    const sql = query(
        collection(DBFirebase,nombreColeccion),
        where(campoFiltrar,"==",nombreProvincia)
    )
    const datos = await getDocs(sql)
    const Lista = datos.docs.map((item)=>{
        return{nombreDistrito : item.data().DPD}
    })
    console.log(Lista);
    return Lista
}
Actas.getLocalesByDistrito = async (nombreDistrito, ambito = "PERU")=>{
    const nombreColeccion = ambito =="PERU" ? "Locales_Nacionales":"Locales_Extranjeros"
    const sql = query(
        collection(DBFirebase,nombreColeccion),
        where("nombreDistrito","==",nombreDistrito)
    )
    const datosF =await getDocs(sql)
    const Lista = datosF.docs.map((item)=>{
        return{
            idLocal : item.data().idLocalVotacion,
            RazonSocial : item.data().RazonSocial
        }
    }
    )
    console.log(Lista);
    return Lista
}
Actas.getGruposByLocal = async (idLocal, ambito = "PERU")=>{
    const nombreColeccion = ambito =="PERU" ? "Grupos_Nacionales":"Grupos_Extranjeros"
    const sql = query(
        collection(DBFirebase,nombreColeccion),
        where("idLocalVotacion","==",idLocal)
    )
    const datosF =await getDocs(sql)
    const Lista = datosF.docs.map((item)=>{
        return{
            idGrupo : item.data().idGrupoVotacion
        }
    }
    )
    console.log(Lista);
    return Lista
}
Actas.getDatosGrupo = async (idGrupo)=>{
    const nombreColeccion = "Datos_Mesa_ N"
    const sql = query(
        collection(DBFirebase,nombreColeccion),
        where("idGrupoVotacion","==",idGrupo)
    )
    const datosF =await getDocs(sql)
    const Lista = datosF.docs.map((item)=>{
        return{
            ...item.data()
        }
    }
    )
    console.log(Lista);
    return Lista
}
export default Actas


