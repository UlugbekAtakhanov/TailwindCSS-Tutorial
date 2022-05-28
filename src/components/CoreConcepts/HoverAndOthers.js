import React from 'react'

const HoverAndOthers = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            <p>hover / active / focus</p>
            <div className='border p-4 rounded-lg flex gap-12 mb-20'>
                {/* hover */}
                <div>
                    <button className='hover:bg-sky-700       bg-sky-500 rounded-full py-1 px-3 text-white'>Button</button>
                </div>

                {/* active */}
                <div>
                    <button className='active:bg-pink-500 hover:bg-sky-700       bg-sky-500 rounded-full py-1 px-3 text-white'>Button</button>
                </div>

                {/* focus */}
                <div>
                    <input className='   focus:ring focus:ring-pink-500 focus:outline-none focus:border-none    p-1      bg-transparent border-sky-500 rounded border  text-white' type="text" />
                </div>
            </div>


            <p>required / disabled / invalid</p>
            <div className='border p-4 rounded-lg flex gap-12 mb-20'>
                <form className='flex flex-col gap-4'>
                    
                    {/* disabled */}
                    <input disabled      className=' disabled:bg-gray-500 disabled:border-gray-400 border-2 disabled:text-gray-400      p-1 bg-transparent rounded text-white' type="text" />
                    
                    {/* required */}
                    <input required className=' required:ring required:ring-pink-500 required:border-none       p-1 bg-transparent border-sky-500 rounded border  text-white' type="text" />
                    
                    {/* invalid */}
                    <input className=' invalid:border-pink-500       p-1  outline-none bg-transparent border-sky-500 rounded border  text-white' type="email" />
                    
                    <button className='rounded-[5px] bg-sky-500 py-2 px'  type='submit'>submit</button>

                </form>
            </div>


            {/* when parent is hovered,   "group" */}
            <div className=' group  hover:bg-sky-500  transition-all              mb-20    bg-white w-96 p-4 rounded-lg'>
                <p className='   group-hover:text-white              flex items-center gap-2  text-slate-400 mb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-white                       text-slate-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                        Lorem, ipsum.
                </p>
                <p className='   group-hover:text-white                 text-slate-400 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit labore tenetur est? Accusamus sit non nisi. Temporibus exercitationem eius fugit?</p>
            </div>

            {/* placeholder */}
            <div>
                <input className='  placeholder:text-slate-500 placeholder:italic                               text-red-500 mb-20  p-1 border-sky-500 rounded border ' type="text" placeholder='this is  placeholder' />
            </div>

            {/* file input */}
            <div className='mb-20'>
                <input type="file" className='                                   border p-4  ' placeholder='this is  placeholder' />
                <input type="file" className=' file:bg-violet-100 file:px-4 file:py-2 file:border-none file:hover:bg-violet-200 file:rounded-full file:text-violet-700 file:font-bold                                 border p-4  ' placeholder='this is  placeholder' />
            </div>


            {/* list markers */}
            <ul className='marker:text-pink-500       list-disc                   text-white mb-4'>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>

            <ul className='marker:text-pink-500  list-disc                   text-white mb-20'>
                <li>Lorem ipsum dolor sit amet.</li>
                <li className='marker:text-sky-500'>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>


            {/* selection */}
            <div className='flex flex-col gap-12 mb-20'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quisquam nisi modi dolorem repellat delectus, sequi molestiae sapiente quae natus ratione ducimus molestias excepturi saepe? Cum cupiditate blanditiis quis est amet dicta maiores eveniet, unde vitae doloribus rem quae illo aliquid ipsam tempora ducimus at reiciendis quaerat. Atque sint nisi quis? Officia vero quisquam minima aliquid. Enim labore alias expedita sunt hic porro voluptate, ducimus at mollitia corrupti quas dicta. Ea dolore animi at veritatis quidem distinctio ratione iste corporis neque. Commodi, nobis perspiciatis culpa aut voluptatem nostrum qui et dolor fuga dignissimos voluptates soluta. Ab quibusdam id fuga delectus repellendus, eligendi recusandae hic vel unde et culpa excepturi dignissimos incidunt error cum repellat sint libero neque praesentium harum sed at? Incidunt omnis inventore praesentium blanditiis, veniam eius vero minima voluptas repudiandae beatae optio excepturi minus esse velit fugit. Dolorem aliquid deserunt blanditiis optio repellat quaerat mollitia aliquam adipisci nobis?</p>
                <p className='selection:bg-green-400 selection:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quisquam nisi modi dolorem repellat delectus, sequi molestiae sapiente quae natus ratione ducimus molestias excepturi saepe? Cum cupiditate blanditiis quis est amet dicta maiores eveniet, unde vitae doloribus rem quae illo aliquid ipsam tempora ducimus at reiciendis quaerat. Atque sint nisi quis? Officia vero quisquam minima aliquid. Enim labore alias expedita sunt hic porro voluptate, ducimus at mollitia corrupti quas dicta. Ea dolore animi at veritatis quidem distinctio ratione iste corporis neque. Commodi, nobis perspiciatis culpa aut voluptatem nostrum qui et dolor fuga dignissimos voluptates soluta. Ab quibusdam id fuga delectus repellendus, eligendi recusandae hic vel unde et culpa excepturi dignissimos incidunt error cum repellat sint libero neque praesentium harum sed at? Incidunt omnis inventore praesentium blanditiis, veniam eius vero minima voluptas repudiandae beatae optio excepturi minus esse velit fugit. Dolorem aliquid deserunt blanditiis optio repellat quaerat mollitia aliquam adipisci nobis?</p>
            </div>

            <p class="first-line:uppercase first-line:tracking-widest first-line:text-pink-500
                    first-letter:text-7xl first-letter:font-bold first-letter:text-white
                    first-letter:mr-3 first-letter:float-left
                ">
                Well, let me tell you something, funny boy. Y'know that little stamp, the one
                that says "New York Public Library"? Well that may not mean anything to you,
                but that means a lot to me. One whole hell of a lot.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis expedita mollitia doloribus vitae qui. Error enim repellat veritatis omnis consequatur necessitatibus commodi voluptatem? Consequuntur non exercitationem explicabo, harum a optio sapiente consequatur modi. Ipsum sint placeat neque voluptates odit libero nihil doloremque voluptatum, sequi eius sed officiis nemo animi expedita accusantium deserunt corrupti. Libero tempora laboriosam repellendus nam quia, magni accusamus illo tenetur. Aliquam, hic? Et maxime tenetur quas molestias neque sequi optio, error laudantium pariatur eius assumenda, soluta dolore debitis porro culpa dolor natus obcaecati nulla quia sint hic perspiciatis laborum. Enim facilis autem nemo. Esse, mollitia soluta obcaecati cupiditate, consequatur eos autem veniam est accusamus adipisci officiis praesentium nulla iste molestias expedita ipsa quo harum suscipit officia impedit iusto? Culpa labore voluptate perferendis dicta, possimus autem, aspernatur consectetur numquam, necessitatibus recusandae omnis eligendi velit incidunt quibusdam accusantium provident. Incidunt deserunt necessitatibus nihil impedit tempora fugit ullam sunt molestiae.
            </p>

        </div>
    )
}

export default HoverAndOthers