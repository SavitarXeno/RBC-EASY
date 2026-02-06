let datosUsuario = {
    nombre: "",
    progreso: 0,
    historial: [],
    configuracion: {},
    archivos: []
  };
  
  function guardarDatos() {
    const blob = new Blob([JSON.stringify(datosUsuario, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "datos-usuario.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  
  function cargarDatos() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        try {
          datosUsuario = JSON.parse(reader.result);
          alert("✅ Datos cargados correctamente.");
          actualizarUI();
        } catch (e) {
          alert("❌ Archivo inválido o corrupto.");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }
  
  function actualizarUI() {
    // Aquí va tu lógica para refrescar visualmente la interfaz con los datos cargados
    console.log("Datos actualizados:", datosUsuario);
  }
  