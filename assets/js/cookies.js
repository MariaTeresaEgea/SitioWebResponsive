window.addEventListener('load', () => {
    if (!localStorage.getItem('cookiesAccepted')) {
        const popup = document.createElement('div');
        popup.classList.add('cookie-popup');
        popup.innerHTML = `
            <p>Esta web usa cookies. ¿Aceptas?</p>
            <button id="accept">Aceptar</button>
            <button id="reject">Rechazar</button>
        `;
        document.body.appendChild(popup);

        document.getElementById('accept').addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            popup.remove();
        });

        document.getElementById('reject').addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'false');
            popup.remove();
        });
    }
});