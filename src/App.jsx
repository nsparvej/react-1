export default function App() {
    return (
        <>
            <div className="h-screen max-w-full bg-lime-500">
                <div className="flex justify-center items-center h-full">
                    <div className="flex flex-col bg-slate-100 px-12 py-12">
                        <h1 className="text-4xl font-bold ml-32 my-6">Log in</h1>

                        <input className="h-12 w-96 my-5 px-3 border-2 border-zinc-950 bg-lime-900 text-slate-100" type="text" placeholder="Enter you gmail" />
                        <input className="h-12 w-96 px-3 border-2 border-zinc-950 bg-lime-900 text-slate-100" type="password" placeholder="Enter your password " />
                        <button className="text-lg font-extrabold mt-5 pt-2 flex justify-center w-24 h-12 ml-40 bg-lime-900  border-2 border-zinc-950 rounded-lg">Submit</button>
                    </div>
                </div>
            </div>

        </>)
}