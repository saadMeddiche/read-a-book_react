import styles from './Page.module.css';
import Paragraph, {type ParagraphProps} from "../paragraph/Paragraph.tsx";

export type PageProps = {
    paragraphs: ParagraphProps[];
}

export default function Page(props: PageProps) {
    return (
        <div className={styles.page}>
            {
                props.paragraphs.map(createParagraph)
            }
        </div>
    );
}

function createParagraph(paragraph: ParagraphProps) {
    return <Paragraph content={paragraph.content} />
}