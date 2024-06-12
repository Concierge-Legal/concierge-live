import Link from "next/link";
// import { ChatContextProvider } from "@/lib/providers/chatContext";
import { AI, ServerMessage } from './actions';



export default async function Layout({ children, params }: {
	children: React.ReactNode,
	params: { organizationId: string; };
}) {
	

	return (
		// <AI>
			<div className="flex h-screen min-h-screen"> {/* Ensure the container fills the viewport height */}
				<div className={`flex min-h-screen bg-gray-900 transition-all duration-300 w-full`}>
					<div className="flex flex-col w-full">
						<header className="text-white p-4 text-center">
							<h1 className="text-3xl font-bold">Demo DAO</h1>
						</header>
						<nav className="text-white p-2 flex justify-center space-x-4">
							<Link href={`/demo/${params.organizationId}/home`} className="hover:underline">Home</Link>
							<Link href={`/demo/${params.organizationId}/networkDirectory`} className="hover:underline">Network Directory</Link>
							<Link href={`/demo/${params.organizationId}/information`} className="hover:underline">General Information</Link>


						</nav>
						<main className="p-4 flex-grow bg-gray-900 text-gray-200">
							{children}
						</main>
					</div>
				</div>
				{/* <div className={`fixed top-0 right-0 h-screen shadow-lg transition-transform duration-300 ${isChatOpen ? 'transform translate-x-0 w-1/4' : 'transform translate-x-full w-0'}`}>
				{isChatOpen && <ChatWindow />}
			</div>
			<div className={`fixed top-1/2 right-0 transform -translate-y-1/2 transition-all duration-300 ${isChatOpen ? 'w-10 h-10' : 'w-10 h-10'}`}>
				<button onClick={toggleChat} className="bg-blue-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center">
					{isChatOpen ? <ChevronRightIcon className="h-6 w-6" /> : <ChevronLeftIcon className="h-6 w-6" />}
				</button>
			</div> */}

			</div>
		// </AI>
	);
}


