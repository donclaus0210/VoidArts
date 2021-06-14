$('#formulario').on('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    formData.append('service_id', 'gmailteste');
    formData.append('template_id', 'teste-template');
    formData.append('user_id', 'user_FeCrMVXyDOBU39bKDA7bH');

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false
    }).done(function() {
        swal('Orçamento Enviado', 'Seu orçamento foi enviado com sucesso!!!', 'success');
    }).fail(function(error) {
        swal('Oops... Parece que algo deu errado', 'Oops... Algo não está funcionando como deveria, contate-nos por email, e relate o problema...', 'error');
    });
});