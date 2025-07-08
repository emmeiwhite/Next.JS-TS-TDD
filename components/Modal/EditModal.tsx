type EditModalType = {
  isModalOpen: boolean
  onClose: () => void
}

export default function EditModal({ isModalOpen, onClose }: EditModalType) {
  return (
    <div
      className={`fixed inset-0 h-screen w-full bg-gray-800 opacity-80 transition-colors duration-300 flex items-center justify-center ${
        isModalOpen ? 'block' : 'hidden'
      }`}>
      {/* Form Content at the center */}
      <div className="bg-white p-6 rounded shadow-md w-11/12 max-w-md relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
          onClick={onClose}>
          ×
        </button>

        <h2 className="text-lg font-semibold mb-4">Edit Todo</h2>

        {/* Edit form can go here */}
        <form>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="Edit your task"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
