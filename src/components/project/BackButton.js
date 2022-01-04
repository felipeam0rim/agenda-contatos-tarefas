import styles from './Backbutton.module.css'

export default function BackButton({text, type}) {
    return (
        <button className={styles.btn_voltar}>{text}</button>
    )
}