import React,{Component} from 'react';
import Carousel from 'nuka-carousel';
import images  from '../../utils/images';
import {isMobile} from 'react-device-detect';

class Carusel  extends Component {
  state = {
    slideIndex: 0
  };
  renderedOnDevice(){
      if(isMobile){
        return <div style={{ width: '100%', margin: 'auto',height:'60%' }}>
        <Carousel autoplay={true} autoGenerateStyleTag={true}
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
        >{images.map((item,index)=>{
          return <img src={item.image} alt={item.name} key={index} height={200}/>
        })}
        </Carousel>
        </div>
      }else{
       return  <div style={{ width: '100%', margin: 'auto',height:'60%' }}>
        <Carousel autoplay={true} autoGenerateStyleTag={true}
          slideIndex={this.state.slideIndex}
          afterSlide={slideIndex => this.setState({ slideIndex })}
        >{images.map((item,index)=>{
          return <img src={item.image} alt={item.name} key={index} height={500}/>
        })}
        </Carousel>
        </div>
      }
  }
  render() {
    return (
      this.renderedOnDevice()
    );
  }
}
export default Carusel;
