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
                titulo: "Formulación de hidrocarburos",
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
                        </tbody>
                    </table>`,
                solucion: `
                    <div class='paso'>
                      
                    </div>
                `
            },
            {
                titulo: "Nomenclatura de alcanos y alquenos",
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
                    </tbody>
                </table>
                `,
                solucion: `
                    <div class='paso'>    
                    </div>
                `
            },
            {
                titulo: "Nomenclatura de alquenos y alquinos",
                enunciado: `Determina la formula de estos compuestos:<br>
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
                        <tr><td>a)</td><td>pent-2-ino</td>
                                <td>b)</td><td>2-isopropilhept-3-eno</td>
                                <td>c)</td><td>3,5-dimetilhept-2-ino</td>
                                <td>d)</td><td>3-metilpent-2,4-diino</td>
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
                titulo: "Formulación de alcoholes",
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
                                <td>b)</td><td><div data-chemfig="CH_3-C~C-C~C-CHOH-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                                <td>c)</td><td><div data-chemfig="CH_3-CH(-[6]CH=[4]CH_2)-CHOH-C(=[6]CH_2)-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                                <td>d)</td><td>pentan-1-ol</td>
                            </tr>
                            <tr>
                                <td>e)</td><td>prop-2-enol</td>
                                <td>f)</td><td>etenol</td>
                                <td>g)</td><td>3-metilbutan-2-ol</td>
                                <td>h)</td><td>hepteno-3,4-diol</td>
                            </tr>                 
                        </tbody>
                    </table>`,
                solucion: `
                    <div class='paso'>
                      
                    </div>
                `
            },
            {
                titulo: "Nomenclatura de grupos funcionales variados",
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
                            <td>c)</td><td>propilamina</td>
                            <td>d)</td><td><div data-chemfig="CHO-CH_2-CHO" data-solucion="false" data-longitud="2em"></div></td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-chemfig="CH_3-COO-NH_2" data-solucion="false" data-longitud="2em"></div></td>
                            <td>f)</td><td>3-metilbutanal</td>
                            <td>g)</td><td>ácido propilbutanodioico</td>
                            <td>h)</td><td>etanoato de propilo</td>                                                        
                        </tr>
                        <tr>
                            <td>i)</td><td><div data-chemfig="CH_3-COO-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>j)</td><td>dibutilamina</td>
                            <td>k)</td><td>hex-2-endial</td>
                            <td>l)</td><td>etanamida</td>                                                        
                        </tr>
                        <tr>
                            <td>m)</td><td><div data-chemfig="CH_2=CH-CHO" data-solucion="false" data-longitud="2em"></div></td>
                            <td>n)</td><td><div data-chemfig="CH_2=CH-COOH" data-solucion="false" data-longitud="2em"></div></td>
                            <td>ñ)</td><td><div data-chemfig="CH_3-CH_2-N(-[6]CH_2-[0]CH_3)-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
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
                            <td>k)</td><td>butilamina</td>
                            <td>l)</td><td>butanamida</td>                                                        
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
                titulo: "Nomenclatura de grupos funcionales variados",
                enunciado: `Nombra los siguientes compuestos:<br>
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
                            <td>a)</td><td><div data-chemfig="CH_3-CH(-[6]CH_2-CH_3)-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>b)</td><td><div data-chemfig="CH_2=CH-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>c)</td><td><div data-chemfig="CH_3-CHOH-CH_2OH" data-solucion="false" data-longitud="2em"></div></td>
                            <td>d)</td><td><div data-chemfig="CH_2=C=CH_2" data-solucion="false" data-longitud="2em"></div></td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-chemfig="CH_3-CH_2-C(=[1]O)(-[7]H)" data-solucion="false" data-longitud="2em"></div></td>
                            <td>f)</td><td><div data-chemfig="CH_3-CO-CH_2-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>g)</td><td><div data-chemfig="CH_3-CH(-[6]CH_3)-CH(-[6]CH_3)-C(=[1]O)(-[7]OH)" data-solucion="false" data-longitud="2em"></div></td>
                            <td>h)</td><td><div data-chemfig="CH_3-N(-[6]CH_3)-CH_3" data-solucion="false" data-longitud="2em"></div></td>                                
                        </tr>
                        <tr>
                            <td>i)</td><td><div data-chemfig="CH_2=CH-C(=[1]O)(-[7]H)" data-solucion="false" data-longitud="2em"></div></td>
                            <td>j)</td><td><div data-chemfig="CH_3-C(=[1]O)(-[7]O(-CH_3))" data-solucion="false" data-longitud="2em"></div></td>
                            <td></td><td></td>
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
                titulo: "Nombre y fórmula de grupos funcionales variados",
                enunciado: `Nombra o determina la fórmula de estos compuestos:<br>
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
                            <td>a)</td><td>2,3-dimetilpentano</td>
                            <td>b)</td><td>dipropilamina</td>
                            <td>c)</td><td>propano-1,2,3-triol</td>
                            <td>d)</td><td>pentan-2-ona</td>
                        </tr>
                        <tr>
                            <td>e)</td><td>3-metil-2-etilpent-2-eno</td>
                            <td>f)</td><td><div data-chemfig="CH_3-CO-CH_2-CO-CH_3" data-solucion="false" data-longitud="2em"></div></td>
                            <td>g)</td><td><div data-chemfig="CH_2OH-CH=CHOH" data-solucion="false" data-longitud="2em"></div></td>
                            <td>h)</td><td><div data-chemfig="CH_3-C(=[2]O)-CH=CH_2" data-solucion="false" data-longitud="2em"></div></td>                                                        
                        </tr>
                    </tbody>
                </table>
                `,
                solucion: `
                    <div class='paso'>    
                    </div>
                `
            },
            ]
        }
    }
}

