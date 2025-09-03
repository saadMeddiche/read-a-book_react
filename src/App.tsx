import './App.css'
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import Book from "./components/book/Book.tsx";
import Chapter from "./components/chapter/Chapter.tsx";
import Paragraph from "./components/paragraph/Paragraph.tsx";
import Page from "./components/page/Page.tsx";

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
    console.log('[APP] Hello');
    const [degreeState, setDegreeState] = useState<number>(0); console.log("degreeState", degreeState);

    useEffect(() => {
        console.log('[APP.useEffect] Mounting');

        const animate = () => {
            setDegreeState((degree) => (degree + 1) % 360);
            console.log('[APP.useEffect] Animation');
            requestAnimationFrame(animate)
        }

        animate();

        console.log("[APP.useEffect] Goodbye");

    }, []);

    console.log('[APP] Goodbye');
    return (
        <>
            <div className="app-container" id="app-container"
                 style={{'--app-linear-gradient-degree': `${degreeState}deg`} as React.CSSProperties}
            >

                <Book title={'The Galaxy'} >

                    <Chapter title={'The earth'}>
                        <Page>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                        </Page>
                        <Page>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                        </Page>
                    </Chapter>

                    <Chapter title={'The sun'}>
                        <Page>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                        </Page>
                        <Page>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                        </Page>
                        <Page>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                        </Page>
                    </Chapter>

                    <Chapter title={'The moon'}>
                        <Page>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                        </Page>
                        <Page>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                        </Page>
                        <Page>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                        </Page>
                        <Page>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                            <Paragraph content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id molestias nostrum praesentium quod ratione rerum sapiente, vitae voluptatibus. Adipisci, quaerat!'}/>
                        </Page>
                    </Chapter>

                </Book>

            </div>
        </>
    )
}

export default App
