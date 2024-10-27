import { octagonPoints } from "../constants"


const AuthorComponent = ({ author, imageUrl }) => {
    // Generate unique ID for each clipPath
    const clipPathId = `octagon-clip-${author.replace(/\s+/g, '-').toLowerCase()}`
    
    return (
        <div className="flex items-center space-x-2">
          <div className="relative w-12 h-12">
            <svg viewBox="0 0 100 100" className="w-auto h-auto">
              <defs>
                <clipPath id={clipPathId}>
                  <path d={octagonPoints.map((point, i) => `${i === 0 ? 'M' : 'L'} ${point[0] * 100} ${point[1] * 100}`).join(' ') + 'Z'} />
                </clipPath>
              </defs>
              <image 
                href={imageUrl} 
                width="100" 
                height="100" 
                clipPath={`url(#${clipPathId})`}
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
          <div className="relative">
            <div
              className="bg-purple-900 text-white px-7 py-10 text-sm rounded-sm"
              style={{
                clipPath: 'polygon(100% 50%, 91% 60.8%, 14.5% 60.8%, 22.25% 50%, 14.5% 39.2%, 91% 39.2%)'
              }}
            >
              {author}
            </div>
          </div>
        </div>
      )
  }

  export default AuthorComponent