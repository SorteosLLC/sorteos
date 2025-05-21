document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const messageDiv = document.getElementById('message');
    const rewardSection = document.getElementById('rewardSection');
    const confirmRewardBtn = document.getElementById('confirmReward');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (email) {
            // Mostrar mensaje inicial
            messageDiv.textContent = 'Su correo está participando en la encuesta de tecnología 2025';
            messageDiv.className = 'message success';
            
            // Mostrar sección de recompensas
            rewardSection.style.display = 'block';
            
            // Deshabilitar el formulario inicial
            emailInput.disabled = true;
            form.querySelector('button').disabled = true;
        }
    });

    confirmRewardBtn.addEventListener('click', () => {
        const selectedReward = document.querySelector('input[name="reward"]:checked');
        
        if (selectedReward) {
            const rewardText = selectedReward.value === 'superSelectos' 
                ? 'Vale de Super Selectos por $10' 
                : 'Retiro por BAC por $5';
            
            messageDiv.innerHTML = `
                <p>Recompensa seleccionada: ${rewardText}</p>
                <p>Continúa con la verificación de tu email vía nuestro colaborador en WhatsApp</p>
            `;
            messageDiv.className = 'message success';
            
            // Ocultar el mensaje después de 8 segundos
            setTimeout(() => {
                messageDiv.className = 'message';
                // Resetear el formulario
                emailInput.value = '';
                emailInput.disabled = false;
                form.querySelector('button').disabled = false;
                rewardSection.style.display = 'none';
                selectedReward.checked = false;
            }, 8000);
        } else {
            messageDiv.textContent = 'Por favor, selecciona una recompensa';
            messageDiv.className = 'message error';
            
            setTimeout(() => {
                messageDiv.className = 'message';
            }, 3000);
        }
    });
}); 