/**
 * print.js - Módulo de generación de documento de problemas de Química
 * Genera una vista en pestaña/ventana auxiliar expandida para lectura e impresión del tema activo.
 */

function imprimirProblemas(incluirSolucion) {
    if (typeof baseDatosTemas === 'undefined' || !baseDatosTemas || !temaActualKey) {
        alert("Error: No se ha encontrado la base de datos de temas o no hay ningún tema seleccionado.");
        return;
    }

    const temaObj = baseDatosTemas[temaActualKey];
    const tituloPrincipal = temaObj.titulo;

    let cuerpoHTML = "";
    let totalProblemas = 0;
    let contadorBloques = 0;

    for (const secKey in temaObj.secciones) {
        if (!Object.prototype.hasOwnProperty.call(temaObj.secciones, secKey)) continue;
        
        contadorBloques++;
        const seccion = temaObj.secciones[secKey];
        const listaProblemas = seccion.problemas || [];
        const numProblemas = listaProblemas.length;

        cuerpoHTML += `
            <div class="separador-categoria ${contadorBloques > 1 ? 'salto-pagina' : ''}">
                <div class="banner-categoria">
                    <h1 class="titulo-categoria">${seccion.nombre}</h1>
                    <span class="subtitulo-categoria">Total de ejercicios en esta sección: ${numProblemas}</span>
                </div>
            </div>
        `;

        listaProblemas.forEach((prob, idx) => {
            totalProblemas++;
            cuerpoHTML += `
                <div class="bloque-problema">
                    <div class="cabecera-problema">
                        <span class="badge-num">Ejercicio ${idx + 1}</span>
                        <h2 class="titulo-problema">${prob.titulo}</h2>
                    </div>
                    <div class="enunciado">${prob.enunciado}</div>
            `;

            if (incluirSolucion) {
                cuerpoHTML += `<div class="seccion-solucion"><strong>Solución:</strong>`;
                if (prob.solucion && prob.solucion.trim() !== "") {
                    cuerpoHTML += prob.solucion;
                } else {
                    cuerpoHTML += `<p class="solucion-no-disponible"><em>(Solución no disponible)</em></p>`;
                }
                cuerpoHTML += `</div>`;
            }

            cuerpoHTML += `</div>`;
        });
    }

    const anchoPantalla = window.screen.availWidth;
    const altoPantalla = window.screen.availHeight;
    const ventana = window.open('', '_blank', `width=${anchoPantalla},height=${altoPantalla},left=0,top=0`);

    if (!ventana) {
        alert("El navegador ha bloqueado la ventana emergente. Por favor, permítelas para ver el documento.");
        return;
    }

    const htmlDocumento = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>${tituloPrincipal} - ${incluirSolucion ? 'Enunciados y Soluciones' : 'Enunciados'}</title>
    <style>
        @page {
            size: A4;
            margin: 15mm 15mm 20mm 15mm;
            @bottom-center {
                content: counter(page);
                font-family: 'Segoe UI', Arial, sans-serif;
                font-size: 11px;
                color: #64748b !important;
            }
        }

        *, *::before, *::after {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            padding: 30px 5%;
            max-width: 100%;
            margin: 0 auto;
            background: #ffffff;
        }

        .header-pdf {
            text-align: center;
            border-bottom: 3px double #0f172a;
            padding-bottom: 12px;
            margin-bottom: 30px;
        }
        .header-pdf h1 { margin: 0; font-size: 24px; color: #0f172a; letter-spacing: -0.5px; }
        .header-pdf p { margin: 6px 0 0 0; font-size: 15px; color: #64748b; font-weight: 500; }
        
        .separador-categoria {
            margin-top: 25px;
            margin-bottom: 25px;
        }
        .banner-categoria {
            background-color: #ffedd5 !important;
            border: 1px solid #e2e8f0;
            padding: 18px 24px;
            border-radius: 8px;
        }
        .titulo-categoria {
            font-size: 20px;
            color: #0f172a;
            margin: 0;
            padding: 0;
        }
        .subtitulo-categoria {
            font-size: 13px;
            color: #64748b;
            display: block;
            margin-top: 4px;
        }

        .bloque-problema {
            margin-bottom: 22px;
            padding: 20px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }
        .cabecera-problema {
            display: flex;
            align-items: baseline;
            gap: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 8px;
        }
        .badge-num {
            background-color: #0f172a !important;
            color: #ffffff !important;
            font-size: 12px;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 4px;
            white-space: nowrap;
        }
        .titulo-problema {
            font-size: 17px;
            color: #1e293b;
            margin: 0;
            font-weight: 600;
        }
        .enunciado {
            font-size: 16px;
            color: #334155;
            margin-bottom: 12px;
        }
        .seccion-solucion {
            margin-top: 15px;
            padding: 15px 18px;
            background-color: #f8fafc !important;
            border-left: 5px solid #10b981;
            font-size: 15px;
            border-radius: 0 6px 6px 0;
        }
        .seccion-solucion .paso {
            display: block !important;
            margin-bottom: 12px;
        }
        .solucion-no-disponible {
            color: #94a3b8;
            margin: 4px 0 0 0;
        }

        /* --- ESTILOS DE TABLAS DE EJERCICIOS --- */
        .tabla-ejercicios, .tabla-ejercicios-solucion {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
            font-size: 0.9em;
        }

        .tabla-ejercicios th, .tabla-ejercicios-solucion th {
            background-color: #3498db !important;
            color: white !important;
            padding: 10px;
            text-align: left;
            font-weight: bold;
        }

        .tabla-ejercicios td, .tabla-ejercicios-solucion td {
            padding: 10px;
            border: 1px solid #e2e8f0;
            vertical-align: middle;
        }

        .tabla-ejercicios td:nth-child(odd) { 
            font-weight: bold; 
            color: #e74c3c !important; 
            width: 40px; 
        }
        
        .tabla-ejercicios tr:nth-child(even), .tabla-ejercicios-solucion tr:nth-child(even) { 
            background-color: #f9f9f9 !important; 
        }

        @media print {
            body { padding: 0; max-width: 100%; }
            .bloque-problema { page-break-inside: avoid; break-inside: avoid; box-shadow: none; }
            .separador-categoria.salto-pagina { page-break-before: always; break-before: page; }
        }
    </style>
    <script>
        window.MathJax = {
            tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] }
        };

        function escribirChemfig() {
            const contenedoresChemfig = document.querySelectorAll('[data-chemfig]');
            if (contenedoresChemfig.length === 0) return;

            contenedoresChemfig.forEach(contenedor => {
                if (contenedor.getAttribute('data-rendered') === 'true') return;

                let formulaChemfig = contenedor.getAttribute('data-chemfig').trim();
                if (!formulaChemfig) return;

                // Limpiar llaves si existen
                if (formulaChemfig.startsWith('{') && formulaChemfig.endsWith('}')) {
                    formulaChemfig = formulaChemfig.slice(1, -1).trim();
                }

                formulaChemfig = `\\rm ${formulaChemfig}`;
                const esSolucion = contenedor.getAttribute('data-solucion') === 'true';

                try {
                    contenedor.innerHTML = '';
                    const longitudEnlace = contenedor.getAttribute('data-longitud');
                    let configuracionLongitud = '';
                    
                    if (longitudEnlace) {
                        configuracionLongitud = `\\setchemfig{atom sep=${longitudEnlace}}`;
                    }
                    if (!formulaChemfig.startsWith('\\chemfig')) {
                        formulaChemfig = `\\chemfig{${formulaChemfig}}`;
                    }
                    if (configuracionLongitud) {
                        formulaChemfig = `${configuracionLongitud}${formulaChemfig}`;
                    }

                    if (esSolucion) {
                        formulaChemfig = `\\color{red}{${formulaChemfig}}`;
                    } else {
                        formulaChemfig = `\\color{black}{${formulaChemfig}}`;
                    }

                    const codigoCodificado = encodeURIComponent(formulaChemfig);
                    
                    const moleculaImg = document.createElement('img');
                    moleculaImg.src = `https://latex.codecogs.com/svg.image?${codigoCodificado}`;
                    moleculaImg.alt = formulaChemfig;
                    moleculaImg.style.display = 'block';
                    moleculaImg.style.margin = 'left'; 

                    contenedor.appendChild(moleculaImg);
                    contenedor.setAttribute('data-rendered', 'true');
                } catch (error) {
                    console.error('Error en la macro Chemfig:', error);
                }
            });
        }

        window.addEventListener('DOMContentLoaded', async () => {
            // 1. Dibujar moléculas Chemfig
            escribirChemfig();

            // 2. Esperar a que MathJax termine de procesar las fórmulas
            if (window.MathJax && window.MathJax.typesetPromise) {
                await window.MathJax.typesetPromise();
            }

            // 3. Esperar a que las imágenes SVG de CodeCogs descarguen antes de permitir/lanzar impresión
            const imagenes = document.querySelectorAll('img');
            const promesas = Array.from(imagenes).map(img => {
                if (img.complete) return Promise.resolve();
                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            });
            await Promise.all(promesas);
        });
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
</head>
<body>
    <div class="header-pdf">
        <h1>${tituloPrincipal}</h1>
        <p>${incluirSolucion ? 'Enunciados y Soluciones' : 'Enunciados'}</p>
    </div>
    
    ${cuerpoHTML}
</body>
</html>`;

    ventana.document.open();
    ventana.document.write(htmlDocumento);
    ventana.document.close();
}