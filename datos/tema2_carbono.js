if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema2"] = {
    id: "tema2",
    titulo: "Tema 2: Carbono y sus compuestos",
    deshabilitado: false,
    secciones: {
        "hidrocarburos": {
            nombre: "Hidrocarburos",
            problemas: [
                {
                titulo: "Formulación de alcanos y alquenos",
                enunciado: `Determina la fómula de estos compuestos. <br>
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
                                <td>a)</td><td>hex-3-eno</td>
                                <td>b)</td><td>2-metilhexano</td>
                                <td>c)</td><td>2,3-dimetilhept-3-eno</td>
                                <td>d)</td><td>etilpentano</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>4-etil-4-metilheptano</td>
                                <td>f)</td><td>2,3-dimetilbuta-1,3-dieno</td>
                                <td>g)</td><td>4-etilnonano</td>
                                <td>h)</td><td>3-etil-6,7-dimetil-4-propildodecano</td>
                            </tr>
                            <tr>
                                <td>i)</td><td>propadieno</td>
                                <td>j)</td><td>2-metilbuta-1,3-dieno</td>
                                <td>k)</td><td>3,5-dietil-2-metilheptano</td>
                                <td>l)</td><td>3,4-dimetiloctano</td>
                            </tr>                    
                        </tbody>
                    </table>`,
                solucion: `
                    <div class='paso'>
                      
                    </div>
                `
            },
            {
                titulo: "Nomenclatura de alcanos, alquenos y alquinos",
                enunciado: `Nombra los siguientes compuestos:<br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td><div data-chemfig="CH_3-CH(-[6]CH_2-CH_3)-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>b)</td><td><div data-chemfig="CH_3-C(-[6]C(-[4]CH_3)=CH-CH_3)=CH-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                        </tr>
                        <tr>
                            <td>c)</td><td><div data-chemfig="CH_3-CH_2-CH=CH_2" data-solucion="false" data-longitud="2em"></div></td>

                            <td>d)</td><td><div data-chemfig="CH_2=CH-CH_2-CH(-[6]CH_2-CH_3)-CH_2-CH=CH_2" data-solucion="false" data-longitud="2em"></div></td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-chemfig="CH~C-CH_2-CH(-[6]CH_2-CH_3)-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>f)</td><td><div data-chemfig="CH_2=C(-[6]CH(-[4]CH_3)-CH_3)-CH-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                        </tr>
                        <tr>
                            <td>g)</td><td><div data-chemfig="CH_3-CH_2-CH=CH-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>h)</td><td><div data-chemfig="CH~C-CH_2-C~C-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                        </tr>
                    </tbody>
                </table>
                `,
                solucion: `
                    <div class='paso'>    
                    </div>
                `
            },
            {
                titulo: "Nomenclatura y formulaciónde alquenos y alquinos",
                enunciado: `Determina el nombre o la formula de estos compuestos:<br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>pent-2-ino</td>
                            <td>b)</td><td>2-isopropilhept-3-eno</td>
                            <td>c)</td><td>3,5-dimetilhept-2-ino</td>
                            <td>d)</td><td>3-metilpent-2,4-diino</td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-chemfig="CH_2=CH-CH_2-CH=CH-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>f)</td><td><div data-chemfig="CH_3-CH(-[6]CH-CH=CH-CH_3)-CH=CH-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>g)</td><td><div data-chemfig="CH_2=CH-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>h)</td><td><div data-chemfig="CH_3-CH_2(-[6]CH(-[4]CH_3)-C~CH" data-solucion="false" data-longitud="2em"></div></td>
                        </tr>
                        <tr>
                            <td>i)</td><td>penta-1,3-diino</td>
                            <td>j)</td><td>penta-1,3-dieno</td>
                            <td>k)</td><td>7,7-dimetil-3-propilnona-1,5-diino</td>
                            <td>l)</td><td>3-etilocta-1,5-diino</td>
                        </tr>
                    </tbody>
                </table>
                `,
                solucion: `
                    <div class='paso'>    
                    </div>
                `
            }
            ]
        },
        "grupos funcionales": {
            nombre: "Grupos funcionales",
            problemas: [
                {
                titulo: "Formulación de alcoholes y éteres",
                enunciado: `Nombra o formula según convenga los siguientes alcoholes: <br>
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
                                <td>a)</td><td><div data-chemfig="CH_2OH-CH_2OH" data-solucion="false" data-longitud="2em"></div></td>
                                <td>b)</td><td><div data-chemfig="CH_3-C~C-CH_2-CH_2-CHOH-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                                <td>c)</td><td><div data-chemfig="CH_3-CH(-[6]CH_2-[4]CH_3)-CHOH-CH(-[6]CH_3)-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                                <td>d)</td><td>pentan-1-ol</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>prop-2-enol</td>
                                <td>f)</td><td>etanol</td>
                                <td>g)</td><td>3-metilbutan-2-ol</td>
                                <td>h)</td><td>heptano-3,4-diol</td>
                            </tr>
                            <tr>
                                <td>i)</td><td>isopropilmetileter</td>
                                <td>j)</td><td>dimetileter</td>
                                <td>k)</td><td><div data-chemfig="CH_3-CH_2-O-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                                <td>l)</td><td><div data-chemfig="CH_3-O-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            </tr>                  
                        </tbody>
                    </table>`,
                solucion: `
                    <div class='paso'>
                      
                    </div>
                `
            },
            {
                titulo: "Formulación de aldehídos y cetonas",
                enunciado: `Nombra o formulalos siguientes compuestos:<br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>pentan-2-ona</td>
                            <td>b)</td><td>metilbutanona</td>
                            <td>c)</td><td>propanal</td>
                            <td>d)</td><td><div data-chemfig="CHO-CH_2-CHO" data-solucion="false" data-longitud="2em"></div></td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-chemfig="CH_3-CHO" data-solucion="false" data-longitud="2em"></div></td>
                            <td>f)</td><td>3-metilbutanal</td>
                            <td>g)</td><td>metilpropanal</td>
                            <td>h)</td><td>4-metilpentan-2-ona</td>                                                        
                        </tr>
                        <tr>
                            <td>i)</td><td><div data-chemfig="CH_3-CO-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>j)</td><td><div data-chemfig="CH_3-CH_2-CH_2-CH_2-CO-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>k)</td><td>hex-2-endial</td>
                            <td>l)</td><td>4-metilhexanal</td>                                                        
                        </tr>
                        <tr>
                            <td>m)</td><td><div data-chemfig="CH_2=CH-CHO" data-solucion="false" data-longitud="2em"></div></td>
                            <td>n)</td><td><div data-chemfig="CH_3-CH_2-CH_2-CO-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>ñ)</td><td><div data-chemfig="CH_3-CH_2-CO-CH_2-CH(-[6]CH_2-[0]CH_3)-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td></td><td></td>                                                        
                        </tr>
                    </tbody>
                </table>
                `,
                solucion: `
                    <div class='paso'>    
                    </div>
                `
            },
            {
                titulo: "Formulación de ácidos y esteres",
                enunciado: `Nombra o formulalos siguientes compuestos:<br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>ácido butanoico</td>
                            <td>b)</td><td>ácido 3-metilbutanoico</td>
                            <td>c)</td><td>etanoato de metilo</td>
                            <td>d)</td><td><div data-chemfig="CH_3-CH_2-CH_2-CH_2-COOH" data-solucion="false" data-longitud="2em"></div></td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-chemfig="CH_3-COO-CH_2-CH_2-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>f)</td><td>ácido propilbutanodioico</td>
                            <td>g)</td><td>etanoato de propilo</td>                                                        
                            <td>h)</td><td><div data-chemfig="CH_3-CH_2-COO-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td></td><td></td>                                                        
                        </tr>
                    </tbody>
                </table>
                `,
                solucion: `
                    <div class='paso'>    
                    </div>
                `
            },
            {
                titulo: "Formulación de aminas y amidas",
                enunciado: `Nombra o formulalos siguientes compuestos:<br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>pentan-2-amina</td>
                            <td>b)</td><td>2-metilbutan-3-amina</td>
                            <td>c)</td><td>propilamina</td>
                            <td>d)</td><td>metilpropilamina</td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-chemfig="CH_3-CO-NH_2" data-solucion="false" data-longitud="2em"></div></td>
                            <td>f)</td><td>butanamida</td>
                            <td>g)</td><td>metanamida</td>
                            <td>h)</td><td><div data-chemfig="CH_3-CH_2-CO-NH_2" data-solucion="false" data-longitud="2em"></div></td>                                                    
                        </tr>
                        <tr>
                            <td>i)</td><td><div data-chemfig="CH_3-CH_2-CH_2-CH_2-NH_2" data-solucion="false" data-longitud="2em"></div></td>
                            <td>j)</td><td>dibutilamina</td>
                            <td>k)</td><td>hexanamida</td>                                                        
                            <td>l)</td><td><div data-chemfig="CH_3-CH_2-N(-[6]CH_2-[0]CH_3)-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td></td><td></td>                                                        
                        </tr>
                    </tbody>
                </table>
                `,
                solucion: `
                    <div class='paso'>    
                    </div>
                `
            },
            {
                titulo: "Fórmula de grupos funcionales variados",
                enunciado: `Determina la fórmula de estos compuestos:<br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                            <th></th><th>Estructura</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>metilbutano</td>
                            <td>b)</td><td>3-etilheptano</td>
                            <td>c)</td><td>but-1-eno</td>
                            <td>d)</td><td>buta-1,2-dieno</td>
                        </tr>
                        <tr>
                            <td>e)</td><td>propan-2-ol</td>
                            <td>f)</td><td>propen-2-ol</td>
                            <td>g)</td><td>etanal</td>
                            <td>h)</td><td>hexan-3-ona</td>                                                        
                        </tr>
                        <tr>
                            <td>i)</td><td>ácido propanoico</td>
                            <td>j)</td><td>ácido propenoico</td>
                            <td>k)</td><td>isopropilamina</td>
                            <td>l)</td><td>butanamida</td>                                                        
                        </tr>
                    </tbody>
                </table>
                `,
                solucion: `
                    <div class='paso'>    
                    </div>
                `
            }
            ]
        }
    }
}

