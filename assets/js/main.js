//from eye
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var eyeIcon = document.getElementById('eye-icon');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove('far', 'fa-eye');
        eyeIcon.classList.add('far', 'fa-eye-slash');
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove('far', 'fa-eye-slash');
        eyeIcon.classList.add('far', 'fa-eye');
    }
}


// Menu Dropdown Toggle
function toggleMenu() {
    const navWrapper = document.querySelector('.nav-wrapper');
    const menuTrigger = document.querySelector('.menu-trigger');
    navWrapper.classList.toggle('show-menu');
    menuTrigger.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}


// search 
function handleSearchInput(event) {
    var input = event.target;
    var cancelIcon = document.getElementById('cancelIcon');
    if (input.value.trim() !== '') {
        cancelIcon.style.display = 'inline-block';
    } else {
        cancelIcon.style.display = 'none';
    }
}

function clearSearchInput() {
    var searchInput = document.querySelector('.search-input');
    var cancelIcon = document.getElementById('cancelIcon');
    searchInput.value = '';
    cancelIcon.style.display = 'none'; 
}
