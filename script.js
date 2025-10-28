  // Crear estrellas de fondo
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starCount = 150;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Tamaño y posición aleatorios
                const size = Math.random() * 3 + 1;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 3 + 2;
                
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${posX}%`;
                star.style.top = `${posY}%`;
                star.style.animationDelay = `${delay}s`;
                star.style.animationDuration = `${duration}s`;
                
                starsContainer.appendChild(star);
            }
        }

        // Configuración de eventos para abrir modales
        document.querySelectorAll('.calculator-card').forEach(card => {
            card.addEventListener('click', () => {
                const operation = card.getAttribute('data-operation');
                const modal = document.getElementById(`${operation}-modal`);
                modal.style.display = 'flex';
            });
        });

        // Configuración de eventos para cerrar modales
        document.querySelectorAll('.close-btn').forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                modal.style.display = 'none';
            });
        });

        // Cerrar modal al hacer clic fuera del contenido
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        });

        // Lógica para la calculadora de suma
        document.getElementById('calcular-suma').addEventListener('click', () => {
            const num1 = parseFloat(document.getElementById('suma-num1').value) || 0;
            const num2 = parseFloat(document.getElementById('suma-num2').value) || 0;
            const resultado = num1 + num2;
            
            document.getElementById('valor-suma').textContent = resultado;
            document.getElementById('resultado-suma').classList.add('show');
        });

        // Lógica para la calculadora de resta
        document.getElementById('calcular-resta').addEventListener('click', () => {
            const num1 = parseFloat(document.getElementById('resta-num1').value) || 0;
            const num2 = parseFloat(document.getElementById('resta-num2').value) || 0;
            const resultado = num1 - num2;
            
            document.getElementById('valor-resta').textContent = resultado;
            document.getElementById('resultado-resta').classList.add('show');
        });

        // Lógica para la calculadora de multiplicación
        document.getElementById('calcular-multiplicacion').addEventListener('click', () => {
            const num1 = parseFloat(document.getElementById('multiplicacion-num1').value) || 0;
            const num2 = parseFloat(document.getElementById('multiplicacion-num2').value) || 0;
            const resultado = num1 * num2;
            
            document.getElementById('valor-multiplicacion').textContent = resultado;
            document.getElementById('resultado-multiplicacion').classList.add('show');
        });

        // Lógica para la calculadora de división
        document.getElementById('calcular-division').addEventListener('click', () => {
            const num1 = parseFloat(document.getElementById('division-num1').value) || 0;
            const num2 = parseFloat(document.getElementById('division-num2').value) || 1;
            
            if (num2 === 0) {
                alert("ERROR: División por cero detectada. Sistema orbital comprometido.");
                return;
            }
            
            const resultado = num1 / num2;
            document.getElementById('valor-division').textContent = resultado.toFixed(2);
            document.getElementById('resultado-division').classList.add('show');
        });

        // Lógica para la calculadora de potencia
        document.getElementById('calcular-potencia').addEventListener('click', () => {
            const base = parseFloat(document.getElementById('potencia-base').value) || 0;
            const exponente = parseFloat(document.getElementById('potencia-exponente').value) || 0;
            const resultado = Math.pow(base, exponente);
            
            document.getElementById('valor-potencia').textContent = resultado;
            document.getElementById('resultado-potencia').classList.add('show');
        });

        // Permitir calcular con la tecla Enter
        document.querySelectorAll('input').forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const modal = input.closest('.modal');
                    const calculateBtn = modal.querySelector('.calculate-btn');
                    calculateBtn.click();
                }
            });
        });

        // Inicializar estrellas al cargar la página
        document.addEventListener('DOMContentLoaded', createStars);
