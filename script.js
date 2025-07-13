const ramos = [
  // 1º Semestre
  { semestre: 1, nombre: 'Razonamiento Lógico Matemático', id: 'ramo1', requisitos: [] },
  { semestre: 1, nombre: 'Introducción a la Nutrición y Dietética', id: 'ramo2', requisitos: [] },
  { semestre: 1, nombre: 'Bases de la Química', id: 'ramo3', requisitos: [] },
  { semestre: 1, nombre: 'Psicología de la Salud', id: 'ramo4', requisitos: [] },
  { semestre: 1, nombre: 'Taller Integrado en Ciencias', id: 'ramo5', requisitos: [] },
  { semestre: 1, nombre: 'Taller de Competencias Comunicativas', id: 'ramo6', requisitos: [] },

  // 2º Semestre
  { semestre: 2, nombre: 'Ciencias de los Alimentos', id: 'ramo7', requisitos: [] },
  { semestre: 2, nombre: 'Biología Celular', id: 'ramo8', requisitos: [] },
  { semestre: 2, nombre: 'Química de las Biomoléculas', id: 'ramo9', requisitos: ['ramo3'] },
  { semestre: 2, nombre: 'Atención Básica de Urgencia', id: 'ramo10', requisitos: [] },
  { semestre: 2, nombre: 'Inglés Básico I', id: 'ramo11', requisitos: [] },
  { semestre: 2, nombre: 'Electivo Formación General I', id: 'ramo12', requisitos: [] },

  // 3º Semestre
  { semestre: 3, nombre: 'Microbiología y Parasitología Alimentaria', id: 'ramo13', requisitos: ['ramo8'] },
  { semestre: 3, nombre: 'Anatomofisiología General', id: 'ramo14', requisitos: [] },
  { semestre: 3, nombre: 'Bioquímica Nutricional I', id: 'ramo15', requisitos: ['ramo9'] },
  { semestre: 3, nombre: 'Salud y Sociedad', id: 'ramo16', requisitos: [] },
  { semestre: 3, nombre: 'Inglés Básico II', id: 'ramo17', requisitos: ['ramo11'] },
  { semestre: 3, nombre: 'Electivo Formación General II', id: 'ramo18', requisitos: [] },

  // 4º Semestre
  { semestre: 4, nombre: 'Epidemiología y Estadística', id: 'ramo19', requisitos: [] },
  { semestre: 4, nombre: 'Higiene e Inocuidad Alimentaria', id: 'ramo20', requisitos: ['ramo13'] },
  { semestre: 4, nombre: 'Bioquímica Nutricional II', id: 'ramo21', requisitos: ['ramo15'] },
  { semestre: 4, nombre: 'Fisiología Nutricional y del Comportamiento Alimentario', id: 'ramo22', requisitos: ['ramo14'] },
  { semestre: 4, nombre: 'Antropología Alimentaria', id: 'ramo23', requisitos: [] },
  { semestre: 4, nombre: 'Electivo Formación General III', id: 'ramo24', requisitos: [] },

  // 5º Semestre
  { semestre: 5, nombre: 'Bioética', id: 'ramo25', requisitos: [] },
  { semestre: 5, nombre: 'Bioquímica de los Alimentos y Bromatología', id: 'ramo26', requisitos: ['ramo21'] },
  { semestre: 5, nombre: 'Técnicas Dietéticas y Planificación Alimentaria', id: 'ramo27', requisitos: ['ramo7'] },
  { semestre: 5, nombre: 'Evaluación Nutricional I', id: 'ramo28', requisitos: ['ramo22'] },
  { semestre: 5, nombre: 'Educación para la Salud', id: 'ramo29', requisitos: [] },
  { semestre: 5, nombre: 'Persona y Sentido', id: 'ramo30', requisitos: [] },

  // 6º Semestre
  { semestre: 6, nombre: 'Metodología de la Investigación', id: 'ramo31', requisitos: [] },
  { semestre: 6, nombre: 'Gestión de Unidades de Producción Alimentaria I', id: 'ramo32', requisitos: [] },
  { semestre: 6, nombre: 'Fisiopatología y Dietoterapia I', id: 'ramo34', requisitos: ['ramo28'] },
  { semestre: 6, nombre: 'Evaluación Nutricional II', id: 'ramo35', requisitos: ['ramo28'] },
  { semestre: 6, nombre: 'Electivo I', id: 'ramo36', requisitos: [] },

  // 7º Semestre
  { semestre: 7, nombre: 'Seminario de Investigación I', id: 'ramo37', requisitos: ['ramo31'] },
  { semestre: 7, nombre: 'Gestión de Unidades de Producción Alimentaria II', id: 'ramo38', requisitos: ['ramo32'] },
  { semestre: 7, nombre: 'Fisiopatología y Dietoterapia II', id: 'ramo40', requisitos: ['ramo34'] },
  { semestre: 7, nombre: 'Diseño de Proyectos de Intervención en Salud A+S', id: 'ramo41', requisitos: ['ramo29'] },
  { semestre: 7, nombre: 'Electivo II', id: 'ramo42', requisitos: [] },

  // 8º Semestre
  { semestre: 8, nombre: 'Seminario de Investigación II', id: 'ramo43', requisitos: ['ramo37'] },
  { semestre: 8, nombre: 'Práctica de Gestión de Unidades de Producción Alimentaria', id: 'ramo44', requisitos: ['ramo38'] },
  { semestre: 8, nombre: 'Fisiopatología y Dietoterapia III', id: 'ramo45', requisitos: ['ramo40'] },
  { semestre: 8, nombre: 'Intervención Alimentaria Nutricional A+S', id: 'ramo46', requisitos: ['ramo41'] },
  { semestre: 8, nombre: 'Electivo III', id: 'ramo47', requisitos: [] },

  // 9º Semestre
  { semestre: 9, nombre: 'Internado Profesional Nutrición Clínica', id: 'ramo48', requisitos: ['ramo45'] },
  { semestre: 9, nombre: 'Internado Profesional Nutrición Comunitaria Intraescolar A+S', id: 'ramo49', requisitos: ['ramo46'] },

  // 10º Semestre
  { semestre: 10, nombre: 'Internado Profesional Gestión de Unidades de Producción Alimentaria', id: 'ramo50', requisitos: ['ramo44'] },
  { semestre: 10, nombre: 'Internado Profesional Nutrición Comunitaria', id: 'ramo51', requisitos: ['ramo49'] }
];

const estadoRamos = {};

function crearRamoHTML(ramo) {
  const div = document.createElement('div');
  div.className = 'ramo bloqueado';
  div.id = ramo.id;
  div.innerHTML = `<span>${ramo.nombre}</span>`;
  div.addEventListener('click', () => {
    if (div.classList.contains('bloqueado')) return;
    div.classList.toggle('aprobado');
    estadoRamos[ramo.id] = div.classList.contains('aprobado');
    actualizarEstado();
  });
  return div;
}

function actualizarEstado() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    const habilitado = ramo.requisitos.every(req => estadoRamos[req]);
    if (div.classList.contains('aprobado')) return;
    if (habilitado) {
      div.classList.remove('bloqueado');
    } else {
      div.classList.add('bloqueado');
    }
  });
}

function crearSemestres() {
  const contenedor = document.getElementById('semestres');
  const semestresUnicos = [...new Set(ramos.map(r => r.semestre))];
  semestresUnicos.forEach(n => {
    const divSemestre = document.createElement('div');
    divSemestre.className = 'semestre';
    divSemestre.innerHTML = `<h2>Semestre ${n}</h2>`;
    ramos.filter(r => r.semestre === n).forEach(ramo => {
      divSemestre.appendChild(crearRamoHTML(ramo));
    });
    contenedor.appendChild(divSemestre);
  });
  actualizarEstado();
}

window.onload = crearSemestres;
