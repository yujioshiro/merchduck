export default function Contact() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <form className="w-full max-w-lg mx-auto" noValidate>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block lowercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block lowercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="number">
                Number
              </label>
              <input required pattern="\d*" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="number" type="text" placeholder="123-456-7890" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block lowercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" placeholder="jane@example.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block lowercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea required className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" placeholder="Enter your message..." rows={4}></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </main>

  )
}
