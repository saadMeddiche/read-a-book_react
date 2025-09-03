import styles from './Book.module.css'
import {type ReactElement, useState} from "react";
import type {ChapterProps} from "../chapter/Chapter.tsx";

export type BookProps = {
    title: string;
    children?: ReactElement<ChapterProps>[];
}

export default function Book(props: BookProps) {

    const [pageNumber, setPageNumber] = useState(0);

    const previousPage = () => {
        if (pageNumber > 0) {
            setPageNumber(pageNumber - 1);
        }
    }

    const nextPage = () => {
        if (props.children && pageNumber < props.children?.length - 1) {
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
                        props.children && props.children.length === 0 ?
                        ('No content')
                        :
                        (props.children && props.children[pageNumber])
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