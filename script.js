'use strict'

const form = document.getElementById('form');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');
const cep = document.getElementById('cep');

const resetBtn = document.getElementById('reset-form');
const submitBtn = document.getElementById('submit-form');

const fetchDados = () => {
    const url = `https://desafio-gama-backend.herokuapp.com/`;

    fetch(url)
        .then(response => response.json())
        .then(dados => {
            console.log(dados);
        })
} 

fetchDados();

// let apiAddress = [];

// // Get CEP from API
// async function fetchAddress() {
//     const teste = document.getElementById('cep');
//     console.log(teste);
//     const apiUrl = `viacep.com.br/ws/${document.getElementById('cep')}/json/`;
//     try {
//         const response = await fetch(apiUrl);
//         apiAddress = await response.json();
//         console.log(apiCepUrl);
//         // newQuote()
//     } catch (error) {
//         alert("CEP não encontrado!");
//     }
// }

// submitBtn.addEventListener('click', fetchAddress)

// form.addEventListener('click', getCep);

// // CEP
// const cep = document.getElementById('cep');
// cep.addEventListener('blur', () => {
//     let value = cep.value.replace(/^([\d]{2})([\d]{3})([\d]{3})$/, "$1.$2-$3");
//   cep.value = value;
// });


// // RG
// const rg = document.getElementById('rg');
// rg.addEventListener('blur', () => {
//     let value = rg.value.replace(/^([\d]{2})([\d]{3})([\d]{3})([\d]{1})$/, "$1.$2.$3-$4");
//     rg.value = value;
// });

// // CPF
// const cpf = document.getElementById('cpf');
// cpf.addEventListener('blur', () => {
//     let value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");
//     cpf.value = value;
// });








// On Load
// getCep()