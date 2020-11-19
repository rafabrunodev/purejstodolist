const data = {
    "list": [
        "Correr com o cachorro",
        "Comprar PS5",
        "Assistir as 200 temporadas de One Piece",
        "Ler Game of Thrones",
        "Pagar Boletos",
        "Zerar Assassins Creed Valhalla"
    ]
};

const getDefaultList = () => {
    return new Promise((resolve, reject) => {
        if(data){
            resolve(data.list);
        }else{
            reject('Sem Lista');
        }
    })
};

const service = {
    getDefaultList
};

export default service; 