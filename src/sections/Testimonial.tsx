import { useState } from "react"
import TestimonialCard from "../components/TestimonialCard"
import { emotions } from "../constants"

const Testimonial = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(emotions[0])
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-8">
      <TestimonialCard
        title={`${selectedEmotion.name} - Petunia`}
        content="We can cultivate our emotions like a garden. Our feelings, like our bodies, are a part of nature, and through mindful attention, we can help them grow and flourish."
        author="Jackie Miller"
      />
      <TestimonialCard
        title={`${selectedEmotion.name} - Petunia`}
        content="And that we can cultivate them like a garden. Emotions, like our bodies, are a part of nature, and that we can cultivate them like a garden. Emotions, like our bodies, are a part of nature."
        author="Jackie Miller"
      />
    </div>
  )
}

export default Testimonial;