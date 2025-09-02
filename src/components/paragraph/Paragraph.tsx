import styles from './Paragraph.module.css';

export type ParagraphProps = {
    title: string;
    content: string;
}

export default function Paragraph(props: ParagraphProps) {
     return (
        <div className={styles.paragraph}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.content}>{props.content}</p>
        </div>
     );
}

