
import styles from './NaoEncontrada.module.css';
import erro404 from 'assets/erro404.png';
import BotaoPrincipa from 'componentes/BotaoPrincipa';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate();
    return (
        <>
            <div className={styles.conteudoContaine}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Pagina não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava precurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a pagina incial
                </p>

                <div
                    className={styles.botaoContainer}
                    onClick={() => navegar ("/")}
                >
                    <BotaoPrincipa tamanho="lg">
                        Voltar
                    </BotaoPrincipa>
                </div>

                <img
                    className={styles.imagemCachorr}
                    src={erro404}
                    alt="Cachorro de oculos e vestido de como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}>

            </div>

        </>




    )
}