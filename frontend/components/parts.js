import React from "react"
import Link from "next/link"
import NextImage from "./image"

const Parts = ({ parts }) => {
  const partLen = parts.length

  return (
    <div>
        <div>   
           {parts.map((part, i) => {
                console.log(part.attributes)
              return (
                <Link href={`/part/${part.attributes.slug}`}>
                     <a className="uk-link-reset">
                        <div className="uk-card uk-card-muted">
                        {/* <div className="uk-card-media-top">
                            <NextImage url={part.attributes.media.data[i].attributes.url} />
                        </div> */}
                        <div className="uk-card-body">
                            <p id="category" className="uk-text-uppercase">
                            {part.attributes.category.data.attributes.name}
                            </p>
                            <p id="title" className="uk-text-large">
                            {part.attributes.title}
                            </p>
                        </div>
                        </div>
                    </a>
                </Link>
              )
            })}
      </div>
    </div>
  )
}

export default Parts

