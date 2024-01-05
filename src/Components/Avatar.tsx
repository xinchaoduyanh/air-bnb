"use cilent"

import Image from "next/image"
import avatar from "/public/images/avt.jpg"
export default function Avatar() {
  return (
    <Image className="rounded-full" height="30" width="30" alt="" src={avatar} />
  )
}
