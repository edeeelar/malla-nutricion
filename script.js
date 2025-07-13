const ramos = [
  // 1º Semestre
  { nombre: 'Razonamiento Lógico Matemático', id: 'ramo1', requisitos: [] },
  { nombre: 'Introducción a la Nutrición y Dietética', id: 'ramo2', requisitos: [] },
  { nombre: 'Bases de la Química', id: 'ramo3', requisitos: [] },
  { nombre: 'Psicología de la Salud', id: 'ramo4', requisitos: [] },
  { nombre: 'Taller Integrado en Ciencias', id: 'ramo5', requisitos: [] },
  { nombre: 'Taller de Competencias Comunicativas', id: 'ramo6', requisitos: [] },

  // 2º Semestre
  { nombre: 'Ciencias de los Alimentos', id: 'ramo7', requisitos: [] },
  { nombre: 'Biología Celular', id: 'ramo8', requisitos: [] },
  { nombre: 'Química de las Biomoléculas', id: 'ramo9', requisitos: ['ramo3'] },
  { nombre: 'Atención Básica de Urgencia', id: 'ramo10', requisitos: [] },
  { nombre: 'Inglés Básico I', id: 'ramo11', requisitos: [] },
  { nombre: 'Electivo Formación General I', id: 'ramo12', requisitos: [] },

  // 3º Semestre
  { nombre: 'Microbiología y Parasitología Alimentaria', id: 'ramo13', requisitos: ['ramo8'] },
  { nombre: 'Anatomofisiología General', id: 'ramo14', requisitos: [] },
  { nombre: 'Bioquímica Nutricional I', id: 'ramo15', requisitos: ['ramo9'] },
  { nombre: 'Salud y Sociedad', id: 'ramo16', requisitos: [] },
  { nombre: 'Inglés Básico II', id: 'ramo17', requisitos: ['ramo11'] },
  { nombre: 'Electivo Formación General II', id: 'ramo18', requisitos: [] },

  // 4º Semestre
  { nombre: 'Epidemiología y Estadística', id: 'ramo19', requisitos: [] },
  { nombre: 'Higiene e Inocuidad Alimentaria', id: 'ramo20', requisitos: ['ramo13'] },
  { nombre: 'Bioquímica Nutricional II', id: 'ramo21', requisitos: ['ramo15'] },
  { nombre: 'Fisiología Nutricional y del Comportamiento Alimentario', id: 'ramo22', requisitos: ['ramo14'] },
  { nombre: 'Antropología Alimentaria', id: 'ramo23', requisitos: [] },
  { nombre: 'Electivo Formación General III', id: 'ramo24', requisitos: [] },

  // 5º Semestre
  { nombre: 'Bioética', id: 'ramo25', requisitos: [] },
  { nombre: 'Bioquímica de los Alimentos y Bromatología', id: 'ramo26', requisitos: ['ramo21'] },
  { nombre: 'Técnicas Dietéticas y Planificación Alimentaria', id: 'ramo27', requisitos: ['ramo7'] },
  { nombre: 'Evaluación Nutricional I', id: 'ramo28', requisitos: ['ramo22'] },
  { nombre: 'Educación para la Salud', id: 'ramo29', requisitos: [] },
  { nombre: 'Persona y Sentido', id: 'ramo30', requisitos: [] },

  // 6º Semestre
  { nombre: 'Metodología de la Investigación', id: 'ramo31', requisitos: [] },
  { nombre: 'Gestión de Unidades de Producción Alimentaria I', id: 'ramo32', requisitos: [] },
  { nombre: 'Fisiopatología y Dietoterapia I', id: 'ramo34', requisitos: ['ramo28'] },
  { nombre: 'Evaluación Nutricional II', id: 'ramo35', requisitos: ['ramo28'] },
  { nombre: 'Electivo I', id: 'ramo36', requisitos: [] },

  // 7º Semestre
  { nombre: 'Seminario de Investigación I', id: 'ramo37', requisitos: ['ramo31'] },
  { nombre: 'Gestión de Unidades de Producción Alimentaria II', id: 'ramo38', requisitos: ['ramo32'] },
  { nombre: 'Fisiopatología y Dietoterapia II', id: 'ramo40', requisitos: ['ramo34'] },
  { nombre: 'Diseño de Proyectos de Intervención en Salud A+S', id: 'ramo41', requisitos: ['ramo29'] },
  { nombre: 'Electivo II', id: 'ramo42', requisitos: [] },

  // 8º Semestre
  { nombre: 'Seminario de Investigación II', id: 'ramo43', requisitos: ['ramo37'] },
  { nombre: 'Práctica de Gestión de Unidades de Producción Alimentaria', id: 'ramo44', requisitos: ['ramo38'] },
  { nombre: 'Fisiopatología y Dietoterapia III', id: 'ramo45', requisitos: ['ramo40'] },
  { nombre: 'Intervención Alimentaria Nutricional A+S', id: 'ramo46', requisitos: ['ramo41'] },
  { nombre: 'Electivo III', id: 'ramo47', requisitos: [] },

  // 9º Semestre
  { nombre: 'Internado Profesional Nutrición Clínica', id: 'ramo48', requisitos: ['ramo45'] },
  { nombre: 'Internado Profesional Nutrición Comunitaria Intraescolar A+S', id: 'ramo49', requisitos: ['ramo46'] },

  // 10º Semestre
  { nombre: 'Internado Profesional Gestión de Unidades de Producción Alimentaria', id: 'ramo50', requisitos: ['ramo44'] },
  { nombre: 'Internado Profesional Nutrición Comunitaria', id: 'ramo51', requisitos: ['ramo49'] }
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
  const totalSemestres = Math.ceil(ramos.length / 6);
  for (let i = 0; i < totalSemestres; i++) {
    const divSemestre = document.createElement('div');
    divSemestre.className = 'semestre';
    divSemestre.innerHTML = `<h2>Semestre ${i + 1}</h2>`;

    ramos.slice(i * 6, i * 6 + 6).forEach(ramo => {
      const divRamo = crearRamoHTML(ramo);
      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  }
  actualizarEstado();
}

window.onload = crearSemestres;
