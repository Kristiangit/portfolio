import "../../app/globals.css"

export default function Footer() {
    return (
        <div class="w-full h-1/2 bg-gray-800 flex flex-row justify-evenly items-center text-slate-50">
            <div class="w-1/4 h-1/3 flex flex-col justify-around items-center">
                <p>KONTAKT MEG: </p>
                <a href="github.com">GitHub</a>
                <a href="troll">LinkedIn</a>
            </div>
            <div class="w-1/4 h-1/3 flex flex-col justify-around items-center">
            GI MEG PENGER
            </div>
            <div class="w-1/4 h-1/3 flex flex-col justify-around items-center">
            GI MEG PENGER
            </div>
            <div class="w-1/4 h-1/3 flex flex-col justify-around items-center">
            GI MEG PENGER
            </div>

        </div>
    );
}