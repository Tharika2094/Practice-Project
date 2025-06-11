import React from "react";
import Slider from "react-slick";


const ProjectCard = ({project}) => {  //project-> destructuring the props
    const sliderSetting={
        dots:true,  //shows pagination dots below the slider
        infinite:true,   //the slider loops continuously
        speed:500,    //Transition speed bwtween sliders
        autoplay:true,   //Automatically cycles through images
        arrows:false,    //hides next/prev arrows
        slidesToShow:1,   //only one imahe shown at a time
        slidesToScoll:1,   //Moves one slide at a time
    };
  return (
    <div className="project-card">
        <Slider {...sliderSetting}>
            {project.images.map((img,index)=>(
                <div key={index}>
                    <img src={img} alt={`project-${index}`} className="project-image"></img>
                </div>
            ))}
        </Slider>
        <h3>{project.title}</h3>
        <p>{project.description1}</p>
    </div>
  )
}

export default ProjectCard