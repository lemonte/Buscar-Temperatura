# Buscar-Temperatura
Aplicativo desenvolvido para buscar a temperatura local utilizando a plataforma react native.

# Aplicativo para buscar temperatura local

O aplicativo foi desevolvido utilziando a biblioteca do React Native, onde primeiramente eu busco a posição do usuario e em seguida de acordo com a api "http://api.openweathermap.org/data/2.5" eu realizo a consulta da temperatura do local onde está a pessoa.


# Baixando aplicação em sua máquina
    Basta clicar na opção Code


#### Copiar o link e baixar em sua maquina


#### Clicar na opção Download ZIP

# Para executar o aplicativo após ter realizado o Download
    Descompacte o arquivo zip gerado
    
    
## Adicione sua chave para ter acesso a api
    Para ter acesso a chave navegue na pagina 
    
    https://home.openweathermap.org/api_keys
    
    Caso não possua, faça cadastro e em seguida na parte inferior da pagina voce encontrara uma chave para teste
    Aguarde alguns minutos até que ela esteje disponivel
    Abra o arquivo Key.js
    Adicione sua chave no seguinte local 
    const key = "<sua_chave>"
    Obs: A chave costuma demorar um certo tempo até que seja liberada pelo sistema deles
    
    
    
## Execute o comando em ser terminal

## Executar comando utilizando o gerenciador do yarn ou npm

### Para instalar as dependências executer o comando 
    yarn install ou npm install

### Em seguida execute você irá executar o comando
    yarn run ou npm start

#### Com isso será aberto em seu navegador uma página onde você poderá testar o app

### Caso esteja com o emulador do android aberto
    Clique na opção 
    Run on Android device/emulator

#### Caso esteja com o emulador do ios aberto
    Clique na opção
    Run on IOS simulator

### Caso esteja utilizando seu dispositivo próprio

#### Caso seja no android
    Baixe o app EXPO disponível na GooglePlay
    Depois de instalado clique na opção Scan QR Code
    Aponte a camera do seu dispositivo para o qr code disponivel no site que foi aberto quando executou o comando yarn run
    Em seguida seu app será carregado no seu dispositivo
    OBS: (Caso aconteca algum erro de conexão basta mudar no site a opção CONNECTION --- de LAN -- para Tunnel)

#### Caso seja IOS 
    Basta abrir a câmera 
    Selecionar para o modo de leitura de QR code
    E o aplicativo irá começar a ser carregado em seu aparelho
    OBS: (Caso aconteca algum erro de conexão basta mudar no site a opção CONNECTION --- de LAN -- para Tunnel)
