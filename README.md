# Tindev
Este projeto tem como objetivo demostrar que com apenas uma linguagem de programação é possível criar uma aplicação para backend, frontend e mobile utilizando javascript. As tecnologias utilizadas foram nodejs, reactjs e react-native.
O aplicativo foi desenvolvindo tentando ser similar ao Tinder, mas com a diferença que não é um aplicativo de encontros, e sim para o desenvolvedores possivelmente se conheceram para desenvolveram juntos.
## Tecnologias
1. [Backend](#backend)
2. [Frontend](#frontend)
3. [Mobile](#mobile)

### Instalação das dependências
Para realizar a instalação das dependências de qualquer uma das aplicações digite o seguite comando.

```yarn```

## Backend
### Configuração
Para que o backend funcione, é necessário que ele esteja conectado a um banco de dados, para isso crie um arquivo dentro pasta backend com o nome `.env`. Dentro do arquivo adicione as seguintes linhas:
```
MONGO=<Link do seu banco de dados mongo>
```

### Execução
```
yarn dev
```

## Frontend
### Screenshot
![](https://i.imgur.com/KiQQQTK.png)
![](https://i.imgur.com/fmo9mdX.png)

### Execução
```
yarn start
```
## Mobile
### Screenshot
<img src="https://i.imgur.com/0dJh0v2.png" width="300"/>

### Configuração
Para conseguir executar o aplicativo, é necessário instalação o [sdkmanager](https://developer.android.com/studio#command-tools). Para isso é possível seguir o tutorial da [rocketseat](https://docs.rocketseat.dev/ambiente-react-native/android/windows#configurando-sdk-do-android-no-windows)

###### Caso você encontre algum problema na execução do último comando, o comando abaixo pode resolver
```
sdkmanager --sdk_root=%ANDROID_HOME% "platform-tools" "platforms;android-27" "build-tools;27.0.3"
```
### Execução
Android
```
yarn react-native run-android
```

IOS
```
yarn react-native run-ios
```

## Requisitos
- yarn => 1.22.0
- node 12.16.1
- sdkmanager

## Tecnologias utilizadas
- HTML
- CSS
- Javascript
- Nodejs
- Reactjs
- React-native