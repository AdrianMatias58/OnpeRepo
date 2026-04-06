import FbActas from "../firebase/Actas.js";
import verDetalleMesa from "./DetalleActas.js";
const obtenerValor = (idSelec) => {
  const select = document.getElementById(idSelec);
  return select.options[select.selectedIndex].text;
};

const ObtenerDepartamento = async () => {
  const ambito = obtenerValor("cdgoAmbito");
  const departament = await FbActas.getDepartamentos(ambito);
  const select = document.getElementById("cdgoDep");
  select.innerHTML = '<option value="">--SELECCIONE--</option>';
  departament.map((itme) => {
    const option = document.createElement("option");
    option.value = itme.nombreDepartamento;
    option.text = itme.nombreDepartamento;
    select.appendChild(option);
  });
};
const obtenerProvincias = async () => {
  const ambito = obtenerValor("cdgoAmbito");
  const departamento = obtenerValor("cdgoDep");
  console.log("ambito :", ambito, "departamento:", departamento);
  const provincias = await FbActas.getPorvinciaByDepartamento(
    departamento,
    ambito,
  );
  const select = document.getElementById("cdgoProv");
  select.innerHTML = '<option value="">--SELECCIONE--</option>';
  provincias.map((itme) => {
    const option = document.createElement("option");
    option.value = itme.nombreProvincia;
    option.text = itme.nombreProvincia;
    select.appendChild(option);
  });
};
const obtenerDistritos = async () => {
  const ambito = obtenerValor("cdgoAmbito");
  const provincia = obtenerValor("cdgoProv");
  console.log("ambito :", ambito, "provincia:", provincia);
  const distritos = await FbActas.getDistritoByProvincia(provincia, ambito);
  const select = document.getElementById("cdgoDist");
  select.innerHTML = '<option value="">--SELECCIONE--</option>';
  distritos.map((itme) => {
    const option = document.createElement("option");
    option.value = itme.nombreDistrito;
    option.text = itme.nombreDistrito;
    select.appendChild(option);
  });
};
const getLocalesVotacion = async () => {
  const ambito = obtenerValor("cdgoAmbito");
  const distrito = obtenerValor("cdgoDist");
  console.log("ambito :", ambito, "distrito:", distrito);
  const locales = await FbActas.getLocalesByDistrito(distrito);
  const select = document.getElementById("actas_ubigeo");
  select.innerHTML = '<option value="">--SELECCIONE--</option>';
  locales.map((itme) => {
    const option = document.createElement("option");
    option.value = itme.idLocal;
    option.text = itme.RazonSocial;
    select.appendChild(option);
  });
};
const getGruposByLocal = async () => {
  const ambito = obtenerValor("cdgoAmbito");
  const idLocal = document.getElementById("actas_ubigeo").value;
  const grupos = await FbActas.getGruposByLocal(idLocal, ambito);
  const divGrupos = document.getElementById("page-wrap");

  divGrupos.innerHTML = "";

  const tabla = document.createElement("table");
  tabla.className = "table17";
  const tbody = document.createElement("tbody");

  let filas = [];
  for (let i = 0; i < grupos.length; i += 10) {
    filas.push(grupos.slice(i, i + 10));
  }

  filas.map((fila) => {
    const tr = document.createElement("tr");
    fila.map((grupo) => {
      const td = document.createElement("td");
      td.style.cursor = "pointer";
      td.onclick = () => verDetalleMesa(grupo.idGrupo);

      const a = document.createElement("a");
      a.href = "#";
      a.textContent = grupo.idGrupo;

      td.appendChild(a);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  tabla.appendChild(tbody);
  divGrupos.appendChild(tabla);
};
document.getElementById("actas_ubigeo").addEventListener("click", () => {
  getGruposByLocal();
});

document.getElementById("cdgoDist").addEventListener("change", () => {
  getLocalesVotacion();
});
document.getElementById("cdgoProv").addEventListener("change", () => {
  obtenerDistritos();
});
document.getElementById("cdgoAmbito").addEventListener("change", () => {
  ObtenerDepartamento();
});
document.getElementById("cdgoDep").addEventListener("change", () => {
  obtenerProvincias();
});
