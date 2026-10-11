const baseDatosProblemas = {
    "hidrocarburos": [
        {
            titulo: "Problema 1: Formulación de alcanos, alquenos y alquinos",
            enunciado: `Formula los siguientes alcanos, alquenos y alquinos por las reglas IUPAC. <br>
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
                            <td>a)</td><td>Metano</td>
                            <td>b)</td><td>Etano</td>
                            <td>c)</td><td>Propano</td>
                            <td>d)</td><td>Butano</td>
                        </tr>
                        <tr>
                            <td>e)</td><td>Pentano</td>
                            <td>f)</td><td>Hexano</td>
                            <td>g)</td><td>Decano</td>
                            <td>h)</td><td>Ciclopentano</td>
                        </tr>
                        <tr>
                            <td>i)</td><td>Propeno</td>
                            <td>j)</td><td>But-2-eno</td>
                            <td>k)</td><td>Non-1-eno</td>
                            <td>l)</td><td>Eteno</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>Ciclopenteno</td>
                            <td>n)</td><td>Penta-1,3-dieno</td>
                            <td>ñ)</td><td>Etino</td>
                            <td>o)</td><td>But-1-ino</td>
                        </tr>
                        <tr>
                            <td>p)</td><td>Buta-1,3-diino</td>
                            <td>q)</td><td>Octano</td>
                            <td>r)</td><td>Hexa-1,3,5-triino</td>
                            <td>s)</td><td>Pent-2-ino</td>
                        </tr>
                        <tr>
                            <td>t)</td><td>Ciclohexeno</td>
                            <td>u)</td><td>Hex-3-eno</td>
                            <td>v)</td><td>Hepta-1,4-diino</td>
                            <td>w)</td><td>Pent-1-en-4-ino</td>
                        </tr>
                        <tr>
                            <td>x)</td><td>Hex-4-en-1-ino</td>
                            <td>y)</td><td>Pent-2-eno</td>
                            <td>z)</td><td>Ciclobuta-1,3-dieno</td>
                        </tr>                      
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Metano</td><td><div data-chemfig="CH_4" data-solucion="true"></div></td>
                                <td>b)</td><td>Etano</td><td><div data-chemfig="\\text{CH}_3-\\text{CH}_3" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>Propano</td><td><div data-chemfig="{CH_3}-{CH_2}-{CH_3}" data-solucion="true"></div></td>
                                <td>d)</td><td>Butano</td><td><div data-chemfig="{CH_3}-{CH_2}-{CH_2}-{CH_3}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>Pentano</td><td><div data-chemfig="{CH_3}-{CH_2}-{CH_2}-{CH_2}-{CH_3}" data-solucion="true"></div></td>
                                <td>f)</td><td>Hexano</td><td><div data-chemfig="{CH_3}-{CH_2}-{CH_2}-{CH_2}-{CH_2}-{CH_3}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>Decano</td><td><div data-chemfig="{CH_3-(CH_2)_8-CH_3}" data-solucion="true"></div></td>
                                <td>h)</td><td>Ciclopentano</td><td><div data-chemfig="{CH_2}*5(-{CH_2}-{CH_2}-{CH_2}-{CH_2}-)" data-solucion="true" data-longitud="2.75em"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>Propeno</td><td><div data-chemfig="{CH_2}={CH}-{CH_3}" data-solucion="true"></div></td>
                                <td>j)</td><td>But-2-eno</td><td><div data-chemfig="{CH_3}-{CH}={CH}-{CH_3}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>k)</td><td>Non-1-eno</td><td><div data-chemfig="{CH_2 =CH-(CH_2)_6-CH_3}" data-solucion="true"></div></td>
                                <td>l)</td><td>Eteno</td><td><div data-chemfig="{CH_2}={CH_2}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Ciclopenteno</td><td><div data-chemfig="{CH_2}*5(-{CH_2}-{CH}={CH}-{CH_2}-{CH_2}-)" data-solucion="true" data-longitud="2.75em"></div></td>
                                <td>n)</td><td>Penta-1,3-dieno</td><td><div data-chemfig="{CH_2}={CH}-{CH}={CH}-{CH_3}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>ñ)</td><td>Etino</td><td><div data-chemfig="{CH \\equiv CH}" data-solucion="true"></div></td>
                                <td>o)</td><td>But-1-ino</td><td><div data-chemfig="{CH \\equiv C-CH_2-CH_3}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>p)</td><td>Buta-1,3-diino</td><td><div data-chemfig="{CH \\equiv C-C \\equiv CH}" data-solucion="true"></div></td>
                                <td>q)</td><td>Octano</td><td><div data-chemfig="{CH_3-(CH_2)_6-CH_3}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>r)</td><td>Hexa-1,3,5-triino</td><td><div data-chemfig="{CH \\equiv C-CH \\equiv C-CH \\equiv CH}" data-solucion="true"></div></td>
                                <td>s)</td><td>Pent-2-ino</td><td><div data-chemfig="{CH_3-C \\equiv C-CH_2-CH_3}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>t)</td><td>Ciclohexeno</td><td><div data-chemfig="{CH_2}*6(-{CH_2}-{CH}={CH}-{CH_2}-{CH_2}-{CH_2}-)" data-solucion="true" data-longitud="2.5em"></div></td>
                                <td>u)</td><td>Hex-3-eno</td><td><div data-chemfig="{CH_3-CH_2-CH=CH-CH_2-CH_3}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>v)</td><td>Hepta-1,4-diino</td><td><div data-chemfig="{CH \\equiv C-CH_2-C \\equiv C - CH_2-CH_3}" data-solucion="true"></div></td>
                                <td>w)</td><td>Pent-1-en-4-ino</td><td><div data-chemfig="{CH_2=CH-CH_2-C \\equiv CH}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>x)</td><td>Hexa-4-en-1-ino</td><td><div data-chemfig="{CH_3-CH=CH-CH_2-C \\equiv CH}" data-solucion="true"></div></td>
                                <td>y)</td><td>Pent-2-eno</td><td><div data-chemfig="{CH_3-CH=CH-CH_2-CH_3}" data-solucion="true"></div></td>
                            </tr>
                            <tr>
                                <td>z)</td><td>Ciclobuta-1,3-dieno</td><td>
                                <div data-chemfig="{CH}*4(-{CH}={CH}-{CH}={CH}-)" data-solucion="true" data-longitud="2.5em"></div></td>
                                <td></td><td></td><td></td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 2: Nomenclatura de alcanos, alquenos y alquinos",
            enunciado: `Nombra los siguientes alcanos, alquenos y alquinos por las reglas IUPAC. <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_3}" data-solucion="false"></div></td>
                        <td>b)</td><td><div data-chemfig="CH_{4}" data-solucion="false"></div></td>
                        <td>c)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_2-CH_2-CH_2-CH_2-CH_3}" data-solucion="false"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-chemfig="*4(CH_2-CH_2-CH_2-CH_2-)" data-solucion="false" data-longitud="1.75em"></div></td>
                        <td>e)</td><td><div data-chemfig="{CH_2=CH_2}" data-solucion="false"></div></td>
                        <td>f)</td><td><div data-chemfig="{CH_3-CH=CH-CH_3}" data-solucion="false"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="{CH_3-CH_2-CH_3}" data-solucion="false"></div></td>
                        <td>h)</td><td><div data-chemfig="{CH_2=CH-CH=CH-CH_3}" data-solucion="false"></div></td>
                        <td>i)</td><td><div data-chemfig="{CH_2=CH-CH_3}" data-solucion="false"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-chemfig="{CH_3-CH_3}" data-solucion="false"></div></td>
                        <td>k)</td><td><div data-chemfig="*5([:17.5]=----)" data-solucion="false" data-longitud="1.75em"></div></td>
                        <td>l)</td><td><div data-chemfig="{CH_3-C \\equiv CH}" data-solucion="false"></div></td>
                    </tr>
                    <tr>
                        <td>m)</td><td><div data-chemfig="*8(-=--=-=-)" data-solucion="false" data-longitud="1.75em"></div></td>
                        <td>n)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_2-CH_2-CH_3}" data-solucion="false"></div></td>
                        <td>ñ)</td><td><div data-chemfig="{CH_2=CH-CH_2-CH=CH-CH_3}" data-solucion="false"></div></td>
                    </tr>
                    <tr>
                        <td>o)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_2-CH_3}" data-solucion="false"></div></td>
                        <td></td><td></td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
            `,
            solucion: `
                <div class='paso'>
                <table class="tabla-ejercicios-solucion">
                    <thead>
                        <tr>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_3}" data-solucion="false"></div></td><td style="color: red;">Butano</td>
                            <td>b)</td><td><div data-chemfig="{CH_4}" data-solucion="false"></div></td><td style="color: red;">Metano</td>
                        </tr>
                        <tr>
                            <td>c)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_2-CH_2-CH_2-CH_2-CH_3}" data-solucion="false"></div></td><td style="color: red;">Octano</td>
                            <td>d)</td><td><div data-chemfig="*4(CH_2-CH_2-CH_2-CH_2-)" data-solucion="false" data-longitud="1.75em"></div></td><td style="color: red;">Ciclobutano</td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-chemfig="{CH_2=CH_2}" data-solucion="false"></div></td><td style="color: red;">Eteno</td>
                            <td>f)</td><td><div data-chemfig="{CH_3-CH=CH-CH_3}" data-solucion="false"></div></td><td style="color: red;">But-2-eno</td>
                        </tr>
                        <tr>
                            <td>g)</td><td><div data-chemfig="{CH_3-CH_2-CH_3}" data-solucion="false"></div></td><td style="color: red;">Propano</td>
                            <td>h)</td><td><div data-chemfig="{CH_2=CH-CH=CH-CH_3}" data-solucion="false"></div></td><td style="color: red;">Penta-1,3-dieno</td>
                        </tr>
                        <tr>
                            <td>i)</td><td><div data-chemfig="{CH_2=CH-CH_3}" data-solucion="false"></div></td><td style="color: red;">Propeno</td>
                            <td>j)</td><td><div data-chemfig="{CH_3-CH_3}" data-solucion="false"></div></td><td style="color: red;">Etano</td>
                        </tr>
                        <tr>
                            <td>k)</td><td><div data-chemfig="*5([:17.5]=----)" data-solucion="false" data-longitud="1.75em"></div></td><td style="color: red;">Ciclopenteno</td>
                            <td>l)</td><td><div data-chemfig="{CH_3-C \\equiv CH}" data-solucion="false"></div></td><td style="color: red;">Propino</td>
                        </tr>
                        <tr>
                            <td>m)</td><td><div data-chemfig="*8(-=--=-=-)" data-solucion="false" data-longitud="1.75em"></div></td><td style="color: red;">Cicloocta-1,3,6-trieno</td>
                            <td>n)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_2-CH_2-CH_3}" data-solucion="false"></div></td><td style="color: red;">Hexano</td>
                        </tr>
                        <tr>
                            <td>ñ)</td><td><div data-chemfig="{CH_2=CH-CH_2-CH=CH-CH_3}" data-solucion="false"></div></td><td style="color: red;">Hexa-1,4-dieno</td>
                            <td>o)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_2-CH_3}" data-solucion="false"></div></td><td style="color: red;">Pentano</td>
                        </tr>
                    </tbody>
                </table>    
                </div>
            `
        },
        {
            titulo: "Problema 3: Formulación de alcanos, alquenos y alquinos con radicales",
            enunciado: `Formula los siguientes alcanos, alquenos, alquinos con radicales por su fórmula desarrollada. <br>
                <table class="tabla-ejercicios">
                    <thead>
                        <tr>
                            <th></th><th>Nombre</th>
                            <th></th><th>Nombre</th>
                            <th></th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td>Metilpropano</td>
                            <td>b)</td><td>Metilbutano</td>
                            <td>c)</td><td>3-metilpentano</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>3-metilhex-1-eno</td>
                            <td>e)</td><td>2,3,5-trimetilheptano</td>
                            <td>f)</td><td>4-etil-5-metiloct-1-ino</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>Metilciclopentano</td>
                            <td>h)</td><td>2,2,7,7-tetrametilnonano</td>
                            <td>i)</td><td>2,3-dimetilbutano</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>1,6-dimetilciclohexa-1,3-dieno</td>
                            <td>k)</td><td>5-isopropil-3-metiloctano</td>
                            <td>l)</td><td>4-etil-2,4-dimetilhexano</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>Etilciclobutano</td>
                            <td>n)</td><td>3-etil-2,5-dimetilheptano</td>
                            <td>ñ)</td><td>4,6-dietil-2,4,8-trimetilnonano</td>
                        </tr>
                        <tr>
                            <td>o)</td><td>5,5-dietil-2-metil-4-propildecano</td>
                            <td>p)</td><td>4-ciclopropilheptano</td>
                            <td>q)</td><td>5-terc-butilnonano</td>
                        </tr>
                    </tbody>
                </table>
            `,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Metilpropano</td><td><div data-chemfig="CH_{3}-CH(-[:90]CH_{3})-CH_{3}" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>b)</td><td>Metilbutano</td><td><div data-chemfig="CH_{3}-CH(-[:90]CH_{3})-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2.25em"></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>3-metilpentano</td><td><div data-chemfig="CH_{3}-CH(-[:90]CH_{3})-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2.25em"></td>
                                <td>d)</td><td>3-metilhex-1-eno</td><td><div data-chemfig="CH_{2} = CH-CH(-[:90]CH_{3})-CH_{2}-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>2,3,5-trimetilheptano</td><td><div data-chemfig="CH_{3} - CH(-[:90]CH_{3})-CH(-[:90]CH_{3})-CH_{2}-CH(-[:90]CH_{3})-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>f)</td><td>4-etil-5-metiloct-1-ino</td><td><div data-chemfig="CH \\equiv C - CH_2 - CH(-[2]CH_{2}-CH_{3})-CH(-[6]CH_{3})-CH_{2}-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>Metilciclopentano</td><td><div data-chemfig="*5([:17.5]---(-[2]CH_{3})--)" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>h)</td><td>2,2,7,7-tetrametilnonano</td><td><div data-chemfig="CH_{3}-C(-[2]CH_{3})(-[6]CH_{3})-CH_2-CH_{2}-CH_2-CH_2-C(-[2]CH_{3})(-[6]CH_{3})-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>2,3-dimetilbutano</td><td><div data-chemfig="CH_{3}-CH(-[2]CH_{3})-CH(-[6]CH_{3})-CH_{3}" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>j)</td><td>1,6-dimetilciclohexa-1,3-dieno</td><td><div data-chemfig="*6((-[5]CH_{3})--=-=(-[3]CH_{3})-)" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>   
                            <tr>
                                <td>k)</td><td>5-isopropil-3-metiloctano</td><td><div data-chemfig="CH_{3}-CH_{2}-CH(-[2]CH_{3})-CH_{2}-CH(-[6]CH(-[4]CH_{3})-CH_{3})-CH_{2}-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>l)</td><td>4-etil-2,4-dimetilhexano</td><td><div data-chemfig="H_3C-CH(-[2]CH_3)-CH_2-C(-[2]CH_3)(-[6]CH_2-CH_3)-CH_2-CH_3" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Etilciclobutano</td><td><div data-chemfig="CH_2*4(-CH_2-CH(-CH_2-[0]CH_3)-CH_2-CH_2-)" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>n)</td><td>3-etil-2,5-dimetilheptano</td><td><div data-chemfig="H_3C-CH(-[2]CH_3)-CH(-[6]CH_2-CH_3)-CH_2-CH(-[2]CH_3)-CH_2-CH_3" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>ñ)</td><td>4,6-dietil-2,4,8-trimetilnonano</td><td><div data-chemfig="H_3C-CH(-[2]CH_3)-CH_2-C(-[2]CH_3)(-[6]CH_2-[4]CH_3)-CH_2-CH(-[6]CH_2-CH_3)-CH_2-CH(-[2]CH_3)-CH_3" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>o)</td><td>5,5-dietil-2-metil-4-propildecano</td><td><div data-chemfig="H_3C-CH(-[2]CH_3)-CH_2-CH(-[6]CH_2-[4]CH_2-[4]CH_3)-C(-[2]CH_2-CH_3)(-[6]CH_2-CH_3)-CH_2-CH_2-CH_2-CH_2-CH_3" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>p)</td><td>4-ciclopropilheptano</td><td><div data-chemfig="H_3C-CH_2-CH_2-CH(-[6]CH*3(-CH_2-CH_2-))-CH_2-CH_2-CH_3" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>q)</td><td>5-terc-butilnonano</td><td><div data-chemfig="H_3C-CH_2-CH_2-CH_2-CH(-[6]C(-[4]CH_3)(-[0]CH_3)(-[6]CH_3))-CH_2-CH_2-CH_2-CH_3" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 4: Nomenclatura de alcanos, alquenos y alquinos con radicales",
            enunciado: `Nombra los siguientes los siguientes alcanos, alquenos y alquinos con radicales por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="H_3C-CH(-[2]CH_3)-CH_3" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>b)</td><td><div data-chemfig="H_2C=CH-CH(-[2]CH_2-CH_3)-CH_2-CH=CH-CH_3" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>c)</td><td><div data-chemfig="CH_3-CH(-[2]CH_3)-CH(-[6]CH_3)-CH_3" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-chemfig="CH_3-CH=C(-[2]CH_2-CH_3)-CH_2-CH_2-CH(-[2]CH_3)-CH_2-CH_3" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>e)</td><td><div data-chemfig="CH_3-C(-[2]CH_3)(-[6]CH_3)-CH_2-CH_3" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>f)</td><td><div data-chemfig="CH \\equiv C - CH(-[2]CH_2-CH_3)-CH_2-C \\equiv C - CH_2-CH_3" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="CH_3-CH(-[2]CH_3)-CH(-[6]CH_3)-CH_2-CH_3" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>h)</td><td><div data-chemfig="CH_2=CH-CH(-[2]CH_3)-CH_2-C \\equiv CH" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>i)</td><td><div data-chemfig="CH_3-CH(-[2]CH_3)-CH(-[6]CH_3)-CH(-[2]CH_2-CH_3)-CH_2-C \\equiv CH" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-chemfig="CH_3-CH=CH-C(-[2]CH_2-CH_2-CH_3)(-[6]CH_3)-CH=CH-CH=CH-CH_3" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td></td><td></td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>
            `,
            solucion: `
            <div class='paso'>
                <table class="tabla-ejercicios-solucion">
                    <thead>
                        <tr>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>a)</td><td><div data-chemfig="H_3C-CH(-[2]CH_3)-CH_3" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Metilpropano</td>
                            <td>b)</td><td><div data-chemfig="H_2C=CH-CH(-[2]CH_2-CH_3)-CH_2-CH=CH-CH_3" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">3-etilhepta-1,5-dieno</td>
                        </tr>
                        <tr>
                            <td>c)</td><td><div data-chemfig="CH_3-CH(-[2]CH_3)-CH(-[6]CH_3)-CH_3" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">2,3-dimetilbutano</td>
                            <td>d)</td><td><div data-chemfig="CH_3-CH=C(-[2]CH_2-CH_3)-CH_2-CH_2-CH(-[2]CH_3)-CH_2-CH_3" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">3-etil-6-metiloct-2-eno</td>
                        </tr>
                        <tr>
                            <td>e)</td><td><div data-chemfig="CH_3-C(-[2]CH_3)(-[6]CH_3)-CH_2-CH_3" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">2,2-dimetilbutano</td>
                            <td>f)</td><td><div data-chemfig="CH \\equiv C - CH(-[2]CH_2-CH_3)-CH_2-C \\equiv C-CH_2-CH_3" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">3-etilocta-1,5-diino</td>
                        </tr>
                        <tr>
                            <td>g)</td><td><div data-chemfig="CH_3-CH(-[2]CH_3)-CH(-[6]CH_3)-CH_2-CH_3" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">2,3-dimetilpentano</td>
                            <td>h)</td><td><div data-chemfig="CH_2=CH-CH(-[2]CH_3)-CH_2-C \\equiv CH" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">3-metilhex-1-en-5-ino</td>
                        </tr>
                        <tr>
                            <td>i)</td><td><div data-chemfig="CH_3-CH(-[2]CH_3)-CH(-[6]CH_3)-CH(-[2]CH_2-CH_3)-CH_2-C \\equiv CH" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">4-etil-5,6-dimetilhepta-1-ino</td>
                            <td>j)</td><td><div data-chemfig="CH_3-CH=CH-C(-[2]CH_2-CH_2-CH_3)(-[6]CH_3)-CH=CH-CH=CH-CH_3" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">6-metil-6-propilnona-2,4,7-trieno</td>
                        </tr>
                    </tbody>
                </table>    
                </div>
            `
        },
        {
            titulo: "Problema 5: Formulación de compuestos aromáticos y halogenados",
            enunciado: `Formula los siguientes compuestos aromáticos y halogenados por las reglas IUPAC. 
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Nombre</th>
                        <th></th><th>Nombre</th>
                        <th></th><th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td>Benceno</td>
                        <td>b)</td><td>Naftaleno</td>
                        <td>c)</td><td>Antraceno</td>
                    </tr>
                    <tr>
                        <td>d)</td><td>2-fenilpentano</td>
                        <td>e)</td><td>o-dimetilbenceno</td>
                        <td>f)</td><td>Hexametilbenceno</td>
                    </tr>
                    <tr>
                        <td>g)</td><td>m-dimetilbenceno</td>
                        <td>h)</td><td>p-etilmetilbenceno</td>
                        <td>i)</td><td>3-fenilhexano</td>
                    </tr>
                    <tr>
                        <td>j)</td><td>p-dipropilbenceno</td>
                        <td>k)</td><td>Metilbenceno</td>
                        <td>l)</td><td>Etenilbenceno</td>
                    </tr>
                    <tr>
                        <td>m)</td><td>2-cloropropano</td>
                        <td>n)</td><td>o-bromoclorobenceno</td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Benceno</td><td><div data-chemfig="*6(=-=-=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>b)</td><td>Naftaleno</td><td><div data-chemfig="*6(-=-=-*6(-=-=-=))" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>Antraceno</td><td><div data-chemfig="*6(-=*6(-=-=-)-=-*6(-=-=-=))" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>d)</td><td>2-fenilpentano</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-CH(-[2]([2,0.6]*6(=-=-=-)))-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>o-dimetilbenceno</td><td><div data-chemfig="*6(=-(-[0]CH_3)=(-[0]CH_3)-=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>f)</td><td>Hexametilbenceno</td><td><div data-chemfig="*6((-[5]CH_3)=(-[6]CH_3)-(-[7]CH_3)=(-[1]CH_3)-(-[2]CH_3)=(-[3]CH_3)-)" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>m-dimetilbenceno</td><td><div data-chemfig="*6(=-(-[7]CH_{3})=-(-[2]CH_{3})=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>h)</td><td>p-etilmetilbenceno</td><td><div data-chemfig="*6(=-(-[:330]CH_{2}-CH_{3})=-=(-[:145]CH_{3})-)" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>3-fenilhexano</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-CH(-[2]([2,0.6]*6(=-=-=-)))-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>j)</td><td>p-dipropilbenceno</td><td><div data-chemfig="*6([:90]=(-[0]CH_{2}-CH_{2}-CH_{3})-=-(-[4]CH_2-CH_2-CH_3)=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>   
                            <tr>
                                <td>k)</td><td>Metilbenceno</td><td><div data-chemfig="*6([:0]=-(-[:315]CH_{3})=-=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>l)</td><td>Etenilbenceno</td><td><div data-chemfig="*6([:90]=-=-(-[:180]CH=CH_{2})=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>2-cloropropano</td><td><div data-chemfig="CH_{3}-CH(-[2]Cl)-CH_{3}" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>n)</td><td>o-bromoclorobenceno</td><td><div data-chemfig="*6(=-(-[7]Cl)=(-[1]Br)-=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 6: Nomenclatura de compuestos aromáticos y halogenados",
            enunciado: `Nombra los siguientes compuestos aromáticos y halogenados. <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="*6(=-=(-[1]CH_{3})-(-[2]CH_{2}-[4]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>b)</td><td><div data-chemfig="*6((-[5]CH_{3})=-(-[7]CH_{3})=-(-[2]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>c)</td><td><div data-chemfig="*6(=(-[6]CH_{3})-=-(-[2]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-chemfig="*6(=-(-[7]CH_{3})=-(-[2]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>e)</td><td><div data-chemfig="*6(=-(-[7]CH_{2}-[0]CH_{3})=-(-[2]CH_{2}-[0]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>f)</td><td><div data-chemfig="*6(-=-=-*6(-=-=-=))" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="*6(=(-[6]CH_{3})-(-[7]CH_{2}-[0]CH_{3})=(-[1]CH_{2}-[0]CH_{3})-=-)" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>h)</td><td><div data-chemfig="*6(-=*6(-=-=-)-=-*6(-=-=-=))" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>i)</td><td><div data-chemfig="*6((-[5]Cl)=(-[6]Cl)-=-(-[2]Cl)=-)" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-chemfig="CH_{2}=CH-C(-[2]Cl)(-[6]Cl)-CH_{2}-Cl" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td></td><td></td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                <table class="tabla-ejercicios-solucion">
                    <thead>
                        <tr>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="*6(=-=(-[1]CH_{3})-(-[2]CH_{2}-[4]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1-etil-2-metilbenceno (u o-etilmetilbenceno)</td>
                        <td>b)</td><td><div data-chemfig="*6((-[5]CH_{3})=-(-[7]CH_{3})=-(-[2]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1,3,5-trimetilbenceno</td>
                    </tr>
                    <tr>
                        <td>c)</td><td><div data-chemfig="*6(=(-[6]CH_{3})-=-(-[2]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></td><td style="color: red;">1,4-dimetilbenceno</td>
                        <td>d)</td><td><div data-chemfig="*6(=-(-[7]CH_{3})=-(-[2]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1,3-dimetilbenceno</td>
                    </tr>
                    <tr>
                        <td>e)</td><td><div data-chemfig="*6(=-(-[7]CH_{2}-[0]CH_{3})=-(-[2]CH_{2}-[0]CH_{3})=-)" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1,3-dietilbenceno</td>
                        <td>f)</td><td><div data-chemfig="*6(-=-=-*6(-=-=-=))" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Naftaleno</td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="*6(=(-[6]CH_{3})-(-[7]CH_{2}-[0]CH_{3})=(-[1]CH_{2}-[0]CH_{3})-=-)" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1,2-dietil-3-metilbenceno</td>
                        <td>h)</td><td><div data-chemfig="*6(-=*6(-=-=-)-=-*6(-=-=-=))" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Antraceno</td>
                    </tr>
                    <tr>
                        <td>i)</td><td><div data-chemfig="*6((-[5]Cl)=(-[6]Cl)-=-(-[2]Cl)=-)" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1,2,4-triclorobenceno</td>
                        <td>j)</td><td><div data-chemfig="CH_{2}=CH-C(-[2]Cl)(-[6]Cl)-CH_{2}-Cl" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">3,3,4-triclorobut-1-eno</td>
                    </tr>
                </tbody>
                </table>    
                </div>
            `
        }
    ],
    "oxigeno": [
        {
            titulo: "Problema 1: Formulación de compuestos oxigenados",
            enunciado: `Formula los siguientes compuestos oxigenados por las reglas IUPAC.
            <br>
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
                            <td>a)</td><td>Butan-2-ol</td>
                            <td>b)</td><td>Etanol</td>
                            <td>c)</td><td>Metanol</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>Pent-3-en-2-ol</td>
                            <td>e)</td><td>4-metilpentan-1,3-diol</td>
                            <td>f)</td><td>Ciclohexano-1,2,3,4,5,6-hexol</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>Fenol</td>
                            <td>h)</td><td>Etil metil éter</td>
                            <td>i)</td><td>Dietil éter</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>Isopropil metil éter</td>
                            <td>k)</td><td>Pentan-3-ona</td>
                            <td>l)</td><td>Acetona (propanona)</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>Butanona</td>
                            <td>n)</td><td>Butanodiona</td>
                            <td>ñ)</td><td>Formaldehído (metanal)</td>
                        </tr>
                        <tr>
                            <td>o)</td><td>Etanal</td>
                            <td>p)</td><td>2,2-dimetilbutanal</td>
                            <td>q)</td><td>Benzaldehído</td>
                        </tr>                     
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Butan-2-ol</td><td><div data-chemfig="CH_{3}-CH(-[2]OH)-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>b)</td><td>Etanol</td><td><div data-chemfig="CH_{3}-CH_{2}-OH" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>Metanol</td><td><div data-chemfig="CH_{3}-OH" data-solucion="true" data-longitud="2em"></div></td>
                                <td>d)</td><td>Pent-3-en-2-ol</td><td><div data-chemfig="CH_{3}-CH(-[2]OH)-CH=CH-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>4-metilpentan-1,3-diol</td><td><div data-chemfig="CH_{3}-CH(-[2]CH_{3})-CH(-[2]OH)-CH_{2}-CH_{2}-OH" data-solucion="true" data-longitud="2em"></div></td>
                                <td>f)</td><td>Ciclohexano-1,2,3,4,5,6-hexol</td><td><div data-chemfig="*6((-[5]OH)-(-[6]OH)-(-[7]OH)-(-[1]OH)-(-[2]OH)-(-[3]OH)-)" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>Fenol</td><td><div data-chemfig="*6(=-=(-[1]OH)-=-)" data-solucion="true" data-longitud="2em"></div></td>
                                <td>h)</td><td>Etil metil éter</td><td><div data-chemfig="CH_{3}-CH_{2}-O-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>Dietil éter</td><td><div data-chemfig="CH_{3}-CH_{2}-O-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>j)</td><td>Isopropil metil éter</td><td><div data-chemfig="CH_{3}-CH(-[2]CH_{3})-O-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>   
                            <tr>
                                <td>k)</td><td>Pentan-3-ona</td><td><div data-chemfig="CH_{3}-CH_{2}-C(=[2]O)-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>l)</td><td>Acetona (propanona)</td><td><div data-chemfig="CH_{3}-C(=[2]O)-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Butanona</td><td><div data-chemfig="CH_{3}-CH_{2}-CO-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>n)</td><td>Butanodiona</td><td><div data-chemfig="CH_{3}-C(=[2]O)-C(=[2]O)-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>ñ)</td><td>	Formaldehído (metanal)</td><td><div data-chemfig="HC(-[7]H)(=[1]O)" data-solucion="true" data-longitud="2em"></div></td>
                                <td>o)</td><td>Etanal</td><td><div data-chemfig="CH_{3}-CHO" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>p)</td><td>2,2-dimetilbutanal</td><td><div data-chemfig="CH_{3}-CH_{2}-C(-[2]CH_{3})(-[6]CH_{2})-CHO" data-solucion="true" data-longitud="2em"></div></td>
                                <td>q)</td><td>Benzaldehído</td><td><div data-chemfig="*6(=-=(-[1]CHO)-=-)" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 2: Nomenclatura de compuestos oxigenados",
            enunciado: `Nombra los siguientes compuestos oxigenados por las reglas IUPAC. <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="*6(=-=(-[1]OH)-=-)" data-solucion="false" data-longitud="2em"></div></td>
                        <td>b)</td><td><div data-chemfig="CH_{3}-CH_{2}-OH" data-solucion="false" data-longitud="2em"></div></td>
                        <td>c)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH(-[2]OH)-CH(-[2]OH)-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-CH(-[6]OH)-C(-[2]OH)(-[6]CH_{3})-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>e)</td><td> <div data-chemfig="CH_{3}-O-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>f)</td><td><div data-chemfig="*6([:0]=-=(-[1]O-[7]*6([:-30]=-=-=-))-=-)" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="*6(=-=(-[1]O-[7]CH_{2}-[0]CH_{3})-=-)" data-solucion="false" data-longitud="2em"></div></td>
                        <td>h)</td><td><div data-chemfig="CHO-CH_{2}-CHO" data-solucion="false" data-longitud="2em"></div></td>
                        <td>i)</td><td><div data-chemfig="*6(=-=(-[1]C(-[7]H)(=[2]O))-=-)" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-CHO" data-solucion="false" data-longitud="2em"></div></td>
                        <td>k)</td><td><div data-chemfig="CH_{3}-CH(-[2]*6([2,0.6]=-=-=-))-CH_{2}-CO-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>l)</td><td><div data-chemfig="CH_{2}=C(-[2]CH_{3})-CHO" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                <table class="tabla-ejercicios-solucion">
                    <thead>
                        <tr>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="*6(=-=(-[1]OH)-=-)" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Fenol</td>
                        <td>b)</td><td><div data-chemfig="CH_{3}-CH_{2}-OH" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Etanol</td>
                    </tr>
                    <tr>
                        <td>c)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH(-[2]OH)-CH(-[2]OH)-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">pentano-2,3-diol</td>
                        <td>d)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-CH(-[6]OH)-C(-[2]OH)(-[6]CH_{3})-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">2-metilhexano-2,3-diol</td>
                    </tr>
                    <tr>
                        <td>e)</td><td><div data-chemfig="CH_{3}-O-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Dimetiléter</td>
                        <td>f)</td><td><div data-chemfig="*6([:0]=-=(-[1]O-[7]*6([:-30]=-=-=-))-=-)" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Difeniléter</td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="*6(=-=(-[1]O-[7]CH_{2}-[0]CH_{3})-=-)" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Etoxibenceno</td>
                        <td>h)</td><td><div data-chemfig="CHO-CH_{2}-CHO" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">propanodial</td>
                    </tr>
                    <tr>
                        <td>i)</td><td><div data-chemfig="*6(=-=(-[1]C(-[7]H)(=[2]O))-=-)" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">benzaldehído</td>
                        <td>j)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-CHO" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">butanal</td>
                    </tr>
                    <tr>
                        <td>k)</td><td><div data-chemfig="CH_{3}-CH(-[2]*6([2,0.6]=-=-=-))-CH_{2}-CO-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">4-fenilpentan-2-ona</td>
                        <td>l)</td><td><div data-chemfig="CH_{2}=C(-[2]CH_{3})-CHO" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">2-metilprop-2-enal</td>
                    </tr>
                </tbody>
            `
        },
        {
            titulo: "Problema 3: Formulación de compuestos oxigenados",
            enunciado: `Formula los siguientes compuestos oxigenados por las reglas IUPAC
            <br>
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
                            <td>a)</td><td>Ácido propanoico</td>
                            <td>b)</td><td>Ácido metanoico</td>
                            <td>c)</td><td>Ácido but-2-enoico</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>Ácido propanodioico</td>
                            <td>e)</td><td>Ácido benzoico</td>
                            <td>f)</td><td>Etanoato de sodio</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>Etanoato de calcio</td>
                            <td>h)</td><td>Propanoato de potasio</td>
                            <td>i)</td><td>Butanoato de sodio</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>Butanoato de etilo</td>
                            <td>k)</td><td>Etanoato de etilo</td>
                            <td>l)</td><td>3-bromobutanoato de metilo</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>2-metilbutanoato de etilo</td>
                            <td>n)</td><td>Metanoato de metilo</td>
                            <td></td><td></td>
                        </tr>                
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Ácido propanoico</td><td><div data-chemfig="CH_{3}-CH_{2}-COOH" data-solucion="true" data-longitud="2em"></div></td>
                                <td>b)</td><td>Ácido metanoico</td><td><div data-chemfig="H-COOH" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>Ácido but-2-enoico</td><td><div data-chemfig="CH_{3}-CH=CH-COOH" data-solucion="true" data-longitud="2em"></div></td>
                                <td>d)</td><td>Ácido propanodioico</td><td><div data-chemfig="COOH-CH_{2}-COOH" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>Ácido benzoico</td><td><div data-chemfig="*6(=-=(-[1]COOH)-=-)" data-solucion="true" data-longitud="2em"></div></td>
                                <td>f)</td><td>Etanoato de sodio</td><td><div data-chemfig="CH_{3}-COO^{-}[Na^{+}]" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>Etanoato de calcio</td><td><div data-chemfig="CH_{3}-COO - Ca - OOC- CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>h)</td><td>Propanoato de potasio</td><td><div data-chemfig="CH_{3}-CH_{2}-COO - K" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>Butanoato de sodio</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-COO - Na" data-solucion="true" data-longitud="2em"></div></td>
                                <td>j)</td><td>Butanoato de etilo</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-COO - CH_{2}-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>   
                            <tr>
                                <td>k)</td><td>Etanoato de etilo</td><td><div data-chemfig="CH_{3}-COO-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>l)</td><td>3-bromobutanoato de metilo</td><td><div data-chemfig="CH_{3}-CH(-[2]Br)-CH_{2}-COO - CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>2-metilbutanoato de etilo</td><td><div data-chemfig="CH_{3}-CH_{2}-CH(-[2]CH_{3})-COO-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>n)</td><td>Metanoato de metilo</td><td><div data-chemfig="H-COO-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },        
        {
            titulo: "Problema 4: Nomenclatura de compuestos oxigenados",
            enunciado: `Nombra los siguientes compuestos oxigenados por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="CH_{3}-CH_{2}-COOH" data-solucion="false" data-longitud="2em"></div></td>
                        <td>b)</td><td><div data-chemfig="CH_{3}-COOH" data-solucion="false" data-longitud="2em"></div></td>
                        <td>c)</td><td><div data-chemfig="H-COO-CH_{2}-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-chemfig="CH_{3}-CH=CH-CH_{2}-CH(-[2]CH_{3})-COOH" data-solucion="false" data-longitud="2em"></div></td>
                        <td>e)</td><td><div data-chemfig="CH_{3}-COO-Na" data-solucion="false" data-longitud="2em"></div></td>
                        <td>f)</td><td><div data-chemfig="CH_{3}-CH_{2}-COO-K" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="Ca {(}CH_{3}-COO{)}_{2}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>h)</td><td><div data-chemfig="CH_{3}-CH(-[2]CH_{3})-CO-O-CH(-[2]CH_{3})-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>i)</td><td><div data-chemfig="CH_{3}-CH_{2}-COO-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-chemfig="CH_{3}-COO-CH(-[2]CH_{3})-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>k)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-COO-CH_{2}-CH_{2}-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>l)</td><td><div data-chemfig="CH_{3}-COO-CH_{2}-CH_{2}-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                <table class="tabla-ejercicios-solucion">
                    <thead>
                        <tr>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="CH_{3}-CH_{2}-COOH" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Ácido propanoico</td>
                        <td>b)</td><td><div data-chemfig="CH_{3}-COOH" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Ácido etanoico</td>
                    </tr>
                    <tr>
                        <td>c)</td><td><div data-chemfig="H-COO-CH_{2}-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">metanoato de etilo</td>
                        <td>d)</td><td><div data-chemfig="CH_{3}-CH=CH-CH_{2}-CH(-[2]CH_{3})-COOH" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Ácido 2-metilhex-4-enoico</td>
                    </tr>
                    <tr>
                        <td>e)</td><td><div data-chemfig="CH_{3}-COO-Na" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Etanoato de sodio</td>
                        <td>f)</td><td><div data-chemfig="CH_{3}-CH_{2}-COO-K" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Propanoato de potasio</td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="Ca {(}CH_{3}-COO{)}_{2}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Etanoato de calcio</td>
                        <td>h)</td><td><div data-chemfig="CH_{3}-CH(-[2]CH_{3})-CO-O-CH(-[2]CH_{3})-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">2-metilpropanoato de isopropilo</td>
                    </tr>
                    <tr>
                        <td>i)</td><td><div data-chemfig="CH_{3}-CH_{2}-COO-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Propanoato de metilo</td>
                        <td>j)</td><td><div data-chemfig="CH_{3}-COO-CH(-[2]CH_{3})-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Etanoato de isopropilo</td>
                    </tr>
                    <tr>
                        <td>k)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-COO-CH_{2}-CH_{2}-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Butanoato de propilo</td>
                        <td>l)</td><td><div data-chemfig="CH_{3}-COO-CH_{2}-CH_{2}-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Etanoato de propilo</td>
                    </tr>
                </tbody>
            `
        },
        {
            titulo: "Problema 5: Formulación de compuestos nitrogenados",
            enunciado: `Formula los siguientes compuestos nitrogenados por las reglas IUPAC.
            <br>
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
                            <td>a)</td><td>Etanamina</td>
                            <td>b)</td><td>Metanamina</td>
                            <td>c)</td><td>N-metiletanamina</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>N-etil-N-metilpropanamina</td>
                            <td>e)</td><td>Etanamida</td>
                            <td>f)</td><td>Metanamida</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>Butanamida</td>
                            <td>h)</td><td>N-fenilpropanamida</td>
                            <td>i)</td><td>N,N-dietilpropanamida</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>Etanonitrilo</td>
                            <td>k)</td><td>Butanonitrilo</td>
                            <td>l)</td><td>Propanonitrilo</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>1-nitrobutano</td>
                            <td>n)</td><td>Nitroetano</td>
                            <td>ñ</td><td>2-cloro-1-nitropentano</td>
                        </tr>                
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>Etanamina</td><td><div data-chemfig="CH_{3}-CH_{2}-NH_{2}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>b)</td><td>Metanamina</td><td><div data-chemfig="CH_{3}-NH_{2}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>N-metiletanamina</td><td><div data-chemfig="CH_{3}-CH_{2}-NH-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>d)</td><td>N-etil-N-metilpropanamina</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-N(-[2]CH_{3})-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>Etanamida</td><td><div data-chemfig="CH_{3}-CO-NH_{2}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>f)</td><td>Metanamida</td><td><div data-chemfig="CH_{3}-CO-NH_{2}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>Butanamida</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-CO-NH_{2}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>h)</td><td>N-fenilpropanamida</td><td><div data-chemfig="CH_{3}-CH_{2}-CO-NH-(*6(-=-=-=))" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>N,N-dietilpropanamida</td><td><div data-chemfig="CH_{3}-CH_{2}-CO-N(-[2]CH_{2}-CH_{3})-CH_{2}-CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>j)</td><td>Etanonitrilo</td><td><div data-chemfig="CH_{3}-C \\equiv N" data-solucion="true" data-longitud="2.5em"></div></td>
                            </tr>   
                            <tr>
                                <td>k)</td><td>Butanonitrilo</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-C \\equiv N" data-solucion="true" data-longitud="2em"></div></td>
                                <td>l)</td><td>Propanonitrilo</td><td><div data-chemfig="CH_{3}-CH_{2}- C \\equiv N" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>1-nitrobutano</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-CH_{2}-NO_{2}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>n)</td><td>Nitroetano</td><td><div data-chemfig="CH_{3}-CH_{2}-NO_{2}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>ñ)</td><td>2-cloro-1-nitropentano</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-CH(-[2]Cl)-CH_{2}-NO_{2}" data-solucion="true" data-longitud="2em"></div></td>
                                <td></td><td></td><td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 6: Nomenclatura de compuestos nitrogenados",
            enunciado: `Nombra los siguientes compuestos nitrogenados por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-NH-CH_3}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>b)</td><td><div data-chemfig="{(CH_3)_3-N}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>c)</td><td><div data-chemfig="CH_{3}-CH(-[2]CH_{3})-NH_{2}" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-chemfig="*6(=-=-(-[2]NH_{2})=-)" data-solucion="false" data-longitud="1.75em"></div></td>
                        <td>e)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_2-CH_2-CH_2-CH_2-CO-NH_2}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>f)</td><td><div data-chemfig="{H-CO-NH_2}" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="{CH_3-CH_2-CO-NH-CH_3}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>h)</td><td><div data-chemfig="*6(=-=-(-[2]CO-[0]NH_{2})=-)" data-solucion="false" data-longitud="1.75em"></div></td>
                        <td>i)</td><td><div data-chemfig="{CH_3- C\\equiv N}" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-chemfig="{CH_3-CH_2-C \\equiv N}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>k)</td><td><div data-chemfig="{N \\equiv C - CH_2-CH_2- CH_3}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>l)</td><td><div data-chemfig="{CH_3-CH_2-NO_2}" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>m)</td><td><div data-chemfig="{NO_2-CH_2-CH_2-NO_2}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>n)</td><td><div data-chemfig="CH_{3}-C(-[6]CH_{3})(-[2]CH_{3})-NH_{2}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td></td><td></td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                <table class="tabla-ejercicios-solucion">
                    <thead>
                        <tr>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                            <th></th><th>Fórmula</th><th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-NH-CH_3}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">N-metilpropan-1-amina</td>
                        <td>b)</td><td><div data-chemfig="{(CH_3)_3-N}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">N,N-dimetilmetanamina</td>
                    </tr>
                    <tr>
                        <td>c)</td><td><div data-chemfig="CH_{3}-CH(-[2]CH_{3})-NH_{2}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Propan-2-amina</td>
                        <td>d)</td><td><div data-chemfig="*6(=-=-(-[2]NH_{2})=-)" data-solucion="false" data-longitud="1.75em"></div></td><td style="color: red;">Anilina (Benzenamina)</td>
                    </tr>
                    <tr>
                        <td>e)</td><td><div data-chemfig="{CH_3-CH_2-CH_2-CH_2-CH_2-CH_2-CH_2-CO-NH_2}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Octanamida</td>
                        <td>f)</td><td><div data-chemfig="{H-CO-NH_2}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Metanamida</td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="{CH_3-CH_2-CO-NH-CH_3}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">N-metilpropanamida</td>
                        <td>h)</td><td><div data-chemfig="*6(=-=-(-[2]CO-[0]NH_{2})=-)" data-solucion="false" data-longitud="1.75em"></div></td><td style="color: red;">Benzamida</td>
                    </tr>
                    <tr>
                        <td>i)</td><td><div data-chemfig="{CH_3- C\\equiv N}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Etanonitrilo</td>
                        <td>j)</td><td><div data-chemfig="{CH_3-CH_2-C \\equiv N}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Propanonitrilo</td>
                    </tr>
                    <tr>
                        <td>k)</td><td><div data-chemfig="{N \\equiv C - CH_2-CH_2- CH_3}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Butanonitrilo</td>
                        <td>l)</td><td><div data-chemfig="{CH_3-CH_2-NO_2}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Nitroetano</td>
                    </tr>
                    <tr>
                        <td>m)</td><td><div data-chemfig="{NO_2-CH_2-CH_2-NO_2}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1,2-dinitroetano</td>
                        <td>n)</td><td><div data-chemfig="CH_{3}-C(-[6]CH_{3})(-[2]CH_{3})-NH_{2}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">2-metil-2-nitropropano</td>
                    </tr>
                </tbody>
            </table>
        </div>
        `
        }
    ],
    "variados": [
        {
            titulo: "Problema 1: Formulación de compuestos orgánicos",
            enunciado: `Formula los siguientes compuestos orgánicos por las reglas IUPAC.
            <br>
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
                        <td>a)</td><td>3-etilhexa-1,5-diino</td>
                        <td>b)</td><td>Butanodinitrilo</td>
                        <td>c)</td><td>But-2-en-1,4-diol</td>
                    </tr>
                    <tr>
                        <td>d)</td><td>Tetraclorometano</td>
                        <td>e)</td><td>Ácido 4-yodopentanoico</td>
                        <td>f)</td><td>2,3,4-trimetilpentanal</td>
                    </tr>
                    <tr>
                        <td>g)</td><td>4,5-dimetilocta-3,6-dien-1-ino</td>
                        <td>h)</td><td>N-metilciclobutilamina</td>
                        <td>i)</td><td>Ciclohexil fenil éter</td>
                    </tr>
                    <tr>
                        <td>j)</td><td>2-metilpropanamida</td>
                        <td>k)</td><td>Naftaleno</td>
                        <td>l)</td><td>1,3-dinitrobenceno</td>
                    </tr>
                    <tr>
                        <td>m)</td><td>Propanoato de metilo</td>
                        <td>n)</td><td>Fenilamina</td>
                        <td></td><td></td>
                    </tr>                
                    </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>3-etilhexa-1,5-diino</td><td><div data-chemfig="CH \\equiv C-CH(-[2]CH_{3})- CH_{2}-C \\equiv CH" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>b)</td><td>Butanodinitrilo</td><td><div data-chemfig="{N \\equiv C - CH_2-CH_2- C \\equiv N}" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>But-2-en-1,4-diol</td><td><div data-chemfig="{HO - CH_2 - CH =  CH - CH_{2} - OH}" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>d)</td><td>Tetraclorometano</td><td><div data-chemfig="CCl_{4}" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>Ácido 4-yodopentanoico</td><td><div data-chemfig="CH_{3} - CH(-[2]I) - CH_{2} - CH_{2} - COOH" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>f)</td><td>2,3,4-trimetilpentanal</td><td><div data-chemfig="CH_{3} - CH(-[2]CH_{3})-CH(-[2]CH_{3}) - CH(-[2]CH_{3}) - CHO" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>4,5-dimetilocta-3,6-dien-1-ino</td><td><div data-chemfig="CH_3 - CH = CH - CH(-[2]CH_3) - C (-[2]CH_3) = CH - C \\equiv CH" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>h)</td><td>N-metilciclobutilamina</td><td><div data-chemfig="CH_3 - NH - *4(----)" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>Ciclohexil fenil éter</td><td><div data-chemfig="*6([:150]------) - O - *6(=-=-=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>j)</td><td>2-metilpropanamida</td><td><div data-chemfig="CH_{3} - CH(-[2]CH_{3}) - CO-NH_{2}" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>k)</td><td>Naftaleno</td><td><div data-chemfig="*6(-=-=-*6(-=-=-=))" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>l)</td><td>1,3-dinitrobenceno</td><td><div data-chemfig="*6(=-(-[7]NO_{2})=-(-[2]NO_{2})=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>Propanoato de metilo</td><td><div data-chemfig="{CH_3 - CH_2 - COO - CH_3}" data-solucion="true" data-longitud="2.25em"></div></td>
                                <td>n)</td><td>Fenilamina</td><td><div data-chemfig="*6(=-=(-[1]NH_{2})-=-)" data-solucion="true" data-longitud="2.25em"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 2: Nomenclatura de compuestos orgánicos",
            enunciado: `Nombra los siguientes compuestos orgánicos por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="*6(=(-[6]CH_{2}-[0]CH_{3})-=(-[1]CH_{2}-[0]CH_{3})-=-)" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>b)</td><td><div data-chemfig="CH_{3} - CH_{2} - C(-[2]Cl)(-[6]Cl) - CH(-[2]CH_{2}-[0]CH_{3}) - CH_{3}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>c)</td><td><div data-chemfig="CH_{3} - CH_{2} - CH(-[2]OH) - CH(-[2]OH) - CH_{3}" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-C(=[2]O)-CH_{2}-C(=[2]O)-CH_{2}-CH(-[2]CH_{3})-CH_{3}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>e)</td><td><div data-chemfig="{(}CH_{3}{)}_{3} - N" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>f)</td><td><div data-chemfig="*6([:0]=-=(-[1]NH-[7]*6([:-30]=-=-=-))-=-)" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="CH_{2}=CH-C(=[2]O)-CH=CH-CH_{3}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>h)</td><td><div data-chemfig="{CH_{3}-CH_{2}-CH_{2}-CO-NH_{2}}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>i)</td><td><div data-chemfig="{CH_3-COO-CH_2-CH_2-CH_3}" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-chemfig="{CH_3-CO-NH-CH_3}" data-solucion="false" data-longitud="2.25em"></div></td>
                        <td>k)</td><td><div data-chemfig="CH \\equiv C - CH(-[2]CH_{2}-[4]CH_{2}-[4]CH_{3})-CH_2- C \\equiv C- C(-[2]CH_{3})(-[6]CH_{3}) - CH_{2} - CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>l)</td><td><div data-chemfig="{NO_2-CH_2-CH_2-NO_2}" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Fórmula</th><th>Nombre</th>
                                <th></th><th>Fórmula</th><th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td><div data-chemfig="*6(=(-[6]CH_{2}-[0]CH_{3})-=(-[1]CH_{2}-[0]CH_{3})-=-)" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1,3-dietilbenceno</td>
                                <td>b)</td><td><div data-chemfig="CH_{3} - CH_{2} - C(-[2]Cl)(-[6]Cl) - CH(-[2]CH_{2}-[0]CH_{3}) - CH_{3}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">3,3-dicloro-4-metilhexano</td>
                            </tr>
                            <tr>
                                <td>c)</td><td><div data-chemfig="CH_{3} - CH_{2} - CH(-[2]OH) - CH(-[2]OH) - CH_{3}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Hexano-2,3-diol</td>
                                <td>d)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH_{2}-C(=[2]O)-CH_{2}-C(=[2]O)-CH_{2}-CH(-[2]CH_{3})-CH_{3}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">2-metilnonano-4,6-diona</td>
                            </tr>
                            <tr>
                                <td>e)</td><td><div data-chemfig="{(}CH_{3}{)}_{3} - N" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">N,N-dimetiletanamina</td>
                                <td>f)</td><td><div data-chemfig="*6([:0]=-=(-[1]NH-[7]*6([:-30]=-=-=-))-=-)" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Difenilamina</td>
                            </tr>
                            <tr>
                                <td>g)</td><td><div data-chemfig="CH_{2}=CH-C(=[2]O)-CH=CH-CH_{3}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Hexa-1,4-dien-3-ona</td>
                                <td>h)</td><td><div data-chemfig="{CH_{3}-CH_{2}-CH_{2}-CO-NH_{2}}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Butanamida</td>
                            </tr>
                            <tr>
                                <td>i)</td><td><div data-chemfig="{CH_3-COO-CH_2-CH_2-CH_3}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">Etanoato de propilo</td>
                                <td>j)</td><td><div data-chemfig="{CH_3-CO-NH-CH_3}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">N-metiletanamida</td>
                            </tr>
                            <tr>
                                <td>k)</td><td><div data-chemfig="CH \\equiv C - CH(-[2]CH_{2}-[4]CH_{2}-[4]CH_{3})-CH_2- C \\equiv C- C(-[2]CH_{3})(-[6]CH_{3}) - CH_{2} - CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">7,7-dimetil-3-propilnona-1,5-diino</td>
                                <td>l)</td><td><div data-chemfig="{NO_2-CH_2-CH_2-NO_2}" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1,2-dinitroetano</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 3: Formulación de compuestos orgánicos",
            enunciado: `Formula los siguientes compuestos orgánicos por las reglas IUPAC.
            <br>
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
                            <td>a)</td><td>4-hidroxihexan-3-ona</td>
                            <td>b)</td><td>Ácido 2-hidroxipropanoico</td>
                            <td>c)</td><td>2,3-dihidroxi-1-metilbutanal</td>
                        </tr>
                        <tr>
                            <td>d)</td><td>2-hidroxi-3-oxobutanal</td>
                            <td>e)</td><td>Ácido 4-oxopentanoico</td>
                            <td>f)</td><td>3-aminobutan-2-ol</td>
                        </tr>
                        <tr>
                            <td>g)</td><td>2-etoxietanol</td>
                            <td>h)</td><td>Ácido fenoxietanoico</td>
                            <td>i)</td><td>2-nitroetanol</td>
                        </tr>
                        <tr>
                            <td>j)</td><td>Ácido 2,3-dihidroxibutanoico</td>
                            <td>k)</td><td>Ácido cianoetanoico</td>
                            <td>l)</td><td>3-oxopent-4-enal</td>
                        </tr>
                        <tr>
                            <td>m)</td><td>5-hidroxihexa-1,4-dien-3-ona</td>
                            <td>n)</td><td>3-amino-2-etoxi-4-metilhexanonitrilo</td>
                            <td>ñ</td><td>Ácido 2-hidroxi-2-metilbutanoico</td>
                        </tr>
                        <tr>
                            <td>o)</td><td>3-aminopropanoato de etilo</td>
                            <td>p)</td><td>Ácido 3-ciano-2-metoxibutanoico</td>
                            <td>q)</td><td>3-hidroxiciclohexanona</td>
                        </tr>                  
                        </tbody>
                </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                                <th></th><th>Nombre</th><th>Fórmula</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td>4-hidroxihexan-3-ona</td><td><div data-chemfig="CH_{3} - CH_{2} - CO - CH(-[2]OH)-CH_2- CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>b)</td><td>Ácido 2-hidroxipropanoico</td><td><div data-chemfig="CH_{3} - CH(-[2]OH)- COOH" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>c)</td><td>2,3-dihidroxi-2-metilbutanal</td><td><div data-chemfig="CHO - C(-[2]OH)(-[6]CH_{3})-CH(-[2]OH)- CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>d)</td><td>2-hidroxi-3-oxobutanal</td><td><div data-chemfig="CHO - CH(-[2]OH) - CO - CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>e)</td><td>Ácido 4-oxopentanoico</td><td><div data-chemfig="{CH_{3} - CO - CH_{2} - CH_{2} - COOH}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>f)</td><td>3-aminobutan-2-ol</td><td><div data-chemfig="CH_{3}- CH(-[2]NH_{2})- CH(-[2]OH) - CH_{3}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>g)</td><td>2-etoxietanol</td><td><div data-chemfig="{CH_{3}-CH_{2}-O-CH_{2}-CH_{2}-OH}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>h)</td><td>Ácido fenoxietanoico</td><td><div data-chemfig="([4]*6([:150]=-=-=-)) - O - CH_{2}-COOH" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>i)</td><td>2-nitroetanol</td><td><div data-chemfig="{NO_{2}- CH_{2}-CH_{2}-OH}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>j)</td><td>Ácido 2,3-dihidroxibutanoico</td><td><div data-chemfig="CH_{3}-CH(-[2]OH)-CH(-[2]OH)-COOH" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>k)</td><td>Ácido cianoetanoico</td><td><div data-chemfig="{CN - CH_{2}-COOH}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>l)</td><td>3-oxopent-4-enal</td><td><div data-chemfig="{CH_{2}=CH-CO-CH_{2}-CHO}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>m)</td><td>5-hidroxihexa-1,4-dien-3-ona</td><td><div data-chemfig="CH_{3}-C(-[2]OH)=CH-CO-CH=CH_{2}" data-solucion="true" data-longitud="2em"></div></td>
                                <td>n)</td><td>3-amino-2-etoxi-4-metilhexanonitrilo</td><td><div data-chemfig="CH_{3}-CH_{2}-CH(-[2]CH_{3})-CH(-[2]NH_{2})-CH(-[2]O-[0]CH_{2}-CH_{3})-CN" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>ñ)</td><td>Ácido 2-hidroxi-2-metilbutanoico</td><td><div data-chemfig="CH_{3}-CH_{2}-C(-[2]CH_{3})(-[6]OH)-COOH" data-solucion="true" data-longitud="2em"></div></td>
                                <td>o)</td><td>3-aminopropanoato de etilo</td><td><div data-chemfig="{NH_{2}-CH_{2}-CH_{2}-COO-CH_{2}-CH_{3}}" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                            <tr>
                                <td>p)</td><td>Ácido 3-ciano-2-metoxibutanoico</td><td><div data-chemfig="CH_3-CH(-[2]CN)-CH(-[2]O-[0]CH_{3})-COOH" data-solucion="true" data-longitud="2em"></div></td>
                                <td>q)</td><td>3-hidroxiciclohexanona</td><td><div data-chemfig="*6(--(-[7]OH)--(=[2]O)--)" data-solucion="true" data-longitud="2em"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        },
        {
            titulo: "Problema 4: Nomenclatura de compuestos orgánicos",
            enunciado: `Nombra los siguientes compuestos orgánicos por las reglas IUPAC.
            <br>
            <table class="tabla-ejercicios">
                <thead>
                    <tr>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                        <th></th><th>Estructura</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a)</td><td><div data-chemfig="{CH_{3}-CHOH-CH_{2}-COOH}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>b)</td><td><div data-chemfig="{CHO-CH_{2}-COOH}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>c)</td><td><div data-chemfig="CHO-CH(-[2]CH_{3})-CHO" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>d)</td><td><div data-chemfig="CH \\equiv C - CH(-[2]CH_{2}-[0]CH_{3})-CH(-[6]CH_{3})-C \\equiv C - CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>e)</td><td><div data-chemfig="{CH_{3}-CH_{2}-CO-COOH}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>f)</td><td><div data-chemfig="CH_{3}-CH(-[2]OH)-CHO" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>g)</td><td><div data-chemfig="{CH_{3}-CO-CH_{2}-CH_{2}-NH_{2}}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>h)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH(-[6]*5(-----))-COOH" data-solucion="false" data-longitud="2em"></div></td>
                        <td>i)</td><td><div data-chemfig="*6(-=-=-*6(-=(-[3]CH_{3})-=(-[6]CH_{3})-=))" data-solucion="false" data-longitud="2.25em"></div></td>
                    </tr>
                    <tr>
                        <td>j)</td><td><div data-chemfig="CH_{3}-CH(-[6]*6(=-=-=-))-CH_{2}-CO-CH_{3}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>k)</td><td><div data-chemfig="*5(-=-(-[2]OH)-(-[3]NH_{2})-)" data-solucion="false" data-longitud="2em"></div></td>
                        <td>l)</td><td><div data-chemfig="{CH_{3}-CH_{2}-CH=CH-CH_{2}-CO-NH_{2}}" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>
                    <tr>
                        <td>m)</td><td><div data-chemfig="{CHO-CH_{2}-CO-CH=CH_{2}}" data-solucion="false" data-longitud="2em"></div></td>
                        <td>n)</td><td><div data-chemfig="COOH-CH(-[2]OH)-CH(-[2]OH)-COOH" data-solucion="false" data-longitud="2em"></div></td>
                        <td>ñ)</td><td><div data-chemfig="CH_{2}-CO-CH(-[2]CH_{2}-CH_{3})-CH_{2}-COOH" data-solucion="false" data-longitud="2em"></div></td>
                    </tr>                    
                </tbody>
            </table>`,
            solucion: `
                <div class='paso'>
                    <table class="tabla-ejercicios-solucion">
                        <thead>
                            <tr>
                                <th></th><th>Fórmula</th><th>Nombre</th>
                                <th></th><th>Fórmula</th><th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>a)</td><td><div data-chemfig="{CH_{3}-CHOH-CH_{2}-COOH}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Ácido 3-hidroxibutanoico</td>
                                <td>b)</td><td><div data-chemfig="{CHO-CH_{2}-COOH}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Ácido 3-oxopropanoico</td>
                            </tr>
                            <tr>
                                <td>c)</td><td><div data-chemfig="CHO-CH(-[2]CH_{3})-CHO" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">2-metilpropanodial</td>
                                <td>d)</td><td><div data-chemfig="CH \\equiv C - CH(-[2]CH_{2}-[0]CH_{3})-CH(-[6]CH_{3})-C \\equiv C - CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">3-etil-4-metilhepta-1,5-diino</td>
                            </tr>
                            <tr>
                                <td>e)</td><td><div data-chemfig="{CH_{3}-CH_{2}-CO-COOH}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Ácido 2-oxobutanoico</td>
                                <td>f)</td><td><div data-chemfig="CH_{3}-CH(-[2]OH)-CHO" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">2-hidroxipropanal</td>
                            </tr>
                            <tr>
                                <td>g)</td><td><div data-chemfig="{CH_{3}-CO-CH_{2}-CH_{2}-NH_{2}}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">4-aminobutan-2-ona</td>
                                <td>h)</td><td><div data-chemfig="CH_{3}-CH_{2}-CH(-[6]*5(-----))-COOH" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Ácido 2-ciclobutilbutanoico</td>
                            </tr>
                            <tr>
                                <td>i)</td><td><div data-chemfig="*6(-=-=-*6(-=(-[3]CH_{3})-=(-[6]CH_{3})-=))" data-solucion="false" data-longitud="2.25em"></div></td><td style="color: red;">1,3-dimetilnaftaleno</td>
                                <td>j)</td><td><div data-chemfig="CH_{3}-CH(-[6]*6(=-=-=-))-CH_{2}-CO-CH_{3}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">4-fenilpentan-2-ona</td>
                            </tr>
                            <tr>
                                <td>k)</td><td><div data-chemfig="*5(-=-(-[2]OH)-(-[3]NH_{2})-)" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">2-aminociclopent-3-en-1-ol</td>
                                <td>l)</td><td><div data-chemfig="{CH_{3}-CH_{2}-CH=CH-CH_{2}-CO-NH_{2}}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Hex-3-enamida</td>
                            </tr>
                            <tr>
                                <td>m)</td><td><div data-chemfig="{CHO-CH_{2}-CO-CH=CH_{2}}" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">3-oxopent-5-enal</td>
                                <td>n)</td><td><div data-chemfig="COOH-CH(-[2]OH)-CH(-[2]OH)-COOH" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Ácido 2,3-dihidroxibutanodioico</td>
                            </tr>
                            <tr>
                                <td>ñ)</td><td><div data-chemfig="CH_{2}-CO-CH(-[2]CH_{2}-CH_{3})-CH_{2}-COOH" data-solucion="false" data-longitud="2em"></div></td><td style="color: red;">Ácido 3-etil-4-oxopentanoico</td>
                                <td></td><td></td><td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        }
    ]
};