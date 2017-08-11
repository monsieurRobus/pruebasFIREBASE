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
    
      
// Elementos uploader
      
      var uploader = document.getElementById('uploader');
      var fileButton = document.getElementById('fileButton');

    fileButton.addEventListener('change',function(e) {
       
        // Obtener el archivo
        var file = e.target.files[0];
        
        // Crear referencia de almacenamiento para firebase
        var storageRef = firebase.storage().ref('mis_fotos/'+ file.name);
        
        // Subir el archivio
        var task = storageRef.put(file);
        
        
        // Progreso
        task.on('state_changed', 
               
               function progress(snapshot){
            
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes ) *100;
            uploader.value = percentage;
            
        },
               
        // Error
                function error(err)
                {
            
        },
               
               
               
        // Completado
                
              function complete(){
            console.log('Subida correcta');
        });
        
    });