import PostModelo from 'componentes/PostModelo';
import fotoCurriculo from "assets/Capacurriculo.jpg";
import './Contato.modules.css';


export default function Contato() {
    return (

        <PostModelo
            fotoCapa={fotoCurriculo}
            título="Dados Pessoais"
        >
            <p className="paragrafo"><span className="negrito">Nome Completo:</span> Marco Tulio Florentino Lana.</p>
            <p className="paragrafo"><span className="negrito">Endereço:</span> Rua Coronel Emilio Martins, nº 26 Ponte Nova – Minas Gerais – CEP: 35430-249.</p>
            <p className="paragrafo"><span className="negrito">Telefones:</span> (31) 984282129 (vivo) | (31) 38175261 (Fixo) – Recado.</p>
            <p className="paragrafo"><span className="negrito">Email:</span> marcotulioflana@hotmail.com</p>
            <p className="paragrafo"><span className="negrito">Whatsapp:</span><a href= "https://wa.me/qr/GZ535TOJA32IL1"target="_blank" rel="noopener noreferrer"> https://wa.me/qr/GZ535TOJA32IL1</a></p>
            <p className="paragrafo"><span className="negrito">Telegram:</span> @MarcoTulioLana</p>
            <p className="paragrafo"><span className="negrito">Instagram:</span> lanamarcotulio </p>
            <p className="paragrafo"><span className="negrito">Linkedin:</span> <a href="https://www.linkedin.com/in/marco-tulio-florentino-lana-6a9568240" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/marco-tulio-florentino-lana-6a9568240</a></p>

        </PostModelo>
    )



}