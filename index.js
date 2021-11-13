
function superbowlWin(record) {
    let winningGame = record.find(record => record.result ==='W')
    console.log(!!winningGame)
   if(winningGame ===false ){return winningGame.year}
else {return undefined}
  }