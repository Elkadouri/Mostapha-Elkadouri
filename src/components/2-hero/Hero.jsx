import Lottie from "lottie-react";
import developerSkilAnimation from '../../../src/animations/developerSkil.json'
import { motion } from 'framer-motion';
import './hero.css'

function Hero(){

    return (

        <section id="about" className="hero flex">

            <div className='left-section'>

                <div 
                    className="parent-avatar flex">
                    <motion.img 
                      initial={{transform:'scale(0)'}}
                      animate={{transform:'scale(1.1)'}}
                      transition={{damping:6 , type:'spring' , stiffness:100}}

                    src="./images/my.png" alt="" className='avatar' />
                    <motion.div 
                       initial={{opacity:0}}
                       animate={{opacity:1}}
                       transition={{duration:2}}
     
                      className='icon-verified'>
                    </motion.div>
                </div>

                <motion.h1 
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:1}}

                  className='title'>Front-End Developer crafting dynamic, user-friendly websites.
                </motion.h1>
                <motion.p 
                   initial={{opacity:0}}
                   animate={{opacity:1}}
                   transition={{duration:3}}

                  className='subtitle'>
                  I am Mostapha Elkadouri, a Front-End Developer specializing in creating dynamic, user-friendly websites. With expertise 
                  in HTML, CSS, and JavaScript, I utilize frameworks like React and Bootstrap to deliver high-quality, responsive designs.
                </motion.p>

                <motion.div 
                   initial={{opacity:0}}
                   animate={{opacity:1}}
                   transition={{duration:3}}
                   className='all-icons flex'>
                
                    <a className="icon icon-twitter" href="https://x.com/Mr_ElKadouri" target="_blank"></a>
                    {/* <a className="icon icon-instagram"></a> */}
                    <a className="icon icon-github" href="https://github.com/Elkadouri" target="_blank"></a>
                    <a className="icon icon-linkedin" href="https://www.linkedin.com/authwall?trk=qf&original_referer=https://github.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmostapha-elkadouri-718207320" target="_blank"></a>

                </motion.div>

            </div>

            <motion.div 
              initial={{opacity:0  , transform:'rotate(-360deg)'}}
              animate={{opacity:1  , transform:'rotate(0)'}}
              transition={{duration:3}}

             className='right-section animation'>
                <Lottie className='developer-skil-animation' style={{height:400 , width:500}} animationData={developerSkilAnimation} />
            </motion.div>
            
        </section>

    )

}

export default Hero