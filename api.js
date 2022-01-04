import react from "react";
import {AsyncStorage} from '@react-native-async-storage/async-storage'


async function fetchCheck(){
  let url = 'http://90.189.110.72:8080/api/visibility';
  let response = await fetch(url);
  
  if (response.ok) {
    let json = await response.json();
    alert(json + "tut json")
  }
  else{
    alert("ошибка " + response.status);
  }
}

async function registration(){
  let regUrl = `http://90.189.110.72:8080/api/auth/register?name=${login}&password=${password}`
  let regResponse = await fetch(regUrl, {method: 'POST'})

  if (regResponse.ok){
    alert("регистрация прошла успешно");

  }
  else{
    alert("беда");
  }
}

async function signIn(){
  let signUrl = `http://90.189.110.72:8080/api/auth/login?username=${login}&password=${password}`
  let signResponse = await fetch(signUrl, {method: 'POST'});

  let signJson = await signResponse.json();  
  console.log(signJson.access_token);

  if (signResponse.ok){
    alert("вход в систему прошёл успешно");
    
  }
  else{
    alert("беда");
  }
}



export {fetchCheck, registration, signIn};