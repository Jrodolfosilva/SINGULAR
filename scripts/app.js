/*
Javascript para realização da requisição aos imóveis.
*/
const baseurl = "https://spendstore.shop/wp-json/wp/v2/imovel";

async function ReqImoveis() {
    let result;

    const response = await fetch(baseurl).catch((error) => console.log(error));
    result = await response.json();

    if (result) {
        createCards(result);
    }
}

ReqImoveis();

/*
Aqui criaremos os cards/elementos-html de forma dinâmica com js
*/
async function createCards(result) {
    const containerCard = document.querySelector(".container_immobile__container_carrossel"); /*Div onde ficará todos meus imóveis */

    await Promise.all(
        result.map(async (imovel) => {
            const imagem = await fetch(`https://spendstore.shop/wp-json/wp/v2/media?parent=${imovel.id}`)
                .then((resp) => resp.json())
                .catch((err) => console.log(err));

            const cardEnterprise = document.createElement("div");
            const title = imovel.title.rendered;
            const endereco = imovel.acf.endereco;
            const vagas = imovel.acf.vagas;
            const area = imovel.acf.area_construida + " m<sup>2</sup>";

            const titleElement = document.createElement('h1');
            titleElement.innerHTML = title;

            const enderecoElement = document.createElement('p');
            enderecoElement.innerHTML = endereco;

            const areaElement = document.createElement('p');
            areaElement.innerHTML = `${area} | ${vagas == 0 || vagas == 1 ? `${vagas} Vaga` : `${vagas} Vagas`}`;

            const hoverElement = document.createElement("div");
            hoverElement.classList.add('hover');

            cardEnterprise.classList.add("card"); /*Adicionar uma class nos cards */

            if (imagem)  imagem.map((obj)=>{
                
                cardEnterprise.style.backgroundImage = `url(${obj.guid.rendered})`
            
            })
            cardEnterprise.style.backgroundSize = 'cover';
            cardEnterprise.style.backgroundRepeat = 'no-repeat';

           

            hoverElement.appendChild(titleElement);
            hoverElement.appendChild(enderecoElement);
            hoverElement.appendChild(areaElement);

            cardEnterprise.appendChild(hoverElement);
            containerCard.appendChild(cardEnterprise); /*Adicionar os cards na div container */
        })
    );
}
