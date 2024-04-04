import Image from 'next/image'

const getSingleItem = async (id) => {
  const response = await fetch(`http://localhost:3000/api/item/readsingle/${id}`, {
    cache: 'no-store',
  })
  const jsonData = await response.json()
  const singleItem = jsonData.singleItem
  return singleItem
}

const ReadssssingleItem = async (context) => {
  const singleItem = await getSingleItem(context.params.id)

  return (
    <div className="grid-container-si">
      <div>
        <Image src={singleItem.image} width={750} height={500} alt="item-image" priority />
      </div>
      <div>
        <h2>¥{singleItem.price}</h2>
        <h3>{singleItem.title}</h3>
        <p>{singleItem.description}</p>
      </div>
    </div>
  )
}

export default ReadssssingleItem
