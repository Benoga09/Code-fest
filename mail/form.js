// Função para enviar os dados por e-mail
async function sendEmail() {

    var params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      destination: document.getElementById('destination').value,
    }

    console.log(params)
  
    // Usar fetch para enviar os dados para o servidor
    await fetch('https://lenjoy-sl-mail-service.onrender.com/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
      body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(data => {
        console.log('RESPOSTA: ', data)

        // Verifica se a mensagem da resposta é "Email sent succesfuly"
        if (data.message === "Email sent succesfuly") {
            // Renderiza o componente de sucesso
            $('#success').html("<div class='alert alert-success'>");
            $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>")
                .append("</button>");
            $('#success > .alert-success')
                .append("<strong>Sua mensagem foi enviada com sucesso!</strong>");
            $('#success > .alert-success')
                .append('</div>');
            
            // Reseta o formulário
            $('#contactForm').trigger("reset");
        }
    })
    .catch(error => console.error('Error:', error));
  }
