function AddUser() {
    Player1Name = document.getElementById("player1sname").value;
    Player2Name = document.getElementById("player2sname").value;
    
    localStorage.setItem("player1name",Player1Name);
    localStorage.setItem("player2name",Player2Name);
    
    window.location = "game_page.html";
}