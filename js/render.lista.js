const d = document

const pintarelementos = (data) => {
    const $template = d.getElementById("template-elementos").content,
        $fragment = d.createDocumentFragment(),
        $contieneLista = d.getElementById("lista");
        
    //console.log('data lista', data.title);
    const $listTitle = d.createElement('h2');
    $listTitle.innerHTML = data.title;
    $listTitle.classList.add('list-title')
    $fragment.appendChild($listTitle)

    data.data.forEach(elemento => {
        $template.querySelector("img").setAttribute('src', elemento.avatar);
       
        $template.querySelector("img").setAttribute('alt', elemento.fullName);
        $template.querySelector("img").setAttribute('title', elemento.fullName);
        $template.querySelector("h3").textContent = elemento.fullName;
        $template.querySelector(".ocupation").textContent = elemento.profession;
        

        const clone = $template.cloneNode(true);
        $fragment.appendChild(clone);
    });


    $contieneLista.appendChild($fragment);
}






export default async function renderList(path) {
    try {
        const response = await fetch(path);
        const data = await response.json();

        
        pintarelementos(data);
        
    } catch (error) {
        console.log(error);
    }
    
}

