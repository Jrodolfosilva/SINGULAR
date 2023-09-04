

/*
Javascript para realização da requisição aos imóveis.

*/
const baseurl = "http://singular-online-wp.local/wp-json/wp/v2/imovel"

async function ReqImoveis(){
    let result;

    const response = await fetch(baseurl).catch((error)=>console.log(error))
    result = await response.json()

    if(result){
        createCards(result)
    }


}

ReqImoveis()



/*

Aqui criaremos os cards/elementos-html de forma dinâmica com js

*/

function createCards (result){

    
    const containerCard = document.querySelector(".container_immobile__container_carrossel") ;/*Div onde ficará todos meus imóveis */
 
    
 
    result&&result.map((imovel)=>{
 
         const cardEnterprise =  document.createElement("div");

         const title = document.TEXT_NODE = imovel.title.rendered;
         const endereco =  document.TEXT_NODE = imovel.acf.endereco;
         const vagas = document.TEXT_NODE = imovel.acf.vagas;
         const area =  document.TEXT_NODE = imovel.acf.area_construida +" m<sup>2</sup>"
         const image = document.textContent = `http://singular-online-wp.local/wp-admin/upload.php?item=${imovel.acf.imagem}`
        

         const titleElement = document.createElement('h1')
         titleElement.innerHTML=title;
        
         const enderecoElement = document.createElement('p')
         enderecoElement.innerHTML=endereco;
        
         const areaElement = document.createElement('p')
         areaElement.innerHTML=area;

         const vagasElement = document.createElement('p')
         vagasElement.innerHTML=vagas;
        
         const hoverElement =  document.createElement("div")
         hoverElement.classList.add('hover')
        
         cardEnterprise.classList.add("card")/*Adicionar uma class nos cards */
         hoverElement.appendChild(titleElement)
         hoverElement.appendChild(enderecoElement)
         hoverElement.appendChild(areaElement)
         hoverElement.appendChild(vagasElement)
         cardEnterprise.appendChild(hoverElement)
         cardEnterprise.style.backgroundImage="url(http://singular-online-wp.local/wp-content/uploads/2023/09/unibanco.jpg)"
         cardEnterprise.style.backgroundSize='cover'
         cardEnterprise.style.backgroundRepeat='no-repeat'
         containerCard.appendChild(cardEnterprise)/*Adicionar os cards na div container */


         
 
         console.log(imovel)
         
 
 
 
 
 })
 
 
 
 }
 createCards()

