import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is Samantha Valle and I am a novice coder with every intention to continue to learn as this industry evolves. I went from majoring in Forensic Anthropology
             to reflecting much through-out this pandemic an soon to be completing my certification as a developer at UW. </p>
                         <p className={classes.br}>I love exploring new technologies and staying on the latest trens, constantly seeking for new adventures whether in tech or in life.
 </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;