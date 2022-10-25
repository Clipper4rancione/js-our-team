
const container = document.querySelector('.row');

/*
**MILESTONE 0:**
Creare l’array di oggetti con le informazioni fornite.
*/

const members = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
];
/*
**MILESTONE 1:**
Stampare su console le informazioni di nome, ruolo e la stringa della foto
*/
for(let member of members){
    
    console.log(member);

    /*
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sotto forma di stringhe
    */

    /*container.innerHTML +=   `<div>Name: ${member.nome} Ruolo: ${member.ruolo String Img: ${member.img} </div>`;
    */

    /* 
    //**MILESTONE 3:**
    Stampare delle card formattate contenete immagini e testo
    */
    container.innerHTML += `
                <div class="col-4 tab">
                    <div id="mc-card">
                        <div class="img-box">
                            <img src="img/${member.img}" alt="${member.nome}">
                        </div>
                        <div class="text-box text-center p-3">
                            <h2 class="name">${member.nome}</h2>
                            <span class="role">${member.ruolo}</span>
                        </div>
                    </div>
                </div>

    `;




    
};
