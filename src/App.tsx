import './App.css'
import * as React from "react";
import {useEffect, useState} from "react";
import Book, {type BookProps} from "./components/book/Book.tsx";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

function App() {
    const [degreeState, setDegreeState] = useState<number>(0);
    const [books, setBooksState] = useState<BookProps[]>([]);

    useEffect(() => {

        const animate = () => {
            setDegreeState((degree) => (degree + 1) % 360);
            requestAnimationFrame(animate)
        }

        animate();

    }, []);

    useEffect(() => {
        fetch(`${BACKEND_URL}/books`)
            .then(response => response.json())
            .then(data => setBooksState(data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    return (
        <>
            <div className="app-container" id="app-container"
                 style={{'--app-linear-gradient-degree': `${degreeState}deg`} as React.CSSProperties}
            >

                {
                    books.map((book) => (
                        <Book
                            key={book.id}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            summary={book.summary}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default App
