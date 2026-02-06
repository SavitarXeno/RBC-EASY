
function showCategory(category) {

    document.getElementById('category-list').style.display = 'none';

    document.getElementById('operations').style.display = 'block';

const operations = {
    fisica: [
        {name: 'Fuerza', id: 'Newton'},
        {name: 'Aceleración', id: 'Aceleración'},
        {name: 'Masa', id: 'Masa'},
        {name: 'Energía Cinética', id: 'Energía Cinética'},
        {name: 'Temperatura', id: 'Temperatura'},
        {name: 'Distancia', id: 'Distancia'},
        {name: 'Velocidad', id: 'Velocidad'},
        {name: 'Trabajo', id: 'Trabajo'},
        {name: 'Potencia', id: 'Potencia'},
        {name: 'Presión', id: 'Presión'},
        {name: 'Intensidad', id: 'Intensidad'},
        {name: 'Campo Eléctrico', id: 'Campo Eléctrico'},
        {name: 'Campo Magnético', id: 'Campo Magnético'},
        {name: 'Ley de Coulomb', id: 'Ley de Coulomb'},
        {name: 'Ley de Gauss', id: 'Ley de Gauss'},
        {name: 'Ley de Ampère', id: 'Ley de Ampère'},
        {name: 'Ley de Faraday', id: 'Ley de Faraday'},
        {name: 'Ley de Lenz', id: 'Ley de Lenz'},
        {name: 'Ley de Ohm', id: 'Ley de Ohm'},
        {name: 'Ley de Watts', id: 'Ley de Watts'},
        {name: 'Ley de Newton', id: 'Ley de Newton'},
        {name: 'Movimiento Uniformemente Acelerado', id: 'Movimiento Uniformemente Acelerado'},
        {name: 'Movimiento Circular', id: 'Movimiento Circular'},
        {name: 'Ley de Gravitación Universal', id: 'Ley de Gravitación Universal'},
        {name: 'Trabajo de Fricción', id: 'Trabajo de Fricción'},
        {name: 'Energía Potencial Gravitatoria', id: 'Energía Potencial Gravitatoria'},
        {name: 'Energía Potencial Elástica', id: 'Energía Potencial Elástica'},
        {name: 'Energía Térmica', id: 'Energía Térmica'},
        {name: 'Ley de Hooke', id: 'Ley de Hooke'},
        {name: 'Ley de Stefan-Boltzmann', id: 'Ley de Stefan-Boltzmann'},
        {name: 'Ley de Wien', id: 'Ley de Wien'},
        {name: 'Calor Específico', id: 'Calor Específico'},
        {name: 'Cambio de Estado', id: 'Cambio de Estado'},
        {name: 'Ley de los Gases Ideales', id: 'Ley de los Gases Ideales'},
        {name: 'Ecuación de Estado', id: 'Ecuación de Estado'},
        {name: 'Energía Interna', id: 'Energía Interna'},
        {name: 'Entalpía', id: 'Entalpía'},
        {name: 'Entropía', id: 'Entropía'},
        {name: 'Presión Parcial', id: 'Presión Parcial'},
        {name: 'Teorema de Bernoulli', id: 'Teorema de Bernoulli'},
        {name: 'Ecuación de Continuidad', id: 'Ecuación de Continuidad'},
        {name: 'Ley de Boyle', id: 'Ley de Boyle'},
        {name: 'Ley de Charles', id: 'Ley de Charles'},
        {name: 'Ley de Gay-Lussac', id: 'Ley de Gay-Lussac'},
        {name: 'Energía de un Sistema', id: 'Energía de un Sistema'},
        {name: 'Potencial Eléctrico', id: 'Potencial Eléctrico'},
        {name: 'Fuerza Electromotriz', id: 'Fuerza Electromotriz'},
        {name: 'Resistencia Eléctrica', id: 'Resistencia Eléctrica'},
        {name: 'Capacitancia', id: 'Capacitancia'},
        {name: 'Inductancia', id: 'Inductancia'},
        {name: 'Corriente Alterna', id: 'Corriente Alterna'},
        {name: 'Corriente Continua', id: 'Corriente Continua'},
        {name: 'Ley de Kirchhoff', id: 'Ley de Kirchhoff'},
        {name: 'Ley de Joule', id: 'Ley de Joule'},
        {name: 'Resistencia de Cables', id: 'Resistencia de Cables'},
        {name: 'Inductores en Serie', id: 'Inductores en Serie'},
        {name: 'Inductores en Paralelo', id: 'Inductores en Paralelo'},
        {name: 'Capacitores en Serie', id: 'Capacitores en Serie'},
        {name: 'Capacitores en Paralelo', id: 'Capacitores en Paralelo'},
        {name: 'Fuerza de Lorentz', id: 'Fuerza de Lorentz'},
        {name: 'Radiación Electromagnética', id: 'Radiación Electromagnética'},
        {name: 'Difracción de Luz', id: 'Difracción de Luz'},
        {name: 'Interferencia de Luz', id: 'Interferencia de Luz'},
        {name: 'Polarización de Luz', id: 'Polarización de Luz'},
        {name: 'Leyes de Maxwell', id: 'Leyes de Maxwell'},
        {name: 'Fórmulas de Ondas', id: 'Fórmulas de Ondas'},
        {name: 'Óptica Geométrica', id: 'Óptica Geométrica'},
        {name: 'Óptica Física', id: 'Óptica Física'},
        {name: 'Espectro Electromagnético', id: 'Espectro Electromagnético'},
        {name: 'Radiación de Cuerpo Negro', id: 'Radiación de Cuerpo Negro'},
        {name: 'Efecto Compton', id: 'Efecto Compton'},
        {name: 'Efecto Doppler', id: 'Efecto Doppler'},
        {name: 'Energía de Vibración', id: 'Energía de Vibración'},
        {name: 'Teoría de la Relatividad', id: 'Teoría de la Relatividad'},
        {name: 'Fuerza Gravitatoria', id: 'Fuerza Gravitatoria'},
        {name: 'Fuerza Nuclear', id: 'Fuerza Nuclear'},
        {name: 'Fuerza Electromagnética', id: 'Fuerza Electromagnética'},
        {name: 'Fuerza de Coulomb', id: 'Fuerza de Coulomb'},
    ],
    quimica: [
        {name: 'Masa Molar', id: 'Masa Molar'},
        {name: 'Masa Molecular', id: 'Masa Molecular'},
        {name: 'Concentración Molar', id: 'Concentración Molar'},
        {name: 'Ecuación de Estado', id: 'Ecuación de Estado'},
        {name: 'Ley de Boyle', id: 'Ley de Boyle'},
        {name: 'Ley de Charles', id: 'Ley de Charles'},
        {name: 'Ley de Gay-Lussac', id: 'Ley de Gay-Lussac'},
        {name: 'Equilibrio Químico', id: 'Equilibrio Químico'},
        {name: 'Constante de Equilibrio', id: 'Constante de Equilibrio'},
        {name: 'Ley de Acción de Masas', id: 'Ley de Acción de Masas'},
        {name: 'Energía de Activación', id: 'Energía de Activación'},
        {name: 'Reacciones Químicas', id: 'Reacciones Químicas'},
        {name: 'Ley de Hess', id: 'Ley de Hess'},
        {name: 'Calor de Reacción', id: 'Calor de Reacción'},
        {name: 'Potencial Electromotriz', id: 'Potencial Electromotriz'},
        {name: 'Electroquímica', id: 'Electroquímica'},
        {name: 'Energía de Enlace', id: 'Energía de Enlace'},
        {name: 'Ácidos y Bases', id: 'Ácidos y Bases'},
        {name: 'pH y pOH', id: 'pH y pOH'},
        {name: 'Reacciones Redox', id: 'Reacciones Redox'},
        {name: 'Ecuación de Nernst', id: 'Ecuación de Nernst'},
        {name: 'Ecuación de Arrhenius', id: 'Ecuación de Arrhenius'},
        {name: 'Ecuación de Langmuir', id: 'Ecuación de Langmuir'},
        {name: 'Ley de Raoult', id: 'Ley de Raoult'},
        {name: 'Propiedades Coligativas', id: 'Propiedades Coligativas'},
        {name: 'Teoría de Ácidos y Bases de Bronsted-Lowry', id: 'Teoría de Ácidos y Bases de Bronsted-Lowry'},
        {name: 'Teoría de Ácidos y Bases de Lewis', id: 'Teoría de Ácidos y Bases de Lewis'},
        {name: 'Leyes de Solubilidad', id: 'Leyes de Solubilidad'},
        {name: 'Leyes de Solución', id: 'Leyes de Solución'},
        {name: 'Ley de Dilución de Ostwald', id: 'Ley de Dilución de Ostwald'},
        {name: 'Teoría de Colisiones', id: 'Teoría de Colisiones'},
        {name: 'Cinetica Química', id: 'Cinetica Química'},
        {name: 'Reacciones de Ácido-Base', id: 'Reacciones de Ácido-Base'},
        {name: 'Reacciones de Oxidación-Reducción', id: 'Reacciones de Oxidación-Reducción'},
        {name: 'Reacciones de Precipitación', id: 'Reacciones de Precipitación'},
        {name: 'Reacciones de Combustión', id: 'Reacciones de Combustión'},
        {name: 'Reacciones de Sustitución', id: 'Reacciones de Sustitución'},
        {name: 'Reacciones de Adición', id: 'Reacciones de Adición'},
        {name: 'Reacciones de Eliminación', id: 'Reacciones de Eliminación'},
        {name: 'Reacciones de Polimerización', id: 'Reacciones de Polimerización'},
        {name: 'Reacciones de Hidrólisis', id: 'Reacciones de Hidrólisis'},
        {name: 'Reacciones de Oxidación', id: 'Reacciones de Oxidación'},
        {name: 'Reacciones de Reducción', id: 'Reacciones de Reducción'},
        {name: 'Teoría del Estado de Transición', id: 'Teoría del Estado de Transición'},
        {name: 'Teoría de la Perturbación', id: 'Teoría de la Perturbación'},
        {name: 'Teoría de la Reacción Química', id: 'Teoría de la Reacción Química'},
        {name: 'Equilibrio Ácido-Base', id: 'Equilibrio Ácido-Base'},
        {name: 'Equilibrio de Solubilidad', id: 'Equilibrio de Solubilidad'},
        {name: 'Equilibrio de Reacciones Complejas', id: 'Equilibrio de Reacciones Complejas'},
        {name: 'Equilibrio de Reacciones Redox', id: 'Equilibrio de Reacciones Redox'},
        {name: 'Equilibrio de Reacciones Ácido-Base', id: 'Equilibrio de Reacciones Ácido-Base'}
    ],
    matematicas: [
        {name: 'Área Triángulo', id: 'Área Triángulo'},
        {name: 'Área Cuadrado', id: 'Área Cuadrado'},
        {name: 'Área Rectángulo', id: 'Área Rectángulo'},
        {name: 'Volumen Cubo', id: 'Volumen Cubo'},
        {name: 'Volumen Esfera', id: 'Volumen Esfera'},
        {name: 'Hipotenusa Triángulo', id: 'Hipotenusa Triángulo'},
        {name: 'Número Aleatorio', id: 'Número Aleatorio'},
        {name: 'Media Aritmética', id: 'Media Aritmética'},
        {name: 'Mediana', id: 'Mediana'},
        {name: 'Moda', id: 'Moda'},
        {name: 'Desviación Estándar', id: 'Desviación Estándar'},
        {name: 'Varianza', id: 'Varianza'},
        {name: 'Cálculo de Intereses', id: 'Cálculo de Intereses'},
        {name: 'Fórmula General de Áreas', id: 'Fórmula General de Áreas'},
        {name: 'Fórmula General de Volúmenes', id: 'Fórmula General de Volúmenes'},
        {name: 'Ecuaciones Cuadráticas', id: 'Ecuaciones Cuadráticas'},
        {name: 'Ecuaciones Lineales', id: 'Ecuaciones Lineales'},
        {name: 'Ecuaciones Diferenciales', id: 'Ecuaciones Diferenciales'},
        {name: 'Integración', id: 'Integración'},
        {name: 'Diferenciación', id: 'Diferenciación'},
        {name: 'Teorema de Pitágoras', id: 'Teorema de Pitágoras'},
        {name: 'Teorema de Tales', id: 'Teorema de Tales'},
        {name: 'Teorema de la Media', id: 'Teorema de la Media'},
        {name: 'Teorema de Bayes', id: 'Teorema de Bayes'},
        {name: 'Teorema de Gauss', id: 'Teorema de Gauss'},
        {name: 'Teorema de Lagrange', id: 'Teorema de Lagrange'},
        {name: 'Teorema de Stokes', id: 'Teorema de Stokes'},
        {name: 'Fórmulas de Combinatoria', id: 'Fórmulas de Combinatoria'},
        {name: 'Fórmulas de Probabilidad', id: 'Fórmulas de Probabilidad'},
        {name: 'Series de Taylor', id: 'Series de Taylor'},
        {name: 'Series de Fourier', id: 'Series de Fourier'},
        {name: 'Transformada de Laplace', id: 'Transformada de Laplace'},
        {name: 'Transformada de Fourier', id: 'Transformada de Fourier'},
        {name: 'Cálculo de Determinantes', id: 'Cálculo de Determinantes'},
        {name: 'Cálculo de Matrices', id: 'Cálculo de Matrices'},
        {name: 'Álgebra Lineal', id: 'Álgebra Lineal'},
        {name: 'Teoría de Conjuntos', id: 'Teoría de Conjuntos'},
        {name: 'Álgebra Abstracta', id: 'Álgebra Abstracta'},
        {name: 'Geometría Analítica', id: 'Geometría Analítica'},
        {name: 'Geometría Diferencial', id: 'Geometría Diferencial'},
        {name: 'Cálculo Vectorial', id: 'Cálculo Vectorial'},
        {name: 'Geometría Espacial', id: 'Geometría Espacial'},
        {name: 'Cálculo Tensorial', id: 'Cálculo Tensorial'},
        {name: 'Teoría de Números', id: 'Teoría de Números'},
        {name: 'Ecuaciones No Lineales', id: 'Ecuaciones No Lineales'},
        {name: 'Métodos Numéricos', id: 'Métodos Numéricos'},
        {name: 'Métodos de Optimización', id: 'Métodos de Optimización'},
        {name: 'Métodos de Aproximación', id: 'Métodos de Aproximación'},
        {name: 'Algoritmos de Ordenación', id: 'Algoritmos de Ordenación'},
        {name: 'Algoritmos de Búsqueda', id: 'Algoritmos de Búsqueda'},
        {name: 'Teoría de Grafos', id: 'Teoría de Grafos'},
        {name: 'Teoría de Juegos', id: 'Teoría de Juegos'},
        {name: 'Combinatoria', id: 'Combinatoria'},
        {name: 'Teoría de Probabilidades', id: 'Teoría de Probabilidades'},
        {name: 'Estadística Descriptiva', id: 'Estadística Descriptiva'},
        {name: 'Estadística Inferencial', id: 'Estadística Inferencial'},
        {name: 'Métodos de Estimación', id: 'Métodos de Estimación'},
        {name: 'Regresión Lineal', id: 'Regresión Lineal'},
        {name: 'Regresión No Lineal', id: 'Regresión No Lineal'},
        {name: 'Análisis de Varianza', id: 'Análisis de Varianza'},
        {name: 'Cálculo de Probabilidades', id: 'Cálculo de Probabilidades'},
        {name: 'Pruebas de Hipótesis', id: 'Pruebas de Hipótesis'},
        {name: 'Intervalos de Confianza', id: 'Intervalos de Confianza'}
    ]
};


    const operationList = document.getElementById('operation-list');
    operationList.innerHTML = '';

    if (operations[category]) {
        operations[category].forEach(operation => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.className = 'button';
            button.textContent = operation.name;
            button.onclick = () => advancedOperation(operation.id);
            li.appendChild(button);
            operationList.appendChild(li);
        });
    }
}

function showCategories() {

    document.getElementById('category-list').style.display = 'block';

    document.getElementById('operations').style.display = 'none';
}

function advancedOperation(operationId) {
    console.log('Operación avanzada seleccionada:', operationId);
}

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

function toggleMobileView() {
    const calculator = document.querySelector('.calculator');
    const sidebar = document.querySelector('.sidebar');
    const guideSidebar = document.querySelector('.guide-sidebar');
    const mobileButton = document.querySelector('.neon-button');
    if (calculator.classList.toggle('mobile-view')) {
        sidebar.style.display = 'none';
        guideSidebar.style.display = 'none';
        calculator.style.width = '90%';
        mobileButton.textContent = 'Ver sitio computador';
    } else {
        sidebar.style.display = 'block';
        guideSidebar.style.display = 'block';
        calculator.style.width = '320px';
        mobileButton.textContent = 'Ver sitio móvil';
    }
}
    let currentNumber = ''; 
    let previousNumber = ''; 
    
    function appendToScreen(value) {
        let currentValue = document.getElementById('screen').value;
        if (!isNaN(value) || value === '.') {
            currentNumber += value;
            document.getElementById('screen').value = currentValue + value;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            previousNumber = currentNumber;
            currentNumber = '';
            document.getElementById('screen').value = currentValue + value;
            document.getElementById('previousNumber').textContent = previousNumber;
        } else {
            document.getElementById('screen').value += value;
        }
    }

    function clearScreen() {
        document.getElementById('screen').value = '';
        currentNumber = '';
        previousNumber = '';
        document.getElementById('previousNumber').textContent = '';
    }

    function calculate() {
        try {
            let expression = document.getElementById('screen').value;
            let result = eval(expression);
            document.getElementById('screen').value = result.toLocaleString();
            addToHistory(expression + " = " + result.toLocaleString());
            showOperationGuide(expression);
        } catch (error) {
            alert('Invalid expression');
        }
    }

    function backspace() {
        let currentValue = document.getElementById('screen').value;
        document.getElementById('screen').value = currentValue.slice(0, -1);
    }

    function reset() {
        clearScreen();
        document.getElementById('history').innerHTML = '';
    }
    
    function openCategory(fileName) {
        window.open(fileName, '_blank');
    }

    
    function addToHistory(entry) {
        let historyItem = document.createElement('div');
        historyItem.textContent = entry;
        historyItem.classList.add('history-item');
        document.getElementById('history').appendChild(historyItem);
    }

    function copyResult() {
        let result = document.getElementById('screen').value;
        navigator.clipboard.writeText(result).then(function() {
            alert('Resultado copiado al portapapeles: ' + result);
        }, function() {
            alert('No se pudo copiar el resultado.');
        });
    }

    function togglePopup() {
        let popup = document.getElementById('popup');
        let overlay = document.querySelector('.popup-overlay');
        if (popup.style.display === 'block') {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        } else {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        }
    }

    function advancedOperation(operation) {
        switch(operation) {
            case 'Newton':
                let acceleration = parseFloat(prompt("Ingrese la aceleración (m/s^2):"));
                let mass = parseFloat(prompt("Ingrese la masa (kg):"));
                let newtonResult = acceleration * mass;
                document.getElementById('screen').value = newtonResult.toLocaleString();
                addToHistory("Fuerza (Newton) = " + newtonResult.toLocaleString() + " N");
                showOperationGuide("Fuerza (Newton) = m * a");
                break;
    
            case 'Aceleración':
                let velocity = parseFloat(prompt("Ingrese la velocidad final (m/s):"));
                let initialVelocity = parseFloat(prompt("Ingrese la velocidad inicial (m/s):"));
                let time = parseFloat(prompt("Ingrese el tiempo (s):"));
                let accelerationResult = (velocity - initialVelocity) / time;
                document.getElementById('screen').value = accelerationResult.toLocaleString();
                addToHistory("Aceleración = " + accelerationResult.toLocaleString() + " m/s^2");
                showOperationGuide("Aceleración = (v_f - v_i) / t");
                break;
    
            case 'Masa':
                let force = parseFloat(prompt("Ingrese la fuerza (N):"));
                let acceleration2 = parseFloat(prompt("Ingrese la aceleración (m/s^2):"));
                let massResult = force / acceleration2;
                document.getElementById('screen').value = massResult.toLocaleString();
                addToHistory("Masa = " + massResult.toLocaleString() + " kg");
                showOperationGuide("Masa = F / a");
                break;
    
            case 'Energía Cinética':
                let mass2 = parseFloat(prompt("Ingrese la masa (kg):"));
                let velocity2 = parseFloat(prompt("Ingrese la velocidad (m/s):"));
                let kineticEnergyResult = 0.5 * mass2 * velocity2 ** 2;
                document.getElementById('screen').value = kineticEnergyResult.toLocaleString();
                addToHistory("Energía Cinética = " + kineticEnergyResult.toLocaleString() + " J");
                showOperationGuide("Energía Cinética = 0.5 * m * v^2");
                break;
    
            case 'Temperatura':
                let tempCelsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));
                let tempFahrenheit = (tempCelsius * 9/5) + 32;
                document.getElementById('screen').value = tempFahrenheit.toLocaleString();
                addToHistory("Temperatura en Fahrenheit = " + tempFahrenheit.toLocaleString() + " °F");
                showOperationGuide("Convertir de Celsius a Fahrenheit: °F = (°C * 9/5) + 32");
                break;
    
            case 'Distancia':
                let speed = parseFloat(prompt("Ingrese la velocidad (m/s):"));
                let time2 = parseFloat(prompt("Ingrese el tiempo (s):"));
                let distanceResult = speed * time2;
                document.getElementById('screen').value = distanceResult.toLocaleString();
                addToHistory("Distancia = " + distanceResult.toLocaleString() + " m");
                showOperationGuide("Distancia = velocidad * tiempo");
                break;
    
            case 'Velocidad':
                let distance = parseFloat(prompt("Ingrese la distancia (m):"));
                let time3 = parseFloat(prompt("Ingrese el tiempo (s):"));
                let velocityResult = distance / time3;
                document.getElementById('screen').value = velocityResult.toLocaleString();
                addToHistory("Velocidad = " + velocityResult.toLocaleString() + " m/s");
                showOperationGuide("Velocidad = distancia / tiempo");
                break;
    
            case 'Trabajo':
                let forceWork = parseFloat(prompt("Ingrese la fuerza (N):"));
                let distanceWork = parseFloat(prompt("Ingrese la distancia (m):"));
                let angle = parseFloat(prompt("Ingrese el ángulo entre la fuerza y la distancia (grados):"));
                let angleRad = angle * Math.PI / 180;
                let workResult = forceWork * distanceWork * Math.cos(angleRad);
                document.getElementById('screen').value = workResult.toLocaleString();
                addToHistory("Trabajo = " + workResult.toLocaleString() + " J");
                showOperationGuide("Trabajo = F * d * cos(θ)");
                break;
    
            case 'Potencia':
                let workPower = parseFloat(prompt("Ingrese el trabajo (J):"));
                let timePower = parseFloat(prompt("Ingrese el tiempo (s):"));
                let powerResult = workPower / timePower;
                document.getElementById('screen').value = powerResult.toLocaleString();
                addToHistory("Potencia = " + powerResult.toLocaleString() + " W");
                showOperationGuide("Potencia = W / t");
                break;
    
            case 'Presión':
                let forcePressure = parseFloat(prompt("Ingrese la fuerza (N):"));
                let area = parseFloat(prompt("Ingrese el área (m^2):"));
                let pressureResult = forcePressure / area;
                document.getElementById('screen').value = pressureResult.toLocaleString();
                addToHistory("Presión = " + pressureResult.toLocaleString() + " Pa");
                showOperationGuide("Presión = F / A");
                break;
    
            case 'Intensidad':
                let powerIntensity = parseFloat(prompt("Ingrese la potencia (W):"));
                let areaIntensity = parseFloat(prompt("Ingrese el área (m^2):"));
                let intensityResult = powerIntensity / areaIntensity;
                document.getElementById('screen').value = intensityResult.toLocaleString();
                addToHistory("Intensidad = " + intensityResult.toLocaleString() + " W/m^2");
                showOperationGuide("Intensidad = P / A");
                break;
    
            case 'Campo Eléctrico':
                let forceElectric = parseFloat(prompt("Ingrese la fuerza eléctrica (N):"));
                let chargeElectric = parseFloat(prompt("Ingrese la carga (C):"));
                let electricFieldResult = forceElectric / chargeElectric;
                document.getElementById('screen').value = electricFieldResult.toLocaleString();
                addToHistory("Campo Eléctrico = " + electricFieldResult.toLocaleString() + " N/C");
                showOperationGuide("Campo Eléctrico = F / q");
                break;
    
            case 'Campo Magnético':
                let forceMagnetic = parseFloat(prompt("Ingrese la fuerza magnética (N):"));
                let chargeMagnetic = parseFloat(prompt("Ingrese la carga (C):"));
                let velocityMagnetic = parseFloat(prompt("Ingrese la velocidad (m/s):"));
                let angleMagnetic = parseFloat(prompt("Ingrese el ángulo (grados):"));
                let angleRadMagnetic = angleMagnetic * Math.PI / 180;
                let magneticFieldResult = forceMagnetic / (chargeMagnetic * velocityMagnetic * Math.sin(angleRadMagnetic));
                document.getElementById('screen').value = magneticFieldResult.toLocaleString();
                addToHistory("Campo Magnético = " + magneticFieldResult.toLocaleString() + " T");
                showOperationGuide("Campo Magnético = F / (q * v * sin(θ))");
                break;
    
            case 'Ley de Coulomb':
                let charge1 = parseFloat(prompt("Ingrese la primera carga (C):"));
                let charge2 = parseFloat(prompt("Ingrese la segunda carga (C):"));
                let distanceCoulomb = parseFloat(prompt("Ingrese la distancia entre cargas (m):"));
                const k = 8.9875517923e9; // Constante de Coulomb
                let coulombResult = (k * charge1 * charge2) / (distanceCoulomb ** 2);
                document.getElementById('screen').value = coulombResult.toLocaleString();
                addToHistory("Fuerza de Coulomb = " + coulombResult.toLocaleString() + " N");
                showOperationGuide("Fuerza de Coulomb = k * (q1 * q2) / r^2");
                break;
    
            case 'Ley de Gauss':
                let chargeGauss = parseFloat(prompt("Ingrese la carga encerrada (C):"));
                let areaGauss = parseFloat(prompt("Ingrese el área de la superficie (m^2):"));
                const epsilon = 8.854187817e-12; // Permitividad del vacío
                let gaussResult = chargeGauss / (epsilon * areaGauss);
                document.getElementById('screen').value = gaussResult.toLocaleString();
                addToHistory("Flujo Eléctrico (Ley de Gauss) = " + gaussResult.toLocaleString() + " N·m^2/C");
                showOperationGuide("Flujo Eléctrico = Q / (ε * A)");
                break;
    
            case 'Ley de Ampère':
                let currentAmpere = parseFloat(prompt("Ingrese la corriente (A):"));
                let lengthAmpere = parseFloat(prompt("Ingrese la longitud del conductor (m):"));
                let mu = 4 * Math.PI * 1e-7; // Permeabilidad magnética
                let ampereResult = mu * currentAmpere / (2 * Math.PI * lengthAmpere);
                document.getElementById('screen').value = ampereResult.toLocaleString();
                addToHistory("Campo Magnético (Ley de Ampère) = " + ampereResult.toLocaleString() + " T");
                showOperationGuide("Campo Magnético = μ * I / (2 * π * r)");
                break;
    
            case 'Ley de Faraday':
                let magneticFlux = parseFloat(prompt("Ingrese el cambio en el flujo magnético (Wb):"));
                let timeFaraday = parseFloat(prompt("Ingrese el tiempo (s):"));
                let faradayResult = -magneticFlux / timeFaraday;
                document.getElementById('screen').value = faradayResult.toLocaleString();
                addToHistory("Fuerza Electromotriz (Ley de Faraday) = " + faradayResult.toLocaleString() + " V");
                showOperationGuide("Fuerza Electromotriz = -ΔΦ / Δt");
                break;
    
                case 'Ley de Lenz':
                    alert("La Ley de Lenz, es enunciada por Heinrich Lenz en 1834, establece que la corriente inducida en un circuito cerrado genera un campo magnético que se opone al cambio en el flujo magnético que la produce. No calcula un valor numérico directo, sino que define la dirección de la fuerza electromotriz inducida (FEM). A continuación, se presenta una explicación detallada.");
                    document.getElementById('screen').value = "No aplica (explicación cualitativa)";
                    addToHistory("Ley de Lenz: La corriente inducida se opone al cambio de flujo magnético");
                    showOperationGuide(
                        "Ley de Lenz: Este principio electromagnético complementa la Ley de Faraday, expresada como " +
                        "ℰ = -dΦ_B/dt, donde ℰ es la fuerza electromotriz inducida (V), y Φ_B = ∫∫ B⃗ · dA⃗ es el flujo magnético (Wb), " +
                        "definido por el campo magnético B⃗ (T) y el área diferencial dA⃗ (m²). El signo negativo indica que la FEM inducida " +
                        "genera una corriente cuyo campo magnético inducido (B_ind) contrarresta la variación temporal del flujo externo (dΦ_B/dt). " +
                        "Físicamente, esto asegura la conservación de la energía: si el flujo magnético aumenta (dΦ_B/dt > 0), la corriente " +
                        "inducida fluye en dirección opuesta para reducirlo; si disminuye (dΦ_B/dt < 0), la corriente refuerza el flujo perdido. " +
                        "Por ejemplo, al acercar un imán a una espira, el flujo magnético Φ_B crece, induciendo una corriente que genera un " +
                        "campo opuesto al del imán. Este principio subyace en el funcionamiento de transformadores, generadores y frenos " +
                        "electromagnéticos. Aunque no produce un resultado numérico directo en esta calculadora, su integración con la Ley " +
                        "de Faraday permite predecir la dinámica de sistemas electromagnéticos complejos."
                    );
                    break;

            case 'Ley de Ohm':
                let currentOhm = parseFloat(prompt("Ingrese la corriente (A):"));
                let resistanceOhm = parseFloat(prompt("Ingrese la resistencia (Ω):"));
                let voltageOhm = currentOhm * resistanceOhm;
                document.getElementById('screen').value = voltageOhm.toLocaleString();
                addToHistory("Voltaje (Ley de Ohm) = " + voltageOhm.toLocaleString() + " V");
                showOperationGuide("Voltaje = I * R");
                break;
            
        case 'Ley de Watts':
            let voltageWatts = parseFloat(prompt("Ingrese el voltaje (V):"));
            let currentWatts = parseFloat(prompt("Ingrese la corriente (A):"));
            let powerWatts = voltageWatts * currentWatts;
            document.getElementById('screen').value = powerWatts.toLocaleString();
            addToHistory("Potencia (Ley de Watts) = " + powerWatts.toLocaleString() + " W");
            showOperationGuide("Potencia = V × I");
        break;

            
            case 'Ley de Newton':
                let massNewton = parseFloat(prompt("Ingrese la masa (kg):"));
                let accelerationNewton = parseFloat(prompt("Ingrese la aceleración (m/s^2):"));
                let newtonLawResult = massNewton * accelerationNewton;
                document.getElementById('screen').value = newtonLawResult.toLocaleString();
                addToHistory("Fuerza (Ley de Newton) = " + newtonLawResult.toLocaleString() + " N");
                showOperationGuide("Fuerza = m * a");
                break;
    
            case 'Movimiento Uniformemente Acelerado':
                let initialVelocityMUA = parseFloat(prompt("Ingrese la velocidad inicial (m/s):"));
                let accelerationMUA = parseFloat(prompt("Ingrese la aceleración (m/s^2):"));
                let timeMUA = parseFloat(prompt("Ingrese el tiempo (s):"));
                let distanceMUA = initialVelocityMUA * timeMUA + 0.5 * accelerationMUA * timeMUA ** 2;
                document.getElementById('screen').value = distanceMUA.toLocaleString();
                addToHistory("Distancia (MUA) = " + distanceMUA.toLocaleString() + " m");
                showOperationGuide("Distancia = v_i * t + 0.5 * a * t^2");
                break;
    
            case 'Movimiento Circular':
                let radiusCircular = parseFloat(prompt("Ingrese el radio (m):"));
                let velocityCircular = parseFloat(prompt("Ingrese la velocidad (m/s):"));
                let centripetalForce = (mass * velocityCircular ** 2) / radiusCircular;
                document.getElementById('screen').value = centripetalForce.toLocaleString();
                addToHistory("Fuerza Centrípeta = " + centripetalForce.toLocaleString() + " N");
                showOperationGuide("Fuerza Centrípeta = m * v^2 / r");
                break;
    
            case 'Ley de Gravitación Universal':
                let mass1 = parseFloat(prompt("Ingrese la primera masa (kg):"));
                let mass2Grav = parseFloat(prompt("Ingrese la segunda masa (kg):"));
                let distanceGrav = parseFloat(prompt("Ingrese la distancia entre centros (m):"));
                const G = 6.67430e-11; // Constante gravitacional
                let gravForce = (G * mass1 * mass2Grav) / (distanceGrav ** 2);
                document.getElementById('screen').value = gravForce.toLocaleString();
                addToHistory("Fuerza Gravitacional = " + gravForce.toLocaleString() + " N");
                showOperationGuide("Fuerza Gravitacional = G * (m1 * m2) / r^2");
                break;
    
            case 'Trabajo de Fricción':
                let frictionForce = parseFloat(prompt("Ingrese la fuerza de fricción (N):"));
                let distanceFriction = parseFloat(prompt("Ingrese la distancia (m):"));
                let frictionWorkResult = frictionForce * distanceFriction;
                document.getElementById('screen').value = frictionWorkResult.toLocaleString();
                addToHistory("Trabajo de Fricción = " + frictionWorkResult.toLocaleString() + " J");
                showOperationGuide("Trabajo de Fricción = F_fricción * d");
                break;
    
            case 'Energía Potencial Gravitatoria':
                let massGravPot = parseFloat(prompt("Ingrese la masa (kg):"));
                let height = parseFloat(prompt("Ingrese la altura (m):"));
                const g = 9.81; // Aceleración gravitacional
                let gravPotentialEnergy = massGravPot * g * height;
                document.getElementById('screen').value = gravPotentialEnergy.toLocaleString();
                addToHistory("Energía Potencial Gravitatoria = " + gravPotentialEnergy.toLocaleString() + " J");
                showOperationGuide("Energía Potencial Gravitatoria = m * g * h");
                break;
    
            case 'Energía Potencial Elástica':
                let springConstant = parseFloat(prompt("Ingrese la constante del resorte (N/m):"));
                let displacement = parseFloat(prompt("Ingrese el desplazamiento (m):"));
                let elasticPotentialEnergy = 0.5 * springConstant * displacement ** 2;
                document.getElementById('screen').value = elasticPotentialEnergy.toLocaleString();
                addToHistory("Energía Potencial Elástica = " + elasticPotentialEnergy.toLocaleString() + " J");
                showOperationGuide("Energía Potencial Elástica = 0.5 * k * x^2");
                break;
    
            case 'Energía Térmica':
                let massThermal = parseFloat(prompt("Ingrese la masa (kg):"));
                let specificHeat = parseFloat(prompt("Ingrese el calor específico (J/(kg·°C)):"));
                let deltaTemp = parseFloat(prompt("Ingrese el cambio de temperatura (°C):"));
                let thermalEnergy = massThermal * specificHeat * deltaTemp;
                document.getElementById('screen').value = thermalEnergy.toLocaleString();
                addToHistory("Energía Térmica = " + thermalEnergy.toLocaleString() + " J");
                showOperationGuide("Energía Térmica = m * c * ΔT");
                break;
    
            case 'Ley de Hooke':
                let springConstantHooke = parseFloat(prompt("Ingrese la constante del resorte (N/m):"));
                let displacementHooke = parseFloat(prompt("Ingrese el desplazamiento (m):"));
                let hookeForce = -springConstantHooke * displacementHooke;
                document.getElementById('screen').value = hookeForce.toLocaleString();
                addToHistory("Fuerza (Ley de Hooke) = " + hookeForce.toLocaleString() + " N");
                showOperationGuide("Fuerza = -k * x");
                break;
    
            case 'Ley de Stefan-Boltzmann':
                let areaStefan = parseFloat(prompt("Ingrese el área de la superficie (m^2):"));
                let temperatureStefan = parseFloat(prompt("Ingrese la temperatura (K):"));
                const sigma = 5.670367e-8; // Constante de Stefan-Boltzmann
                let stefanResult = sigma * areaStefan * (temperatureStefan ** 4);
                document.getElementById('screen').value = stefanResult.toLocaleString();
                addToHistory("Potencia Radiada (Stefan-Boltzmann) = " + stefanResult.toLocaleString() + " W");
                showOperationGuide("Potencia Radiada = σ * A * T^4");
                break;
    
            case 'Ley de Wien':
                let temperatureWien = parseFloat(prompt("Ingrese la temperatura (K):"));
                const wienConstant = 2.897e-3; // Constante de Wien
                let wavelengthWien = wienConstant / temperatureWien;
                document.getElementById('screen').value = wavelengthWien.toLocaleString();
                addToHistory("Longitud de Onda (Ley de Wien) = " + wavelengthWien.toLocaleString() + " m");
                showOperationGuide("Longitud de Onda = b / T");
                break;
    
            case 'Calor Específico':
                let heat = parseFloat(prompt("Ingrese la cantidad de calor (J):"));
                let massSpecific = parseFloat(prompt("Ingrese la masa (kg):"));
                let deltaTempSpecific = parseFloat(prompt("Ingrese el cambio de temperatura (°C):"));
                let specificHeatResult = heat / (massSpecific * deltaTempSpecific);
                document.getElementById('screen').value = specificHeatResult.toLocaleString();
                addToHistory("Calor Específico = " + specificHeatResult.toLocaleString() + " J/(kg·°C)");
                showOperationGuide("Calor Específico = Q / (m * ΔT)");
                break;
    
            case 'Cambio de Estado':
                let massState = parseFloat(prompt("Ingrese la masa (kg):"));
                let latentHeat = parseFloat(prompt("Ingrese el calor latente (J/kg):"));
                let stateChangeResult = massState * latentHeat;
                document.getElementById('screen').value = stateChangeResult.toLocaleString();
                addToHistory("Calor de Cambio de Estado = " + stateChangeResult.toLocaleString() + " J");
                showOperationGuide("Calor de Cambio de Estado = m * L");
                break;
    
            case 'Ley de los Gases Ideales':
                let molesGas = parseFloat(prompt("Ingrese el número de moles (mol):"));
                let temperatureGas = parseFloat(prompt("Ingrese la temperatura (K):"));
                let volumeGas = parseFloat(prompt("Ingrese el volumen (m^3):"));
                const R = 8.314; // Constante de los gases
                let pressureGas = (molesGas * R * temperatureGas) / volumeGas;
                document.getElementById('screen').value = pressureGas.toLocaleString();
                addToHistory("Presión (Gases Ideales) = " + pressureGas.toLocaleString() + " Pa");
                showOperationGuide("Presión = n * R * T / V");
                break;
    
            case 'Ecuación de Estado':
                let molesStateEq = parseFloat(prompt("Ingrese el número de moles (mol):"));
                let temperatureStateEq = parseFloat(prompt("Ingrese la temperatura (K):"));
                let volumeStateEq = parseFloat(prompt("Ingrese el volumen (m^3):"));
                let pressureStateEq = (molesStateEq * R * temperatureStateEq) / volumeStateEq;
                document.getElementById('screen').value = pressureStateEq.toLocaleString();
                addToHistory("Presión (Ecuación de Estado) = " + pressureStateEq.toLocaleString() + " Pa");
                showOperationGuide("Presión = n * R * T / V");
                break;
    
            case 'Energía Interna':
                let molesInternal = parseFloat(prompt("Ingrese el número de moles (mol):"));
                let temperatureInternal = parseFloat(prompt("Ingrese la temperatura (K):"));
                let degreesFreedom = parseFloat(prompt("Ingrese los grados de libertad (3 para gas monoatómico, 5 para diatómico):"));
                let internalEnergy = (degreesFreedom / 2) * molesInternal * R * temperatureInternal;
                document.getElementById('screen').value = internalEnergy.toLocaleString();
                addToHistory("Energía Interna = " + internalEnergy.toLocaleString() + " J");
                showOperationGuide("Energía Interna = (f/2) * n * R * T");
                break;
    
            case 'Entalpía':
                let internalEnergyEnthalpy = parseFloat(prompt("Ingrese la energía interna (J):"));
                let pressureEnthalpy = parseFloat(prompt("Ingrese la presión (Pa):"));
                let volumeEnthalpy = parseFloat(prompt("Ingrese el volumen (m^3):"));
                let enthalpyResult = internalEnergyEnthalpy + pressureEnthalpy * volumeEnthalpy;
                document.getElementById('screen').value = enthalpyResult.toLocaleString();
                addToHistory("Entalpía = " + enthalpyResult.toLocaleString() + " J");
                showOperationGuide("Entalpía = U + P * V");
                break;
    
            case 'Entropía':
                let heatEntropy = parseFloat(prompt("Ingrese la cantidad de calor (J):"));
                let temperatureEntropy = parseFloat(prompt("Ingrese la temperatura (K):"));
                let entropyResult = heatEntropy / temperatureEntropy;
                document.getElementById('screen').value = entropyResult.toLocaleString();
                addToHistory("Entropía = " + entropyResult.toLocaleString() + " J/K");
                showOperationGuide("Entropía = Q / T");
                break;
    
            case 'Presión Parcial':
                let moleFraction = parseFloat(prompt("Ingrese la fracción molar del gas:"));
                let totalPressure = parseFloat(prompt("Ingrese la presión total (Pa):"));
                let partialPressure = moleFraction * totalPressure;
                document.getElementById('screen').value = partialPressure.toLocaleString();
                addToHistory("Presión Parcial = " + partialPressure.toLocaleString() + " Pa");
                showOperationGuide("Presión Parcial = X * P_total");
                break;
    
            case 'Teorema de Bernoulli':
                let pressure1 = parseFloat(prompt("Ingrese la presión inicial (Pa):"));
                let density = parseFloat(prompt("Ingrese la densidad del fluido (kg/m^3):"));
                let velocity1 = parseFloat(prompt("Ingrese la velocidad inicial (m/s):"));
                let height1 = parseFloat(prompt("Ingrese la altura inicial (m):"));
                let bernoulliConstant = pressure1 + density * g * height1 + 0.5 * density * velocity1 ** 2;
                document.getElementById('screen').value = bernoulliConstant.toLocaleString();
                addToHistory("Constante de Bernoulli = " + bernoulliConstant.toLocaleString() + " Pa");
                showOperationGuide("P + ρ * g * h + 0.5 * ρ * v^2 = constante");
                break;
    
            case 'Ecuación de Continuidad':
                let area1 = parseFloat(prompt("Ingrese el área inicial (m^2):"));
                let velocity1Cont = parseFloat(prompt("Ingrese la velocidad inicial (m/s):"));
                let area2 = parseFloat(prompt("Ingrese el área final (m^2):"));
                let velocity2Cont = (area1 * velocity1Cont) / area2;
                document.getElementById('screen').value = velocity2Cont.toLocaleString();
                addToHistory("Velocidad Final (Continuidad) = " + velocity2Cont.toLocaleString() + " m/s");
                showOperationGuide("A1 * v1 = A2 * v2");
                break;
    
            case 'Ley de Boyle':
                let pressure1Boyle = parseFloat(prompt("Ingrese la presión inicial (Pa):"));
                let volume1Boyle = parseFloat(prompt("Ingrese el volumen inicial (m^3):"));
                let volume2Boyle = parseFloat(prompt("Ingrese el volumen final (m^3):"));
                let pressure2Boyle = (pressure1Boyle * volume1Boyle) / volume2Boyle;
                document.getElementById('screen').value = pressure2Boyle.toLocaleString();
                addToHistory("Presión Final (Ley de Boyle) = " + pressure2Boyle.toLocaleString() + " Pa");
                showOperationGuide("P1 * V1 = P2 * V2");
                break;
    
            case 'Ley de Charles':
                let volume1Charles = parseFloat(prompt("Ingrese el volumen inicial (m^3):"));
                let temp1Charles = parseFloat(prompt("Ingrese la temperatura inicial (K):"));
                let temp2Charles = parseFloat(prompt("Ingrese la temperatura final (K):"));
                let volume2Charles = (volume1Charles * temp2Charles) / temp1Charles;
                document.getElementById('screen').value = volume2Charles.toLocaleString();
                addToHistory("Volumen Final (Ley de Charles) = " + volume2Charles.toLocaleString() + " m^3");
                showOperationGuide("V1 / T1 = V2 / T2");
                break;
    
            case 'Ley de Gay-Lussac':
                let pressure1Gay = parseFloat(prompt("Ingrese la presión inicial (Pa):"));
                let temp1Gay = parseFloat(prompt("Ingrese la temperatura inicial (K):"));
                let temp2Gay = parseFloat(prompt("Ingrese la temperatura final (K):"));
                let pressure2Gay = (pressure1Gay * temp2Gay) / temp1Gay;
                document.getElementById('screen').value = pressure2Gay.toLocaleString();
                addToHistory("Presión Final (Ley de Gay-Lussac) = " + pressure2Gay.toLocaleString() + " Pa");
                showOperationGuide("P1 / T1 = P2 / T2");
                break;
    
            case 'Energía de un Sistema':
                let kineticEnergySystem = parseFloat(prompt("Ingrese la energía cinética (J):"));
                let potentialEnergySystem = parseFloat(prompt("Ingrese la energía potencial (J):"));
                let systemEnergy = kineticEnergySystem + potentialEnergySystem;
                document.getElementById('screen').value = systemEnergy.toLocaleString();
                addToHistory("Energía Total del Sistema = " + systemEnergy.toLocaleString() + " J");
                showOperationGuide("Energía Total = E_cinética + E_potencial");
                break;
    
            case 'Potencial Eléctrico':
                let chargePot = parseFloat(prompt("Ingrese la carga (C):"));
                let distancePot = parseFloat(prompt("Ingrese la distancia (m):"));
                let potentialElectric = (k * chargePot) / distancePot;
                document.getElementById('screen').value = potentialElectric.toLocaleString();
                addToHistory("Potencial Eléctrico = " + potentialElectric.toLocaleString() + " V");
                showOperationGuide("Potencial Eléctrico = k * q / r");
                break;
    
            case 'Fuerza Electromotriz':
                let voltageEMF = parseFloat(prompt("Ingrese el voltaje (V):"));
                let internalResistance = parseFloat(prompt("Ingrese la resistencia interna (Ω):"));
                let currentEMF = parseFloat(prompt("Ingrese la corriente (A):"));
                let emfResult = voltageEMF + (internalResistance * currentEMF);
                document.getElementById('screen').value = emfResult.toLocaleString();
                addToHistory("Fuerza Electromotriz = " + emfResult.toLocaleString() + " V");
                showOperationGuide("Fuerza Electromotriz = V + I * r");
                break;
    
            case 'Resistencia Eléctrica':
                let voltageRes = parseFloat(prompt("Ingrese el voltaje (V):"));
                let currentRes = parseFloat(prompt("Ingrese la corriente (A):"));
                let resistanceResult = voltageRes / currentRes;
                document.getElementById('screen').value = resistanceResult.toLocaleString();
                addToHistory("Resistencia Eléctrica = " + resistanceResult.toLocaleString() + " Ω");
                showOperationGuide("Resistencia = V / I");
                break;
    
            case 'Capacitancia':
                let chargeCap = parseFloat(prompt("Ingrese la carga (C):"));
                let voltageCap = parseFloat(prompt("Ingrese el voltaje (V):"));
                let capacitanceResult = chargeCap / voltageCap;
                document.getElementById('screen').value = capacitanceResult.toLocaleString();
                addToHistory("Capacitancia = " + capacitanceResult.toLocaleString() + " F");
                showOperationGuide("Capacitancia = Q / V");
                break;
    
            case 'Inductancia':
                let voltageInd = parseFloat(prompt("Ingrese el voltaje inducido (V):"));
                let currentChange = parseFloat(prompt("Ingrese el cambio de corriente (A/s):"));
                let inductanceResult = voltageInd / currentChange;
                document.getElementById('screen').value = inductanceResult.toLocaleString();
                addToHistory("Inductancia = " + inductanceResult.toLocaleString() + " H");
                showOperationGuide("Inductancia = V / (ΔI/Δt)");
                break;
    
            case 'Corriente Alterna':
                let voltageAC = parseFloat(prompt("Ingrese el voltaje pico (V):"));
                let acResult = voltageAC / Math.sqrt(2);
                document.getElementById('screen').value = acResult.toLocaleString();
                addToHistory("Voltaje RMS (Corriente Alterna) = " + acResult.toLocaleString() + " V");
                showOperationGuide("Voltaje RMS = V_pico / √2");
                break;
    
            case 'Corriente Continua':
                let powerDC = parseFloat(prompt("Ingrese la potencia (W):"));
                let voltageDC = parseFloat(prompt("Ingrese el voltaje (V):"));
                let dcResult = powerDC / voltageDC;
                document.getElementById('screen').value = dcResult.toLocaleString();
                addToHistory("Corriente Continua = " + dcResult.toLocaleString() + " A");
                showOperationGuide("Corriente = P / V");
                break;
    
            case 'Ley de Kirchhoff':
                let current1 = parseFloat(prompt("Ingrese la corriente 1 (A):"));
                let current2 = parseFloat(prompt("Ingrese la corriente 2 (A):"));
                let current3 = parseFloat(prompt("Ingrese la corriente 3 (A):"));
                let kirchhoffResult = current1 + current2 - current3;
                document.getElementById('screen').value = kirchhoffResult.toLocaleString();
                addToHistory("Suma de Corrientes (Kirchhoff) = " + kirchhoffResult.toLocaleString() + " A");
                showOperationGuide("Suma de corrientes entrantes = Suma de corrientes salientes");
                break;
    
            case 'Ley de Joule':
                let currentJoule = parseFloat(prompt("Ingrese la corriente (A):"));
                let resistanceJoule = parseFloat(prompt("Ingrese la resistencia (Ω):"));
                let jouleResult = currentJoule ** 2 * resistanceJoule;
                document.getElementById('screen').value = jouleResult.toLocaleString();
                addToHistory("Calor (Ley de Joule) = " + jouleResult.toLocaleString() + " J");
                showOperationGuide("Calor = I^2 * R");
                break;
    
            case 'Resistencia de Cables':
                let resistivity = parseFloat(prompt("Ingrese la resistividad del material (Ω·m):"));
                let lengthCable = parseFloat(prompt("Ingrese la longitud del cable (m):"));
                let areaCable = parseFloat(prompt("Ingrese el área transversal (m^2):"));
                let cableResistance = (resistivity * lengthCable) / areaCable;
                document.getElementById('screen').value = cableResistance.toLocaleString();
                addToHistory("Resistencia de Cable = " + cableResistance.toLocaleString() + " Ω");
                showOperationGuide("Resistencia = ρ * L / A");
                break;
    
            case 'Inductores en Serie':
                let inductance1 = parseFloat(prompt("Ingrese la inductancia 1 (H):"));
                let inductance2 = parseFloat(prompt("Ingrese la inductancia 2 (H):"));
                let seriesInductance = inductance1 + inductance2;
                document.getElementById('screen').value = seriesInductance.toLocaleString();
                addToHistory("Inductancia en Serie = " + seriesInductance.toLocaleString() + " H");
                showOperationGuide("Inductancia Total = L1 + L2");
                break;
    
            case 'Inductores en Paralelo':
                let inductance1Par = parseFloat(prompt("Ingrese la inductancia 1 (H):"));
                let inductance2Par = parseFloat(prompt("Ingrese la inductancia 2 (H):"));
                let parallelInductance = 1 / ((1 / inductance1Par) + (1 / inductance2Par));
                document.getElementById('screen').value = parallelInductance.toLocaleString();
                addToHistory("Inductancia en Paralelo = " + parallelInductance.toLocaleString() + " H");
                showOperationGuide("Inductancia Total = 1 / (1/L1 + 1/L2)");
                break;
    
            case 'Capacitores en Serie':
                let capacitance1Ser = parseFloat(prompt("Ingrese la capacitancia 1 (F):"));
                let capacitance2Ser = parseFloat(prompt("Ingrese la capacitancia 2 (F):"));
                let seriesCapacitance = 1 / ((1 / capacitance1Ser) + (1 / capacitance2Ser));
                document.getElementById('screen').value = seriesCapacitance.toLocaleString();
                addToHistory("Capacitancia en Serie = " + seriesCapacitance.toLocaleString() + " F");
                showOperationGuide("Capacitancia Total = 1 / (1/C1 + 1/C2)");
                break;
    
            case 'Capacitores en Paralelo':
                let capacitance1Par = parseFloat(prompt("Ingrese la capacitancia 1 (F):"));
                let capacitance2Par = parseFloat(prompt("Ingrese la capacitancia 2 (F):"));
                let parallelCapacitance = capacitance1Par + capacitance2Par;
                document.getElementById('screen').value = parallelCapacitance.toLocaleString();
                addToHistory("Capacitancia en Paralelo = " + parallelCapacitance.toLocaleString() + " F");
                showOperationGuide("Capacitancia Total = C1 + C2");
                break;
    
            case 'Fuerza de Lorentz':
                let chargeLorentz = parseFloat(prompt("Ingrese la carga (C):"));
                let velocityLorentz = parseFloat(prompt("Ingrese la velocidad (m/s):"));
                let magneticFieldLorentz = parseFloat(prompt("Ingrese el campo magnético (T):"));
                let angleLorentz = parseFloat(prompt("Ingrese el ángulo (grados):"));
                let angleRadLorentz = angleLorentz * Math.PI / 180;
                let lorentzForce = chargeLorentz * velocityLorentz * magneticFieldLorentz * Math.sin(angleRadLorentz);
                document.getElementById('screen').value = lorentzForce.toLocaleString();
                addToHistory("Fuerza de Lorentz = " + lorentzForce.toLocaleString() + " N");
                showOperationGuide("Fuerza de Lorentz = q * v * B * sin(θ)");
                break;
    
            case 'Radiación Electromagnética':
                let frequencyEM = parseFloat(prompt("Ingrese la frecuencia (Hz):"));
                let wavelengthEM = 3e8 / frequencyEM;
                document.getElementById('screen').value = wavelengthEM.toLocaleString();
                addToHistory("Longitud de Onda (Radiación EM) = " + wavelengthEM.toLocaleString() + " m");
                showOperationGuide("Longitud de Onda = c / f");
                break;
    
            case 'Difracción de Luz':
                let wavelengthDiff = parseFloat(prompt("Ingrese la longitud de onda (m):"));
                let slitWidth = parseFloat(prompt("Ingrese el ancho de la rendija (m):"));
                let angleDiff = parseFloat(prompt("Ingrese el ángulo del mínimo (grados):"));
                let angleRadDiff = angleDiff * Math.PI / 180;
                let diffractionResult = wavelengthDiff / (slitWidth * Math.sin(angleRadDiff));
                document.getElementById('screen').value = diffractionResult.toLocaleString();
                addToHistory("Orden de Difracción = " + diffractionResult.toLocaleString());
                showOperationGuide("Orden de Difracción = λ / (d * sin(θ))");
                break;
    
            case 'Interferencia de Luz':
                let wavelengthInter = parseFloat(prompt("Ingrese la longitud de onda (m):"));
                let slitSeparation = parseFloat(prompt("Ingrese la separación entre rendijas (m):"));
                let angleInter = parseFloat(prompt("Ingrese el ángulo del máximo (grados):"));
                let angleRadInter = angleInter * Math.PI / 180;
                let interferenceResult = (slitSeparation * Math.sin(angleRadInter)) / wavelengthInter;
                document.getElementById('screen').value = interferenceResult.toLocaleString();
                addToHistory("Orden de Interferencia = " + interferenceResult.toLocaleString());
                showOperationGuide("Orden de Interferencia = d * sin(θ) / λ");
                break;
    
            case 'Polarización de Luz':
                let intensityInitial = parseFloat(prompt("Ingrese la intensidad inicial (W/m^2):"));
                let anglePol = parseFloat(prompt("Ingrese el ángulo del polarizador (grados):"));
                let angleRadPol = anglePol * Math.PI / 180;
                let polarizationResult = intensityInitial * Math.cos(angleRadPol) ** 2;
                document.getElementById('screen').value = polarizationResult.toLocaleString();
                addToHistory("Intensidad Polarizada = " + polarizationResult.toLocaleString() + " W/m^2");
                showOperationGuide("Intensidad Polarizada = I_0 * cos^2(θ)");
                break;
    
case 'Leyes de Maxwell':
    // Mensaje inicial para alertar al usuario sobre la naturaleza teórica de las Leyes de Maxwell
    alert("Las Leyes de Maxwell, formuladas por James Clerk Maxwell entre 1861 y 1865, constituyen un conjunto de cuatro ecuaciones fundamentales que describen el comportamiento de los campos eléctricos y magnéticos. No producen un valor numérico directo en este contexto, sino que establecen relaciones vectoriales y escalares entre cargas, corrientes y campos. A continuación, se presenta una explicación detallada.");

    // Valor en pantalla: indicamos que no hay cálculo numérico directo, ya que son ecuaciones teóricas
    document.getElementById('screen').value = "No aplica (explicación teórica)";

    // Registro en el historial con un resumen conciso
    addToHistory("Leyes de Maxwell: Unifican electricidad y magnetismo en campos electromagnéticos");

    // Explicación exhaustiva para la guía de operación, con notación matemática y comentarios embebidos
    showOperationGuide(
        "Este es un conjunto de cuatro ecuaciones, desarrollado por James Clerk Maxwell entre 1861 y 1865, " +
        "forma la base del electromagnetismo clásico, unificando electricidad y magnetismo en una teoría coherente. " +
        "A continuación, se describen en su forma diferencial e integral, con unidades en el Sistema Internacional (SI):\n\n" +

        "1. Ley de Gauss para el campo eléctrico: ∇·E⃗ = ρ / ε₀ (diferencial); ∮E⃗·dA⃗ = Q_enc / ε₀ (integral). " +
        "El divergente del campo eléctrico E⃗ (en V/m) es proporcional a la densidad de carga ρ (en C/m³), con ε₀ = 8.854×10⁻¹² F/m " +
        "como permitividad del vacío. Esto implica que las líneas de campo eléctrico emanan de cargas positivas y convergen en negativas.\n\n" +

        "2. Ley de Gauss para el campo magnético: ∇·B⃗ = 0 (diferencial); ∮B⃗·dA⃗ = 0 (integral). " +
        "El divergente del campo magnético B⃗ (en T) es cero, reflejando la ausencia de monopolos magnéticos: las líneas de campo magnético " +
        "son siempre cerradas, con fuentes y sumideros inexistentes en la naturaleza clásica.\n\n" +

        "3. Ley de Faraday de la inducción: ∇×E⃗ = -∂B⃗/∂t (diferencial); ∮E⃗·dl⃗ = -dΦ_B/dt (integral). " +
        "El rotacional del campo eléctrico E⃗ es igual a la tasa negativa de cambio del campo magnético B⃗ con el tiempo. " +
        "Esto describe cómo un campo magnético variable induce una fuerza electromotriz (Φ_B = ∫∫B⃗·dA⃗, en Wb), " +
        "fundamento de generadores y transformadores.\n\n" +

        "4. Ley de Ampère-Maxwell: ∇×B⃗ = μ₀J⃗ + μ₀ε₀∂E⃗/∂t (diferencial); ∮B⃗·dl⃗ = μ₀I_enc + μ₀ε₀dΦ_E/dt (integral). " +
        "El rotacional del campo magnético B⃗ depende de la densidad de corriente J⃗ (en A/m²) y la tasa de cambio del campo eléctrico E⃗, " +
        "con μ₀ = 4π×10⁻⁷ H/m como permeabilidad del vacío. Maxwell añadió el término de desplazamiento (μ₀ε₀∂E⃗/∂t), permitiendo " +
        "la propagación de ondas electromagnéticas.\n\n" +

        "Estas ecuaciones, en medios homogéneos e isotrópicos, predicen la existencia de ondas electromagnéticas viajando a la velocidad " +
        "de la luz c = 1/√(μ₀ε₀) ≈ 3×10⁸ m/s, unificando óptica y electromagnetismo. Históricamente, Maxwell corrigió la Ley de Ampère " +
        "original para incluir el término de desplazamiento, resolviendo inconsistencias en circuitos con capacitores. " +
        "Sus aplicaciones abarcan desde telecomunicaciones (radio, microondas) hasta física moderna (relatividad especial). " +
        "En esta calculadora, no se calcula un valor directo, pero las ecuaciones individuales (Gauss, Faraday, Ampère) están disponibles " +
        "como operaciones separadas para cálculos específicos."
    );
    break;
    
            case 'Fórmulas de Ondas':
                let frequencyWave = parseFloat(prompt("Ingrese la frecuencia (Hz):"));
                let wavelengthWave = parseFloat(prompt("Ingrese la longitud de onda (m):"));
                let waveSpeed = frequencyWave * wavelengthWave;
                document.getElementById('screen').value = waveSpeed.toLocaleString();
                addToHistory("Velocidad de la Onda = " + waveSpeed.toLocaleString() + " m/s");
                showOperationGuide("Velocidad de la Onda = f * λ");
                break;
    
            case 'Óptica Geométrica':
                let objectDistance = parseFloat(prompt("Ingrese la distancia del objeto (m):"));
                let imageDistance = parseFloat(prompt("Ingrese la distancia de la imagen (m):"));
                let focalLength = 1 / ((1 / objectDistance) + (1 / imageDistance));
                document.getElementById('screen').value = focalLength.toLocaleString();
                addToHistory("Distancia Focal = " + focalLength.toLocaleString() + " m");
                showOperationGuide("1/f = 1/do + 1/di");
                break;
    
            case 'Óptica Física':
                let wavelengthOptics = parseFloat(prompt("Ingrese la longitud de onda (m):"));
                let slitSeparationOptics = parseFloat(prompt("Ingrese la separación de rendijas (m):"));
                let fringeSpacing = parseFloat(prompt("Ingrese la distancia al máximo (m):"));
                let opticsResult = (wavelengthOptics * fringeSpacing) / slitSeparationOptics;
                document.getElementById('screen').value = opticsResult.toLocaleString();
                addToHistory("Separación de Franjas = " + opticsResult.toLocaleString() + " m");
                showOperationGuide("Separación de Franjas = λ * L / d");
                break;
    
            case 'Espectro Electromagnético':
                let frequencySpectrum = parseFloat(prompt("Ingrese la frecuencia (Hz):"));
                let wavelengthSpectrum = 3e8 / frequencySpectrum;
                document.getElementById('screen').value = wavelengthSpectrum.toLocaleString();
                addToHistory("Longitud de Onda (Espectro EM) = " + wavelengthSpectrum.toLocaleString() + " m");
                showOperationGuide("Longitud de Onda = c / f");
                break;
    
            case 'Radiación de Cuerpo Negro':
                let temperatureBlackbody = parseFloat(prompt("Ingrese la temperatura (K):"));
                let blackbodyResult = sigma * (temperatureBlackbody ** 4);
                document.getElementById('screen').value = blackbodyResult.toLocaleString();
                addToHistory("Potencia Radiada (Cuerpo Negro) = " + blackbodyResult.toLocaleString() + " W/m^2");
                showOperationGuide("Potencia Radiada = σ * T^4");
                break;
    
            case 'Efecto Compton':
                let wavelengthInitialCompton = parseFloat(prompt("Ingrese la longitud de onda inicial (m):"));
                let angleCompton = parseFloat(prompt("Ingrese el ángulo de dispersión (grados):"));
                let angleRadCompton = angleCompton * Math.PI / 180;
                const h = 6.62607015e-34; // Constante de Planck
                const m_e = 9.1093837e-31; // Masa del electrón
                let wavelengthShift = (h / (m_e * 3e8)) * (1 - Math.cos(angleRadCompton));
                let wavelengthFinalCompton = wavelengthInitialCompton + wavelengthShift;
                document.getElementById('screen').value = wavelengthFinalCompton.toLocaleString();
                addToHistory("Longitud de Onda Final (Compton) = " + wavelengthFinalCompton.toLocaleString() + " m");
                showOperationGuide("Δλ = (h / (m_e * c)) * (1 - cos(θ))");
                break;
    
            case 'Efecto Doppler':
                let frequencyDoppler = parseFloat(prompt("Ingrese la frecuencia de la fuente (Hz):"));
                let velocitySource = parseFloat(prompt("Ingrese la velocidad de la fuente (m/s):"));
                let velocityObserver = parseFloat(prompt("Ingrese la velocidad del observador (m/s):"));
                let dopplerResult = frequencyDoppler * ((3e8 + velocityObserver) / (3e8 - velocitySource));
                document.getElementById('screen').value = dopplerResult.toLocaleString();
                addToHistory("Frecuencia Observada (Doppler) = " + dopplerResult.toLocaleString() + " Hz");
                showOperationGuide("f' = f * ((c + v_o) / (c - v_s))");
                break;
    
            case 'Energía de Vibración':
                let massVibration = parseFloat(prompt("Ingrese la masa (kg):"));
                let frequencyVibration = parseFloat(prompt("Ingrese la frecuencia (Hz):"));
                let amplitude = parseFloat(prompt("Ingrese la amplitud (m):"));
                let vibrationEnergy = 0.5 * massVibration * (2 * Math.PI * frequencyVibration * amplitude) ** 2;
                document.getElementById('screen').value = vibrationEnergy.toLocaleString();
                addToHistory("Energía de Vibración = " + vibrationEnergy.toLocaleString() + " J");
                showOperationGuide("Energía de Vibración = 0.5 * m * (2πf * A)^2");
                break;
    
            case 'Teoría de la Relatividad':
                let massRelativity = parseFloat(prompt("Ingrese la masa en reposo (kg):"));
                let relativityResult = massRelativity * (3e8 ** 2);
                document.getElementById('screen').value = relativityResult.toLocaleString();
                addToHistory("Energía (E=mc^2) = " + relativityResult.toLocaleString() + " J");
                showOperationGuide("Energía = m * c^2");
                break;
    
            case 'Fuerza Gravitatoria':
                let mass1GravForce = parseFloat(prompt("Ingrese la primera masa (kg):"));
                let mass2GravForce = parseFloat(prompt("Ingrese la segunda masa (kg):"));
                let distanceGravForce = parseFloat(prompt("Ingrese la distancia (m):"));
                let gravForceResult = (G * mass1GravForce * mass2GravForce) / (distanceGravForce ** 2);
                document.getElementById('screen').value = gravForceResult.toLocaleString();
                addToHistory("Fuerza Gravitatoria = " + gravForceResult.toLocaleString() + " N");
                showOperationGuide("Fuerza Gravitatoria = G * (m1 * m2) / r^2");
                break;
    
            case 'Fuerza Nuclear':
                alert("La fuerza nuclear depende de modelos cuánticos complejos y no tiene una fórmula simple para cálculo directo.");
                document.getElementById('screen').value = "No aplica";
                addToHistory("Fuerza Nuclear: Requiere cálculo cuántico");
                showOperationGuide("Fuerza Nuclear: Modelo complejo");
                break;
    
            case 'Fuerza Electromagnética':
                let charge1EM = parseFloat(prompt("Ingrese la primera carga (C):"));
                let charge2EM = parseFloat(prompt("Ingrese la segunda carga (C):"));
                let distanceEM = parseFloat(prompt("Ingrese la distancia (m):"));
                let emForceResult = (k * charge1EM * charge2EM) / (distanceEM ** 2);
                document.getElementById('screen').value = emForceResult.toLocaleString();
                addToHistory("Fuerza Electromagnética = " + emForceResult.toLocaleString() + " N");
                showOperationGuide("Fuerza Electromagnética = k * (q1 * q2) / r^2");
                break;
    
            case 'Fuerza de Coulomb':
                let charge1Coulomb = parseFloat(prompt("Ingrese la primera carga (C):"));
                let charge2Coulomb = parseFloat(prompt("Ingrese la segunda carga (C):"));
                let distanceCoulombForce = parseFloat(prompt("Ingrese la distancia (m):"));
                let coulombForceResult = (k * charge1Coulomb * charge2Coulomb) / (distanceCoulombForce ** 2);
                document.getElementById('screen').value = coulombForceResult.toLocaleString();
                addToHistory("Fuerza de Coulomb = " + coulombForceResult.toLocaleString() + " N");
                showOperationGuide("Fuerza de Coulomb = k * (q1 * q2) / r^2");
                break;
//Química uwu
        case 'Masa Molar':
            let carbon = parseInt(prompt("Ingrese el número de átomos de carbono (C):")) || 0;
            let hydrogen = parseInt(prompt("Ingrese el número de átomos de hidrógeno (H):")) || 0;
            let oxygen = parseInt(prompt("Ingrese el número de átomos de oxígeno (O):")) || 0;
            let molarMass = (carbon * 12.01) + (hydrogen * 1.008) + (oxygen * 16.00);
            document.getElementById('screen').value = molarMass.toLocaleString();
            addToHistory("Masa Molar = " + molarMass.toLocaleString() + " g/mol");
            showOperationGuide("Masa Molar = Σ(n_i * M_i), donde n_i es el número de átomos de cada elemento y M_i es su masa atómica (C: 12.01 g/mol, H: 1.008 g/mol, O: 16.00 g/mol).");
            break;

        case 'Masa Molecular':
            let carbonMol = parseInt(prompt("Ingrese el número de átomos de carbono (C):")) || 0;
            let hydrogenMol = parseInt(prompt("Ingrese el número de átomos de hidrógeno (H):")) || 0;
            let oxygenMol = parseInt(prompt("Ingrese el número de átomos de oxígeno (O):")) || 0;
            let molecularMass = (carbonMol * 12.01) + (hydrogenMol * 1.008) + (oxygenMol * 16.00);
            document.getElementById('screen').value = molecularMass.toLocaleString();
            addToHistory("Masa Molecular = " + molecularMass.toLocaleString() + " u (uma)");
            showOperationGuide("Masa Molecular = Σ(n_i * M_i), donde n_i es el número de átomos y M_i es la masa atómica en unidades de masa atómica (u): C: 12.01 u, H: 1.008 u, O: 16.00 u.");
            break;

        case 'Concentración Molar':
            let moles = parseFloat(prompt("Ingrese el número de moles (mol):"));
            let volumeMolar = parseFloat(prompt("Ingrese el volumen (L):"));
            let molarConc = moles / volumeMolar;
            document.getElementById('screen').value = molarConc.toLocaleString();
            addToHistory("Concentración Molar = " + molarConc.toLocaleString() + " mol/L");
            showOperationGuide("Concentración Molar (M) = n / V, donde n es el número de moles (mol) y V es el volumen de la solución (L).");
            break;

        case 'Ecuación de Estado':
            let molesState = parseFloat(prompt("Ingrese el número de moles (mol):"));
            let tempState = parseFloat(prompt("Ingrese la temperatura (K):"));
            let volumeState = parseFloat(prompt("Ingrese el volumen (L):"));
            const Ra = 0.08206; // Constante de los gases en L·atm/(mol·K)
            let pressureState = (molesState * Ra * tempState) / volumeState;
            document.getElementById('screen').value = pressureState.toLocaleString();
            addToHistory("Presión (Ecuación de Estado) = " + pressureState.toLocaleString() + " atm");
            showOperationGuide("Ecuación de Estado de Gases Ideales: P = (nRT) / V, donde P es presión (atm), n es moles (mol), R = 0.08206 L·atm/(mol·K), T es temperatura (K), V es volumen (L).");
            break;

        case 'Ley de Boyle':
            let pressure1Boyle1 = parseFloat(prompt("Ingrese la presión inicial (atm):"));
            let volume1Boyle1 = parseFloat(prompt("Ingrese el volumen inicial (L):"));
            let volume2Boyle1 = parseFloat(prompt("Ingrese el volumen final (L):"));
            let pressure2Boyle1 = (pressure1Boyle1 * volume1Boyle1) / volume2Boyle1;
            document.getElementById('screen').value = pressure2Boyle1.toLocaleString();
            addToHistory("Presión Final (Ley de Boyle) = " + pressure2Boyle1.toLocaleString() + " atm");
            showOperationGuide("Ley de Boyle: P₁V₁ = P₂V₂, donde P₁ y V₁ son presión y volumen iniciales, y P₂ y V₂ son finales, a temperatura constante.");
            break;

        case 'Ley de Charles':
            let volume1Charles1 = parseFloat(prompt("Ingrese el volumen inicial (L):"));
            let temp1Charles1 = parseFloat(prompt("Ingrese la temperatura inicial (K):"));
            let temp2Charles1 = parseFloat(prompt("Ingrese la temperatura final (K):"));
            let volume2Charles1 = (volume1Charles1 * temp2Charles1) / temp1Charles1;
            document.getElementById('screen').value = volume2Charles1.toLocaleString();
            addToHistory("Volumen Final (Ley de Charles) = " + volume2Charles1.toLocaleString() + " L");
            showOperationGuide("Ley de Charles: V₁/T₁ = V₂/T₂, donde V₁ y T₁ son volumen y temperatura iniciales, y V₂ y T₂ son finales, a presión constante.");
            break;

        case 'Ley de Gay-Lussac':
            let pressure1Gay1 = parseFloat(prompt("Ingrese la presión inicial (atm):"));
            let temp1Gay1 = parseFloat(prompt("Ingrese la temperatura inicial (K):"));
            let temp2Gay1 = parseFloat(prompt("Ingrese la temperatura final (K):"));
            let pressure2Gay1 = (pressure1Gay1 * temp2Gay1) / temp1Gay1;
            document.getElementById('screen').value = pressure2Gay1.toLocaleString();
            addToHistory("Presión Final (Ley de Gay-Lussac) = " + pressure2Gay1.toLocaleString() + " atm");
            showOperationGuide("Ley de Gay-Lussac: P₁/T₁ = P₂/T₂, donde P₁ y T₁ son presión y temperatura iniciales, y P₂ y T₂ son finales, a volumen constante.");
            break;

        case 'Equilibrio Químico':
            alert("El equilibrio químico describe un estado dinámico en reacciones reversibles donde las velocidades de reacción directa e inversa son iguales. No calcula un valor numérico directo en este contexto.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Equilibrio Químico: Velocidad directa = Velocidad inversa");
            showOperationGuide(
                "Equilibrio Químico: En una reacción reversible aA + bB ⇌ cC + dD, el equilibrio se alcanza cuando la velocidad de la reacción directa " +
                "(k_f [A]^a [B]^b) iguala la velocidad inversa (k_r [C]^c [D]^d). La constante de equilibrio K = k_f / k_r = ([C]^c [D]^d) / ([A]^a [B]^b) " +
                "describe la relación entre concentraciones en equilibrio (en mol/L). Este estado dinámico implica que las concentraciones de reactivos y " +
                "productos permanecen constantes en el tiempo, aunque las reacciones continúan. Aplicaciones incluyen síntesis industrial (proceso Haber) y " +
                "equilibrios ácido-base. En esta calculadora, vea 'Constante de Equilibrio' para cálculos específicos."
            );
            break;

        case 'Constante de Equilibrio':
            let concC = parseFloat(prompt("Ingrese la concentración de C en equilibrio (mol/L):"));
            let concD = parseFloat(prompt("Ingrese la concentración de D en equilibrio (mol/L):"));
            let concA = parseFloat(prompt("Ingrese la concentración de A en equilibrio (mol/L):"));
            let concB = parseFloat(prompt("Ingrese la concentración de B en equilibrio (mol/L):"));
            let coeffC = parseInt(prompt("Ingrese el coeficiente estequiométrico de C:"));
            let coeffD = parseInt(prompt("Ingrese el coeficiente estequiométrico de D:"));
            let coeffA = parseInt(prompt("Ingrese el coeficiente estequiométrico de A:"));
            let coeffB = parseInt(prompt("Ingrese el coeficiente estequiométrico de B:"));
            let Kc = (Math.pow(concC, coeffC) * Math.pow(concD, coeffD)) / (Math.pow(concA, coeffA) * Math.pow(concB, coeffB));
            document.getElementById('screen').value = Kc.toLocaleString();
            addToHistory("Constante de Equilibrio (Kc) = " + Kc.toLocaleString());
            showOperationGuide("Constante de Equilibrio: Kc = ([C]^c [D]^d) / ([A]^a [B]^b) para aA + bB ⇌ cC + dD, donde [X] son concentraciones en mol/L y a, b, c, d son coeficientes estequiométricos.");
            break;

        case 'Ley de Acción de Masas':
            let concC_LAM = parseFloat(prompt("Ingrese la concentración de C en equilibrio (mol/L):"));
            let concD_LAM = parseFloat(prompt("Ingrese la concentración de D en equilibrio (mol/L):"));
            let concA_LAM = parseFloat(prompt("Ingrese la concentración de A en equilibrio (mol/L):"));
            let concB_LAM = parseFloat(prompt("Ingrese la concentración de B en equilibrio (mol/L):"));
            let coeffC_LAM = parseInt(prompt("Ingrese el coeficiente estequiométrico de C:"));
            let coeffD_LAM = parseInt(prompt("Ingrese el coeficiente estequiométrico de D:"));
            let coeffA_LAM = parseInt(prompt("Ingrese el coeficiente estequiométrico de A:"));
            let coeffB_LAM = parseInt(prompt("Ingrese el coeficiente estequiométrico de B:"));
            let Kc_LAM = (Math.pow(concC_LAM, coeffC_LAM) * Math.pow(concD_LAM, coeffD_LAM)) / (Math.pow(concA_LAM, coeffA_LAM) * Math.pow(concB_LAM, coeffB_LAM));
            document.getElementById('screen').value = Kc_LAM.toLocaleString();
            addToHistory("Constante de Equilibrio (Ley de Acción de Masas) = " + Kc_LAM.toLocaleString());
            showOperationGuide("Ley de Acción de Masas: Kc = ([C]^c [D]^d) / ([A]^a [B]^b) para aA + bB ⇌ cC + dD, enunciada por Guldberg y Waage (1864), describe la relación entre concentraciones en equilibrio.");
            break;

        case 'Energía de Activación':
            let k1 = parseFloat(prompt("Ingrese la constante de velocidad a T1 (s^-1):"));
            let k2 = parseFloat(prompt("Ingrese la constante de velocidad a T2 (s^-1):"));
            let T1 = parseFloat(prompt("Ingrese la temperatura T1 (K):"));
            let T2 = parseFloat(prompt("Ingrese la temperatura T2 (K):"));
            const R_Ea = 8.314; // Constante de los gases en J/(mol·K)
            let Ea = (R_Ea * Math.log(k2 / k1)) / ((1 / T1) - (1 / T2));
            document.getElementById('screen').value = Ea.toLocaleString();
            addToHistory("Energía de Activación = " + Ea.toLocaleString() + " J/mol");
            showOperationGuide("Energía de Activación (Ea) = [R * ln(k₂/k₁)] / [(1/T₁) - (1/T₂)], derivada de la ecuación de Arrhenius, donde k₁ y k₂ son constantes de velocidad, T₁ y T₂ son temperaturas (K), y R = 8.314 J/(mol·K).");
            break;

        case 'Reacciones Químicas':
            alert("Las reacciones químicas son procesos donde reactivos se transforman en productos. No calculan un valor numérico directo en este contexto.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones Químicas: Transformación de reactivos en productos");
            showOperationGuide(
                "Reacciones Químicas: Describen la transformación de sustancias mediante la ruptura y formación de enlaces químicos, representadas como aA + bB → cC + dD. " +
                "La estequiometría (coeficientes a, b, c, d) asegura la conservación de la masa y carga (Ley de Lavoisier). Tipos incluyen síntesis, descomposición, " +
                "sustitución, redox, y ácido-base. La velocidad depende de concentraciones, temperatura y catalizadores (ver 'Cinética Química'). " +
                "Aplicaciones abarcan síntesis industrial, combustión y metabolismo. En esta calculadora, vea operaciones específicas como 'Reacciones Redox' o 'Ley de Hess'."
            );
            break;

        case 'Ley de Hess':
            let deltaH1 = parseFloat(prompt("Ingrese el cambio de entalpía de la etapa 1 (kJ/mol):"));
            let deltaH2 = parseFloat(prompt("Ingrese el cambio de entalpía de la etapa 2 (kJ/mol):"));
            let deltaH_total = deltaH1 + deltaH2;
            document.getElementById('screen').value = deltaH_total.toLocaleString();
            addToHistory("Entalpía Total (Ley de Hess) = " + deltaH_total.toLocaleString() + " kJ/mol");
            showOperationGuide("Ley de Hess: ΔH_total = ΣΔH_i, donde ΔH_i son los cambios de entalpía de cada etapa. La entalpía es una función de estado, independiente del camino.");
            break;

        case 'Calor de Reacción':
            let deltaH = parseFloat(prompt("Ingrese el cambio de entalpía (kJ/mol):"));
            let molesReact = parseFloat(prompt("Ingrese el número de moles reaccionados (mol):"));
            let heatReaction = deltaH * molesReact;
            document.getElementById('screen').value = heatReaction.toLocaleString();
            addToHistory("Calor de Reacción = " + heatReaction.toLocaleString() + " kJ");
            showOperationGuide("Calor de Reacción (q) = ΔH * n, donde ΔH es el cambio de entalpía (kJ/mol) y n es el número de moles reaccionados.");
            break;

        case 'Potencial Electromotriz':
            let voltageEMF1 = parseFloat(prompt("Ingrese el voltaje terminal (V):"));
            let intResistance = parseFloat(prompt("Ingrese la resistencia interna (Ω):"));
            let currentEMF1 = parseFloat(prompt("Ingrese la corriente (A):"));
            let emfResult1 = voltageEMF1 + (intResistance * currentEMF1);
            document.getElementById('screen').value = emfResult1.toLocaleString();
            addToHistory("Potencial Electromotriz = " + emfResult1.toLocaleString() + " V");
            showOperationGuide("Potencial Electromotriz (ℰ) = V + I * r, donde V es voltaje terminal (V), I es corriente (A), y r es resistencia interna (Ω).");
            break;

        case 'Electroquímica':
            alert("La electroquímica estudia reacciones químicas asociadas con transferencia de electrones. No calcula un valor numérico directo en este contexto.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Electroquímica: Reacciones con transferencia de electrones");
            showOperationGuide(
                "Electroquímica: Rama de la química que estudia procesos redox en interfaces electrodo-solución, descritos por celdas galvánicas y electrolíticas. " +
                "La ecuación fundamental es ℰ_cell = ℰ_cátodo - ℰ_ánodo, donde ℰ son potenciales estándar (V). La Ley de Faraday relaciona carga transferida (Q = nFE) " +
                "con moles de electrones (n), carga del electrón (F = 96485 C/mol) y corriente. Aplicaciones incluyen baterías, corrosión y electroanálisis. " +
                "Vea 'Ecuación de Nernst' o 'Potencial Electromotriz' para cálculos específicos."
            );
            break;

        case 'Energía de Enlace':
            let bondEnergy = parseFloat(prompt("Ingrese la energía de enlace (kJ/mol):"));
            let molesBonds = parseFloat(prompt("Ingrese el número de moles de enlaces rotos o formados (mol):"));
            let totalBondEnergy = bondEnergy * molesBonds;
            document.getElementById('screen').value = totalBondEnergy.toLocaleString();
            addToHistory("Energía de Enlace = " + totalBondEnergy.toLocaleString() + " kJ");
            showOperationGuide("Energía de Enlace = E_b * n, donde E_b es la energía de enlace (kJ/mol) y n es el número de moles de enlaces afectados.");
            break;

        case 'Ácidos y Bases':
            alert("Ácidos y bases se definen por teorías como Arrhenius, Bronsted-Lowry y Lewis. No calcula un valor numérico directo en este contexto.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Ácidos y Bases: Donadores y aceptores de protones o electrones");
            showOperationGuide(
                "Ácidos y Bases: Según Arrhenius, ácidos liberan H⁺ y bases OH⁻ en agua. Bronsted-Lowry define ácidos como donadores de H⁺ y bases como aceptores " +
                "(ej. HA ⇌ H⁺ + A⁻). Lewis extiende el concepto a pares de electrones (A + :B → A:B). La fuerza se mide con Ka o Kb. Aplicaciones incluyen " +
                "titulaciones y regulación del pH biológico. Vea 'pH y pOH' o 'Teoría de Bronsted-Lowry' para cálculos específicos."
            );
            break;

        case 'pH y pOH':
            let hConc = parseFloat(prompt("Ingrese la concentración de iones H⁺ (mol/L):"));
            let pH = -Math.log10(hConc);
            let pOH = 14 - pH;
            document.getElementById('screen').value = pH.toLocaleString();
            addToHistory("pH = " + pH.toLocaleString() + ", pOH = " + pOH.toLocaleString());
            showOperationGuide("pH = -log₁₀[H⁺], pOH = 14 - pH, donde [H⁺] es la concentración de iones hidrógeno (mol/L) a 25°C.");
            break;

        case 'Reacciones Redox':
            alert("Las reacciones redox involucran transferencia de electrones entre especies. No calcula un valor numérico directo en este contexto.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones Redox: Oxidación y reducción simultáneas");
            showOperationGuide(
                "Reacciones Redox: Procesos donde una especie se oxida (pierde electrones) y otra se reduce (gana electrones), ej. Zn + Cu²⁺ → Zn²⁺ + Cu. " +
                "Se equilibran ajustando números de oxidación y electrones transferidos. La energía se calcula con ℰ_cell = ℰ_red - ℰ_ox (V). " +
                "Aplicaciones incluyen celdas galvánicas y corrosión. Vea 'Ecuación de Nernst' o 'Electroquímica' para cálculos específicos."
            );
            break;

        case 'Ecuación de Nernst':
            let E0 = parseFloat(prompt("Ingrese el potencial estándar de la celda (V):"));
            let nElectrons = parseInt(prompt("Ingrese el número de electrones transferidos:"));
            let Q = parseFloat(prompt("Ingrese el cociente de reacción Q:"));
            const R_Nernst = 8.314; // J/(mol·K)
            const F = 96485; // C/mol
            let T_Nernst = parseFloat(prompt("Ingrese la temperatura (K):"));
            let E = E0 - ((R_Nernst * T_Nernst) / (nElectrons * F)) * Math.log(Q);
            document.getElementById('screen').value = E.toLocaleString();
            addToHistory("Potencial de Celda (Nernst) = " + E.toLocaleString() + " V");
            showOperationGuide("Ecuación de Nernst: E = E⁰ - [(RT)/(nF)] * ln(Q), donde E⁰ es potencial estándar (V), R = 8.314 J/(mol·K), T es temperatura (K), n es electrones, F = 96485 C/mol, Q es cociente de reacción.");
            break;

        case 'Ecuación de Arrhenius':
            let ka = parseFloat(prompt("Ingrese la constante de velocidad (s^-1):"));
            let Ea_Arr = parseFloat(prompt("Ingrese la energía de activación (J/mol):"));
            let T_Arr = parseFloat(prompt("Ingrese la temperatura (K):"));
            const R_Arr = 8.314; // J/(mol·K)
            let A = ka / Math.exp(-Ea_Arr / (R_Arr * T_Arr));
            document.getElementById('screen').value = A.toLocaleString();
            addToHistory("Factor de Pre-exponencial (Arrhenius) = " + A.toLocaleString() + " s^-1");
            showOperationGuide("Ecuación de Arrhenius: k = A * e^(-Ea/(RT)), donde k es constante de velocidad (s^-1), A es factor de pre-exponencial, Ea es energía de activación (J/mol), R = 8.314 J/(mol·K), T es temperatura (K).");
            break;

        case 'Ecuación de Langmuir':
            let theta = parseFloat(prompt("Ingrese la fracción de superficie cubierta (0 a 1):"));
            let K_Lang = parseFloat(prompt("Ingrese la constante de equilibrio de adsorción (atm^-1):"));
            let P_Lang = parseFloat(prompt("Ingrese la presión del gas (atm):"));
            let calcTheta = (K_Lang * P_Lang) / (1 + K_Lang * P_Lang);
            document.getElementById('screen').value = calcTheta.toLocaleString();
            addToHistory("Fracción Cubierta (Langmuir) = " + calcTheta.toLocaleString());
            showOperationGuide("Ecuación de Langmuir: θ = (KP) / (1 + KP), donde θ es fracción de superficie cubierta, K es constante de adsorción (atm^-1), P es presión (atm).");
            break;

        case 'Ley de Raoult':
            let P0 = parseFloat(prompt("Ingrese la presión de vapor del solvente puro (atm):"));
            let xSolvent = parseFloat(prompt("Ingrese la fracción molar del solvente (0 a 1):"));
            let P_Raoult = P0 * xSolvent;
            document.getElementById('screen').value = P_Raoult.toLocaleString();
            addToHistory("Presión de Vapor (Raoult) = " + P_Raoult.toLocaleString() + " atm");
            showOperationGuide("Ley de Raoult: P = P⁰ * x_s, donde P es presión de vapor de la solución (atm), P⁰ es presión del solvente puro (atm), x_s es fracción molar del solvente.");
            break;

        case 'Propiedades Coligativas':
            let molality = parseFloat(prompt("Ingrese la molalidad (mol/kg):"));
            let Kf = parseFloat(prompt("Ingrese la constante crioscópica del solvente (K·kg/mol):"));
            let deltaTf = molality * Kf;
            document.getElementById('screen').value = deltaTf.toLocaleString();
            addToHistory("Descenso del Punto de Congelación = " + deltaTf.toLocaleString() + " K");
            showOperationGuide("Propiedades Coligativas: ΔT_f = m * K_f, donde ΔT_f es descenso del punto de congelación (K), m es molalidad (mol/kg), K_f es constante crioscópica (K·kg/mol).");
            break;

        case 'Teoría de Ácidos y Bases de Bronsted-Lowry':
            alert("La teoría de Bronsted-Lowry define ácidos y bases según transferencia de protones. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría Bronsted-Lowry: Ácidos donan H⁺, bases lo aceptan");
            showOperationGuide(
                "Teoría de Ácidos y Bases de Bronsted-Lowry: Propuesta por Johannes Bronsted y Thomas Lowry (1923), define ácidos como donadores de protones (H⁺) " +
                "y bases como aceptores, ej. HA + B ⇌ A⁻ + HB⁺. La fuerza se mide con Ka = [A⁻][H⁺]/[HA] para ácidos y Kb para bases. " +
                "A diferencia de Arrhenius, aplica a medios no acuosos. Aplicaciones incluyen equilibrios ácido-base y catálisis. " +
                "Vea 'pH y pOH' o 'Constante de Equilibrio' para cálculos relacionados."
            );
            break;

        case 'Teoría de Ácidos y Bases de Lewis':
            alert("La teoría de Lewis define ácidos y bases según pares de electrones. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría de Lewis: Ácidos aceptan pares de electrones, bases los donan");
            showOperationGuide(
                "Teoría de Ácidos y Bases de Lewis: Propuesta por Gilbert N. Lewis (1923), define ácidos como aceptores de pares de electrones y bases como donadores, " +
                "ej. BF₃ + :NH₃ → F₃B:NH₃. Extiende el concepto más allá de protones, abarcando reacciones de coordinación. La fuerza depende de la afinidad electrónica " +
                "y geometría molecular. Aplicaciones incluyen química organometálica y catálisis. Vea 'Energía de Enlace' para cálculos relacionados."
            );
            break;

        case 'Leyes de Solubilidad':
            alert("Las leyes de solubilidad describen disolución de solutos en solventes. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Leyes de Solubilidad: Factores de disolución");
            showOperationGuide(
                "Leyes de Solubilidad: Regulan la disolución de solutos en solventes, determinadas por interacciones intermoleculares (polaridad, enlaces de hidrógeno). " +
                "La solubilidad (g/L o mol/L) depende de temperatura, presión y constante de equilibrio Ksp para sales poco solubles (Ksp = [A⁺]^a [B⁻]^b). " +
                "Regla general: 'lo semejante disuelve lo semejante'. Aplicaciones incluyen precipitación y purificación. Vea 'Equilibrio de Solubilidad' para cálculos."
            );
            break;

        case 'Leyes de Solución':
            alert("Las leyes de solución describen propiedades de mezclas homogéneas. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Leyes de Solución: Propiedades de mezclas");
            showOperationGuide(
                "Leyes de Solución: Gobernan comportamiento de soluciones homogéneas. Incluyen Ley de Raoult (P = P⁰x_s) para presión de vapor, y propiedades coligativas " +
                "(ΔT_f = mK_f, ΔT_b = mK_b) para puntos de congelación y ebullición. La Ley de Henry (P = k_H * x) aplica a gases disueltos. " +
                "Dependientes de concentración, no de identidad química. Aplicaciones: destilación y osmosis. Vea 'Ley de Raoult' o 'Propiedades Coligativas'."
            );
            break;

        case 'Ley de Dilución de Ostwald':
            let Ka = parseFloat(prompt("Ingrese la constante de disociación del ácido (Ka):"));
            let C = parseFloat(prompt("Ingrese la concentración inicial del ácido (mol/L):"));
            let alpha = Math.sqrt(Ka / C);
            document.getElementById('screen').value = alpha.toLocaleString();
            addToHistory("Grado de Disociación (Ostwald) = " + alpha.toLocaleString());
            showOperationGuide("Ley de Dilución de Ostwald: α = √(Ka / C), donde α es grado de disociación, Ka es constante de disociación, C es concentración inicial (mol/L), válida para ácidos débiles.");
            break;

        case 'Teoría de Colisiones':
            alert("La teoría de colisiones explica velocidades de reacción según choques moleculares. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría de Colisiones: Choques efectivos entre moléculas");
            showOperationGuide(
                "Teoría de Colisiones: Propuesta por Max Trautz y William Lewis (1916-1918), postula que las reacciones ocurren por colisiones moleculares con energía " +
                "superior a Ea (energía de activación) y orientación adecuada. La velocidad es proporcional a Z * e^(-Ea/RT), donde Z es frecuencia de colisiones, " +
                "R = 8.314 J/(mol·K), T es temperatura (K). Factores incluyen concentración y temperatura. Vea 'Ecuación de Arrhenius' para cálculos relacionados."
            );
            break;

        case 'Cinetica Química':
            alert("La cinética química estudia velocidades de reacción. No calcula un valor numérico directo en este contexto.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Cinética Química: Velocidades de transformación química");
            showOperationGuide(
                "Cinética Química: Analiza la velocidad de reacciones químicas, definida como v = -d[R]/dt = k[R]^n, donde k es constante de velocidad, [R] es concentración " +
                "de reactivos (mol/L), n es orden de reacción. Depende de temperatura (Arrhenius: k = A * e^(-Ea/RT)), catalizadores y mecanismos. " +
                "Aplicaciones: diseño de reactores y farmacocinética. Vea 'Ecuación de Arrhenius' o 'Energía de Activación' para cálculos específicos."
            );
            break;

        case 'Reacciones de Ácido-Base':
            alert("Las reacciones ácido-base implican transferencia de protones o pares de electrones. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones Ácido-Base: Transferencia de H⁺ o pares de electrones");
            showOperationGuide(
                "Reacciones de Ácido-Base: Involucran transferencia de protones (Bronsted-Lowry: HA + B ⇌ A⁻ + HB⁺) o pares de electrones (Lewis). " +
                "Ejemplo: HCl + NaOH → NaCl + H₂O (neutralización). La constante Ka o Kb mide fuerza. Aplicaciones: titulaciones y buffers. " +
                "Vea 'pH y pOH' o 'Equilibrio Ácido-Base' para cálculos relacionados."
            );
            break;

        case 'Reacciones de Oxidación-Reducción':
            alert("Las reacciones de oxidación-reducción (redox) involucran transferencia de electrones. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones Redox: Transferencia de electrones");
            showOperationGuide(
                "Reacciones de Oxidación-Reducción: Procesos donde una especie se oxida (pierde e⁻) y otra se reduce (gana e⁻), ej. 2H₂ + O₂ → 2H₂O. " +
                "Equilibradas por números de oxidación y electrones transferidos. Energía calculada con ℰ_cell = ℰ_red - ℰ_ox (V). " +
                "Aplicaciones: baterías y metalurgia. Vea 'Reacciones Redox' o 'Ecuación de Nernst' para cálculos específicos."
            );
            break;

        case 'Reacciones de Precipitación':
            alert("Las reacciones de precipitación forman sólidos insolubles. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones de Precipitación: Formación de sólidos insolubles");
            showOperationGuide(
                "Reacciones de Precipitación: Ocurren cuando iones en solución forman un compuesto insoluble, ej. Ag⁺ + Cl⁻ → AgCl↓. " +
                "Gobernadas por Ksp (constante de solubilidad), ej. Ksp = [Ag⁺][Cl⁻]. La solubilidad depende de temperatura y efecto del ion común. " +
                "Aplicaciones: análisis gravimétrico y purificación. Vea 'Equilibrio de Solubilidad' para cálculos relacionados."
            );
            break;

        case 'Reacciones de Combustión':
            alert("Las reacciones de combustión involucran oxidación rápida con O₂. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones de Combustión: Oxidación con O₂");
            showOperationGuide(
                "Reacciones de Combustión: Procesos exotérmicos donde un combustible reacciona con O₂, ej. CH₄ + 2O₂ → CO₂ + 2H₂O. " +
                "Producen energía (ΔH negativo) y productos como CO₂ y H₂O. Estequiometría equilibra átomos. Aplicaciones: motores y calefacción. " +
                "Vea 'Calor de Reacción' para cálculos relacionados."
            );
            break;

        case 'Reacciones de Sustitución':
            alert("Las reacciones de sustitución reemplazan un grupo por otro. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones de Sustitución: Reemplazo de grupos");
            showOperationGuide(
                "Reacciones de Sustitución: Un átomo o grupo reemplaza otro en una molécula, ej. CH₃CH₂Cl + OH⁻ → CH₃CH₂OH + Cl⁻ (SN1 o SN2). " +
                "Mecanismos dependen de nucleófilo, sustrato y condiciones. Aplicaciones: síntesis orgánica. Vea 'Cinética Química' para estudios de velocidad."
            );
            break;

        case 'Reacciones de Adición':
            alert("Las reacciones de adición unen moléculas a enlaces múltiples. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones de Adición: Unión a enlaces múltiples");
            showOperationGuide(
                "Reacciones de Adición: Moléculas se añaden a enlaces dobles o triples, ej. CH₂=CH₂ + H₂ → CH₃CH₃ (con catalizador). " +
                "Típicas en alquenos y alquinos, siguen la regla de Markovnikov en algunos casos. Aplicaciones: polimerización y síntesis orgánica. " +
                "Vea 'Reacciones de Polimerización' para ejemplos relacionados."
            );
            break;

        case 'Reacciones de Eliminación':
            alert("Las reacciones de eliminación forman enlaces múltiples al perder grupos. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones de Eliminación: Formación de enlaces múltiples");
            showOperationGuide(
                "Reacciones de Eliminación: Eliminan grupos para formar enlaces dobles o triples, ej. CH₃CH₂OH → CH₂=CH₂ + H₂O (E1 o E2). " +
                "Mecanismos dependen de base, sustrato y condiciones. Aplicaciones: síntesis de alquenos. Vea 'Cinética Química' para estudios de velocidad."
            );
            break;

        case 'Reacciones de Polimerización':
            alert("Las reacciones de polimerización forman macromoléculas. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones de Polimerización: Formación de polímeros");
            showOperationGuide(
                "Reacciones de Polimerización: Monómeros se unen para formar polímeros, ej. nCH₂=CH₂ → [−CH₂−CH₂−]_n (polietileno). " +
                "Tipos: adición (radical libre) y condensación (pérdida de moléculas pequeñas). Aplicaciones: plásticos y fibras sintéticas. " +
                "Vea 'Reacciones de Adición' para mecanismos relacionados."
            );
            break;

        case 'Reacciones de Hidrólisis':
            alert("Las reacciones de hidrólisis descomponen moléculas con agua. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones de Hidrólisis: Descomposición con H₂O");
            showOperationGuide(
                "Reacciones de Hidrólisis: Agua rompe enlaces químicos, ej. CH₃COOC₂H₅ + H₂O ⇌ CH₃COOH + C₂H₅OH (catalizada por ácido/base). " +
                "Comunes en ésteres, amidas y sales. Velocidad depende de pH y temperatura. Aplicaciones: digestión y síntesis química. " +
                "Vea 'Cinética Química' para estudios relacionados."
            );
            break;

        case 'Reacciones de Oxidación':
            alert("Las reacciones de oxidación implican pérdida de electrones. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones de Oxidación: Pérdida de electrones");
            showOperationGuide(
                "Reacciones de Oxidación: Una especie pierde electrones, ej. 2Fe → 2Fe³⁺ + 6e⁻. Parte de procesos redox, identificada por aumento en número " +
                "de oxidación. Agentes oxidantes (O₂, H₂O₂) son comunes. Aplicaciones: combustión y síntesis. Vea 'Reacciones Redox' para detalles."
            );
            break;

        case 'Reacciones de Reducción':
            alert("Las reacciones de reducción implican ganancia de electrones. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Reacciones de Reducción: Ganancia de electrones");
            showOperationGuide(
                "Reacciones de Reducción: Una especie gana electrones, ej. Cu²⁺ + 2e⁻ → Cu. Parte de procesos redox, identificada por disminución en número " +
                "de oxidación. Agentes reductores (H₂, NaBH₄) son comunes. Aplicaciones: metalurgia y síntesis. Vea 'Reacciones Redox' para detalles."
            );
            break;

        case 'Teoría del Estado de Transición':
            alert("La teoría del estado de transición describe el estado intermedio en reacciones. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría del Estado de Transición: Complejo activado");
            showOperationGuide(
                "Teoría del Estado de Transición: Propuesta por Eyring y Polanyi (1930s), describe un estado intermedio de alta energía (complejo activado) " +
                "en la coordenada de reacción. La velocidad es v = (k_BT/h) * e^(-ΔG‡/RT), donde ΔG‡ es energía libre de activación, k_B es constante de Boltzmann, " +
                "h es constante de Planck, R = 8.314 J/(mol·K), T es temperatura (K). Aplicaciones: cinética y catálisis. Vea 'Energía de Activación'."
            );
            break;

        case 'Teoría de la Perturbación':
            alert("La teoría de la perturbación ajusta modelos químicos aproximados. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría de la Perturbación: Corrección de modelos");
            showOperationGuide(
                "Teoría de la Perturbación: Método matemático para aproximar soluciones en sistemas químicos/quantum perturbados, ej. energía corregida E = E₀ + E₁ + E₂. " +
                "Usada en química cuántica para orbitales moleculares (Møller-Plesset). No aplica cálculo directo aquí, pero refina modelos teóricos. " +
                "Aplicaciones: espectroscopia y dinámica molecular."
            );
            break;

        case 'Teoría de la Reacción Química':
            alert("La teoría de la reacción química explica mecanismos de transformación. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría de la Reacción Química: Mecanismos de transformación");
            showOperationGuide(
                "Teoría de la Reacción Química: Marco conceptual que describe cómo reactivos forman productos mediante estados de transición y colisiones efectivas. " +
                "Incorpora cinética (v = k[R]^n), termodinámica (ΔG = ΔH - TΔS), y mecanismos (SN1, E2). Aplicaciones: diseño de catalizadores y síntesis. " +
                "Vea 'Cinética Química' o 'Teoría del Estado de Transición' para detalles específicos."
            );
            break;

        case 'Equilibrio Ácido-Base':
            let Ka_AB = parseFloat(prompt("Ingrese la constante de disociación del ácido (Ka):"));
            let conc_AB = parseFloat(prompt("Ingrese la concentración inicial del ácido (mol/L):"));
            let hConc_AB = Math.sqrt(Ka_AB * conc_AB);
            document.getElementById('screen').value = hConc_AB.toLocaleString();
            addToHistory("Concentración de H⁺ (Equilibrio Ácido-Base) = " + hConc_AB.toLocaleString() + " mol/L");
            showOperationGuide("Equilibrio Ácido-Base: [H⁺] = √(Ka * C), donde Ka es constante de disociación y C es concentración inicial (mol/L), válida para ácidos débiles.");
            break;

        case 'Equilibrio de Solubilidad':
            let Ksp = parseFloat(prompt("Ingrese la constante de solubilidad (Ksp):"));
            let solubility = Math.sqrt(Ksp); // Simplificación para sal 1:1 como AgCl
            document.getElementById('screen').value = solubility.toLocaleString();
            addToHistory("Solubilidad (Equilibrio) = " + solubility.toLocaleString() + " mol/L");
            showOperationGuide("Equilibrio de Solubilidad: S = √Ksp para AB ⇌ A⁺ + B⁻, donde Ksp = [A⁺][B⁻] es constante de solubilidad y S es solubilidad (mol/L).");
            break;

        case 'Equilibrio de Reacciones Complejas':
            alert("El equilibrio de reacciones complejas involucra múltiples etapas. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Equilibrio de Reacciones Complejas: Múltiples etapas en balance");
            showOperationGuide(
                "Equilibrio de Reacciones Complejas: Describe sistemas con varias reacciones simultáneas, ej. formación de complejos metálicos (M + nL ⇌ ML_n). " +
                "La constante global K = ΠK_i (producto de constantes de cada etapa). Requiere resolver ecuaciones simultáneas. Aplicaciones: química analítica y bioquímica. " +
                "Vea 'Constante de Equilibrio' para cálculos básicos."
            );
            break;

        case 'Equilibrio de Reacciones Redox':
            alert("El equilibrio de reacciones redox balancea oxidación y reducción. No calcula un valor numérico directo.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Equilibrio de Reacciones Redox: Balance de electrones");
            showOperationGuide(
                "Equilibrio de Reacciones Redox: Estado donde velocidades de oxidación y reducción son iguales, ej. Fe²⁺ + Ce⁴⁺ ⇌ Fe³⁺ + Ce³⁺. " +
                "El potencial de celda ℰ = ℰ⁰ - (RT/nF)ln(Q) (Nernst) define el equilibrio. Aplicaciones: electroquímica y baterías. " +
                "Vea 'Ecuación de Nernst' para cálculos específicos."
            );
            break;

        case 'Equilibrio de Reacciones Ácido-Base':
            let Ka_ABR = parseFloat(prompt("Ingrese la constante de disociación del ácido (Ka):"));
            let conc_ABR = parseFloat(prompt("Ingrese la concentración inicial del ácido (mol/L):"));
            let hConc_ABR = Math.sqrt(Ka_ABR * conc_ABR);
            document.getElementById('screen').value = hConc_ABR.toLocaleString();
            addToHistory("Concentración de H⁺ (Equilibrio Ácido-Base) = " + hConc_ABR.toLocaleString() + " mol/L");
            showOperationGuide("Equilibrio de Reacciones Ácido-Base: [H⁺] = √(Ka * C), donde Ka es constante de disociación y C es concentración inicial (mol/L), para ácidos débiles.");
            break;

//Matemáticaaaas

        case 'Área Triángulo':
            let baseTri = parseFloat(prompt("Ingrese la base del triángulo (m):"));
            let heightTri = parseFloat(prompt("Ingrese la altura del triángulo (m):"));
            let areaTri = 0.5 * baseTri * heightTri;
            document.getElementById('screen').value = areaTri.toLocaleString();
            addToHistory("Área del Triángulo = " + areaTri.toLocaleString() + " m²");
            showOperationGuide("Área del Triángulo: A = (1/2) * b * h, donde b es la base (m) y h es la altura (m).");
            break;

        case 'Área Cuadrado':
            let sideSquare = parseFloat(prompt("Ingrese el lado del cuadrado (m):"));
            let areaSquare = sideSquare * sideSquare;
            document.getElementById('screen').value = areaSquare.toLocaleString();
            addToHistory("Área del Cuadrado = " + areaSquare.toLocaleString() + " m²");
            showOperationGuide("Área del Cuadrado: A = s², donde s es la longitud del lado (m).");
            break;

        case 'Área Rectángulo':
            let lengthRect = parseFloat(prompt("Ingrese el largo del rectángulo (m):"));
            let widthRect = parseFloat(prompt("Ingrese el ancho del rectángulo (m):"));
            let areaRect = lengthRect * widthRect;
            document.getElementById('screen').value = areaRect.toLocaleString();
            addToHistory("Área del Rectángulo = " + areaRect.toLocaleString() + " m²");
            showOperationGuide("Área del Rectángulo: A = l * w, donde l es el largo (m) y w es el ancho (m).");
            break;

        case 'Volumen Cubo':
            let sideCube = parseFloat(prompt("Ingrese el lado del cubo (m):"));
            let volumeCube = Math.pow(sideCube, 3);
            document.getElementById('screen').value = volumeCube.toLocaleString();
            addToHistory("Volumen del Cubo = " + volumeCube.toLocaleString() + " m³");
            showOperationGuide("Volumen del Cubo: V = s³, donde s es la longitud del lado (m).");
            break;

        case 'Volumen Esfera':
            let radiusSphere = parseFloat(prompt("Ingrese el radio de la esfera (m):"));
            let volumeSphere = (4/3) * Math.PI * Math.pow(radiusSphere, 3);
            document.getElementById('screen').value = volumeSphere.toLocaleString();
            addToHistory("Volumen de la Esfera = " + volumeSphere.toLocaleString() + " m³");
            showOperationGuide("Volumen de la Esfera: V = (4/3) * π * r³, donde r es el radio (m) y π ≈ 3.14159.");
            break;

        case 'Hipotenusa Triángulo':
            let leg1 = parseFloat(prompt("Ingrese el primer cateto (m):"));
            let leg2 = parseFloat(prompt("Ingrese el segundo cateto (m):"));
            let hypotenuse = Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));
            document.getElementById('screen').value = hypotenuse.toLocaleString();
            addToHistory("Hipotenusa = " + hypotenuse.toLocaleString() + " m");
            showOperationGuide("Hipotenusa (Teorema de Pitágoras): c = √(a² + b²), donde a y b son catetos (m).");
            break;

        case 'Número Aleatorio':
            let minRand = parseFloat(prompt("Ingrese el valor mínimo:"));
            let maxRand = parseFloat(prompt("Ingrese el valor máximo:"));
            let randomNum = Math.random() * (maxRand - minRand) + minRand;
            document.getElementById('screen').value = randomNum.toLocaleString();
            addToHistory("Número Aleatorio = " + randomNum.toLocaleString());
            showOperationGuide("Número Aleatorio: Generado uniformemente en [min, max] como min + rand() * (max - min), donde rand() ∈ [0,1).");
            break;

        case 'Media Aritmética':
            let numbersMean = prompt("Ingrese los números separados por comas (ej. 1, 2, 3):").split(',').map(num => parseFloat(num.trim()));
            let mean = numbersMean.reduce((sum, num) => sum + num, 0) / numbersMean.length;
            document.getElementById('screen').value = mean.toLocaleString();
            addToHistory("Media Aritmética = " + mean.toLocaleString());
            showOperationGuide("Media Aritmética: μ = (Σx_i) / n, donde x_i son los valores y n es el número de datos.");
            break;

        case 'Mediana':
            let numbersMedian = prompt("Ingrese los números separados por comas (ej. 1, 2, 3):").split(',').map(num => parseFloat(num.trim())).sort((a, b) => a - b);
            let median = numbersMedian.length % 2 === 0 ? 
                (numbersMedian[numbersMedian.length / 2 - 1] + numbersMedian[numbersMedian.length / 2]) / 2 : 
                numbersMedian[Math.floor(numbersMedian.length / 2)];
            document.getElementById('screen').value = median.toLocaleString();
            addToHistory("Mediana = " + median.toLocaleString());
            showOperationGuide("Mediana: Valor central de un conjunto ordenado; si n es par, promedio de los dos centrales, si impar, el del medio.");
            break;

        case 'Moda':
            let numbersMode = prompt("Ingrese los números separados por comas (ej. 1, 2, 2, 3):").split(',').map(num => parseFloat(num.trim()));
            let frequency = {};
            numbersMode.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
            let maxFreq = Math.max(...Object.values(frequency));
            let mode = Object.keys(frequency).filter(key => frequency[key] === maxFreq).join(", ");
            document.getElementById('screen').value = mode;
            addToHistory("Moda = " + mode);
            showOperationGuide("Moda: Valor(es) con mayor frecuencia en el conjunto; puede ser unimodal, bimodal, etc.");
            break;

        case 'Desviación Estándar':
            let numbersSD = prompt("Ingrese los números separados por comas (ej. 1, 2, 3):").split(',').map(num => parseFloat(num.trim()));
            let meanSD = numbersSD.reduce((sum, num) => sum + num, 0) / numbersSD.length;
            let varianceSD = numbersSD.reduce((sum, num) => sum + Math.pow(num - meanSD, 2), 0) / numbersSD.length;
            let stdDev = Math.sqrt(varianceSD);
            document.getElementById('screen').value = stdDev.toLocaleString();
            addToHistory("Desviación Estándar = " + stdDev.toLocaleString());
            showOperationGuide("Desviación Estándar: σ = √[Σ(x_i - μ)² / n], donde μ es la media y n es el número de datos (muestral).");
            break;

        case 'Varianza':
            let numbersVar = prompt("Ingrese los números separados por comas (ej. 1, 2, 3):").split(',').map(num => parseFloat(num.trim()));
            let meanVar = numbersVar.reduce((sum, num) => sum + num, 0) / numbersVar.length;
            let variance = numbersVar.reduce((sum, num) => sum + Math.pow(num - meanVar, 2), 0) / numbersVar.length;
            document.getElementById('screen').value = variance.toLocaleString();
            addToHistory("Varianza = " + variance.toLocaleString());
            showOperationGuide("Varianza: σ² = Σ(x_i - μ)² / n, donde μ es la media y n es el número de datos (muestral).");
            break;

        case 'Cálculo de Intereses':
            let principal = parseFloat(prompt("Ingrese el capital inicial (P):"));
            let rate = parseFloat(prompt("Ingrese la tasa de interés anual (%):")) / 100;
            let t1me = parseFloat(prompt("Ingrese el tiempo (años):"));
            let interest = principal * rate * t1me;
            document.getElementById('screen').value = interest.toLocaleString();
            addToHistory("Interés Simple = " + interest.toLocaleString());
            showOperationGuide("Interés Simple: I = P * r * t, donde P es capital inicial, r es tasa anual (decimal), t es tiempo (años).");
            break;

        case 'Fórmula General de Áreas':
            alert("La fórmula general de áreas depende de la figura geométrica. No calcula un valor numérico directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Fórmula General de Áreas: Varía por figura");
            showOperationGuide(
                "Fórmula General de Áreas: Depende de la geometría. Ejemplos: Triángulo A = (1/2)bh, Cuadrado A = s², Círculo A = πr². " +
                "En cálculo, A = ∫f(x)dx para áreas bajo curvas. Requiere parámetros específicos. Vea 'Área Triángulo', 'Área Cuadrado', etc."
            );
            break;

        case 'Fórmula General de Volúmenes':
            alert("La fórmula general de volúmenes depende de la figura tridimensional. No calcula un valor numérico directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Fórmula General de Volúmenes: Varía por figura");
            showOperationGuide(
                "Fórmula General de Volúmenes: Depende de la geometría. Ejemplos: Cubo V = s³, Esfera V = (4/3)πr³, Cilindro V = πr²h. " +
                "En cálculo, V = ∫∫∫dV o ∫A(x)dx. Requiere parámetros específicos. Vea 'Volumen Cubo', 'Volumen Esfera', etc."
            );
            break;

        case 'Ecuaciones Cuadráticas':
            let aQuad = parseFloat(prompt("Ingrese el coeficiente a (ax²):"));
            let bQuad = parseFloat(prompt("Ingrese el coeficiente b (bx):"));
            let cQuad = parseFloat(prompt("Ingrese el término constante c:"));
            let discriminant = Math.pow(bQuad, 2) - 4 * aQuad * cQuad;
            let x1 = (-bQuad + Math.sqrt(discriminant)) / (2 * aQuad);
            let x2 = (-bQuad - Math.sqrt(discriminant)) / (2 * aQuad);
            document.getElementById('screen').value = `x₁ = ${x1.toLocaleString()}, x₂ = ${x2.toLocaleString()}`;
            addToHistory(`Raíces: x₁ = ${x1.toLocaleString()}, x₂ = ${x2.toLocaleString()}`);
            showOperationGuide("Ecuaciones Cuadráticas: x = [-b ± √(b² - 4ac)] / (2a), donde a, b, c son coeficientes y Δ = b² - 4ac es el discriminante.");
            break;

        case 'Ecuaciones Lineales':
            let aLin = parseFloat(prompt("Ingrese el coeficiente de x (a):"));
            let bLin = parseFloat(prompt("Ingrese el término constante (b):"));
            let xLin = -bLin / aLin;
            document.getElementById('screen').value = xLin.toLocaleString();
            addToHistory("Solución: x = " + xLin.toLocaleString());
            showOperationGuide("Ecuaciones Lineales: ax + b = 0 → x = -b/a, donde a y b son coeficientes.");
            break;

        case 'Ecuaciones Diferenciales':
            alert("Las ecuaciones diferenciales relacionan funciones y sus derivadas. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Ecuaciones Diferenciales: Relación entre funciones y derivadas");
            showOperationGuide(
                "Ecuaciones Diferenciales: Describen tasas de cambio, ej. dy/dx = ky (crecimiento exponencial). Tipos: ordinarias (ODE) y parciales (PDE). " +
                "Solución general para dy/dx = ky es y = Ce^(kt). Requiere condiciones iniciales. Aplicaciones: física, biología. Vea 'Integración'."
            );
            break;

        case 'Integración':
            alert("La integración calcula áreas bajo curvas o soluciones a ecuaciones diferenciales. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Integración: Área bajo curvas o antiderivadas");
            showOperationGuide(
                "Integración: Proceso inverso a la diferenciación. Definida: ∫_a^b f(x)dx (área bajo f(x)), indefinida: ∫f(x)dx = F(x) + C, donde F'(x) = f(x). " +
                "Ejemplo: ∫x²dx = (x³/3) + C. Aplicaciones: física (trabajo), probabilidad. Requiere función específica."
            );
            break;

        case 'Diferenciación':
            alert("La diferenciación calcula tasas de cambio. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Diferenciación: Tasas de cambio");
            showOperationGuide(
                "Diferenciación: Calcula derivadas, ej. f'(x) = lim_(h→0) [f(x+h) - f(x)]/h. Reglas: (x^n)' = nx^(n-1), (sin x)' = cos x. " +
                "Aplicaciones: optimización, física (velocidad). Requiere función específica."
            );
            break;

        case 'Teorema de Pitágoras':
            let leg1Pit = parseFloat(prompt("Ingrese el primer cateto (m):"));
            let leg2Pit = parseFloat(prompt("Ingrese el segundo cateto (m):"));
            let hypotenusePit = Math.sqrt(Math.pow(leg1Pit, 2) + Math.pow(leg2Pit, 2));
            document.getElementById('screen').value = hypotenusePit.toLocaleString();
            addToHistory("Hipotenusa (Pitágoras) = " + hypotenusePit.toLocaleString() + " m");
            showOperationGuide("Teorema de Pitágoras: a² + b² = c², donde a y b son catetos, c es hipotenusa en triángulos rectángulos.");
            break;

        case 'Teorema de Tales':
            alert("El teorema de Tales describe proporciones en triángulos semejantes. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teorema de Tales: Proporciones en triángulos");
            showOperationGuide(
                "Teorema de Tales: Si una línea paralela a un lado de un triángulo corta los otros dos, las secciones son proporcionales, ej. AB/BC = DE/EF. " +
                "Fundamento de semejanza geométrica. Aplicaciones: trigonometría, cartografía."
            );
            break;

        case 'Teorema de la Media':
            alert("El teorema de la media relaciona derivadas e integrales. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teorema de la Media: Relación derivada-integral");
            showOperationGuide(
                "Teorema de la Media: En cálculo, existe c en [a,b] tal que f'(c) = [f(b) - f(a)]/(b - a) (valor medio), o ∫_a^b f(x)dx = f(c)(b - a) (integral media). " +
                "Conecta tasas de cambio y acumulación. Aplicaciones: física, optimización."
            );
            break;

        case 'Teorema de Bayes':
            let pA = parseFloat(prompt("Ingrese la probabilidad de A, P(A):"));
            let pB_given_A = parseFloat(prompt("Ingrese P(B|A):"));
            let pB = parseFloat(prompt("Ingrese la probabilidad de B, P(B):"));
            let pA_given_B = (pA * pB_given_A) / pB;
            document.getElementById('screen').value = pA_given_B.toLocaleString();
            addToHistory("P(A|B) = " + pA_given_B.toLocaleString());
            showOperationGuide("Teorema de Bayes: P(A|B) = [P(B|A) * P(A)] / P(B), actualiza probabilidades con nueva evidencia.");
            break;

        case 'Teorema de Gauss':
            alert("El teorema de Gauss relaciona flujo y carga en campos vectoriales. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teorema de Gauss: Flujo y carga");
            showOperationGuide(
                "Teorema de Gauss: ∮E⃗·dA⃗ = Q_enc / ε₀, donde E⃗ es campo eléctrico, Q_enc es carga encerrada, ε₀ = 8.854×10⁻¹² F/m. " +
                "Relaciona divergencia con fuentes. Parte de las Leyes de Maxwell. Vea 'Leyes de Maxwell'."
            );
            break;

        case 'Teorema de Lagrange':
            alert("El teorema de Lagrange describe puntos críticos. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teorema de Lagrange: Puntos críticos");
            showOperationGuide(
                "Teorema de Lagrange: En [a,b], si f es continua y derivable, existe c donde f'(c) = [f(b) - f(a)]/(b - a). " +
                "Base del teorema del valor medio. Aplicaciones: optimización."
            );
            break;

        case 'Teorema de Stokes':
            alert("El teorema de Stokes relaciona integrales de superficie y contorno. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teorema de Stokes: Superficie y contorno");
            showOperationGuide(
                "Teorema de Stokes: ∮_C F⃗·dr⃗ = ∬_S (∇×F⃗)·dS⃗, donde F⃗ es un campo vectorial, C es contorno, S es superficie. " +
                "Generaliza el teorema de Green. Aplicaciones: electromagnetismo, dinámica de fluidos."
            );
            break;

        case 'Fórmulas de Combinatoria':
            let nComb = parseInt(prompt("Ingrese el número total de elementos (n):"));
            let kComb = parseInt(prompt("Ingrese el número de elementos a elegir (k):"));
            let comb = factorial(nComb) / (factorial(kComb) * factorial(nComb - kComb));
            document.getElementById('screen').value = comb.toLocaleString();
            addToHistory("Combinaciones = " + comb.toLocaleString());
            showOperationGuide("Fórmulas de Combinatoria: C(n,k) = n! / [k!(n-k)!], número de formas de elegir k elementos de n sin orden.");
            break;

        case 'Fórmulas de Probabilidad':
            let favorable = parseFloat(prompt("Ingrese el número de casos favorables:"));
            let total = parseFloat(prompt("Ingrese el número total de casos:"));
            let prob = favorable / total;
            document.getElementById('screen').value = prob.toLocaleString();
            addToHistory("Probabilidad = " + prob.toLocaleString());
            showOperationGuide("Fórmulas de Probabilidad: P(A) = casos favorables / casos totales, para eventos equiprobables.");
            break;

        case 'Series de Taylor':
            alert("Las series de Taylor aproximan funciones mediante polinomios. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Series de Taylor: Aproximación polinómica");
            showOperationGuide(
                "Series de Taylor: f(x) = Σ [f^(n)(a) / n!] * (x - a)^n, expande f(x) alrededor de a. Ejemplo: e^x = Σ (x^n / n!). " +
                "Requiere derivadas y punto de expansión. Aplicaciones: análisis numérico."
            );
            break;

        case 'Series de Fourier':
            alert("Las series de Fourier descomponen funciones periódicas en senos y cosenos. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Series de Fourier: Descomposición periódica");
            showOperationGuide(
                "Series de Fourier: f(x) = a_0/2 + Σ [a_n cos(nx) + b_n sin(nx)], donde a_n, b_n son coeficientes. " +
                "Aplica a funciones periódicas. Aplicaciones: procesamiento de señales."
            );
            break;

        case 'Transformada de Laplace':
            alert("La transformada de Laplace convierte funciones de tiempo en frecuencia. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Transformada de Laplace: Tiempo a frecuencia");
            showOperationGuide(
                "Transformada de Laplace: L{f(t)} = ∫_0^∞ e^(-st) f(t) dt, convierte f(t) a F(s). Ejemplo: L{e^(at)} = 1/(s-a). " +
                "Resuelve ecuaciones diferenciales. Aplicaciones: ingeniería, control."
            );
            break;

        case 'Transformada de Fourier':
            alert("La transformada de Fourier analiza frecuencias en funciones. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Transformada de Fourier: Análisis de frecuencias");
            showOperationGuide(
                "Transformada de Fourier: F(ω) = ∫_-∞^∞ f(t) e^(-iωt) dt, descompone f(t) en frecuencias. " +
                "Relacionada con series de Fourier. Aplicaciones: procesamiento de señales, física."
            );
            break;

        case 'Cálculo de Determinantes':
            let aDet = parseFloat(prompt("Matriz 2x2: Ingrese a11:"));
            let bDet = parseFloat(prompt("Ingrese a12:"));
            let cDet = parseFloat(prompt("Ingrese a21:"));
            let dDet = parseFloat(prompt("Ingrese a22:"));
            let det = aDet * dDet - bDet * cDet;
            document.getElementById('screen').value = det.toLocaleString();
            addToHistory("Determinante = " + det.toLocaleString());
            showOperationGuide("Determinante 2x2: det = a11*a22 - a12*a21, mide invertibilidad y área en transformaciones lineales.");
            break;

        case 'Cálculo de Matrices':
            alert("El cálculo de matrices incluye suma, multiplicación, etc. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Cálculo de Matrices: Operaciones matriciales");
            showOperationGuide(
                "Cálculo de Matrices: Incluye suma (A + B), multiplicación (AB), inversa (A⁻¹). Ejemplo: [a b; c d] * [e f; g h] = [ae+bg af+bh; ce+dg cf+dh]. " +
                "Requiere dimensiones compatibles. Aplicaciones: álgebra lineal, sistemas."
            );
            break;

        case 'Álgebra Lineal':
            alert("El álgebra lineal estudia vectores, matrices y espacios lineales. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Álgebra Lineal: Vectores y matrices");
            showOperationGuide(
                "Álgebra Lineal: Estudia sistemas lineales Ax = b, espacios vectoriales, transformaciones. Fundamentos: vectores, matrices, eigenvalores. " +
                "Aplicaciones: física, computación, optimización. Vea 'Cálculo de Determinantes' o 'Cálculo de Matrices'."
            );
            break;

        case 'Teoría de Conjuntos':
            alert("La teoría de conjuntos es la base de las matemáticas modernas. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría de Conjuntos: Fundamentos matemáticos");
            showOperationGuide(
                "Teoría de Conjuntos: Estudia colecciones de objetos (A ∪ B, A ∩ B, A ⊆ B). Axiomas de Zermelo-Fraenkel definen operaciones. " +
                "Base de probabilidad, lógica. Aplicaciones: matemáticas puras."
            );
            break;

        case 'Álgebra Abstracta':
            alert("El álgebra abstracta estudia estructuras como grupos y anillos. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Álgebra Abstracta: Estructuras algebraicas");
            showOperationGuide(
                "Álgebra Abstracta: Analiza estructuras como grupos (G, *), anillos, campos. Ejemplo: ℤ con suma es un grupo. " +
                "Aplicaciones: criptografía, teoría de números. Requiere definición específica."
            );
            break;

        case 'Geometría Analítica':
            let xa1 = parseFloat(prompt("Ingrese x₁ del primer punto:"));
            let y1 = parseFloat(prompt("Ingrese y₁ del primer punto:"));
            let xa2 = parseFloat(prompt("Ingrese x₂ del segundo punto:"));
            let y2 = parseFloat(prompt("Ingrese y₂ del segundo punto:"));
            let distanc3 = Math.sqrt(Math.pow(xa2 - xa1, 2) + Math.pow(y2 - y1, 2));
            document.getElementById('screen').value = distanc3.toLocaleString();
            addToHistory("Distancia = " + distanc3.toLocaleString());
            showOperationGuide("Geometría Analítica: Distancia = √[(x₂-x₁)² + (y₂-y₁)²], calcula distancias en el plano cartesiano.");
            break;

        case 'Geometría Diferencial':
            alert("La geometría diferencial estudia curvas y superficies con cálculo. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Geometría Diferencial: Curvas y superficies");
            showOperationGuide(
                "Geometría Diferencial: Usa derivadas para estudiar curvatura (κ = |d²r/ds²|), tensores métricos en superficies. " +
                "Aplicaciones: relatividad general, diseño CAD. Requiere funciones específicas."
            );
            break;

        case 'Cálculo Vectorial':
            alert("El cálculo vectorial extiende derivadas e integrales a campos vectoriales. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Cálculo Vectorial: Campos vectoriales");
            showOperationGuide(
                "Cálculo Vectorial: Incluye gradiente (∇f), divergencia (∇·F⃗), rotacional (∇×F⃗). Ejemplo: ∇f = [∂f/∂x, ∂f/∂y]. " +
                "Aplicaciones: física, ingeniería. Vea 'Teorema de Stokes' o 'Teorema de Gauss'."
            );
            break;

        case 'Geometría Espacial':
            let x1Space = parseFloat(prompt("Ingrese x₁ del primer punto:"));
            let y1Space = parseFloat(prompt("Ingrese y₁ del primer punto:"));
            let z1Space = parseFloat(prompt("Ingrese z₁ del primer punto:"));
            let x2Space = parseFloat(prompt("Ingrese x₂ del segundo punto:"));
            let y2Space = parseFloat(prompt("Ingrese y₂ del segundo punto:"));
            let z2Space = parseFloat(prompt("Ingrese z₂ del segundo punto:"));
            let distanceSpace = Math.sqrt(Math.pow(x2Space - x1Space, 2) + Math.pow(y2Space - y1Space, 2) + Math.pow(z2Space - z1Space, 2));
            document.getElementById('screen').value = distanceSpace.toLocaleString();
            addToHistory("Distancia Espacial = " + distanceSpace.toLocaleString());
            showOperationGuide("Geometría Espacial: Distancia = √[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²], en 3D.");
            break;

        case 'Cálculo Tensorial':
            alert("El cálculo tensorial generaliza vectores y matrices a múltiples dimensiones. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Cálculo Tensorial: Objetos multidimensionales");
            showOperationGuide(
                "Cálculo Tensorial: Usa tensores (T^i_j) para describir relaciones multilineales. Ejemplo: tensor métrico g_μν en relatividad. " +
                "Operaciones: producto tensorial, contracción. Aplicaciones: física teórica."
            );
            break;

        case 'Teoría de Números':
            alert("La teoría de números estudia propiedades de los enteros. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría de Números: Propiedades de enteros");
            showOperationGuide(
                "Teoría de Números: Analiza primos, divisibilidad, congruencias (a ≡ b mod m). Ejemplo: MCD(a,b) via algoritmo de Euclides. " +
                "Aplicaciones: criptografía, matemáticas puras."
            );
            break;

        case 'Ecuaciones No Lineales':
            alert("Las ecuaciones no lineales carecen de superposición lineal. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Ecuaciones No Lineales: Soluciones complejas");
            showOperationGuide(
                "Ecuaciones No Lineales: Ejemplo: x² + y² = 1 (círculo). No admiten soluciones lineales simples. " +
                "Resueltas numéricamente (Newton-Raphson) o analíticamente en casos específicos. Aplicaciones: dinámica, caos."
            );
            break;

        case 'Métodos Numéricos':
            let x0 = parseFloat(prompt("Ingrese el valor inicial x₀ para raíz de x² - 2 = 0:"));
            let x1a = x0 - (Math.pow(x0, 2) - 2) / (2 * x0); // Método de Newton simplificado
            document.getElementById('screen').value = x1a.toLocaleString();
            addToHistory("Aproximación (Newton) = " + x1a.toLocaleString());
            showOperationGuide("Métodos Numéricos: Ejemplo Newton-Raphson, x₁ = x₀ - f(x₀)/f'(x₀), para f(x) = x² - 2, f'(x) = 2x.");
            break;

        case 'Métodos de Optimización':
            alert("Los métodos de optimización buscan mínimos o máximos. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Métodos de Optimización: Máximos y mínimos");
            showOperationGuide(
                "Métodos de Optimización: Buscan extremos de f(x). Ejemplo: gradiente descendente, x_(n+1) = x_n - α∇f(x_n). " +
                "Aplicaciones: aprendizaje automático, economía."
            );
            break;

        case 'Métodos de Aproximación':
            alert("Los métodos de aproximación estiman soluciones. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Métodos de Aproximación: Estimaciones numéricas");
            showOperationGuide(
                "Métodos de Aproximación: Incluyen interpolación (Lagrange), aproximación polinómica (Taylor). " +
                "Ejemplo: f(x) ≈ f(a) + f'(a)(x-a). Aplicaciones: simulación, física."
            );
            break;

        case 'Algoritmos de Ordenación':
            alert("Los algoritmos de ordenación organizan datos. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Algoritmos de Ordenación: Organización de datos");
            showOperationGuide(
                "Algoritmos de Ordenación: Ejemplo: Bubble Sort, O(n²), compara y intercambia elementos adyacentes. " +
                "Otros: Quick Sort O(n log n). Aplicaciones: bases de datos, computación."
            );
            break;

        case 'Algoritmos de Búsqueda':
            alert("Los algoritmos de búsqueda encuentran elementos en conjuntos. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Algoritmos de Búsqueda: Localización de datos");
            showOperationGuide(
                "Algoritmos de Búsqueda: Ejemplo: Búsqueda Binaria O(log n) en listas ordenadas, divide y compara. " +
                "Aplicaciones: índices, recuperación de información."
            );
            break;

        case 'Teoría de Grafos':
            alert("La teoría de grafos estudia relaciones entre nodos y aristas. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría de Grafos: Nodos y conexiones");
            showOperationGuide(
                "Teoría de Grafos: Modela relaciones con G = (V, E), donde V son vértices, E aristas. Ejemplo: camino más corto (Dijkstra). " +
                "Aplicaciones: redes, logística."
            );
            break;

        case 'Teoría de Juegos':
            alert("La teoría de juegos analiza decisiones estratégicas. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría de Juegos: Decisiones estratégicas");
            showOperationGuide(
                "Teoría de Juegos: Estudia interacciones, ej. equilibrio de Nash donde ninguna estrategia mejora unilateralmente. " +
                "Modelos: juegos de suma cero, no cooperativa. Aplicaciones: economía, biología."
            );
            break;

        case 'Combinatoria':
            let nComb2 = parseInt(prompt("Ingrese el número total de elementos (n):"));
            let kComb2 = parseInt(prompt("Ingrese el número de elementos a elegir (k):"));
            let comb2 = factorial(nComb2) / (factorial(kComb2) * factorial(nComb2 - kComb2));
            document.getElementById('screen').value = comb2.toLocaleString();
            addToHistory("Combinaciones = " + comb2.toLocaleString());
            showOperationGuide("Combinatoria: C(n,k) = n! / [k!(n-k)!], número de combinaciones sin orden.");
            break;

        case 'Teoría de Probabilidades':
            alert("La teoría de probabilidades estudia eventos aleatorios. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Teoría de Probabilidades: Eventos aleatorios");
            showOperationGuide(
                "Teoría de Probabilidades: Define P(A) en [0,1]. Reglas: P(A∪B) = P(A) + P(B) - P(A∩B). " +
                "Base de estadística, física cuántica. Vea 'Teorema de Bayes' o 'Fórmulas de Probabilidad'."
            );
            break;

        case 'Estadística Descriptiva':
            alert("La estadística descriptiva resume datos. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Estadística Descriptiva: Resumen de datos");
            showOperationGuide(
                "Estadística Descriptiva: Incluye media (μ = Σx_i/n), mediana, moda, varianza (σ²). " +
                "Describe tendencias y dispersión. Vea 'Media Aritmética', 'Varianza'."
            );
            break;

        case 'Estadística Inferencial':
            alert("La estadística inferencial estima parámetros poblacionales. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Estadística Inferencial: Inferencia de poblaciones");
            showOperationGuide(
                "Estadística Inferencial: Usa muestras para inferir sobre poblaciones. Métodos: intervalos de confianza, pruebas de hipótesis. " +
                "Ejemplo: t = (x̄ - μ)/(s/√n). Aplicaciones: encuestas, ciencia."
            );
            break;

        case 'Métodos de Estimación':
            alert("Los métodos de estimación predicen parámetros. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Métodos de Estimación: Predicción de parámetros");
            showOperationGuide(
                "Métodos de Estimación: Incluyen máxima verosimilitud, estimadores puntuales (x̄ para μ). " +
                "Propiedades: insesgadez, consistencia. Aplicaciones: estadística inferencial."
            );
            break;

        case 'Regresión Lineal':
            let xReg = prompt("Ingrese valores de x separados por comas:").split(',').map(num => parseFloat(num.trim()));
            let yReg = prompt("Ingrese valores de y separados por comas:").split(',').map(num => parseFloat(num.trim()));
            let nReg = xReg.length;
            let sumX = xReg.reduce((a, b) => a + b, 0);
            let sumY = yReg.reduce((a, b) => a + b, 0);
            let sumXY = xReg.map((x, i) => x * yReg[i]).reduce((a, b) => a + b, 0);
            let sumX2 = xReg.map(x => x * x).reduce((a, b) => a + b, 0);
            let slope = (nReg * sumXY - sumX * sumY) / (nReg * sumX2 - sumX * sumX);
            let intercept = (sumY - slope * sumX) / nReg;
            document.getElementById('screen').value = `y = ${slope.toLocaleString()}x + ${intercept.toLocaleString()}`;
            addToHistory(`Regresión: y = ${slope.toLocaleString()}x + ${intercept.toLocaleString()}`);
            showOperationGuide("Regresión Lineal: y = mx + b, m = (nΣxy - ΣxΣy)/(nΣx² - (Σx)²), b = (Σy - mΣx)/n.");
            break;

        case 'Regresión No Lineal':
            alert("La regresión no lineal modela relaciones no lineales. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Regresión No Lineal: Modelos curvos");
            showOperationGuide(
                "Regresión No Lineal: Modela y = f(x, β) + ε, ej. y = a * e^(bx). Resuelta por mínimos cuadrados no lineales. " +
                "Aplicaciones: biología, economía."
            );
            break;

        case 'Análisis de Varianza':
            alert("El análisis de varianza (ANOVA) compara medias entre grupos. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("ANOVA: Comparación de varianzas");
            showOperationGuide(
                "Análisis de Varianza: F = (varianza entre grupos)/(varianza dentro de grupos). Prueba diferencias en medias. " +
                "Aplicaciones: experimentos, estadística."
            );
            break;

        case 'Cálculo de Probabilidades':
            let favorableProb = parseFloat(prompt("Ingrese el número de casos favorables:"));
            let totalProb = parseFloat(prompt("Ingrese el número total de casos:"));
            let probCalc = favorableProb / totalProb;
            document.getElementById('screen').value = probCalc.toLocaleString();
            addToHistory("Probabilidad = " + probCalc.toLocaleString());
            showOperationGuide("Cálculo de Probabilidades: P(A) = casos favorables / casos totales, para eventos equiprobables.");
            break;

        case 'Pruebas de Hipótesis':
            alert("Las pruebas de hipótesis evalúan afirmaciones estadísticas. No calcula un valor directo aquí.");
            document.getElementById('screen').value = "No aplica (explicación teórica)";
            addToHistory("Pruebas de Hipótesis: Evaluación estadística");
            showOperationGuide(
                "Pruebas de Hipótesis: Comparan H₀ (nula) vs H₁ (alternativa). Ejemplo: z = (x̄ - μ₀)/(σ/√n). " +
                "Usa p-valor o regiones críticas. Aplicaciones: investigación."
            );
            break;

        case 'Intervalos de Confianza':
            let meanCI = parseFloat(prompt("Ingrese la media muestral:"));
            let stdDevCI = parseFloat(prompt("Ingrese la desviación estándar muestral:"));
            let nCI = parseInt(prompt("Ingrese el tamaño de la muestra:"));
            let zCI = 1.96; // Para 95% de confianza
            let margin = zCI * (stdDevCI / Math.sqrt(nCI));
            document.getElementById('screen').value = `${(meanCI - margin).toLocaleString()} - ${(meanCI + margin).toLocaleString()}`;
            addToHistory(`Intervalo de Confianza (95%) = ${(meanCI - margin).toLocaleString()} - ${(meanCI + margin).toLocaleString()}`);
            showOperationGuide("Intervalos de Confianza: x̄ ± z*(σ/√n), z = 1.96 para 95%, estima rango de parámetro poblacional.");
            break;

        // ... (otros casos de física o química si están presentes)

        }
        togglePopup();
// Función auxiliar para factorial (usada en combinatoria)
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
    }

    function formatNumber(value) {

            value = value.replace(/[^0-9]/g, '');

            return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        function updateInput() {
            const input = document.getElementById('screen');
            const cursorPosition = input.selectionStart;


            const oldValue = input.value.replace(/,/g, '');
            const newValue = formatNumber(oldValue);

            input.value = newValue;

            let newCursorPosition = cursorPosition;

            if (oldValue.length < newValue.length) {
                newCursorPosition += 1;
            } else if (oldValue.length > newValue.length) {
                newCursorPosition -= 1;
            }

            input.setSelectionRange(newCursorPosition, newCursorPosition);
        }

        document.getElementById('screen').addEventListener('input', updateInput);

    function showOperationGuide(operation) {
        document.getElementById('operationGuide').textContent = operation;
    }

    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')' || key === '%') {
            appendToScreen(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Backspace') {
            backspace();
        }
    });

    function toggleMobileView() {
        const calculator = document.querySelector('.calculator');
        calculator.style.width = window.innerWidth <= 767 ? '90%' : '320px';
    }

    window.addEventListener('resize', toggleMobileView);
    toggleMobileView(); 

    function formatNumber() {
    const input = document.getElementById('screen');
    let value = input.value.replace(/,/g, '');
    
    if (!isNaN(value) && value.length > 3) {
        value = Number(value).toLocaleString('en');
    }
    
    input.value = value;
}

function pasteNumber() {
    navigator.clipboard.readText().then(text => {
        let cleanText = text.replace(/,/g, ''); 
        
        if (!isNaN(cleanText)) {
            const input = document.getElementById('screen');
            input.value += cleanText;
            formatNumber();
        } else {
            alert('El contenido del portapapeles no es un número válido.');
        }
    }).catch(err => {
        alert('Error al acceder al portapapeles: ' + err);
    });
}

function toggleMobileView() {
        const calculator = document.querySelector('.calculator');
        const sidebar = document.querySelector('.sidebar');
        const guideSidebar = document.querySelector('.guide-sidebar');
        const mobileButton = document.querySelector('.neon-button');

        if (calculator.classList.contains('mobile-view')) {

            calculator.classList.remove('mobile-view');
            sidebar.style.display = 'block';
            guideSidebar.style.display = 'block';
            mobileButton.textContent = 'Ver sitio móvil';
            document.querySelector('.mobile-button-left').remove();
            document.querySelector('.mobile-button-right').remove();
        } else {

            calculator.classList.add('mobile-view');
            sidebar.style.display = 'none';
            guideSidebar.style.display = 'none';
            mobileButton.textContent = 'Ver sitio computador';

            const leftButton = document.createElement('button');
            leftButton.classList.add('mobile-button', 'mobile-button-left');
            leftButton.textContent = 'Guía';
            leftButton.onclick = () => guideSidebar.style.display = guideSidebar.style.display === 'block' ? 'none' : 'block';
            document.body.appendChild(leftButton);

            const rightButton = document.createElement('button');
            rightButton.classList.add('mobile-button', 'mobile-button-right');
            rightButton.textContent = 'Historial';
            rightButton.onclick = () => sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
            document.body.appendChild(rightButton);
        }
    }

// Mapa para convertir símbolos alternativos a operadores válidos
const operatorMap = {
    'x': '*',
    'X': '*',
    '×': '*',
    '÷': '/',
};

// Mapa para mostrar símbolos en la pantalla
const displayMap = {
    '*': '×',
    '/': '÷'
};

// Caracteres permitidos
const allowedKeys = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '.', '+', '-', '*', '/', '(', ')',
    'x', 'X', '×', '÷',
    'Enter', 'Backspace', 'Delete'
];

// Operadores
const operators = ['+', '-', '*', '/'];

// Máximo de dígitos por número
const MAX_DIGITS = 100;


// Función debounce para evitar entradas rápidas
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// Función para añadir caracteres a la pantalla
function appendToScreen(value) {
    const screen = document.getElementById('screen');
    let expression = screen.value;
    const mappedValue = operatorMap[value] || value;

    // Reemplazar operador si el último carácter es un operador
    if (operators.includes(mappedValue) && operators.includes(expression.slice(-1))) {
        expression = expression.slice(0, -1);
    }

    // Validaciones
    if (!isOperatorAllowed(expression, mappedValue)) return;
    if (!isDecimalPointAllowed(expression, mappedValue)) return;
    if (!isNumberLengthAllowed(expression, mappedValue)) return;

    // Manejar paréntesis con multiplicación implícita
    expression = handleParentheses(expression, mappedValue);
    screen.value = expression;
    updateInput(expression);
}

// Función para validar si un operador es permitido
function isOperatorAllowed(expression, value) {
    if (!operators.includes(value)) return true;
    if (expression === '') return false;
    const lastChar = expression.slice(-1);
    return !operators.includes(lastChar) && lastChar !== '(' && lastChar !== '.';
}

// Función para validar si un punto decimal es permitido
function isDecimalPointAllowed(expression, value) {
    if (value !== '.') return true;
    const tokens = expression.split(/[\+\-\*\/\(\)]/).filter(t => t !== '');
    const lastToken = tokens[tokens.length - 1] || '';
    return !lastToken.includes('.') && lastToken !== '';
}

// Función para validar la longitud de un número
function isNumberLengthAllowed(expression, value) {
    if (!/[0-9]/.test(value)) return true;
    const tokens = expression.split(/[\+\-\*\/\(\)]/).filter(t => t !== '');
    const lastToken = tokens[tokens.length - 1] || '';
    const digitCount = lastToken.replace(/[^0-9]/g, '').length;
    return digitCount < MAX_DIGITS;
}

// Función para manejar paréntesis (inserción de * implícito)
function handleParentheses(expression, value) {
    if (value !== '(' && value !== ')') return expression + value;
    const lastChar = expression.slice(-1);
    if (value === '(' && (lastChar === ')' || /\d/.test(lastChar))) {
        return expression + '*' + value;
    }
    return expression + value;
}

// Función para formatear números con comas cada tres dígitos
function formatNumber(expression) {
    // Remover comas existentes para evitar duplicaciones
    expression = expression.replace(/,/g, '');
    const tokens = expression.split(/([+\-*/\(\)])/);
    return tokens.map(token => {
        // Solo formatear tokens que sean números (positivos, negativos, con o sin decimales)
        if (/^-?\d*\.?\d*$/.test(token) && token !== '') {
            const isNegative = token.startsWith('-');
            const cleanToken = isNegative ? token.slice(1) : token;
            const [integerPart, decimalPart = ''] = cleanToken.split('.');
            // Formatear la parte entera con comas cada tres dígitos
            let formattedInteger = '';
            for (let i = integerPart.length - 1, count = 0; i >= 0; i--) {
                if (count > 0 && count % 3 === 0) {
                    formattedInteger = ',' + formattedInteger;
                }
                formattedInteger = integerPart[i] + formattedInteger;
                count++;
            }
            const formattedNumber = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
            return isNegative ? `-${formattedNumber}` : formattedNumber;
        }
        return displayMap[token] || token;
    }).join('');
}

// Actualizar pantalla con formato en tiempo real
function updateInput(expression) {
    const screen = document.getElementById('screen');
    // Asegurar que el formato se aplique a toda la expresión
    screen.value = formatNumber(expression);
}

// Actualizar pantalla con formato
function updateInput(expression) {
    const screen = document.getElementById('screen');
    screen.value = formatNumber(expression);
}

// Borrar último carácter
function backspace() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
    updateInput(screen.value);
}

// Limpiar pantalla
function clearScreen() {
    const screen = document.getElementById('screen');
    screen.value = '';
    updateInput('');
}

// Calcular expresión
function calculate() {
    const screen = document.getElementById('screen');
    const previousNumber = document.getElementById('previousNumber');
    let expression = screen.value;

    try {
        // Reemplazar símbolos de visualización por operadores
        expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
        
        // Validar expresión antes de evaluar
        if (!expression || /[\+\-\*\/]$/.test(expression) || expression.includes('..')) {
            throw new Error('Expresión inválida');
        }

        // Usar Big.js para precisión
        const result = Big(eval(expression)).toString();
        previousNumber.textContent = expression + ' =';
        screen.value = result;
        updateInput(result);
    } catch (error) {
        screen.classList.add('error-shake');
        setTimeout(() => screen.classList.remove('error-shake'), 300);
        if (navigator.vibrate) navigator.vibrate(50);
        screen.value = 'Error';
        setTimeout(() => {
            screen.value = '';
            updateInput('');
        }, 1000);
    }
}

// Resetear calculadora
function reset() {
    const screen = document.getElementById('screen');
    const previousNumber = document.getElementById('previousNumber');
    screen.value = '';
    previousNumber.textContent = '';
    updateInput('');
}

// Copiar resultado
function copyResult() {
    const screen = document.getElementById('screen');
    navigator.clipboard.writeText(screen.value).then(() => {
        screen.classList.add('copied');
        setTimeout(() => screen.classList.remove('copied'), 300);
    });
}

// Pegar número
function pasteNumber() {
    navigator.clipboard.readText().then(text => {
        const screen = document.getElementById('screen');
        const validText = text.replace(/[^0-9\.\+\-\*\/\(\)]/g, '');
        screen.value = validText;
        updateInput(validText);
    });
}

// Placeholder para Science Mode
function togglePopup() {
    console.log('Science Mode toggled');
    const popup = document.getElementById('popup');
    const overlay = document.querySelector('.popup-overlay');

    if (popup.style.display === 'block') {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    } else {
      popup.style.display = 'block';
      overlay.style.display = 'block';
    }
  }


// Manejar entradas de teclado con debounce
const debouncedAppendToScreen = debounce(appendToScreen, 100);

// Función para manejar entradas de teclado
function handleKeyboardInput(event) {
    const key = event.key;
    if (!allowedKeys.includes(key)) {
        event.preventDefault();
        const screen = document.getElementById('screen');
        screen.classList.add('error-shake');
        setTimeout(() => screen.classList.remove('error-shake'), 300);
        if (navigator.vibrate) navigator.vibrate(50);
        return;
    }

    event.preventDefault();
    if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Delete') {
        clearScreen();
    } else {
        debouncedAppendToScreen(key);
    }
}

// Configurar listeners de eventos
document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    screen.removeAttribute('readonly');
    screen.addEventListener('keydown', handleKeyboardInput);
    // Prevenir entrada directa en el campo para evitar duplicación
    screen.addEventListener('input', (event) => {
        event.preventDefault();
        screen.value = formatNumber(screen.value);
    });
});