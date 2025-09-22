import styles from './BookContent.module.css';
import Chapter, {type ChapterProps} from "../chapter/Chapter.tsx";
import {useState} from "react";

export type BookContentProps = {
    chapters?: ChapterProps[];
}

export function BookContent(props :BookContentProps) {

    const [pageNumber, setPageNumber] = useState(0);

    // const previousPage = () => {
    //     if (pageNumber > 0) {
    //         setPageNumber(pageNumber - 1);
    //     }
    // }
    //
    // const nextPage = () => {
    //     if (props.chapters && pageNumber < props.chapters?.length - 1) {
    //         setPageNumber(pageNumber + 1);
    //     }
    // }

    return (
        <div className={styles.bookContent}>

            <div className={styles.content}>
                {
                    props.chapters && props.chapters.length === 0 ?
                        ('No content')
                        :
                        (props.chapters && createChapter(props.chapters[pageNumber]))
                }
            </div>

            {/*<div className={styles.pagination}>*/}
            {/*    <div className={styles.leftArrow} onClick={previousPage}>*/}
            {/*        &larr;*/}
            {/*    </div>*/}

            {/*    <div className={styles.pageNumber}>*/}
            {/*        Page #{pageNumber}*/}
            {/*    </div>*/}

            {/*    <div className={styles.rightArrow} onClick={nextPage}>*/}
            {/*        &rarr;*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );

}

function createChapter(chapter :ChapterProps) {
    return <Chapter title={chapter.title} pages={chapter.pages} />
}