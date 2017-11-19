require('es6-promise').polyfill()

export const getProducts = callback => 
    fetch('https://pwcfrontendtest.azurewebsites.net/getlist', {
        headers: {
            RequestVerificationToken: JSON.parse(localStorage.getItem('user')).token
        }
    })
    .then(response => response.json())
    .then(data => {
        callback(data)
      })

export const validateUser = (user, pwd) => 
    {
        let address = 'https://pwcfrontendtest.azurewebsites.net/login'
        let login = new URLSearchParams()
        login.set('username', user)
        login.set('psd', pwd)
        return fetch(address, {
            method: 'POST',
            body: login
        }).then(response => response.json())
    }
   