import PlaygroundBox from '@/components/Playground/PlaygroundBox'
import PlaygroundHeading from '@/components/Playground/PlaygroundHeading'
import PlaygroundList from '@/components/Playground/PlaygroundList'

export default function Playground() {
  return (
    <div className="py-6">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <PlaygroundHeading title="The FarAway Dream Home" />
        <PlaygroundBox>
          <p>
            We are type casting the children props with <code>React.ReactNode</code>
          </p>
        </PlaygroundBox>

        <PlaygroundList items={['one', 'two', 'three', 'four']} />
      </div>
    </div>
  )
}
