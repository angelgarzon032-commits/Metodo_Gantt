/**
 * ==========================================================================
 * SCRIPT DE INTERACTIVIDAD SIMULADA PARA EL DIAGRAMA DE GANTT
 * ==========================================================================
 */

/**
 * Actualiza dinámicamente tanto la barra visual del Gantt como su texto de porcentaje.
 * 
 * @param {string} taskId - El identificador de la tarea (ej. 'task1', 'task2').
 * @param {string|number} value - El nuevo porcentaje de progreso (de 0 a 100).
 */
function updateGanttProgress(taskId, value) {
    // Seleccionamos la barra contenedora y el elemento span que muestra el texto numérico
    const bar = document.getElementById(`bar-${taskId}`);
    const textVal = document.getElementById(`val-${taskId}`);
    
    // Validamos que ambos elementos existan en el DOM antes de operar para evitar errores en consola
    if (bar && textVal) {
        
        // Modificamos la propiedad CSS personalizada (--progress) asignada inline en el HTML.
        // Esto altera el pseudoelemento ::before en el CSS para reajustar el ancho de la barra oscura.
        bar.style.setProperty('--progress', `${value}%`);
        
        // Actualizamos de forma síncrona el contenido de texto que visualiza el usuario en pantalla
        textVal.textContent = `${value}%`;
    }
}

/**
 * Inicialización de los escuchadores de eventos una vez el DOM esté completamente cargado.
 * Garantiza que los elementos input de tipo 'range' estén listos para ser manipulados.
 */
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura y almacenamiento de los tres controles deslizantes (sliders) del HTML
    const task1Range = document.getElementById('range-task1');
    const task2Range = document.getElementById('range-task2');
    const task3Range = document.getElementById('range-task3');

    // --- CONFIGURACIÓN DE LA TAREA 1 (Investigación y Diseño) ---
    if (task1Range) {
        // El evento 'input' se dispara en tiempo real mientras el usuario arrastra el slider
        task1Range.addEventListener('input', (e) => {
            updateGanttProgress('task1', e.target.value);
        });
    }

    // --- CONFIGURACIÓN DE LA TAREA 2 (Desarrollo Frontend) ---
    if (task2Range) {
        // Captura el valor instantáneo del control y lo envía a la función de renderizado
        task2Range.addEventListener('input', (e) => {
            updateGanttProgress('task2', e.target.value);
        });
    }

    // --- CONFIGURACIÓN DE LA TAREA 3 (Pruebas y Despliegue) ---
    if (task3Range) {
        // Vincula el tercer slider para cerrar el ciclo interactivo del bloque de simulación
        task3Range.addEventListener('input', (e) => {
            updateGanttProgress('task3', e.target.value);
        });
    }
});