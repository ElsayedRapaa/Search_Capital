// let input = document.getElementById('input'),
//     list = document.getElementById('list');

// function getCapital() {
//     fetch('./data/States.json')
//         .then(res => {
//             let data = res.json();
//             return data;
//         })
//         .then(data => {
//             let matche = data.filter(ele => {
//                 let regex = new RegExp(`^${input.value}`, 'gi');
//                 return ele.name.match(regex) || ele.abbr.match(regex);
//             });
//             if (input.value.length === 0) {
//                 matche = [];
//             };
//             getHtml(matche);
//         })
// };

// function getHtml(matche) {
//     if (matche.length > 0) {
//         let data = matche.map(ele => `
//             <div class="list-capital">
//                 <h4>${ele.name} (${ele.abbr}) <span class="color">${ele.capital}</span></h4>
//                 <small>Lat: ${ele.lat} / Long: ${ele.long}</small>
//             </div>
//         `).join('');
//         list.innerHTML = data;
//     } else {
//         list.innerHTML = '';
//     }
// }

// input.addEventListener('input', getCapital);


let input = document.getElementById('input'),
    list = document.getElementById('list');

window.onload = function() {
    input.focus();
}

function getCapital() {
    fetch('./data/States.json')
        .then(res => {
            let data = res.json();
            return data;
        })
        .then(data => {
            let matche = data.filter(ele => {
                let regex = new RegExp(`^${input.value}`, 'gi');
                return ele.name.match(regex) || ele.abbr.match(regex);
            });
            if (input.value.length === 0) {
                matche = [];
            };
            getHtml(matche);
        });
};

function getHtml(match) {
    let data = match.map(ele => `
        <div class="list-capital">
            <h4>${ele.name} (${ele.abbr}) <span>${ele.capital}</span></h4>
            <small>Lat: ${ele.lat} / Long: ${ele.long}</small>
        </div>
    `).join('');
    list.innerHTML = data;
    if (input.value.length === 0) {
        list.innerHTML = '';
    };
};

input.addEventListener('input', getCapital);