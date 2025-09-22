import styles from './BookFrontCover.module.css'

export type BookFrontCoverProps = {
    title: string;
    coverImage: string;
    author: string;
}

export default function BookFrontCover(props :BookFrontCoverProps) {
    return (
        <div className={styles.bookFrontCover}>

            <div className={styles.title}>
                {props.title}
            </div>

            <div className={styles.coverImage}>
                <img src={'data:image/png;base64,' + props.coverImage}  alt="Book FrontCover" />
            </div>

            <div className={styles.author}>
                {props.author}
            </div>

        </div>
    );
}