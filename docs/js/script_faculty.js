const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = 'id=1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Faculty';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const facultys = json.records;

  facultys.forEach(faculty => {
    const facultyDiv = document.createElement('div');
    const faclutyTitle = document.createElement("span");
    facultyTitle.className = 'faculty-title';
    facultyTitle.textContent = faculty['f-faculty-ja'];
    const facultyTitleEn = document.createElement("span");
    facultyTitleEn.className = 'faculty-title-en';
    facultyTitleEn.textContent = faculty['f-faculty-en'];
    facultyDiv.appendChild(facultyTitle);
    facultyDiv.appendChild(facultyTitleEn);
    document.getElementById('facultys').appendChild(facultyDiv);
  });
  document.getElementById('facultys').textContent = JSON.stringify(json, null, 2);
}

const getData = async () => {
  try {
      const response = await fetch(endpoint);
      if (response.ok) {
          const jsonResponse = await response.json();
          renderJson(jsonResponse);
      }
    }
    catch (error) {
        console.log(error);
    }
}

getData();