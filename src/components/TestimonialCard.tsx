import { memo } from 'react'
import Hexagon from "./Hexagon"
import AuthorComponent from "./AuthorComponent"
import Octagon from "./Octagon"

const TestimonialCard = memo(({ title, content, author }) => {
  return (
    <div className="relative overflow-hidden transition-shadow sm:h-auto w-auto">

      <Hexagon className="text-purple-600 h-24 absolute top-0 left-1/2 transform -translate-x-1/2 z-10" height={200} width={300}>
        <h3 className="text-yellow-300 text-xl font-bold px-4 text-center">
          {title}
        </h3>
      </Hexagon>

    
      <Octagon className="text-purple-200 min-h-[200px] relative z-0 mt-[100px]">
        <p className="text-purple-900 text-sm leading-relaxed">
          {content}
        </p>
      </Octagon>


      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2  z-10">
        <AuthorComponent 
          author={author} 
          imageUrl="/api/placeholder/100/100"
        />
      </div>
    </div>
  )
})

TestimonialCard.displayName = 'TestimonialCard'
export default TestimonialCard;