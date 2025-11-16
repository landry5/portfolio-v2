import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <>
      <div className="space-y-3" id="#about">
        <h2 className="text-gray-white text-2xl">About</h2>
        <Card className="p-6 bg-card border-card-border">
          <h3 className="mb-3 font-semibold">$ cat about.txt</h3>
          <div className="text-gray-white">
            <ul className="flex flex-col ml-5">
              <li>I'm a software engineer specializing in backend development with mainly Java and Spring Boot.</li>
              <li>With a BSc (Hons) in Computer Science from the University of Brighton,</li> 
              <li>I build scalable, cloud ready applications that solve real world problems.</li>
              <li>Beyond the JVM, I'm drawn to systems programming and exploring low level concepts with C++ and Rust.</li>


            </ul>
          </div>
        </Card>
      </div>
    </>
  )
}
