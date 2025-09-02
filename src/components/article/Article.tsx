import Paragraph, {type ParagraphProps} from "../paragraph/Paragraph.tsx";
import type {JSX} from "react";
import styles from "./Article.module.css"

export type ArticleProps = {
    title: string;
    paragraphs: ParagraphProps[];
}

export default function Article(props: ArticleProps) {
    return (
      <div className={styles.article}>
            <h1 className={styles.title}>{props.title}</h1>
            {
                props.paragraphs.map(createParagraph)
            }
      </div>
    );
}

function createParagraph(paragraph: ParagraphProps, key: number): JSX.Element {
    return <Paragraph key={key} title={paragraph.title} content={paragraph.content} />;
}


