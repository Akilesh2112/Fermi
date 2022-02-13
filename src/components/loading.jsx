import React, { Fragment } from "react";

import './style/loading.css';


const Loading = () => (
   <Fragment>
      <div class="about">
         <a class="bg_links social portfolio" href="https://www.figma.com/file/GLgqbynTPeoQoNvTTU6oqD/Fermi?node-id=0%3A1" target="_blank">
            <span class="icon"></span>
         </a>
         <a class="bg_links social dribbble" href="https://github.com/mitroitskii/SpaceFermi" target="_blank">
            <span class="icon"></span>
         </a>
         <a class="bg_links social linkedin" href="https://mitroitskii.notion.site/2f015b503ad1461ebd1ee8fe234d7d00?v=2ec4bc9a39144322a558167c9f4bd2fb" target="_blank">
            <span class="icon"></span>
         </a>
         <a class="bg_links logo"></a>
      </div>

      <div class="content">
         <div class="planet">
            <div class="ring"></div>
            <div class="cover-ring"></div>
            <div class="spots">
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
               <span></span>

            </div>
         </div>
         <p>loading</p>
      </div>

   </Fragment>
);

export default Loading;
