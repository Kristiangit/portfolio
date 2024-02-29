import "../../app/globals.css"

export default function Post({title, text, colors}) {

    return (
      <div className="w-screen h-screen ">
        {/* <div className={`w-full h-screen flex flex-col items-center justify-around    bg-gradient-to-b from-${colors[0]} via-${colors[1]} via-90% to-${colors[2]}`}> */}
        <div class={`w-full h-screen flex flex-row items-center justify-center    bg-gradient-to-b from-${colors[0]} via-${colors[1]} via-90% to-${colors[2]}`}>
          <div class="w-1/2 flex flex-col items-center justify-around">
            <h1 class="text-4xl font-bold" >{title}</h1>

            <p>{text}</p>
          </div>
          <div class="w-1/3 h-1/3 bg-orange-600"></div>

        </div>

      </div>
  
    );
  }
  