const url = new URL(window.location.href);

const params = new URLSearchParams(url.search);

const codValue = params.get('cod');

// Verifique se o valor foi encontrado
if (codValue !== null) {
    details(codValue);
    console.log('Valor do parâmetro "cod":', codValue);
} else {
    console.log('O parâmetro "cod" não foi encontrado na URL.');
}

async function details(codigo) {
    try {
        const imovel = await fetch(`https://spendstore.shop/wp-json/wp/v2/imovel/${codigo}`);
        const details = await imovel.json();

        const imagem = await fetch(`https://spendstore.shop/wp-json/wp/v2/media?parent=${codigo}`);
        const imagemImovel = await imagem.json();

        AdddetailsProperty(details, imagemImovel);
    } catch (error) {
        console.log(error);
    }
}

async function AdddetailsProperty(details, imagemImovel) {
    const titleProperty = document.querySelector(".title_property");
    const image_property = document.querySelector(".image_property");
    const description_property = document.querySelector(".description_property");
    const codigo_property = document.querySelector(".codigo_property");
    const address_property = document.querySelector(".address_property");
    const address_property2 = document.querySelector(".address_property2")
    const areaProperty = document.querySelector(".areaProperty")
    const map =  document.querySelector('#map')



    const title =  details.title.rendered;
    const address = details.acf.endereco;
    const description = details.content.rendered;
    const area = details.acf.area_construida + " m<sup>2</sup>"
    const vagas = details.acf.vagas
    const mapGoogle = `https://www.google.com.br/maps?q=${encodeURIComponent(address)}
  ,%20Brasil&output=embed`
    
    let imagem = "";

    if (imagemImovel) {
        imagem = imagemImovel.map((obj) => obj.guid.rendered);
    }

    titleProperty.innerHTML = title;
    address_property.innerHTML = address;
    description_property.innerHTML = description; 
    image_property.setAttribute('src', `${imagem}`);
    codigo_property.innerHTML = `Código do imóvel: ${codValue}`;
    address_property2.innerHTML = address
    areaProperty.innerHTML = `${area} | ${vagas == 0 || vagas == 1 ? `${vagas} Vaga` : `${vagas} Vagas`}`;
    map.setAttribute('src',`${mapGoogle}`)


}