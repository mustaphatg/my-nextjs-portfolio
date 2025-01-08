

export default function Layout({ children }) {

    return (
        <div className="bg-gray-900">

            <nav>
                <h1 className="text-2xl text-serif text-white">hello2</h1>
            </nav>

            <div className="h-screen">
                {children}
            </div>

        </div >

    )
}