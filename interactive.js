//Click Menu




//Do a GoogleMaps
function initMap() {
   // The location of Uluru
   const Poltava = { lat: 49.582154,  lng: 34.569921 };
   const PoltavaMcDonald = {lat: 49.56075959963478,  lng: 34.525840798102635};
   const PoltavaCentral = {lat: 49.58766880838154, lng: 34.55779022275864};
   // The map, centered at Uluru
   const map = new google.maps.Map(document.getElementById("map"), {
     zoom: 13,
     center: Poltava, PoltavaMcDonald,
   });
   // The marker, positioned at Uluru
   let marker = new google.maps.Marker({
     position: Poltava,
     map: map,
   });
   let NewMarker = new google.maps.Marker({
      position: PoltavaMcDonald,
      map: map,
    });
   let CentralMarker = new google.maps.Marker({
      position: PoltavaCentral,
      map:map,
   });

 }
//End Do GoogleMaps
    var tag = document.createElement('script');
    /*const Video = document.querySelector('.video');
    const Player = Video.getElementById('#player');
    const MenuVideo = Video.querySelector('.menu_video');*/
    
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      let player = document.getElementById('player');


      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '415',
          width: '600',
          videoId: 's9sZrzmhBEM',
          events: {
            'onReady': onPlayerReady,
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady() {
        player.playVideo();
        /*let time = player.getCurrentTime();
        if(player.stopVideo()){
          let time2 = player.getCurrentTime();
        
        player.playVideo(time2);
        }*/
        
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      function stopVideo() {
        player.pauseVideo();
      }

      function RunOffSetMark(){
          const getSecond = document.getElementById('second').value;
        player.seekTo(getSecond).playVideo();
      }
