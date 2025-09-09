import styles from './Book.module.css'
import {useState} from "react";
import Chapter, {type ChapterProps} from "../chapter/Chapter.tsx";

export type BookProps = {
    id: number;
    title: string;
    author: string;
    summary: string;
    chapters?: ChapterProps[];
}

export default function Book(props: BookProps) {

    const [pageNumber, setPageNumber] = useState(0);

    const previousPage = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        }
    }

    const nextPage = () => {
        if (props.chapters && pageNumber < props.chapters?.length - 1) {
            setPageNumber(pageNumber + 1);
        }
    }

    return (
        <div className={styles.book}>

            <div className={styles.title}>
                <p>{props.title}</p>
            </div>

            <div className={styles.content}>
                {
                        props.chapters && props.chapters.length === 0 ?
                        ('No content')
                        :
                        (props.chapters && createChapter(props.chapters[pageNumber]))
                }
            </div>

            <div className={styles.pagination}>
                <div className={styles.leftArrow} onClick={previousPage}>
                    &larr;
                </div>

                <div className={styles.pageNumber}>
                    Page #{pageNumber}
                </div>

                <div className={styles.rightArrow} onClick={nextPage}>
                    &rarr;
                </div>
            </div>

        </div>
    );
}

function createChapter(chapter :ChapterProps) {
    return <Chapter title={chapter.title} pages={chapter.pages} />
}