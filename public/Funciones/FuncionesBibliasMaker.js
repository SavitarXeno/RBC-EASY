  
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
  
  
  
let actionStore = JSON.parse(localStorage.getItem("actionStore")) || [];
let editingIndex = null;

const actionContainer = document.getElementById("actionContainer");
const actionList = document.getElementById("actionList");
const editorModal = document.getElementById("editorModal");

const editorName = document.getElementById("editorName");
const editorContent = document.getElementById("editorContent");

const textoOriginal = document.getElementById("texto");

/* ------------------ UTILIDADES ------------------ */

document.addEventListener("DOMContentLoaded", () => {
  const openActionBtn = document.getElementById("openActionBtn");
  const actionContainer = document.getElementById("actionContainer");

  if (!openActionBtn || !actionContainer) {
    console.error("❌ Botón o actionContainer no encontrados");
    return;
  }

  openActionBtn.addEventListener("click", () => {
    actionContainer.style.display = "block";

    // Animación neón limpia
    actionContainer.classList.remove("neon-scale");
    void actionContainer.offsetWidth;
    actionContainer.classList.add("neon-scale");
  });
});


function saveStore() {
  localStorage.setItem("actionStore", JSON.stringify(actionStore));
}

function openEditor(name = "", content = "", index = null) {
  editorName.value = name;
  editorContent.value = content;
  editingIndex = index;
  editorModal.classList.remove("hidden");
}

function closeEditor() {
  editorModal.classList.add("hidden");
  editingIndex = null;
}

/* ------------------ LISTA ------------------ */

function updateActionList() {
  actionList.innerHTML = "";

  actionStore.forEach((action, index) => {
    const item = document.createElement("div");
    item.className = "action-item";

    const name = document.createElement("span");
    name.textContent = action.name;
    name.className = "action-name";
    name.onclick = () => {
    insertActionAtCursor(action.content);
    actionContainer.style.display = "none";
};


    const edit = document.createElement("span");
    edit.textContent = "✏️";
    edit.onclick = (e) => {
      e.stopPropagation();
      openEditor(action.name, action.content, index);
    };

    const del = document.createElement("span");
    del.textContent = "❌";
    del.onclick = (e) => {
      e.stopPropagation();
      if (confirm("⚠️ ¿Seguro que deseas borrar este marco? No se puede recuperar.")) {
        actionStore.splice(index, 1);
        saveStore();
        updateActionList();
      }
    };

    item.append(name, edit, del);
    actionList.appendChild(item);
  });
}

/* ------------------ BOTONES ------------------ */

document.getElementById("pasteClipboardBtn").onclick = async () => {
  const text = await navigator.clipboard.readText();
  openEditor("", text);
};

document.getElementById("uploadTxtBtn").onclick = () => {
  document.getElementById("uploadActionFile").click();
};

document.getElementById("uploadActionFile").onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => openEditor(file.name.replace(".txt", ""), reader.result);
  reader.readAsText(file);
};

document.getElementById("saveEditor").onclick = () => {
  const name = editorName.value.trim();
  const content = editorContent.value;

  if (!name || !content) return alert("Nombre y contenido requeridos");

  if (editingIndex !== null) {
    if (!confirm("¿Guardar cambios en este marco?")) return;
    actionStore[editingIndex] = { name, content };
  } else {
    actionStore.push({ name, content });
  }

  saveStore();
  updateActionList();
  closeEditor();
};

document.getElementById("cancelEditor").onclick = closeEditor;
document.getElementById("closeAction").onclick = () => actionContainer.style.display = "none";

/* INIT */
updateActionList();
  
  function insertActionAtCursor(content) {
  const textarea = document.getElementById("texto");
  textarea.focus();

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  const before = textarea.value.substring(0, start);
  const after = textarea.value.substring(end);

  textarea.value = before + content + after;

  // Colocar cursor justo después del texto insertado
  const cursorPos = start + content.length;
  textarea.setSelectionRange(cursorPos, cursorPos);
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
  
let previewContent = applyPrefixes(text);

/* ============================
   RENDERIZAR FIGURAS
============================ */

figureStore.forEach(fig => {

  let sizeStyle = "";

  if (fig.orientation === "horizontal")
    sizeStyle = "width:600px; height:340px;";

  if (fig.orientation === "vertical")
    sizeStyle = "width:340px; height:600px;";

  if (fig.orientation === "square")
    sizeStyle = "width:450px; height:450px;";

  let mediaHTML = "";

  if (fig.isVideo) {
    mediaHTML = `
      <div class="preview-figure">
        <video controls style="${sizeStyle} object-fit:cover; border-radius:12px;">
          <source src="${fig.src}">
        </video>
      </div>
    `;
  } else {
    mediaHTML = `
      <div class="preview-figure">
        <img src="${fig.src}" style="${sizeStyle} object-fit:cover; border-radius:12px;">
      </div>
    `;
  }

  previewContent = previewContent.replace(fig.tag, mediaHTML);

});

// Código ``
previewContent = previewContent.replace(/`([^`]+)`/g,
  `<span class="wa-code">$1</span>`);

// Tachado ~~
previewContent = previewContent.replace(/~([^~]+)~/g,
  `<span class="wa-strike">$1</span>`);

// Negrita *
previewContent = previewContent.replace(/\*([^*]+)\*/g,
  `<b>$1</b>`);

// Cursiva _
previewContent = previewContent.replace(/_([^_]+)_/g,
  `<i>$1</i>`);

// Citas >
previewContent = previewContent.replace(/^> (.*)$/gm,
  `<div class="wa-quote">$1</div>`);

// Lista numerada
previewContent = previewContent.replace(/^\d+\.\s(.*)$/gm,
  `<div class="wa-numbered">$&</div>`);

// Lista con -
previewContent = previewContent.replace(/^- (.*)$/gm,
  `<div class="wa-bullet">$1</div>`);

// Lista con *
previewContent = previewContent.replace(/^\* (.*)$/gm,
  `<div class="wa-bullet">$1</div>`);


// Reemplazar figuras por imágenes
figureStore.forEach(fig => {
  let sizeStyle = "";

  if (fig.orientation === "horizontal") {
    sizeStyle = "width:600px; height:340px;";
  }

  if (fig.orientation === "vertical") {
    sizeStyle = "width:340px; height:600px;";
  }

  if (fig.orientation === "square") {
    sizeStyle = "width:450px; height:450px;";
  }

  const imgHTML = `
    <div class="preview-figure">
      <img src="${fig.src}" style="${sizeStyle} object-fit:cover; border-radius:12px;">
    </div>
  `;

  previewContent = previewContent.replace(fig.tag, imgHTML);
});

  
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
          const formattedText = `Without altering the meaning, structure, punctuation, grammar, style, or word choice of the text in any way, act exclusively as a precise Spanish orthography corrector following the strict rules of the Real Academia Española (RAE).

Your sole task is to correct only genuine spelling errors (such as missing or misplaced accents, incorrect use of letters like b/v, g/j, h omission or addition, ll/y, s/z/c, improper capitalization of proper nouns or sentence beginnings, or clear typographical mistakes like repeated or omitted letters).

Do not make any other changes whatsoever—no synonym replacements, no grammatical fixes, no punctuation adjustments, no rephrasing, no additions, and no deletions.

Before correcting, carefully read the entire text to fully understand its content and context. If you encounter uncommon, technical, specialized, or potentially misspelled words that you are unsure about, you must verify their correct spelling by consulting authoritative Spanish sources (such as the RAE dictionary, Fundéu, or other recognized references).

Only apply corrections when the spelling is objectively incorrect according to standard Spanish orthography.

Finally, return the complete text with only the necessary spelling corrections applied, preserving every other aspect exactly as in the original.

Text to correct:\n\n${text}`;
          navigator.clipboard.writeText(formattedText).then(() => {
            window.open('https://chatgpt.com', '_blank');
            hideOptions();
          });
        } else {
          hideOptions();
        }
      }
  
      function openCalculator() {
    window.location.href = 'Calculadora_Científica.html';
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

      function insertImageIntoTextarea(file) {
  const reader = new FileReader();

  reader.onload = function () {
    const img = new Image();
    img.onload = function () {

      let orientation = "square";

      if (img.width > img.height) orientation = "horizontal";
      if (img.height > img.width) orientation = "vertical";

      const figureTag = `[Figura ${figureCounter}.0]`;

      figureStore.push({
        id: figureCounter,
        tag: figureTag,
        src: reader.result,
        orientation: orientation
      });

      saveFigures();

      const textarea = document.getElementById("texto");
      textarea.value += "\n" + figureTag + "\n";

      figureCounter++;
    };

    img.src = reader.result;
  };

  reader.readAsDataURL(file);
}