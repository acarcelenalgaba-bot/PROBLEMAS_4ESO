if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["anexoFinorganica"] = {
    id: "anexoFinorganica",
    titulo: "Tema 3: Formulación y nomenclatura inorgánica",
    deshabilitado: false,
    secciones: {
        "iones": {
            nombre: "Iones",
            problemas: [
                {
                    titulo: "Nomenclatura y formulación de iones monoatómicos",
                    enunciado: `Nombra o formula los siguientes iones según proceda:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Ion</th>
                                <th></th><th>Ion</th>
                                <th></th><th>Ion</th>
                                <th></th><th>Ion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>K⁺</td>
                                <td>b)</td><td>Ba²⁺</td>
                                <td>c)</td><td>nitruro</td>
                                <td>d)</td><td>Fe³⁺</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>seleniuro</td>
                                <td>f)</td><td>níquel(3+)</td>
                                <td>g)</td><td>P³⁻</td>
                                <td>h)</td><td>Cl⁻</td>
                            </tr>
                            <tr>
                                <td>i)</td><td>rubidio(1+)</td>
                                <td>j)</td><td>magnesio(2+)</td>
                                <td>k)</td><td>Au⁺</td>
                                <td>l)</td><td>O²⁻</td>
                            </tr>
                            <tr>
                                <td>m)</td><td>arseniuro</td>
                                <td>n)</td><td>Br⁻</td>
                                <td></td><td></td>
                                <td></td><td></td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> potasio(1+)</p>
                            <p><strong>b)</strong> bario(2+)</p>
                            <p><strong>c)</strong> N³⁻</p>
                            <p><strong>d)</strong> hierro(3+)</p>
                            <p><strong>e)</strong> Se²⁻</p>
                            <p><strong>f)</strong> Ni³⁺</p>
                            <p><strong>g)</strong> fosfuro</p>
                            <p><strong>h)</strong> cloruro</p>
                            <p><strong>i)</strong> Rb⁺</p>
                            <p><strong>j)</strong> Mg²⁺</p>
                            <p><strong>k)</strong> oro(1+)</p>
                            <p><strong>l)</strong> óxido</p>
                            <p><strong>m)</strong> As³⁻</p>
                            <p><strong>n)</strong> bromuro</p>
                        </div>
                    `
                },
                {
                    titulo: "Nomenclatura tradicional y de hidrógeno de iones poliatómicos",
                    enunciado: `Nombra los siguientes iones en la nomenclatura tradicional y en la nomenclatura de hidrógeno:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Ion</th>
                                <th></th><th>Ion</th>
                                <th></th><th>Ion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>ClO₄⁻</td>
                                <td>b)</td><td>CO₃²⁻</td>
                                <td>c)</td><td>IO⁻</td>
                            </tr>
                            <tr>
                                <td>d)</td><td>CrO₄²⁻</td>
                                <td>e)</td><td>HSO₃⁻</td>
                                <td>f)</td><td>H₂PO₃⁻</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> perclorato; tetraoxidoclorato(1-)</p>
                            <p><strong>b)</strong> carbonato; trioxidocarbonato(2-)</p>
                            <p><strong>c)</strong> hipoyodito; oxidoyodato(1-)</p>
                            <p><strong>d)</strong> cromato; tetraoxidocromato(2-)</p>
                            <p><strong>e)</strong> hidrogeno(trioxidosulfato)(1-)</p>
                            <p><strong>f)</strong> dihidrogeno(trioxidofosfato)(1-)</p>
                        </div>
                    `
                },
                {
                    titulo: "Formulación de iones oxoácidos (tradicional)",
                    enunciado: `Formula los siguientes iones:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Ion</th>
                                <th></th><th>Ion</th>
                                <th></th><th>Ion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>perbromato</td>
                                <td>b)</td><td>sulfito</td>
                                <td>c)</td><td>nitrato</td>
                            </tr>
                            <tr>
                                <td>d)</td><td>nitrito</td>
                                <td>e)</td><td>yodito</td>
                                <td>f)</td><td>hipoclorito</td>
                            </tr>
                            <tr>
                                <td>g)</td><td>fosfito</td>
                                <td>h)</td><td>seleniato</td>
                                <td>i)</td><td>arsenito</td>
                            </tr>
                            <tr>
                                <td>j)</td><td>hiposulfito</td>
                                <td>k)</td><td>antimonito</td>
                                <td>l)</td><td>perclorato</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> BrO₄⁻</p>
                            <p><strong>b)</strong> SO₃²⁻</p>
                            <p><strong>c)</strong> NO₃⁻</p>
                            <p><strong>d)</strong> NO₂⁻</p>
                            <p><strong>e)</strong> IO₂⁻</p>
                            <p><strong>f)</strong> ClO⁻</p>
                            <p><strong>g)</strong> PO₃³⁻</p>
                            <p><strong>h)</strong> SeO₄²⁻</p>
                            <p><strong>i)</strong> AsO₂⁻</p>
                            <p><strong>j)</strong> SO₂⁻</p>
                            <p><strong>k)</strong> SbO₂⁻</p>
                            <p><strong>l)</strong> ClO₄⁻</p>
                        </div>
                    `
                },
                {
                    titulo: "Formulación de iones (sistemática de composición)",
                    enunciado: `Formula los siguientes iones:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Ion</th>
                                <th></th><th>Ion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>trioxidoseleniato(2-)</td>
                                <td>b)</td><td>tetraoxidobromato(1-)</td>
                            </tr>
                            <tr>
                                <td>c)</td><td>tetraoxidomanganato(1-)</td>
                                <td>d)</td><td>dioxidonitrato(1-)</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>trioxidocarbonato(2-)</td>
                                <td>f)</td><td>oxidobromato(1-)</td>
                            </tr>
                            <tr>
                                <td>g)</td><td>hidrogeno(trioxidofosfato)(2-)</td>
                                <td>h)</td><td>dihidrogeno(tetraoxidoarseniato)(1-)</td>
                            </tr>
                            <tr>
                                <td>i)</td><td>hidrogeno(tetraoxidocromato)(1-)</td>
                                <td>j)</td><td>dihidrogeno(heptaoxidodifosfato)(2-)</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> SeO₃²⁻</p>
                            <p><strong>b)</strong> BrO₄⁻</p>
                            <p><strong>c)</strong> MnO₄⁻</p>
                            <p><strong>d)</strong> NO₂⁻</p>
                            <p><strong>e)</strong> CO₃²⁻</p>
                            <p><strong>f)</strong> BrO⁻</p>
                            <p><strong>g)</strong> HPO₃²⁻</p>
                            <p><strong>h)</strong> H₂AsO₄⁻</p>
                            <p><strong>i)</strong> HCrO₄⁻</p>
                            <p><strong>j)</strong> H₂P₂O₇²⁻</p>
                        </div>
                    `
                }
            ]
        },
        "binarios": {
            nombre: "Compuestos binarios",
            problemas: [
                {
                    titulo: "Nomenclatura de óxidos, hidruros y sales binarias",
                    enunciado: `Nombra los siguientes compuestos utilizando los prefijos multiplicadores y los números de oxidación:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>K₂O</td>
                                <td>b)</td><td>Al₂O₃</td>
                                <td>c)</td><td>Ni₂O₃</td>
                                <td>d)</td><td>CaO</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>SnO₂</td>
                                <td>f)</td><td>Ag₂O</td>
                                <td>g)</td><td>SO</td>
                                <td>h)</td><td>SO₂</td>
                            </tr>
                            <tr>
                                <td>i)</td><td>SO₃</td>
                                <td>j)</td><td>P₂O₅</td>
                                <td>k)</td><td>SeO₃</td>
                                <td>l)</td><td>CO</td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Rb₂S</td>
                                <td>n)</td><td>MgCl₂</td>
                                <td>ñ)</td><td>NiN</td>
                                <td>o)</td><td>PbSe</td>
                            </tr>
                            <tr>
                                <td>p)</td><td>CuI₃</td>
                                <td>q)</td><td>AlN</td>
                                <td>r)</td><td>TeH₂</td>
                                <td>s)</td><td>PH₃</td>
                            </tr>
                            <tr>
                                <td>t)</td><td>SF₆</td>
                                <td>u)</td><td>PCl₃</td>
                                <td>v)</td><td>BF₃</td>
                                <td>w)</td><td>O₅Cl₂</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> óxido de dipotasio; óxido de potasio</p>
                            <p><strong>b)</strong> trióxido de dialuminio; óxido de aluminio</p>
                            <p><strong>c)</strong> trióxido de diníquel; óxido de níquel(III)</p>
                            <p><strong>d)</strong> óxido de calcio; óxido de calcio</p>
                            <p><strong>e)</strong> dióxido de estaño; óxido de estaño(IV)</p>
                            <p><strong>f)</strong> óxido de diplata; óxido de plata</p>
                            <p><strong>g)</strong> monóxido de azufre; óxido de azufre(II)</p>
                            <p><strong>h)</strong> dióxido de azufre; óxido de azufre(IV)</p>
                            <p><strong>i)</strong> trióxido de azufre; óxido de azufre(VI)</p>
                            <p><strong>j)</strong> pentaóxido de difósforo; óxido de fósforo(V)</p>
                            <p><strong>k)</strong> trióxido de selenio; óxido de selenio(VI)</p>
                            <p><strong>l)</strong> monóxido de carbono; óxido de carbono(II)</p>
                            <p><strong>m)</strong> sulfuro de dirubidio; sulfuro de rubidio</p>
                            <p><strong>n)</strong> dicloruro de magnesio; cloruro de magnesio</p>
                            <p><strong>ñ)</strong> nitruro de níquel; nitruro de níquel(III)</p>
                            <p><strong>o)</strong> seleniuro de plomo; seleniuro de plomo(II)</p>
                            <p><strong>p)</strong> triyoduro de cobre; yoduro de cobre(III)</p>
                            <p><strong>q)</strong> nitruro de aluminio; nitruro de aluminio</p>
                            <p><strong>r)</strong> dihidruro de telurio; hidruro de telurio(II)</p>
                            <p><strong>s)</strong> trihidruro de fósforo; hidruro de fósforo(III), fosfano</p>
                            <p><strong>t)</strong> hexafluoruro de azufre; fluoruro de azufre(IV)</p>
                            <p><strong>u)</strong> tricloruro de fósforo; cloruro de fósforo(III)</p>
                            <p><strong>v)</strong> trifluoruro de boro; fluoruro de boro</p>
                            <p><strong>w)</strong> dicloruro de pentaoxígeno</p>
                        </div>
                    `
                },
                {
                    titulo: "Formulación de óxidos, hidruros y sales binarias",
                    enunciado: `Formula los siguientes compuestos:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>óxido de berilio</td>
                                <td>b)</td><td>óxido de cobalto</td>
                                <td>c)</td><td>óxido de cromo(III)</td>
                            </tr>
                            <tr>
                                <td>d)</td><td>óxido de plomo(II)</td>
                                <td>e)</td><td>dióxido de nitrógeno</td>
                                <td>f)</td><td>óxido de selenio(IV)</td>
                            </tr>
                            <tr>
                                <td>g)</td><td>trióxido de difósforo</td>
                                <td>h)</td><td>óxido de antimonio(V)</td>
                                <td>i)</td><td>bromuro de bario</td>
                            </tr>
                            <tr>
                                <td>j)</td><td>seleniuro de cobre(I)</td>
                                <td>k)</td><td>hidruro de aluminio</td>
                                <td>l)</td><td>hidruro de oro(III)</td>
                            </tr>
                            <tr>
                                <td>m)</td><td>fluoruro de oxígeno</td>
                                <td>n)</td><td>sulfuro de selenio</td>
                                <td>ñ)</td><td>sulfuro de hidrógeno</td>
                            </tr>
                            <tr>
                                <td>o)</td><td>hidruro de arsénico(III)</td>
                                <td></td><td></td>
                                <td></td><td></td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> BeO</p>
                            <p><strong>b)</strong> CoO</p>
                            <p><strong>c)</strong> Cr₂O₃</p>
                            <p><strong>d)</strong> PbO</p>
                            <p><strong>e)</strong> NO₂</p>
                            <p><strong>f)</strong> SeO₂</p>
                            <p><strong>g)</strong> P₂O₅</p>
                            <p><strong>h)</strong> Sb₂O₅</p>
                            <p><strong>i)</strong> BaBr₂</p>
                            <p><strong>j)</strong> Cu₂Se</p>
                            <p><strong>k)</strong> AlH₃</p>
                            <p><strong>l)</strong> AuH₃</p>
                            <p><strong>m)</strong> OF₂</p>
                            <p><strong>n)</strong> SeS</p>
                            <p><strong>ñ)</strong> H₂S</p>
                            <p><strong>o)</strong> AsH₃</p>
                        </div>
                    `
                }
            ]
        },
        "hidroxidos_peroxidos": {
            nombre: "Hidróxidos y peróxidos",
            problemas: [
                {
                    titulo: "Hidróxidos y peróxidos",
                    enunciado: `Nombra los siguientes compuestos utilizando los prefijos multiplicadores y los números de oxidación:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Na₂O₂</td>
                                <td>b)</td><td>Al(OH)₃</td>
                                <td>c)</td><td>Ni(OH)₃</td>
                                <td>d)</td><td>CaO₂</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>Sn(O₂)₂</td>
                                <td>f)</td><td>Ag₂O₂</td>
                                <td>g)</td><td>Al₂(O₂)₃</td>
                                <td>h)</td><td>CuOH</td>
                            </tr>
                            <tr>
                                <td>i)</td><td>PbO₂</td>
                                <td>j)</td><td>KOH</td>
                                <td>k)</td><td>Cu₂O₂</td>
                                <td>l)</td><td>MgO₂</td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Co₂(O₂)₃</td>
                                <td>n)</td><td>CoO₂</td>
                                <td>ñ)</td><td>Co(OH)₂</td>
                                <td>o)</td><td>Au(OH)₃</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> dióxido de sodio; peróxido de sodio</p>
                            <p><strong>b)</strong> trihidróxido de aluminio; hidróxido de aluminio</p>
                            <p><strong>c)</strong> trihidróxido de níquel; hidróxido de níquel(III)</p>
                            <p><strong>d)</strong> dióxido de calcio; peróxido de calcio</p>
                            <p><strong>e)</strong> tetraóxido de estaño; peróxido de estaño(IV)</p>
                            <p><strong>f)</strong> dióxido de diplata; peróxido de plata</p>
                            <p><strong>g)</strong> triperóxido de dialuminio; peróxido de aluminio</p>
                            <p><strong>h)</strong> hidróxido de cobre; hidróxido de cobre(I)</p>
                            <p><strong>i)</strong> dióxido de plomo; peróxido de plomo(II) (si no se considera peróxido: óxido de plomo(IV))</p>
                            <p><strong>j)</strong> hidróxido de potasio; hidróxido de potasio</p>
                            <p><strong>k)</strong> dióxido de dicobre; peróxido de cobre(I)</p>
                            <p><strong>l)</strong> dióxido de magnesio; peróxido de magnesio</p>
                            <p><strong>m)</strong> triperóxido de dicobalto; peróxido de cobalto(III)</p>
                            <p><strong>n)</strong> dióxido de cobalto; peróxido de cobalto(II)</p>
                            <p><strong>ñ)</strong> dihidróxido de cobalto; hidróxido de cobalto(II)</p>
                            <p><strong>o)</strong> trihidróxido de aluminio; hidróxido de aluminio</p>
                        </div>
                    `
                },
                {
                    titulo: "Formulación de hidróxidos y peróxidos",
                    enunciado: `Formula los siguientes compuestos:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>peróxido de bario</td>
                                <td>b)</td><td>hidróxido de cobre(I)</td>
                            </tr>
                            <tr>
                                <td>c)</td><td>peróxido de cromo(III)</td>
                                <td>d)</td><td>peróxido de plomo(IV)</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>dióxido de dipotasio</td>
                                <td>f)</td><td>dihidróxido de cinc</td>
                            </tr>
                            <tr>
                                <td>g)</td><td>dióxido de dicobre</td>
                                <td>h)</td><td>peróxido de cobre(II)</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> BaO₂</p>
                            <p><strong>b)</strong> CuOH</p>
                            <p><strong>c)</strong> Cr₂(O₂)₃</p>
                            <p><strong>d)</strong> Pb(O₂)₂</p>
                            <p><strong>e)</strong> K₂O₂</p>
                            <p><strong>f)</strong> Zn(OH)₂</p>
                            <p><strong>g)</strong> Cu₂O₂</p>
                            <p><strong>h)</strong> CuO₂</p>
                        </div>
                    `
                }
            ]
        },
        "acidos": {
            nombre: "Ácidos oxoácidos",
            problemas: [
                {
                    titulo: "Nomenclatura de ácidos oxoácidos",
                    enunciado: `Nombra los siguientes compuestos utilizando la nomenclatura tradicional, la sistemática de composición:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>HBrO</td>
                                <td>b)</td><td>HBrO₃</td>
                                <td>c)</td><td>H₂SO₄</td>
                            </tr>
                            <tr>
                                <td>d)</td><td>H₂SeO₃</td>
                                <td>e)</td><td>HNO₂</td>
                                <td>f)</td><td>H₃PO₄</td>
                            </tr>
                            <tr>
                                <td>g)</td><td>HIO₂</td>
                                <td>h)</td><td>H₂TeO₃</td>
                                <td>i)</td><td>HIO₄</td>
                            </tr>
                            <tr>
                                <td>j)</td><td>HPO₃</td>
                                <td>k)</td><td>H₂SiO₃</td>
                                <td>l)</td><td>H₃BO₃</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> ác. hipobromoso; hidróxido(oxidobromato); hidróxidobromo</p>
                            <p><strong>b)</strong> ác. brómico; hidrogeno(trioxidobromato); hidróxidodioxidobromo</p>
                            <p><strong>c)</strong> ác. sulfúrico; dihidrogeno(tetraoxidosulfato); dihidróxidodióxidoazufre</p>
                            <p><strong>d)</strong> ác. selenioso; dihidrogeno(trioxidoseniato); dihidróxidooxidoselenio</p>
                            <p><strong>e)</strong> ác. nitroso; hidrogeno(dioxidonitrato); hidróxidooxidonitrógeno</p>
                            <p><strong>f)</strong> ác. fosfórico; trihidrogeno(tetraoxidofosfato); trihidróxidooxidofósforo</p>
                            <p><strong>g)</strong> ác. yodoso; hidrogeno(dioxidoyodato); hidróxidooxidoyodo</p>
                            <p><strong>h)</strong> ác. teluroso; dihidrogeno(trioxidotelurato); dihidróxidooxidoteluro</p>
                            <p><strong>i)</strong> ác. periódico; hidrogeno(tetraoxidoyodato); hidróxidotrioxidoyodo</p>
                            <p><strong>j)</strong> ác. metafosfórico; hidrogeno(trioxidofosfato); hidróxidodioxidofósforo</p>
                            <p><strong>k)</strong> ác. disulfuroso; dihidrogeno(pentaoxidodisulfato); dihidróxidotrioxidodiazufre</p>
                            <p><strong>l)</strong> ác. disulfúrico; dihidrogeno(heptaoxidodisulfato); dihidróxidopentaoxidodiazufre</p>
                            <p><strong>m)</strong> ác. metasilícico; dihidrogeno(trioxidosilicato); dihidróxidooxidosilicio</p>
                            <p><strong>n)</strong> ác. bórico; trihidrogeno(trioxidoborato); trihidróxidoboro</p>
                            <p><strong>ñ)</strong> ác. ortoperyódico; pentahidrogeno(hexaoxidoyodato); pentahidróxidooxidoyodo</p>
                            <p><strong>o)</strong> ác. disulfuroso; dihidrogeno(pentaoxidodisulfato); dihidróxidotrioxidodiazufre</p>
                        </div>
                    `
                },
                {
                    titulo: "Formulación de ácidos oxoácidos",
                    enunciado: `Formula los siguientes compuestos:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>ácido selénico</td>
                                <td>b)</td><td>hidrogeno(trioxidonitrato)</td>
                            </tr>
                            <tr>
                                <td>c)</td><td>hidrogeno(trioxidoyodato)</td>
                                <td>d)</td><td>ácido hipoyodoso</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>dihidrogeno(trioxidocarbonato)</td>
                                <td>f)</td><td>tetrahidrogeno(heptaoxidodifosfato)</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> H₂SeO₃</p>
                            <p><strong>b)</strong> HNO₃</p>
                            <p><strong>c)</strong> HIO₃</p>
                            <p><strong>d)</strong> HIO</p>
                            <p><strong>e)</strong> H₂CO₃</p>
                            <p><strong>f)</strong> H₄P₂O₇</p>
                        </div>
                    `
                }
            ]
        },
        "sales_ternarias": {
            nombre: "Sales ternarias (oxosales)",
            problemas: [
                {
                    titulo: "Nomenclatura de oxosales",
                    enunciado: `Nombra los compuestos utilizando la nomenclatura tradicional y la sistemática de composición:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>KNO₃</td>
                                <td>b)</td><td>Al(IO₂)₃</td>
                                <td>c)</td><td>NiSO₄</td>
                            </tr>
                            <tr>
                                <td>d)</td><td>Co(NO₂)₃</td>
                                <td>e)</td><td>Cu₂SeO₃</td>
                                <td>f)</td><td>Au₂(CO₃)₃</td>
                            </tr>
                            <tr>
                                <td>g)</td><td>Ca(IO)₂</td>
                                <td>h)</td><td>Pb(SO₄)₂</td>
                                <td>i)</td><td>AuIO₃</td>
                            </tr>
                            <tr>
                                <td>j)</td><td>CdTeO₄</td>
                                <td>k)</td><td>Na₂SeO₄</td>
                                <td>l)</td><td>Co(ClO₄)₃</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> nitrato de potasio; trioxidonitrato de potasio</p>
                            <p><strong>b)</strong> yodito de aluminio; tris(dioxidoyodato) de aluminio</p>
                            <p><strong>c)</strong> sulfato de níquel(II); tetraoxidosulfato de níquel</p>
                            <p><strong>d)</strong> nitrito de cobalto(III); tris(dioxidonitrato) de cobalto</p>
                            <p><strong>e)</strong> selenito de cobre(I); trioxidoseleniato de dicobre</p>
                            <p><strong>f)</strong> carbonato de oro(III); tris(trioxidocarbonato) de dioro</p>
                            <p><strong>g)</strong> hipoyodito de calcio; bis(oxidoyodato) de calcio</p>
                            <p><strong>h)</strong> sulfato de plomo(IV); bis(tetraoxidosulfato) de plomo</p>
                            <p><strong>i)</strong> yodato de oro(I); trioxidoyodato de oro</p>
                            <p><strong>j)</strong> telurato de cadmio; tetraoxidotelurato de cadmio</p>
                            <p><strong>k)</strong> seleniato de sodio; tetraoxidoseniato de disodio</p>
                            <p><strong>l)</strong> perclorato de cobalto(III); tris(tetraoxidoclorato) de cobalto</p>
                        </div>
                    `
                },
                {
                    titulo: "Formulación de oxosales",
                    enunciado: `Formula estos compuestos:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>selenito de sodio</td>
                                <td>b)</td><td>trioxidofosfato de tricesio</td>
                            </tr>
                            <tr>
                                <td>c)</td><td>bis(trioxidonitrato) de níquel</td>
                                <td>d)</td><td>hipoyodito de hierro(II)</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>bis(oxidoclorato) de cinc</td>
                                <td>f)</td><td>bis(trioxidobromato) de manganeso</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> Na₂SeO₄</p>
                            <p><strong>b)</strong> Cs₃PO₃</p>
                            <p><strong>c)</strong> Ni(NO₃)₂</p>
                            <p><strong>d)</strong> Fe(IO)₂</p>
                            <p><strong>e)</strong> Zn(ClO)₂</p>
                            <p><strong>f)</strong> Mn(BrO₃)₂</p>
                        </div>
                    `
                }
            ]
        },
        "ternarios_variados": {
            nombre: "Compuestos ternarios variados",
            problemas: [
                {
                    titulo: "Nomenclatura y formulación de compuestos ternarios",
                    enunciado: `Nombra o formula los siguientes compuestos ternarios:<br>
                    <table class="tabla-ejercicios">
                        <thead>
                            <tr>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                                <th></th><th>Compuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>HNO₂</td>
                                <td>b)</td><td>H₂SeO₃</td>
                                <td>c)</td><td>HBrO</td>
                            </tr>
                            <tr>
                                <td>d)</td><td>tris(trioxidocarbonato) de dihierro</td>
                                <td>e)</td><td>ácido carbónico</td>
                                <td>f)</td><td>trioxidosulfato de hierro</td>
                            </tr>
                            <tr>
                                <td>g)</td><td>NaClO</td>
                                <td>h)</td><td>cromato de sodio</td>
                                <td>i)</td><td>dihidrogeno(trioxidosulfato)</td>
                            </tr>
                            <tr>
                                <td>j)</td><td>BeSO₄</td>
                                <td>k)</td><td>ácido perclórico</td>
                                <td>l)</td><td>bis(trioxidosulfato) de titanio</td>
                            </tr>
                            <tr>
                                <td>m)</td><td>HIO</td>
                                <td>n)</td><td>clorato de cinc</td>
                                <td>ñ)</td><td>ácido peryódico</td>
                            </tr>
                            <tr>
                                <td>o)</td><td>CoSeO₃</td>
                                <td>p)</td><td>nitrito de cobre(I)</td>
                                <td>q)</td><td>hidrogeno(dioxidobromato)</td>
                            </tr>
                            <tr>
                                <td>r)</td><td>perclorato de sodio</td>
                                <td>s)</td><td>selenito de níquel(II)</td>
                                <td>t)</td><td>NaNO₃</td>
                            </tr>
                            <tr>
                                <td>u)</td><td>Al(ClO₂)₃</td>
                                <td>v)</td><td>oxidoclorato de sodio</td>
                                <td>w)</td><td>FeSO₃</td>
                            </tr>
                            <tr>
                                <td>x)</td><td>tetraoxidoclorato de litio</td>
                                <td>y)</td><td>H₂SeO₄</td>
                                <td>z)</td><td>Na₂SO₃</td>
                            </tr>
                        </tbody>
                    </table>`,
                    solucion: `
                        <div class='paso'>
                            <p><strong>a)</strong> HNO₂ — ácido nitroso</p>
                            <p><strong>b)</strong> H₂SeO₃ — ácido selenioso</p>
                            <p><strong>c)</strong> HBrO — ácido hipobromoso</p>
                            <p><strong>d)</strong> Fe₂(CO₃)₃</p>
                            <p><strong>e)</strong> H₂CO₃</p>
                            <p><strong>f)</strong> Fe₂(SO₄)₃</p>
                            <p><strong>g)</strong> NaClO — hipoclorito de sodio</p>
                            <p><strong>h)</strong> Na₂CrO₄</p>
                            <p><strong>i)</strong> H₂SO₃ (hidróxido-oxido-azufre → ácido sulfuroso)</p>
                            <p><strong>j)</strong> BeSO₄ — sulfato de berilio</p>
                            <p><strong>k)</strong> HClO₄</p>
                            <p><strong>l)</strong> Ti(SO₄)₂</p>
                            <p><strong>m)</strong> HIO — ácido hipoyodoso</p>
                            <p><strong>n)</strong> Zn(ClO₃)₂</p>
                            <p><strong>ñ)</strong> HIO₄</p>
                            <p><strong>o)</strong> CoSeO₃ — selenito de cobalto(II)</p>
                            <p><strong>p)</strong> CuNO₂</p>
                            <p><strong>q)</strong> HClO (hidróxido + cloro → ácido hipocloroso)</p>
                            <p><strong>r)</strong> HBrO₂</p>
                            <p><strong>s)</strong> NiSeO₃</p>
                            <p><strong>t)</strong> NaNO₃ — nitrato de sodio</p>
                            <p><strong>u)</strong> Al(ClO₂)₃ — yodito/clorito de aluminio (ClO₂⁻ = clorito)</p>
                            <p><strong>v)</strong> NaClO (oxidoclorato de sodio → hipoclorito de sodio)</p>
                            <p><strong>w)</strong> FeSO₃ — sulfito de hierro(II)</p>
                            <p><strong>x)</strong> HClO (hidróxidocloro → ácido hipocloroso)</p>
                            <p><strong>y)</strong> H₂SeO₄ — ácido selénico</p>
                            <p><strong>z)</strong> NaClO₄</p>
                            <p><strong>aa)</strong> Na₂SO₃ — sulfito de sodio</p>
                            <p><strong>ab)</strong> LiClO₄</p>
                            <p><strong>ac)</strong> Cr₂(SO₄)₃ — sulfato de cromo(III)</p>
                        </div>
                    `
                }
            ]
        }
    }
}                            