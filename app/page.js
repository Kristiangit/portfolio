
import "./globals.css"
import Post from "../src/components/Post"
import Footer from "../src/components/Footer"

export default function Home() {
    return (
      <div className="h-screen min-w-screen-full ">

        <Post title="Kristian Numme" text="Jeg er dritkul" colors={["teal-200", `not`, "purple-400"]} />
        <Post title="BAC" text="BakkaCoin" colors={["purple-400", 'fuchsia-300', "orange-400"]} />
        <Post title="BakkaKantina" text="Kantine-meny med fungerende backend" colors={["orange-400", 'amber-200', "slate-800"]} />
        



        <Footer />




        {/* <div class="w-full h-screen bg-gradient-to-b from-purple-400 via-fuchsia-300 via-90% to-purple-400">
        </div> */}
      </div>
  
    );
  }
  