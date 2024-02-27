

export default function Post() {
    var colors = ["indigo-500", `fuchsia-600`, "orange-600"];

    console.log(`from-${colors[0]} via-${colors[1]} via-90% to-${colors[2]}`)
    // console.log(`this is ${colors[0]} `)

    return (
      /* <div className="flex flex-col items-center min-w-screen "> */
      <div className="w-screen h-screen">
        <div className={`h-screen bg-gradient-to-b from-${colors[0]} via-${colors[1]} via-90% to-${colors[2]}`}>

          <h1 className="text-3xl font-bold" >KRISTIAN</h1>
        </div>

      </div>
  
    );
  }
  