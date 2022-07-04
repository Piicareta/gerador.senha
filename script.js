

    document.getElementById('myBtn1').onclick = function(){

        let arr = [];
        while(arr.length<document.getElementById('myInput1').value){
            let i = Math.floor(Math.random()*100)+1;
                if (arr.indexOf(i)===-1){
                    arr.push(i);
        }       
    }
    document.getElementById('myLabel1').textContent = arr.sort(function(a, b){return a-b}).join(' - ');

    document.getElementById('myLabel1').classList.add('animationLabel');

    setTimeout (function (){

        document.getElementById('myLabel1').classList.remove('animationLabel');

    }, 1000)
}

    document.getElementById('myBtn2').onclick = function(){

        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*&%$#@!';
        let charactersLength = characters.length;
        while (result.length<document.getElementById('myInput2').value) {
          result += characters.charAt(Math.floor(Math.random()*charactersLength));
    }
    document.getElementById('myLabel2').textContent = result;

    document.getElementById('myLabel2').classList.add('animationLabel');

    setTimeout (function (){

        document.getElementById('myLabel2').classList.remove('animationLabel');

    }, 1000)
}

