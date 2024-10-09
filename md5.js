import crypto from 'crypto'
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const targetHash = '5d41402abc4b2a76b9719d911017c592';


const hashMD5 = (data) => {
    return crypto.createHash('md5').update(data).digest('hex')
}


//força bruta para combinações de duas letras
/*
for(let i = 0; i < alphabet.length; i++){
    const letter1 = alphabet[i]


    //primeiro nível de combinação
    const hash1 = hashMD5(letter1)
    console.log(`String: ${letter1} - MD5: ${hash1}`)
    for(let j = 0; j < alphabet.length; j++){
        const letter2 = alphabet[j]
        const stringToTry = letter1 + letter2
        const hash2 = hashMD5(stringToTry)

        if(hash2 === targetHash){
            console.log(`Achado! String: ${stringToTry} - MD5: ${hash2}`)
            process.exit(0)
        }else{
            console.log(`String: ${stringToTry} - MD5: ${hash2}`);
        }
    }
}
    */

//força bruta para combinações de 5 letras

const encontrarHash = () => {
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            for (let k = 0; k < alphabet.length; k++) {
                for (let l = 0; l < alphabet.length; l++) {
                    for (let m = 0; m < alphabet.length; m++) {
                        const stringToTry = `${alphabet[i]}${alphabet[j]}${alphabet[k]}${alphabet[l]}${alphabet[m]}`;
                        const hash = hashMD5(stringToTry);
                        
                        if (hash === targetHash) {
                            console.log(`Achado! String: ${stringToTry} - MD5: ${hash}`);
                            return; // Encerra a função quando encontrado
                        }
                    }
                }
            }
        }
    }
    console.log("Nenhuma correspondência encontrada.");
};
encontrarHash()


//força bruta para combinações de 15 letras e6be99673f8ddb8ce9310e40f7522261