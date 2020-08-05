import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface PageHeaderProps {
name: string;
subject: string;
description: string;
value: string;
}

const TeacherItem: React.FunctionComponent = (props) => {
    return (
    <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/56697525?s=460&u=aaf3e2733aee877f75b054d53e014132efbb5dc1&v=4"
                alt="Cintya Amaral" title="@CintyaAmaral" />
            <div>
                <strong>Cyntia Amaral</strong>
                <span>React</span>
            </div>
        </header>

        <p>
            Desenvolvedora Front-end com foco em React.
            <br /><br />
            Apaixonada pelo desenvolvimento web desde 2019 e apesar de parecer pouco tempo, já desenvolvi diversos
            projetos. Hoje sou reconhecida como referência em React por meus colegas de trabalho e espero poder passar
            minha experiência para mais pessoas.
        </p>
        <footer>
            <p>
                Preço/Hora
                <strong>R$ 59,90</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;