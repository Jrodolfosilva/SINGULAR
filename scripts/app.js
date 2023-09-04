

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




