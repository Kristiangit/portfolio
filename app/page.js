
import "./globals.css"
import Post from "../src/components/Post"
import Footer from "../src/components/Footer"

export default function Home() {
    return (
      <div className="h-screen min-w-screen-full ">

        <Post title="Kristian Numme" text="Jeg er dritkul" colors={["teal-200", `not`, "purple-400"]} />
        <Post title="BAC" text="BakkaCoin" colors={["purple-400", 'fuchsia-300', "amber-300"]} />
        <Post title="BakkaKantina" text="Kantine-meny med fungerende backend" colors={["amber-300", '', "orange-400"]} />
        


        <Footer />


        {/* <div className="h-1/2"></div>
        <div className="h-1/2 bg-gradient-to-b from-orange-400 to-black"></div> */}
        
        {/* <div class="w-full h-screen bg-gradient-to-b from-purple-400 via-fuchsia-300 via-90% to-amber-300 from-teal-200 to-purple-400 from-amber-300 via-orange-400 to-slate-800">
        </div> */}
      </div>
  
    );
  }
  