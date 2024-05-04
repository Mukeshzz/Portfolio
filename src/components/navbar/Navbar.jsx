import React from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  return (
    <div className="h-[100px]">
      <Sidebar />
      <div className="max-w-[1366px] m-auto flex justify-between items-center h-[100%]">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold"
        >
          Mukesh
        </motion.span>
        <div className="flex gap-5 ">
          <a href="">
            <img src="/facebook.png" alt="" className="h-[18px] w-[18px]" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="" className="h-[18px] w-[18px]" />
          </a>
          <a href="">
            <img src="/github.png" alt="" className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
