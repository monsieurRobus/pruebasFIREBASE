 // Inicializar firebase
      var config = {
        apiKey: "AIzaSyAmhcdFVy0QKEBwngFAVF5jq7sKfV9CSjg",
        authDomain: "prueba-de-firebase-carlos.firebaseapp.com",
        databaseURL: "https://prueba-de-firebase-carlos.firebaseio.com",
        projectId: "prueba-de-firebase-carlos",
        storageBucket: "prueba-de-firebase-carlos.appspot.com",
        messagingSenderId: "596470674914"
      };
      firebase.initializeApp(config);
    
// Elementos de la vista

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');


// Evento Login

    btnLogin.addEventListener('click', e=> {
       
        //Obtener email y pass
        
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e=> console.log(e.message));
        
        
    });

// Evento crear usuario

 btnSignUp.addEventListener('click', e=> {
       
        //Obtener email y pass
        
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        
        // Sign in
        const promise = auth.createUserWithEmailAndPassword(email,pass);
        promise.catch(e=> console.log(e.message));
        
        
    });

// Estado del usuario comprobar en tiempo real


 btnLogout.addEventListener('click', e=> {
       
      firebase.auth().signOut();
        
        
    });

// Añadir listener de tiempo real

firebase.auth().onAuthStateChanged ( firebaseUser => {
   
    if(firebaseUser)
        {
            console.log(firebaseUser)
            btnLogout.classList.remove('hide');
        }
    else 
        {
            console.log('no logueado');
            btnLogout.classList.add('hide');
        }
    
});