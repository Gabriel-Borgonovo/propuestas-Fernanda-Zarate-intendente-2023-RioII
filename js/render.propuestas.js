const d = document;

const pintarPropuestas = (data) => {
    const $template = d.getElementById("template-propuestas").content,
        $fragment = d.createDocumentFragment(),
        $contienePropuestas = d.getElementById("propuestas")
        
    //console.log('data', data.title);
    const $propuestasTitle = d.createElement('h2');
    $propuestasTitle.innerHTML = data.title;
    $propuestasTitle.classList.add("prop-h2");
    $fragment.appendChild($propuestasTitle);

    const $img = d.createElement('img');
    $img.setAttribute("src", data.img);
    $img.classList.add("img-propuestas");
    $fragment.appendChild($img);

    data.propuestas.forEach(elemento => {
        $template.querySelector(".prop-p").textContent = elemento;
       
        const clone = $template.cloneNode(true);
        $fragment.appendChild(clone);
    });

    $contienePropuestas.appendChild($fragment);
}





export default async function renderPropuestas(path) {
    try {
        const response = await fetch(path);
        const data = await response.json();

        //console.log('dataaa', data.img)
        
        pintarPropuestas(data);
        
    } catch (error) {
        console.log(error);
    }
    
}

