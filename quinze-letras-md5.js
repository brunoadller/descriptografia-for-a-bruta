import crypto from 'crypto'
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const  targetHash = 'e3928a3bc4be46516aa33a79bbdfdb08'


const hashMD5 = (data) => {
    return crypto.createHash('md5').update(data).digest('hex')
}

const encontrarHash = () => {
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            for (let k = 0; k < alphabet.length; k++) {
                for (let l = 0; l < alphabet.length; l++) {
                    for (let m = 0; m < alphabet.length; m++) {
                     
                       
                            const stringToTry = `${alphabet[i]}${alphabet[j]}${alphabet[k]}${alphabet[l]}${alphabet[m]}`
                            const hash = hashMD5(stringToTry)
                            if(hash === targetHash){
                                console.log(`Achado! String ${stringToTry} - MD5: ${hash}`)
                                return
                             }
                        
                               
                     }
                }
            }
        }
     }
}
    
  
encontrarHash()

