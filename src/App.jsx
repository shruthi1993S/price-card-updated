import Post from "./Post";
import { TiTick } from "react-icons/ti"
import { RxCross2 } from "react-icons/rx";

function App() {

   const icontick=<TiTick />
   const iconcross=<RxCross2 />

  return (
    <section id="pricing">
      
      <div className="row">
        <Post
          name="FREE"
          head="$0/month"
          p1={<>{icontick}Single User </>}
          p2={<>{icontick}50GB Storage</>}
          p3={<>{icontick}Unlimited Public Projects</>}
          p4={<>{icontick}Community Access</>}
          p5={<>{iconcross}Unlimited Private Projects</>}
          p6={<>{iconcross}Dedicated Phone Support</>}
          p7={<>{iconcross}Free Subdomain</>}
          p8={<>{iconcross}Monthly Status Report</>}
          className="pricing-column col-lg-4 col-md-6 post1">
        </Post>

        <Post
          name="PLUS"
          head="$9/month"
          p1={<>{icontick}5 User</>}
          p2={<>{icontick}50GB Storage</>}
          p3={<>{icontick}Unlimited Public Projects</>}
          p4={<>{icontick}Community Access</>}
          p5={<>{icontick}Unlimited Private Projects</>}
          p6={<>{icontick}Dedicated Phone Support</>}
          p7={<>{icontick}Free Subdomain</>}
          p8={<>{iconcross}Monthly Status Report</>}
          className="pricing-column col-lg-4 col-md-6 post1">
        </Post>

        <Post
          name="PRO"
          head="$49/month"
          p1={<>{icontick} Unlimited Users</>}
          p2={<>{icontick}50GB Storage</>}
          p3={<>{icontick}Unlimited Public Projects</>}
          p4={<>{icontick}Community Access</>}
          p5={<>{icontick}Unlimited Private Projects</>}
          p6={<>{icontick}Dedicated Phone Support</>}
          p7={<>{icontick}Free Subdomain</>}
          p8={<>{icontick}Monthly Status Report</>}
          className="pricing-column col-lg-4 post1">
        </Post>
      </div>
   </section>
  );
}

export default App;
