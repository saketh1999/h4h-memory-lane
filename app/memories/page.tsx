import MemoryFeed from "@/components/MemoryFeed"
import MemoryChat from "@/components/MemoryChat"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Masonry from "@/components/Mansory";
import MemoryInput from "@/components/MemoryInput"

export default function MemoriesPage() {
  const data = [
    { id: 1, image: '/images/IMG_8182.jpg', height: 500, description:'Mary hanging out at the hotel with her cousins.' },
    { id: 2, image: '/images/IMG_8183.jpg', height: 400, description:'Playing games together!'},
    { id: 3, image: '/images/IMG_8184.jpg', height: 500, description:'Mary enjoying a snack!' },
    { id: 4, image: '/images/IMG_8185.jpg', height: 500, description:'Big sister doing little sister\'s hair.'},
    { id: 5, image: '/images/IMG_8186.jpg', height: 500, description:'We went to the amusement park and enjoyed laughing at the clowns!'},
    { id: 6, image: '/images/IMG_8187.jpg', height: 500, description:'Getting off the rides.'},
    { id: 7, image: '/images/IMG_8189.jpg', height: 400, description:'Mary having fun on the carousel!.'},
    { id: 8, image: '/images/IMG_8190.jpg', height: 500, description:'Dinner together.'},
    { id: 9, image: '/images/IMG_8191.jpg', height: 500, description:'John, Mary, Joe, and I on Mary and John\s wedding day.'},
    { id: 10, image: '/images/IMG_8192.jpg', height: 500, description:'Cutting the wedding cake at the reception. Yum!'},
    { id: 11, image: '/images/IMG_8193.jpg', height: 500, description:'Mary and John walking out of the church after the wedding ceremony.'},
    { id: 12, image: '/images/IMG_8194.jpg', height: 500, description:'Mary and John outside the church with Grandma Betty.'},
    { id: 13, image: '/images/IMG_8195.jpg', height: 500, description:'The bride and grrom share a kiss!.'},
    { id: 14, image: '/images/Baby7.webp', height: 400, description:'Mama and baby are healthy! Jackie is glad that the labor is over and baby Emma is here safe.'},
    { id: 15, image: '/images/Baby3.png', height: 500, description:'Jackie and her sister when Jackie started having contractions and checked into the hospital' },
    { id: 16, image: '/images/Baby1.png', height: 400, description:'Emma is dressed, in her car seat, and ready to go home to meet the rest of the family.' },
    { id: 17, image: '/images/Baby4.jpg', height: 500, description:'Emma resting after being cleaned and eating.'},
    { id: 18, image: '/images/Baby5.webp', height: 500, description:'Aunt Margaret with Baby Emma, who is cozy in the blaket that I made for her.'},
    { id: 29, image: '/images/Baby6.jpg', height: 400, description:'Big sister meeting baby sister for the first time!'},
    { id: 20, image: '/images/Baby7.webp', height: 400, description:'First selfie with mom and Emma! So cute!'},

  ];

  // Split data into three parts
  const recentMemories = data.slice(14, 20);
  const pastMemories = data.slice(8,13);
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

