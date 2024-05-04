import React, { useState } from "react";
import { motion } from "framer-motion";

function Test() {

    const [open, setOpen] = useState(false);

    const variants = {
        visible: (i) =>(
            {
                
                opacity: 1,
                x:100,
                transition:{delay: i * 0.3},
            }
        ) ,
        hidden: { opacity: 0},
}

    const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="h-[100vh] flex items-center justify-center">
      {/* <motion.div
        className="w-[200px] h-[200px] bg-white"
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // animate={{ opacity: 1,  scale: 1, x:200, y:500 }}
        // transition={{ duration: 2 }}
        // whileInView={{opacity:1, scale: 2}}
        // drag
        variants={variants}
        // initial="hidden"
        // animate="visible"
        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen(prev=>!prev)}>Click</button> */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        { items.map((item, i) => {
            return(
                <motion.li variants={variants} key={item} custom={i}>
               {item}
            </motion.li>
            )
            

        })
            
        }
      </motion.ul>
    </div>
  );
}

export default Test;
