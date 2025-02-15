import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import CircularGallery from '@/components/CircularGallery'
import { IoCloudyNight } from "react-icons/io5";
export default function WhoAmIPage() {
  // TODO: Fetch patient details from API
  const patientDetails = {
    name: "Jane Doe",
    age: 72,
    diagnosis: "Early-stage Alzheimer's",
    emergencyContact: "Jane Doe (Daughter)",
    emergencyPhone: "555-1234",
    medications: ["Donepezil", "Memantine"],
    allergies: ["Penicillin"],
    profilePicture: "/jane_doe.jpg",
    about: "I enjoy gardening, reading mystery novels, and spending time with my grandchildren. I've been living in Boston for over 40 years."
  }

  return (
    <div className="space-y-6 bg-[#F8F4EB] min-h-screen p-6">

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4 ring-4 ring-primary/10">
              <AvatarImage src={patientDetails.profilePicture} alt={patientDetails.name} />
              <AvatarFallback className="text-2xl">
                {patientDetails.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-bold text-gray-800">{patientDetails.name}</CardTitle>
            <p className="text-lg text-muted-foreground">Age: {patientDetails.age}</p>
          </CardHeader>
        </Card>

        {/* Medical Information Card */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">Medical Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Diagnosis</h3>
              <Badge variant="secondary" className="text-md px-4 py-1">
                <IoCloudyNight className="mr-1 h-4 w-4 inline" />
                {patientDetails.diagnosis}
              </Badge>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Medications</h3>
              <div className="flex flex-wrap gap-2">
                {patientDetails.medications.map((med, index) => (
                  <Badge key={index} variant="outline" className="text-md">
                    <IoCloudyNight className="mr-1 h-4 w-4 inline" />
                    {med}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Allergies</h3>
              <div className="flex flex-wrap gap-2">
                {patientDetails.allergies.map((allergy, index) => (
                  <Badge key={index} variant="destructive" className="text-md">
                    <IoCloudyNight className="mr-1 h-4 w-4 inline" />
                    {allergy}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About Me Card */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              className="text-black w-full h-32 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
              defaultValue={patientDetails.about}
              placeholder="Tell us about yourself..."
            />
          </CardContent>
        </Card>
      </div>

      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery 
          items={[]}
          bend={3} 
          textColor="bg-primary" 
          borderRadius={0.05} 
        />
      </div>
    </div>
  )
}

