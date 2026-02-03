
  
      document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === 'z') {
          document.getElementById('undoButton').click();
        }
        if (event.ctrlKey && event.key === 'y') {
          document.getElementById('redoButton').click();
        }
      });
  
      document.getElementById('undoButton').addEventListener('click', function() {
        document.execCommand('undo');
      });
  
      document.getElementById('redoButton').addEventListener('click', function() {
        document.execCommand('redo');
      });
  
  let actionStore = JSON.parse(localStorage.getItem('actionStore')) || [];
  
  function showActionContainer() {
    document.getElementById('actionContainer').style.display = 'block';
    updateActionList();
  }
  
  function closeActionContainer() {
    document.getElementById('actionContainer').style.display = 'none';
  }
  
  function saveAction() {
    const fileInput = document.getElementById('uploadActionFile');
    const actionName = document.getElementById('actionName').value;
    let actionContent = '';
  
    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function(e) {
        actionContent = e.target.result;
        addAction(actionName, actionContent);
      };
      reader.readAsText(fileInput.files[0]);
    } else {
      actionContent = document.getElementById('texto').value;
      addAction(actionName, actionContent);
    }
  }
  
  function addAction(name, content) {
    const actionIndex = actionStore.findIndex(action => action.name === name);
  
    if (actionIndex !== -1) {
      actionStore[actionIndex].content = content;
    } else {
      actionStore.push({ name, content });
    }
  
    localStorage.setItem('actionStore', JSON.stringify(actionStore));
    updateActionList();
  }
  
  function updateActionList() {
    const actionList = document.getElementById('actionList');
    actionList.innerHTML = '';
  
    actionStore.forEach(action => {
      const div = document.createElement('div');
      div.className = 'action-item';
      div.innerHTML = `
        <span>${action.name}</span>
        <span class="edit-action" onclick="editAction('${action.name}')">✏️</span>
        <span class="delete-action" onclick="deleteAction('${action.name}')">❌</span>
      `;
      div.addEventListener('click', () => addActionToTextarea(action.content));
      actionList.appendChild(div);
    });
  }
  
  function editAction(name) {
    const action = actionStore.find(action => action.name === name);
    document.getElementById('actionName').value = action.name;
    document.getElementById('texto').value = action.content;
  }
  
  function deleteAction(name) {
    actionStore = actionStore.filter(action => action.name !== name);
    localStorage.setItem('actionStore', JSON.stringify(actionStore));
    updateActionList();
  }
  
  function addActionToTextarea(content) {
    document.getElementById('texto').value += content;
  }
  
  function pasteFromClipboard() {
    navigator.clipboard.readText().then(text => {
      document.getElementById('texto').value = text;
    }).catch(err => {
      alert('Error al pegar texto: ' + err);
    });
  }
  
  function ChangeTheme(color) {
    document.body.style.backgroundColor = color;
    document.querySelectorAll('.button').forEach(button => {
      button.style.backgroundColor = color;
    });
    document.querySelectorAll('.close-action').forEach(button => {
      button.style.backgroundColor = color;
    });
  }
  
  function togglePreview() {
    const previewContainer = document.getElementById('preview-container');
    const textArea = document.getElementById('texto');
    const text = textArea.value;
  
    function applyPrefixes(text) {
      const lines = text.split('\n');
      let output = '';
  
      lines.forEach(line => {
        let lineContent = line;
        let currentStyle = '';
  

        let processedLine = lineContent.toUpperCase();
  

        while (processedLine.match(/^\[([UBICS]+)\]/)) {
          const match = processedLine.match(/^\[([UBICS]+)\]/)[1];
          lineContent = lineContent.slice(match.length + 2);
          processedLine = processedLine.slice(match.length + 2);
  

          if (match.includes('U')) currentStyle += '<u>';
          if (match.includes('S')) currentStyle += '<s>';
          if (match.includes('C')) currentStyle += '<div style="text-align:center;">';
          if (match.includes('B')) currentStyle += '<b>';
          if (match.includes('I')) currentStyle += '<i>';
        }
  

        let endStyle = '';
        if (currentStyle.includes('<u>')) endStyle += '</u>';
        if (currentStyle.includes('<s>')) endStyle += '</s>';
        if (currentStyle.includes('<div')) endStyle += '</div>';
        if (currentStyle.includes('<b>')) endStyle += '</b>';
        if (currentStyle.includes('<i>')) endStyle += '</i>';
  

        output += `${currentStyle}${lineContent}${endStyle}<br/>`;
      });
  
      return output;
    }
  
    const previewContent = applyPrefixes(text);
  
    if (previewContainer.style.display === 'none' || previewContainer.style.display === '') {
      previewContainer.style.display = 'block';
      document.querySelector('.preview-content').innerHTML = previewContent;
    } else {
      previewContainer.style.display = 'none';
    }
  }
  
  
  
  function toggleButtons() {
    const botones = document.getElementById('botones');
    const toggleBtn = document.getElementById('toggleButtonsBtn');
    if (botones.style.display === 'none' || botones.style.display === '') {
      botones.style.display = 'block';
      toggleBtn.textContent = 'Ocultar opciones';
    } else {
      botones.style.display = 'none';
      toggleBtn.textContent = 'Opciones';
    }
  }
  
  
  function toggleFullscreen() {
    const textArea = document.getElementById('texto');
    const toggleBtn = document.getElementById('toggleFullscreenBtn');
    const botones = document.getElementById('botones');
  
    if (textArea.classList.toggle('fullscreen-textarea')) {
      toggleBtn.innerText = 'Salir de modo escritor';
      botones.classList.add('fullscreen-buttons');
    } else {
      toggleBtn.innerText = 'Modo escritor';
      botones.classList.remove('fullscreen-buttons');
    }
  }
  
      const textArea = document.getElementById('texto');
      const characterCounter = document.getElementById('contador');
      const contadorContainer = document.getElementById('contador-container');
      let askPrefixes = false;
      let mobileView = false;
  
      textArea.addEventListener('input', () => {
        const text = textArea.value;
        const characters = text.length;
        characterCounter.innerText = characters;
      });
  
      function goToProjects() {
        window.location.href = 'Mis_Proyectos.html';
      }
      
      function togglePrefixes() {
        askPrefixes = !askPrefixes;
        const btnText = askPrefixes ? 'Apagar prefijos' : 'Encender prefijos';
        document.getElementById('togglePrefixBtn').innerText = btnText;
      }
  
      textArea.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && askPrefixes) {
          event.preventDefault();
          showPrefixPopup();
        }
      });
  
      function showPrefixPopup() {
        const prefixPopupContainer = document.getElementById('prefix-popup-container');
        prefixPopupContainer.style.display = 'block';
        prefixPopupContainer.style.opacity = '1';
      }
  
      function hidePrefixPopup() {
        const prefixPopupContainer = document.getElementById('prefix-popup-container');
        prefixPopupContainer.style.opacity = '0';
        setTimeout(() => prefixPopupContainer.style.display = 'none', 300);
      }
  
      function applyPrefixes() {
        const prefixes = [];
        if (document.getElementById('bold-prefix').checked) prefixes.push('B');
        if (document.getElementById('center-prefix').checked) prefixes.push('C');
        if (document.getElementById('italic-prefix').checked) prefixes.push('I');
        if (document.getElementById('underline-prefix').checked) prefixes.push('U');
        if (document.getElementById('strikethrough-prefix').checked) prefixes.push('S');
        const prefixString = `[${prefixes.join('')}]`;
        textArea.value += `\n${prefixString}`;
        hidePrefixPopup();
      }
  
      function showOptions(type) {
        const optionsContainer = document.getElementById(`${type}-container`);
        optionsContainer.style.display = 'block';
        optionsContainer.style.opacity = '1';
      }
  
      function hideOptions() {
        const optionsContainers = document.querySelectorAll('.options-container');
        optionsContainers.forEach((container) => {
          container.style.opacity = '0';
          setTimeout(() => container.style.display = 'none', 300);
        });
      }
  
  
function changeTheme(newColor) {
  // Actualizar las variables CSS para el color del tema
  document.documentElement.style.setProperty('--theme-color', newColor);
  // Calcular el color de hover (oscurecer un 20%)
  const hoverColor = adjustColor(newColor, -20);
  document.documentElement.style.setProperty('--theme-hover-color', hoverColor);
  // Color con alpha para el focus
  const alphaColor = hexToRgba(newColor, 0.5);
  document.documentElement.style.setProperty('--theme-color-alpha', alphaColor);

  // Aplicar el color del tema a los elementos existentes
  document.body.style.color = newColor;
  document.querySelectorAll('.bubble').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.action-bar').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('textarea').forEach((elem) => {
    elem.style.borderColor = newColor;
  });
  document.querySelectorAll('.button').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.options-container button').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.close-preview').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.action-container button').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.bible-buttons').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('confirmation-bubble').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.close-action').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('#toggleButtonsBtn').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.fullscreen-buttons').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.popup-container button').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.prefix-popup-container button').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });

  // Elementos del CSS proporcionado
  document.querySelectorAll('.voice-button').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.voice-control-bar button').forEach((elem) => {
    elem.style.backgroundColor = newColor;
  });
  document.querySelectorAll('.voice-control-bar select').forEach((elem) => {
    elem.style.borderColor = newColor;
    elem.style.boxShadow = `0 0 5px ${hexToRgba(newColor, 0.4)}`;
  });
  document.querySelectorAll('.voice-control-bar select.no-voices').forEach((elem) => {
    elem.style.color = adjustColor(newColor, 20);
    elem.style.borderColor = adjustColor(newColor, 20);
  });
  document.querySelectorAll('.no-voices-message').forEach((elem) => {
    elem.style.color = adjustColor(newColor, 20);
    elem.style.borderColor = newColor;
    elem.style.boxShadow = `0 0 10px ${hexToRgba(newColor, 0.6)}`;
  });

  // La barra de progreso se actualiza mediante las variables CSS (--theme-color, --theme-hover-color, --theme-color-alpha)
  document.querySelectorAll('.progress-bar').forEach((elem) => {
    elem.style.backgroundColor = '#1a1a1a'; // Fondo base, el progreso usa variables CSS
  });

  // Ajustar color del texto según el fondo
  document.querySelectorAll('.close-preview, .popup-container button, #toggleButtonsBtn, .close-action, .button, .action-container button, .options-container button, .prefix-popup-container button, .voice-button, .voice-control-bar button').forEach((elem) => {
    if (newColor === '#00ff00' || newColor === '#ffff00' || newColor === '#00ffff' || newColor === '#ffffff') {
      elem.style.color = '#000000';
    } else {
      elem.style.color = '#ffffff';
    }
  });

  document.querySelectorAll('#contador, #title, #contador-container').forEach((elem) => {
    if (newColor === '#00ff00' || newColor === '#ffff00' || newColor === '#00ffff' || newColor === '#ffffff') {
      elem.style.color = '#000000';
    } else {
      elem.style.color = '#ffffff';
    }
  });

  // Ocultar el menú de temas con verificación
  const themesContainer = document.getElementById('themes-container');
  if (themesContainer) {
    themesContainer.style.display = 'none';
  } else {
    console.warn('El elemento con ID "themes-container" no se encontró en el DOM. Verifica el ID o la estructura del HTML.');
  }
}

// Función para calcular el color de hover
function adjustColor(hex, percent) {
  hex = hex.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + (num >> 16) * percent / 100));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + ((num >> 8) & 0x00FF) * percent / 100));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + (num & 0x0000FF) * percent / 100));
  return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
}

// Función para convertir hex a rgba
function hexToRgba(hex, alpha) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
  
      function showConfirmation(type) {
        const confirmationContainer = document.getElementById('confirmation-container');
        const confirmationBubble = confirmationContainer.querySelector('.confirmation-bubble');
        confirmationBubble.innerText = type === 'create-bibles' ? '¿Deseas crear biblias?' : '';
        confirmationContainer.style.display = 'block';
        confirmationContainer.style.opacity = '1';
      }
  
      function createBibles() {
        hideOptions();
        showBibleSelection();
      }
  
      function showBibleSelection() {
        const popupContainer = document.getElementById('bible-selection-container');
        const bibleButtons = document.getElementById('bible-buttons');
        bibleButtons.innerHTML = '';
  
        const text = textArea.value;
        const numBibles = Math.ceil(text.length / 2000);
  
        for (let i = 0; i < numBibles; i++) {
          const start = i * 2000;
          const end = Math.min(start + 2000, text.length);
          const button = document.createElement('button');
          button.innerText = `Biblia ${i + 1}`;
          button.onclick = () => copyBibleText(start, end);
          bibleButtons.appendChild(button);
        }
  
        popupContainer.style.display = 'block';
        popupContainer.style.opacity = '1';
      }
  
      function copyBibleText(start, end) {
        const text = textArea.value.slice(start, end);
        navigator.clipboard.writeText(text).then(() => {
          alert('Texto copiado al portapapeles');
        });
      }
  
      function hidePopup() {
        const popupContainer = document.getElementById('bible-selection-container');
        popupContainer.style.opacity = '0';
        setTimeout(() => popupContainer.style.display = 'none', 300);
      }
  
      function saveProgress() {
        const confirmSave = confirm('¿Quieres guardar el progreso?');
        if (confirmSave) {
          const text = textArea.value;
          const blob = new Blob([text], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'Turno on-rol.txt';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          hidePopup();
        } else {
          const confirmDelete = confirm('¿Estás seguro? Se borrará todo el texto escrito para limpiar el editor de texto de Biblias Maker.');
          if (confirmDelete) {
            textArea.value = '';
            hidePopup();
          }
        }
      }
  
      function copyText() {
        textArea.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
      }
  
      function cleanSpelling() {
        showOptions('clean-spelling');
      }
  
      function confirmCleanSpelling() {
        if (confirm('Serás redirigido a ChatGPT para la corrección ortográfica. El texto que has escrito se copiará automáticamente al portapapeles junto con las instrucciones para ChatGPT. Únicamente deberás pegar el texto en el chat de ChatGPT, para finalmente copiar su respuesta y pegarla en el editor de texto de Biblias Maker.')) {
          const text = textArea.value;
          const formattedText = `Corrige las faltas ortográficas de este texto:\n\n${text}`;
          navigator.clipboard.writeText(formattedText).then(() => {
            window.open('https://chatgpt.com', '_blank');
            hideOptions();
          });
        } else {
          hideOptions();
        }
      }
  
      function openCalculator() {
        window.open('Calculadora_Científica.html', '_blank');
      }
  
      function downloadText() {
        const text = textArea.value;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'texto.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }

      function showPrefixPopup() {
        const prefixPopupContainer = document.getElementById('prefix-popup-container');
        prefixPopupContainer.style.display = 'block';
        setTimeout(() => prefixPopupContainer.classList.add('active'), 10);
      }
      
      function hidePrefixPopup() {
        const prefixPopupContainer = document.getElementById('prefix-popup-container');
        prefixPopupContainer.classList.remove('active');
        setTimeout(() => prefixPopupContainer.style.display = 'none', 300);
      }
      
      