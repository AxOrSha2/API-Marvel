
let publicKey = "f169576b66d164db60eebeb378255a70";
let privateKey = "2ae4e8af692a4d461b6f5d82857ba743a719e4d9";
let con = '1';

const marvel = {
    render: () => {
        //
        const apikey = 'f169576b66d164db60eebeb378255a70';
        const ts = '1';
        const hash = '68628cd3ec2eee40577d54ffd4b30e61';
        const foodURL = 'ts=' + ts + '&apikey=' + apikey + '&hash=' + hash;
        //
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?' + foodURL;
        console.log(urlAPI);
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';
        //
        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {
                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    contentHTML += `
                        <div class="col-md-4">
                            <a href="${urlHero}" target="_blank">
                                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                            </a>
                            <h3 class="tittle">${hero.name}</h3>
                        </div>`;
                }
                container.innerHTML = contentHTML;
            })
    }
};
//
marvel.render();
