import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput,ScrollView,Image,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { Agendamento } from '../componentes/Agendamentos'

export default function HomeScreen() {
  const navigation = useNavigation()

  const [name, setName] = useState('')

  const handleAboutClick = () => {
    navigation.navigate('About')
    setEmail(emailField);
    setPassword(passwordField);
    if(emailField == '' && passwordField == ''){
      alert('E-mail e senha não informados ❌')
    }else if(emailField == ''){
      alert('E-mail não informado ❌')
    }else if(passwordField == ''){
      alert('Senha não informada ❌')
    }else{
      setLoginPage('false');
      setHomePage('true');
    }
    //navigation.navigate('About', {cor: name})
  }

  const [emailField, setEmailField] = useState('');
  const [email, setEmail] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [password, setPassword] = useState('');
  const [newPasswordField, setNewPasswordField] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loginPage, setLoginPage] = useState('true');
  const [homePage, setHomePage] = useState('false');
  const [passwordPage, setPasswordPage] = useState('false');
  const [registerPage, setRegisterPage] = useState('false');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');
  const [plano, setPlano] = useState('');
  const [ruaField, setRuaField] = useState('');
  const [bairroField, setBairroField] = useState('');
  const [telefoneField, setTelefoneField] = useState('');
  const [cpfField, setCpfField] = useState('');
  const [planoField, setPlanoField] = useState('');
  
const handleForgotButton = () => {
    setLoginPage('false');
    setPasswordPage('true');

}

  const handleNewPasswordButton = () => {
    setHomePage('false');
    setLoginPage('true');
    setPasswordPage('false');
    setRegisterPage('false');
    setPassword('');
    if(passwordField == passwordField) {
      alert('Senha Alterada com Sucesso ✔️')
      setNewPasswordField('')
      setPasswordField('')
    }

}

  const handleLoginButton = () => {
    setEmail(emailField);
    setPassword(passwordField);
    if(emailField == '' && passwordField == ''){
      alert('E-mail e senha não informados ❌')
    }else if(emailField == ''){
      alert('E-mail não informado ❌')
    }else if(passwordField == ''){
      alert('Senha não informada ❌')
    }else{
      setLoginPage('false');
      setHomePage('true');
    }
  };

  const handleBackButton = () => {
    setEmail('');
    setPassword('');
    setNewPassword('0')
    setLoginPage('true');
    setPasswordPage('false');
    setHomePage('false');
    setRegisterPage('false');
  }

  const handleRegisterButton = () => {
    setLoginPage('false');
    setRegisterPage('true');
  }

  const handleCadrastreButton = () => {
    setHomePage('false');
    setLoginPage('true');
    setPasswordPage('false');
    setRegisterPage('false');
    alert('Conta criada com sucesso!✔️');
    setEmail('');
    setPassword('');

  }

  return (
    <ScrollView style={styles.scrollview}>
      {loginPage == 'true' && 
        <>
        
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../icons8-nike-50.png')}/>
          <Text style={styles.h1}>UpNike Malle</Text>
          <Text style={styles.h2}>Bem vindo(a) ao site oficial da nossa loja!</Text>
          <Text style={styles.h2}>Digite seus dados abaixo.</Text>
          
          <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.inputField} placeholder='Digite seu email'
            placeholderTextColor= '#d1d1d1'
            value = {emailField}
            onChangeText= {t => setEmailField(t)}
            autoCapitalize= 'none'
            keyboardType='email-address'/>
          </View>

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Senha</Text>
            <TextInput style={styles.inputField} placeholder='**********' 
            placeholderTextColor= '#d1d1d1'
            value= {passwordField}
            onChangeText= {t => setPasswordField(t)}
            autoCapitalize= 'none' secureTextEntry/>
          </View>

          <View style={styles.aditionals}>
            <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgotButton}>
              <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
         
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleAboutClick}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.signUpArea}>
            <Text style={styles.signUpText}>Não tem conta?</Text>
            <TouchableOpacity onPress={handleRegisterButton}>
              <Text >Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footerArea}>
            <Text style={styles.footerText}></Text>
          </View>
        </View>

      </>
      
        }
        {passwordPage == 'true' && 
        <>
            <ScrollView>
              <View style={styles.container}>
              <TouchableOpacity onPress={handleBackButton}>
                <Image
                  style={styles.back}
                  source={require('../snack-icon.png')}
                />
                
              </TouchableOpacity>
               <Image style={styles.logo} source={require('../icons8-secure-48.png')}/>
               <Text style={styles.h1}>Renovação de Senha</Text>
                <Text style={styles.h2}>Estamos aqui para te ajudar!</Text>
            
          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Digite uma nova senha</Text>
            <TextInput style={styles.inputField} placeholder='**********' 
            placeholderTextColor= '#d1d1d1'
            value= {passwordField}
            onChangeText= {t => setPasswordField(t)}
            autoCapitalize= 'none' secureTextEntry/>
          </View>

           <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Confirme sua Senha</Text>
            <TextInput style={styles.inputField} placeholder='**********' 
            placeholderTextColor= '#d1d1d1'
            value= {newPasswordField}
            onChangeText= {t => setNewPasswordField(t)}
            autoCapitalize= 'none' secureTextEntry/>
          </View>
          
          <TouchableOpacity style={styles.buttonsenha} onPress={handleNewPasswordButton}>
            <Text style={styles.buttonText}>Confirmar nova senha</Text>
          </TouchableOpacity>
         
              </View>
            </ScrollView>
          </>
          
        } 
        {registerPage == 'true' && 
          <>
        <View style={styles.inputArea}>
        <TouchableOpacity onPress={handleBackButton}>
                <Image
                  style={styles.back}
                  source={require('../snack-icon.png')}
                />
              </TouchableOpacity>
          <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.inputField} placeholder='Digite seu email'
            placeholderTextColor= '#d1d1d1'
            value = {emailField}
            onChangeText= {t => setEmailField(t)}
            autoCapitalize= 'none'
            keyboardType='email-address'/>
          </View>
        
        <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Digite uma Senha</Text>
            <TextInput style={styles.inputField} placeholder='**********' 
            placeholderTextColor= '#d1d1d1'
            value= {passwordField}
            onChangeText= {t => setPasswordField(t)}
            autoCapitalize= 'none' secureTextEntry/>
          </View>

          
          <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Rua</Text>
            <TextInput style={styles.inputField} placeholder='Digite o nome da sua Rua'
            placeholderTextColor= '#d1d1d1'
            value = {ruaField}
            onChangeText= {t => setRuaField(t)}
            autoCapitalize= 'none'
            keyboardType='email-address'/>
          </View>

          <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Bairro</Text>
            <TextInput style={styles.inputField} placeholder='Digite o nome do seu Bairro'
            placeholderTextColor= '#d1d1d1'
            value = {bairroField}
            onChangeText= {t => setBairroField(t)}
            autoCapitalize= 'none'
            keyboardType='email-address'/>
          </View>

          <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Telefone</Text>
            <TextInput style={styles.inputField} placeholder='Digite seu número de Telefone'
            placeholderTextColor= '#d1d1d1'
            value = {telefoneField}
            onChangeText= {t => setTelefoneField(t)}
            autoCapitalize= 'none'
            keyboardType='email-address'/>
          </View>
          
         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>CPF</Text>
            <TextInput style={styles.inputField} placeholder='Digite seu CPF'
            placeholderTextColor= '#d1d1d1'
            value = {cpfField}
            onChangeText= {t => setCpfField(t)}
            autoCapitalize= 'none'
            keyboardType='email-address'/>
          </View>

          <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Possui nosso Plano Odontológico?</Text>
            <TextInput style={styles.inputField} placeholder='Sim ou Não'
            placeholderTextColor= '#d1d1d1'
            value = {planoField}
            onChangeText= {t => setPlanoField(t)}
            autoCapitalize= 'none'
            keyboardType='email-address'/>
          </View>

          <TouchableOpacity style={styles.buttonsenha} onPress={handleCadrastreButton}>
            <Text style={styles.buttonText}>Confirmar nova senha</Text>
          </TouchableOpacity>
          </>  
        }
  </ScrollView>
  )
}