import React, { useRef} from 'react'
import LocalStorage from './LocalStorage'

export default function MainBlogPage() {

const [allposts,setallposts]=LocalStorage("posts",[])
const [newpost,setnewpost]=LocalStorage("newpost","")
const [imageurl,setImageUrl]=LocalStorage("image","")
const inputreference=useRef(null)

const handlenewpost=(e)=>{

  setnewpost(e.target.value)
}

const handleimage=(e)=>{
setImageUrl(URL.createObjectURL(e.target.files[0]))

}

const handlesubmit=()=>{

if(newpost!=="")
{ 
setallposts([...allposts,{newpost,imageurl}])
console.log(allposts)
setnewpost("")
setImageUrl("")
inputreference.current.value=""

}
}

const handleremove=(index)=>{
setallposts(allposts.filter((blog,i)=>i!==index))
setImageUrl("")
}

const handleedit=(post,index)=>{
  setnewpost(post)
  handleremove(index)

}

  return (

    <div className='main '>
      <div className=' p-10 flex justify-center items-center gap-10 border-b-2 border-black'>
      <span className=' font-semibold '>What's do you want to post:</span>
      <input type="text" required value={newpost} className='border-2 p-2 border-black ' onChange={handlenewpost}/>
      <input type="file" ref={inputreference} onChange={handleimage}/>
      <button className='border-2 border-blue-400 font-serif tracking-1 hover:bg-blue-200 w-20 text-center' onClick={handlesubmit}>Post</button>
      </div>
      <div>
      {allposts.map((post,index)=>
      <div key={index}  className=' flex justify-center align-middle text-center gap-10 bg-red-200 gap-10 p-10 '>
      <div>
       {post.imageurl && < img src={post.imageurl} height={"100px"} alt="img" width={"200px"}/>}
      <p className=' font-bold '>{post.newpost}</p>
      </div>
     
      <button className=' font-serif p-2' onClick={()=>handleedit(post.newpost,index)}>EDIT</button>
      <button className='font-serif p-2' onClick={()=>handleremove(index)}>REMOVE</button>

      </div>)
      }
      </div>
    </div>

  )
}
