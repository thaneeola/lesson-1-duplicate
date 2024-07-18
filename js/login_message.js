document.addEventListener('DOMContentLoaded', function() {
    let isLoggedIn = false; 

    
    const modal = document.createElement('div');
    modal.id = 'loginModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <i class="fas fa-sync-alt animated-icon"></i>
            <p>Please log in to access this feature.</p>
        </div>
    `;
    document.body.appendChild(modal);

    
    const span = modal.querySelector('.close');

    
    function showModal() {
        modal.style.display = "block";
        
        setTimeout(hideModal, 2500);
    }

   
    function hideModal() {
        modal.style.display = "none";
    }

   
    span.onclick = hideModal;

    
    window.onclick = function(event) {
        if (event.target == modal) {
            hideModal();
        }
    }

    // Add click event listeners to all links except login
    document.querySelectorAll('a:not(#login-icon a)').forEach(link => {
        link.addEventListener('click', function(e) {
            if (!isLoggedIn) {
                e.preventDefault();
                showModal();
            }
        });
    });

    // Simulating login (you would replace this with actual login logic)
    const loginIcon = document.getElementById('login-icon');
    if (loginIcon) {
        loginIcon.addEventListener('click', function(e) {
            e.preventDefault();
            isLoggedIn = true;
            window.location.href = "login.html";
        });
    }

    // Show the modal after a specified time interval (e.g., 5 seconds)
    setTimeout(function() {
        if (!isLoggedIn) {
            showModal();
        }
    }, 5000); // 5000 milliseconds = 5 seconds
});
