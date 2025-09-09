import styles from "./Chapter.module.css"
import Page, {type PageProps} from "../page/Page.tsx";

export type ChapterProps = {
    title: string;
    pages: PageProps[];
}

export default function Chapter(props: ChapterProps) {
    return (
        <div className={styles.chapter}>
            <h1 className={styles.title}>{props.title}</h1>
            {
                props.pages.map(createParagraph)
            }
        </div>
    );
}

function createParagraph(paragraph: PageProps) {
    return <Page paragraphs={paragraph.paragraphs} />
}