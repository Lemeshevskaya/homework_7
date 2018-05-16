function addNewForm() {
    var retirementWoman = 55;
    var retirementMan = 60;

    var user = {};
    user.surname    = document.getElementById('surname').value;
    user.firstName  = document.getElementById('firstName').value;
    user.fatherName = document.getElementById('fatherName').value;
    user.sex = document.getElementById('sex').value;
    user.age = document.getElementById('age').value;

    var isAllFieldsFilled = function (in_user) {
        var out = true;
        for (var prop in in_user) {
            if (in_user[prop].length === 0 || !in_user[prop].trim()) {
                alert('enter ' + prop);
                out = false;
            }
        }
        return out
    };

    if (isAllFieldsFilled(user)) {
        document.getElementById('name').innerHTML = user.surname + ' ' + user.firstName + ' ' + user.fatherName;
        document.getElementById('ageYear').innerHTML = user.age;
        document.getElementById('ageDay').innerHTML = user.age * 365.25;
        document.getElementById('gender').innerHTML = user.sex;

        document.getElementById('retirement').innerHTML = (user.age >= retirementMan || (user.sex == 'женский' && user.age >= retirementWoman)) ? 'да' : 'нет';
    }
}
document.getElementById('form__button').addEventListener('click', addNewForm, false);