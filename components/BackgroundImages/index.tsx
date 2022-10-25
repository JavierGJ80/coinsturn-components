import React from "react";
import CSS from 'csstype';

const h1Styles: CSS.Properties = {
    backgroundColor: 'black',
    width: '100%',
    height: 'auto',
  };

export interface BackgroundImagesProps {
    selectedImage : string;
}

const BackgroundImages = (props: BackgroundImagesProps) => {
    const { selectedImage } = props;
    let gif : string;

    switch(selectedImage) {
        case("Home1"):{
            return <img style={h1Styles} src={require("./HomeGifs/Home_1.gif")}></img>
        }
        case("Home2"):{
            return <img style={h1Styles} src={require("./HomeGifs/Home_2.gif")}></img>
        }
        case("Home3"):{
            return <img style={h1Styles} src={require("./HomeGifs/Home_3.gif")}></img>
        }
        case("Product1"):{
            return <img style={h1Styles} src={require("./ProductGifs/Product_1.gif")}></img>
        }
        case("Product2"):{
            return <img style={h1Styles} src={require("./ProductGifs/Product_2.gif")}></img>
        }
        case("Products"):{
            return <img style={h1Styles} src={require("./ProductsGif/Products.gif")}></img>
        }
        default:{
            return <img style={h1Styles} src={require("./HomeGifs/Home_1.gif")}></img>
        }

    }
};



export default BackgroundImages;
