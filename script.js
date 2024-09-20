document.getElementById('hasil').addEventListener('click', function(){
    const name = document.getElementById('nama').value;
    const result = document.getElementById('result');

    if(name){
        const muka = cekmuka(name);
        result.innerHTML = `Kamu memiliki wajah yang : <strong>${muka}</strong>`;
    }
    else {
        result.innerHTML = `<span style="color : red;">Silahkan masukkan nama anda</span>`
    }
});

function cekmuka(name){
    const mukas = ['Cantik','Jelek', 'mirip kudanil', 'seperti cina loleng', 'mirip belut laut', 'mirip bebek penyet', 'seperti kunti Daster'];
    const index = Math.floor(Math.random() * mukas.length);
    return mukas[index]
}

