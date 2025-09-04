import './App.css'
import * as React from "react";
import {useEffect, useState} from "react";
import Book, {type BookProps} from "./components/book/Book.tsx";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function App() {
    const [degreeState, setDegreeState] = useState<number>(0);
    const [book, setBookState] = useState<BookProps | undefined | null>(undefined);

    useEffect(() => {

        const animate = () => {
            setDegreeState((degree) => (degree + 1) % 360);
            requestAnimationFrame(animate)
        }

        animate();

    }, []);

    useEffect(() => {
        fetch(`${BACKEND_URL}/books/2`)
            .then(response => {
                if(response.ok) return response.json();
                if(response.status === 404) return null;
            })
            .then(data => setBookState(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <>
            <div className="app-container" id="app-container"
                 style={{'--app-linear-gradient-degree': `${degreeState}deg`} as React.CSSProperties}
            >
                {
                    book && (
                        <Book
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            summary={book.summary}
                        />
                    )
                }

                {
                    book === null && (
                        <div className="no-book">
                            No book found
                        </div>
                    )
                }

                {
                    book === undefined && (
                        <div className="loading-book">
                            Loading book...
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default App
