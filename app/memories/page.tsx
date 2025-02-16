'use client'
import React, { useState, useEffect } from 'react';
import MemoryFeed from "@/components/MemoryFeed"
import MemoryChat from "@/components/MemoryChat"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Masonry from "@/components/Mansory";
import MemoryInput from "@/components/MemoryInput"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface MemoryDetails {
  id: number;
  image: string;
  height: number;
  description: string;
  tag: string;
  file?: File;
}

interface EditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (details: MemoryDetails) => void;
  initialDetails: MemoryDetails;
}

function EditMemoryDialog({ isOpen, onClose, onSave, initialDetails }: EditDialogProps) {
  const [details, setDetails] = useState(initialDetails);

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Memory Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={details.description}
              onChange={(e) => setDetails(prev => ({ ...prev, description: e.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="tag">Tag</Label>
            <Input
              id="tag"
              value={details.tag}
              onChange={(e) => setDetails(prev => ({ ...prev, tag: e.target.value }))}
            />
          </div>
          <Button onClick={() => onSave(details)}>Save Details</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function MemoriesPage() {
  const [birthMemories, setBirthMemories] = useState<MemoryDetails[]>([
    { id: 14, image: '/images/Baby7.webp', height: 500, description:'Mama and baby are healthy! Jackie is glad that the labor is over and baby Emma is here safe.', tag: "Baby"},
    { id: 15, image: '/images/Baby3.png', height: 600, description:'Jackie and her sister in the hospital! She started having contractions late on November 16 and checked into the hospital once the contractions were 3 minutes apart.', tag: "Baby" },
    { id: 16, image: '/images/Baby1.png', height: 500, description:'Emma is dressed, in her car seat, and ready to go home to meet the rest of the family.', tag: "Baby" },
    { id: 17, image: '/images/Baby4.jpg', height: 600, description:'Emma resting after being cleaned and eating.', tag: "Baby"},
    { id: 18, image: '/images/Baby5.webp', height: 600, description:'Aunt Margaret with Baby Emma, who is cozy in the blaket that I made for her.', tag: "Baby"},
    { id: 19, image: '/images/Baby6.jpg', height: 600, description:'Big sister meeting baby sister for the first time!', tag: "Baby"},
    { id: 20, image: '/images/Baby7.webp', height:500, description:'First selfie with mom and Emma! So cute!', tag: "Baby"},
  ]);

  const [weddingMemories, setWeddingMemories] = useState<MemoryDetails[]>([
    { id: 9, image: '/images/IMG_8191.jpg', height: 600, description:'John, Mary, Joe, and I on Mary and John\s wedding day.', tag: "Wedding"},
    { id: 10, image: '/images/IMG_8192.jpg', height: 600, description:'Cutting the wedding cake at the reception. Yum!', tag: "Wedding"},
    { id: 11, image: '/images/IMG_8193.jpg', height: 500, description:'Mary and John walking out of the church after the wedding ceremony.', tag: "Wedding"},
    { id: 12, image: '/images/IMG_8194.jpg', height: 600, description:'Mary and John outside the church with Grandma Betty.', tag: "Wedding"},
    { id: 13, image: '/images/IMG_8195.jpg', height: 600, description:'The bride and grrom share a kiss!', tag: "Wedding"},
  ]);

  const [vacationMemories, setVacationMemories] = useState<MemoryDetails[]>([
    { id: 1, image: '/images/IMG_8182.jpg', height: 600, description:'Mary hanging out at the hotel with her cousins.', tag: "Daughters" },
    { id: 2, image: '/images/IMG_8183.jpg', height: 500, description:'Playing games together!', tag: "Daughters"},
    { id: 3, image: '/images/IMG_8184.jpg', height: 600, description:'Mary enjoying a snack!', tag: "Daughters" },
    { id: 4, image: '/images/IMG_8185.jpg', height: 600, description:'Big sister doing little sister\'s hair.', tag: "Daughters"},
    { id: 5, image: '/images/IMG_8186.jpg', height: 600, description:'We went to the amusement park and enjoyed laughing at the clowns!', tag: "Amusement Park"},
    { id: 6, image: '/images/IMG_8187.jpg', height: 600, description:'Getting off the rides.', tag: "Amusement Park"},
    { id: 7, image: '/images/IMG_8189.jpg', height: 600, description:'Mary having fun on the carousel!.', tag: "Amusement Park"},
    { id: 8, image: '/images/IMG_8190.jpg', height: 500, description:'Dinner together.', tag: "Amusement Park"},
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [editingMemory, setEditingMemory] = useState<MemoryDetails | null>(null);

  // Function to calculate image height
  const calculateImageHeight = (file: File): Promise<number> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        // Calculate height while maintaining aspect ratio with width of 300px
        const aspectRatio = img.width / img.height;
        const height = 300 / aspectRatio;
        resolve(height);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  // Function to compress image
  const compressImage = async (file: File): Promise<Blob> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;
        
        // Set maximum width/height
        const maxWidth = 1200;
        const maxHeight = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
        }, 'image/jpeg', 0.8);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleAddImages = async (sectionType: 'birth' | 'wedding' | 'vacation') => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';

    input.onchange = async (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (!files) return;

      setIsLoading(true);
      try {
        const newImages = await Promise.all(
          Array.from(files).map(async (file, index) => {
            const compressedBlob = await compressImage(file);
            const compressedFile = new File([compressedBlob], file.name, {
              type: 'image/jpeg',
            });

            // In a real app, you would upload to cloud storage here
            // const uploadedUrl = await uploadToCloudStorage(compressedFile);
            const tempUrl = URL.createObjectURL(compressedFile);
            
            const height = await calculateImageHeight(compressedFile);
            
            return {
              id: Date.now() + index,
              image: tempUrl,
              height,
              description: 'New memory',
              tag: sectionType === 'birth' ? 'Baby' : 
                   sectionType === 'wedding' ? 'Wedding' : 'Vacation',
              file: compressedFile // Store file reference for potential upload
            };
          })
        );

        if (newImages.length > 0) {
          setEditingMemory(newImages[0]);
        }

        // Update the appropriate state based on section type
        switch(sectionType) {
          case 'birth':
            setBirthMemories(prev => [...newImages, ...prev]);
            break;
          case 'wedding':
            setWeddingMemories(prev => [...newImages, ...prev]);
            break;
          case 'vacation':
            setVacationMemories(prev => [...newImages, ...prev]);
            break;
        }
      } catch (error) {
        console.error('Error processing images:', error);
        // Add proper error handling/notification here
      } finally {
        setIsLoading(false);
      }
    };

    input.click();
  };

  // Cleanup function for object URLs
  const cleanup = () => {
    birthMemories.forEach(item => {
      if (item.image.startsWith('blob:')) {
        URL.revokeObjectURL(item.image);
      }
    });
    weddingMemories.forEach(item => {
      if (item.image.startsWith('blob:')) {
        URL.revokeObjectURL(item.image);
      }
    });
    vacationMemories.forEach(item => {
      if (item.image.startsWith('blob:')) {
        URL.revokeObjectURL(item.image);
      }
    });
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => cleanup();
  }, []);

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
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Baby Emma's Birth - November 17, 2024</h2>
                <Button 
                  onClick={() => handleAddImages('birth')}
                  className="bg-[#A895BA] text-white hover:bg-[#9784A9]"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Add Memory'}
                </Button>
              </div>
              <Masonry data={birthMemories} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Mary and John's Wedding - August 31, 1996</h2>
                <Button 
                  onClick={() => handleAddImages('wedding')}
                  className="bg-[#A895BA] text-white hover:bg-[#9784A9]"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Add Memory'}
                </Button>
              </div>
              <Masonry data={weddingMemories} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Family Vacation - April 1984</h2>
                <Button 
                  onClick={() => handleAddImages('vacation')}
                  className="bg-[#A895BA] text-white hover:bg-[#9784A9]"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Add Memory'}
                </Button>
              </div>
              <Masonry data={vacationMemories} />
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

      {editingMemory && (
        <EditMemoryDialog
          isOpen={true}
          onClose={() => setEditingMemory(null)}
          onSave={(details) => {
            setBirthMemories(prevData => 
              prevData.map(item => 
                item.id === details.id ? details : item
              )
            );
            setEditingMemory(null);
          }}
          initialDetails={editingMemory}
        />
      )}
    </div>
  )
}