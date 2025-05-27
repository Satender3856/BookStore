import React from 'react';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import axios from 'axios';
import { useEffect } from 'react';



function Course() {

    // make API For All Books Of Data When I Use THis API Then Show All Books In Cards Format
    // Fetching data from the list.JSON file

    const [book, setBook] = React.useState([]);
    useEffect(() => {
      const getbBook = async () => {
          try{
            const res = await axios.get('http://localhost:4001/api/book');
            console.log(res.data);
            setBook(res.data);
            
        } catch (error) {
            console.log(error);

        }
      };
      getbBook();
    },[]);


    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-pulse bg-size-200">
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex-grow">
                <div className="mt-28 text-center animate-fadeIn">
                    <h1 className="text-2xl md:text-4xl font-bold hover:scale-105 transition-transform duration-300 text-black dark:text-white">
                        We're Delighted To Have You{" "}
                        <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent animate-pulse-glow">
                            Here! :)
                        </span>
                    </h1>

                    <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-accent to-secondary rounded-full transform hover:scale-x-150 transition-all duration-500"></div>

                    <p className="mt-12 max-w-3xl mx-auto leading-relaxed shadow-sm hover:shadow-md p-4 rounded-lg animate-fadeInRight text-gray-700 dark:text-gray-300 dark:hover:text-white dark:bg-gray-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi fuga ab saepe labore sapiente, obcaecati distinctio ipsa, explicabo aliquam atque. In eaque similique distinctio, neque ducimus error libero? Laborum.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
                    {book.map((item, index) => (
                        <div
                            key={item.id}
                            className={`transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden animate-fade-in-up dark:bg-gray-800 ${
                                index % 3 === 0
                                    ? 'hover:bg-pink-50 dark:hover:bg-pink-900 border-t-2 border-accent'
                                    : index % 3 === 1
                                    ? 'hover:bg-purple-50 dark:hover:bg-purple-900 border-t-2 border-secondary'
                                    : 'hover:bg-blue-50 dark:hover:bg-blue-900 border-t-2 border-primary'
                            } hover:animate-float`}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <Cards item={item} />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Course;
