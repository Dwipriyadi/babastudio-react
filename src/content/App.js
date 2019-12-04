import React,{Component} from 'react';
import '../style/styles.css';

class App extends Component {
  render() {
    return (
    <div className="wrapper">
      <div className="header">
        <div className="navbar">
          <div className="logo">
            <img className="imgfluid" src={require('../logo/babastudio-logo.png')}/>
          </div>
              <div className="menu">
              <ul>
                <li> <a>Home</a> </li>
                <li> <a>Blogs</a> </li>
                <li> <a>Galery</a> </li>
                <li> <a>Kontak</a> </li>
              </ul>
            </div>
           </div>
           </div>
        {/* end header */}
          <div className="slider">
            <div className="slidercontent">
              <img className="imageslider" src={require('../images/banner-desktop.jpg')}/>
            </div>
          </div>
          {/* Slider */}
          <h2 className="dataprestasi"> Prestasi Murid babastudio</h2>
            <div className="content">
              <div className="image">
                <img className="imagesliderr" src={require('../images/21cineplex.jpg')}/>
                  <div className="contentimage">
                    <h2 className="fontimage">www.21cineplex</h2>
                  </div>
                </div>
                     <div className="image">
                      <img className="imagesliderr" src={require('../images/bpn.jpg')}/>
                        <div className="contentimage">
                          <h2 className="fontimage">www.bpn.go.id</h2>
                        </div>
                      </div>
              <div className="image">
                  <img className="imagesliderr" src={require('../images/republika.jpg')}/>
                      <div className="contentimage">
                      <h2 className="fontimage">www.republika.co.id</h2>
                      </div>
                </div>
            
            {/*end Gambar */}

                <div className="content-gambar">
                  <h2 className="dataprestasi">Tempat Kursus BabaStudio</h2>
                    <div className="content-youtube">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/k1OWLK0Yhc8"></iframe> 
                    </div>
                
         <div className="content-map">
          <iframe src="https://www.google.com/maps/embed?-6.220776,106.7808823,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f6cd0000003d:0x1f5fa010fece9b0b!8m2!3d-6.220776!4d106.783071?hl=id" width="550" height="300" frameborder="0" allowfullscreen="">
            </iframe>
            </div>
          </div>
        </div>
  </div>
    )
  }
}

export default App;
