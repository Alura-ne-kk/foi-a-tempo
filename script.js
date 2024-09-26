document.addEventListener("DOMContentLoaded", function () {
   const botoes = document.querySelectorAll(".btn-proximo");
   const passos = document.querySelectorAll(".passo");

   botoes.forEach((botao) => {
       botao.addEventListener("click", function () {
           const proxima = this.getAttribute("data-proxima");
           

           passos.forEach((passo) => {
               passo.classList.remove("ativo");
           });
           
         
           const proximoPasso = document.getElementById(`passo-${proxima}`);
           if (proximoPasso) {
               proximoPasso.classList.add("ativo");
           } else {
               console.error(`Passo com id passo-${proxima} não encontrado`);
           }
       });
   });
});
