import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto max-w-none -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
        <div className="w-full max-w-4xl space-y-6 bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
          <Card className="w-full bg-white bg-opacity-90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-4xl font-bold">Welcome to Memory Lane</CardTitle>
              <CardDescription className="text-xl">Your personal journey through cherished memories</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Memory Lane is designed to help you reconnect with your past and stay connected with your loved ones.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/who-am-i">
                <Button size="lg">Start Your Journey</Button>
              </Link>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white bg-opacity-90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Who Am I</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Rediscover yourself and important details about your life.</p>
              </CardContent>
              <CardFooter>
                <Link href="/who-am-i">
                  <Button>Learn More</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white bg-opacity-90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Memories</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore your past experiences and cherished moments.</p>
              </CardContent>
              <CardFooter>
                <Link href="/memories">
                  <Button>View Memories</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-white bg-opacity-90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Stay connected with your loved ones and caregivers.</p>
              </CardContent>
              <CardFooter>
                <Link href="/contacts">
                  <Button>See Contacts</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

