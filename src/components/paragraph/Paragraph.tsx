import styles from './Paragraph.module.css';

export type ParagraphProps = {
    content: string;
}

export default function Paragraph(props: ParagraphProps) {
     return (
        <div className={styles.paragraph}>
            <p className={styles.content}>{props.content}</p>
        </div>
     );
}

