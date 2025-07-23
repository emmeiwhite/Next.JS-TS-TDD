import FarAwayFooter from './FarAwayFooter'
import FarAwayForm from './FarAwayForm'
import FarAwayHeader from './FarAwayHeader'
import FarAwayPackings from './FarAwayPackings'

export default function FarAwayParent() {
  return (
    <div>
      <FarAwayHeader />
      <FarAwayForm />
      <FarAwayPackings />
      <FarAwayFooter />
    </div>
  )
}
