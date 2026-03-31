import P from '../firebase/Participacion.js'
const url = new URLSearchParams(window.location.search)
const id = url.get("id")
const tbodyh = document.getElementById("resultados")
const caragarVotos = async()=>{
    const Titulo= id==1? "Continente" : "Departamento"
    const datos = id==1? await P.getExtranjero():await P.getNacional()  
    let hmtl = `<tr class="titulo_tabla">
                        <td>${Titulo}</td>
                        <td>TOTAL ASISTENTES</td>
                        <td>% TOTAL ASISTENTES</td>
                        <td>TOTAL AUSENTES</td>
                        <td>% TOTAL AUSENTES</td>
                        <td>ELECTORES HÁBILES</td>
                        </tr>
                        `
    datos.map((P)=>{
        hmtl+= `
            <td>${P.DPD}</td>
                          <td>${P.TV}</td>
                          <td>${P.PTV}</td>
                          <td>${P.TA}</td>
                          <td>${P.PTA}</td>
                          <td>${P.EH}</td>
            </tr>
        `
    })
    tbodyh.innerHTML = hmtl 
}
caragarVotos()