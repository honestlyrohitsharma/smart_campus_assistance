import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Creators Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Creators</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium">Rohit Sharma</p>
                <div className="flex items-center text-sm mt-1">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:rohitrnps@gmail.com">rohitrnps@gmail.com</a>
                </div>
                <div className="flex items-center text-sm mt-1">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+917004329163">7004329163</a>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-medium">Shreya Ranjan</p>
                <div className="flex items-center text-sm mt-1">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:shreyaranjan9431@gmail.com">shreyaranjan9431@gmail.com</a>
                </div>
                <div className="flex items-center text-sm mt-1">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+918294813136">8294813136</a>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-medium">Soukarsha Dutta</p>
                <div className="flex items-center text-sm mt-1">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+919477494999">9477494999</a>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-medium">Sk Sania Aktari</p>
                <div className="flex items-center text-sm mt-1">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+919832006373">9832006373</a>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-medium">Sania Gayen</p>
                <div className="flex items-center text-sm mt-1">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+917029953327">7029953327</a>
                </div>
              </div>
            </div>
          </div>

          {/* College Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">College Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  Swami Vivekananda Institute of Science & Technology
                  <br />
                  Dakshin Gobindapur
                  <br />
                  Sonarpur, Kolkata 700 145,
                  <br />
                  INDIA
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <a href="mailto:info@svist.org" className="text-sm">
                  info@svist.org
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm">+91 9831084446, +91 9434360673, +91 33 2437-9913</p>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm">10:00 am – 6:00 pm</p>
              </div>
            </div>
          </div>

          {/* College Logo */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HIW4HplHUtM6q9bFPoKjcDVUDhwFfk.png"
              alt="Swami Vivekananda Institute Logo"
              className="h-32 w-32 mb-4"
            />
            <p className="text-center text-sm">Driven by his mission</p>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <h3 className="text-xl font-bold mb-4 text-center">Campus Video</h3>
          <div className="aspect-video w-full max-w-3xl mx-auto">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/WaB_8hfwPL8?si=lseg3BERnIYm8v3o"
              title="Campus Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm">
          <p>© {new Date().getFullYear()} Smart Campus Assistant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
