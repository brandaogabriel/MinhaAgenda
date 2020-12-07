import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import Login from './modules/Login';
import Contato from './modules/Contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

const contatoEdit = new Contato('.contato-edit');
const contatoRegister = new Contato('.contato-register');
contatoEdit.init();
contatoRegister.init();