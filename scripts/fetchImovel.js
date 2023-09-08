
const url = new URL(window.location.href);


const params = new URLSearchParams(url.search);

const codValue = params.get('cod');

// Verifique se o valor foi encontrado
if (codValue !== null) {
    details(codValue)
    console.log('Valor do parâmetro "cod":', codValue);
} else {
    console.log('O parâmetro "cod" não foi encontrado na URL.');
}



async function details(codigo){

    const imovel = await fetch(`https://spendstore.shop/wp-json/wp/v2/imovel/${codigo}`)
    .then((resp)=>resp.json())
    .catch((error)=>console.log(error));

console.log(imovel)
    


}