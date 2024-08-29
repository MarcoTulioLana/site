import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PostModelo from 'componentes/PostModelo';
import fotoCurriculo from "assets/Capacurriculo.jpg";
import './Contato.modules.css';

export default function Contato() {
    const [nome, setNome] = useState('');
    const [assunto, setAssunto] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [enviando, setEnviando] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEnviando(true);

        const templateParams = {
            from_name: nome,
            to_name: 'Marco Tulio', // Ou o nome da pessoa que vai receber o email
            assunto: assunto,
            email: email,
            mensagem: mensagem,
        };

        emailjs.send(
            'service_iimj21f',        // Substitua pelo seu Service ID
            'template_ybz0fyr',       // Substitua pelo seu Template ID
            templateParams,
            'z8UwcbBenz75xgL9S'            // Substitua pelo seu User ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatus('Email enviado com sucesso!');
        }, (error) => {
            console.log('FAILED...', error);
            setStatus('Erro ao enviar o email. Tente novamente.');
        })
        .finally(() => {
            setEnviando(false);
        });
    };

    return (
        <PostModelo
            fotoCapa={fotoCurriculo}
            título="Dados Pessoais"
        >
            <p className="paragrafo"><span className="negrito">Nome Completo:</span> Marco Tulio Florentino Lana.</p>
            <p className="paragrafo"><span className="negrito">Endereço:</span> Rua Coronel Emilio Martins, nº 26 Ponte Nova – Minas Gerais – CEP: 35430-249.</p>
            <p className="paragrafo"><span className="negrito">Telefones:</span> (31) 984282129 (vivo) | (31) 38175261 (Fixo) – Recado.</p>
            <p className="paragrafo"><span className="negrito">Email:</span> marcotulioflana@hotmail.com</p>
            <p className="paragrafo"><span className="negrito">Whatsapp:</span><a href="https://wa.me/qr/GZ535TOJA32IL1" target="_blank" rel="noopener noreferrer">https://wa.me/qr/GZ535TOJA32IL1</a></p>
            <p className="paragrafo"><span className="negrito">Telegram:</span> @MarcoTulioLana</p>
            <p className="paragrafo"><span className="negrito">Instagram:</span> lanamarcotulio </p>
            <p className="paragrafo"><span className="negrito">Linkedin:</span><a href="https://www.linkedin.com/in/marco-tulio-florentino-lana-6a9568240"target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/marco-tulio-florentino-lana-6a9568240</a></p>

            <h2 className="cont">Entre em Contato</h2>
            <form onSubmit={handleSubmit} className="form-contato">
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="assunto">Assunto:</label>
                    <input
                        type="text"
                        id="assunto"
                        value={assunto}
                        onChange={(e) => setAssunto(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea
                        id="mensagem"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" disabled={enviando}>Enviar</button>
                {status && <p>{status}</p>}
            </form>
        </PostModelo>
    );
}
