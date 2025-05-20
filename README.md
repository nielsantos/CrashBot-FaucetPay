
# CrashBot-FaucetPay

Um bot automatizado para interagir com o game **_Crash_** na plataforma [FaucetPay](https://faucetpay.io/crash), facilitando o envio de ordens de aposta de forma automatizada com base em padrões configurados previamente pelo utilizador.

  <br>
  
## 🚀 Funcionalidades

- **Automação de Apostas**: Envia ordens de apostas automaticamente para a plataforma.
- **Integração com FaucetPay**: Utiliza a API oficial da FaucetPay para obter dados precisos.
- **Configuração Personalizável**: Permite ajustar parâmetros como valor, moeda e destinatário.

  <br>
  
## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina.
- Conta ativa na [FaucetPay](https://faucetpay.io/).
- Chave de API válida da FaucetPay.

  <br>
  
## 🛠️ Tecnologias utilizadas

[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)

  <br>
  
## 📦 Instalação

1. Clone o repositório:

   ```
   git clone https://github.com/nielsantos/CrashBot-FaucetPay.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd CrashBot-FaucetPay
   ```

3. Instale as dependências:

   ```
   npm install
   ```

  <br>
  
## 🔧 Configuração

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
API_KEY=SuaChaveDeAPI
CURRENCY=BTC
AMOUNT=0.0001
TO=EndereçoDeDestino
```

- `API_KEY`: Sua chave de API da FaucetPay.
- `CURRENCY`: Moeda a ser utilizada (ex: BTC, ETH).
- `AMOUNT`: Quantia a ser enviada.
- `TO`: Endereço de carteira do destinatário.

  <br>
  
## ▶️ Uso

Execute o bot com o seguinte comando:

```
node index.js
```

O bot processará o envio conforme as configurações definidas.

  <br>
  
## 🛠️ Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests para melhorias.

  <br>
  
## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

  <br>

---

Desenvolvido por [nielsantos](https://github.com/nielsantos)
