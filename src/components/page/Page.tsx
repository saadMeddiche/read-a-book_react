import type {JSX} from "react";
import Article, {type ArticleProps} from "../article/Article.tsx";
import styles from './Page.module.css';

export type PageProps = {
    title :string
    articles: ArticleProps[];
}

export default function Page(props: PageProps) {
    return (
        <div className={styles.page}>
            <div className={styles.title}>
                <h1 >{props.title}</h1>
            </div>
            {
                props.articles.map(createArticle)
            }
        </div>
    );
}

function createArticle(articleProps: ArticleProps, key: number): JSX.Element {
    return <Article key={key} title={articleProps.title} paragraphs={articleProps.paragraphs} />;
}


