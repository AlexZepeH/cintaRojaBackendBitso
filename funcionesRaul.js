const axios = require('axios');

const URL = 'https://rest.coinapi.io/v1/exchangerate/BTC/MXN';

const URL2 = 'https://rest.coinapi.io/v1/exchangerate/ETH/MXN';


axios.get(URL, {
    headers: {
        "X-CoinAPI-Key": "4D2EE2C6-5497-42E8-A4E1-9D3A5B2A0F73"
    }
})
    .then((response) => {
        // response.data
        const userBTC = (btcUsario) => {
            let resultado = response.data.rate * (btcUsario)
            let fecha = new Date
            console.log(`Tu equivalente de BTC en MXN es ${resultado.toFixed(2)} a las ${fecha}`)
            
        }
        
        userBTC(1);



        // console.log(response.data.rate * 8);
    });

    axios.get(URL2, {
        headers: {
            "X-CoinAPI-Key": "4D2EE2C6-5497-42E8-A4E1-9D3A5B2A0F73"
        }
    })
        .then((response) => {
            // response.data
            const userETH = (ethUsario) => {
                let resultado = response.data.rate * (ethUsario)
                let fecha = new Date
                console.log(`Tu equivalente de ETH en MXN es ${resultado.toFixed(2)} a las ${fecha}`)
                
            }
            
            userETH(1);
    
    
    
            // console.log(response.data.rate * 8);
        });