import {type ChapterProps} from "../chapter/Chapter.tsx";
import BookFrontCover from "../bookCover/front/BookFrontCover.tsx";
import BookBackCover from "../bookCover/back/BookBackCover.tsx";
import {BookContent} from "../bookContent/BookContent.tsx";
import {useEffect, useState} from "react";

export type BookProps = {
    id: number;
    title: string;
    author: string;
    summary: string;
    coverImage: string;
    chapters?: ChapterProps[];
}

export default function Book(props: BookProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {

        console.log("Hello useEffect(flipBook)")

        const flipBook = (event: KeyboardEvent) => {
            if(event.key === " ") {
                alert("Flipped book");
                setIsFlipped(!isFlipped);
            }
        }

        window.addEventListener("keyup", flipBook);

        return () => {
            console.log("Bye useEffect(flipBook)")
            window.removeEventListener("keyup", flipBook);
        };

    }, [isFlipped]);

    useEffect(() => {

        console.log("Hello useEffect(openOrCloseBook)")

        const openOrCloseBook = (event: KeyboardEvent) => {
            if(event.key === "Enter") {
                alert("Open Book");
                setIsOpen(!isOpen);
            }
        }

        window.addEventListener("keyup", openOrCloseBook);

        return () => {
            console.log("Bye useEffect(openOrCloseBook)")
            window.removeEventListener("keyup", openOrCloseBook);
        };

    }, [isOpen])

    return (
        <>

            {
                !isOpen && !isFlipped && <BookFrontCover title={props.title} coverImage={props.coverImage} author={props.author} />
            }


            {
                isOpen && <BookContent chapters={props.chapters} />
            }

            {
                !isOpen && isFlipped && <BookBackCover author={props.author} title={props.title} summary={props.summary} />
            }

        </>
    );

}

