import './App.css'
import Page from "./components/page/Page.tsx";
import Book from "./components/book/Book.tsx";

function App() {
  return (
    <>
        <Book title={'The Galaxy'}>
            <Page title={'Page 1'} articles={
                [
                    {
                        title: 'Article 1',
                        paragraphs: [
                            {title: 'Hello World !', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Introduction', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 2',
                        paragraphs: [
                            {title: 'Hello Mars :D', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Summary', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 3',
                        paragraphs: [
                            {title: 'Hello Pluton :(', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Details', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 4',
                        paragraphs: [
                            {title: 'Hello Sun :D', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Degree of sun', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 5',
                        paragraphs: [
                            {title: 'Hello Vis :(', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Details', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 6',
                        paragraphs: [
                            {title: 'Hello Moon :D', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Details', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Light reflection', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}

                        ]
                    }
                ]
            }/>

            <Page title={'Page 2'} articles={
                [
                    {
                        title: 'Article 1',
                        paragraphs: [
                            {title: 'Hello World !', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Introduction', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 2',
                        paragraphs: [
                            {title: 'Hello Mars :D', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Summary', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 3',
                        paragraphs: [
                            {title: 'Hello Pluton :(', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Details', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    }
                ]
            }/>

            <Page title={'Page 3'} articles={
                [
                    {
                        title: 'Article 1',
                        paragraphs: [
                            {title: 'Hello World !', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Introduction', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 2',
                        paragraphs: [
                            {title: 'Hello Mars :D', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Summary', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 3',
                        paragraphs: [
                            {title: 'Hello Pluton :(', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Details', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 4',
                        paragraphs: [
                            {title: 'Hello Sun :D', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Degree of sun', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}
                        ]
                    },
                    {
                        title: 'Article 5',
                        paragraphs: [
                            {title: 'Hello Moon :D', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Details', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'},
                            {title: 'Light reflection', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias autem dolorum maxime modi molestiae necessitatibus nihil nisi odit optio, praesentium, quaerat sequi ullam ut vitae! Ab amet at beatae consectetur consequatur cumque earum eligendi esse excepturi, itaque nobis non odit porro quas quisquam repellendus repudiandae, sit sunt suscipit voluptatum.'}

                        ]
                    }
                ]
            }/>
        </Book>
    </>
  )
}

export default App
