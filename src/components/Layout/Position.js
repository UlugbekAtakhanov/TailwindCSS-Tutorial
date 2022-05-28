import React from 'react'

const Position = () => {
    return (
        <div className='p-12 pb-[50rem]'>

            {/* default === static */}
            <div className="p-20 bg-sky-500 rounded-lg mb-2">static</div>
            <div className="static top-0 left-0             p-20 bg-sky-500 rounded-lg mb-20">static</div>


            {/* position: relative / absolute  */}
            <div className="relative top-0 left-0             p-20 bg-sky-500 rounded-lg mb-20">
                Parent
                <div className="absolute top-0 right-0               p-2 inline-block    bg-pink-500 rounded-lg">Child</div>
            </div>



            {/* position: fixed   ===   fixes to viewport */}
            <div className="fixed bottom-0 right-0     inline-block        p-20 bg-pink-500 rounded-lg mb-20">Fixed</div>

            {/* position: sticky   ===   stickes to specific point  of its own container */}
            <div className='border h-[300px] overflow-y-scroll border-pink-500'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nam eum obcaecati perferendis, unde quasi delectus et, dolores nesciunt qui libero possimus optio itaque. Veniam eveniet, voluptatibus laudantium maxime eius soluta ad temporibus, libero et necessitatibus deleniti magni quasi quos vel ut. Molestiae, obcaecati. Adipisci eaque ex quod deserunt quam animi tempora iusto blanditiis, ratione autem eveniet aut et, doloribus obcaecati. Facere non, unde doloremque quos reiciendis porro eos, nihil ut laborum nostrum corporis facilis necessitatibus aut quod, ducimus esse aliquid ad placeat recusandae ab quam ipsa? Reiciendis nulla rerum quidem odit magni nihil, maxime aliquam voluptatum eligendi error, itaque voluptas qui rem provident excepturi ex repudiandae quis facere sequi blanditiis beatae. Ab, eius. Amet similique officia fugit dolores dolor quisquam error nisi tempora quasi nihil. Voluptatum unde voluptatem delectus a, magni ab, perspiciatis rerum aliquam earum voluptas nobis nisi nulla maxime harum labore nostrum amet. Aperiam facere exercitationem, tenetur quos ut voluptates vel. Ea quibusdam numquam id doloribus perferendis explicabo debitis architecto beatae ducimus ipsum consequuntur voluptatibus magni reprehenderit corrupti, illo delectus temporibus libero non natus eos est? Ipsam provident ratione perferendis. Quod excepturi ullam sed? Aliquam error obcaecati a ducimus incidunt hic illo veniam, necessitatibus omnis mollitia numquam.</p>
                <div className="sticky top-[0]          p-2 bg-sky-500 rounded-lg mb-20">sticky</div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nam eum obcaecati perferendis, unde quasi delectus et, dolores nesciunt qui libero possimus optio itaque. Veniam eveniet, voluptatibus laudantium maxime eius soluta ad temporibus, libero et necessitatibus deleniti magni quasi quos vel ut. Molestiae, obcaecati. Adipisci eaque ex quod deserunt quam animi tempora iusto blanditiis, ratione autem eveniet aut et, doloribus obcaecati. Facere non, unde doloremque quos reiciendis porro eos, nihil ut laborum nostrum corporis facilis necessitatibus aut quod, ducimus esse aliquid ad placeat recusandae ab quam ipsa? Reiciendis nulla rerum quidem odit magni nihil, maxime aliquam voluptatum eligendi error, itaque voluptas qui rem provident excepturi ex repudiandae quis facere sequi blanditiis beatae. Ab, eius. Amet similique officia fugit dolores dolor quisquam error nisi tempora quasi nihil. Voluptatum unde voluptatem delectus a, magni ab, perspiciatis rerum aliquam earum voluptas nobis nisi nulla maxime harum labore nostrum amet. Aperiam facere exercitationem, tenetur quos ut voluptates vel. Ea quibusdam numquam id doloribus perferendis explicabo debitis architecto beatae ducimus ipsum consequuntur voluptatibus magni reprehenderit corrupti, illo delectus temporibus libero non natus eos est? Ipsam provident ratione perferendis. Quod excepturi ullam sed? Aliquam error obcaecati a ducimus incidunt hic illo veniam, necessitatibus omnis mollitia numquam.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nam eum obcaecati perferendis, unde quasi delectus et, dolores nesciunt qui libero possimus optio itaque. Veniam eveniet, voluptatibus laudantium maxime eius soluta ad temporibus, libero et necessitatibus deleniti magni quasi quos vel ut. Molestiae, obcaecati. Adipisci eaque ex quod deserunt quam animi tempora iusto blanditiis, ratione autem eveniet aut et, doloribus obcaecati. Facere non, unde doloremque quos reiciendis porro eos, nihil ut laborum nostrum corporis facilis necessitatibus aut quod, ducimus esse aliquid ad placeat recusandae ab quam ipsa? Reiciendis nulla rerum quidem odit magni nihil, maxime aliquam voluptatum eligendi error, itaque voluptas qui rem provident excepturi ex repudiandae quis facere sequi blanditiis beatae. Ab, eius. Amet similique officia fugit dolores dolor quisquam error nisi tempora quasi nihil. Voluptatum unde voluptatem delectus a, magni ab, perspiciatis rerum aliquam earum voluptas nobis nisi nulla maxime harum labore nostrum amet. Aperiam facere exercitationem, tenetur quos ut voluptates vel. Ea quibusdam numquam id doloribus perferendis explicabo debitis architecto beatae ducimus ipsum consequuntur voluptatibus magni reprehenderit corrupti, illo delectus temporibus libero non natus eos est? Ipsam provident ratione perferendis. Quod excepturi ullam sed? Aliquam error obcaecati a ducimus incidunt hic illo veniam, necessitatibus omnis mollitia numquam.</p>
            </div>



            {/* top / right / bottom / left  and   inset */}

            <p className='mt-20'>top-1 left-1</p>
            <div className=' relative                            w-60 h-60 bg-sky-500 mb-20 rounded-lg'>
                <div className='absolute top-1 left-1            p-4  bg-pink-500 rounded-lg'>a</div>                
            </div>

            <p>top-1 left-1 right-1 </p>
            <div className=' relative                            w-60 h-60 bg-sky-500 mb-20 rounded-lg'>
                <div className='absolute top-1 left-1 right-1           p-4  bg-pink-500 rounded-lg'>a</div>                
            </div>

            <p>top-1 left-1 right-1 bottom-1</p>
            <div className=' relative                            w-60 h-60 bg-sky-500 mb-20 rounded-lg'>
                <div className='absolute top-1 left-1 right-1 bottom-1          p-4  bg-pink-500 rounded-lg'>a</div>                
            </div>

            <p>inset-x-1 top-1</p>
            <div className=' relative                            w-60 h-60 bg-sky-500 mb-20 rounded-lg'>
                <div className='absolute inset-x-1 top-1         p-4  bg-pink-500 rounded-lg'>a</div>                
            </div>

            <p>inset-y-1 left-1</p>
            <div className=' relative                            w-60 h-60 bg-sky-500 mb-20 rounded-lg'>
                <div className='absolute inset-y-1 left-1         p-4  bg-pink-500 rounded-lg'>a</div>                
            </div>

            <p> inset-1</p>
            <div className=' relative                            w-60 h-60 bg-sky-500 mb-20 rounded-lg'>
                <div className='absolute inset-1        p-4  bg-pink-500 rounded-lg'>a</div>                
            </div>


        </div>
    )
}

export default Position