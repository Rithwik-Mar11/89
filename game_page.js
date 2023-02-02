player1_name = localStorage.getItem("player1name");
player2_name = localStorage.getItem("player2name");
 document.getElementById("player1name").innerHTML= player1_name + ":";
 document.getElementById("player2name").innerHTML= player2_name + ":";

 player1_score = 0;
 player2_score = 0;

document.getElementById("player1score").innerHTML= player1_score ;
document.getElementById("player2score").innerHTML= player2_score ;

questionturn= "player1"
answerturn= "player2"

document.getElementById("playerQuestion").innerHTML = "question turn-" + player1_name;
document.getElementById("playerAnswer").innerHTML = "answer turn-" + player2_name;

function send() {

    get = document.getElementById("word").value ;
    lower = get.toLowerCase();
    console.log(lower);
    letter1 = lower.charAt(1);
    console.log(letter1)
    length_div_2 = Math.floor(lower.length/2);
    letter2=lower.charAt(length_div_2);
    console.log(letter2);
    length_minus_1 = lower.length-1;
    letter3 = lower.charAt(length_minus_1)
    console.log(letter3);

    remove_letter_1 = lower.replace( letter1,"_");
    remove_letter_2 = remove_letter_1.replace( letter2,"_");
    remove_letter_3 = remove_letter_2.replace( letter3,"_");
    console.log(remove_letter_3);

question_word = "<h4 id='word_display'> Q. "+remove_letter_3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";

}

function check(){
    store = document.getElementById("input_check_box").value;
    lower2 = store.toLowerCase();
    console.log(lower2);
    if (lower2==lower){
        if (answerturn == "player1"){
            player1_score = player1_score+1;
            document.getElementById("player1score").innerHTML=player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("player2score").innerHTML=player2_score;
        }
        
    }
    if (questionturn == "player1"){
        questionturn = "player2";
        document.getElementById("playerQuestion").innerHTML="Question Turn-" + player2_name;
}
    else{
        questionturn = "player1";
        document.getElementById("playerQuestion").innerHTML="Question Turn-" + player1_name;
    }
    if (answerturn == "player1"){
        answerturn = "player2";
        document.getElementById("playerAnswer").innerHTML="Answer Turn-" + player2_name;
}
    else{
        answerturn = "player1";
        document.getElementById("playerAnswer").innerHTML="Answer Tur-" + player1_name;
    }
    document.getElementById("output").innerHTML=" ";
}