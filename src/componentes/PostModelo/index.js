import styles from './PostModelo.module.css';

export default function PostModelo({ fotoCapa, título, children, }) {
    return (
        <article className={styles.PostModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>

            <h2 className={styles.titulo}>
                {título}
            </h2>

            <div className={styles.PostConteudoContainer}>
                {children}
            </div>

        </article>
    )
}