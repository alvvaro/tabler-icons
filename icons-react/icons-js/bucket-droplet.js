import * as React from "react";

function IconBucketDroplet({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bucket-droplet" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7.3 9.728l6.945 7.048c.392 .393 2.413 .52 4.73 -1.797c2.316 -2.317 2.2 -4.326 1.795 -4.732l-6.97 -6.847" /><path d="M11.948 7.948c1.76 -1.76 2.537 -3.834 1.738 -4.634c-.8 -.8 -2.875 -.021 -4.634 1.738c-1.532 1.532 -2.32 3.304 -1.97 4.264c.052 .142 .13 .266 .232 .37c.8 .8 2.875 .021 4.634 -1.738z" /><path d="M6 15l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" /></svg>;
}

export default IconBucketDroplet;