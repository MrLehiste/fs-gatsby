import React from "react"
import * as postStyles from "./post.module.css"

export default function Post(props) {
  return (
    <div className={postStyles.card}>
        <img src={props.image} alt={props.title} className={postStyles.image} />
        {props.children}
    </div>
  )
}