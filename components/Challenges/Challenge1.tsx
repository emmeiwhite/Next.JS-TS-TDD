/* --- Not a good solution for condition prop rendering
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
--- */

type BasicPropType = {
  type: 'basic'
  name: string
}

type AdvancedPropType = {
  type: 'advanced'
  name: string
  email: string
}

export default function Challenge1(props: BasicPropType | AdvancedPropType) {
  const { type, name } = props

  if (type === 'basic') {
    return (
      <div className={`bg-green-200 border-green-500 p-3 rounded border-2`}>
        <h2 className="text-xl">{name}</h2>
      </div>
    )
  }

  return (
    <div className={`border-red-500 bg-red-200 p-3 rounded border-2`}>
      <h2 className="text-xl">{name}</h2>
      <p className="text-base ">{props.email}</p>
    </div>
  )
}
