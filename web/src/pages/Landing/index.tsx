import React from 'react';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import teachIcon from '../../assets/images/icons/give-classes.svg';
import heartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Bora estudar?"/> Estudar
                    </a>
                    <a href="" className="teach">
                        <img src={teachIcon} alt="Ensine."/> Ensinar
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas <img src={heartIcon} alt="Coração Roxo"/>
                </span>

            </div>
        </div>
    )
}

export default Landing;