import styles from "./Chapter.module.css"
import type {ReactElement} from "react";
import {type PageProps} from "../page/Page.tsx";

export type ChapterProps = {
    title: string;
    children: ReactElement<PageProps>[];
}

export default function Chapter(props: ChapterProps) {
    return (
        <div className={styles.chapter}>
            <h1 className={styles.title}>{props.title}</h1>
            {
                props.children
            }
        </div>
    );
}