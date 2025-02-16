import MemoryFeed from "@/components/MemoryFeed"
import MemoryChat from "@/components/MemoryChat"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Masonry from "@/components/Mansory";
import MemoryInput from "@/components/MemoryInput"

export default function MemoriesPage() {
  const data = [
    { id: 1, image: '/images/IMG_8182.jpg', height: 600 },
    { id: 2, image: '/images/IMG_8183.jpg', height: 500 },
    { id: 3, image: '/images/IMG_8184.jpg', height: 700 },
    { id: 4, image: '/images/IMG_8185.jpg', height: 500 },
    { id: 5, image: '/images/IMG_8186.jpg', height: 700 },
    { id: 6, image: '/images/IMG_8187.jpg', height: 500 },
    { id: 7, image: '/images/IMG_8189.jpg', height: 500 },
    { id: 8, image: '/images/IMG_8190.jpg', height: 600 },
    { id: 9, image: '/images/IMG_8191.jpg', height: 600 },
    { id: 10, image: '/images/IMG_8192.jpg', height: 600 },
    { id: 11, image: '/images/IMG_8193.jpg', height: 600 },
    { id: 12, image: '/images/IMG_8194.jpg', height: 600 },
    { id: 13, image: '/images/IMG_8195.jpg', height: 400 },
    { id: 14, image: '/images/Baby7.webp', height: 600 },
    { id: 15, image: '/images/Baby3.png', height: 600 },
    { id: 16, image: '/images/Baby1.png', height: 500 },
    { id: 17, image: '/images/Baby4.jpg', height: 600 },
    { id: 18, image: '/images/Baby5.webp', height: 600 },
    { id: 29, image: '/images/Baby6.jpg', height: 400 },
    { id: 20, image: '/images/Baby7.webp', height: 400 },
    { id: 21, image: 'https://picsum.photos/id/15/200/300', height: 300 },
    { id: 22, image: 'https://picsum.photos/id/16/200/300', height: 300 },
    { id: 23, image: 'https://picsum.photos/id/17/200/300', height: 300 },
    { id: 24, image: 'https://picsum.photos/id/19/200/300', height: 300 },
    { id: 25, image: 'https://picsum.photos/id/37/200/300', height: 200 },
    { id: 26, image: 'https://picsum.photos/id/39/200/300', height: 300 },
    { id: 27, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    { id: 28, image: 'https://picsum.photos/id/103/200/300', height: 400 }
  ];

  // Split data into three parts
  const recentMemories = data.slice(14, 20);
  const pastMemories = data.slice(9,13);
  const oldMemories = data.slice(0,8);

  return (
    <div className="min-h-screen bg-[#F8F4EB] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Tabs defaultValue="feed" className=" w-full space-y-8 mt-2">
          <TabsList className="w-full sm:w-auto bg-white/50 backdrop-blur-sm">
            <TabsTrigger 
              value="feed"
              className="text-lg data-[state=active]:bg-white data-[state=active]:shadow-sm "
            >
              Memory Feed
            </TabsTrigger>
            <TabsTrigger 
              value="chat"
              className="text-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Chat
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="feed" className="mt-6 space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Baby Emma is Born November 17, 2024</h2>
              <Masonry data={recentMemories} />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Mary and John's Wedding August 31, 1996</h2>
              <Masonry data={pastMemories} />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Family Vacation April 1984</h2>
              <Masonry data={oldMemories} />
            </div>
          </TabsContent>
          
          <TabsContent value="chat" className="mt-6">
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-medium mb-4">Add New Memory</h3>
                <MemoryInput />
              </div>
              <MemoryChat />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

