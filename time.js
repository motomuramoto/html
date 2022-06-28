//page1
//ログインエラー
var username;
function nameEmpty(username) {
    username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    //console.log(fname);
    if ( username== "" || password==""){
        alert("名前とパスワードを入力してください");
    }
    else{
        document.location = "page2.html";        
        sessionStorage.setItem('username', username);
    }
    
}

//name表示
function nameHeader(){
    document.getElementById("login-name").innerHTML = sessionStorage.getItem('username');
}





//page2

var dates,times;

//時間
function Time(){
    var nowtime = new Date();
    y = nowtime.getFullYear();
    var mo = nowtime.getMonth() + 1;
    var d = nowtime.getDate();
    var week = nowtime.getDay();
    var weeks = ["日", "月", "火", "水", "木", "金", "土"];
    var w = weeks[week];
    var t = nowtime.getHours();
    var mi = nowtime.getMinutes();
    var s = nowtime.getSeconds();
    dates = y + "年" + mo + "月" + d + "日" + w + "曜日" ;
    times =  t + "時" + mi + "分" + s + "秒" ;
    document.getElementById("dates").innerHTML = dates;
    document.getElementById("times").innerHTML = times;
}
setInterval('Time()',100);

//ボタン操作
function startJob(){
    alert("出勤しました");
    var table = document.getElementById("record");
        // 行を行末に追加
        var row = table.insertRow(-1);
        //td分追加
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        // セルの内容入力
        cell1.innerHTML = '出勤';
        cell2.innerHTML = dates+times;

}
function startRest(){

    alert("休憩を開始しました");
    var table = document.getElementById("record");
        // 行を行末に追加
        var row = table.insertRow(-1);
        //td分追加
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        // セルの内容入力
        cell1.innerHTML = '休憩開始';
        cell2.innerHTML = dates+times;


}
function finRest(){
    alert("休憩を終了しました");
    var table = document.getElementById("record");
        // 行を行末に追加
        var row = table.insertRow(-1);
        //td分追加
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        // セルの内容入力
        cell1.innerHTML = '休憩終了';
        cell2.innerHTML = dates+times;

}
function finJob(){
    alert("退勤しました");
    var table = document.getElementById("record");
        // 行を行末に追加
        var row = table.insertRow(-1);
        //td分追加
        var cell1 = row.insertCell(-1);
        var cell2 = row.insertCell(-1);
        // セルの内容入力
        cell1.innerHTML = '退勤';
        cell2.innerHTML = dates+times;

}
