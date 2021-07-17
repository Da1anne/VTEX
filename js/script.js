const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Legal! Você se cadastrou com a gente!')
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    console.log(nome,email);
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');
    let carregando = `<p style=font-family:sans-serif; >Carregando...</p>
        <img style=height:100px; width:100px; src="assets/carregando.gif">`;
    let pronto = `<p style=font-size:60px; font-family:monotype; color: darkgrey;>Pronto!</p>
        <p style=font-size:20px;>Pressione F5 para cadastrar outro e-mail...</p>`;
    content.innerHTML = carregando;
    setTimeout(() => {
        content.innerHTML = pronto;
    }, 1000);
})