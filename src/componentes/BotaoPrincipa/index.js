import styles from'./BotaoPrincipal.module.css';

export default function BotaoPrincipa({children, tamanho}) {
    return(
        <button className={`
        ${styles.botaoPrincipal} 
        ${styles[tamanho]}
        `}>
            {children}
        </button>
    )
}