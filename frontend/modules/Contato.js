import validator from 'validator';

export default class Login {
  constructor(formClass){
    this.form = document.querySelector(formClass);
  }

  init(){
    this.events();
  }

  events(){
    if(!this.form) return;
    
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validade(e);
    });
  }

  validade(e){

    this.limpaErros();

    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    let error = false;

    if(nomeInput.value.length == 0){
      this.criaErro(nomeInput, 'Nome é um campo obrigatório.');
      error = true;
    }

    if(!validator.isEmail(emailInput.value) && !telefoneInput.value){
      this.criaErro(emailInput, 'Insira um e-mail válido ou um telefone.');
      error = true;
    }

    if(!error){
      el.submit();
    }
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }

  limpaErros(){
    for(let errorText of this.form.querySelectorAll('.error-text')){
      errorText.remove();
    }
  }
}