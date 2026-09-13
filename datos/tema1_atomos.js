if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema1"] = {
    id: "tema1",
    titulo: "Tema 1: Átomos y enlace",
    deshabilitado: false,
    secciones: {
        "configuraciones": {
            nombre: "Configuraciones electrónicas",
            problemas: [
                {
                    titulo: "Átomo de hidrógeno",
                    enunciado: "Escribe los cuatro primeros niveles electrónicos del átomo de hidrógeno en orden creciente de energía.",
                    solucion: `
                    <div class='paso'>
                        El átomo de hidrógeno tiene un solo electrón, que se encuentra en el nivel 1s. Por lo tanto, los cuatro primeros niveles electrónicos son:<br>
                        1. Nivel 1: 1s^1<br>
                        2. Nivel 2: 2s^1<br>
                        3. Nivel 3: 3s^1<br>
                        4. Nivel 4: 4s^1
                    </div>`
                },
                {
                    titulo: "Subniveles de energía",
                    enunciado: "Indica cuántos subniveles de energía existen en el tercer nivel y el número de electrones que caben en cada uno.",
                    solucion: `
                    <div class='paso'>
                        En el tercer nivel de energía ($\\ce{n = 3}$) existen tres subniveles: 3s, 3p y 3d.<br>
                        - Subnivel 3s: puede albergar hasta 2 electrones.<br>
                        - Subnivel 3p: puede albergar hasta 6 electrones.<br>
                        - Subnivel 3d: puede albergar hasta 10 electrones.<br>
                        En total, el tercer nivel puede albergar un máximo de 18 electrones.                    
                    </div>`
                },
                {
                    titulo: "Elección de subniveles",
                    enunciado: "Indica, en cada uno de los siguientes casos, en qué subnivel de energía caben más electrones.<br>(a) 1s o 2s<br>(b) 2p o 3p<br>(c) 2s o 2p",
                    solucion: `
                    <div class='paso'>
                        (a) 2s, ya que ambos subniveles pueden albergar 2 electrones, pero el subnivel 2s pertenece al segundo nivel de energía, que tiene más capacidad total.<br>
                        (b) 3p, ya que ambos subniveles pueden albergar 6 electrones, pero el subnivel 3p pertenece al tercer nivel de energía, que tiene más capacidad total.<br>
                        (c) 2p, ya que el subnivel 2s puede albergar 2 electrones, mientras que el subnivel 2p puede albergar 6 electrones.
                    </div>`
                },
                {
                    titulo: "Orbitales s y p",
                    enunciado: "¿Qué forma tienen los orbitales de tipo s? ¿Y los de tipo p?",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Orbitales y capas electrónicas",
                    enunciado: "Con la ayuda del diagrama de Möller indica:<br>(a) El orbital que se llena antes del 3d.<br>(b) El orbital que se llena después del 2s.<br>(c) El orbital en el que se coloca el decimotercer electrón.<br>(d) El orbital de energía intermedia entre el 5s y el 5p.<br>(e) El número de electrones que puede albergar la capa n = 3.",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Configuración electrónica y electrones de valencia",
                    enunciado: "Escribe la configuración electrónica de los siguientes elementos e indica cuántos electrones tienen en su capa de valencia:<br>a) He (Z = 2)<br>b) B (Z = 5)<br>c) Ne (Z = 10)<br>d) S (Z = 16)<br>e) K (Z = 19)<br>f) Fe (Z = 26)<br>g) Cu (Z = 29)<br>h) Br (Z = 35)<br>i) Zr (Z = 40)<br>j) U (Z = 92)",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Configuración electrónica de iones",
                    enunciado: "Escribe la configuración electrónica de los siguientes iones e indica si se trata de cationes o de aniones:<br>a) H⁺ (Z = 1)<br>b) B³⁺ (Z = 5)<br>c) F⁻ (Z = 9)<br>d) S²⁻ (Z = 16)<br>e) K⁺ (Z = 19)<br>f) Fe²⁺ (Z = 26)<br>g) Cu⁺ (Z = 29)<br>h) Br⁻ (Z = 35)",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Configuraciones electrónicas incorrectas",
                    enunciado: "Las siguientes configuraciones electrónicas en estado fundamental contienen algún error. Identifica los errores y corrígelos.<br>a) He (Z = 2): 1s² 2s¹<br>b) B (Z = 5): 1s³ 2s²<br>c) Ne (Z = 10): 1s² 1p⁶ 2s²<br>d) F⁻ (Z = 9): 1s² 2s² 2p⁵<br>e) K⁺ (Z = 19): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹<br>f) Fe (Z = 26): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁸<br>g) Cu⁺ (Z = 29): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹ 4s¹",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Configuraciones electrónicas en estado excitado",
                    enunciado: "Las siguientes configuraciones están en estado excitado, rescríbelas en su estado fundamental:<br>(a) 1s² 2s² 2p⁴ 3s¹<br>(b) 1s² 2s² 2p⁶ 3s¹ 3p³<br>(c) 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                }
            ]
        },
        "tabla-periodica": {
            nombre: "Tabla periódica",
            problemas: [
                {
                    titulo: "Cortezas electrónicas y grupos",
                    enunciado: "Representa las cortezas electrónicas de los elementos cuyos números atómicos son 13, 15, 37 y 7. ¿Cuáles de ellos pertenecen al mismo grupo?",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Grupos y periodos",
                    enunciado: "De los elementos del ejercicio anterior, indica en qué grupo y en qué periodo se encuentran. ¿Cómo se llaman esos grupos?",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Grupos y periodos de elementos",
                    enunciado: "Dados los átomos F (Z = 9), Na (Z = 11), B (Z = 5), S (Z = 16), Ca (Z = 20), Ar (Z = 18), As (Z = 33):<br>(a) Escribe su configuración electrónica.<br>(b) Indica en qué grupo y en qué periodo se encuentran.<br>(c) Qué nombre recibe su grupo.<br>(d) Cuáles son metales, no metales y gases nobles.<br>(e) Indica qué ion formará cada uno. Justifícalo.",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Tamaño atómico",
                    enunciado: "Coloca por orden creciente de tamaño atómico los siguientes elementos: carbono (Z = 6), sodio (Z = 11) y flúor (Z = 9). Justifica tu respuesta.",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Radio atómico",
                    enunciado: "Razona cuál de los elementos de las siguientes parejas tiene mayor radio.<br>(a) Rb y Na<br>(b) Na y Al<br>(c) Br y O<br>(d) Br y F",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Reactividad química",
                    enunciado: "De cada par de elementos del ejercicio anterior, ¿cuál presenta mayor reactividad química?",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Reactividad química de elementos",
                    enunciado: "Elige, razonadamente, el elemento con mayor reactividad química entre los siguientes: estroncio (Z = 38), aluminio (Z = 13) y magnesio (Z = 12).",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Clasificación de elementos",
                    enunciado: "Dados los siguientes elementos: N, Be, K, Ca, Se, F y Kr. Indica:<br>(a) Los que tienen propiedades semejantes.<br>(b) Los metales.<br>(c) Los no metales.<br>(d) Los gases nobles.<br>(e) Los que tienen igual número de electrones en su última capa que el oxígeno.<br>(f) El metal más reactivo.<br>(g) El no metal más reactivo.",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Reactividad de no metales",
                    enunciado: "Indica el no metal menos reactivo entre los siguientes: silicio, azufre, oxígeno y selenio.",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Características de elementos químicos",
                    enunciado: "Observa la siguiente figura:<br><img src='img/u1_ej19.png' alt='Cortezas electrónicas de F, Be, Ga y Se' style='width: 100%; max-width: 600px;'><br>Con la ayuda de los datos que aparecen en ella indica:<br>(a) Los símbolos de los cuatro elementos.<br>(b) Los elementos no metálicos.<br>(c) Los elementos del grupo 13.<br>(d) Los elementos pertenecientes al 2º periodo.<br>(e) El metal más reactivo.<br>(f) El no metal de mayor tamaño.<br>(g) Los elementos que tienen completo el tercer nivel energético de su corteza electrónica.<br>(h) Los electrones de valencia de cada uno de los elementos.<br>(i) Los protones de cada elemento suponiendo átomos neutros.",
                    solucion: `
                    <div class='paso'>Solución pendiente de añadir.
                    
                    </div>`
                },
                {
                    titulo: "Reacciones de fisión nuclear",
                    enunciado: "Completa las siguientes reacciones de fisión:<br>(a) ²³⁹U + ⁰n → 3 ⁰n + ⁷⁹Rb + ?<br>(b) ²³⁷U + ⁰n → ⁸⁹Rb + ¹⁴⁴Cs + ?",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                },
                {
                    titulo: "Reacciones de fusión nuclear",
                    enunciado: "Completa las siguientes ecuaciones nucleares:<br>(a) ²²⁶Ra → ⁴₂He + ?<br>(b) ¹⁴N + ⁰n → ¹¹B + ?<br>(c) ²⁷N + ⁴He → ³⁰P + ?<br>(d) ⁷Li + ⁰n → ? + ¹⁰B",
                    solucion: "<div class='paso'>Solución pendiente de añadir.</div>"
                }
            ]
        }
    }
};