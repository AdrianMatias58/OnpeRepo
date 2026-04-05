import P from "../firebase/Participacion.js";

const url = new URLSearchParams(window.location.search);
const id = url.get("id");
const provincia = url.get("provincia");
const distrito = url.get("distrito");
const tbodyh = document.getElementById("resultados");

const obtenerDatos = async () => {
  if (distrito) {
    return id == 1
      ? await P.get_D_Extranjero(distrito)
      : await P.get_D_Nacioanl(distrito);
  }

  if (provincia) {
    return id == 1
      ? await P.get_E_Nacioanl(provincia)
      : await P.get_P_Nacioanl(provincia);
  }

  return id == 1 ? await P.getExtranjero() : await P.getNacional();
};

const cargarVotos = async () => {
  let Titulo = "";
  if (distrito) {
    Titulo = id == 1 ? "SEDE" : "DISTRITO";
  } else if (provincia) {
    Titulo = id == 1 ? "PAÍS" : "PROVINCIA";
  } else {
    Titulo = id == 1 ? "CONTINENTE" : "DEPARTAMENTO";
  }

  const datos = await obtenerDatos();

  let html = `
        <tr class="titulo_tabla">
            <td>${Titulo}</td>
            <td>TOTAL ASISTENTES</td>
            <td>% TOTAL ASISTENTES</td>
            <td>TOTAL AUSENTES</td>
            <td>% TOTAL AUSENTES</td>
            <td>ELECTORES HÁBILES</td>
        </tr>
    `;

  datos.forEach((p) => {
    const contenidoCelda = distrito
      ? p.DPD
      : `<a href="participacion_total.html?id=${id}&provincia=${provincia || p.DPD}${provincia ? `&distrito=${p.DPD}` : ""}">
                ${p.DPD}
               </a>`;

    html += `
            <tr>
                <td>${contenidoCelda}</td>
                <td>${p.TV}</td>
                <td>${p.PTV}</td>
                <td>${p.TA}</td>
                <td>${p.PTA}</td>
                <td>${p.EH}</td>
            </tr>
        `;
  });

  tbodyh.innerHTML = html;
};

cargarVotos();
