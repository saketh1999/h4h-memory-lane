import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
interface Contact {
  id: string
  name: string
  relation: string
  phone: string
  email: string
  profilePicture: string
}
export default function ContactsPage() {
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Mary Doe",
      relation: "Daughter",
      phone: "555-1234",
      email: "mary@example.com",
      profilePicture: "/images/Mary.png"
    },
    {
      id: "2",
      name: "John Doe",
      relation: "Husband",
      phone: "555-5678",
      email: "john@example.com",
      profilePicture: "/images/John.png",
    },
    {
      id: "3",
      name: "Dr. Emily Brown",
      relation: "Doctor",
      phone: "555-9876",
      email: "dr.brown@example.com",
      profilePicture: "/images/DrBrown.jpg",
    },
    {
      id: "4",
      name: "Sarah Johnson",
      relation: "Caregiver",
      phone: "555-4321",
      email: "sarah@example.com",
      profilePicture: "/images/Caregiver.jpg",
    },
    {
      id: "5",
      name: "Michael Chen",
      relation: "Physical Therapist",
      phone: "555-8765",
      email: "michael@example.com",
      profilePicture: "/images/Nurse.jpg",
    },
    {
      id: "6",
      name: "Lisa Anderson",
      relation: "Nurse",
      phone: "555-2468",
      email: "lisa@example.com",
      profilePicture: "/images/Nurse2.jpg",
    }
  ]
  return (
    <div className="container mx-auto py-8 px-4 bg-[#F8F4EB] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <Card key={contact.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <Avatar className="h-16 w-16 border-2 border-primary/10">
                <AvatarImage src={contact.profilePicture} alt={contact.name} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {contact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl text-primary">{contact.name}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{contact.relation}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
              <CardTitle className="text-xl font-semibold text-gray-800">Contact Information</CardTitle>
                <p className="text-primary foreground flex items-center text-800">
                  <Phone className="mr-2 h-4 w-4 text-primary" />
                  {contact.phone}
                </p>
                <p className="text-primary foreground flex items-center text- grey -800">
                  <svg className="mr-2 h-4 w-4 text- xl text-primary foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {contact.email}
                </p>
                <Button className="w-full mt-4 hover:bg-primary/90">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}