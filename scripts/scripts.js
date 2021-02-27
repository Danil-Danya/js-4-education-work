////////////////////////////////////////////////////////////


function old(){
    let Name = prompt("Введите имя");
    let yearOfBirth = +prompt("Введите ваш год рождения");
    let year = 2021;
    let str1 = (" Вас зовут ");
    let str2 = (" Ваш возраст ");
    let yearOld = year - yearOfBirth;
    if (!isNaN(Name) || isNaN(yearOfBirth)){
        alert("Данные введины не правильно!");
    }else{
        alert("Данные введены правильно!");
    }
    return str1 + Name + str2 + yearOld;
}
alert(old());


//////////////////////////////////////////////////////////