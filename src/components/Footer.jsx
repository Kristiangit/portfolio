import "../../app/globals.css"

export default function Footer() {
    return (
        <div className="w-full h-1/2 bg-gradient-to-b flex flex-row justify-evenly items-center text-slate-50 text-lg from-slate-700 to-gray-900">
            <div className="w-1/4 h-1/3 flex flex-col justify-around items-center font-manrope font-medium">
                <p className="font-semibold drop-shadow-xl">KONTAKT MEG: </p>
                <a href="github.com">GitHub</a>
                <a href="troll">LinkedIn</a>
            </div>
            <div className="w-1/4 h-1/3 flex flex-col justify-around items-center font-manrope font-medium drop-shadow-2xl">
            <p className="font-semibold">            Kontakt meg direkte:</p>
            <p>k.numme05@gmail.com</p>
            </div>
            <div className="w-1/4 h-1/3 flex flex-col justify-around items-center">
            </div>
            <div className="w-1/4 h-1/3 flex flex-col justify-around items-center">
            </div>

        </div>
    );
}