
import { useEffect, useState } from 'react'
import './main.css'
import myProjects from './myProjects';
import { motion } from 'framer-motion';

function Main(){

    const [currentActive , setCurrentActive] = useState('all');

    const [myShowedProjects , setMyShowedProjects] = useState(myProjects);
      

    useEffect( () => {

            if (currentActive === 'all'){
                setMyShowedProjects(myProjects);
            }
            else{
                setMyShowedProjects(myProjects.filter((project) => {
                    return project.category === currentActive;
                }))
            }
           

    } , [currentActive])  
  
    return (

        <main className='flex'>
           
             <motion.section 
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{duration:2}}
               className="left-section flex">
                
                <button 
                     onClick={() => {
                        setCurrentActive('all');
                    } } 

                className={currentActive === 'all'? 'active' : null}>All Projects</button>

                <button  
                     onClick={() => {
                        setCurrentActive('html-css');
                    } } 

                className={currentActive === 'html-css'? 'active' : null}>HTML & CSS</button>

                <button 
                     onClick={() => {
                        setCurrentActive('js')
                    } } 

                className={currentActive === 'js' ? 'active' : null}>JavaScript</button>

                <button
                     onClick={() => {
                        setCurrentActive('react')
                    } }

                className={currentActive === 'react' ? 'active' : null}>React js</button>



             </motion.section>
           
             <section id='projects' className="right-section flex">
                
                {myShowedProjects.map((item) => {
                    {return (
                <motion.article 

                 layout
                 initial={{transform:'scale(0)'}}
                 animate={{transform:'scale(1)'}}
                 exit={{transform:'scale(0)'}}
                 transition={{duration:1.5}}

                 key={item.imgPath} className='card'>

                    <img width={266} height={150} src={item.imgPath} alt="" />

                    <div style={{width:'266px'}} className="box">

                        <h1 className='title'>{item.projectTitle}</h1>
                        <p  className="subtitle">
                            {item.description ?? "lorem lorem eiusmod tempor incididunt ut labore lorem lorem eiusmod tempor incididunt et dolore magna aliqua. Ut enim ad minim veniam."}
                        </p>
                        <div className="icons flex">

                           <div style={{gap:'11px'}} className='flex'>

                             {/* <div className="icon-link"> </div> */}
                             <a className='icon-link' href={item.link} target="_blank" ></a>
                             <a className='icon-github' href={item.github} target="_blank" ></a>
                             

                           </div>

                            {/* <a className='link flex' href="">more <span style={{alignSelf:'end' , marginLeft:'3px'}} className='icon-arrow-right'></span></a> */}

                        </div>

                    </div>
                </motion.article>
                    )}
                })}

             </section>

        </main>

    )

}

export default Main