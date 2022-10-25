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
            return <img style={h1Styles} src={"https://github.com/JavierGJ80/coinsturn-components/blob/main/components/BackgroundImages/HomeGifs/Home_1.gif?raw=true"}></img>
        }
        case("Home2"):{
            return <img style={h1Styles} src={"https://github.com/JavierGJ80/coinsturn-components/blob/main/components/BackgroundImages/HomeGifs/Home_2.gif?raw=true"}></img>
        }
        case("Home3"):{
            return <img style={h1Styles} src={"https://github.com/JavierGJ80/coinsturn-components/blob/main/components/BackgroundImages/HomeGifs/Home_3.gif?raw=true"}></img>
        }
        case("Product1"):{
            return <img style={h1Styles} src={"https://github.com/JavierGJ80/coinsturn-components/blob/main/components/BackgroundImages/ProductGifs/Product_1.gif?raw=true"}></img>
        }
        case("Product2"):{
            return <img style={h1Styles} src={"https://github.com/JavierGJ80/coinsturn-components/blob/main/components/BackgroundImages/ProductGifs/Product_2.gif?raw=true"}></img>
        }
        case("Products"):{
            return <img style={h1Styles} src={"https://github.com/JavierGJ80/coinsturn-components/blob/main/components/BackgroundImages/ProductsGif/Products.gif?raw=true"}></img>
        }
        default:{
            return <img style={h1Styles} src={"https://github.com/JavierGJ80/coinsturn-components/blob/main/components/BackgroundImages/HomeGifs/Home_1.gif?raw=true"}></img>
        }

    }
};



export default BackgroundImages;
