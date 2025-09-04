import './App.css'
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import Book, {type BookProps} from "./components/book/Book.tsx";

// function App() {
//     console.log('[APP] Hello');
//     const [degreeState, setDegreeState] = useState<number>(0); console.log("degreeState", degreeState);
//     const intervalReference = useRef(-1);  console.log("intervalReference", intervalReference);
//
//     useEffect(() => {
//         console.log('[APP.useEffect] Mounting');
//
//         intervalReference.current = setInterval(() => {
//             setDegreeState((degree) => degree + 1);
//             console.log("[APP.useEffect] intervalReference.current", intervalReference.current);
//         }, 1)
//
//         console.log("[APP.useEffect] Goodbye");
//
//         return () => {
//             console.log('[APP.useEffect] Unmounting');
//             clearInterval(intervalReference.current)
//         };
//
//     }, []);
//
//     console.log('[APP] Goodbye');
//     return (
//         <>
//             <div className="app-container" id="app-container"
//                  style={{'--app-linear-gradient-degree': `${degreeState}deg`} as React.CSSProperties}
//             >
//
//             </div>
//         </>
//     )
// }

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
        fetch('http://localhost:7070/books')
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
