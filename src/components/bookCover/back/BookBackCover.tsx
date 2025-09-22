import styles from './BookBackCover.module.css'

export type BookBackCoverProps = {
    author: string;
    title: string;
    summary: string;
}

export default function BookBackCover(props: BookBackCoverProps) {
    return (
        <div className={styles.bookBackCover}>

            <div className={styles.author}>
                <h1>{props.author}</h1>
            </div>

            <div className={styles.summaryAndTitle}>

                <div className={styles.title}>
                    {props.title}
                </div>

                <div className={styles.summary}>
                    {props.summary}
                </div>
            </div>


        </div>
    );
}