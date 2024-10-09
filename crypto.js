import crypto from 'crypto';
const DADOS_CRIPTOGRAFAR = {
    algoritmo: 'aes256',
    codificacao: 'utf8',
    segredo: 'chaves',
    tipo: 'hex'
}
const algoritmo = DADOS_CRIPTOGRAFAR.algoritmo; // Ex: 'aes-256-cbc'
const segredo = crypto.scryptSync(DADOS_CRIPTOGRAFAR.segredo, 'salt', 32); // Gere uma chave a partir da senha
const iv = crypto.randomBytes(16); // Gerar um vetor de inicialização

const criptografar = (senha) => {
    const cipher = crypto.createCipheriv(algoritmo, segredo, iv);
    let resultado = cipher.update(senha, 'utf8', 'hex');
    resultado += cipher.final('hex');
    
    return resultado; // Retorna o texto criptografado
};

const senha = "12345";
const senhaCriptografada = criptografar(senha);
console.log("Senha criptografada: "+senhaCriptografada);

const descriptografar = (senha) => {
    const decipher = crypto.createDecipheriv(algoritmo, segredo, iv)
    let resultado = decipher.update(senha, 'hex', 'utf8')
    resultado += decipher.final('utf8')
    return resultado

}

const senhaDescriptografada = descriptografar(senhaCriptografada)
console.log('Senha descriptografada: '+ senhaDescriptografada)