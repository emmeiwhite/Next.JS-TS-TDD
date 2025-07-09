type PropType = {
  type: 'basic' | 'advanced'
  name: string
  email?: string
}

export default function Challenge1(props: PropType) {
  const { type, name, email } = props

  const classes = type === 'basic' ? 'bg-green-200 border-green-500' : 'border-red-500 bg-red-200'
  return (
    <div className={`${classes} p-3 rounded border-2`}>
      <h2 className="text-xl">{name}</h2>
      <p className="text-base ">{type === 'advanced' ? email : ''}</p>
    </div>
  )
}
