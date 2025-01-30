function changeTab(lang) {
    document.querySelectorAll('.content').forEach(div => div.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

    document.getElementById(lang).classList.add('active');
    document.querySelector(`.tab[onclick="changeTab('${lang}')"]`).classList.add('active');
}
