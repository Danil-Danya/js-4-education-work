////////////////////////////////////////////////////////////


 function old(){
    let Name = prompt("Введите имя");
    let yearOfBirth = +prompt("Введите ваш год рождения");
    let year = 2021;
    let str1 = (" Вас зовут ");
    let str2 = (" Ваш возраст ");
    let yearOld = year - yearOfBirth;
    if (!isNaN(Name) || isNaN(yearOfBirth)){
        alert("Данные введены не правильно!");
    }else{
        return str1 + Name + str2 + yearOld;
    }
}
alert(old()); 


//////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////


 function randomer(max) {
    return Math.floor(Math.random() * max + 1);
}


var col = +prompt("Введите количество решаемых примеров");
var max = 20;


for( i = 0; i < col; i++ ){
    var num1 = randomer(max);
    var num2 = randomer(max);
    var randNum = Math.floor(Math.random() * 2 + 1);

    if(randNum == 1){
        result = num1 + num2;
        var primer = +prompt("Дайте ваш ответ " + num1 + "+" + num2 + "=");
    } else if (randNum == 2){
        result = num1 - num2;
        var primer = +prompt("Дайте ваш ответ " + num1 + "-" + num2 + "=");
    }else if (randNum == 3){
        result = num1 * num2;
        var primer = +prompt("Дайте ваш ответ " + num1 + "*" + num2 + "=");
    }else if (randNum == 4){
        result = num1 / num2;
        var primer = +prompt("Дайте ваш ответ " + num1 + ":" + num2 + "=");
    }


    if (result == primer){
        alert("Правильно " + result);
    }else{
        alert(" Не правильно " + " Ваш ответ " + primer + " Правильный ответ " + result );
    }
} 


////////////////////////////////////////////////////////