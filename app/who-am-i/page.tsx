"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import CircularGallery from '@/components/CircularGallery'
import { IoCloudyNight } from "react-icons/io5";
import { db } from '@/app/api/memories/firebase'
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore"
import { useState,useEffect } from "react"
import { FirebaseError } from "firebase/app"
import { Loader2 } from "lucide-react";

interface PatientDetails {
  id: string
  name: string
  age: number
  diagnosis: string
  emergencyContact:string 
  emergencyPhone: string
  medications: string[]
  allergies: string[]
  profilePicture: string
  createdAt: string
  about: string
}

export default function WhoAmIPage() {
  const [patientData, setPatientData] = useState<PatientDetails | null>(null)
  const [isLoading, setisLoading] = useState(true)
  const [error, setError] = useState<string | null> (null)

  useEffect(() => {
    const fetchPatientData = async () => {
      try{
        const patientRef = doc(db, 'patients', '1')
        const patientSnap = await getDoc(patientRef)

        if (patientSnap.exists()){
          const data = patientSnap.data() as PatientDetails
          setPatientData(patientSnap.data() as PatientDetails)
        } else{
          console.log("No patient document found")
          setError("No patient data found")
        }
      } catch (err){
        console.error("Error fetching patient data:", err)
        setError("No patient data found")
        console.error("Error fectching patient data:", err)
      } finally{
        setisLoading(false)
      }
    }
    fetchPatientData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F8F4EB]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  // Show error state
  if (error || !patientData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F8F4EB]">
        <Card className="p-6">
          <CardTitle className="text-red-500">{error || "No data available"}</CardTitle>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6 bg-[#F8F4EB] min-h-screen p-6">

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4 ring-4 ring-primary/10">
              <AvatarImage src={patientData.profilePicture} alt={patientData.name} />
              <AvatarFallback className="text-2xl">
                {patientData.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-bold text-gray-800">{patientData.name}</CardTitle>
            <p className="text-lg text-muted-foreground">Age: {patientData.age}</p>
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
                {patientData.diagnosis}
              </Badge>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">Medications</h3>
              <div className="flex flex-wrap gap-2">
                {patientData.medications.map((med, index) => (
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
                {patientData.allergies.map((allergy, index) => (
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
              defaultValue={patientData.about}
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
