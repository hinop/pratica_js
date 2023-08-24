document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]; // Obtenemos el primer archivo seleccionado
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = e.target.result; // Asignamos el resultado al atributo src de la imagen
      }
  
      reader.readAsDataURL(file); // Leemos el archivo como URL de datos
    }
  });