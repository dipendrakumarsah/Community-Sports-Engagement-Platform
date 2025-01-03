import { Button } from '@/components/ui/button'

export default function Equipment() {
  const listedItems = [
    { id: 1, name: 'Tennis Racket', condition: 'Like New', price: '$50', listed: '2 days ago' },
    { id: 2, name: 'Basketball', condition: 'Good', price: '$15', listed: '1 week ago' },
  ]

  const featuredItems = [
    { id: 3, name: 'Mountain Bike', condition: 'Excellent', price: '$300', seller: 'Jane D.' },
    { id: 4, name: 'Yoga Mat', condition: 'New', price: '$25', seller: 'Mike S.' },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Equipment Exchange</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Listed Items</h2>
        <div className="space-y-4">
          {listedItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">Condition: {item.condition}</p>
              <p className="text-gray-600">Price: {item.price}</p>
              <p className="text-gray-600">Listed: {item.listed}</p>
              <div className="mt-4 space-x-2">
                <Button variant="outline">Edit Listing</Button>
                <Button variant="outline">Remove Listing</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Items</h2>
        <div className="space-y-4">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">Condition: {item.condition}</p>
              <p className="text-gray-600">Price: {item.price}</p>
              <p className="text-gray-600">Seller: {item.seller}</p>
              <div className="mt-4">
                <Button>Contact Seller</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Button>List New Item</Button>
      </div>
    </div>
  )
}

