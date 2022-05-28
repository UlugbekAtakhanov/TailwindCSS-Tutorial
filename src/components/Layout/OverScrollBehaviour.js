import React from 'react'

const OverScrollBehaviour = () => {
  return (
    <div className='p-12 pb-[50rem]'>

        {/* scroll-auto,   parent also is scrollable */}
        <p>scroll-auto</p>
        <div className=' overscroll-auto overflow-y-scroll         h-[300px] mb-20 border border-slate-50/50 p-4 rounded-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius eaque nihil qui nesciunt veritatis eveniet cupiditate id, maiores saepe assumenda explicabo blanditiis nobis ut voluptates officia minus exercitationem hic rerum ex quia illum quis nulla tenetur? Iste, adipisci. Maxime itaque facilis nisi ex deserunt voluptas reprehenderit laboriosam cumque culpa laudantium rerum quae delectus, commodi in vel labore veniam fuga, quo velit. Expedita maxime ea aspernatur officiis blanditiis provident deserunt dolor fugiat nesciunt mollitia iusto reiciendis placeat illum, repellendus, in quisquam perspiciatis repudiandae accusantium modi obcaecati minima culpa dolorum quo cum. Vel, possimus rem dolores voluptas eum ad at id odit excepturi sint recusandae inventore tempore adipisci repudiandae impedit deserunt ex eveniet consectetur magnam fugit voluptatem minima non! Eum ratione mollitia nobis architecto libero, nam enim eaque provident accusantium, quaerat voluptate repellendus beatae perspiciatis a quas rerum ullam maxime tempore recusandae quidem. Ratione provident officia cumque ipsa asperiores maiores vitae, numquam obcaecati dicta dignissimos. Eos, rerum sequi. Libero hic amet quas eos nobis, velit aut fuga magnam cumque saepe, dignissimos delectus reiciendis illum at qui omnis voluptatibus? Animi vel, aspernatur autem eos deleniti ullam at earum! Nobis non expedita corporis doloremque illum, nesciunt iste id fugit maiores enim officiis quam deleniti pariatur ex, dignissimos, voluptate in ducimus at libero accusantium laboriosam omnis. Officia eaque ipsam, doloribus excepturi accusantium debitis animi! Debitis earum iure in doloremque aperiam rerum eum labore dolores illum tenetur cumque quibusdam, ducimus maxime pariatur provident, perspiciatis reiciendis, vel facere est. Nisi tenetur aspernatur explicabo asperiores veritatis doloribus reprehenderit sed temporibus consectetur esse veniam, repudiandae doloremque inventore fuga pariatur ab provident consequuntur ipsa dicta impedit architecto suscipit neque. Nostrum distinctio magnam officiis laborum maiores optio quae iusto aliquid amet molestias deserunt libero error molestiae quod neque qui magni voluptas modi dolore, porro asperiores debitis quas dolor. Veritatis, voluptas?</div>
          
          {/* scroll-contain,   parent is prevented from scrolling and bounce effect is occurs on spec browsers */}
        <p>scroll-contain</p>
        <div className=' overscroll-contain overflow-y-scroll         h-[300px] mb-20 border border-slate-50/50 p-4 rounded-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius eaque nihil qui nesciunt veritatis eveniet cupiditate id, maiores saepe assumenda explicabo blanditiis nobis ut voluptates officia minus exercitationem hic rerum ex quia illum quis nulla tenetur? Iste, adipisci. Maxime itaque facilis nisi ex deserunt voluptas reprehenderit laboriosam cumque culpa laudantium rerum quae delectus, commodi in vel labore veniam fuga, quo velit. Expedita maxime ea aspernatur officiis blanditiis provident deserunt dolor fugiat nesciunt mollitia iusto reiciendis placeat illum, repellendus, in quisquam perspiciatis repudiandae accusantium modi obcaecati minima culpa dolorum quo cum. Vel, possimus rem dolores voluptas eum ad at id odit excepturi sint recusandae inventore tempore adipisci repudiandae impedit deserunt ex eveniet consectetur magnam fugit voluptatem minima non! Eum ratione mollitia nobis architecto libero, nam enim eaque provident accusantium, quaerat voluptate repellendus beatae perspiciatis a quas rerum ullam maxime tempore recusandae quidem. Ratione provident officia cumque ipsa asperiores maiores vitae, numquam obcaecati dicta dignissimos. Eos, rerum sequi. Libero hic amet quas eos nobis, velit aut fuga magnam cumque saepe, dignissimos delectus reiciendis illum at qui omnis voluptatibus? Animi vel, aspernatur autem eos deleniti ullam at earum! Nobis non expedita corporis doloremque illum, nesciunt iste id fugit maiores enim officiis quam deleniti pariatur ex, dignissimos, voluptate in ducimus at libero accusantium laboriosam omnis. Officia eaque ipsam, doloribus excepturi accusantium debitis animi! Debitis earum iure in doloremque aperiam rerum eum labore dolores illum tenetur cumque quibusdam, ducimus maxime pariatur provident, perspiciatis reiciendis, vel facere est. Nisi tenetur aspernatur explicabo asperiores veritatis doloribus reprehenderit sed temporibus consectetur esse veniam, repudiandae doloremque inventore fuga pariatur ab provident consequuntur ipsa dicta impedit architecto suscipit neque. Nostrum distinctio magnam officiis laborum maiores optio quae iusto aliquid amet molestias deserunt libero error molestiae quod neque qui magni voluptas modi dolore, porro asperiores debitis quas dolor. Veritatis, voluptas?</div>

        {/* scroll-auto,   parent is prevented from scrolling and bounce effect is not occurs */}
        <p>scroll-none</p>
        <div className=' overscroll-none overflow-y-scroll         h-[300px] mb-20 border border-slate-50/50 p-4 rounded-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eius eaque nihil qui nesciunt veritatis eveniet cupiditate id, maiores saepe assumenda explicabo blanditiis nobis ut voluptates officia minus exercitationem hic rerum ex quia illum quis nulla tenetur? Iste, adipisci. Maxime itaque facilis nisi ex deserunt voluptas reprehenderit laboriosam cumque culpa laudantium rerum quae delectus, commodi in vel labore veniam fuga, quo velit. Expedita maxime ea aspernatur officiis blanditiis provident deserunt dolor fugiat nesciunt mollitia iusto reiciendis placeat illum, repellendus, in quisquam perspiciatis repudiandae accusantium modi obcaecati minima culpa dolorum quo cum. Vel, possimus rem dolores voluptas eum ad at id odit excepturi sint recusandae inventore tempore adipisci repudiandae impedit deserunt ex eveniet consectetur magnam fugit voluptatem minima non! Eum ratione mollitia nobis architecto libero, nam enim eaque provident accusantium, quaerat voluptate repellendus beatae perspiciatis a quas rerum ullam maxime tempore recusandae quidem. Ratione provident officia cumque ipsa asperiores maiores vitae, numquam obcaecati dicta dignissimos. Eos, rerum sequi. Libero hic amet quas eos nobis, velit aut fuga magnam cumque saepe, dignissimos delectus reiciendis illum at qui omnis voluptatibus? Animi vel, aspernatur autem eos deleniti ullam at earum! Nobis non expedita corporis doloremque illum, nesciunt iste id fugit maiores enim officiis quam deleniti pariatur ex, dignissimos, voluptate in ducimus at libero accusantium laboriosam omnis. Officia eaque ipsam, doloribus excepturi accusantium debitis animi! Debitis earum iure in doloremque aperiam rerum eum labore dolores illum tenetur cumque quibusdam, ducimus maxime pariatur provident, perspiciatis reiciendis, vel facere est. Nisi tenetur aspernatur explicabo asperiores veritatis doloribus reprehenderit sed temporibus consectetur esse veniam, repudiandae doloremque inventore fuga pariatur ab provident consequuntur ipsa dicta impedit architecto suscipit neque. Nostrum distinctio magnam officiis laborum maiores optio quae iusto aliquid amet molestias deserunt libero error molestiae quod neque qui magni voluptas modi dolore, porro asperiores debitis quas dolor. Veritatis, voluptas?</div>

    </div>
  )
}

export default OverScrollBehaviour