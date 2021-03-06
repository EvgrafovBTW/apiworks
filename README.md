# apiworks
Тренировочный проект для связи с сервером. Необходим для того чтобы научиться принимать и взовращать данные с серивера в мбольное приложение.
## Что необходимо для работы
- Node.js + React Native 
- Expo CLI
- подключение телефона к компьютеру (по LAN, локально через USB провод, или с помощью туннелирования)
- Серверное приложение
## Запуск и руководство пользователя
- Необходимо войти через коносль в папку с приложением и запустить Metro Bundler с помощью команды **expo start**
![image](screenshots/expostart.PNG)
- следом в браузере по умолчанию откроется Metro Bundler, с помощью которого можно курировать деятельность приложения. А именно запустить его на андроиде нажатием по кнопке **Run on Android device/emulator** (*в моём случае с использованием local подключения*)
![image](screenshots/bundler.jpg)
![image](screenshots/consoleStart.PNG)
- Далее приложение автоматически откроется на вашем устрйостве
![image](screenshots/mainScreen.jpg)
- Функционал заключается в регистрации и входе, для проверки создадим аккаунт с логином *Тест* и паролем *тест*
![image](screenshots/loginInput.jpg)
- Пройдём регистрацию и сразу же проверим в СУБД
![image](screenshots/registration.jpg)
![image](screenshots/subd.PNG)
- Пройдём авторизацию и получим *acces token* в качестве подтвержедния того что вход выполнен
![image](screenshots/signin.jpg)
![image](screenshots/token.jpg)
