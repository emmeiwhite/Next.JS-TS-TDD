export default function Footer() {
  return (
    <div className="bg-gradient-to-tr from-teal-300 to-teal-400">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between py-4">
        <h2 className="font-extrabold text-blue-900 ">TaskManager</h2>
        <p>Copyright &copy; Imran Rafiq Rather {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
