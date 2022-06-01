var usuarios=localStorage.getItem("usuarios");
        usuarios=JSON.parse(usuarios);
        
        if(usuarios==null) usuarios=[];

        function alta(){
            var nombre = document.getElementById("nombre").value;
            var gender = document.getElementById("gender").value;
            var email = document.getElementById("email").value;
            var fechaNacimiento = document.getElementById("fechaNacimiento").value;

            var usuario = JSON.stringify(
                { nombre:nombre, 
                  gender:gender,  
                  email:email, 
                  fechaNacimiento:fechaNacimiento
                });
            
            usuarios.push(usuario);
             

            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            alert("Usuario añadido exitosamente");

            //borramos lo que previamente se habia capturado
            document.getElementById("nombre").value="";
            document.getElementById("gender").value="";
            document.getElementById("email").value="";
            document.getElementById("fechaNacimiento").value="";
        }



        function lista(){
            var aLength = usuarios.length;
            
            document.getElementById("UsuariosRegistrados").innerHTML="";
            document.getElementById("total").innerHTML="";
            
            var tabla="<tr><th>Titulo</th><th>Autor</th><th>Editorial</th><th>Anio</th></tr>";
            
            for(var i in usuarios){
                var usuario = JSON.parse(usuarios[i]);
                
                tabla += "<tr><td>"+usuario.nombre+"</td>";
                tabla += "<td>"+usuario.gender+"</td>";
                tabla += "<td>"+usuario.email+"</td>";
                tabla += "<td>"+usuario.fechaNacimiento+"</td>";
                tabla += "</tr>";
            }
            
            document.getElementById("UsuariosRegistrados").innerHTML=tabla;
            document.getElementById("total").innerHTML="Total de usuarios: "+aLength;
        }


window.onload = lista;