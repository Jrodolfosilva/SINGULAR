const form =  document.querySelector("#myForm");
const statusM = document.querySelector(".status");

$('#myForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    const formData = new FormData(this);
    formData.append('service_id', 'service_v6fuo4o');
    formData.append('template_id', 'email');
    formData.append('user_id', 'UCiLKK0qfxn8qeoCq');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        form.reset()
        statusM.innerHTML = "Sua mensagem foi enviada com sucesso"
        

    }).fail(function() {
        statusM.innerHTML = "Ops!Algo não está certo."

    });
});
