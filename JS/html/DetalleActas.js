import FbActas from "../firebase/Actas.js";

const verDetalleMesa = async (idGrupo) => {
  const datos = await FbActas.getDatosGrupo(idGrupo);
  const data = datos[0];

  const contenedor = document.getElementById("detMesa");

  contenedor.innerHTML = `
    <div class="tab-info-desc">
        <div class="row">
            <div class="col-xs-12 col-md-8">
                <div class="row">
                    <div class="col-xs-12">
                        <p class="subtitle1">ACTA ELECTORAL</p>
                        <div id="page-wrap">
                            <table class="table13" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Mesa N°</th>
                                        <th>N° Copia</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${data.idGrupoVotacion}</td>
                                        <td>${data.nCopia}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-xs-12">
                        <p class="subtitle1">INFORMACIÓN UBIGEO</p>
                        <div id="page-wrap">
                            <table class="table14" cellspacing="0" style="width:100%">
                                <thead>
                                    <tr class="titulo_tabla">
                                        <td>DEPARTAMENTO</td>
                                        <td>PROVINCIA</td>
                                        <td>DISTRITO</td>
                                        <td>LOCAL DE VOTACIÓN</td>
                                        <td>DIRECCIÓN</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${data.Departamento}</td>
                                        <td>${data.Provincia}</td>
                                        <td>${data.Distrito}</td>
                                        <td>${data.RazonSocial}</td>
                                        <td>${data.Direccion}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-xs-12">
                        <p class="subtitle1">INFORMACIÓN MESA</p>
                        <div id="page-wrap">
                            <table class="table15" cellspacing="0">
                                <thead>
                                    <tr class="titulo_tabla">
                                        <td>ELECTORES HÁBILES</td>
                                        <td>TOTAL VOTANTES</td>
                                        <td>ESTADO DEL ACTA</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>${data.ElectoresHabiles}</td>
                                        <td>${data.TotalVotantes}</td>
                                        <td>${data.idEstadoActa === "1" ? "ACTA ELECTORAL NORMAL" : "OTRO"}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xs-12 col-md-4">
                <div class="mesap01 text-center">
                    <img src="images/mp-sin.jpg" class="img-responsive" style="margin: 0 auto; max-width: 200px;">
                    <p style="font-size: 11px; margin-top: 10px;">
                        Si requiere la imagen del acta, solicítela a través del procedimiento de acceso a la información pública.
                    </p>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <p class="subtitle1">INFORMACIÓN DEL ACTA ELECTORAL</p>
                <div id="page-wrap" class="cont-tabla1">
                    <table class="table06" style="width:100%">
                        <thead>
                            <tr class="titulo_tabla">
                                <td colspan="2">ORGANIZACIÓN POLÍTICA</td>
                                <td>TOTAL DE VOTOS</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PERUANOS POR EL KAMBIO</td>
                                <td><img width="40px" src="images/simbolo_pkk.jpg"></td>
                                <td>${data.P1}</td>
                            </tr>
                            <tr>
                                <td>FUERZA POPULAR</td>
                                <td><img width="40px" src="images/simbolo_keyko.jpg"></td>
                                <td>${data.P2}</td>
                            </tr>
                            <tr><td colspan="2">VOTOS EN BLANCO</td><td>${data.VotosBlancos}</td></tr>
                            <tr><td colspan="2">VOTOS NULOS</td><td>${data.VotosNulos}</td></tr>
                            <tr><td colspan="2">VOTOS IMPUGNADOS</td><td>${data.VotosImpugnados}</td></tr>
                            <tr><td colspan="2">TOTAL DE VOTOS EMITIDOS</td><td>${data.TotalVotantes}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
`;
};
export default verDetalleMesa;
