setInterval(updateClock,1000);

function updateClock(){
    dateBozemanSetter();
    timeBozemanSetter();
    timeTokyoSetter();
    timeLondonSetter();
}

function dateBozemanSetter() {
    let D = new Date();
    let year = D.getFullYear();
    let month = D.getMonth();
    let date = D.getDate();
    let day = D.getDay();

    function m(month) {
        switch (month) {
            case 0:
                return "Jan";
                break;

            case 1:
                return "Feb";
                break;

            case 2:
                return "Mar";
                break;

            case 3:
                return "Apr";
                break;

            case 4:
                return "May";
                break;

            case 5:
                return "Jun";
                break;

            case 6:
                return "Jul";
                break;

            case 7:
                return "Aug";
                break;

            case 8:
                return "Sep";
                break;

            case 9:
                return "Oct";
                break;

            case 10:
                return "Nov";
                break;

            case 11:
                return "Dec";
                break;
        }
    }

function d(day){
        switch (day) {
            case 0:
                return "Monday";
                break;

            case 1:
                return "Tuesday";
                break;

            case 2:
                return "Wednesday";
                break;

            case 3:
                return "Thursday";
                break;

            case 4:
                return "Friday";
                break;

            case 5:
                return "Saturday";
                break;

            case 6:
                return "Sunday";
                break;
        }
}

    let today = year + "/" + m(month) + "/" + date;

    document.getElementById("dayBozeman").innerHTML = d(day);
    document.getElementById("dateBozeman").innerHTML = today;
}

function timeBozemanSetter(){
    let D = new Date();
    let hour = D.getHours();
    let minute = D.getMinutes();
    let second = D.getSeconds();

    if (hour < 10){
        hour = "0" + hour;
    }

    if (minute < 10){
        minute = "0" + minute;
    }

    if (second < 10){
        second = "0" + second;
    }

    let time = hour + ":" + minute + ":" + second;
    document.getElementById("timeBozeman").innerHTML = time;
}

function timeTokyoSetter(){
    let D = new Date();
    let hour = D.getUTCHours() + 9;
    let minute = D.getUTCMinutes();
    let second = D.getUTCSeconds();

    if (hour < 10){
        hour = "0" + hour;
    }

    if (minute < 10){
        minute = "0" + minute;
    }

    if (second < 10){
        second = "0" + second;
    }

    let time = hour + ":" + minute + ":" + second;
    document.getElementById("timeTokyo").innerHTML = time;
}

function timeLondonSetter(){
    let D = new Date();
    let hour = D.getUTCHours();
    let minute = D.getUTCMinutes();
    let second = D.getUTCSeconds();

    if (hour < 10){
        hour = "0" + hour;
    }

    if (minute < 10){
        minute = "0" + minute;
    }

    if (second < 10){
        second = "0" + second;
    }

    let time = hour + ":" + minute + ":" + second;
    document.getElementById("timeLondon").innerHTML = time;
}