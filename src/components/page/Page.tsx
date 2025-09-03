import type {ReactElement} from "react";
import styles from './Page.module.css';
import {type ParagraphProps} from "../paragraph/Paragraph.tsx";

export type PageProps = {
    children: ReactElement<ParagraphProps>[];
}

export default function Page(props: PageProps) {
    return (
        <div className={styles.page}>
            {
                props.children
            }
        </div>
    );
}


