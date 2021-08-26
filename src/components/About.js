import React from 'react'

function About(props) {
    return (
        <>
           <div className={`container my-3 border border-3 rounded-3`} style={{color: props.mode==='dark'?'white':'black'}}>
               <h1>About us</h1>
               <hr />
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut rerum iste animi cum molestias quas quidem minima. Libero sed in explicabo blanditiis officiis, vitae nostrum. Exercitationem similique ad rerum tempore blanditiis maxime corrupti error illum doloremque accusamus aut sint, porro animi accusantium, doloribus, laborum magnam suscipit consectetur dolorem perspiciatis sapiente ea? Id inventore ullam repellat sed animi odio necessitatibus tempore, magni dolore ducimus perspiciatis adipisci, earum repellendus? Non, qui? Totam in ratione, odio sit quam recusandae ad sequi quos ipsa et earum! Vero totam labore minima optio, saepe voluptatibus, magni temporibus ipsam doloremque debitis asperiores explicabo et placeat dicta molestias!</p>
               </div> 
        </>
    )
}

export default About
