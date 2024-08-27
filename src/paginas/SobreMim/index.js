import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/marcotuliolana.png"; // Certifique-se de importar a imagem corretamente
import styles from "./SobreMim.module.css";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            título="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Marco Tulio!
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do Marco Tulio sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
            Oi, tudo bem?
            </p>
            <p className={styles.paragrafo}>
            Sou formando em Engenharia de Computação e fico muito feliz em saber que você tem interesse em conhecer mais sobre mim. Este espaço foi criado para compartilhar minha trajetória e as experiências que venho adquirindo ao longo do curso. Sinta-se à vontade para explorar e descobrir mais sobre minha jornada!
            </p>
            <p className={styles.paragrafo}>
            Comecei a trilhar meu caminho no ramo da computação ao iniciar um curso profissionalizante em manutenção de computadores e notebooks. Esse primeiro contato despertou minha curiosidade para saber mais, e decidi aprofundar meus conhecimentos estudando Engenharia de Computação na Universidade Univiçosa, na cidade próxima à minha Ponte Nova MG. Ingressei na primeira turma do curso em 2018, e desde então venho desenvolvendo minhas habilidades e explorando novas oportunidades na área.
            </p>
            <p className={styles.paragrafo}>
            Enfrentei muitas dificuldades durante meu aprendizado poís teve pandemia no meio da minha formação no qual tive que ajudar mais meu pai no trabalho, e larguei a programação de lado. Tive que me empenhar bastante para superar essas dificuldades e preencher as lacunas que surgiram ao longo do caminho. Com dedicação e esforço, consegui desenvolver as matérias. Como sou de uma região interiorana de Minas Gerais, as oportunidades na área de programação eram limitadas. No entanto, aproveitei as oportunidades que surgiram, como estágios na área de infraestrutura e redes, que me proporcionaram um conhecimento valioso que complementou o que a faculdade não cobriu.
            </p>
            <p className={styles.paragrafo}>
            Fui atrás do conhecimento e, através dos estudos, adquiri habilidades em diversos ramos da informática, como eletrônica, redes, automação, robótica e programação. Reconheço que sempre há mais a aprender e, por isso, estou constantemente em busca de novos conhecimentos. Tenho uma grande paixão por aprender na prática, aplicando o que sei e aprendendo com os erros ao longo do caminho.
            </p>



        </PostModelo>
    );
}
