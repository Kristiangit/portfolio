
import "./globals.css"
import Post from "../src/components/Post"

export default function Home() {
    return (
      <div className="h-screen min-w-screen ">

        <Post title="Kristian Numme" text="Jeg er dritkul" colors={["gray-300", `not`, "purple-500"]} />
        <Post title="BAC" text="BakkaCoin" colors={["purple-500", `fuchsia-600`, "orange-600"]} />
        
        <div class="w-full h-screen bg-gradient-to-b from-purple-500 via-fuchsia-600 via-90% to-lime-600">
        </div>


      </div>
  
    );
  }
  