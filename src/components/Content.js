import React ,{useRef}from 'react';
import '../assets/content.css';
import axios from 'axios';
// import Playlist from 'react-mp3-player';
import ReactAudioPlayer from 'react-audio-player';
import Playlist from './Playlist';  

class Content  extends React.Component{

    constructor(){
       super();
       this.state = {
          songsdata:[],
          isPlaying: false,
          currentSrcUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Bicycle-bell.wav",
          currentkey1:null 
       } 
    }
    
    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/getsongs`)
        .then(res => {
          const songs = res.data;
           console.log(songs[0].title);
           this.setState({songsdata:songs})
        }) 
    }

    __selectedsong = (url) =>{
        console.log(url.src);
        this.setState({
            currentSrcUrl:url.src,
            currentkey1:url.currentkey
        });
        console.log(this.state.currentkey1);
    }

    __loadsongs = () =>{
        console.log(this.state.songsdata);
        let songs = this.state.songsdata;
        var songs_data =   songs.map((songs, index) =>
            
            <div class="col-md-2 col-sm-4">
               <p>{index}</p> 
              <div class="card">
                <span class="play-btn-span" onClick = {this.__selectedsong.bind(this,{src:songs.file_location,currentkey1:index})}><i class="fa fa-play play-btn"></i></span>  
                <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/41ocMzo0dGL.jpg" alt="Card image cap"/>
                <div class="card-body">
                 <h5 class="card-title">{songs.title}</h5>
                
                </div>
              </div> 
            </div>
        )
        return songs_data;
    }

    __play = () =>{
        this.audio.current.play();
    }

    render(){
         var playlist = <Playlist/>;
         console.log(playlist);
         return(
             <>
              <section class="sec-content">
                <div class="content">
                <div class="langues-sec">
                    <li>Hindi</li>
                    <li>English</li>
                    <li>Marathi</li>
               </div>

                <div class="music-sec"> 
                <div class="music-sec-title">
                    <span>editor pick</span> 
                </div>		
                <div class="container-fluid">
                    <div class="row">
                        {this.__loadsongs()} 
                        <div class="col-md-2 col-sm-4">
                            <div class="card">
                            <img class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/41ocMzo0dGL.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            
                            </div>
                            </div> 
                        </div>

                        <div class="col-md-2 col-sm-4">
                            <div class="card">
                            <img class="card-img-top" src="https://images.hungama.com/c/1/f19/8d9/46804827/46804827_300x300.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            
                            </div>
                            </div> 
                        </div>

                        <div class="col-md-2 col-sm-4">
                            <div class="card">
                            <img class="card-img-top" src="https://5.imimg.com/data5/SK/IZ/KD/SELLER-79902389/vintage-indian-bollywood-movie-palki-1967s-songs-gramophone-music-record-i46-6-500x500.JPG" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            
                            </div>
                            </div> 
                        </div>

                        <div class="col-md-2 col-sm-4">
                            <div class="card">
                            <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/en/9/9c/Lagaan_Soundtrack.JPG" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            
                            </div>
                            </div> 
                        </div>

                        <div class="col-md-2 col-sm-4">
                            <div class="card">
                            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdZcFC4Z68hJI3p98oM5YoUmR7jqgjCvynvA&usqp=CAU" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            
                            </div>
                            </div> 
                        </div>
                        <div class="col-md-2 col-sm-4">
                            <div class="card">
                            <img class="card-img-top" src="https://e-cdns-images.dzcdn.net/images/cover/0574d84881c96099ce49363c982c5518/264x264.jpg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            
                            </div>
                            </div> 
                        </div> 
                    </div>  
                   </div> 
                  </div>
                </div>
              </section>
              <Player currentsongurl= {this.state.currentSrcUrl}/>
            </>
            
         );
    }
 }

 function Player(props){
     
     const audio = useRef('video_tag');
     
     const playing = () =>{
        audio.current.play();   
     }

     const nextsong = () =>{
       
     }
     console.log(props.currentsongurl);
     return(
         <>
            <section class="player-wrapper">
                <div class="player-container"> 

                <audio
                    ref={audio}
                    src={props.currentsongurl}
                    
                    controls  
                >
                </audio> 
                {/* <ReactAudioPlayer
                    src="file:///home/manish/Musicss/mymusic/mediafiles/DILBAR Satyameva Jayate John Abraham, Nora Fatehi,Tanishk B, Neha Kakkar,Dhvani, Ikka.mp3"
                    autoPlay
                    controls
                /> */}
                {/* <audio  ref={audio}><source src="" type="audio/mp3"/></audio> */}
                <button onClick={playing}>Play</button>
                <button onClick={nextsong}>Next</button>

                {/* <button onClick={Next}>Next</button>
                <button onClick={playing}>Previous</button> */}
                </div>
            </section>
         </>
     ); 
 }





export default Content;