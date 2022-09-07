import React from "react";

import caseimg from '../imgs/Wallpaper_06.png'
import '../styles/casesSection.css'
const CasesSection = () => {
  return (
    <main className="main-cases-div">
      <section className="cases-imgs">
          <img className="case-img" src={caseimg} alt="" />
          <img className="case-img" src={caseimg} alt="" />
          <img className="case-img" src={caseimg} alt="" />
          <img className="case-img" src={caseimg} alt="" />
      </section>
      <section className="case-description">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare velit et leo facilisis, ac volutpat metus tempus. Morbi volutpat tempus ligula, ut consectetur dui cursus scelerisque. Vestibulum cursus sodales urna, non interdum augue tincidunt vel. Maecenas nec ipsum id ante placerat egestas. Nunc in est accumsan, porttitor urna sit amet, varius erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi consectetur ipsum sit amet lorem suscipit vulputate. Mauris sed nisl quam. Suspendisse gravida turpis sed sem iaculis convallis. Quisque fringilla, ipsum ac porttitor convallis, nisi nisl mollis massa, vel suscipit odio nisi vitae dui. Phasellus dolor diam, dapibus in varius in, consequat nec ipsum. Curabitur nec mattis urna. Integer nulla orci, dictum nec hendrerit et, tempor at ante.
          </p>
          <p>
          Aenean quis dolor nec dui vehicula efficitur vel at erat. Aenean blandit imperdiet aliquam. Sed quis efficitur diam. Donec tempor sem sed condimentum scelerisque. In non rhoncus erat. Maecenas quis mattis sapien. Quisque mattis in dui sit amet finibus. Suspendisse potenti. Praesent vel nisl tincidunt, sodales sem eu, suscipit leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam interdum justo lacinia neque porta posuere ut in leo. Suspendisse consectetur dui a dolor finibus, vel congue lectus placerat. Maecenas condimentum sollicitudin dolor nec ullamcorper. Pellentesque at eleifend augue.
          </p>
      </section>
    </main>
  )
}

export default CasesSection;
