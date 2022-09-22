
import { useRouter } from 'next/router';
import React from 'react'
export interface PostDetailPageProps {

}


const PostDetailPage = (props: PostDetailPageProps) => {
  const router = useRouter();
  console.log(router);
  
  return (
    <div><h1>
      PostDetailPage
      </h1>
      <p>Query your: {JSON.stringify(router.query)}</p>
      </div>
  )
}

export default PostDetailPage