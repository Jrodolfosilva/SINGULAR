
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
    
   try{

    const imovel = await fetch(`https://spendstore.shop/wp-json/wp/v2/imovel/${codigo}`)
    const details = await  imovel.json()
    AdddetailsProperty(details)
   }
   catch(error){
    console.log(error)
   }


}


async function AdddetailsProperty(details){

const title =  details.title;
const address =  details.endereco;
const description = details.descricao;
const codigo = codValue;



}

