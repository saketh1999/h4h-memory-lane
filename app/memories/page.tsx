import MemoryFeed from "@/components/MemoryFeed"
import MemoryChat from "@/components/MemoryChat"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Masonry from "@/components/Mansory";

export default function MemoriesPage() {
  const data = [
    { id: 1, image: 'https://picsum.photos/id/10/200/300', height: 400 },
    { id: 2, image: 'https://picsum.photos/id/14/200/300', height: 300 },
    { id: 3, image: 'https://picsum.photos/id/15/200/300', height: 300 },
    { id: 4, image: 'https://picsum.photos/id/16/200/300', height: 300 },
    { id: 5, image: 'https://picsum.photos/id/17/200/300', height: 300 },
    { id: 6, image: 'https://picsum.photos/id/19/200/300', height: 300 },
    { id: 7, image: 'https://picsum.photos/id/37/200/300', height: 200 },
    { id: 8, image: 'https://picsum.photos/id/39/200/300', height: 300 },
    { id: 9, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    { id: 10, image: 'https://picsum.photos/id/103/200/300', height: 900 },
    { id: 11, image: 'https://picsum.photos/id/10/200/300', height: 400 },
    { id: 12, image: 'https://picsum.photos/id/14/200/300', height: 300 },
    { id: 13, image: 'https://picsum.photos/id/15/200/300', height: 300 },
    { id: 14, image: 'https://picsum.photos/id/16/200/300', height: 300 },
    { id: 15, image: 'https://picsum.photos/id/17/200/300', height: 300 },
    { id: 16, image: 'https://picsum.photos/id/19/200/300', height: 300 },
    { id: 17, image: 'https://picsum.photos/id/37/200/300', height: 200 },
    { id: 18, image: 'https://picsum.photos/id/39/200/300', height: 300 },
    { id: 19, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    { id: 20, image: 'https://picsum.photos/id/103/200/300', height: 400 },
    { id: 21, image: 'https://picsum.photos/id/10/200/300', height: 400 },
    { id: 22, image: 'https://picsum.photos/id/14/200/300', height: 300 },
    { id: 23, image: 'https://picsum.photos/id/15/200/300', height: 300 },
    { id: 24, image: 'https://picsum.photos/id/16/200/300', height: 300 },
    { id: 25, image: 'https://picsum.photos/id/17/200/300', height: 300 },
    { id: 26, image: 'https://picsum.photos/id/19/200/300', height: 300 },
    { id: 27, image: 'https://picsum.photos/id/37/200/300', height: 200 },
    { id: 28, image: 'https://picsum.photos/id/39/200/300', height: 300 },
    { id: 29, image: 'https://picsum.photos/id/85/200/300', height: 200 },
    { id: 30, image: 'https://picsum.photos/id/103/200/300', height: 400 }
  ];

  // Split data into three parts
  const recentMemories = data.slice(0, 10);
  const pastMemories = data.slice(10, 20);
  const oldMemories = data.slice(20, 30);

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
              <h2 className="text-2xl font-semibold mb-6">Recent Memories</h2>
              <Masonry data={recentMemories} />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Past Memories</h2>
              <Masonry data={pastMemories} />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Old Memories</h2>
              <Masonry data={oldMemories} />
            </div>
          </TabsContent>
          
          <TabsContent value="chat" className="mt-6">
            <MemoryChat />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

