const username = document.querySelector('#name'),
      email = document.querySelector('#email'),
      password = document.querySelector('#password'),
      lastname = document.querySelector('#lastname'),
      phone = document.querySelector('#phone'),
      confirmPassword = document.querySelector('#confirmPassword');


username.addEventListener('input', (e) => {
    if(document.querySelector('.notification') === null) {
        notification(username, 'Введите не менее 6 символов!');
    }

    if(e.target.value.length > 6) {
        removeNotification();
    }
    
})

email.addEventListener('input', (e) => {
    if(document.querySelector('.notification') === null) {
        notification(email, 'Укажите корректный адрес электронной почты!');
    }

    if(e.target.value.includes('@') && e.target.value.length >= 8 && e.target.value.includes('.') ) {
        removeNotification();
    }
    
})

password.addEventListener('input', (e) => {
    if(document.querySelector('.notification') === null) {
        notification(password, 'Используйте надёжный пароль!');
    }

    if(e.target.value.length >= 8) {
        removeNotification();
    }
    
})

confirmPassword.addEventListener('input', (e) => {
    if(document.querySelector('.notification') === null) {
        notification(confirmPassword, 'Пароли должны совпадать!');
    }

    if(e.target.value === document.querySelector('#password')) {
        removeNotification();
    }
    
})


function notification(parent, text) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <div class="notification">
        <span class="material-symbols-outlined">block</span>
        <div class="notification">${text}</div>
    </div>
    `
    const el = wrapper.firstElementChild;
    parent.after(el);

    
}function removeNotification() {
    document.querySelector('.notification').remove();
}