(function () {
   
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
    
    
    // Crear referencias
    const dbRefObject = firebase.database().ref().child('objeto');
    const dbRefLista = firebase.database().ref().child('habilidades')
    
    // Sincronizar cambios en objeto
    dbRefObject.on('value', snap => {
        document.getElementById("objeto").innerText = JSON.stringify(snap.val(),null,3);
    }); // al cambiar el valor se actualuiza
    
    dbRefLista.on('child_added', snap => {
       
        const li = document.createElement('li');
        li.innerText = snap.val();
        li.id= snap.key;                // Asociamos cada elemento de lista con su ID
        document.getElementById("lista").appendChild(li);
        
        
    }); // al añadir un hijo se actualiza, SOLO AL AÑADIR EL HIJO
    
     dbRefLista.on('child_changed', snap => { 
         
         const liChanged = document.getElementById(snap.key);
         liChanged.innerText = snap.val();
     
     });
    
    dbRefLista.on('child_removed', snap => { 
         
         const liRemove = document.getElementById(snap.key);
         liRemove.remove();
     
     });
    
    
}());

