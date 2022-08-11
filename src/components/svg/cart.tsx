import React from "react";
import { SvgXml } from "react-native-svg";  
export default function CartSvgComponent (){  
  const svgMarkup = `<svg width="21" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.91 18.588c0-.84.68-1.52 1.52-1.52a1.515 1.515 0 1 1-1.52 1.52Zm11.25 0c0-.84.68-1.52 1.52-1.52a1.515 1.515 0 1 1-1.52 1.52ZM18.19 4.349c.61 0 1.01.21 1.41.67.4.46.47 1.12.38 1.719l-.95 6.56a2.552 2.552 0 0 1-2.53 2.19H5.59c-1.33 0-2.43-1.02-2.54-2.339L2.13 2.248l-1.51-.26a.753.753 0 0 1-.61-.86c.07-.41.46-.68.87-.62l2.386.36c.34.061.59.34.62.68l.19 2.24a.61.61 0 0 0 .61.561H18.19Zm-6.06 5.199h2.77c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75h-2.77c-.42 0-.75.33-.75.75 0 .41.33.75.75.75Z" fill="#fff"/></svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="20px" height="20px" />;  

  return <SvgImage />;
}