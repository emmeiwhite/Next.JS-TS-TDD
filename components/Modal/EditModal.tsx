type EditModalType = {
  isModalOpen: boolean
}

export default function EditModal({ isModalOpen }: EditModalType) {
  return (
    <div
      className={`fixed inset-0 h-screen bg-gray-800 opacity-70 transition-colors duration-300 ${
        isModalOpen ? 'block' : 'hidden'
      }`}></div>
  )
}
