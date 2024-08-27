import styles from './Rodape.module.css';  // Removi os espaços extras
import { ReactComponent as Marca } from 'assets/marca_registrada.svg';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Marca />
            <p>© 2024 Marco Tulio Florentino Lana. Todos os direitos reservados.</p>
        </footer>
    );
}
