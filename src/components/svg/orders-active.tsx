import React from "react";
import { SvgXml } from "react-native-svg";  
export default function OrdersActiveSvgComponent (){  
  const svgMarkup = `<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9086 1.74979C13.9086 1.74979 6.2316 1.75379 6.2196 1.75379C3.4596 1.77079 1.7506 3.58679 1.7506 6.35679V15.5528C1.7506 18.3368 3.4726 20.1598 6.2566 20.1598C6.2566 20.1598 13.9326 20.1568 13.9456 20.1568C16.7056 20.1398 18.4156 18.3228 18.4156 15.5528V6.35679C18.4156 3.57279 16.6926 1.74979 13.9086 1.74979Z" fill="#D1D1D1" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.7157 15.2234H6.49572" stroke="#FFFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.7157 11.0369H6.49572" stroke="#FFFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.2517 6.86014H6.4967" stroke="#FFFEFE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="16.67px" height="18.41px" />;  

  return <SvgImage />;
}