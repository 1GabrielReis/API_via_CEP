function consultarCEP(cep) {
  if (cep.length === 8) { // Verifica se o CEP tem 8 dígitos

      fetch(`https://viacep.com.br/ws/${cep}/json/`)    
      .then(response => response.json())

        .then(data => {
          if(data.error){
            limpCampos();
          }else{
            preencherCampos(data)
          }
        })

    }
  }

  

  function preencherCampos(dados) {
    document.getElementById('logradouro').value = dados.logradouro || '';
    document.getElementById('bairro').value = dados.bairro || '';
    document.getElementById('cidade').value = dados.localidade || '';
    document.getElementById('estado').value = dados.uf || '';
  }

  function limpCampos(){
    document.getElementById('cep').value = "";
    document.getElementById('logradouro').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
  }

