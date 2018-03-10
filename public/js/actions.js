const actions={};
actions['placeTile']=function(res){
  enableTilesClick();
  let state=res.turnDetails.state;
  if(state.message) {
    actions['invalidTile'](res);
  }
};

actions['chooseHotel']=function(res){
  let hotels = res.hotelsData.filter((hotel)=>!hotel.status);
  let actionInfo={hotels};
  displayForm(actionInfo,'Start Hotel','#inactiveHotelsForm',chooseHotel);
};

actions['chooseHotelForMerge']=function(res){
  let state=res.turnDetails.state;
  let hotels = state.survivorHotels;
  let actionInfo={hotels};
  displayForm(actionInfo,'Keep Hotel','#tieBreakForm',mergerForTieCase);
};

actions['disposeShares']=function(res){
  letPlayerDisposeShares(res);
};
actions['purchaseShares']=function(res){
  getElement('#listed-hotels').classList.remove('hidden');
  showEndTurn();
};

actions['gameOver'] = function (res) {
  let state=res.turnDetails.state;
  rankListHtmlGenerator(state.rankList,me);
  document.getElementById('rankListDisplay').style.display = 'flex';
};

actions['invalidTile'] = function (res) {
  let messageBar = document.getElementById("messageBar");
  messageBar.innerText = res.turnDetails.state.message;
  messageBar.className = "show";
  setTimeout(()=>{
    messageBar.className = messageBar.className.replace("show", "");
  },3000);
  getPlayerDetails();
};