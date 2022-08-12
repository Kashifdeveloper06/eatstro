import React from "react";
import { SvgXml } from "react-native-svg";  
export default function PaleoSvgComponent (){  
  const svgMarkup = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.762907 10.101C0.981002 10.3191 1.26197 10.4358 1.54748 10.4516C1.54811 10.4631 1.54919 10.4746 1.55015 10.4861C1.57312 10.7596 1.6888 11.0269 1.89811 11.2362C2.36834 11.7064 3.13071 11.7064 3.60093 11.2362C4.07115 10.766 4.07115 10.0036 3.49819 9.43064L4.64197 8.28922C4.46255 8.18284 4.29464 8.0544 4.1419 7.9052C3.973 7.74023 3.82928 7.55672 3.71234 7.35931L2.56842 8.50089C1.99546 7.92795 1.23309 7.92795 0.762862 8.39815C0.292682 8.86838 0.292682 9.63077 0.762907 10.101Z" fill="#D1D1D1"/>
<path d="M7.37426 7.41826C7.3825 7.41267 7.74731 7.00014 8.38111 6.9854C9.21116 6.96609 9.99638 6.63728 10.5921 6.05954C11.8988 4.79226 11.9244 2.68881 10.6452 1.39153C9.36448 0.092642 7.27123 0.0831098 5.97953 1.37479C5.38013 1.97415 5.03857 2.77078 5.01779 3.61796C5.00177 4.26944 4.5926 4.6174 4.58482 4.62895C3.81797 5.39572 3.8049 6.65604 4.60194 7.43454C5.37371 8.18845 6.60843 8.18404 7.37426 7.41826Z" fill="#D1D1D1"/>
</svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="20px" height="20px" />;  

  return <SvgImage />;
}