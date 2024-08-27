import styles from './Banner.module.css';
import marcoulio from 'assets/marcoulio.png'


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Bem vindo a minha pagina!
                </h1>
                <p className={styles.paragrafo}>
                    Sou Marco Tulio Florentino Lana, formando em Engenharia de Computação. Este espaço é dedicado a compartilhar minhas experiências e formações na área, visando não apenas o desenvolvimento contínuo, mas também fortalecer meu currículo e minha presença profissional. Sinta-se à vontade para explorar e acompanhar minha jornada!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={marcoulio}
                    alt='Foto do Marco Tulio'
                />
            </div>
        </div>
    );
}
